module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(530);
	module.exports = __webpack_require__(530);


/***/ }),

/***/ 530:
/***/ (function(module, exports) {

	(function( window, undefined ) {
	    kendo.cultures["lrc-IQ"] = {
	        name: "lrc-IQ",
	        numberFormat: {
	            pattern: ["-n"],
	            decimals: 2,
	            ",": ",",
	            ".": ".",
	            groupSize: [3],
	            percent: {
	                pattern: ["-n%","n%"],
	                decimals: 2,
	                ",": ",",
	                ".": ".",
	                groupSize: [3],
	                symbol: "%"
	            },
	            currency: {
	                name: "Iraqi Dinar",
	                abbr: "IQD",
	                pattern: ["-$ n","$ n"],
	                decimals: 0,
	                ",": ",",
	                ".": ".",
	                groupSize: [3],
	                symbol: "د.ع.‏"
	            }
	        },
	        calendars: {
	            standard: {
	                days: {
	                    names: ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],
	                    namesAbbr: ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],
	                    namesShort: ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]
	                },
	                months: {
	                    names: ["جانڤیە","فئڤریە","مارس","آڤریل","مئی","جوٙأن","جوٙلا","آگوست","سئپتامر","ئوکتوڤر","نوڤامر","دئسامر"],
	                    namesAbbr: ["جانڤیە","فئڤریە","مارس","آڤریل","مئی","جوٙأن","جوٙلا","آگوست","سئپتامر","ئوکتوڤر","نوڤامر","دئسامر"]
	                },
	                AM: ["AM","am","AM"],
	                PM: ["PM","pm","PM"],
	                patterns: {
	                    d: "yyyy-MM-dd",
	                    D: "yyyy MMMM d, dddd",
	                    F: "yyyy MMMM d, dddd h:mm:ss tt",
	                    g: "yyyy-MM-dd h:mm tt",
	                    G: "yyyy-MM-dd h:mm:ss tt",
	                    m: "MMMM d",
	                    M: "MMMM d",
	                    s: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
	                    t: "h:mm tt",
	                    T: "h:mm:ss tt",
	                    u: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
	                    y: "yyyy MMMM",
	                    Y: "yyyy MMMM"
	                },
	                "/": "-",
	                ":": ":",
	                firstDay: 6
	            }
	        }
	    }
	})(this);


/***/ })

/******/ });