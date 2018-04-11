# @nglogger/raven

[![Linux Build][travis-image]][travis-url]
[![Test Coverage][coveralls-image]][coveralls-url]
[![Commitizen friendly][commitizen-image]][commitizen-url]
[![NPM version][npm-v-image]][npm-url]
[![NPM Downloads][npm-dm-image]][npm-url]


Raven (sentry.io) transport for [@nglogger][nglogger-url]


--------------------------------------------------------------------------------

## Installation

```sh
$ npm install --save @nglogger/core @nglogger/raven
# Or with yarn
$ yarn add @nglogger/core @nglogger/raven
```


--------------------------------------------------------------------------------

## Usage

```ts
'use strict';
import { NgModule } from '@angular/core';

import * as Raven from 'raven-js';

import { LoggerModule } from '@nglogger/core';
import { RavenTransportModule, RavenTransport } from '@nglogger/raven';


@NgModule({
  imports: [
    RavenTransportModule.forRoot(Raven),
    LoggerModule.forRoot([
      RavenTransport
    ])
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
```

--------------------------------------------------------------------------------

## Build

```sh
$ npm install
$ # or
$ yarn
$
$ npm run build
```


--------------------------------------------------------------------------------

## Test

```sh
$ npm run test
```


--------------------------------------------------------------------------------

## Contributing

1. Fork it (<https://github.com/nglogger/raven/fork>)
2. Create your feature branch (`git checkout -b feature/<feature_name>`)
3. Commit your changes (`git commit -am '<type>(<scope>): added some feature'`)
4. Push to the branch (`git push origin feature/<feature_name>`)
5. Create a new Pull Request


--------------------------------------------------------------------------------

## Contributors

- [SuperPaintman](https://github.com/SuperPaintman) SuperPaintman - creator, maintainer


--------------------------------------------------------------------------------

## Changelog
[Changelog][changelog-url]


--------------------------------------------------------------------------------

## License

[MIT][license-url]


[license-url]: https://raw.githubusercontent.com/nglogger/raven/master/LICENSE
[changelog-url]: https://raw.githubusercontent.com/nglogger/raven/master/CHANGELOG.md
[npm-url]: https://www.npmjs.com/package/@nglogger/raven
[nglogger-url]: https://github.com/nglogger/core
[npm-v-image]: https://img.shields.io/npm/v/@nglogger/raven.svg
[npm-dm-image]: https://img.shields.io/npm/dm/@nglogger/raven.svg
[travis-image]: https://img.shields.io/travis/nglogger/raven/master.svg?label=linux
[travis-url]: https://travis-ci.org/nglogger/raven
[coveralls-image]: https://img.shields.io/coveralls/nglogger/raven/master.svg
[coveralls-url]: https://coveralls.io/r/nglogger/raven?branch=master
[commitizen-image]: https://img.shields.io/badge/commitizen-friendly-brightgreen.svg
[commitizen-url]: https://commitizen.github.io/cz-cli/
