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

	__webpack_require__(696);
	module.exports = __webpack_require__(696);


/***/ }),

/***/ 696:
/***/ (function(module, exports) {

	(function( window, undefined ) {
	    kendo.cultures["sd"] = {
	        name: "sd",
	        numberFormat: {
	            pattern: ["n-"],
	            decimals: 2,
	            ",": ",",
	            ".": ".",
	            groupSize: [3],
	            percent: {
	                pattern: ["-n %","% n"],
	                decimals: 2,
	                ",": ",",
	                ".": ".",
	                groupSize: [3],
	                symbol: "%"
	            },
	            currency: {
	                name: "",
	                abbr: "",
	                pattern: ["-$ n","$ n"],
	                decimals: 2,
	                ",": ",",
	                ".": ".",
	                groupSize: [3],
	                symbol: "Rs"
	            }
	        },
	        calendars: {
	            standard: {
	                days: {
	                    names: ["سومر","اڱارو","اربع","خميس","جمعو","ڇنڇر","آچر"],
	                    namesAbbr: ["سو","اڱ","ار","خم","جمعو","ڇن","آچ"],
	                    namesShort: ["سو","اڱ","ار","خم","جم","ڇن","آچ"]
	                },
	                months: {
	                    names: ["جنوري","فروري","مارچ","اپريل","مٔي","جون","جولاءِ","آگست","ستمبر","آکتوبر","نومبر","ڊسمبر"],
	                    namesAbbr: ["جنوري","فروري","مارچ","اپريل","مٔي","جون","جولاءِ","آگست","ستمبر","آکتوبر","نومبر","ڊسمبر"]
	                },
	                AM: ["AM","am","AM"],
	                PM: ["PM","pm","PM"],
	                patterns: {
	                    d: "dd/MM/yyyy",
	                    D: "dddd, dd MMMM, yyyy",
	                    F: "dddd, dd MMMM, yyyy h:mm:ss tt",
	                    g: "dd/MM/yyyy h:mm tt",
	                    G: "dd/MM/yyyy h:mm:ss tt",
	                    m: "dd MMMM",
	                    M: "dd MMMM",
	                    s: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
	                    t: "h:mm tt",
	                    T: "h:mm:ss tt",
	                    u: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
	                    y: "MMMM, yyyy",
	                    Y: "MMMM, yyyy"
	                },
	                "/": "/",
	                ":": ":",
	                firstDay: 1
	            }
	        }
	    }
	})(this);


/***/ })

/******/ });