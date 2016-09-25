/*!
 * jQuery JavaScript Library v1.6.1
 * http://jquery.com/
 *
 * Copyright 2011, John Resig
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 * Copyright 2011, The Dojo Foundation
 * Released under the MIT, BSD, and GPL Licenses.
 *
 * Date: Thu May 12 15:04:36 2011 -0400
 */
(function( window, undefined ) {

// Use the correct document accordingly with window argument (sandbox)
var document = window.document,
	navigator = window.navigator,
	location = window.location;
var jQuery = (function() {

// Define a local copy of jQuery
var jQuery = function( selector, context ) {
		// The jQuery object is actually just the init constructor 'enhanced'
		return new jQuery.fn.init( selector, context, rootjQuery );
	},

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$,

	// A central reference to the root jQuery(document)
	rootjQuery,

	// A simple way to check for HTML strings or ID strings
	// (both of which we optimize for)
	quickExpr = /^(?:[^<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,

	// Check if a string has a non-whitespace character in it
	rnotwhite = /\S/,

	// Used for trimming whitespace
	trimLeft = /^\s+/,
	trimRight = /\s+$/,

	// Check for digits
	rdigit = /\d/,

	// Match a standalone tag
	rsingleTag = /^<(\w+)\s*\/?>(?:<\/\1>)?$/,

	// JSON RegExp
	rvalidchars = /^[\],:{}\s]*$/,
	rvalidescape = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
	rvalidtokens = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
	rvalidbraces = /(?:^|:|,)(?:\s*\[)+/g,

	// Useragent RegExp
	rwebkit = /(webkit)[ \/]([\w.]+)/,
	ropera = /(opera)(?:.*version)?[ \/]([\w.]+)/,
	rmsie = /(msie) ([\w.]+)/,
	rmozilla = /(mozilla)(?:.*? rv:([\w.]+))?/,

	// Keep a UserAgent string for use with jQuery.browser
	userAgent = navigator.userAgent,

	// For matching the engine and version of the browser
	browserMatch,

	// The deferred used on DOM ready
	readyList,

	// The ready event handler
	DOMContentLoaded,

	// Save a reference to some core methods
	toString = Object.prototype.toString,
	hasOwn = Object.prototype.hasOwnProperty,
	push = Array.prototype.push,
	slice = Array.prototype.slice,
	trim = String.prototype.trim,
	indexOf = Array.prototype.indexOf,

	// [[Class]] -> type pairs
	class2type = {};

jQuery.fn = jQuery.prototype = {
	constructor: jQuery,
	init: function( selector, context, rootjQuery ) {
		var match, elem, ret, doc;

		// Handle $(""), $(null), or $(undefined)
		if ( !selector ) {
			return this;
		}

		// Handle $(DOMElement)
		if ( selector.nodeType ) {
			this.context = this[0] = selector;
			this.length = 1;
			return this;
		}

		// The body element only exists once, optimize finding it
		if ( selector === "body" && !context && document.body ) {
			this.context = document;
			this[0] = document.body;
			this.selector = selector;
			this.length = 1;
			return this;
		}

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			// Are we dealing with HTML string or an ID?
			if ( selector.charAt(0) === "<" && selector.charAt( selector.length - 1 ) === ">" && selector.length >= 3 ) {
				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = quickExpr.exec( selector );
			}

			// Verify a match, and that no context was specified for #id
			if ( match && (match[1] || !context) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[1] ) {
					context = context instanceof jQuery ? context[0] : context;
					doc = (context ? context.ownerDocument || context : document);

					// If a single string is passed in and it's a single tag
					// just do a createElement and skip the rest
					ret = rsingleTag.exec( selector );

					if ( ret ) {
						if ( jQuery.isPlainObject( context ) ) {
							selector = [ document.createElement( ret[1] ) ];
							jQuery.fn.attr.call( selector, context, true );

						} else {
							selector = [ doc.createElement( ret[1] ) ];
						}

					} else {
						ret = jQuery.buildFragment( [ match[1] ], [ doc ] );
						selector = (ret.cacheable ? jQuery.clone(ret.fragment) : ret.fragment).childNodes;
					}

					return jQuery.merge( this, selector );

				// HANDLE: $("#id")
				} else {
					elem = document.getElementById( match[2] );

					// Check parentNode to catch when Blackberry 4.6 returns
					// nodes that are no longer in the document #6963
					if ( elem && elem.parentNode ) {
						// Handle the case where IE and Opera return items
						// by name instead of ID
						if ( elem.id !== match[2] ) {
							return rootjQuery.find( selector );
						}

						// Otherwise, we inject the element directly into the jQuery object
						this.length = 1;
						this[0] = elem;
					}

					this.context = document;
					this.selector = selector;
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return (context || rootjQuery).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( jQuery.isFunction( selector ) ) {
			return rootjQuery.ready( selector );
		}

		if (selector.selector !== undefined) {
			this.selector = selector.selector;
			this.context = selector.context;
		}

		return jQuery.makeArray( selector, this );
	},

	// Start with an empty selector
	selector: "",

	// The current version of jQuery being used
	jquery: "1.6.1",

	// The default length of a jQuery object is 0
	length: 0,

	// The number of elements contained in the matched element set
	size: function() {
		return this.length;
	},

	toArray: function() {
		return slice.call( this, 0 );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {
		return num == null ?

			// Return a 'clean' array
			this.toArray() :

			// Return just the object
			( num < 0 ? this[ this.length + num ] : this[ num ] );
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems, name, selector ) {
		// Build a new jQuery matched element set
		var ret = this.constructor();

		if ( jQuery.isArray( elems ) ) {
			push.apply( ret, elems );

		} else {
			jQuery.merge( ret, elems );
		}

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;

		ret.context = this.context;

		if ( name === "find" ) {
			ret.selector = this.selector + (this.selector ? " " : "") + selector;
		} else if ( name ) {
			ret.selector = this.selector + "." + name + "(" + selector + ")";
		}

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	// (You can seed the arguments with an array of args, but this is
	// only used internally.)
	each: function( callback, args ) {
		return jQuery.each( this, callback, args );
	},

	ready: function( fn ) {
		// Attach the listeners
		jQuery.bindReady();

		// Add the callback
		readyList.done( fn );

		return this;
	},

	eq: function( i ) {
		return i === -1 ?
			this.slice( i ) :
			this.slice( i, +i + 1 );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ),
			"slice", slice.call(arguments).join(",") );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map(this, function( elem, i ) {
			return callback.call( elem, i, elem );
		}));
	},

	end: function() {
		return this.prevObject || this.constructor(null);
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: [].sort,
	splice: [].splice
};

// Give the init function the jQuery prototype for later instantiation
jQuery.fn.init.prototype = jQuery.fn;

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[0] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;
		target = arguments[1] || {};
		// skip the boolean and the target
		i = 2;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !jQuery.isFunction(target) ) {
		target = {};
	}

	// extend jQuery itself if only one argument is passed
	if ( length === i ) {
		target = this;
		--i;
	}

	for ( ; i < length; i++ ) {
		// Only deal with non-null/undefined values
		if ( (options = arguments[ i ]) != null ) {
			// Extend the base object
			for ( name in options ) {
				src = target[ name ];
				copy = options[ name ];

				// Prevent never-ending loop
				if ( target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy)) ) ) {
					if ( copyIsArray ) {
						copyIsArray = false;
						clone = src && jQuery.isArray(src) ? src : [];

					} else {
						clone = src && jQuery.isPlainObject(src) ? src : {};
					}

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend({
	noConflict: function( deep ) {
		if ( window.$ === jQuery ) {
			window.$ = _$;
		}

		if ( deep && window.jQuery === jQuery ) {
			window.jQuery = _jQuery;
		}

		return jQuery;
	},

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Hold (or release) the ready event
	holdReady: function( hold ) {
		if ( hold ) {
			jQuery.readyWait++;
		} else {
			jQuery.ready( true );
		}
	},

	// Handle when the DOM is ready
	ready: function( wait ) {
		// Either a released hold or an DOMready/load event and not yet ready
		if ( (wait === true && !--jQuery.readyWait) || (wait !== true && !jQuery.isReady) ) {
			// Make sure body exists, at least, in case IE gets a little overzealous (ticket #5443).
			if ( !document.body ) {
				return setTimeout( jQuery.ready, 1 );
			}

			// Remember that the DOM is ready
			jQuery.isReady = true;

			// If a normal DOM Ready event fired, decrement, and wait if need be
			if ( wait !== true && --jQuery.readyWait > 0 ) {
				return;
			}

			// If there are functions bound, to execute
			readyList.resolveWith( document, [ jQuery ] );

			// Trigger any bound ready events
			if ( jQuery.fn.trigger ) {
				jQuery( document ).trigger( "ready" ).unbind( "ready" );
			}
		}
	},

	bindReady: function() {
		if ( readyList ) {
			return;
		}

		readyList = jQuery._Deferred();

		// Catch cases where $(document).ready() is called after the
		// browser event has already occurred.
		if ( document.readyState === "complete" ) {
			// Handle it asynchronously to allow scripts the opportunity to delay ready
			return setTimeout( jQuery.ready, 1 );
		}

		// Mozilla, Opera and webkit nightlies currently support this event
		if ( document.addEventListener ) {
			// Use the handy event callback
			document.addEventListener( "DOMContentLoaded", DOMContentLoaded, false );

			// A fallback to window.onload, that will always work
			window.addEventListener( "load", jQuery.ready, false );

		// If IE event model is used
		} else if ( document.attachEvent ) {
			// ensure firing before onload,
			// maybe late but safe also for iframes
			document.attachEvent( "onreadystatechange", DOMContentLoaded );

			// A fallback to window.onload, that will always work
			window.attachEvent( "onload", jQuery.ready );

			// If IE and not a frame
			// continually check to see if the document is ready
			var toplevel = false;

			try {
				toplevel = window.frameElement == null;
			} catch(e) {}

			if ( document.documentElement.doScroll && toplevel ) {
				doScrollCheck();
			}
		}
	},

	// See test/unit/core.js for details concerning isFunction.
	// Since version 1.3, DOM methods and functions like alert
	// aren't supported. They return false on IE (#2968).
	isFunction: function( obj ) {
		return jQuery.type(obj) === "function";
	},

	isArray: Array.isArray || function( obj ) {
		return jQuery.type(obj) === "array";
	},

	// A crude way of determining if an object is a window
	isWindow: function( obj ) {
		return obj && typeof obj === "object" && "setInterval" in obj;
	},

	isNaN: function( obj ) {
		return obj == null || !rdigit.test( obj ) || isNaN( obj );
	},

	type: function( obj ) {
		return obj == null ?
			String( obj ) :
			class2type[ toString.call(obj) ] || "object";
	},

	isPlainObject: function( obj ) {
		// Must be an Object.
		// Because of IE, we also have to check the presence of the constructor property.
		// Make sure that DOM nodes and window objects don't pass through, as well
		if ( !obj || jQuery.type(obj) !== "object" || obj.nodeType || jQuery.isWindow( obj ) ) {
			return false;
		}

		// Not own constructor property must be Object
		if ( obj.constructor &&
			!hasOwn.call(obj, "constructor") &&
			!hasOwn.call(obj.constructor.prototype, "isPrototypeOf") ) {
			return false;
		}

		// Own properties are enumerated firstly, so to speed up,
		// if last one is own, then all properties are own.

		var key;
		for ( key in obj ) {}

		return key === undefined || hasOwn.call( obj, key );
	},

	isEmptyObject: function( obj ) {
		for ( var name in obj ) {
			return false;
		}
		return true;
	},

	error: function( msg ) {
		throw msg;
	},

	parseJSON: function( data ) {
		if ( typeof data !== "string" || !data ) {
			return null;
		}

		// Make sure leading/trailing whitespace is removed (IE can't handle it)
		data = jQuery.trim( data );

		// Attempt to parse using the native JSON parser first
		if ( window.JSON && window.JSON.parse ) {
			return window.JSON.parse( data );
		}

		// Make sure the incoming data is actual JSON
		// Logic borrowed from http://json.org/json2.js
		if ( rvalidchars.test( data.replace( rvalidescape, "@" )
			.replace( rvalidtokens, "]" )
			.replace( rvalidbraces, "")) ) {

			return (new Function( "return " + data ))();

		}
		jQuery.error( "Invalid JSON: " + data );
	},

	// Cross-browser xml parsing
	// (xml & tmp used internally)
	parseXML: function( data , xml , tmp ) {

		if ( window.DOMParser ) { // Standard
			tmp = new DOMParser();
			xml = tmp.parseFromString( data , "text/xml" );
		} else { // IE
			xml = new ActiveXObject( "Microsoft.XMLDOM" );
			xml.async = "false";
			xml.loadXML( data );
		}

		tmp = xml.documentElement;

		if ( ! tmp || ! tmp.nodeName || tmp.nodeName === "parsererror" ) {
			jQuery.error( "Invalid XML: " + data );
		}

		return xml;
	},

	noop: function() {},

	// Evaluates a script in a global context
	// Workarounds based on findings by Jim Driscoll
	// http://weblogs.java.net/blog/driscoll/archive/2009/09/08/eval-javascript-global-context
	globalEval: function( data ) {
		if ( data && rnotwhite.test( data ) ) {
			// We use execScript on Internet Explorer
			// We use an anonymous function so that context is window
			// rather than jQuery in Firefox
			( window.execScript || function( data ) {
				window[ "eval" ].call( window, data );
			} )( data );
		}
	},

	nodeName: function( elem, name ) {
		return elem.nodeName && elem.nodeName.toUpperCase() === name.toUpperCase();
	},

	// args is for internal usage only
	each: function( object, callback, args ) {
		var name, i = 0,
			length = object.length,
			isObj = length === undefined || jQuery.isFunction( object );

		if ( args ) {
			if ( isObj ) {
				for ( name in object ) {
					if ( callback.apply( object[ name ], args ) === false ) {
						break;
					}
				}
			} else {
				for ( ; i < length; ) {
					if ( callback.apply( object[ i++ ], args ) === false ) {
						break;
					}
				}
			}

		// A special, fast, case for the most common use of each
		} else {
			if ( isObj ) {
				for ( name in object ) {
					if ( callback.call( object[ name ], name, object[ name ] ) === false ) {
						break;
					}
				}
			} else {
				for ( ; i < length; ) {
					if ( callback.call( object[ i ], i, object[ i++ ] ) === false ) {
						break;
					}
				}
			}
		}

		return object;
	},

	// Use native String.trim function wherever possible
	trim: trim ?
		function( text ) {
			return text == null ?
				"" :
				trim.call( text );
		} :

		// Otherwise use our own trimming functionality
		function( text ) {
			return text == null ?
				"" :
				text.toString().replace( trimLeft, "" ).replace( trimRight, "" );
		},

	// results is for internal usage only
	makeArray: function( array, results ) {
		var ret = results || [];

		if ( array != null ) {
			// The window, strings (and functions) also have 'length'
			// The extra typeof function check is to prevent crashes
			// in Safari 2 (See: #3039)
			// Tweaked logic slightly to handle Blackberry 4.7 RegExp issues #6930
			var type = jQuery.type( array );

			if ( array.length == null || type === "string" || type === "function" || type === "regexp" || jQuery.isWindow( array ) ) {
				push.call( ret, array );
			} else {
				jQuery.merge( ret, array );
			}
		}

		return ret;
	},

	inArray: function( elem, array ) {

		if ( indexOf ) {
			return indexOf.call( array, elem );
		}

		for ( var i = 0, length = array.length; i < length; i++ ) {
			if ( array[ i ] === elem ) {
				return i;
			}
		}

		return -1;
	},

	merge: function( first, second ) {
		var i = first.length,
			j = 0;

		if ( typeof second.length === "number" ) {
			for ( var l = second.length; j < l; j++ ) {
				first[ i++ ] = second[ j ];
			}

		} else {
			while ( second[j] !== undefined ) {
				first[ i++ ] = second[ j++ ];
			}
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, inv ) {
		var ret = [], retVal;
		inv = !!inv;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( var i = 0, length = elems.length; i < length; i++ ) {
			retVal = !!callback( elems[ i ], i );
			if ( inv !== retVal ) {
				ret.push( elems[ i ] );
			}
		}

		return ret;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var value, key, ret = [],
			i = 0,
			length = elems.length,
			// jquery objects are treated as arrays
			isArray = elems instanceof jQuery || length !== undefined && typeof length === "number" && ( ( length > 0 && elems[ 0 ] && elems[ length -1 ] ) || length === 0 || jQuery.isArray( elems ) ) ;

		// Go through the array, translating each of the items to their
		if ( isArray ) {
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret[ ret.length ] = value;
				}
			}

		// Go through every key on the object,
		} else {
			for ( key in elems ) {
				value = callback( elems[ key ], key, arg );

				if ( value != null ) {
					ret[ ret.length ] = value;
				}
			}
		}

		// Flatten any nested arrays
		return ret.concat.apply( [], ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// Bind a function to a context, optionally partially applying any
	// arguments.
	proxy: function( fn, context ) {
		if ( typeof context === "string" ) {
			var tmp = fn[ context ];
			context = fn;
			fn = tmp;
		}

		// Quick check to determine if target is callable, in the spec
		// this throws a TypeError, but we will just return undefined.
		if ( !jQuery.isFunction( fn ) ) {
			return undefined;
		}

		// Simulated bind
		var args = slice.call( arguments, 2 ),
			proxy = function() {
				return fn.apply( context, args.concat( slice.call( arguments ) ) );
			};

		// Set the guid of unique handler to the same of original handler, so it can be removed
		proxy.guid = fn.guid = fn.guid || proxy.guid || jQuery.guid++;

		return proxy;
	},

	// Mutifunctional method to get and set values to a collection
	// The value/s can be optionally by executed if its a function
	access: function( elems, key, value, exec, fn, pass ) {
		var length = elems.length;

		// Setting many attributes
		if ( typeof key === "object" ) {
			for ( var k in key ) {
				jQuery.access( elems, k, key[k], exec, fn, value );
			}
			return elems;
		}

		// Setting one attribute
		if ( value !== undefined ) {
			// Optionally, function values get executed if exec is true
			exec = !pass && exec && jQuery.isFunction(value);

			for ( var i = 0; i < length; i++ ) {
				fn( elems[i], key, exec ? value.call( elems[i], i, fn( elems[i], key ) ) : value, pass );
			}

			return elems;
		}

		// Getting an attribute
		return length ? fn( elems[0], key ) : undefined;
	},

	now: function() {
		return (new Date()).getTime();
	},

	// Use of jQuery.browser is frowned upon.
	// More details: http://docs.jquery.com/Utilities/jQuery.browser
	uaMatch: function( ua ) {
		ua = ua.toLowerCase();

		var match = rwebkit.exec( ua ) ||
			ropera.exec( ua ) ||
			rmsie.exec( ua ) ||
			ua.indexOf("compatible") < 0 && rmozilla.exec( ua ) ||
			[];

		return { browser: match[1] || "", version: match[2] || "0" };
	},

	sub: function() {
		function jQuerySub( selector, context ) {
			return new jQuerySub.fn.init( selector, context );
		}
		jQuery.extend( true, jQuerySub, this );
		jQuerySub.superclass = this;
		jQuerySub.fn = jQuerySub.prototype = this();
		jQuerySub.fn.constructor = jQuerySub;
		jQuerySub.sub = this.sub;
		jQuerySub.fn.init = function init( selector, context ) {
			if ( context && context instanceof jQuery && !(context instanceof jQuerySub) ) {
				context = jQuerySub( context );
			}

			return jQuery.fn.init.call( this, selector, context, rootjQuerySub );
		};
		jQuerySub.fn.init.prototype = jQuerySub.fn;
		var rootjQuerySub = jQuerySub(document);
		return jQuerySub;
	},

	browser: {}
});

// Populate the class2type map
jQuery.each("Boolean Number String Function Array Date RegExp Object".split(" "), function(i, name) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
});

browserMatch = jQuery.uaMatch( userAgent );
if ( browserMatch.browser ) {
	jQuery.browser[ browserMatch.browser ] = true;
	jQuery.browser.version = browserMatch.version;
}

// Deprecated, use jQuery.browser.webkit instead
if ( jQuery.browser.webkit ) {
	jQuery.browser.safari = true;
}

// IE doesn't match non-breaking spaces with \s
if ( rnotwhite.test( "\xA0" ) ) {
	trimLeft = /^[\s\xA0]+/;
	trimRight = /[\s\xA0]+$/;
}

// All jQuery objects should point back to these
rootjQuery = jQuery(document);

// Cleanup functions for the document ready method
if ( document.addEventListener ) {
	DOMContentLoaded = function() {
		document.removeEventListener( "DOMContentLoaded", DOMContentLoaded, false );
		jQuery.ready();
	};

} else if ( document.attachEvent ) {
	DOMContentLoaded = function() {
		// Make sure body exists, at least, in case IE gets a little overzealous (ticket #5443).
		if ( document.readyState === "complete" ) {
			document.detachEvent( "onreadystatechange", DOMContentLoaded );
			jQuery.ready();
		}
	};
}

// The DOM ready check for Internet Explorer
function doScrollCheck() {
	if ( jQuery.isReady ) {
		return;
	}

	try {
		// If IE is used, use the trick by Diego Perini
		// http://javascript.nwbox.com/IEContentLoaded/
		document.documentElement.doScroll("left");
	} catch(e) {
		setTimeout( doScrollCheck, 1 );
		return;
	}

	// and execute any waiting functions
	jQuery.ready();
}

// Expose jQuery to the global object
return jQuery;

})();


var // Promise methods
	promiseMethods = "done fail isResolved isRejected promise then always pipe".split( " " ),
	// Static reference to slice
	sliceDeferred = [].slice;

jQuery.extend({
	// Create a simple deferred (one callbacks list)
	_Deferred: function() {
		var // callbacks list
			callbacks = [],
			// stored [ context , args ]
			fired,
			// to avoid firing when already doing so
			firing,
			// flag to know if the deferred has been cancelled
			cancelled,
			// the deferred itself
			deferred  = {

				// done( f1, f2, ...)
				done: function() {
					if ( !cancelled ) {
						var args = arguments,
							i,
							length,
							elem,
							type,
							_fired;
						if ( fired ) {
							_fired = fired;
							fired = 0;
						}
						for ( i = 0, length = args.length; i < length; i++ ) {
							elem = args[ i ];
							type = jQuery.type( elem );
							if ( type === "array" ) {
								deferred.done.apply( deferred, elem );
							} else if ( type === "function" ) {
								callbacks.push( elem );
							}
						}
						if ( _fired ) {
							deferred.resolveWith( _fired[ 0 ], _fired[ 1 ] );
						}
					}
					return this;
				},

				// resolve with given context and args
				resolveWith: function( context, args ) {
					if ( !cancelled && !fired && !firing ) {
						// make sure args are available (#8421)
						args = args || [];
						firing = 1;
						try {
							while( callbacks[ 0 ] ) {
								callbacks.shift().apply( context, args );
							}
						}
						finally {
							fired = [ context, args ];
							firing = 0;
						}
					}
					return this;
				},

				// resolve with this as context and given arguments
				resolve: function() {
					deferred.resolveWith( this, arguments );
					return this;
				},

				// Has this deferred been resolved?
				isResolved: function() {
					return !!( firing || fired );
				},

				// Cancel
				cancel: function() {
					cancelled = 1;
					callbacks = [];
					return this;
				}
			};

		return deferred;
	},

	// Full fledged deferred (two callbacks list)
	Deferred: function( func ) {
		var deferred = jQuery._Deferred(),
			failDeferred = jQuery._Deferred(),
			promise;
		// Add errorDeferred methods, then and promise
		jQuery.extend( deferred, {
			then: function( doneCallbacks, failCallbacks ) {
				deferred.done( doneCallbacks ).fail( failCallbacks );
				return this;
			},
			always: function() {
				return deferred.done.apply( deferred, arguments ).fail.apply( this, arguments );
			},
			fail: failDeferred.done,
			rejectWith: failDeferred.resolveWith,
			reject: failDeferred.resolve,
			isRejected: failDeferred.isResolved,
			pipe: function( fnDone, fnFail ) {
				return jQuery.Deferred(function( newDefer ) {
					jQuery.each( {
						done: [ fnDone, "resolve" ],
						fail: [ fnFail, "reject" ]
					}, function( handler, data ) {
						var fn = data[ 0 ],
							action = data[ 1 ],
							returned;
						if ( jQuery.isFunction( fn ) ) {
							deferred[ handler ](function() {
								returned = fn.apply( this, arguments );
								if ( returned && jQuery.isFunction( returned.promise ) ) {
									returned.promise().then( newDefer.resolve, newDefer.reject );
								} else {
									newDefer[ action ]( returned );
								}
							});
						} else {
							deferred[ handler ]( newDefer[ action ] );
						}
					});
				}).promise();
			},
			// Get a promise for this deferred
			// If obj is provided, the promise aspect is added to the object
			promise: function( obj ) {
				if ( obj == null ) {
					if ( promise ) {
						return promise;
					}
					promise = obj = {};
				}
				var i = promiseMethods.length;
				while( i-- ) {
					obj[ promiseMethods[i] ] = deferred[ promiseMethods[i] ];
				}
				return obj;
			}
		});
		// Make sure only one callback list will be used
		deferred.done( failDeferred.cancel ).fail( deferred.cancel );
		// Unexpose cancel
		delete deferred.cancel;
		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}
		return deferred;
	},

	// Deferred helper
	when: function( firstParam ) {
		var args = arguments,
			i = 0,
			length = args.length,
			count = length,
			deferred = length <= 1 && firstParam && jQuery.isFunction( firstParam.promise ) ?
				firstParam :
				jQuery.Deferred();
		function resolveFunc( i ) {
			return function( value ) {
				args[ i ] = arguments.length > 1 ? sliceDeferred.call( arguments, 0 ) : value;
				if ( !( --count ) ) {
					// Strange bug in FF4:
					// Values changed onto the arguments object sometimes end up as undefined values
					// outside the $.when method. Cloning the object into a fresh array solves the issue
					deferred.resolveWith( deferred, sliceDeferred.call( args, 0 ) );
				}
			};
		}
		if ( length > 1 ) {
			for( ; i < length; i++ ) {
				if ( args[ i ] && jQuery.isFunction( args[ i ].promise ) ) {
					args[ i ].promise().then( resolveFunc(i), deferred.reject );
				} else {
					--count;
				}
			}
			if ( !count ) {
				deferred.resolveWith( deferred, args );
			}
		} else if ( deferred !== firstParam ) {
			deferred.resolveWith( deferred, length ? [ firstParam ] : [] );
		}
		return deferred.promise();
	}
});



jQuery.support = (function() {

	var div = document.createElement( "div" ),
		documentElement = document.documentElement,
		all,
		a,
		select,
		opt,
		input,
		marginDiv,
		support,
		fragment,
		body,
		bodyStyle,
		tds,
		events,
		eventName,
		i,
		isSupported;

	// Preliminary tests
	div.setAttribute("className", "t");
	div.innerHTML = "   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>";

	all = div.getElementsByTagName( "*" );
	a = div.getElementsByTagName( "a" )[ 0 ];

	// Can't get basic test support
	if ( !all || !all.length || !a ) {
		return {};
	}

	// First batch of supports tests
	select = document.createElement( "select" );
	opt = select.appendChild( document.createElement("option") );
	input = div.getElementsByTagName( "input" )[ 0 ];

	support = {
		// IE strips leading whitespace when .innerHTML is used
		leadingWhitespace: ( div.firstChild.nodeType === 3 ),

		// Make sure that tbody elements aren't automatically inserted
		// IE will insert them into empty tables
		tbody: !div.getElementsByTagName( "tbody" ).length,

		// Make sure that link elements get serialized correctly by innerHTML
		// This requires a wrapper element in IE
		htmlSerialize: !!div.getElementsByTagName( "link" ).length,

		// Get the style information from getAttribute
		// (IE uses .cssText instead)
		style: /top/.test( a.getAttribute("style") ),

		// Make sure that URLs aren't manipulated
		// (IE normalizes it by default)
		hrefNormalized: ( a.getAttribute( "href" ) === "/a" ),

		// Make sure that element opacity exists
		// (IE uses filter instead)
		// Use a regex to work around a WebKit issue. See #5145
		opacity: /^0.55$/.test( a.style.opacity ),

		// Verify style float existence
		// (IE uses styleFloat instead of cssFloat)
		cssFloat: !!a.style.cssFloat,

		// Make sure that if no value is specified for a checkbox
		// that it defaults to "on".
		// (WebKit defaults to "" instead)
		checkOn: ( input.value === "on" ),

		// Make sure that a selected-by-default option has a working selected property.
		// (WebKit defaults to false instead of true, IE too, if it's in an optgroup)
		optSelected: opt.selected,

		// Test setAttribute on camelCase class. If it works, we need attrFixes when doing get/setAttribute (ie6/7)
		getSetAttribute: div.className !== "t",

		// Will be defined later
		submitBubbles: true,
		changeBubbles: true,
		focusinBubbles: false,
		deleteExpando: true,
		noCloneEvent: true,
		inlineBlockNeedsLayout: false,
		shrinkWrapBlocks: false,
		reliableMarginRight: true
	};

	// Make sure checked status is properly cloned
	input.checked = true;
	support.noCloneChecked = input.cloneNode( true ).checked;

	// Make sure that the options inside disabled selects aren't marked as disabled
	// (WebKit marks them as disabled)
	select.disabled = true;
	support.optDisabled = !opt.disabled;

	// Test to see if it's possible to delete an expando from an element
	// Fails in Internet Explorer
	try {
		delete div.test;
	} catch( e ) {
		support.deleteExpando = false;
	}

	if ( !div.addEventListener && div.attachEvent && div.fireEvent ) {
		div.attachEvent( "onclick", function click() {
			// Cloning a node shouldn't copy over any
			// bound event handlers (IE does this)
			support.noCloneEvent = false;
			div.detachEvent( "onclick", click );
		});
		div.cloneNode( true ).fireEvent( "onclick" );
	}

	// Check if a radio maintains it's value
	// after being appended to the DOM
	input = document.createElement("input");
	input.value = "t";
	input.setAttribute("type", "radio");
	support.radioValue = input.value === "t";

	input.setAttribute("checked", "checked");
	div.appendChild( input );
	fragment = document.createDocumentFragment();
	fragment.appendChild( div.firstChild );

	// WebKit doesn't clone checked state correctly in fragments
	support.checkClone = fragment.cloneNode( true ).cloneNode( true ).lastChild.checked;

	div.innerHTML = "";

	// Figure out if the W3C box model works as expected
	div.style.width = div.style.paddingLeft = "1px";

	// We use our own, invisible, body
	body = document.createElement( "body" );
	bodyStyle = {
		visibility: "hidden",
		width: 0,
		height: 0,
		border: 0,
		margin: 0,
		// Set background to avoid IE crashes when removing (#9028)
		background: "none"
	};
	for ( i in bodyStyle ) {
		body.style[ i ] = bodyStyle[ i ];
	}
	body.appendChild( div );
	documentElement.insertBefore( body, documentElement.firstChild );

	// Check if a disconnected checkbox will retain its checked
	// value of true after appended to the DOM (IE6/7)
	support.appendChecked = input.checked;

	support.boxModel = div.offsetWidth === 2;

	if ( "zoom" in div.style ) {
		// Check if natively block-level elements act like inline-block
		// elements when setting their display to 'inline' and giving
		// them layout
		// (IE < 8 does this)
		div.style.display = "inline";
		div.style.zoom = 1;
		support.inlineBlockNeedsLayout = ( div.offsetWidth === 2 );

		// Check if elements with layout shrink-wrap their children
		// (IE 6 does this)
		div.style.display = "";
		div.innerHTML = "<div style='width:4px;'></div>";
		support.shrinkWrapBlocks = ( div.offsetWidth !== 2 );
	}

	div.innerHTML = "<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>";
	tds = div.getElementsByTagName( "td" );

	// Check if table cells still have offsetWidth/Height when they are set
	// to display:none and there are still other visible table cells in a
	// table row; if so, offsetWidth/Height are not reliable for use when
	// determining if an element has been hidden directly using
	// display:none (it is still safe to use offsets if a parent element is
	// hidden; don safety goggles and see bug #4512 for more information).
	// (only IE 8 fails this test)
	isSupported = ( tds[ 0 ].offsetHeight === 0 );

	tds[ 0 ].style.display = "";
	tds[ 1 ].style.display = "none";

	// Check if empty table cells still have offsetWidth/Height
	// (IE < 8 fail this test)
	support.reliableHiddenOffsets = isSupported && ( tds[ 0 ].offsetHeight === 0 );
	div.innerHTML = "";

	// Check if div with explicit width and no margin-right incorrectly
	// gets computed margin-right based on width of container. For more
	// info see bug #3333
	// Fails in WebKit before Feb 2011 nightlies
	// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
	if ( document.defaultView && document.defaultView.getComputedStyle ) {
		marginDiv = document.createElement( "div" );
		marginDiv.style.width = "0";
		marginDiv.style.marginRight = "0";
		div.appendChild( marginDiv );
		support.reliableMarginRight =
			( parseInt( ( document.defaultView.getComputedStyle( marginDiv, null ) || { marginRight: 0 } ).marginRight, 10 ) || 0 ) === 0;
	}

	// Remove the body element we added
	body.innerHTML = "";
	documentElement.removeChild( body );

	// Technique from Juriy Zaytsev
	// http://thinkweb2.com/projects/prototype/detecting-event-support-without-browser-sniffing/
	// We only care about the case where non-standard event systems
	// are used, namely in IE. Short-circuiting here helps us to
	// avoid an eval call (in setAttribute) which can cause CSP
	// to go haywire. See: https://developer.mozilla.org/en/Security/CSP
	if ( div.attachEvent ) {
		for( i in {
			submit: 1,
			change: 1,
			focusin: 1
		} ) {
			eventName = "on" + i;
			isSupported = ( eventName in div );
			if ( !isSupported ) {
				div.setAttribute( eventName, "return;" );
				isSupported = ( typeof div[ eventName ] === "function" );
			}
			support[ i + "Bubbles" ] = isSupported;
		}
	}

	return support;
})();

// Keep track of boxModel
jQuery.boxModel = jQuery.support.boxModel;




var rbrace = /^(?:\{.*\}|\[.*\])$/,
	rmultiDash = /([a-z])([A-Z])/g;

jQuery.extend({
	cache: {},

	// Please use with caution
	uuid: 0,

	// Unique for each copy of jQuery on the page
	// Non-digits removed to match rinlinejQuery
	expando: "jQuery" + ( jQuery.fn.jquery + Math.random() ).replace( /\D/g, "" ),

	// The following elements throw uncatchable exceptions if you
	// attempt to add expando properties to them.
	noData: {
		"embed": true,
		// Ban all objects except for Flash (which handle expandos)
		"object": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
		"applet": true
	},

	hasData: function( elem ) {
		elem = elem.nodeType ? jQuery.cache[ elem[jQuery.expando] ] : elem[ jQuery.expando ];

		return !!elem && !isEmptyDataObject( elem );
	},

	data: function( elem, name, data, pvt /* Internal Use Only */ ) {
		if ( !jQuery.acceptData( elem ) ) {
			return;
		}

		var internalKey = jQuery.expando, getByName = typeof name === "string", thisCache,

			// We have to handle DOM nodes and JS objects differently because IE6-7
			// can't GC object references properly across the DOM-JS boundary
			isNode = elem.nodeType,

			// Only DOM nodes need the global jQuery cache; JS object data is
			// attached directly to the object so GC can occur automatically
			cache = isNode ? jQuery.cache : elem,

			// Only defining an ID for JS objects if its cache already exists allows
			// the code to shortcut on the same path as a DOM node with no cache
			id = isNode ? elem[ jQuery.expando ] : elem[ jQuery.expando ] && jQuery.expando;

		// Avoid doing any more work than we need to when trying to get data on an
		// object that has no data at all
		if ( (!id || (pvt && id && !cache[ id ][ internalKey ])) && getByName && data === undefined ) {
			return;
		}

		if ( !id ) {
			// Only DOM nodes need a new unique ID for each element since their data
			// ends up in the global cache
			if ( isNode ) {
				elem[ jQuery.expando ] = id = ++jQuery.uuid;
			} else {
				id = jQuery.expando;
			}
		}

		if ( !cache[ id ] ) {
			cache[ id ] = {};

			// TODO: This is a hack for 1.5 ONLY. Avoids exposing jQuery
			// metadata on plain JS objects when the object is serialized using
			// JSON.stringify
			if ( !isNode ) {
				cache[ id ].toJSON = jQuery.noop;
			}
		}

		// An object can be passed to jQuery.data instead of a key/value pair; this gets
		// shallow copied over onto the existing cache
		if ( typeof name === "object" || typeof name === "function" ) {
			if ( pvt ) {
				cache[ id ][ internalKey ] = jQuery.extend(cache[ id ][ internalKey ], name);
			} else {
				cache[ id ] = jQuery.extend(cache[ id ], name);
			}
		}

		thisCache = cache[ id ];

		// Internal jQuery data is stored in a separate object inside the object's data
		// cache in order to avoid key collisions between internal data and user-defined
		// data
		if ( pvt ) {
			if ( !thisCache[ internalKey ] ) {
				thisCache[ internalKey ] = {};
			}

			thisCache = thisCache[ internalKey ];
		}

		if ( data !== undefined ) {
			thisCache[ jQuery.camelCase( name ) ] = data;
		}

		// TODO: This is a hack for 1.5 ONLY. It will be removed in 1.6. Users should
		// not attempt to inspect the internal events object using jQuery.data, as this
		// internal data object is undocumented and subject to change.
		if ( name === "events" && !thisCache[name] ) {
			return thisCache[ internalKey ] && thisCache[ internalKey ].events;
		}

		return getByName ? thisCache[ jQuery.camelCase( name ) ] : thisCache;
	},

	removeData: function( elem, name, pvt /* Internal Use Only */ ) {
		if ( !jQuery.acceptData( elem ) ) {
			return;
		}

		var internalKey = jQuery.expando, isNode = elem.nodeType,

			// See jQuery.data for more information
			cache = isNode ? jQuery.cache : elem,

			// See jQuery.data for more information
			id = isNode ? elem[ jQuery.expando ] : jQuery.expando;

		// If there is already no cache entry for this object, there is no
		// purpose in continuing
		if ( !cache[ id ] ) {
			return;
		}

		if ( name ) {
			var thisCache = pvt ? cache[ id ][ internalKey ] : cache[ id ];

			if ( thisCache ) {
				delete thisCache[ name ];

				// If there is no data left in the cache, we want to continue
				// and let the cache object itself get destroyed
				if ( !isEmptyDataObject(thisCache) ) {
					return;
				}
			}
		}

		// See jQuery.data for more information
		if ( pvt ) {
			delete cache[ id ][ internalKey ];

			// Don't destroy the parent cache unless the internal data object
			// had been the only thing left in it
			if ( !isEmptyDataObject(cache[ id ]) ) {
				return;
			}
		}

		var internalCache = cache[ id ][ internalKey ];

		// Browsers that fail expando deletion also refuse to delete expandos on
		// the window, but it will allow it on all other JS objects; other browsers
		// don't care
		if ( jQuery.support.deleteExpando || cache != window ) {
			delete cache[ id ];
		} else {
			cache[ id ] = null;
		}

		// We destroyed the entire user cache at once because it's faster than
		// iterating through each key, but we need to continue to persist internal
		// data if it existed
		if ( internalCache ) {
			cache[ id ] = {};
			// TODO: This is a hack for 1.5 ONLY. Avoids exposing jQuery
			// metadata on plain JS objects when the object is serialized using
			// JSON.stringify
			if ( !isNode ) {
				cache[ id ].toJSON = jQuery.noop;
			}

			cache[ id ][ internalKey ] = internalCache;

		// Otherwise, we need to eliminate the expando on the node to avoid
		// false lookups in the cache for entries that no longer exist
		} else if ( isNode ) {
			// IE does not allow us to delete expando properties from nodes,
			// nor does it have a removeAttribute function on Document nodes;
			// we must handle all of these cases
			if ( jQuery.support.deleteExpando ) {
				delete elem[ jQuery.expando ];
			} else if ( elem.removeAttribute ) {
				elem.removeAttribute( jQuery.expando );
			} else {
				elem[ jQuery.expando ] = null;
			}
		}
	},

	// For internal use only.
	_data: function( elem, name, data ) {
		return jQuery.data( elem, name, data, true );
	},

	// A method for determining if a DOM node can handle the data expando
	acceptData: function( elem ) {
		if ( elem.nodeName ) {
			var match = jQuery.noData[ elem.nodeName.toLowerCase() ];

			if ( match ) {
				return !(match === true || elem.getAttribute("classid") !== match);
			}
		}

		return true;
	}
});

jQuery.fn.extend({
	data: function( key, value ) {
		var data = null;

		if ( typeof key === "undefined" ) {
			if ( this.length ) {
				data = jQuery.data( this[0] );

				if ( this[0].nodeType === 1 ) {
			    var attr = this[0].attributes, name;
					for ( var i = 0, l = attr.length; i < l; i++ ) {
						name = attr[i].name;

						if ( name.indexOf( "data-" ) === 0 ) {
							name = jQuery.camelCase( name.substring(5) );

							dataAttr( this[0], name, data[ name ] );
						}
					}
				}
			}

			return data;

		} else if ( typeof key === "object" ) {
			return this.each(function() {
				jQuery.data( this, key );
			});
		}

		var parts = key.split(".");
		parts[1] = parts[1] ? "." + parts[1] : "";

		if ( value === undefined ) {
			data = this.triggerHandler("getData" + parts[1] + "!", [parts[0]]);

			// Try to fetch any internally stored data first
			if ( data === undefined && this.length ) {
				data = jQuery.data( this[0], key );
				data = dataAttr( this[0], key, data );
			}

			return data === undefined && parts[1] ?
				this.data( parts[0] ) :
				data;

		} else {
			return this.each(function() {
				var $this = jQuery( this ),
					args = [ parts[0], value ];

				$this.triggerHandler( "setData" + parts[1] + "!", args );
				jQuery.data( this, key, value );
				$this.triggerHandler( "changeData" + parts[1] + "!", args );
			});
		}
	},

	removeData: function( key ) {
		return this.each(function() {
			jQuery.removeData( this, key );
		});
	}
});

function dataAttr( elem, key, data ) {
	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		var name = "data-" + key.replace( rmultiDash, "$1-$2" ).toLowerCase();

		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = data === "true" ? true :
				data === "false" ? false :
				data === "null" ? null :
				!jQuery.isNaN( data ) ? parseFloat( data ) :
					rbrace.test( data ) ? jQuery.parseJSON( data ) :
					data;
			} catch( e ) {}

			// Make sure we set the data so it isn't changed later
			jQuery.data( elem, key, data );

		} else {
			data = undefined;
		}
	}

	return data;
}

// TODO: This is a hack for 1.5 ONLY to allow objects with a single toJSON
// property to be considered empty objects; this property always exists in
// order to make sure JSON.stringify does not expose internal metadata
function isEmptyDataObject( obj ) {
	for ( var name in obj ) {
		if ( name !== "toJSON" ) {
			return false;
		}
	}

	return true;
}




function handleQueueMarkDefer( elem, type, src ) {
	var deferDataKey = type + "defer",
		queueDataKey = type + "queue",
		markDataKey = type + "mark",
		defer = jQuery.data( elem, deferDataKey, undefined, true );
	if ( defer &&
		( src === "queue" || !jQuery.data( elem, queueDataKey, undefined, true ) ) &&
		( src === "mark" || !jQuery.data( elem, markDataKey, undefined, true ) ) ) {
		// Give room for hard-coded callbacks to fire first
		// and eventually mark/queue something else on the element
		setTimeout( function() {
			if ( !jQuery.data( elem, queueDataKey, undefined, true ) &&
				!jQuery.data( elem, markDataKey, undefined, true ) ) {
				jQuery.removeData( elem, deferDataKey, true );
				defer.resolve();
			}
		}, 0 );
	}
}

jQuery.extend({

	_mark: function( elem, type ) {
		if ( elem ) {
			type = (type || "fx") + "mark";
			jQuery.data( elem, type, (jQuery.data(elem,type,undefined,true) || 0) + 1, true );
		}
	},

	_unmark: function( force, elem, type ) {
		if ( force !== true ) {
			type = elem;
			elem = force;
			force = false;
		}
		if ( elem ) {
			type = type || "fx";
			var key = type + "mark",
				count = force ? 0 : ( (jQuery.data( elem, key, undefined, true) || 1 ) - 1 );
			if ( count ) {
				jQuery.data( elem, key, count, true );
			} else {
				jQuery.removeData( elem, key, true );
				handleQueueMarkDefer( elem, type, "mark" );
			}
		}
	},

	queue: function( elem, type, data ) {
		if ( elem ) {
			type = (type || "fx") + "queue";
			var q = jQuery.data( elem, type, undefined, true );
			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !q || jQuery.isArray(data) ) {
					q = jQuery.data( elem, type, jQuery.makeArray(data), true );
				} else {
					q.push( data );
				}
			}
			return q || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			fn = queue.shift(),
			defer;

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
		}

		if ( fn ) {
			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift("inprogress");
			}

			fn.call(elem, function() {
				jQuery.dequeue(elem, type);
			});
		}

		if ( !queue.length ) {
			jQuery.removeData( elem, type + "queue", true );
			handleQueueMarkDefer( elem, type, "queue" );
		}
	}
});

