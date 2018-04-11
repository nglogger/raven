'use strict';
/* Imports */
import { ModuleWithProviders, NgModule } from '@angular/core';

import * as Raven from 'raven-js';

import { RAVEN, RavenTransport } from './raven-transport.service';


@NgModule({
  providers: [
    RavenTransport,
    {
      provide: RAVEN,
      useValue: null
    }
  ]
})
export class RavenTransportModule { // tslint:disable-line:no-unnecessary-class
  static forRoot(raven: Raven.RavenStatic): ModuleWithProviders {
    return {
      ngModule: RavenTransportModule,
      providers: [
        RavenTransport,
        {
          provide: RAVEN,
          useValue: raven
        }
      ]
    };
  }
}
