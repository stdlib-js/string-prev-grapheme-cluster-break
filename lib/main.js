/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var isString = require( '@stdlib/assert-is-string' ).isPrimitive;
var isInteger = require( '@stdlib/assert-is-integer' );
var codePointAt = require( '@stdlib/string-code-point-at' );
var hasUTF16SurrogatePairAt = require( '@stdlib/assert-has-utf16-surrogate-pair-at' );
var grapheme = require( '@stdlib/string-tools-grapheme-cluster-break' );
var format = require( '@stdlib/string-format' );


// VARIABLES //

var breakType = grapheme.breakType;
var breakProperty = grapheme.breakProperty;
var emojiProperty = grapheme.emojiProperty;


// MAIN //

/**
* Returns the previous extended grapheme cluster break in a string before a specified position.
*
* @param {string} str - input string
* @param {integer} [fromIndex=str.length-1] - position
* @throws {TypeError} first argument must be a string
* @throws {TypeError} second argument must be an integer
* @returns {NonNegativeInteger} previous grapheme break position
*
* @example
* var out = prevGraphemeClusterBreak( 'last man standing', 4 );
* // returns 3
*
* @example
* var out = prevGraphemeClusterBreak( 'presidential election', 8 );
* // returns 7
*
* @example
* var out = prevGraphemeClusterBreak( 'अनुच्छेद', 2 );
* // returns 0
*
* @example
* var out = prevGraphemeClusterBreak( '🌷', 1 );
* // returns -1
*/
function prevGraphemeClusterBreak( str, fromIndex ) {
	var breaks;
	var emoji;
	var ans;
	var len;
	var idx;
	var cp;
	var i;

	if ( !isString( str ) ) {
		throw new TypeError( format( 'invalid argument. First argument must be a string. Value: `%s`.', str ) );
	}
	len = str.length;
	if ( arguments.length > 1 ) {
		if ( !isInteger( fromIndex ) ) {
			throw new TypeError( format( 'invalid argument. Second argument must be an integer. Value: `%s`.', fromIndex ) );
		}
		idx = fromIndex;
	} else {
		idx = len - 1;
	}
	if ( len === 0 || idx <= 0 ) {
		return -1;
	}
	if ( idx >= len ) {
		idx = len - 1;
	}

	// Initialize caches for storing grapheme break and emoji properties:
	breaks = [];
	emoji = [];

	// Get the code point for the starting index:
	cp = codePointAt( str, 0 );

	// Get the corresponding grapheme break and emoji properties:
	breaks.push( breakProperty( cp ) );
	emoji.push( emojiProperty( cp ) );

	ans = -1;
	for ( i = 1; i <= idx; i++ ) {
		// If the current character is part of a surrogate pair, move along...
		if ( hasUTF16SurrogatePairAt( str, i-1 ) ) {
			ans = i-2;
			breaks.length = 0;
			emoji.length = 0;
			continue;
		}
		cp = codePointAt( str, i );

		// Get the corresponding grapheme break and emoji properties:
		breaks.push( breakProperty( cp ) );
		emoji.push( emojiProperty( cp ) );

		// Determine if we've encountered a grapheme cluster break...
		if ( breakType( breaks, emoji ) > 0 ) {
			ans = i-1;
			breaks.length = 0;
			emoji.length = 0;
			continue;
		}
	}
	return ans;
}


// EXPORTS //

module.exports = prevGraphemeClusterBreak;
