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

	__webpack_require__(479);
	module.exports = __webpack_require__(479);


/***/ }),

/***/ 479:
/***/ (function(module, exports) {

	(function( window, undefined ) {
	    kendo.cultures["kln-KE"] = {
	        name: "kln-KE",
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
	                name: "Kenyan Shilling",
	                abbr: "KES",
	                pattern: ["-$n","$n"],
	                decimals: 2,
	                ",": ",",
	                ".": ".",
	                groupSize: [3],
	                symbol: "Ksh"
	            }
	        },
	        calendars: {
	            standard: {
	                days: {
	                    names: ["Kotisap","Kotaai","Koaeng’","Kosomok","Koang’wan","Komuut","Kolo"],
	                    namesAbbr: ["Kts","Kot","Koo","Kos","Koa","Kom","Kol"],
	                    namesShort: ["Kts","Kot","Koo","Kos","Koa","Kom","Kol"]
	                },
	                months: {
	                    names: ["Mulgul","Ng’atyaato","Kiptaamo","Iwootkuut","Mamuut","Paagi","Ng’eiyeet","Rooptui","Bureet","Epeeso","Kipsuunde ne taai","Kipsuunde nebo aeng’"],
	                    namesAbbr: ["Mul","Ngat","Taa","Iwo","Mam","Paa","Nge","Roo","Bur","Epe","Kpt","Kpa"]
	                },
	                AM: ["krn","krn","KRN"],
	                PM: ["koosk","koosk","KOOSK"],
	                patterns: {
	                    d: "dd/MM/yyyy",
	                    D: "dddd, d MMMM yyyy",
	                    F: "dddd, d MMMM yyyy HH:mm:ss",
	                    g: "dd/MM/yyyy HH:mm",
	                    G: "dd/MM/yyyy HH:mm:ss",
	                    m: "MMMM d",
	                    M: "MMMM d",
	                    s: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
	                    t: "HH:mm",
	                    T: "HH:mm:ss",
	                    u: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
	                    y: "MMMM yyyy",
	                    Y: "MMMM yyyy"
	                },
	                "/": "/",
	                ":": ":",
	                firstDay: 0
	            }
	        }
	    }
	})(this);


/***/ })

/******/ });