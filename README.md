<!--

@license Apache-2.0

Copyright (c) 2021 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# prevGraphemeClusterBreak

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Return the previous extended grapheme cluster break in a string before a specified position.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="installation">

## Installation

```bash
npm install @stdlib/string-prev-grapheme-cluster-break
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm` branch][esm-url].
-   If you are using Deno, visit the [`deno` branch][deno-url].
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd` branch][umd-url].
-   To use as a general utility for the command line, install the corresponding [CLI package][cli-section] globally.

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

</section>

<section class="usage">

## Usage

```javascript
var prevGraphemeClusterBreak = require( '@stdlib/string-prev-grapheme-cluster-break' );
```

#### prevGraphemeClusterBreak( string\[, fromIndex] )

Returns the previous extended grapheme cluster break in a string before a specified position.

```javascript
var out = prevGraphemeClusterBreak( 'last man standing' );
// returns 15
```

By default, the last extended grapheme cluster break in the string is returned. For the previous extended grapheme cluster break before a specified position in the string, provide a `fromIndex`.

```javascript
var out = prevGraphemeClusterBreak( 'last man standing', 4 );
// returns 3
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   If `string` is an empty string, the function returns `-1` irrespective of `fromIndex`.
-   If there is no extended grapheme cluster break before `fromIndex`, the function returns `-1`.
-   Note that `fromIndex` does **not** refer to a visual character position, but to an index in the ordered sequence of [UTF-16][utf-16] code units.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var prevGraphemeClusterBreak = require( '@stdlib/string-prev-grapheme-cluster-break' );

console.log( prevGraphemeClusterBreak( 'last man standing', 4 ) );
// => 3

console.log( prevGraphemeClusterBreak( 'presidential election', 8 ) );
// => 7

console.log( prevGraphemeClusterBreak( 'अनुच्छेद', 2 ) );
// => 0

console.log( prevGraphemeClusterBreak( '🌷', 1 ) );
// => -1
```

</section>

<!-- /.examples -->

<!-- Section for describing a command-line interface. -->

* * *

<section class="cli">

## CLI

<section class="installation">

## Installation

To use as a general utility, install the CLI package globally

```bash
npm install -g @stdlib/string-prev-grapheme-cluster-break-cli
```

</section>
<!-- CLI usage documentation. -->


<section class="usage">

### Usage

```text
Usage: prev-grapheme-cluster-break [options] [<string>]

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
         --fromIndex index     Position in string. Default: string.length-1.
```

</section>

<!-- /.usage -->

<!-- CLI usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- CLI usage examples. -->

<section class="examples">

### Examples

```bash
$ prev-grapheme-cluster-break --fromIndex=2 अनुच्छेद
0
```

To use as a [standard stream][standard-streams],

```bash
$ echo -n 'अनुच्छेद' | prev-grapheme-cluster-break --fromIndex=2
0
```

</section>

<!-- /.examples -->

</section>

<!-- /.cli -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/string-prev-grapheme-cluster-break.svg
[npm-url]: https://npmjs.org/package/@stdlib/string-prev-grapheme-cluster-break

[test-image]: https://github.com/stdlib-js/string-prev-grapheme-cluster-break/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/string-prev-grapheme-cluster-break/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/string-prev-grapheme-cluster-break/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/string-prev-grapheme-cluster-break?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/string-prev-grapheme-cluster-break.svg
[dependencies-url]: https://david-dm.org/stdlib-js/string-prev-grapheme-cluster-break/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[cli-section]: https://github.com/stdlib-js/string-prev-grapheme-cluster-break#cli
[cli-url]: https://github.com/stdlib-js/string-prev-grapheme-cluster-break/tree/cli
[@stdlib/string-prev-grapheme-cluster-break]: https://github.com/stdlib-js/string-prev-grapheme-cluster-break/tree/main

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/string-prev-grapheme-cluster-break/tree/deno
[umd-url]: https://github.com/stdlib-js/string-prev-grapheme-cluster-break/tree/umd
[esm-url]: https://github.com/stdlib-js/string-prev-grapheme-cluster-break/tree/esm
[branches-url]: https://github.com/stdlib-js/string-prev-grapheme-cluster-break/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/string-prev-grapheme-cluster-break/main/LICENSE

[standard-streams]: https://en.wikipedia.org/wiki/Standard_streams

[utf-16]: https://en.wikipedia.org/wiki/UTF-16

</section>

<!-- /.links -->