jQuery.fn.extend({
	queue: function( type, data ) {
		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
		}

		if ( data === undefined ) {
			return jQuery.queue( this[0], type );
		}
		return this.each(function() {
			var queue = jQuery.queue( this, type, data );

			if ( type === "fx" && queue[0] !== "inprogress" ) {
				jQuery.dequeue( this, type );
			}
		});
	},
	dequeue: function( type ) {
		return this.each(function() {
			jQuery.dequeue( this, type );
		});
	},
	// Based off of the plugin by Clint Helfers, with permission.
	// http://blindsignals.com/index.php/2009/07/jquery-delay/
	delay: function( time, type ) {
		time = jQuery.fx ? jQuery.fx.speeds[time] || time : time;
		type = type || "fx";

		return this.queue( type, function() {
			var elem = this;
			setTimeout(function() {
				jQuery.dequeue( elem, type );
			}, time );
		});
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},
	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, object ) {
		if ( typeof type !== "string" ) {
			object = type;
			type = undefined;
		}
		type = type || "fx";
		var defer = jQuery.Deferred(),
			elements = this,
			i = elements.length,
			count = 1,
			deferDataKey = type + "defer",
			queueDataKey = type + "queue",
			markDataKey = type + "mark",
			tmp;
		function resolve() {
			if ( !( --count ) ) {
				defer.resolveWith( elements, [ elements ] );
			}
		}
		while( i-- ) {
			if (( tmp = jQuery.data( elements[ i ], deferDataKey, undefined, true ) ||
					( jQuery.data( elements[ i ], queueDataKey, undefined, true ) ||
						jQuery.data( elements[ i ], markDataKey, undefined, true ) ) &&
					jQuery.data( elements[ i ], deferDataKey, jQuery._Deferred(), true ) )) {
				count++;
				tmp.done( resolve );
			}
		}
		resolve();
		return defer.promise();
	}
});




var rclass = /[\n\t\r]/g,
	rspace = /\s+/,
	rreturn = /\r/g,
	rtype = /^(?:button|input)$/i,
	rfocusable = /^(?:button|input|object|select|textarea)$/i,
	rclickable = /^a(?:rea)?$/i,
	rboolean = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
	rinvalidChar = /\:/,
	formHook, boolHook;

