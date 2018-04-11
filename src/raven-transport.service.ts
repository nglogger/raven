'use strict';
/* Imports */
import { Inject, Injectable, InjectionToken } from '@angular/core';

import * as Raven from 'raven-js';

import { Level, Meta, Scope, Transport } from '@nglogger/core';


/* Constants */
export const RAVEN = new InjectionToken<Raven.RavenStatic>('raven');


@Injectable()
export class RavenTransport implements Transport {
  constructor(
    @Inject(RAVEN) private raven: Raven.RavenStatic
  ) { }

  log(level: Level, scope: Scope, subject: string, meta?: Meta): void {
    const isError = meta instanceof Error && meta.stack !== undefined;
    const options: Raven.RavenOptions = {
      logger: 'nglogger',
      level: this._getRavenLevel(level),
      tags: {
        scope
      }
    };

    if (isError) {
      options.extra = {
        subject
      };
    } else {
      options.extra = meta;
    }

    if (isError) {
      this.raven.captureException(meta as Error, options);
    } else {
      this.raven.captureMessage(subject, options);
    }
  }

  // tslint:disable-next-line:prefer-function-over-method
  private _getRavenLevel(level: Level): Raven.LogLevel {
    switch (level) {
      case 'fatal':     return 'critical';
      case 'error':     return 'error';
      case 'warn':      return 'warning';
      case 'info':      return 'info';
      case 'verbose':   return 'log';
      case 'trace':     return 'log';
      case 'debug':     return 'log';
      default:          return 'log';
    }
  }
}
