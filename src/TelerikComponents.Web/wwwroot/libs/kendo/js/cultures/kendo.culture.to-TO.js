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

	__webpack_require__(800);
	module.exports = __webpack_require__(800);


/***/ }),

/***/ 800:
/***/ (function(module, exports) {

	(function( window, undefined ) {
	    kendo.cultures["to-TO"] = {
	        name: "to-TO",
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
	                name: "Tongan Paʻanga",
	                abbr: "TOP",
	                pattern: ["-$ n","$ n"],
	                decimals: 2,
	                ",": ",",
	                ".": ".",
	                groupSize: [3],
	                symbol: "T$"
	            }
	        },
	        calendars: {
	            standard: {
	                days: {
	                    names: ["Sāpate","Mōnite","Tūsite","Pulelulu","Tuʻapulelulu","Falaite","Tokonaki"],
	                    namesAbbr: ["Sāp","Mōn","Tūs","Pul","Tuʻa","Fal","Tok"],
	                    namesShort: ["Sāp","Mōn","Tūs","Pul","Tuʻa","Fal","Tok"]
	                },
	                months: {
	                    names: ["Sānuali","Fēpueli","Maʻasi","ʻEpeleli","Mē","Sune","Siulai","ʻAokosi","Sepitema","ʻOkatopa","Nōvema","Tīsema"],
	                    namesAbbr: ["Sān","Fēp","Maʻa","ʻEpe","Mē","Sun","Siu","ʻAok","Sep","ʻOka","Nōv","Tīs"]
	                },
	                AM: ["AM","am","AM"],
	                PM: ["PM","pm","PM"],
	                patterns: {
	                    d: "d/M/yyyy",
	                    D: "dddd d MMMM yyyy",
	                    F: "dddd d MMMM yyyy h:mm:ss tt",
	                    g: "d/M/yyyy h:mm tt",
	                    G: "d/M/yyyy h:mm:ss tt",
	                    m: "d MMMM",
	                    M: "d MMMM",
	                    s: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
	                    t: "h:mm tt",
	                    T: "h:mm:ss tt",
	                    u: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
	                    y: "MMMM yyyy",
	                    Y: "MMMM yyyy"
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