jQuery.fn.extend({
	attr: function( name, value ) {
		return jQuery.access( this, name, value, true, jQuery.attr );
	},

	removeAttr: function( name ) {
		return this.each(function() {
			jQuery.removeAttr( this, name );
		});
	},
	
	prop: function( name, value ) {
		return jQuery.access( this, name, value, true, jQuery.prop );
	},
	
	removeProp: function( name ) {
		name = jQuery.propFix[ name ] || name;
		return this.each(function() {
			// try/catch handles cases where IE balks (such as removing a property on window)
			try {
				this[ name ] = undefined;
				delete this[ name ];
			} catch( e ) {}
		});
	},

	addClass: function( value ) {
		if ( jQuery.isFunction( value ) ) {
			return this.each(function(i) {
				var self = jQuery(this);
				self.addClass( value.call(this, i, self.attr("class") || "") );
			});
		}

		if ( value && typeof value === "string" ) {
			var classNames = (value || "").split( rspace );

			for ( var i = 0, l = this.length; i < l; i++ ) {
				var elem = this[i];

				if ( elem.nodeType === 1 ) {
					if ( !elem.className ) {
						elem.className = value;

					} else {
						var className = " " + elem.className + " ",
							setClass = elem.className;

						for ( var c = 0, cl = classNames.length; c < cl; c++ ) {
							if ( className.indexOf( " " + classNames[c] + " " ) < 0 ) {
								setClass += " " + classNames[c];
							}
						}
						elem.className = jQuery.trim( setClass );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		if ( jQuery.isFunction(value) ) {
			return this.each(function(i) {
				var self = jQuery(this);
				self.removeClass( value.call(this, i, self.attr("class")) );
			});
		}

		if ( (value && typeof value === "string") || value === undefined ) {
			var classNames = (value || "").split( rspace );

			for ( var i = 0, l = this.length; i < l; i++ ) {
				var elem = this[i];

				if ( elem.nodeType === 1 && elem.className ) {
					if ( value ) {
						var className = (" " + elem.className + " ").replace(rclass, " ");
						for ( var c = 0, cl = classNames.length; c < cl; c++ ) {
							className = className.replace(" " + classNames[c] + " ", " ");
						}
						elem.className = jQuery.trim( className );

					} else {
						elem.className = "";
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value,
			isBool = typeof stateVal === "boolean";

		if ( jQuery.isFunction( value ) ) {
			return this.each(function(i) {
				var self = jQuery(this);
				self.toggleClass( value.call(this, i, self.attr("class"), stateVal), stateVal );
			});
		}

		return this.each(function() {
			if ( type === "string" ) {
				// toggle individual class names
				var className,
					i = 0,
					self = jQuery( this ),
					state = stateVal,
					classNames = value.split( rspace );

				while ( (className = classNames[ i++ ]) ) {
					// check each className given, space seperated list
					state = isBool ? state : !self.hasClass( className );
					self[ state ? "addClass" : "removeClass" ]( className );
				}

			} else if ( type === "undefined" || type === "boolean" ) {
				if ( this.className ) {
					// store className if set
					jQuery._data( this, "__className__", this.className );
				}

				// toggle whole className
				this.className = this.className || value === false ? "" : jQuery._data( this, "__className__" ) || "";
			}
		});
	},

	hasClass: function( selector ) {
		var className = " " + selector + " ";
		for ( var i = 0, l = this.length; i < l; i++ ) {
			if ( (" " + this[i].className + " ").replace(rclass, " ").indexOf( className ) > -1 ) {
				return true;
			}
		}

		return false;
	},

	val: function( value ) {
		var hooks, ret,
			elem = this[0];
		
		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.nodeName.toLowerCase() ] || jQuery.valHooks[ elem.type ];

				if ( hooks && "get" in hooks && (ret = hooks.get( elem, "value" )) !== undefined ) {
					return ret;
				}

				return (elem.value || "").replace(rreturn, "");
			}

			return undefined;
		}

		var isFunction = jQuery.isFunction( value );

		return this.each(function( i ) {
			var self = jQuery(this), val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( isFunction ) {
				val = value.call( this, i, self.val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";
			} else if ( typeof val === "number" ) {
				val += "";
			} else if ( jQuery.isArray( val ) ) {
				val = jQuery.map(val, function ( value ) {
					return value == null ? "" : value + "";
				});
			}

			hooks = jQuery.valHooks[ this.nodeName.toLowerCase() ] || jQuery.valHooks[ this.type ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !("set" in hooks) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		});
	}
});

jQuery.extend({
	valHooks: {
		option: {
			get: function( elem ) {
				// attributes.value is undefined in Blackberry 4.7 but
				// uses .value. See #6932
				var val = elem.attributes.value;
				return !val || val.specified ? elem.value : elem.text;
			}
		},
		select: {
			get: function( elem ) {
				var value,
					index = elem.selectedIndex,
					values = [],
					options = elem.options,
					one = elem.type === "select-one";

				// Nothing was selected
				if ( index < 0 ) {
					return null;
				}

				// Loop through all the selected options
				for ( var i = one ? index : 0, max = one ? index + 1 : options.length; i < max; i++ ) {
					var option = options[ i ];

					// Don't return options that are disabled or in a disabled optgroup
					if ( option.selected && (jQuery.support.optDisabled ? !option.disabled : option.getAttribute("disabled") === null) &&
							(!option.parentNode.disabled || !jQuery.nodeName( option.parentNode, "optgroup" )) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				// Fixes Bug #2551 -- select.val() broken in IE after form.reset()
				if ( one && !values.length && options.length ) {
					return jQuery( options[ index ] ).val();
				}

				return values;
			},

			set: function( elem, value ) {
				var values = jQuery.makeArray( value );

				jQuery(elem).find("option").each(function() {
					this.selected = jQuery.inArray( jQuery(this).val(), values ) >= 0;
				});

				if ( !values.length ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	},

	attrFn: {
		val: true,
		css: true,
		html: true,
		text: true,
		data: true,
		width: true,
		height: true,
		offset: true
	},
	
	attrFix: {
		// Always normalize to ensure hook usage
		tabindex: "tabIndex"
	},
	
	attr: function( elem, name, value, pass ) {
		var nType = elem.nodeType;
		
		// don't get/set attributes on text, comment and attribute nodes
		if ( !elem || nType === 3 || nType === 8 || nType === 2 ) {
			return undefined;
		}

		if ( pass && name in jQuery.attrFn ) {
			return jQuery( elem )[ name ]( value );
		}

		// Fallback to prop when attributes are not supported
		if ( !("getAttribute" in elem) ) {
			return jQuery.prop( elem, name, value );
		}

		var ret, hooks,
			notxml = nType !== 1 || !jQuery.isXMLDoc( elem );

		// Normalize the name if needed
		name = notxml && jQuery.attrFix[ name ] || name;

		hooks = jQuery.attrHooks[ name ];

		if ( !hooks ) {
			// Use boolHook for boolean attributes
			if ( rboolean.test( name ) &&
				(typeof value === "boolean" || value === undefined || value.toLowerCase() === name.toLowerCase()) ) {

				hooks = boolHook;

			// Use formHook for forms and if the name contains certain characters
			} else if ( formHook && (jQuery.nodeName( elem, "form" ) || rinvalidChar.test( name )) ) {
				hooks = formHook;
			}
		}

		if ( value !== undefined ) {

			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return undefined;

			} else if ( hooks && "set" in hooks && notxml && (ret = hooks.set( elem, value, name )) !== undefined ) {
				return ret;

			} else {
				elem.setAttribute( name, "" + value );
				return value;
			}

		} else if ( hooks && "get" in hooks && notxml ) {
			return hooks.get( elem, name );

		} else {

			ret = elem.getAttribute( name );

			// Non-existent attributes return null, we normalize to undefined
			return ret === null ?
				undefined :
				ret;
		}
	},

	removeAttr: function( elem, name ) {
		var propName;
		if ( elem.nodeType === 1 ) {
			name = jQuery.attrFix[ name ] || name;
		
			if ( jQuery.support.getSetAttribute ) {
				// Use removeAttribute in browsers that support it
				elem.removeAttribute( name );
			} else {
				jQuery.attr( elem, name, "" );
				elem.removeAttributeNode( elem.getAttributeNode( name ) );
			}

			// Set corresponding property to false for boolean attributes
			if ( rboolean.test( name ) && (propName = jQuery.propFix[ name ] || name) in elem ) {
				elem[ propName ] = false;
			}
		}
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				// We can't allow the type property to be changed (since it causes problems in IE)
				if ( rtype.test( elem.nodeName ) && elem.parentNode ) {
					jQuery.error( "type property can't be changed" );
				} else if ( !jQuery.support.radioValue && value === "radio" && jQuery.nodeName(elem, "input") ) {
					// Setting the type on a radio button after the value resets the value in IE6-9
					// Reset value to it's default in case type is set after value
					// This is for element creation
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		},
		tabIndex: {
			get: function( elem ) {
				// elem.tabIndex doesn't always return the correct value when it hasn't been explicitly set
				// http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				var attributeNode = elem.getAttributeNode("tabIndex");

				return attributeNode && attributeNode.specified ?
					parseInt( attributeNode.value, 10 ) :
					rfocusable.test( elem.nodeName ) || rclickable.test( elem.nodeName ) && elem.href ?
						0 :
						undefined;
			}
		}
	},

	propFix: {
		tabindex: "tabIndex",
		readonly: "readOnly",
		"for": "htmlFor",
		"class": "className",
		maxlength: "maxLength",
		cellspacing: "cellSpacing",
		cellpadding: "cellPadding",
		rowspan: "rowSpan",
		colspan: "colSpan",
		usemap: "useMap",
		frameborder: "frameBorder",
		contenteditable: "contentEditable"
	},
	
	prop: function( elem, name, value ) {
		var nType = elem.nodeType;

		// don't get/set properties on text, comment and attribute nodes
		if ( !elem || nType === 3 || nType === 8 || nType === 2 ) {
			return undefined;
		}

		var ret, hooks,
			notxml = nType !== 1 || !jQuery.isXMLDoc( elem );

		// Try to normalize/fix the name
		name = notxml && jQuery.propFix[ name ] || name;
		
		hooks = jQuery.propHooks[ name ];

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks && (ret = hooks.set( elem, value, name )) !== undefined ) {
				return ret;

			} else {
				return (elem[ name ] = value);
			}

		} else {
			if ( hooks && "get" in hooks && (ret = hooks.get( elem, name )) !== undefined ) {
				return ret;

			} else {
				return elem[ name ];
			}
		}
	},
	
	propHooks: {}
});

// Hook for boolean attributes
boolHook = {
	get: function( elem, name ) {
		// Align boolean attributes with corresponding properties
		return elem[ jQuery.propFix[ name ] || name ] ?
			name.toLowerCase() :
			undefined;
	},
	set: function( elem, value, name ) {
		var propName;
		if ( value === false ) {
			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			// value is true since we know at this point it's type boolean and not false
			// Set boolean attributes to the same name and set the DOM property
			propName = jQuery.propFix[ name ] || name;
			if ( propName in elem ) {
				// Only set the IDL specifically if it already exists on the element
				elem[ propName ] = value;
			}

			elem.setAttribute( name, name.toLowerCase() );
		}
		return name;
	}
};

// Use the value property for back compat
// Use the formHook for button elements in IE6/7 (#1954)
jQuery.attrHooks.value = {
	get: function( elem, name ) {
		if ( formHook && jQuery.nodeName( elem, "button" ) ) {
			return formHook.get( elem, name );
		}
		return elem.value;
	},
	set: function( elem, value, name ) {
		if ( formHook && jQuery.nodeName( elem, "button" ) ) {
			return formHook.set( elem, value, name );
		}
		// Does not return so that setAttribute is also used
		elem.value = value;
	}
};

// IE6/7 do not support getting/setting some attributes with get/setAttribute
if ( !jQuery.support.getSetAttribute ) {

	// propFix is more comprehensive and contains all fixes
	jQuery.attrFix = jQuery.propFix;
	
	// Use this for any attribute on a form in IE6/7
	formHook = jQuery.attrHooks.name = jQuery.valHooks.button = {
		get: function( elem, name ) {
			var ret;
			ret = elem.getAttributeNode( name );
			// Return undefined if nodeValue is empty string
			return ret && ret.nodeValue !== "" ?
				ret.nodeValue :
				undefined;
		},
		set: function( elem, value, name ) {
			// Check form objects in IE (multiple bugs related)
			// Only use nodeValue if the attribute node exists on the form
			var ret = elem.getAttributeNode( name );
			if ( ret ) {
				ret.nodeValue = value;
				return value;
			}
		}
	};

	// Set width and height to auto instead of 0 on empty string( Bug #8150 )
	// This is for removals
	jQuery.each([ "width", "height" ], function( i, name ) {
		jQuery.attrHooks[ name ] = jQuery.extend( jQuery.attrHooks[ name ], {
			set: function( elem, value ) {
				if ( value === "" ) {
					elem.setAttribute( name, "auto" );
					return value;
				}
			}
		});
	});
}


// Some attributes require a special call on IE
if ( !jQuery.support.hrefNormalized ) {
	jQuery.each([ "href", "src", "width", "height" ], function( i, name ) {
		jQuery.attrHooks[ name ] = jQuery.extend( jQuery.attrHooks[ name ], {
			get: function( elem ) {
				var ret = elem.getAttribute( name, 2 );
				return ret === null ? undefined : ret;
			}
		});
	});
}

if ( !jQuery.support.style ) {
	jQuery.attrHooks.style = {
		get: function( elem ) {
			// Return undefined in the case of empty string
			// Normalize to lowercase since IE uppercases css property names
			return elem.style.cssText.toLowerCase() || undefined;
		},
		set: function( elem, value ) {
			return (elem.style.cssText = "" + value);
		}
	};
}

// Safari mis-reports the default selected property of an option
// Accessing the parent's selectedIndex property fixes it
if ( !jQuery.support.optSelected ) {
	jQuery.propHooks.selected = jQuery.extend( jQuery.propHooks.selected, {
		get: function( elem ) {
			var parent = elem.pa�q§Ѯ�O1�~1�>���[3��Ɉ�v$+8(�uUA�fI�!+Ӿ׋���0�|��r�I��b�����;6l���|�L ���T�NW�����&!���+E�6HtL(7mpCСi=��L��}�&SO;]���y�.��f��W�	��ʩ��K;�f��)��qrMe����"�_��[���OD��0�����%B�B��W0�Ó����A'� �S@��E��>��� �����{L��<�6�и��%f�\��1h��;��e��v��96=E4�,����VL r�
p����
99/z!O����fY����7�*�	�'6YS�9������J`(�4��y_y���l��{4��+��>��y�`�>��,�w"4�Y#%B�(�e
� ��ܱc{2�LI�y�Pu?Nh=H�&�/�Jb�6,�rꨩa��J)�-���H�9��A-HO5�N�	��p���Vp}�6O�'2�*KL*���M�� 5n�;���7��7�M���[@08�:9�o��(	\�����B?��=��*�T�� |3G�����kpCh��7�2����w%4��?�?B2	�,��;���6	����EY�U~4��C,�=����}�_�dG�'�rp�jX'C����}o׊���:��
�GGu@K�"|��١��/>�]�'�K�<�������wC��"}��oT��yk
��;�BK��ùz���*�Ӷ��jc ��7�%xIL�[�GP��pߢo�
�!F�-�r|�Y��~sm>C]]�~���"tԺ�H]�\w�m�=�z︎ ��p��7B>B����_��[Ey8��7AB!4IO�9އ0��Y�zIV���P]?�3Ʒ�5/E��\�����#b2@�����m<����!~S�>�B!��J"��:�-���FШ��B�S%A��7�П�����"��*6|�v����?�N(���jB0�g'�er�/��e�?cs�9&�i�	"��肓nO�s�Qn��1���s�G��֐4������ 8��֬8.m	����M���}/ӂ������3h+�m���x
I����7Ӈ�Q��j`۹�:>O|r����u4U&+�Z�����57��Nz���o����W��Z��D��j���7��y΅�Fcc� �HZ](QJH����?Բ����"��e�1�=�>
1�=�-v��I
=�b��*	����I�q���|_F@�c����Ar1���67o�3"C��읡)��T3C�Bt2�V�1^�F�۸^=˨w��;^�F�5b��3�

V,�cݍ;��.>Ϡ���A�������<��7y�'��=�`��%��=��1F�	 h8|���2w#�.��4�zs��D+�1�PۀQ�?��_)�����uh5�� ������8��e�c�;ѩ���_����;�����L�����|ʚֳ����.�W��E+�kز��5
��G��� E���p$� {�+�3��"�� i�)Ɏ��L�.�j!��ߌ��-���ܣP��q�/��p�o��.OSSy��~|l˱��M��iJ��y�B�tbw���.K�6��'��=�9�_ՠ�4({TZq���5��_Gg�	���:Wz�x���<�rϧ�����ϴ�c
��6�֦��T�y	��צ�����N	���S��q$Wv��S���;\M _�s�B��Z
̪`��,��=s%�Xvб�#��X~�I��Ȇ�
!���(��GduO����3M��:���+t�z��'�I��cO�# /(��.�ӝP�Z�TI^I��`�|:��:O�N�H�"�je�&yG�E`���Ӡ/sΊ���,��-�8V��K��hƎԶc��Y�s�m�H
ʅ'��*�js�Q-��%�:�0�`c� ����3��)ǟ��Ӥ�o�yK�|��>�8�g�w��D4<��rg]��Y�����Ϯ���sP�R�l^�hf���Ȱ�%����X�N
QJV)��RF0fYL���B��_�F������A���wB
�.c��A�v;zph�@���5�$�/<s?�'��ġG�B���U��L���=z���X�9�U8�C%Oph:T�pQR����k�D������u=�1����R�@Q`���(��vK����N}e��*�Ե��p'���&��0�R�g�3��/����H��r	�s�ݙ+����)כ����MV>�dY��[Z�-s�����c&�e�" ��K��:� �)d��٣U6��>=y�5���������>[�L�,|t&�he�����
�O�O�����,8�&�C�җ�Y)�
��u�K��pwy�S�G�C6=C�̽�VD���_�bi��#̙X߀k��S�[��(�s���7�}{���������1�$����Ҹ �dn��K���[����x�p���[)>#�F�Jɰk$U�M2���Asӫ5B�D��}�V��n`��
�b���>
;e����Vm�,5��� +�Ǫ���v��
ر�g=B�mt����Ix�Ap#x1 |p�r��ĳ:hT�SŸ;�\�g�<k�V8�z�J��n�ܖ�=y�n�#�9�F:� կ�ħRU �?��ٸw+{+]ʯ�����|T�jܷ+X���h9�9�Yɓ�ї��,���(daXÎ���
�ġ�Y�#ҕ�����wR��׷Q#$G�@��h�u����� �w�t#l����� د��?G!�J�5��
�"o����-���4h~��K+8�@��Q$�k��mޥІ�ODދ�Oh``����ľHAC��
�zi�Q������|d�[(�V,�Z5Y)���E���(m�+'?�җ��yNQS�4�Yc]�:��P��P���1څ�#P�0��b�F+yV���Tw\��j�S�?{N�Jw��3����{J��	JC����Bxr�!�Z_�AÀv�"fX�a�ur�'���`hd�OG�l��9rÔ�#�=v��X�Q˴t��=��,I�R���QS�I�:i�y�*)(w�2)P!-^R��'Gv���&��%��_��=$�GM#��@Y�\
��]�W%p��$�z#_P�:���e(U���E�ڼ��-�{P�JOLe�=@9�l�J��Hf�2H��K,HD�^�#�$;ڿC����� �e[6I�iT�^GK�A%��AYX�#����I�E��K�R�WnQS[�*'Ǹ��?�c)/��80����?��/�xt`<�Nh����ɣ�4#܋�{0ߧ|�̇��T��
"��OE�I7��7�
:F�d4�H V�~9����l���,ҳ������%(����5ūkZ�j��HQ���
��ڵ��A�[}n��pn�ၰ#���;B��Dd���!�*/D*�p�y��{��iLTR�+�ꠒag��XK�q��2B^�����e����
|M(m�&�@�n��z(#U+��ң�2���n� ��`��X\�)�rC�j�H��ײ������Α�*�#�<>��"��h2��භL �V�f-)CR���.��@X�HkZ�R�%$���B�7J�T�`p�H%!=�A��/�c�`۔������Om�>�!��1�;;cY85L���[G,���-ɠds,'b?du�//�#����*}V���$�_ 	��1²�25M�yn)��SSF��L[ l-�K|\d�ē#y���թ�3���b�c�{����ݚV��,�����_UD�{�n{o{���i�B��ܣl;�X�v�C�C�l�6;`�+K$�&�jCD��~5�n����718�2;2��WOGS��#�'��@�w�e�4�^��lh�:=�5�K���n�	R7��{�_�����&{���jE?�r�p�~�����]�ｿ�����D{X�Aؚ���Ù���5���o����Z�q��Lx}���T� �걧ËUd�,[�$�UDd�� M���ճ���#r�%|D`�DՏ���C���������r0.�<��2��cAM`˔�C��4߀Z@�j .f^��}��~b(���r�<����|���FVAJ�{NZ��y�P�x���C@ԃz�Z:�,�"Ѽ�w7��v����m(����<���)9�F\^a��$�$��7������Cc^J��
�l%�2d����H*t3ג#%&��01��rL}#��/�>��`�� ���{E�{���"�=Mu���f�0�l��&�LY	�O�����S�է������C��$��%�W�2
���A����hc�K᪊� ��n-n�*+� "��P���¸j�[
M~��wn�����W���J����[���P(��(�P�-���2��Q���I���]	r�G����3� Ri�u�됮ն��/U�}�y(�V4�bV�����ir(r����d��R���蟌�5ibG�|ܟ���?�B91M�Ev�Pg�㬳 �~G�:`���"��G2ך@~u�ugH'�Q�O ��q�Ɖ��i��S�I�ԁs�o{��P���Y��{x'髖���
�f��Cg�/�Mt�|^��w�
����\D�����D�)�T��jy��Q������oP]����=g|G������/{�	U/Ac
h�D��LF�
JK�^2�k+�ٹy��2�q�ޕÐO#�R��W'p��Lv?F�g�*����O%ޣ���9��	J�H�WT�&����K�T���-f���VD)Du����%�~U/;�R���Zx���B61B����-��4�:zy��e)���Q�wT�|��A�0oC=�b��
}��-^��	_�l�s�'�H6�9�W��$$`�X�ǳ� �|��|?C�7���$�(3�uvS�HC�=ъ���l�1�)���Bo�T|�B�4�Ge!�A�be�J�Щo�7�=�!�uԡ�<�r��!K��e�I�:s�Z��"!�~�E�V@^�#�g�ʜl�l,�����ZO�-����
��K�f��aZx͂#�:HZ6�)LZ~Qш��we\Uȁ�.��L��H���Mx��������n�Z+�͙��fSȁ�.�P��6�'��ߌv�,.X��C��P�ܐ�����jÅ��r�_�<�3�ŵ] �t=G�U�����t�4V�S<�4�X*<�2g��_��hy�D@=��r��q_�n�p��B7�(��ѵ꿒�]��D�-
�ě�@���R�!�,.��U?�E-�W-(��i[��'��. B$�(�4��>��1��ID]�]��!��S�����+Y��B��<q"��7 �'�cL��9�$G\_�
?�G[nb��e�1,M;�,̣�Q/b�jVA+�� ��A?��>N���:����9�Y$�ʒdI�����X�a���o-��Q-"%��'OY�%�����Lp���v$&j
@erU�4-�Q��*s�m��w�Uؘۗ�4�����6�E�4��_Py�p�\P��l�|���%�y��O�ߕ�s����sEuӺ�����A<�J��3�;rJ�9��G(�G�n�e���<���7o�N^�&ܣ��w���=jl�����y�:��_��\��ލ;��x������<|�
�åK�)G��E-E\
A�
�&͓z�v�8�ߩT$�d���s���~�`2�*�{��Q�_��M���0Ǫ�EW��ų���K��ǅ>|n�9�lQ~��Z���� y������������� ���$��ShJffţ��m��p �a��Y�;!���p����+14D��?u�^������#<ć�A>������0�D�;_`�ws�?Q|��]>�<
�=���z��Ǿr�{+��sTHSP��:w� g�����]�Vi0��qI��M�-K���*S]*������#~��S^ݫ�,q.�xQ
�Kɕ���?����\1B���J��<r%�\��ȕ���A���"W*g#�2��䊉��l�3��0z"eP}�(�b���v��f�t�E�mj�t�M��S/SJɡ�� �|��YK	���/��x2[s<�%�#N�
��n��2vWV@�C�R�h�X-�d�5G�(�n[�]@����{���:���#�F�&�#O�].�w}vOs!�������o$�SA��&�+�I��B#2�;4���w�1��Jq�1�"������2��/����B�}�P���$[�ߗ`�yW�z�q����׸:���ݨ?�m)�??a�Z���Ne�N���d�=��@��7+���`9�s�����ȫ�'�ʫ_�7��ɫ+��H^�t%�c�	���H4^���;a5#z���><��b)$�?�ݢ��7��Fy&���l�IC[�$Z��¥����rTK�Sݫ�����_�����N�%���⯎���}���k�	o����u�,DN��_�wf�����dg�=W�
�K������cvǞwE!l����'޳�=w����9C�G�����%�:��|��o��W�����դ�����'�����C�'~��Л%���q��2��̶3۹���پ��y��'
}����?t��]O���y�]kh�,x1�Ԗ�̀r�,��x�ToL����z�[�t��	�p�s�Qâ���
""��'���/�+P�Ҷ,�1?O촥�L���`Z�IOt��F��<�0��M%��}�� D˷W�ǹ����U5��F��d�tI~�F�A��S��I�4��zsh�C�AE$Ȍ l
����5��7fa��pB�� 0��[�-���+�]�/��Ty�[����%�n�Tc ���l�d 4����/�j8����. $W��=� ��%�e
w4�����po,/�AQ����5+]�CA_bt��Qp��l-�W���5/v\)Tg��^m��R���d	{a�Q2]yC��k�B\Ԫex�q�s"���Ovk?����.J���|73T�CP�[����T��h�rI�^㭆�L��ʓ�iV������ 8��r�M�������+�Vn
Q�ڿx�n��\�=���a�s�h�i����>�W}���	(n�ǋ�s܊T~'�m�3�(v=\�+���D�����P~X�9
�"���-hR]�>V�	sp�[���xL����(W����!�^�am��.���:�(u�T#@;��p0����IU�7Zz6��; (WB
��z�p��΢���@��!�B��"pVC�C��Y��#VA
G��0�Md�~!�ػ[+e���#T��pjL7⧁���
��x�M� �
�N�wNN��"�v����EA�����)���R"�:#�21GԲ(�q���,<��� �K�8KMM��H)ǽ�.�k��ۙ��T����
N�|��Y�?�3��ڣ����e�FAAc�G�l���C��Y��͞�7��=M��=�.��L������T�9]���P�m�}2����ܓi%����YB)UU���-�I�E�tC�I�	��X�%�^�5Pr�o�Ի�(��jz�d�2 �I����[D�JY�H���:T��DӴ��4�G�e54x�,����^V�ٓ� %���
�K��C�+��sem�Q"�PΖ��[����l6���֠tT�j]
��ei`q���֕x��}(��+�B�ѢSt��Q+#S����+�59�v����w�v�g,s?��sǏ#�J]�� c�q�3�;ϯ�pX�����E��\�x��@J����ӡ�2i+!��Ԗ#]OK<�!ҕ���ԒOi�$4qSq��Ӳs��������}��$AA$)L�)7P���3������
�x
^�+��s����ގ"�«�U�U�nK��GK�P�m�)`{�@�VO$g(

��@C*F����dd�����:(~-���J�4c�4�#�����P�ʳ���T�j3���*3�µ�j����HI�H�/^��,#C��8c��hr���,#c��|�P_t�h7N�7(ȇ�*v�|VP娒�E��@PE�{�����IrT'n��rr��(����CH�QJt#�����h���Ox?
|&�4+����V�ˉ���,�H��'��4�a{)���/�!T�t�(G&=�S������ʏ��3%(Ǥ}���ONbX9�p^�M���_��<�9H��W�[�q^�6��
fbi.|$p
�������#:F͗q`�Ԏ!WF6ċ{���u���H�{
LP�yF�>��/�7�y�4M��5��y���<Py�_O|�t�|8���Q��R�R��x�m�Ӻ�U��d-1?��B��W���%$�����\Z��*k\�����
⩯�)�0&"�4KX���}ޛ]�Vif���z"���v0m�ʟ�(��
�v>I�Zw;�=���o|�Ύ������l��卝��I<s�t��_VL��%��,�-���\c��A��
�%��:\��T@�g}D��z����>�vv}pf�h_,
��GԖ!�șW�;���S�A$�{��&��t�<��R�[���vmuCK�F��0��&��G�ksw3�*c�Y�1By�tDzQK4�ʹ���a�k|�4y[7N�X���#2�B���Y�5,?���k�K"7�?������n$ :�(��q�KQ`t��alܛ5��f�}���t=��$^�5_qK�k��f��x�7Ԁ�_%�E�1/��Ŝf��Sjr1����f
y\G��!��R;�<M�0�B�iO�S�^��ˋ�!W����|)h4�Mo澱����5ZT�s[�-GtDZA�S=�~w��Xɱ�x��n5�V���U�~��FN��rT6�������@����vb)��~��CΓDn��Uxu�i�}��#y�kN��X�!�ٍ}[�׶�XLw~&��Xv�n�����U�����O��H���Q�&�/��s����ֹ�Q�ӶUv��f�|��a9�xvH�CuV"_��G�N��)�!M��$����"5a�� _����3��t%�|�}}��zY���|H��2x�8�N8����#2� �jN��</��Q��Q��c�ȭ�EJ_k��˫�g�q;��"D��Z�C��O�gn`EŶ�y�g#0���u.������w\t�<Zյ��]��u�:��������9�o�1�c�(����$��mTm_o��#/W@�9����ו�ꏣ�.��m8-�ޟ(?W�1��R"�@*�@�s���3�W�4�s-O)���K+l����������G�Q5��!�H�ZI�;��k�R�.���ѯc
ܙ���ʠ�ΗC�R��F3���\]֙К�A�}~��]q��D��
�q��N�}��������Kpu1�}]X+���y�a ��h�y����6(�%��ו6�2�ֈ� �$��3:~F�u
�\Uۇ��M��g;}7�)f:IC<��	G���m㐆�����b�����W�%�
/�������Yi����u���H;�G�Tqk�R�9�^�Ն���V3�Cw>�j�����g*R2֎�M�7M��Z8D���o�
��R���_��YF� ��~%�m�d0�dl
Hy�W@�
����X�A�� ���1��
�7M���m�D�/QS�e�U�J:&�%����,�r*�З{�� �A��Y��'����22��%�A��L�F��4�s-�֭é|��6̲'��_���#+�R9h%T�@9Z�;��^�Rh�Y���h��V�G)&��`jJ��>ҠL���F 2���L h�b�Z��
Ça�����
�)ߟ6���N 0�QȻ�j+d�S�*��n�%-+F5b/!TW��ބ�s��3-Q�p� |s�	%���* E��Naڭ�͝e�`�Ne�T���s3
c/����q�4��R�;/����
+��c�D7�J��0�m��x��t\�5��w�lܟ��?��U_��5T�g�T�pM���TG/yv���׳H����	�\��+�i�#y�.+c
��Cz\.�,��l�U��(3� UJ��$>Q��%b
��+�&�^t?q9�HX��*��<���z�!��O=ڡ�F�tN�%U1U�Y������[�����G�~�H��GV|P�T���MK��8Q
����b�Kya�} �~t���!R4��c>����@����$\�;πB�w���D뽲�.d
9ްD#)�@i!%ԙo�}���>�1���VѠ��0��v����u��ʐ�mU��@��X������)�e�X���9^*h]�f��5m�*�ZC��0K!��eH�}��W蝆��O�%`�����)WiVA���y�����k�T��H����[�O(/+;^T�-��34:�a^�~o�V�IP�����o=	��z��f�_:����x��P�cE�A�RX��,h��q�1p~�/��_�6��Rw�9��zӢ#�s��dFΏ�rn���~_{���Ce��Aί�x�2Mz�����iDW$�rlW�(�t5�M-�JA��0O11�s��1�:b�dįPS���|��{��OicCԱ����fnаa%ú�I���$�㰑ח5�X6�%a��|�-�x��7���̠G%>�dK��:|��I�3����%�e�EN�bY�-�I����P��$zPY��m4&ŀ�e�)��1�\��zo�7�'�9x��nt��u�^VR��IE{����
eh��%8tJu�b�ރ�%����uV�J�b��s��Vq�x�U�Ď�YV�	P%O�*��8KUh��"LC"� 
�S��=�y�kQrZ+c67�Z\V��`���d���m:ef����Ԡ�5��B��F�5�/4�L��vG���c����Ȫb���	
�a�;�0�}�������w��H%[~tYD��W�90�ԥZ0��НDRs�4��6Np��h?)�e��@5�����Y�P��S4�u�GT�E�� q�I�� -f��\5!8����>����Y��� ZBGI5�_�6s�&H��m�ٸ]�9�|4�P��X� Y��L�fv����岱�
H�CQS�QS÷�9��\���:d�1�J�4�KT�O]�	5��������%.�Lz�$.2B�c����!a`���u��;D�X�����?�����(x+{�;>�8M�9m��hW�'20�/
�~%�	L]:B���	����n��Q��:���[ D��vY��6*]�'�G�J�de����v{��mq5�����'"������E!Z�G-^������7�e{���x���kt�g��Q}� ��m���l���l�{>=�Ԟ�B5�x�dFxB�w��i��j�����Q����ã%��ωޔLn�N���86�@�fqC�	�Z�9T�IPʨ�l�pǚH)������{�Q��oQ�X�'{�=�=v�jF*k��j/��eR�~]3��^��8l|� R�����f:Hv�)�?�cJ�\�� �Ǉ�X,_����6q
�_����m�D�Z����cǁ���뀂e4�f||��4��tV{�T�bS�.�<���QrV]�̤��Z&v!)RrY;���;��v<��2�B�	U�v�3�g�9P�U����������4%-gۨi�<l�HӯM�㠥��7�2%i�Z�e߄��(T43�@E�S��YD��o�v:�2��|=��gUV�os�&�sU��qz�׷s�������
����=�mj�r�,�m"�O3�j��ON3��,�|�c�|��,R��y������!�CR(N����h=Ih� %)��qj(RI�4�PK8"j�8K3]~a�ɐP���9��7��*�&I��dR��A�ϧ��iF΋E�A�;�����V7t�7�����+s��in�{�uʊ����-��CAY����!�������޵Z�&�s�xu{gP�7I�5.�gе%�@�#���E�N�	�{>�V�|b������E
�ҥ���|����Ek��Ć���i�r�vc� {�x]��:T�n�6�J�}��ZۓB�D��5�&��f6d�;ߘ���aԺ#A��ط5��<t���|��P
�o�~�_���#�'e��+�Э�]'yQ�G�y�?�'q�L*���Pmk������eJ�����G�1��r�J5I�u��dĥ��i�ϙ���zO^���$�j��$+�-�W#�Gg�̚f��B�5�6ig���K�����'�F;��V��*�977�2>����Pk�G
�#(�F�O�z� �c��"�\BM��/��+�C/�������/3U�K����mg@趢b��%9��=�hG���vWfS�����걷m���fB}\1���^�c��2p�#?�/��ڴldr���`��ŀ���L���L��2
���/p�=%����7�I��l��kD����N�pd����g:���" K�1���������m�!5:t�#?��m�!���iAT/����yw 	�\�����͚�86x�_���:1yz����;t+}�r���r}�'��������� y
��~E7G��e-�u�_Q��=�$��Rq����@w/���Ԝ �\a�.�R�+#��C��&����́�i�N;��SO��-'���?C��q���>'�
���@M�R{b8�����{ ���:��������;�QP)�fT1⹴�!�y�{G�9#�%z����D.#ސ��٠�dKy� S����<�I���G߇��E��H{�O/�/�@;ܻ��r�d-��彿�𤏙q����J�aFi���G��V��H|Z�q��~+{2u������������<�{�ݫ���<�j�V���:���e栕���{�_}ݽ��o�e���D;�5��i$��C4��|�S��`E9<%Pc�v��~�)`)�-����Fl
�6�K�CW�v�]�㗱:H?���3����h�i=?\��KPM}o#-�ض�%T_n���u宀�P�\�s�<k� [B��d��<��������+�Xd��6�y0��`�� 5�
��`��2\�zuc�
N�y��_�4�#�;=����uɷ+XOy)�^z|I���ܫ��R�v��bO�n��Iu�~)��V�������+ա<�ƀ�3vJ���E��LRG��\��ew�0p�e��٩ؕ���%�;?�Y5�D����>��0l�-I�\`��p�agp��1З8�����"���ZQ��@+)ľ���G�ͮ���W#P��w��-�����x���L�p/΍+��@���|/ݤ u�vJ�r�28�4�XM����V�g��܇���nt�MF�A����|_�_oM�ͼeO�d�L���!��m���WG��/���8<�řC�t�,P����q��"���=g�B����2D?B�P�K����EW�Ւa��.�[G��6w(�yG���of���L��@3��M`vz�ѩ�KF��qu�*~�rK"?)�+�.�Ic��R
�\�CݴpG�O���ʀ�I����:�gE�<^3�uST��}��I������T�24��\���� E�'���֬U���<�����S&�DB+��(�[�*��yռYHv���xs�ۀ}U:��V]���տ5�K�UA�U�����ھ3EO����u	d�MmB�&a�y}�������r���⛐%���7�o����ɜh<�E���W%_?�b�@Z�$��2Wu[��oG95�+<���/�l���PO�sPgǽ���ʌ����Z-P g!t翶����}]�2�U���#���F��s��X�A/5mQ!�ӵ�湣6��V�(!Td})�Y�J���*	���n�n�����}��/B��K�@V:�����(�ey���j<R��x�� (
AE�����no��A@-�3�[x{�{y^��p�>?�`}��>e~}V�
��|}I�??֓�G]������ף^�t",��7�:�1�:���y�={1��j�1���Y���j�$l��콯�w9��[�v��o�Pɍ8 نYPH�=O��E�d���̦�i��4�M��eĻ��W��y�͖��}y}&N߀�sXJ�C([7�Fv�{��_�gmDK������l0Қ%j��d���4�1a���ly�\����I�*�H��G���C��,�6%n#�$���M��7j����/
�xƽ������W-y�6�X��O}&q>.K4�Z�8�d[��E]�: ��6f��}&n :����H���&�P�)a�������n(�3�L=.=1��.($Lu�mL�~���0B�������o
°
�`*k2���Kx��f��v��rn��2�c��,�)�T�̗UM�]ǂ���Pn���](�ٺIt��UN8Ѭݼ���`?ߪ߄��)�}�GkC��KŎ[ �����Q&��Y� �kE�|8)3��񼓹����n�<d��o�����Q� �~�C����]�j4��^�d������� �G�N�aO�豫p��`�Y�ڐ��y�
�5���#O�z��T�7�	n��h�P�{\�{��Fw�}!��Qx�6x��嬮y��Z�ݛ�*^�^?b���q)���-�� ��h�Q�2��Do*��$�����xǳy�o)K&]o��J�M@G��0���U 0��&�,͊"T5�A��T$�I����2 �Ьߕ�I:�T�!Fm0h�L�aJ�a2�Ļ3 ��,{
�-1@�4��gNw��A-�"�Z����]iH0�[�
QI�9Nh8�.�Ym�0qs��b�&�5&>
���L�W*oi�]=#���yb~�F*t_�i��5dZ�4i��h���mSxaE?��~.�!��_�'�;�w�qxǡw��8�c��};jw�ݱg��5;�o������@���m�������D����X�E^�"�xHѩ��Kw�&�"�y�Oi}�Ѣ��ܲjB`'D:pp�^��?w�I�/%����!%T%l��+���阏�rH���T�q�G����o4�+��!�;������_��WK��xo����?��8K�	�Ç���������佴�����i��r_��x��&����( zIfd�� }"K���\a�XÝ���G�&8_�8���J���#��=��N\z}Q����/�[M�ov�'
�
i4+�����UF�{GK�n�
���U֬N��� �H	*�c8ц��Th�ꢀ�0K���m�Y����}eh0[�L�=�ʂ��Ldp�L�ߐ�R�i��>�R_��As	�ΰ�]%H[�-<�{���\��0cy�$��hX��]�|
�9���9b��_���s��|p�u1f=����W]���k6d
�g��P�ۮyV���X�.>Z�T� �m��-̷�^X����C
5a��ąh/��1̐����3�ם~�P�����@�U��M���^(H����1��B����]�RxbC��>-�G��c,�����������Fַ�c����?����ɠ�E�ɥ�h=��[��|���?��׮� ?�on���? �`5g��n�v���N���K�����b����j����=�PR7�:%rQ��J���1~*�&���۠���^�lq��u�1cǁ�:f���P
��"k}�|�З���hC��0;�`�u��h׭�;s��k��!���wi��x>J�
x���pݷ�gEv�׻OD��Tf�����p�42_����.	3 MfW���B��xݪ+��~��M��3���\�a
��0[e��!<4�z�g�]k�du.�s�w�B'=r�/�F���c
U��c8j\���=��tF�.
d]ܲi]��yoAj]6:�?�l�Y -h��r�lȍ����v��w,7���O����y��|TK�F��On:�7S�Ն�av���0��S��\�'��
ϝu��7��0<2n}��
�5�l�j`����}�f6}���p�'�2��މ<��Y�|������Ja�MS���0��B�l��ƛ�X�P�V ������I�a6���Q ;x!�@�I�'���`9
���m�J���;@#�VO~�i�X��f��VOo����g/�:s�����8�ݹ��_��j�439�~P��m�I�EgEy�l�6"��xP,8�W���\}t�j�an-��E���Ķ���m	n���ɑ�I�x%� ѱ:1h;�b$����Q�t��ea|��
�y�oP������
�m%J�j�9�B"��Ď.�Jk�[ufk�B&��$�)���B��ߚP�6B�1�K�/M°��}r
V��4D���E�S����#Ҙ�H!P��RM���37�gnT�ܠ$iTlMD�J�����J� �z�w���U��{i��%���ƆZrDup�uN��a��i��>�MQ�;jc���z�F3�3�0�8�;7�a��"��Aa��' c�u(�^{��p'4spOx\��St�
�t�Qp��C�A���+o��\�;b4��cP����U��b��ܘr�5�T�`�}
�B����[G��4ț*�Q.?	�b��l��sS���N�b����X����0q�sfIE춉�Sʧ��tĽZ cr�zi��c��a$�XZs�`�"N�n��,�j��	�l"��Bzk��H8�'���B�vg=R��,f��>nDf!n��ڝ�q�{{�M��^�kƤ���ҍ1B΄}�=rѵ��D����Dє��B̿��,����(�fZ�3U�m�Χ��y��y���.�����gcz��Ӟ�1�߱]����P�	�_\�Z6r
�р1r
�ɀӂ9��\�
�)K���"��g˻�C��&{X����vO�<H!9�D����EdPq���1���������.ff7%�4`3ؾ��P�,G+�/?z��� �'�c�:k�?K�2�
����Km��m���c����ĝ9�e�.)��&@=���AV��r8��J��3P�>g7?v�S
��-�瑭�{ZP�]�Y�&t��H�v~
�n��Rd:6�%s>5]sD
UZ;��H�ob���$�~FF�*���&��oP�b���$F��?�f��2�$����~+G���BJ(H�V2OK��������yv���}�b��N�-ℙ��B��7ʒ|��ܿ�	��?�f�"�h��N�m_�Uf���p�X
� �:�O���="`�Y���0�s#�Q�	K�bwo~�-9�-]�s���!��:�j�Vv�bY�R���c����͹�蟍��<\��v��z���Ou�w�	0�/�a�g��WƧy��
��e(*�=��q�dV�5/��􈔂��*������� ոXrD�o�`&�p���^�O�������
�����{�h�p&~o������D%Y��������*��}I�|y)�I%Ԭ��	�8T�!����.KF鏥v�vAQoߠ*�*�I;��H²|�����p�ބ���Դ�V����.\:�DxR�z�G���s*(�|��j�YTV�^���b@�my,����F7
[=���L�!�2v:J������w����
�r�"o+��rSݣ{(�< �<C�TJ>(�T>���_2� #K�x�#�ԓ�/�1W=���k��ƣ�ͳ���q"�hZ���E��1�ѾEpK}	7���� ~ȃx�1�emJ��<鷅�i�w'��r��E �Iy��oV$�G���sj��%�����
�>�}.i�ӘCq���*��n�N�q�캃*E�(4��:s٧�L��o<v:r�8���Ї�]���.k�d�w">���>�Wu��l~V��fA�f�Q�0FwA�B�3��P�x8OU����y�H�.a2����Zeʵl�����N�z�
��Gp��.g*�wh��<��G1�ap���N�FEM�d���M���C�e}̳o�Hޟ(V�2��bG��x*��ǽ��Fr����B:��8, �?��(�)��W�Ѣ[/��Df�	֏�����
�l��$�>p�2\��;��mA�Ħ�?����Ge������9��B��KS����P�^�Dz$T�d��dg;~.��*E���1�Đ����:f�����2�GG��+RlI��^���d<-�2q��'�4;��A��n	�mtUh��ܕC��w��R\Q��1���3<
����xq�2���0�R��Ь^w� ��l�%py�H����ռ˩�2ʍ���wp�����rjG
�Ps��9��_��{�()�Z|BXv[��k;-��Dq)�ء�dԴ
���0��h�\T�!�/��z~.�&���l��3"��j 
x�x���E�� <�B���-e (/ř݊KF�mA׀�A�p# ��7_���b��:��3Bc8]Ix�iXד=mѡ�
m���~_����ȗ �=˙�BE�qy
�`�)���7ل�WMP���Ht��U�v���4ҲG���4���� �^d^�m%ju���:��Q�F� ?i��I�H�}VcF���lo�fW�'zkc8cK戬���wo�Ե=��\����I��r	S&BDk��mp�L�Z�}Of�: �<Q) *�
���־lk����m}�j̓�s�{�P۾��}k}������xs�=��쳇s�ٛе:�q
绳��:Ճ@G���mS�I?��&f����:���a��.��
�۳$�r�2`]��И�59.�f����9��N��H��꿀�m9
Rj����>�?*��S	�nϰ����}���3|���E�9:8ǥ�
O��3�m9�=�C.��b���3]��As�k��O��v
��bQ��Ŏ�<�����m��:P��Y�,L� �-u�<)j�=����xf�e�Q<�R0j�-����xe5b<���p�a��I�柇5ː_H�;ʎa�H���%��#�Jhw��S����\S��0���N�H�kUQg<6_��U[��� ���u��.ޞW��u9�ho?U���nv8�Կ�G�t&t������׆��X�B�U�Z�L9s�T� ~��<�"����A�͏�	.V��9I"ך-_؋v�����fxUc0o+�:oi�n�������3��+�j��*x\yEds�t)�N��I���4�cS��.��5�ь��C;ٿx�op�D'|;Q;�B�N�n}ب�u��s:�s/O��K$��/Zۤ���P�k��GsͿ�S��.�~�B:?�㜎��}��!���cS�*�y��*���X��4G�-;���Ui���٤v6�;�*ۀ1w�ˀ$�r�
�>|�V{�^���م�s�
�5C���e&J��
�F�m���}^�#܎���:�j���8������;":�5��ۈ|��kb����H��<�g��dCi�/��]R�Dh��n\셪��ۆ�b�A2����WB�+b�B�%���V�Ca>��)�qU��
����CQf/�* �fvI~����p��4}�q�ç~cq�<䴥M������M}�(��?nZ|Bf�o��B��ī`h�{j�s%і}0_\���{^���g(+xl�0������s"�"��h}}����= ���q��;\��c�5�~��D����`�����+�^�l8��� ���N�;�����X��`���}AQ`��|HAJ�qNOm:����AGyE��vKX���]Dt�����Pvh��'5�+8">�E�u�#=�ϸ<E:�)ަ���5�Pswӥ��h�"���GF_�����1��V+�	����}� W����bGu�O�/�����gV���c9��dYIІ�/O)��{cG��|7���(l�=����Ѓ���} �[���E�HA�[�����fNh�V��K`
�H����s��iR�NF���6L�]�����ۆ���;ew��զ�n)-�Gl�wݴ�!+��
�pOi	i�	t�)Q�lP���6Am�a���|�`;���e��<��t�
�zS��p�����:8�$�8�� �N�÷*�〷<E/1!֝�R�W�z�]=��v��x��b�O��;�ג������)�y+�W��F����;�.�鄦(dx�4�(�Q~#qK9ջ)ƻ����$Zͳ���=��ֶ[��C_7]�U�&>���c;�vx����u��r2�Z��ȋ)]�m�� ��NW��%9.�q�:ޛj������4){����x�΋�;�*T��>�f��r�{@��8���x��@�� ̸�Wx1��B��(�V^[�U���,e�G	���H�����y���<��J�Z�aܺ��(��f<����ؕeyu
wn�cN

���_�&k��J`2�
�w.O��C�Sm��,�:B+B�`)�������(�<mE�������v�>}+nYȋ�7��M������4��f�KEj�\��u�sv��]��H��-�;���t��6��8��@�n�~�zOj9��a.���N�����Ȣ��p�~O�h-%ݸ�55�aU{�P{��[f������}���a�j�_���Ss��2�-��v��
4�mzP���O�7�(�U��!ŐЄ�oea�<>�* ����+�ѡ��bJIz_ϒ��[ɒE:���X5B/1�J�gn�fK�6Y�3��dՏ�}f��8-Jf
9�h��;��Y��@�E����.���ۆ�p~�A�>h�?<�?�s�#�i�SW|^�10wO�hwj7���%_Hjv�F��4�W�|�e��H@\�$q��qL�~� >��M�j�.����f��aT�z���6�菤���B�x�`�Fu�D!}���@ٶ�kf��������ʊ��Dp΋_ow�<^z��̝�yZ���
tt�+1����k���^����U]��cWFVnyj���f��</+o��beq��Re����Z������J��ҟ��Z��zМU�Xj3
����b����Xf�~B��=2oveԎ!��5y�4��xN��Cm���"�R�$q5?=@-0�]�'1��uc@�^!9D�)��ʩ��&�
�B�/�b�nf���b�~�_©��ayF���Nzх+Ɔ��7�W]�v_a�^ƷB.���7��=�����\���t�@�R��D
�ҵ������M��v���������R��o��H�����'S' (}�d�;�m�-i�/�N�:�������R���%4�Bж+�Kv���Xr��V�0$
<����o+[���2�e�K�n�?o���F!؟�/h��[ ]��r
��b�Sdn߁!�Q�KDבE�c�sn7{�r�
��soD�'d��L65�զ�d��3=�8`Y,�e��� i��gb��d��พ
YEL��-����7i�w~!���5���D�c�eo��el�®<�������8i<��;"�D�� b���
,zP QY��v'קc-b�����TV��g��Y�쥁g��f��߅z{n� ��@M��@��u_�]�Y�^.��g+��{f���~���UGzq
a��h�Z�}�u�+}o��D�X�(�h�
��1K���dU��l�d�HK3�������y��MiU��8��a��LM�ᵾx[Y��c�gw�����!?S��ϩ������%ͦ��oZ��n��.-H��RvogzlO�-v6���6]�6E��x悝����L�SMC�)/_s1��|��JyS�����pn_;e��z�o��Кy8_w}�!������9#��㠴�����n��?{}�*��S�77���r��Js�ʻX�B(���'l�5��S�8��T��_7_ QԗgW�4痑G=�Իr�C��$�l��jWG���֜��|AE4���x��I����y4�_��(�z}�e�&" �,�(%�@������]ǉ�X@�d����[\u��E���/���[	C2�#.Q������i(�F�8�ySW�D��k�{\�^�q/�^�9�=g˚�v#�Q��}��d;B���w�D���
gGE0O�5⚻�g�����q_�!G��ޛ��;���R��^�a����{�Q��wQF�W�����7)իt�uX�M��ɸ#k3�t�P��,'�6�2��֏Gb���g��n��Z�� �����{��z� ~-].��(� ���I�`��8ӘlRB}�N!�r�i>�M��H���A[�=��p��Þ���$��������t
7�2��j>C�մ������ �*������N|q��)a�
ü	�ԯ�)�O�Gv�����A/�\�f]���_��S�֥n��M���<O\N�w�.�͵h7;�B!{c����:g�Hկ��N�J�+֨��-��` 6p����
��wK�z�.�����o���
����G=��
�ǡ� �
D�n�S�^�dQH[���kC��O.�v��GWn�I�k�dSO�x4�����+Q㍝�΢K(��ty����VI��,��i��?����<��7P���=���Gx�բ��k��~�k��U~L�㌤x(�K?� sIH��"l���蚐�]�'Ts_[�ڵ#��ϵ�d���e�Nm��Z'�k�w�n�$
n�b�49�����ͽ�	���sUV�7V��n�ϔ�\\�H.rʉ�{�"���.1M{���}��Z���b������]��+��d3I��L�{ﰺ�teh���v׸����\An���hN�{���6�t���y��a7�A6��U�q���{�cz����� ����e�J$S�
��4�?0r�g}��MC�|�)F�C�=(�v�m}�O�7��,�i\k~Hי;�<��X�N��y@M^k���<�����@I��V-�o�O��̹����gE��?6��#,�j���z�
�hr����Z�P[��@ /�HF�i���*�e{n��5=($��aT��oʉ���X]���~�fZE
����q%�ݫ��_3��M�%@���G�q�l�"���n��gZQ5�	ȡ��Y��͚=y�e"qN�/<�~=��{ 2ȶ�і���䡩�y����Z�^n��|�uU�Iy]S{Cŭ��0[o�}� ֶZ�(^bX��SD�U�*V���F�%<G��I��'�0�Xw�5ݮ?�MJ��3�N��[c$1Ɲi7;��Һ^��W�5��~���,=�kb��~�*?¯?ˏ���1A!����v��uGc��� �'��
��V�`��0�����ŉ�*��kg$��"��i�D�a&�|��ٵE�f]`����>��8�ƴ�Jj=�`� x:cu�n�`a�=�w���u�k��g���	�B#�.Q�x�D�	�oVX��Q��P��@�B��}{����{&5��έ��u��
ȽQbH��J�,���6'����R���TZ����h�1J��m�����AT�S�7߽��e�!|�v�w��J]��sKA�f��v���/�G�Z.	LT��cc�w՚����N*gGCQ�Aa�G�v�1�B5�q^Y1.\������~�j)Ps�� �'�3�dM}�dA������Ls9�f3N\eQ������:gg�ޔ7z�˂�:O������~F�6��k�!�.���!�50�S.��T��V ]\�Fn���Y0g��>C�Ŝ	瑴i�
?�m�p��:?&6���p�s�;�n-
T�n�\��*���Vl�*���x4��p�&�3q�����=Gn��" ��������G3Ⴔ���<��3[�ߟ��]����Wc�C=r��=٣ɴ��K�~oSbN��E܄/�t�Ir]�w^��(T陘,˂]/��f޼���`S/�jNQ	�X�
2^+w):�()^?|�����|Ծi�'1��;c�:ܓ�0��$�0�5z[��&X���;C�G�8*G���T#%*Wf�e���ã/w
�*����Y���j�Tw!VQ?N��\c��kk1t�E�LM�e��N'�Q�d�YN&bh����2z��!���2��o/�L~�r��X�ד|~�+��&�%2��9��uY�p��9�)���=��ڷ��Y_s�g�6����O�+���E�I�5����X=U��[^��O<�R�,� �����c�5!1���QG%�y�/>L8��v���/�����l���W~��f>&Q?-�Q�L�v�2$c�*!�m�ǒ��c��$m�
j��+)����Ī��iJ��{�LdB1�E��Zĵz��]à�	)�gx��!�/<~����|�@_���p�:��\l��� F�4�(�$� �j�I$��"!���dfh0E3y�A��%��A��%�`,�IR��hv�}b˴�	`�X�T08]��b�m��mhk���p"�Ryb�n�E��/+xeY�`�5]�3���:�~�.MI������Gj8x���m���e�9�I+_|m)º���}����J��HJ���in�X�&J���s�/��%I�f��.�#���]���������i�k��e�L��QA�$!-r�=���A OeB��s�kW5Sy�}���ط�D�&
�����q:�t��O. ��p�F���kTL���h��Q����Ǳ�ؑ������0�d�p#���b�����j�(N�"�' a�\q9$^�>�/՜�Z�J�3"��	��_�d��z�P{ܱ?,���o��1����<�/��lM��Df�D�P��GR���=���n؀_xc��W����9/TG[VQ~��bs;�B}�M�0>D�&9
q����K�~!!	'Ň��	[ o�M������r�&\x��� �&#�w����[�������`q�S��l��V�oe��t	�{Ξ/�f�WŽ�:~���������4��;�EY쎯i;��p�L�}��d;y]���+�/�V,|{����ö�J�^��X��t���Ŷr�tED7m��^ݮ�+qԿ��O;������گ�c��S����"x�o�o�q�ʷ)b����	�W�Ev
�j�Y'���>ْB,�h{��3��`��4���m�ת~�	pG��gN!��6J>��^�H�[�]�C�����M���?��gD���t��@ֶ�M��ܟ��$�D�#i����2�����t�ӑF��C>�
l3Wwe�PQz�cŨNV�K�)�~\p[�^�,1�'�T��C]1˷�j�3�4��_~�h�R��7܊�jr%�����
�"��2�Z~t"����*0&2�あ'a�V�q��1ȗ�����a)��*�@ �U$m�GS�2��צ���+P<���H��EEL
(?�3B����]8\wB@EW�����t>���R	�hH�qyAp^Z}>T�;�׃7	vo�l����m��͸�L�+�<W�ڒQ�a"�nҤ�g�yc��T�K-+��xŰS'�g[��d
i+	����Rۗ]�&I�'�-�,P�F��N<���Ѓ���|�i�E��pT��)D��WT���n�5`�=���V�"�`�]U��g^^��|?Fd>��
��/?�aO���'��ޱ���������s)��M�"�z.��>�����&ȹ����n�8�v�P��
���Q�K��VY�w��w�����	e�<�t#�� _~UWn��r:v��졠�;�ؿ�R�����2B�"C�����⒏�l�����my/��D6���]c�f�L��KK��2��O9�P�1���ă�#�l�w�z%�kPxq�U����iX���I��(�7�����忻#�:��?�^X}�Z\��֟�!У4E}��}���;L&��$R`��y��_���]c���XJA�磛v� �F��?,Qq��y��\�ǂ�
W>�`w�U���!-��H����G�V�1{����3��=F��<j�Cx�s-<�\-è&�.v�m�iv�w��ݸ}ؑ�}����xP����nx�ƙ������&�Q:).v�l�Z��uF[��w�b�.���*lȾ]9��o��U	� ��{�߃��9�:ꩽo���
�}�żIg�XÂ�߇E[��'�{$�>�ᾬ��Gש�$�	K�������6��q~o�AÁ���JP�[�w����l�F$��IxKw�U6��L^����k��w�/U(�0í<�#�܏�[��
�� �gs6�5�.�Z=���}uQz^y*Gu��5)Ct)�M���K5�����}��V�p�E@�<�Rh~�h���.O�s�����()ݸÍ��] �Ć��w�=�
��VZc�j�6�,W�X�m�?I�dy@Z��(X�ܝB��v��hW_/���UL2�dd ��1cQ�}
tk��'�b#��r�n�L6оr�C,�*�ͻ:N���W��pQ���.P�a8����(�4�����y���@NJ+�T���8!��b���*C���g�+�^G� c��[hh�wn������}�_0Z�}��E7����UQ�AQ���j
�ݜ��8^͋-t[��B/C�Alo�sB.E[~ˍT.��j�'7����6՞y��Ty�c�W��o�[.��?:�M?C�*������n�s�Rߙ�y͜�,s�����u���˪DZG�xF���x.�G��s[�Q~mw�p/�j�H9-w^�����E�:��S�R�2�	��x\}o�6�Ni�b��G�����%s\��Q~%�F}��n$1����Y���%���k�H����<;1g�%�����2��!b�⎮�sO���L�g�f���-Q)=(������X�f#�ɳ��ĥ��E�F���Ѫ� ����6s�+��I���(��K�eK*�-��
9τZa�"g�s�/ϊ7C��o�f�(o�_��S�s�Z��;_&J�9����v���!|�z�/� ��)���d��S&ē�e�����X�`5����d����$ʿw"��"]T
���<�ԏ!�hPcWȈ��؜1{��ׁ�@��7��gsGs����1��m�G���)��l��r�ɤ�!B� 
=��^��mi�e�
�q٩ƺ�T�CH��i%���*����s@�=����M��U�m��=,^�*�GZ\�*S�n_{�=��0���r���������Y�T��Y���X
��%j&�D�;���
�����B����������	<CHu\�G�	�5����:?��O�FKb�#�2���$�=��
u~��[i�X��_�����~�x����x��m��\]������Z�m{�7�P�BZȻ�X�D���m���V`��q�����{�G0������آ��������~�;�ЕآoT�0M�U�1�2��r�}4�T��9�$�d>l[�MU��^���t�o�����+���Y��$�>�]cFu�A�)���Fm�_�����������<�����0�Cڇ�|�z�)�z�{h�\~�(����
�Ɉ��/�љ-��D[��~�ﾞQ�=���;o����l��������Ãr�lhC�s�Nm�M	��l�wԗ�mFZ�W=ţ:�x�*�W�+�8�v9(fuE��9�c����v�4b�~ ��\�ﱦ�ǌ#*_�D2�~��l�E��UZ�!���r�[d!���+��6#�-� 2+Xzs��M�ش
]x�k� ��(��ң�(��ο׿���H`�:��%0���z�{���BM�!�4Jꌐ,��sA�U��񴅲�G�h,�w�t�ӏx�T+]Gނ�W�lG4�+mЎh��e��XL�s��K��0�!��#Un��4	�Y�`;;#���J�IBZ.8@;�K�ofW�^� +H��.�o~v�}������PyjlQ�6G��u�#����Ox�2$�L�vS_6�˅��p����i;
,��P�tE��=��M=�S�������v��l^u���@�ԏG���d{����Ev_�^@������r�����RЖ�*���ůp���q���徫�j�Q�H��-%����U��ߋ9O���wҲϦ�se��:�l��۾&�{�<R=�G-�@уT�;��M��>+�SrE���.R��Z$X�RG�����.��ܝ�_��� �M��T��	$@;As���&%��&�OU����8�Hk���T���v
��j�׽
X'�ʾ�n����([A�o��"����x����T��t�����4�ͨ0<�/�/t���[O�*M��-��D~|���Gd��Ŏ�q�1;�پ�>��x��n�ʼ��G� 4�8��n#I���qAӡXR*�7n2�}��g�=P�o�q���'l�ѡq� ���H4�κ	�?:�eL�}��0���P2�C�7���mQ@.��iOo�?#��ؓ��c��u	I=)Jj(D
]�Z^�5{~�т`�U�,�W����˞>�jZ�"�7z�Y�6e�"�h�c�4F�:���,]�U�yc�R��:n���ی7]I�G·9��ɺ��i����Z^
]x�yN����
�X+�����yl��h7�i����X6r8��S�魄�	��{����ڂU��3�������g��w_uWrGB�.84J�A �A)����46�B}z%	J�y���?�X���eH�?��0�?��}
�lP�!�Yi����
R�'K<�Vq͡�A��Խ�ۢ�4�d�-=J/(U���T��|���d�fml��F�A{�W�ݠ1C�E����u�SH)������?PK>��
YB�W;8Lm�tQ3c�E^�~IЍ��ɛ�0���Z�4	T�}�$�:��T�~S�p����	#��G��6W��	�K���\"���|�,`h����sl|�����Rz�߮�q��K�I�QT;f���B��8�?NS�}�E8(ĵB�a�IF����O`��S��@z
�f�p�Wɭ1�Yr1�&�g�B�6���Lp��&
�C� �n�Ds�0h�>�A"�)��0�]�� ~:�v����H� ��R�r����i�mP<Ζ��Tj�����B� ]������K�8�Q��Ӱ�!Kr	����;�E:L��k6	Q3����
6�ð�f�����EE���<ʻk�h�bQ�_�n��e���it��1���c���A]P�������2��3I��4K��DR;&��ݱ��Ԏ�'6�YW��h�v��4��m�$�
^����v���U)�Pէ�t���+#�xhB��m�:E�7�X�/W�;vw˽�w��{o�˼��ܢu��H�]ζqfS�U��(/��G�"�{[w��Y���e-	������0�&����;"> V:���?��J�0��輈���%5%�7��D	���n(p�n��,m�@8����}Y���%��z-�f;�S���w�,�β��r�:G��>6&�Fʸ6m,�,S�d��q䜶��~�H����9��O�q˪�<=��[]|�⊰���Y���&��|ё����t�\r�8Q�K�5�����m������(�F�Þ��^�T0]�*T��P������ �����N�i"u�!��U�\$�~�:%���i�W\߈���D 3�}5F�D����6����H�q���3���=C+|�.��ZT�:��ATP�W�����
W�����7|� �~�!����a]Y��pV�����`C�+���
��Az~��2Hs�ϖY�ִ1���|w�|��
�6���٬���w�@���Q�����������������
ʞ���|��Гo/@:
��� �!1P��'�'�-f��|Vy���
߹�
g���2V8w5+�u�������y�=���"�i���q�H�LZ�l)�pq,�����-[�4����Y��"�Of��K�Ls�.]�7	!z(+.zY,�e�҅��Ɛ��#��}ҲD�� 6!iM<fX�$2)z�[��`a�".!r��إI�x��0z����1o⚥K"�c�Z�NZ7�W���C�p?�~�����������.~�w��ŋߍ��"$-��_�0i-�S�;� E/^���~,�-K���p�&-�~��%�u��u������o,���@[�`�	11�� ׅ�щ���F&-K����,)2a~l}���>�����QV�=���/��[2�̚���ILt�j|E�E����H�cc���X��+�����y1?m�}A���O�+��l�:���	8:}+��
�X��X�?�$<�_�<��#�?J�ǲ���X��,?����!����t��t>���|��ic�L�O����d6�N�|׳�𠁵Y�gmJa����[ݏ��u���a���|��;�;�\��?~�
�Գ��������LV���n��ӕ7}Df�16\�8h�t��Elz�<��լM�ǬM�O���LH[ ���o�fm~Uµ���#CG�~j��c�EFE��ƅM�8i�G�q�S����˯�����oLs��Yo͞�6������]�d���	�I+V�Z�f��25!�,a'�<W" <���
İ����o�!���R�E��9'6���
�˖r�`�bt%G�DF-���.v)�S��5PMg�5R(�Q������}�Ӑ�B	�N�C:k�ɐ� �J@E��%-�^Fy���ˢ�FǭXme+y^b����,��;2�]x��8o��yӛ�3��ٲx,h[�| ���&�[�xE,�KV^��GΏM\���a�Y�������҄�/��V^���ҤG��$�H��&:>i�҅K�[��f$�&��%Z�EEF��,.�{�� 6f��eˡ�(�/aᲄ�Ik�ҕqd��yё�$�� �Z�x�R
ۥ��!%-�NJ��]�r!�/�|udtR� $��+��qK��H�-�^���R+\
"�J�"c�ڻ84�^)W��(K��'1)r>�Uǃ��A�2�l����8��n�x)|��`}��y.\
�.��*kI��y0�؟�%�n-�t���K�\:?V��������(��.���#V>�t����� T�/�Q��E�À.^I#����G~�^�.�d�UK�bH1�b�@���E��w g�w@��w)�&or𘁂��S^�Lx7����=)2)r�B�I�i��1�	�w�LNHX�0=6z��ؕ�а�,��������'�|q��	1X"޿�|E,�m��t O�Aȫ��'�x�F[��C
�Ϩ��J���ItN�88��E�N݇-^	�N���\�8i� ��ȅ�͏?���p)�c�
�`�%OY7O<�y^_��h3�6�̠W9�����;&&�p�]8P���Sa.�ψ�s7lE҂Wq���X,���%>tsⴰ�y@���E�u�����:�K�彶,a	ҽ׬�w��B'^��1�����2h>�j�q��-K��(1i6��Tfq��H�
�c�aB��e��Ď����qP��#��DJy 29V��f`?r{!>}�d��+��
/���/�&�/X�њ*�?2�B�U�v@��x��E��ݼ�p
����&�.�J>}�I���4��Y;�����w��x�M9kS<���;��},��>�����=���(�a�r��6���y���f�6�6�u�C���},·{F�h)!�#�&@f�A1��r�(��
�;!|g��X�mG��MVk'���,���d�cɩGM���F�N�δ"�=m{��A$�w0V��b/�<X��zh����:����8����@�����I�ݧ��5�m��@q�ʖ�d��S�dP�=��7���
1w�{0� �>�9��q�g����/k���\ \Zm�����B�
'���dRوxRp�%lHj����6��͖�͖s���c�(��-|Y}�1ڻ�����A�g!�=?�{O�=!]��?���+�e� �|y�{�b����ϳ��o@W������ʁ���=(�4�5?���2�%@��
����.8�ü��?���M�,�q�&+�`�_�"HRPKDWi�t�g��h��o/Y�ә�
��
�;+��$A��C����#�荟���:)q��b{�"�U����}c�\���Q�� Iw�w*���
�TBt'��� w�@����f��`*�WAW�P!OP�@?@7�
O��V䂬ly- �bў� *
n�? �v� W&^L����0���2̇{A��6ھ��08�B�� +���o9u���Bzฤ��c���XH�����Kp��m_|m̈́:3ͬ�5d�i�fC���ev$L�ۄ|�g���U�#�P]G�KS��@�*7��^B>���Kw$��.��[����j��\ n�@>#�P/c;`^���
p�
q<�6���_Af�|���ې�:zs|c=+4��������p/�n?\�A��XV�ϣ00���87�f��}���Ӑ��8���G0.�U��P��3���Uс
���O���Ň�p�]�u���}�W�},�f[�,yjk���ߠ
§ȃw����H�~B���q��UND<.���7_�ȉ:�D}�
+�~������}�U��|�r@��r��5�v�l�9�g��C��H�s���8�i�ɍd"Ѿ֊�n�_����'\�d4�~�qS�=L�I|�~�/���ao��jWn�|���im��1����<�k���^#�_W�4yQ [�ץg_�qыW���R���tS.���������7T_j�i�K���O��v��$�� �u�&-ͪ�pQ-'q�XPc8�G'N����wo��m��G��Gע-���Zb��vC�N�r�+� V�U����_�3�I���'�q�n�3���H���B�|<{�
�zτG����`��1U�˴�#����3�i]��{&�|9W��O���w�;�V�.7��SC��G[��g�|t�_M���hӬSj�Ѝ���6�No�x��Q����:(�=�Z��(d��$��?�b\�=u���e���w5��m�O��P!�V�\�]�o#���F[�������E}:r;�Ʀ��fD[vC��A���P[d����V$?5DK�="MWq Z�H���b���i5uSfi���^�76�a����kL����Ȿr�r�#�� ����W{�՜�D��~-(Gnq%r�e
X��w��D����s�zQY
V�\��Q���3�Խ�_�)=��M��w���4���_��'�_�4�l���&ͪ�pQ�*N=g�w�c8Wt�
C%�玢̳�Ug}���s��~���c����ۭ��UP�cvEuo����Z��'r^��Gr^K���ag˭'����伖��6�H��z���v�cr^���oϡ��R�$<1���r�S��Z���~�'9�{�����'�I9���伖k��9\���/�0T�+2)r���;�0.���(Ȉ�r<w!�3�������;�1��6nSgG��L������G��C"�l�y1ü�A�
���Ak��{X������ײ�pi �W���J����=��&��D���"�G�����Nr���79a��*��-9� JE[v�A���@�-���潀�B[kO���xv�r	���	O"��L_�T�gM0k���v����w5fG�IJ�v)$�w��vw�l�0�cJ��Ni����A(�CU+M)�{Z�q(cs�#�*J�2�Y+��zT!�¹k��ũ��ܵ���k1~˶���z�a���1��Ns+�����KіY0{���ܦ��%���іCxo��?��� ��\��\8O���3���=-ur����a?:T��̏"D)9B?��ۜJ��%���AgBq®�Iȉ
](*xt��m^����&���F��l���o��Q<��Z���e�+�
因���G���% ��
�5і%x?�z�b0�-��y��ze�R+�\��@�oA]��Au�gx����������u�1�T�$��P���M7�P�*�LK�����t�u�?q��#:{�Y�5wvJ\������
��;�����u��ܡ����x��CV
2%�KP�=՗|:�
}�=���G�ʳ��ڝP�t���ӣ6���ӎ�=Ƨ�YU���5��Z�J��*��#�~���3�ď���G��&�0�|$����lo]�_�/G>@.%���(I�(����	�Z#�Z\�����;�C�uiܲE�(\��xl}����>]�-�Խ�-����>
��٥m9#�J%l����� `{�-��2GAd��<��mўm����oU�>����+�d��]���,�\��$�ڌ?:(/n�5p�s�#x�߻�I��62b�	��Lb����žV��r=�!Gb�j�����*���/��@�]�b�g�%c������s;z��z17�o�>���к�{{G����:��_�����k�g̒�Kf�-��V���Q<�b�� PJ�l�6ؼ�^�9-���E@��E��<rϕ(4݄�ˈ�
jC�
�}{����/G�[s{�^��j�d;kn>������l�3_��dN��9G��	���18ѥ������6�uTxeH�
�����4�:��=�v�;�pmqm�J��i�
�a�W4�ƻl�M���]t���>��}��:����_�n�}l^q�XRP" �csǥ�49|1��!�������l+��#��p�-pR�2��C�6��6�2e�_��´�6�k�#91*D/�
���� qe��]іᄸ������ϑoMLv�o&n�7L�y��K��䭨�����7z�Ķ��{;Q��pф:���ՎԨ�kh��5BFHVqEF�b'�"i�:����D��&���-�!ZѠ`4k��?�DLqo�8C��ėh޼|N���b1�$���&ԋ��+�r�����؀��������au�h'��i{�B���g�����t�ne<}lBoX����?�*�+B,��|CbF>ş� ,��y%o�_3RL�1��X��y�$��/��u��l�~��)(�)U��1YYҲ�`�W�x��c�o�I|)C}�Q��鱅)�lǀv�衒�m�ď�-k��ϟ%�&~%nY��=.)���l�Jro����1]<:�e�$Ff�< �,R�m�>��Fj����Y���Ы�/�-Eg�=��d�" -�KD���{3�|�Yu4�/2]�:�i���fFH���z;B:��du'���2�X�3-���N"uo�mDM��ܛ�6���Zh��;[�.v��.xUԋDs���잵�+6�b���R�2�g{�ֱn��d��N�|b���؂.���Lꏒ ?Yw�TA���j$S��e�}&Б��rSY�͒/'d��J=��$��$C��]S�voeSt^�l
 /#Q{��	4��sGnQT�ꬿ���0,K�#�D$Ug�+�r�$�A7x���	�z�
��-���MtN;R��kP��Z��� e/ۭ@[�1����hLQ������\�j����j҃� %W��� %������ ������R}}wc�8D��o���Z�i�zU��U���&R?ro�Ћ��.�<2�N�Q�B�D6��A*�s��r�G�ꊍ��:KD���sh�R�ySC���
��t��'c��mr���>����Z��:M���SBҜی�qX�廉M���O�&5[x�x�l0�UI\���b��k"$Fb9ܻ[\ve�Iou�̓��Xr���6��8�o�t�͗^�!����t��o�룷S�~��b�
Y*~=��x���훠���`�6Х��NP��3��ѪRT	K��
�і���?)>��H0
?�϶9��M���Y����ECE�o-1-��O����\N��AF�6|u������qQf��C������`j��ԯu'�P���n/���־�o:��ݰ��Fk�Jr���9L����z�Vs����"��	�7��z�����zDc�z��z$����4'o^@���/�E�E41�>kg�~��-��a��qtzk����O�<y���e=ԅ�>'(�z���~i?2��P���.?�/�� LmF!�Uc�e.�(�(�o!������ho��H���Q���{��r�H:����f����}����H�Njwf�/\�0����ZgS�������uR\7�@��3Y�b��p7��m�w���X�>��Ŏ.��R�W��
���U��1���*�4��Y�e�M�qF���M���d���(�}�{����%7���,��c�8�%$���N��=��&N��Q���	t��9����f����~���~��$�˴�(�/q�!W+�UΞ�nIm���&Pj��1��58{����'�L^t�k��Z�oͼxZ1gո��
L��+�����+�mh*�����i����<�jWѐ�`we�m�.�HFҜDwN����6�Dֹ:��@G��%ۭ�biر!����;��`4"<#��3����C�Rt��SX;��e��:��Nq�N�����h/'�)�)���f��I�t��/%�
�F��]�d� ��p��CƤ�r"���ث���.w����,H��]zR��ϲ�a�X�t7�����m�V�` 
g�/aM�����s�
vv>&9t��[���
�w̡��@睊��O[fH��`
-���JI�ꇿ�I
N��>�~�6E ��ͣIܳ-�~����^j��v�s�~uN-�aj�>��,�QӖ�9��+��)�:��=�������z�-���1���~���Lq|�4eX�(iQ��J��&Ƃq��HO�&L��-%�c5�$�hA��1a�KBv�
-�7?������<��;���i���i>s�U��.��O�r���
￳���Q���>�7v�vk��W���c@$�\��͚&?u�G�y��b*"�����|��s��cB���m�o�<R�m�������T5�A���m��]��:�u�N�@g]�0]��.P�t�����u��@Ϲ���og�1� ��9؀+��Jn��FQ�����n<�ã��L�B<C��
ہ�,y��7�)����y^��Tk6���t�!����c#�PR�c��.���
�XЈ�D�����T���ڎ	���BW��u��˶Re�l�w�>����^[�iQ��r}�������4�C��H�}���WI7�K:���ip�j��>��u��Q�F����cP��1:?m��+7|��@�<��G��J�T��6���઼|��<h\�?�H&N�6e�D�謁�A4sLr��D6w�t���d��̧����2�� O.���+��y5.��c�!� �3ױ+l�3���oy5Fm�����vw���n��z� �k�"�I��`�����������~��Ǻ����ʙ���[�O�.��0d��)��zZ^}櫞�/�'�(y�Mp���3�!�GN[9����A�18�q��GҨ�q����H#�Q8�t��x�[YՍ#�[@�����u�H��9ܫ18���XYO9�������)�|S##����T����($<��������񮾎5\D�ri,��C�� ��
c��Q�V<ү�_�~�5;Q�Ր���L|��Y�]_J���h�"Noԯ��*���P��ŎB��u���xT5�t�=���i�: vu
���ʽ�CKsU�>��6$P��0�Օف�Al~�~�ڪ�ĉ{�ǭ��.b�Έ<��J7E�,so���c�䶳��)Q��<G8~&-�(@���L�ɜ�vz��F=�T�x��µ��d�3�� ��E�@�,�U\M�!xZ'a��M��]��_(����
~���Tf[e�J,k�%�^�THA���
5zy{�]k�}�%�G�#��aş����qvy�o��i�T�)ƫ��u|��ӈXҿ�(o�jQz<�I�J5S��7�9/>�t�P��r��=�?	{�3h瀦{\�sjԱ���� xБKWDE���c��d����'����8=��#��r���k��v�G���M�<�	��Y0���N����<�	��SȎa^���7��(M�[���+z&���9�������z��N)�����JBD_B���t���i�V18�M��V���K��� �!�F�X�+
�9�6���8�H��<<�*��ԣ^	��.u���l"턟�m�*l�����i���m��*$�Rn�n �x2���wp�Ayi_��V��rp#'�R�������x�
^S�������p�g��m�������*H�Z��';.��)}=2���|��X�ꘛ�G�Q����c���N����G]}g����JE�{���p���/�g]C�ƫ�0L�m��W�j���l1��j]�������S9�Y$z���mµ��ΪO<��=82�ܾ�ps����~������	J~<�Ʌ��kB�bJV���β�L<�r����\�v�'���5�e��~�G�p���uL���T�	��S�Y{����m�wėɑ^"I7�H
�,��~��E��#��*�{��TD�9�?&-Za�pk�%t���("�$�^��YCP�Ä�q���M�"eD�jeTicԎ�
�CCT��4��*jkC0 'C>��rJ��
h����&��*ե@���0}]zH_���>����j[(��\Z-C��<��<� ���Q�H!bc67Ȇ�AF�+�A����\���~)�p�	A��{n�x�B��
1�����_���`țɺ�_?\;s��'V|R�lh�m�|Ȼ��XI=�2��9�^��s���6D���^hṛ$�m��׃v+���7i�ps
pw��|��A��ط~�+���8�sG��G!����:�@\?e��WI�=\Ā��N=���e�<e�����=��-ִ�Y­����KF��G����W_sh�<k�5�G<�����KxP�B޾�k��޾sŮM���"B�߮o�Q�L8}���H��H��HAh� <HNǺ�H�P%ԅ�D
�X.�>9,�n����H�+�@z:N��O�[_�ҋŷ&��+U!.9 �H��b�UdpO
��!RT-��l�]�c�Gy	�ޣN�zҡ�1��OɺR��/�{���CbPg	�?5��Z��p�	�-�q�H��}���JY@��dO�n������q-"��=��J����fl�&�^�X��WA�鍵a�'�Y!�|�.���߁sx�3��ukMCf�䴿'�����a��(d������@%�S������Z!K��zdSCA�,�wh�^�31�vR�Mp�ǡ�Q@B\	eDh<�F?���IN
kpkn�������"��%������2	���~����Ӏ�x��C5�Jg�yM-�	|`՗��2E(4�92"!`©&��gp�T]c݌Gq���%����$�}� ,F���q��BD�S��C��dZ��j�i�D�8����ɣ\/=h�g�E��<�"���5|�ٕ�?^�,M�L9���ǂ�C�SB���q@���9Ĺ��*χ1����'��q8Z�x����4Z�f�6��}���n��.aZ�u�1,��/h�&�Qwkv)KY�!�N�	�EHϔ����Qff�����if��
�R�yo|̓
��EG��H�q�.����p�}�:q���PfH�0�N�[�$Ki�yP�p�2Iw���2��j��P��y�I=��6Z%��y��$�X�1�p�-�{�g©W�J�ߜ-���0��Pc�Y� �Z�n��ܵ��R�bUqi񡵪��b�z��T���NAWܫW /B�[ >����Q��
��Z�k9�9��3c�ά]�����j�m�<t��0{
��<���ө�E���=�yS���^ҏ��^�窕�
u���%�=Chu�.�5�:��u��u}
�e%�ui\���u
�����,/l��B���3������׎aq�a+J	���Dh�����X�� �u�\�<�Y��&*&	��xȱ�QH��K6��E^�أ����!�/x���ť5�e�Tr�ɏ��eH^�qq쮗�/Z���ؽ�
�*�9MD�����O��o���e�^o-T��G ��?���A5�Rt{�Z��Z߉h}�'ȏ�+�O|�����A�>�.�NO��4�晠�g�>���YJ�%�{��`��4{d�t}�����nW7*�q��G�PY+�޷�� �̞�칙H�K�؍5�"h�r]��V#�RH.l}>�q���O,ݚ�Ey'���9��;,O�&ϑO��ni��&>�Ofj%�ZѨ��^�d+��<�`�y�3�k��	� ��\4���S��
mvրѦ�偒6�Bc!1��K��k�W��KR�@��,��/��T���(}�V�h|dk�j���GQ��%k{4۴rnp���Z���(U>�B��v5_�[+P����v��\�y�Tl^�̠�_���e/jE�^��2��P��S�E}�I�%A�IV���B`�B�o!��%:�R]!�~]��Ft&�Q�U���0�~
F�g���T�3+c5���䥽I!r���@���A�$T��oW/�9�7���g���`��6J\�Rm��y-Q
�-;W/"-J�!���Ŭ�c������Q��:�~��C������}��mR��yQ�u]���a�=+���0x:=:�N�A�����@�_�{�����y��x߳Ѐ��"�4�]��.��gR��R�� ������bޢ���UOvT��E^�G�+*�۠A��˗���U_֖EjE��^	ǿZ��V��P���������@��(-IR�n���B��Z����]r�]]����j
�5V����JYt5K[6V+޸ׇ��?�	�7
F`$�%��v'���$�F@�OM�������'?�����
����V8Q����r�eb:��y{��������y&
e��F��]���KP�:��(GW!��M_�pZx��{��\E�t��mS��6�"jkl�x�L�RDk���zmu�%��]����AHl��:3�"Pl���#.퐠����\��R�̬5�(9z&J2�B鵍����,��z|�-��ĺ��T�b��@6rz
�4����x�W��Zk=�����������$����~z��IJ�@:��;,��=�(�}
ܙ��I�	�>��.�ֺ���f37~�I�jMPe)�e�ښYl��Kl&��y��+�f�Q;��&���co/�����EВ
�(ZJU5�f�Η�7@Z�R���p�����YD�QR��3]K��#����C��z>Z|�]|��Y-Z��]S6��nc���� �3�0!��:�{<���
�_D���Yf��s�{��� >��W��!�Z�a����f�7S �
��p3���	q�V�bW�L9���ޕބx�gNn)��8B���<wk��R�W!d/�cfD�$P[���咵�-D:��c(��Z��>�1n�x��q�p�jۡm���qV+u��*��!v{��&� �Ht�e�R�4��@�h�2����d~?dH��Q��S�:E��Θ0����,v1��9�}I%��vH���ѹ�ȁ�1M�LՇx!恮�\��0��vq�l7�3"�[w�)��S�$L6;�[��U�^�޽�3I�(���8��:ș��=G-��o:��DkV�hhJ�ct�9���c��,̯V���M�)~%�7�O!YѬw����̀s�A�op�줽�!R;���=�@;2wzy��a���]X�F뉸�Xݠ�6��|��uJ�?r���>�T����68��,�\��rA1+�1��>W%};���ʧUCN��R�&��'j��MT]��C���q�����_��qdݣ�v�H�F�� L�s����"U�M�x��Iy�|����n\b���i�*�'�+�"K�KCG�h&(i��k��9ꊍ��+v����w	���`��<�^B"��H���D��Qf�
�Gط��QC�×��1b�J9���ҧ���^R��ء�c�eF��t�qz`Y��ٲ�*�����]j���7����~l�S�b%����lD����p�33G��n�l�˔����Tl$���}ҙs-O�^�]Se�V�n<�bo�&����-���cOW])�6'�TO�r�Q��i��n��D�CD�-"�d���X
UP�"�T�+ĠD}O���S�=q��'���d�/r�C��δdwI�df���f-c�E����ԺV�˶Y<�s�V��_.�l��yd%�Mx������t�bك}�)�'ϖ%�Ìs뒳�Ȋk7����'[�UP��b³^����o�c?!��
�~�D{�L���k�޸��6|�(��RNﯱ�MȦ� ��%���I�SE����4֐��^+g8�2��:�H.�{��;Gc���-$��#�#ehd��+&Cx�*�Fx��B����7B!ʹN����Q�v<�%�N@�b��~�� ��v<*}Q�:-4P���Nuer~\��?��Q�
	N-��W8��:�ϲu#���q����*�rcp��
��2p^�:qa���7���_�m"��z����p�k��$���E��
����
��O�4�UI@�iBGhF���5ξ�����>k#TRA}����ٕ�Q���j#���羁>��!����|c!�}��6"�Ʒp�u�=I�T�	D�0�#�
��3
nh	*#]�X�4����Ґ��J����L��eA�R%�Rej���^]�"�PC!��{R]�u����*b�<p|��=W�>�B�?��X� b�V�+d�/2�}T���Zpc��2}�|Dx[5�vL:oBYid=��V��}��g_78bjy��P>�H\�X���i�T Wd
�B(S�e
_�4�!�2b�{#P���G8~�{��>�td�>N��|�C��<�:�Y f���aR&���1�H�φ��[hђ(�'{pO��64z��
���k��*erJn�Bɿ15B��)�2E�L$S��\�L1D���������|
�]��@S��V�����G�؋�*֓�B��:}�oYK�@�
�;���&�J!����w�F!���?��J�h:����wː���K�@�Mo��8t*�J}�U��LՊ\�P%�t����* ��4���Al���A��A��o6�a'
G�4���h���'�O8I˺O����v�*R��}��ּ㠹ڥ���C	!,�ʷ�j-��)���) g�1�-@9�)N3���t�H��܏�̤�֣��kh���\�h�>��]���-|�g�D	�PG�Q#J��\Ά�3�TU�'��j�Hp]��P�!h����rF*���_����g�@���{��-2	3��m:=����@Ժ`w�f��󜆢�8à3�3�Q�X/�rC|U�ɥ�]�r6��&�	���D6��vȝ�b!k���!f�!�'���<Tw�duq�)�����b)�F�	jGpw��.<'�ZL�#݂ĺ�u��W����J��J݉���j	G>��:�|���,
��7-gt�S�G���U�	ٵK�:3�����t��R�A;j��7g�2j��2��l��uM���S$����f�sA'�z�_x7T�6�l��o}�S��6�s��!�`�m�d�a��Jۿ��r|�{��j������6�A����=�߯vQ�:$G�.����V㋃�!���q�������9xKQ7�m4�tڄ(+�u�h��L8�]y��ʴ!W��	��+����m>�ƥzpmSWH$���"��q�c�2+���L<F�F���n�� F	�ťuE�/�S��9�_����n)CS��?�Ӧ.Z�#Q
kV�A� �Q,��D'G,��M�ߛ
PG�^~K69'��&",�[�s͘��XQ��Kb�j��V]�h�������9��JF����.���.|'��i�J�U(����Z���R�6�QG��g�tY��5������B���x�����/���ɹ���úp�{�!�k�n\�=8��%i�i�-p�&��F:.q��@n5� t5�A�g�#h\!��U{��
�HT��e�C*�,;H�.���|���Jx7@�=�J ��!��^&M;G�V�7�z\R�� ��^oR���A���:$�����*C��)��s�羜cm,�Q�<�ڳ+�+7Y^��ux.��Y��R[�Z�rS�7U���HsEU�n�+���O�e�պ�kb�C/;�;w'm]������K|��\�s.����ZT�@%�u�2�qz�
s�'¢{���m�܋ʚ� MV���M��7
�B�+W�������"�c��9���3CH�2䲲�"M[�h)�r�h5���YR3+��j�ܲ5�n(Y)'�����9�9
�nR灵+\�ܖ�ZO��B��P]!.���x����._<��-���=+�2)=q��s���@N��M9�.��F���q�`Ax�_m�S��F�_-�|B.39}W.�����0q�("�B�֞����U[Cp{ɯ*�~U�C�#%<�@�!N�_ڞ���wd�Wr�#g֗������P�t�A�;�U8�\�#P��&r'+'�C�^�������c�|��U�{�)�V\j���f��2�B�E!'�e�~��
n�LO t�>J	�
�;L�Q��-�檕�NԨ:����[>�%@�`�����<�bM���0R~s��U4)�[(�5���Q[�H�c�����#KF��pm�þ��Qz��?@{�g����A�ގ�L�oN�������"ҫ+��C���m+�s�i�˔qY7I�/A��wi%��؇u�cЖo�[�3l��K�hˣo�s)�?�G��Y_ic��������5�@�,�z��v��y$h�u[���-6w�N;�dے?�GK����Uj�BmS��ў�����pbW�KP@��xɘw�@��HͿ�8��K㔙_�g�n��xH5�x�(��)�s_���p�7�ROK<3�J�f�
p����q��B�V1����}{�����t�k�	�J�
l�6e��U��jt�&�=���	)��NI��"�k�����N�T�R����|�~�Hw�X�S7�2nm~��ܯcۊ�xv�$�1���&��|.Jed|9��VP1�j|�W~�P�"2
�t��겇�u��TJ���KϬT�O��S̀��X�f�v��:Eh�[�_�T��D=C�6i�-���M6�r�C|�!��`��k�R�"�Ϫ_ܨo�~S>~YyN��P��l����M�	�Ŗ�@ދ��<��M��]�_GE���mBM>�!dQ�qr�Kd��t�����?�:�)_Z�!?����28��Q���?�
��O��բ\����A+�/��xs@�m�h��-Ց|�`��_�t�z�~�	��7��R��7��:��������D*��)A��G�����0Yج\��M�� h�\{�7�>��4Z���죜O�9ٵY���V=���!�ʑ+#>��#+��J"�ZN�{�թ�z�O������"�J�z�Ћ�Y/�O=!D=��Q���q��.�O�_�DR�f�]�9�bw�}��b�S�~�[{:��gs�]S��T �O��0}��I�e-������Mr��9�:Ƃ���1&�W4�罽	�4D9�mUP��g@H����$��Z���$r}D����mW� x?-��q�g!�����Lۇ�@�߻��GΨ� R���#+t#"�G��F�41�5Q��%�!��l��Q�ș�ɾ�F�F�q��[���Tt��C&	�_�"�~ٷ��� +��E�G
��%<�v�43�#W��;�P�Y�u���_o���W�9�P��A�u��&Gq]�]t�~'e�ӹ�#a	�t�C4|N��Z�;�ǑD#���6���g)���Z��Qt1��b(�3����_�t�>C��{}�h�t�����r�{T�+5G+��
��H��A��4��`����,��lː�|��&��M�
��Ɛ�L���j�����?�3Dy{��p�w8����Xo�-�x��a�3g��
Z�;\��$I|���(8f��W!��F�Sd��kM�KG�����7@�34���%yx�ݞ{	�O�B�*�����5�7F���=��~���@��f��`~j"U�r!������q����|��������4#]��6
|�zeT3�̈́/��ܲ�� 5+i�HC,�'@N ���.�ڣ��{��^�Bz��y�J�G?�s����8��=��Y2��2��d�������3~H��������
���
� �}s^��n(מ{Q���Bp������?�|�.�o�՘&�FS 7��"tQS�e�+�6��¥
9o�����.|
>P;��3��P>�x�M�txU���c���O}�
�����g�Pޭ����DG�Y���R
��gv�b��Dx���{�\������WSZ��y�ݎ�s�G���pF�g#�v����2�{��p��{�l�n[��{��15g���A d�x.c䨌Qd��9��T�^���,���������`6n�k(�r8� �Y�#��?FGgG����sg��מ=!ȭ7C[|n>�H7��U����g���!�*2��eDI2��ۓ8�z�C{\�����_1���H��F9�1�#���{������Qfp���t�i
`K�B�s뫤+uV�?�# ��_��X�Y�R�MB�C�<a����,d��z��b��fHG?����[�x_��yO�x��Y�gHS���â<<�{����H�4���w����d(�H�r�2�!�n
g�;6��Q]�:�ц�O:�����vMO>���g&���ak�M�-����,����ɽ[�HT'��G�����x��G݆�_�t�,H�D@w˟�9�1N�*�%["ܲ�g��pݷ+V�*�%S"�2�	�͍ѭ��_�ǍӮZ�;�M��U�ݏ���E�������]���Ӯ��I����}��};c��J=�#�x8�c�͉Ѯ�����3N�j'ep�u
�&����ސ�b�Q�q]wbX<I��+�n��D����k�c���g ؆<T����\X�D>9�d�����(=���j�p~�a���g�F�������֪fjݨ�U���t؜�b��̗
�����:<,b^GQ)ie�K�i-&�.�����IP�Ţ��7U��QHc�&Tq6h�IgA��=����kxf��`�DSR���Ng��y��Ըd�c �ﱻ߃���0���A���Um�RŘ����d�ʡQ�䘤����$�Xl�!����E�¿��g�(���c����p
y�{o�z�q�M7�5w���'b�{�c��st���Ҍ�Qe�~���Ͱ�A#����p��F
|��i������&�?H��s�R�)2��0ѐ��Wwo8ڲ�p�݋y�5�騇ZU�~�J�%����,�xzԥ'|ĂJ�ƨv�s�->]�s2��B� w0LGـ���G�WHSh�BB�J�?�E���q�p!����+�Ӫ�Czڟo	����y�����{LO�.����I���Ǵ���I�2 *?~��B�
��������i�!���Oh󀢶e���>	��v�A�_�~����w
�Am/<�58c�5�<Io���X����0��)�����m_=Io�i��}J�m�Y��f��Ż�6�[oԭ�r6}���?{;7$��҂��_���l�����f�L��s:jy-���%�KR�v���t�2Y�N ,D]�8�=ь|��Y��-�>���84����Cr)_�6̜{�Nz���δ�SKt�}��TSY�}Cc�V"-�o�C
�L��y�����A�}Q?�+�����n�[R�sC��eS��H\�By��I@�})�rk�f�.�q]�v]�f�����Χ���v]�u}��� ���ay������̳Y�Q�mi�\�ي}�S�~�'Ι����m�c��<�����V��~��$�cA��}�T����"���w\�������P��C'�2z�F���� ��S���N����7\r���u-�q�?����ֱ�Nho�^-������?x��@fx�^�c��t���ܶɱ��8y���s��=�L6��?�F�W�srC�<܆�A�|
T��ϫ��]�$~itÏQ�_�s��qA�_lT�ZhR~�>�G���c�z����q�6$�6�G��Ki�����V��F'��b�d�9��NU��~�T���+o{(��No�t��9"��ȦݾO�͇n�*��D�����?�k������zݷ2��f@�o�����^C�x�f��C�nG�������lt��J�|�"�����9���&���K�{��x��R"����:4�x'��7ߖRq%�6�!~�~T�`z�k�6�iD�
[p�!��q tgZ?�.;�-Kw��g$���}7b�;i�I©�oy��R�kJuр�a�Y������D#�|�8 ����e$�tvm.�n��K�>�>���˿���y\�Pt_g
����WܝU%�ӧ]�<��_!Z��BI�`�����:�"^��S7�9�7�������=�z�����g	�@����~�d7P�.�dA����z(�� �'3	��!ؙRbER6~]���������w��� �ᮍV�}?!r�e����Q ������/:B}P���*T ��Y4�M�?���M�O�ٿ��HP3Γ���t�pD�@!���f-�88嬷z
m�$����ˡ|����w�V���!a���w�5�!��5����[��ͱAԹ�b��)���J���\�d̿b�4 �w�8�&�i��Խ
�{v�Ќ�W9����a[i���7��z�HW����ުY!�Y7����V{һRP�&��<�|0�ܳ~Mf����
[H+�?h$��E��-t�O6:i`O�������� 6�
�i��/$�~�s ?�n��=�+�C	G�@��,;�9�>竿��,ʆ{VX�4�5Gp'|z�Q��C�b=ϵ�<Zm\$�^[����_!F0��
��Q� bg#�}_wﮡ�_�� Ἅf�}���\����%�r-�ڔ�^���]i�zP���r��qkop׆#�LJT�b�j�$��Ij/�����&˳��.\ڕ���{���(�n5��iP��; 7�V���P-|sn�ﻇ��s��Y
4���7��@1�R�+�zB�o�<��m���c�,�$\���/ǯc
���%B�X��Vv����`�������Z��{�E����H����6�o��xgem��b>dX����v���[ۄ�(P-��9������Z���F4/��kE��!�Zym��6P^$�
��W
.�
6���7�
�B��
De^��uE4���a&���}����m��6�7�ߙo�"Y���]<��?����_�e3�e�J�\���;]!.)���=�:��=t)��+����EHQ��.J�XG6�8A��o��
��E>z��!��B���F�~�ZLU�x�'��h��lګ��s~�fI������V���e���}�v��
��tğ�dT�AWR��u�cҌ�S����;x�;[/g�ߙ�Z���-SF����m3�m�Z��B�Ds��
w���ֿ��ֿ�j���{�_B,�a�*2�fu���hq�z���+��!Rto�u΅n �ܮ��oR��F;!�C k��c�;`��!���S���=�� ��Z��W`��R�3?��Pnn_����Zv_x�O'��'���`�uG	�W�\�"�]@�ƧlG��L���Hp�y�ӄz�Ye��)�{�s倻��}E����Y�H�o�Y�VX���ΖgA���O��K3�E�������cE<qcX���C�M��}sBl��M�4�?�q#�lf7$B�������1
�jEnQ)��_Z��]�
/)�m���&Ih��.[�q�[>J2l��]��ge� 奞A~i�;U�h=It\G���
�A����a)��NZY>�!�W@Fxz�?}P�Az��&��b��ÿ��Sz�I�׶�}���ޖCbJ^"=�z��~=Mw3/�okG��5y:JE�.�/�N��N�{@�i�gf+3s�t֭),�(�r3�Y�d&{
�5�U��%�A�r�����@?���Sa��^]���i]�i4զ<�^O�2l�{$�޹�N��_XJ�E�6ҿP2���w������S�*O�Bv���> exIz����@")-d�&V�?�
����@��'���>L�P����y�m�����]I U���Pew�Y�w&
\���AH��� ]VS�ZnG����":���w�i�a={���&p�Hmj%dh^
�𶧞��{�\��k.B�e@�A�;q�h��(���L����x�\M�ʐ��MU�DEq~[�8��
���a�U��E��e8ԭ�\|��0g�`K�a��2�%��Oخ��=	�Y)DJt5y�*��v�v�s_�3������#kfM\A}�2{�5���[c$+e;�C4EuQ�uT���p���O�N�|*
�5�ހ���:�.����.WZ�f�F���H����y���q˿�X�u�P��۸\'���*���wj��]�{/#�*陊j�A�TȐ�Lրp4����0�9�[m�w������95AiC���YP�k!p}�R�=2 !�V���q��=t
	���C�9�AɯEO,ѩ���/)��qOH"�ɹ�DnYX8���P���Y�6���x�<uj�iS��� n�
�vT4����ix�PKb�G�7U툏ƺ�hٵ��i����Dv$�>,�����@2f$	_/w�~8��i��󄯘�i���C݆�C4�x��O�������F��xp4%벃�ڸY�BQpAݧ��t	�3jElI$�$� �E�+��� ��%��/�����4U�����m.���{��oe$��CmY�^���?�6�P��U��A	G!v@��p���A�V�6|ZZ��%���,�b�g�9�؎84�8}�W�W'�N�(`��Q/�h���PC+5���5S�9���n-�ȍMȨ��8�������Oqc�J3��n
ф�TI���cI�Э�u�_�wy(���þ������2�2˱���9�k��#�Mw����f��ٝ5(���\��Ӵ8Q�#�l
����Y�u�<3"X'Ԯ��V3��9��y�ړ8�H$�h
�hdyD�{^��G�W*~H�*��N��}�(!��Lm�M�2��Cn�v��Fv���n��A�Z��B��* ���.
�����!�o ��y��������l�J�՜��P]Q
79�`Zw�"��O���6��G�tŤe���z�r`��2~�\lp@�B�u�3�G��H�,�-a2����QS����\���B�b8h����P���q�BgA<�T3���g�|���%�9��F݂3�J��^��Szϼ�h�7����� v}�L6�6*��?@;��9�Xݹ�H����|g�>�|!(v_ϫ��5Y��$��=8b �٣���v�<b��f&E@L�jh�3�B��jz��,�& QjB"("(S����G��: �9LH9ܞ�����4P����Z[��飡'w99��L���L���-�rرGQ�+֝�� my�m�	Q�d�znmջh���7�i���"!5�������E1]
&�'�-�N��n@�1y[~o&�~u����4�T큙 ���~��e-4O^c@Sbi�5Vv�c�%�p��&��W �� �F��V ��b"���B<�
�_�^��N-����(����Ƶ�}_>g:RQ��yJ5I�xf�q��hM���Q3m^��7(r�i���p�s�5+�zzN�.�x?}K-���<��^��Ù��g��`�7�, v���5��i���5+pݫ�����+����<�l:�����%zM�<v%����/�ʂ�e������w�<��0��,��l(��-$�ʂ�ͮ�ՠ+����	�M��iԑR+.Y"�g_�,��Rm��r_�~��� }��7�GX�#Δ8q�E�S��%��V���=7��o-��,�?[*��C�����]AOW6�e�'�-*/�3�	�|�W�'�SQ�����]",��>�3���d5��b�w�k~��e(��� S��!��/�"��
	C�к��A��7Թnhu��
���]��$���Ʒ��u���p4C�G=q��by3��ln,�s%��yaOK��Z{���P~=.(�i�u]�b�r�Oa�zks1MF�b���)��=q"�������DgfuB�z
�`t�qf�Q�݈��5R�}�ؗh���l� �����3�C<�|�6��s����"jz܇��2
�-�jn���[mN��4�� E�IQ��>z��TZNd�?%���x����5A���4N)��ܯ���j��c��-��`.|�aG�� EM>�k�a���w���Y.���3ᱩ�O0��5��`9�h=�z�<}�0|>��T��������?=�)�.s��+�&d)w�B��^5k;g|E��|||����
�ǩϰ�z�
}��D�����Z~��ꛙ����[O�Uu��Y��c�����M}+yt�������[���*)��a&�
�hԔ�{Mܷ�Wk�Tpl�]���|a(���{6U]׬`���P�G�e��K�:Muf���/F�+�?��j벙+���*��a:!lut '������-bwQ��b.,�P�C@X'�V��7��c���
H씤�O�Y>�PC���S�I%o�y閦��|##��%`�f�I鏥j�D���n힙���Ĩ���;�&��H�Z#�sL��������1N+y\IP�QI��ގ��[��^�E�������
-�c[���"��Ιy����X����ϙ�ԗP
�<��.� Vh�~��MT�ۑjQ޻�N��.�>��w
��]��g��*�o����~QW��ҼJi�s��;g���kkg2pJ�������{BT�R*RY�Z��B���J�j\����\���,�Au�
�f�>��|Һ���h�lC�At�ȍQ���֙;$C� :*��f-*�������ĊVE�n�$�?�AH!lCݦ�5��5
�5x��b��h��֍T�F�����63n�7R�sj�P��
�W����$�򃶯��B�j��=�����R�vB�`{o�[>֦8Wa(���֎�_t� �L7�Y����k�3�^BT�ӱ�A^r��{�'�]��Þ..�gZJJߧW���	�~�*I�T6�|��gT�6T��#P~!#+��~ ��顠.�1&�>8ߪ1�]�H��z!rS�@�Q��ݏh;�����˫}��E,�CL��^�8�&���+��Jf	��)�������ll��]8+��}�}���ęUBn����95i��OV���Ƭ���?x#��Z��ۚ�?:A��lW2ޱD��,(��ֳ�`����G����r,��n����#��ň�3�O� �i���V2Y�X3X<'��B��$�w���ų=�$�u�u����f���i�,\
nYjE���ȉB-ƙ�%=�\�u���8V(:�i�D�Y ��*�f�+ a��C	h]��q���* 7�渀P�&��
�>���Y��b�s�7��o><'1̖#twyp�x�י.��\���{=c����������������WO.x�9�k	��>��q�>�t�V� ��rm59F?�ϝ�.�v�~а�F�i��ozyA����x3�D��ޡgњ�@����O5�V7�9&$�2�Ʊ��6��
|�X��r�/u-�b��� �_T�8����OI1ѵ,
!އ/n��]vc�r|
O�@�
˾�ӆt�\�:4��^s�1ɮ��z�p'��w��Kb;�ݸW��D:$?I�q�
�K�_u��dKW�}� Y����t�r�O�E��O��ˆ�F�� �;ʽ��*V�Y�5��&@z�C@
�z�H'a�CY�P�2�i���6��ߐ�S�1Uil}�H��ҥ2{�K��������>���:ě;���ў��m;�����;[ ��ch��ذ��P�_���%mc���+2,Ch@\�8,|������/(�CZ�Ta�N���'�
���My=��m�ֆ؆Q��$Xk[{d�ѵ���Y�G�4�\'�z���]@)�����(F��'V
�]���V�-�׵]��AF($��{��_B<�&ҚN w/�������>/����%y]����6F���b�y�����l�dLy''B=ֿA�
��� �O��A��wI`���0�?�Dx�%��u�!r(3��1%�1=]c~��'^2�'�"�/%Qz:�ܲ��x��T��-rG���b�KT�H�� V.(�+�׍ڙ�u��J6<k~��~lR[�td^�`'�'�:��_&^�~d
|��h����1�9���	�+<n�E�Oߊ\K�N��O1
�ZI��>��qtW*�vc:����֮~̷ �ѡ �<~���#*b�@ˁ0��i�?8��*�8�r�� �RIqAe�H9�o�7��ч�D�B�Tߣ(|G�@<k/D'��ک	2;$s{r��53�7��"Z�J�I*�T��ԡC��&��K$j�/�o�z�k�off<��6!r�Rٕ��c:�z"=�W���I��h���X�� y�u�,���t+N��zN9���̻�A�G�C�'���H�-�u#T��M�Q��`��j�.<p7+����UG�n��[������~T�j8��	/���Uz���O�-a�<��p�_�����;���Ng�;87\t8d�v�v?��yw�6�=1
��:�����K�J�;�>�g�[�ض�Ļ��4���),��yK���3��(g��E2�k��6V.1����X��ݽ�t1`���)r���� ӑD���z�![|�Z�N~rJ�R����^������9k|��ji��_�{	�W4/�]Z���f�� ?h}\��l�%��+~myT��w��'36%ԥRؽ�I��u�M�	��3$Nۛ�H�^w(C����ĴT�)7y�� k�)� �:���[��h��}J�˦�Yo��N�zLoI�J���czˇك��L���5o��W��M�4@�EA
E1%�r�T'�j��̌W�;��� ��=�H��t�{`K�#N��E�<�v�s2Z S��9~�Bڗw�Z	�A��n��pK� �&'׏YJ���5��'M�����S�[?�%?mH��J�<6��)��צ�mJ�j�%aQ�q�gோ{NN�7��RG�8�פ~�+1��Ł�n��$/ҝˡ�2Q.�3�Mu��uk��wC$��f���k�x�?{��̛�������{������������Ƕ�ļ��Z8���	�?,���mw/���v@'-#�S�����
��~j�=5�k�	1*k�Ua����_]avZ������8Io�l0�Gm|y����J!���cZڴ�M��+�i�!�,ꘝD��������g�ə�@�AX�
�2�f�py��> ��*P_I�ڝ
e��T��˟��6C��`i�'��*��E��,�%>��B��9h�4J�S͐>I���m��U֙�ǬB>dya��
q
}�!nmi :��z�+�/��T�?��{�aD�>Թ.�I4EbC��#��z�kC�n�C���(ocaùK�.Fݞ���fg�ұyఁ!F���'P��""���	��N���{�7S����m6�_t�_f�}�t�����$�����4��?�eDCMR� uMY@�o�てh
@��mI�~ �4]5�ac���P ��������Ӵv�� 4h*���N�/�;��ӕ���������N0U+HRW�4U@s��єU�*Bu�P��W��*��]��T1uU�1��S+H��U6�����j�`�P��>°����
�s7\L�]v��)n���HJ��eO�9�[0��.�g��F}QR�+�G��}|�	E��?Z"X�k��jNx=@�|�Q�[�*D��P����k�ɮ�~|/���̄*O����/�6�5��Y(w����[���D�o˰�C����6&lI���3�A=�/>�Uw	鬒�4JD*�$N�Q��~��ҷ:?��w��@S��� �����p���o�J3�3������TIJ�O_��t9��
��%օ���i_N�ˣ�	�"�>s�M����'����s��jId*�ڊ4����r�J�|ߚ��/���9.?�t��PK�]孏t�g[�
����:���|�ݥ��c>j��V{tޮ����f�3ju�3�2�so~�Q?�=����3�9]yZ�dp��l��l{���M��>�����Ӟ|�V����Sb�N=k;�_\��^Ά%ze��1����E
�|o�)|�����(�5Cv�����ӱ���Ck��4�V*�ؤ
v`A��R��KY,��@��X�ޤ
Ӿ�4��J"� ���C���E�	���'�Bbi\l��ʀ�%L�����7�vP�n��l0������>��_)yU�7� !
�P'Z�h�Nx�������A��Q���h�T��w�^{K!�,�z���6�}@�UN�p���87�:D�H2p~B��}C&>�w�r#-PᩀB�o4�i5A���ǚ�|�RP���4�B`�~i-dP�B�K������FTx�J�r Z��;O �P�EJ�_�V�ԝ�>�v:��TG٩�'#�Vvޗ�T�����Z	�Z��@�4$�#��N�V��
����:xo�?�8L�0[~����Lu~z�o�	��C��^�ҋ������uQ)�;��ᄔ>�Z81�Ŕ�M�OF��$
>ؿX�����+
�ܸFjE�z�Wh9ܚ��x���@tC��u.�M�s?h,$�I�#tF�d�����B���!�+�'�A,M~m�=/��I�j�Ug2d�]m	�ѤE8W~�˄��r��B��+9��lP�?UnQ<e({��ٺ�]�>d�-\]�Wa�*T���Cu��t���he1����C�@�)(+(/�[�}����?P��̑���#v�B��%��_���8(��^�hHz8T��NHX�?@�Ok������-4U>�m��v=@~-](�D"����jɜ��EJ�nv��U��YL���Uɂ^+b>@��P���lrQ�ص;�i���-�u�?ڶdH��!r����>�.����{yk�~ņN��[t��^���9NX�a�ʹԈ��GPn�:�=���ev,"o�E�����<�+��1�z��@ ��]ybP�<���B�o}~!X3�+�:���qF0�\�z�R2�^��$Z�ڏ��Ι�pQ枩�b��q@=�
>�E}�D��+
3���PfVdThU=z�O�'�$D�}�nȓ�2��b����
����#;P���4O����B[��X���$Z���9��J>�P^�ؒ..Ay�[�\�
��� Y��;U���t ��ıf�%�;��!��?�޲j����tf\H�B:U��lȦA��s��$z5>Tx%_h;�
i:m���!ݦU+Ӟ����`���s�����Y������ZVp2�� F��=4.�z�����|Zk�J\���cG�p�R�{oң!�'����^H����r���:�C_,M;���̡��ړMx�ďbR���Ij���Uº��Gs.�'�~�wYq: �f�5x�tNE�'�,����3��UU��b�Gբ�F��B)��!�<��ADH���0t�A�2�#o���.�
D��=Z�P �ˠ$�� �B�; q��N2Q/��?t��>=�9F��F��ƴ�Ç�#@�ߨP$�5���>@�C���$m+ݶr7����V.�X$:8u��U�LI�Jb
:��(J���^���=��<����'��jI�J2NUM6T�%��KT�wu��I�����f�%���Q�d��%O$c���C'��<�- �蒛p�Z�T��Y��u�P��I���TjM*�{jI��4�=�PO�dP��N�Z����#�\��Cߧ!��;��R+J������0�_&ۡj����{Z�����#�0�}X�+�*&G���3���Q唬���l���"T��*�{����#���f��c���]y��� ,c�tAx�&�Vf�A�U(��[O�R��4��y�ߙ�1p�;@��3$3]%!#�*Z�� �42��۔�t�_�̯A�׈�l���4�<?B��N^w u�TE�_y�/���]��9�%�A\�?֩c�4I�N*{K�֙�t|����1Pr��|�q�N��:�&]0F%HQ��*{�-x������Z-X
W����7���!s�Wk��hbh�V�7)��o��2��ԂD��F���*�;J���|�!��>�������,B���'5�tM]�E�|�*�a�b*I��:3M��t�4��Ck&�턦�Ce&�f����j'�f���P�3��L� Y/�:8uR��i#4Մ��C�FW���jRUM��kc�E�+���p�Zat�H����7FbtĺD�,�6�F�psܛ5h����Y���T�ƨMO�
�� �Z�����1��G4K�� ���>>��w"��:����k�I� �I}����ac}�߼�f��[�x��O"v}">�:�m�<���Iy�h�4X,~
�R��%���P��%�����R>4��D	X���jq�҆���r3����v�vߵ6$�PȀ�?f�V�����d��bq�=ܐ�P�x����,'���CёĞKS���,��&C�t%�����]pN8�ɭ��߇�C��X��Mw�!��w��
�y���,A��P;'iG(oZ�m>��i8>}����`$R�����ߦ�������F�뛙.��5��8P��I���Ւ�hC�(
:�.����O>Ln��N��_��$�6Q]��wy�������cd��m�ͯ,{�^Q[Mi�3�@��J������Q��I}���'��)��	��X�����o�~�k�	��}4��h����5p�s�@ !�l�$��=q��5 ���֖[Q���Z�v�T�"��TT���������U�z[[o#"��B!�̜����������i�ɜw�w�y���F��bp���x4T��y�΅E;$�/w�}if���m��$����*;�Yk�k�mq-3R��G"��ź.b�-ֽ2F�����
1�o���J[�J��h��o�9��G9TA}ǀ�W�eH�t���@w�P�C�P��Fty���6��A����[7.&��#6,*\�烶edT��ˀe�ص�0�Y�B�{^����#�]=�;�63/ʁ�#?
���n��_
8J������rM�G'ڹ��;��i�U�i��\P�͈o��Mth6�5=&T�b�t��5����'S��Oe�2�mZ	ニ�٪������`=��uD��*���n���8�@�l�������.(����R�ǖ�þ��k*r̢����M�-�v��y����|�:SfC=VŎt� !�'�4�b�(dޣ�����8��|�r��&�}���4b��za_���v>32��2��5|I&�<D���xv��KZ�{z,[�p����H����ѐ�O��p�m>��B��9�7�/�%=B�w�{3�{(/��ȑL���Q^w�d�2��Lb)��>�YP�MI\�P� �B
��jĖj�d��@J���BXe���(	��;��d�4���$�S�9����q-�+�q�����;��"�=w�_�Ce́���ǵ�|#�6q�6q�61ι��r��Awdc@{b�,��|���F
r�4�f�09� ���zqЄ���3��ZhG��,��R�!h?�p���/���t����?�������c�_����)L�ݏ������a�_�� �'���/��<e�9��ׅ����G蟪
r�s4օ��a������x����s	��r6ܱ��~�w)ڒM�Q1^wNp���iW�q��1*���=}Vf,N]^���"�Os+�k��D���ҟ
<A$��L+������N�~�l|��J�X7Hv���ʅ�0���6b��v !c*\ȃ���y 4mݭVQ��_���k����v��z86�axlO����}+�k��D���9�����e�~�A�|a�`��ZE���3��sҩs���-G%�N�[�<�p�>o0��FѺ�>���8��k>���8�c� ���X�[ڬp?v�b'����WiI���H�c-���8Y�OY�B�0���v׾S��(?�!�����a_(_���X��T�z�CAH��� ��?�[���r-ϰ�DM,PK�a'J����;���\�4�+�ѐWV�*��=�R��^ʸe!�}����Xf�[Ʈ�외���9^8;n��&$��
á��_~�YPK'}�C��|�V�}(���Ք�ߠ�������/��L3��%�y4��>�� 7��A|q�k�=�V6_�u�hxu��� �^(�᪥l{g��������:���$��'�JC��H-	�*��~�����5#�ӄUR��tĮ~�Ւ`�KSF��{
�{�}�@JK��+����C��k��;�ɟ���N��'��X���A��vᓪ������Rr�gl~~�F��[�!�˯����2��y���{��=���-Kh������#���II�w����f��X��>�+��`g���&}6+~�Fo���:b�ʄ��?���AP���e�I��+�,m.R�;_��<�C&�;r"���b��$=���Io�A���Mt�Y=SF�V�~���s��4�d�H��0\ ��$ԷdP!�;��8g�o�qO�ø{�fܵߧ�8�d�*w���C��{���ȼ�G���kq\>��5�V!���$e�6C�%��%��yA���%��� /�ܐI�Ƙ�*K���:%����>�Y���C���,����p���t����HY;��E�YD��Y�LJ�4q�k͔�:)�a�~1�P�����ښ�t�����w�[A6��k��:���(m�y��#�7dq7�K��C�� ��l��P��,�<K�LT��^�臸����[[���,{�[=Op ��s»���Ol'@�/���h�|��ן��w��$�b�M��g؞��a�?
��~���It�*
�8��SN���i��8P�Q�G�A�wk�0ݑfC-�W����;+��(3S��p���v�ǚ��
V���[��R�K�N�_���X����:����f頙`̂q[
δ��z	Б�#�Z��gZϯ�IҞF���l�̳n֨�RQO��
ǔ����[Lӏ�f���lʬ���q��Пi}��GC��3#��5�ܕYY�י��-���Q
�rK=�y�2�+I,�QU�b�j�t%�G� �V��H5� �����}8c2p�^ƕ�ګw�i�P� C��"ڻ%��kC� ��^�m�fD���Z���q+z�� �|6�s�V�B4&ô֖��L�G����r�1��rVF�϶�̴�<#� �������XS�UwaYn4��g���^F)~[3t���W���6�{��UF�����y;͓���U"�(��=�&�����U�XJ)ꓼ�-
nn���sN������
0�(��bWc��Js4}�kp~	��?6������=�^����1}{�p�����
.W����C\�)����c�����@�ꕐ��];���e98*����?Lƣ��i�osԢ18��ܗ<���ޛ�7KcGh�����Xw��PY$V�i<vy!���j�:c��N;��-�����{��׎�Y,Z�''�ߨ��n�{�Sj��f��Q͏���-�Hf�=����jDc�W�ogT�1�1t��j��b����� z~,�Վ:&{�/��
\Pm>UI��
�(l[J(�e�0�#�m��5Tɭ�f�N��AE�\�x�o�f�'����۫��+�X����7y���w$�N.�)��M�ye*4H���0�w ��Q������#r^�T�ۂ�QF�<� Z�EZ-�|�ec�J��IZ�y�ɜ���La�!1���t�'���_D.R�팣�*�m%l�P��p:�F�Mq����?n�:����vD	����ё���)��5Z���&�٬�~0Y��/v��)�T0��}��Hc�{��c�[�$B�[�����O����hm_��GKPeET�⃊R��5bK�Id����ƣ�bt��G����ut�p�򍳑a��U�����D�hٺ �w�8u	8K$�T��9�)E��G�n��
�F� �p���~�H9?�XJ����D1�(�#��%��r�R��/�(�K�p}�l���fqi��Y�n�N��p�z����S�A������S#/+>'�c*��Ɣ`�|t����c'ї�0�E{�A
���G	��y�b7�M���iPU��
Դ|�}���曝�;���c�]�|��M�|��ބ|#A�~��uW�p��͋){cΛ���h�
>�󆜣N�t�:gU��m��ޚ�@㋄��H(J�ב�R'>����<��� lZ��I8C� P�!��N����+�Nw&�m$P'�����lV��כ�3:�.�6������S�z�(l�D��7���-���7w0:]�
� P@`�~�
	7w�J$W��{�tƩ�R�� 8��	����zq�W���cQa�J�Ռ%�7	ߛ�>��KW�8���U�@�^;HWq<@�#��b
���B���i��E8ӔB���ص��w
��J�P������j�倅l��?��(��p���:}s
:�u"���;���r�-!I�o�~�P��a���x�"�.��.��	g��O�M����|��:נ�6�%3��̾�Bh*a�It��2�T�%4����U��5��Q�^4&�(�uj	G�����qIĞ��� �H����/�t�W$
Xԛ�pd�p�f�KJ�Qp����f/�fA�f�-s*���m�VX��:i�@)�$B�"��� `�8$���.>�I����&36�ݨJ��S�oÏ��e<M����FK���+��;n:](5�"������Q�R3;z�P����&'��r��ѷ���]{H���@� ��l����~t�m�{/bB+�MP��\D'�N����e��Q�ѫpy����:u�u�����֭1�u�?=0��E�; W�;���$a�,�'��X�13���f��?�����G7��#y%f�&V%�I�(�J�"���
qg�VhS���)B��'���8D&!ϩa���y��4;�8X+�O�@c����[Cn��+ҡƯ�B±r�	 |1��n�N�`+��=Q(���-4A��AL����(���,����%ʭ���!��d�C
Q����CB��vG��\u��h*B�yoR�:#����
>��@��(Tp��0|{�i�>�b��,G��{E�F�����ڥ=��aqN�U�ќ�}h��[�cU�c��i�^��*�.�G�Ç3��5T��v�׭=r�o�Xw�]ع�}�� �������P��B��А��^3C�]�,γ�:^�m�n�*ߛ�k��FQ�W��t �g���FO��x�-h��܃?s�u^1fhs�w��lH�kAۑ� \ºX����� �Ӌ�2�ًo�Z�ꂟ�N�xk�{��!@�TB�^�d�=�v�k
PV5�?�C�,FI{q"F�����PiSα(�xJ~g2�s��e���7�5F&�@�j�$e�٦w�%>h㧡dRD��{ ���v.��B/���ic>y=\k��Z-�\AI����yBg�R��2�%r�`���Uƭ�7��H�/~펔�Y�����.	=���H�3����UԨ�����������b�m_�>�B��m��E�-k��Fg_/8��A�>��j���d �{������S�ǀ_ln��*t�����g�P,���M�]�Ҹ�u�@D�t��A�OF4�A�T����zK� l����`�S�2�Ѣ>~B|DvDo뢻�|+n�>y��ן�B+A�h4*)��,�z�T��<�u���ƀM�hB��l5�>Yy�/�HhD�Dܐ;Ei�op�GF��F-d*"��Du�a/'����-����p�9@nB��R���� �}m�N�'���(�W��U�����/����!z�&#0���.	��tߵz|g��g�%^���xtg-�o�b���[��� ���-�9��zs"��b������4�mc��n�-�U2�Jwu�>q�z����Q�'{��I��-���[���ͺL|d.dr���~��s��62���W�<t�c�*#������ �t�gO
C+5�ת��{�)�):����VZ1�}������)M�HE-�I��IT쏺�W`��Wp;���r�6��ud�u 7Ǜ���wBUS��_#
�O ����Q�Ya�Q�%��y�ܒ��]hS��q�t��ș��h�=�e?�XQ�������P�7_���_�<��ڣ������ұ�x,G�����(�'���� ����9^�)����+�'��'��'�Q׳~����@iv�PV�t~�{v�a��N��Q�Ż�t�N��ޓ.�bs ���p_���"7](��>/ݛ�'�F�~�9E4Tyg\�~
&�b�Lv��TW�Vq<��&�&��̅��UQ<���O�D��4�f����/���$@�.�o�%-G%��A*��6�g�=Tt�����gN!'A��xp�J��+���Qf����+l!�{hVȢ�!�x��T���J��^�Dp�����p�dǲs�Eix��g	�v��L��M��M���y��s��e���2݃���i���V
4�-�t��{�!�*�gő͞E�,��,���EK����ן�i����[�{�y;�+@��e�Ҩ���4(ܽ����"$��rva��?,(�H2��H��8�dE
��>���C>��>��,MN�!�\.d�I����sH����dt���*B+�i?��>"�#��p>I�_�d�F�_x������ĺ�Ѓ���@sy��9��f1�|H֗�=�#3�3C��6�/� ���Vf�w��7����q+U���&.>7>�[��-3�3s�"����Y�e��fQ�=����������u!b�V��2���ER/��Q��26��������*8�c�'�������V�z��3S��ckkλ�YT���,�����ٌ:���@X;��i,�&s�ޅ�t��g'�s����դ���p�l}�y�=���y�s���^ �~N|p#��#���2Cu�Q�xp��������Ξ�f$m��̖9�J.��m�_�[�GW�|��p�Ѻ�I��s}����m^Zj���yIU:��N(�U���4U��ʡ��>�L�TWu��#�C�!Y�Qǳ��J��v��F994/�C(��"�����T���Y#���Cߘ���j�vޡ��+�9�U������g��{#��ƕ>�|q��(��wĽ�҂��B60�9��F��/ܣ�����	~�dg�95�uM��_���C1\��蛸���()lռ:��v�y�D?����������/��;��균��u�4���Y�z�F�X]}�m�%�6��P�>����kR��1f�,Q���[�+�g���#f�z���L���|5��GdX��6��&����H��49(|W �(�N�
,�c��i�}
����S�����"$���j��o������S���~�#^���EH�BZo�Jx�Z��>�N��mu��=��tĽ�����o�3�BHD�`C`���b48�K�\��=��E��Hm�9���~]P��ϩ�����_k���Ed�>��&��Er�Ӟ #2�al�����J�`d̨z+x�t�m!���%Z�a �|�]�m0|gf�ymYa������g~��s����̛<(k]ȋ��Ч�s�
��? ���l��6��"����Gm|f�hҴ�z�<��|&6[�G��c'a(�9�v�|�$5p���"ɥ�Sˮ��O;�l�ϳob���R��s�J8-\�f'��En���*,-|R���:�-��7J)�&����I�) �c�J����9� TK�!��
F�$
��3��yǐ��~��%���>��RÞ�s��boFe|�������Ah�;�&�)�,�*���?��Ԙ�:�P��5_��U��o��7����1�`{7����sȭ�6�kfv@Qgƺ9�X�)hsH������2*�ٟn@%�~���.�ѩx���ۉ��D�lѓfජ�D�_A������{J#�4�z̀@�N����c����q��HU�9e�y�Tz���dM�K��طMw���6�c+�\�_�+:5�a�z�+�0m:�t2|�
���x7c��榩^ː��������[Ϣ��޸�n^����cd�O1�^f���/~g\Ț_��⾼�Ẕ�(y�bQ~��8�ҩ����jx*����M���
n��,5��ײ�dH�X�ࡌRq��p�;�K�C��c���t*fw�]
�Ls�5&6퇃�P"�f�WT?� �E�Q�xhƣ<��6��]]�fZ�/�{<ٔ	E�����d8��Q��%�3���z���ӣ�8�����tW!�� б��ڗq����yѿd6����Z�?k�fjAZ��v���M�3����*�GH��W-<�Y]���ҹFev�0��gs<2!O�*�T�8&C�3�����HT����'C]����*/��e c�uP ���we��M]9OW�o��:N�-�B������tW?>ǆzX����yA�(�E�T��������ǃ�$�5�@N$*��2�IOS���`1����n��oo����d��Pt(���ۄ;ȵ�L-���(�9��x�Ϲ����!�
��oH�"�	yͩShѴ� @)X�z ����s|B�9�������M��J���FZk��$;� uho��{�}l�oѣ�KpKH�
]��H2��Ll%�>=T��-����n����ۖR&h����}��I��Z�ށw
�;�%��u�0��GZ�E�~���U5��!���fO��3r'�[����`�
�J���_��RT�j0Z�z���k��p`^оuYt�MB�����s8��Q%���ܽ�جjO��;�S����=�Hu�O�EDF�p�A���LƩ#��W�Z�6O�p���!$/N���KEBZ��ԡm���b�7	7�۳�h#��I��utn��f�&�~���}/�H:G{������Vw/pn��EJg�4A|��,|;L����U��� :�2��@.�QQ}��LBnb���P��l�>��?����*!?��n��p�-�~C/�	�\�v�0L�0LE�T�Gi��bn������ ��ގ��fl7��{�?dTٓ�Qd��s�_��eߊX�@�Z48�'|��%K8}H���ˮ�����g;j�y��Wm���Z,L*�����?ɛ���}�ղ��/qؐZ�E D�諍²�;�IB%�&��B���1��iJ$%|�9����c2p�Et�E�
W>s��P��[�����\+����=�3������D�k{�ٰi�4�F	 �ͤ/o ����5R� �y�W�����*I'=7i�)��)c@}��!���v�D ��6�x� 6�F�IP`����:�Xep�K6�?v�j��lQg�OAH�l/a��a�0���88@\z���b��h> ��v���aϯخ�>��<l�Iߛ����uz��}u!��ˁ0@�J�齓�3�������tw"I6�;�,;�B:�jI-k>�\V+CG��T��)���y���YR}�<~��b�Jm��m���U^�8t�Q�{6�����ۋ\��� �U�H�ęo������xe�����pQ�
 C 3J�y[�i�&���P����hk����:�M�>�f����U�וB��/���r���r�nt�ix�}s�;�Ā���Pi�e�]�S���5ѕEp�z���O^Eq�����x��"�n�����'�<���7`�.�K��!�~ǖ_��9�{����,�����������6���sJ�okϫ_=Wެ-��=H��\(lx�P��<��� �C} �nl�(p��T7��N�2����N���)�u����V�	���:���@LTz� �	�B�ƻ�\���At���:L�5y3�-�Z��}��E�P�l��l<��uL*�T*-�3Ԙ��ޟ!l�Შ^=�W�s�9k��^���M�EǇ��7Nv������R˫稰��]L����b��0�~���D���S��6��9��Ζ h�����'���J[����\\c�e�C�����~�<^Q|�^v7�z�7�$�|��KОk��u���7y�a�s�I �"�P�o�+�z�$~Gt�2��8��*�Ā��@[��/�:���:$Op�G�b�j�F��[)�4��U"{�=���6K�r���癇 K ��X��zn�o�bs����Ja�I�"�]�ZE潭��1�⼥���Fm���B˶sf��j����։�	��_���7d��ތti����Z�j���T7w�̈́s�W��a%��+[NӸg�#�������K�:��W���d�(��χ���*����g�uu6XK�>h:J�8��`�JZ�͑�S�v9	�٨��)�kR�>U���_p�;�o	�Vʎ�8m��V�gA~r��_���^��
$!�/@�Ed�A��5�i�POc��p�kȖ#����T��7Zs�2T�V\���c7�������L0#���Q/�O�ӻ�b�2�o���5�G[����>o�V�U�]���'�U��U2��>�BlPnݍ�$�z���E���)�
�h8����n�>m(9�$���fgbߔ��w&:���yA{`��α0�p���j�$��yO]ف8z�fMYf=Xؔ��f�F�~�t��-����3%��Z�xF�WBCKM�OﵶˀIߧI�	y�
AG9
,���W쥫�A�/��t���J#ED-y=ú(ô0Rp[!�\�sF�Y9�n`�uȱI>6�0�f���%�-T���O�z�l�"��ai��FF�\3�)v6t��|�Bv�l#u��>�]�L�>3'a]��{1���	�0�I�D��{Wp{�~J��:&�"T:%��E�tغ> p���T�87�)nHB�n����&���8?�让��-z�F��� ���� ��$;�$ioCl=��=�����������vZ�vҧ����4�ƽ�
f�HA
��+E������{���KF��P�*?w쒮̼��ʨG�e(7o�����g��-���W�	����{_)���0��%��t��wQ�
��[O��uw�$|QFO��d` �j0�6�s����p�2
_]7҇��5B.hIMv������������&,��E,
���]B���cb��	���	%�N>��P��>�i�xDȭy
	9Y4}=��tNtؕ*x��.|w�hw�`w�*�Į$	���X�Z��SE��	��[f�.
�ȸr�=����{(�[�v ��4Uʌ��^�?��)��^b�����׸ה����K�V�/�t߹kV�ivp=OoW���c�������@��nz�؎�W��+�z:wFշy<�*��^wL]&񤘪@� ;r����ꛮ�r�/;0�T45,�?l�{j���1�
<	��
l���)�f6(=�A!qw]&:�ȍ�bؠ�3�J(���m��\O��Q�M���$R��p����8�$�������Q\j�>�٠6�ofMBM���������*����4�s(��E�����t˶gj�7_r-���F*�=����gj����K � ��_�4�=x�ܒb{(\����䇣�S	�ޟ�hD���`
4L��`��3������?<�!Į�@?�	����L+N��Fw�Y��2��<HwoǶ��*���ݼg�����������B0�"����tHo��f1 F��\A�P�K�� �C�K�{�,d�z�s���W�z�8��I���4zr�UCH:�$����>`e૔�7g$;�k�����%d�%۪��F�5�C\w��I���p���b��F�B��h�,DJ��$�;�I\�)�6��g+��=�����Ƣ!�_,���k�'����=�_�h�h�Ji�?�`�i�Ngz:
w�W ^2[F����`���J��40>�����a,�k��@�/��O&�k�^��f���i�%ի5��7�����3�#�J]�=�?�����/s{o'\#Re]M�!�|q)$
�>ށ=O�Y���@O��<��><5���ؖ���9�3�#m�������<ve���@j�C��B汯F~�ķ|�BE
9%�؞�����͓�Sa����ێv
IdZ�Cw��+��עB��YЏ�w\��_s\���������,F!,�Բ��XNF��
�ш_F���t�.�1Tf����,��y4����<���t��C��;�����pk�>�x�LD�p���[ |�98
Y��љG6>|�*|����<��c�D��G�<]�!�2����xq摸� <u>�y$�a[�g��#܇O�=8�}��"�B�̊[�zy ��G��� �;�Y��m׻�.��ZW�k��#�#�n{�@2���bQL:��UT>xv��.���販��~^���y�yMU�.��%Kv<����_P�dB�'Bv<�_Z�~��YE���x�M�L{�bj  ��*���G�'2dG��&��y�_�A&x�~��>葯x���1R|~/d����i5���H��A˰����;���0��_~��
�p��x��j���E��X�����ǅ~�r�����$��PO}�q�b����)ܵ�����5�~&�QAM�)���
���	5��)+}2h8A0z�#�$��ېՇ������c*k�B�� �o��J�5��o3���^	��$�31�Ч��~"�a,��Lp/�.�gA�<����^=�����$���?5�q���~�L�w3��&묙�n�T5Yj�i�BI�4
���_鷁h�':9�:�=A-P��M�S�?�q�vq+����I�	|^94絆{��y�_Ȇ��\�n�����#sܒ�1����bn�
yr�.���ZPs*����e*�)�-����Ա�xG+�e����2��o�(�p�Aa���l)r�7�5ߓq;� ��$��_��z�y�mr�݆�I��O;hI�ς
�8h۞#$��`mivY#b8�!���-��Uj��x|�	�~;L"��IOC	����6�y<����0}��F�)�������ɛZ	p�²:��3�H��4p�8��4V=��oR�p��Ko�Ө7:��G{�
�`3f=0$S/�	��#}�%1z�t�� ��e�R�����B8$ޣm��׋��4�k�n��c��1���&ß�|�_����%�=�>�'Pb?��1iD��e��90�%PDc9`(ЏP�>��Ox?��0�����4�k��Ǖ�g߉'�\7=eſ�\:o�g��g���/�ۜi
O��-�A���!
�^��B���z��r��	������w��^p{)�i�����Vo�^޴tNJHuf��·[��ڷ�������~��;"�4p��6��L�U@
iX���z�[� kM\�����X�qߓ��7�w�~��=E�%r��!�o�A���
�d���l3?�
� ����Q��Hq�K�?�PC�(��o��(��[ ·>'�{�g���|� ���
r�` ��<}��(�+x�N%�K5_���Q�
֚$޿��%EG{����4�*�uB-`J�PA�Q�	t��_\���G��U���'Q�U��U�x R><�рY�|�������0�}��J|��� %�٬�\��F_�_iĠ*��ݺ�k�uX�P/�w���� �+���u��������ĕ]�Ӡͧ;��+�;���O����ގ��� Rp�B�<�d������g4�.BC�kV� F�=�P���n�Pd���]o�4J������ONo��[�r+��(���g�tL�;' ǩ1p}j��Y%�(��1�1ت4����=ZS���c�[a/e$:�<Ks��7�����
F����Ī |�ߓ���\�$�_s+}q������۴^�h�v�J�`~+߶ϥNdP;�e��n	_?vø��P���"S��'�6���5��.������t��m`�DI�7	r��6�x_�Ȱ{E�ƽ�� ד{�k8�lo�E���O�N�����[U|r��M"��]
��&&�[��d��UR�|I�9���R
8J<�D��!K��f}��V)Ks�y��E(�w��\a;)ѧ��E�e�;Qy(����rVg93�l���ʩc~����q�E�a.�U
���VΉS] ���"F���������rS/HM
ɋ:��ĺ%*�	K��~G�P{��zps�I�+���P�0�}yx	?ak����YS�v�⽄����{�S�y�|�/|S�� A�[xȀC�(mGH�y��uo��t�r�V-\��6���M����n�͛��м��������>�,]|"��������l�W��7X�[Z{�$	;ݽ8��޻[��Qr��H;���3����6������-�_T���F��2h;��%�����Q�����A�����!�����bGM�Ъ^j2��M��|B���I.R�ܤ����9���Q;�<d��rѕ�͚�\\�e�!����hqݽv�3cg� \��^��3Q	�.���Q�TU!�����d����l*QK8��R&����q����3ٖ'�=��3�	�@|�#
��������t{|�(��^Z:x�=������;�������"��h�1��O�iPb�G��Ľ?� �p�3��Z*���4�Y�������e4��(?��$��$}4�!ZexF�~^Җ���Wbg�ф�Ȕ�L���������ix��+�ĵ��jc��,@�Ú���9|H
��I���/@9�b�k��z �"x2�V�� �[X�p:��p��T�)Fq}�r/�>�B��F��D�3zM'��C��Vm"B���|�:4�����mF@���/t�6�`��䌂5�E:�b�)d*է�+�M��@sv���Y'�
)�Y���7���F��(/1�8&̈́�N�كY��ZC�ӈ��ܾ��K�J�Y�8I6B"(�3 ;İ�nZ�+��9�
�^K�?��;z������)��X{��ޗ��/z_b�/z_�������/����������@���xD�ދ�<�0�����[_�����8H�dP�=��M���ݜI�:����4��,'�-B�)H���
6�����+�\�Mp@��ND�;�~H��
H�%�=.~v*�{��B��q_� �<�s>%$nbQQ�����g��w&�5��_�(�wf�!�Z��^-�bg�9�oI�f�ϐ�5���A���	����G����hc7��dZ��C�M���ԟ��E����>ug���h���k��p��!%�n:�52�RV���Y�k�*o'�g�.Y�j��H�����/��3�����;ǃ���:�+�=u���������gө�l��x��T��K��Y�*TB��*�ů�Ǚ�YȒRN�~�@��-9�}�K/c�O2*"G���V�Q�=JFͿ
�nr�q�����K�eL��x�דA�E'����v9#%Ȫ��&��2
�W�H�}��,���	Jįp�
��1�RMl
�<'l��ש���":+�*.��M���ɰqJ���i���w�|��6��趵�sT�[�l
tԔ:a���(��Z�>y�����`t��Q�-F��)8���WfGɴ�7$o\N�_�w�Oi�Zm�_�)�?��qy	�3>�xM2&�ȅ��Ũ��ͯ�*k;Ťn�VԨ�oF7��#O�W7��pP���b��$�)�V�J�XM�L��G-�kd,���'��e���BfL�W��䨆Bߓ�q�ɽh)��D�p���kh�������.}�U�
�X�2�b;�ݨ�:�3IN�̠�̲�~�À#�<�{q�'�'*b&����Kw��_R�A/bOl8�
���'�28�ŝB���D�Ʌ����Z��m>켝B�L�}� �C�\�	��2C���`�3��&j!��*�A�!I�7�p��7AƝ/�÷�(�ަ ۯ=֨2�d�>�3�wȭ������8�'�^?Kӽ�3���9
xІ�M'��c�8j��Zi���=c;�[S#a@�7���aIM#g�w�8��!�F�F�	͛��4�O�--۾n('tHKj�G���KU�HQ?�7ɐ'7�R���/-�jl�OiΎ�j���a�GP���3�o�f�n��0{���BI��>8�e�y�?΃m˦�-�k,�q�)xm�~}z2�)�6���L��J�g3�5W��Q�� �Țd�	����Z��:-~P�)���^f^�?�R���|�Hu��'��*�缁�����'�v<���Uel\^X�	$[U"��!zQ�9�/��bo� �M��'��O���{5��É���K�<m� ㇠���
紈�
�3�q%e)�w+�����M�y�go�g0"�����}O��/�<��(��V[�rqew��y�}:>G-�\�3��1��q:�Q\p3�±řM8�dS�s�ê.�r������*Bx�T��BQ���>s����'��Jܔ���U������!@�.W΁,�p^�}U&��,jL��;~�̣�{�P�@e}���'�p�G���hloU�ȯwv�J�g/��tԃ�7�_��w�ē=�Q�>��E��� �;��V�\(J���aAUc�Hd�o�=�1��t�D�7�u$wހ����B�[���}�Vj
M[)�I��\�����x��C�9@ٜ�8����c\�m���,ݐx�P�@c�CL5�Ԍ�Ř��Y}�u�}�t��_��.O��?w\I@������ge~����+��M�A8�� }׼��㣋J����0g��J<�'Թ�2����o-�pQ� 5�7$�+a/�x^�E�3w�]����g�[��9&!R�S�i��v��Dx��)���.����8��`gT��d�
,�����W��@���~ ��F�,j-XZpa}h�ر��V�]��i��F�.|�n=��Aඈ�F��vP��'���S)b�����ꃅiB����DO���F"R��+��S�g=r��Ȯ�T�}��s�� .��I�UX��{Xo��e��lA4D����Db�if�l��3)���ɧa�~��ZP0�'���}��.�!/B�G,��=}�M=us�J�9[�r��]S� �J�y����A/�]C��·���6y� �<���,���r�{M���'y�� �ԑD�|�O�]�*I�Z*,����j�0t��X�T�[p��r�֤;��~�BqkN��:������3�~���}�
GbC�yn����2\���Uv�:x�n�Y�( ��ȕ��UzAhg�C��o���}�����4��Zۿ?�!�����*#7���']�ʋ�/�����;�j�*��R�QztF�Wo�������F�ra����F��}�����xaۂ��纏�����nQ�.l\���0���+��r��l����O��Cg�k�5��Z�@�L2I�+d��3�V�d�I5`P
�C+��.�,.��/��ه��V�Lx�y�_��+���
���S�я����#o'����!��s	���b=ߟe��7y���D��[��
�JS"'j�$�P�c�#`�'07�"�
���Fڌ#4�F�� ��h�f�(f�pG ��� .1e�����x�FQ�w����J��4����f��ɯ�O�ݑKes���u��<A�W9/���ԎK�p��z���{<Y�`y	�1�2��ʧE��b�t�����޿�g;��U����
#��-�X��m���K�B��v��q�� �(������w5�a�(ߛ�+�X�}_����,�\���(ۨ�n�
�%3t�=0��E\!h�	U(C�};�R���ꊢ�� pw01j#D�~+{�u�ѯ@��Ѵ�+��?� P�ɪ�h���QI��+-	,r^7��3�O~�Qi}��(�K��ع؋M������ny��f7eA���=t��Xo�ǉD�.	
�FK���+�Eoft�ryn~`������c�`�/�F�ˬ,�咹�ƛv�u���d��/u�g)�'��Of���7���t�ѹ�����^�_�@/�Ug��H�J6/���S���߿���'=��ܽ�����>��]���ן�.#h]F��[�Z�kP���w�uH�_��A+�r�z���\Ex�m�hb�!�9���:�De�yLvI���N/���%�s�63�3C��L����m��֊`f"��܃�PM�.Q��fN-�n* ���D!#���m�W�>֕��}E0Õi��-� ��?���A�4����C�%�g��p塐Ǯ+�u�g�[0�Z�;X5=���������WŃU]Թ�o,�,�_�<�i��%��S�BTa�M�	�Cf��F��7�a}�:e$.����~L�ȳ�O[����0�B�n���  V�ο"Z�t�ڧ;*H�{�ׁ�%�^e��J���=P���}�A�ĺ�ݜ�+��M"�JG���:�5g���A9Ya9�h�&���ZMH=��
��{�]����O���F�&R���7����m�Z��a�ڽ#��5	GN�^ghQ������ ��C<��&%s�9^���ʅ�y�c�d�? /
����c 7��9�jؚ�����4Ư8��^y��x�%���t��K噣�M���7s���q�KX9� s��ϕ�-Z�"d
�8ʋ#�ƽ�`z�c�b_��d��@�s��)���r��_v­j+�j纸S��<���;������LTȂ	�'Q��b�>�)�ak��ߔ']�/�*G��r��_�+6��i�V�KO��)��x��[��4��9/|"�A��I�֭>�\�\�9S�:�]�����E��0�О S�m���2��P,�ɛ�,%3�/�j��O]��0ۧħe!�j6��5&�m��x�z�6n�P�J��S�D�E�����&Ho[��s�3�ׯ�E�\�ٺUys�
�Ǉ�B��1�j8ϙLVa���! :��0�{�'�c�&���l����&��_uv�8�E�
f��.���|��8C�Ġ��"��{��M�r䯫�B��(���!��q�����e>h�U�T?$�E���ߑGQ6�4�@u�"h5~cW�8���ˑ�WM���ua\��b��'ra#\��6�.�6r�`|�5Z�H��4$�J%IUJf$o�o+�T���d�8�}Ϸ�� ��c��+��ɐ���?v��ӷ
b�s֥��|�� �"�����<GX�w�#��=�1,��$���.I�i��Vh4B<RH�̆4vA�H)
� !s�‵5Pš8�8	���S����Y�֊c�J�Z������Y[ۢ�=jk�D�Br�Z;��=�������iM���k��]��{G�s+[w�08�A�Baf``��˯�-w�S���,,�H-#X�`H�ی �
mI��Իz(��hN�o�L�L.ZN�I�*��j��n]�2��-�T�����hT�"H�J,W-��^jӣ(>X���4�h{�q(2�c���h̳�a�u������!�!�!��~���
8�<�y(Hq&��[�6iû ��
>���J$�%��;�u���]Ӻ)������b�!DvbJt��0�I	 ,�#�?�.�����?(���{��1'���2)��=0���������}�=�u�_������:��H\Uȩ�!���˻'z��(�xd8]��n|�)3��\Ԣ�Y���m#�s)p�s�}��)�y��4ޗ`N=󫟽o�!}k&YΘ�fJS4
�� Ā/b@�{z,����I��d,9����@*�2^ٍ(7�t�G��8���	�|C#�D�q#�8q>O�x��>��;��x��c"F1�Q5v*�<-��*��W����M���e����K|�(��G?�<����P`��[��-^�&�ԅ��̣t�pQƤs�ԕ2�+F�!_����u{���G��kxi�F� Z�GG���?Kp�G��˻>
�n|\ݍ���:$��Q��=��Վlw��P���e?8��WT&�Z�(���;��Xe{�w$���gEѣ�����OF'L(d>��_뤂{�G�5>is^k8���2�#@͵���� 1��<=G���}��*"���|���6���WA��_^�3��#�8+�s)_�ܹh�(���AW^~b���	�sĆ�q~�����0��b.:Px]�1�g�i
�o���"��#��/�n#�>4�P�>���G1�� 1
��|�1
o�ݔ?RI��ί)�pq�T'Q
�3U�Lz>�	��J�6�C���^n�i��7
#r��E�0'�� ��Ӣh�l�b۽�({9MOHXޖ��
��P�:^-5@����M���e?���?F�:{�I[1�7�A�����-N��M�3y�i���Kc�����MA������(*�w��(\�Yk��:�D�e�
}��v���(�av�[z'�Q�91pǐ����6ZX+lȡ��(��DF1�1j�('ߗmr0zT*R�RKl�H]3�`��f�����jF��(B��N#�]���I�!N�+��W:�j&���,�6���2](9Fpi�TG���mlʤ��T�������{ZvĿ�Xv����]���Lv�FУ-�M����G���'���pË�
���|��O��-T@��I�&ӎz
�D�7��ORY9�C��i�\q�Ex�)2_�ה`��rU�T�Mۢ�
x6�%l�� #o��p~���+Z�� ��%�fNv��{��_�[�x��\����O���~� k�3��`b|>���q�=�d:{�4%���ԋb$z�'$�BV�4cu�s�^���oہ
V��S2$M�[_�j�|���]�C1��Z�SC� 
�<z3��!����Vs��ס����:�%z�5r)����������?	B��@�u�ޭ�K�n��<�n���wkܽ��
�jk�����l��_������g"B<���C�K�k)���C_K�ؔ/�_��)DL��̡8��o����à t�Z�,�6?�3�E�\�p?����t�.�:�\ ���,GZ�B��-{��|$5n=e�|�<l��fNܼ�)a�x!����� ��n� �f���m�/OR9��K�«����f��d?�b�`CO��z�-	ק�%$e��l����-���IǸ{����%8�D}7R}w������5��$�T����;�YR#<�*/�g�����\�i%��/�C��i��S�?%w���)�r ;��(�r7I9��UR��ގ���Ő��lZ.d�A���P���ǥb_��qq�O���X��\>��&!���2T�UHc�LWU'(���5;��8�T���۰��������|1���5�e��u=ʹ�W�(�~�_e�z�����g������c0l��3��HY��t�x����rjbȋd{Xa��Q��[=���&Ҷ5�V?�hVw�(V
Z*�0��|-��v�5��
ʅBHL�O%��T�*���A֔�bbB����O[V
���4�r�:�`��+@^RK�DTɁCUr{�4�2Dr5\e�����/�=7��v��t������.��Y���Q�e.MجO��ۖ���D>~��]�^l��q��x��u����C�������*�[���$����Q���Id�Blmj�
os�˞f�ȫ"x��aOyo`�_����F��P�]lh7�����o�Av�`���w�A�گ�Wf�^�Z�1�'|G���']*"����Oys0oމԃ�|��)B��:#�o�S2"#��cwS�;r��~��>���,wtK��MÕz]�
t�1���d~W�#����x�J��<�����>)����D}�V�kz�D�1@P9F X�SzT Y0[�����D*�p��6W�	mQ�a�R։��_��y����c{F���Y�G�������o{��e�a��ez13z�m���bi����(Ci���;[�!;i�so
���+1@��;�o]�T��I9
��M�: <H��u��r-��d��M[���x�Ua��Z�ˌ`��1�	��<�Sh��	%��TDt��Ð��(�R�P����_����IgC�#����� t��\~al���:��CI���<+�٧�@��ڊ3{"�3�Ŋ9��s1�j� ��Sqi�J
�43oAf3M�$@��zoq�z�<�A��
�q�b�D[�+��̵f��)�
^ݜ!\���`D�B�)��
��>C��Y�&���
��S���8��(Jn4��S0�l��m��
���>��8\f���H���]��٨����>�Ȉ���콴���ȍ{�°>v�-p���~����������~�.@�V�q�
�#��A�C������n"��0}�b�D[��)���Vw���p��0G<!�@��83�P?�Yx+���!�IoF�l�@�@/:��� ]��o� �x��+�#��_��`s�g���^�����Ȭ�w/@�&^R4�M�K��I�)�����4v�S�J.y��SBj�w���#Wv�����h��P�^�"�����;��s1�MW#��1���c��2Ω�`l� ��� �qm5S�q�@]w�[]��)���f
m�82���%sp�H����4�)R\A��&�-��W����c}��\^�B�}�8�v��1��'ΊԻ�]=�	l�!��E�TEӛ�f�]Jꦢ����-*Xq�G^C���\�%d�������]~�#�,I"�F��x��{��(��tE�S����lX�sgY'��@[ԱS��OF���,�%$Ei�E
�
�X�v�I��˺݃������=���1xNN�_KD�,ѐ��MDD�c�+m�v�v�>j�\Z����	O��w�b7a�U�IN>�s��}=Z��*Sr�'��R�I����_�@|e��l�'������)"�r����%`����g(���9І�j�r8C �y5������4ʯf�V�I4�$3O/�>|�>ŮBb�=.��+��v&q-�p� y�H:�� �ܡ@����Ġ�������
z̻�5>-Ťʻ�W�=ut(�b�X�&�U���C��g��ȦpX�*I:���P�,I\��+����W�\D�=B��}�l�T��@d}:�����[�X�yF`}uێ���(I�u�W�~���bU��b�p0�="�b�L��Di���u�o�޽>�"	Ϸ�O���c��fi��]����$���zIx�ހ�@,��r�$w'!]���J|S��J|S�J|S�C�:	o��g��m�<f�5H�A
{I���^���