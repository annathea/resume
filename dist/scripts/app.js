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
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _main = __webpack_require__(1);

	var _main2 = _interopRequireDefault(_main);

	var _main3 = __webpack_require__(2);

	var _main4 = __webpack_require__(3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	angular.module('annatheaCore', ['ui.router']).config(_main3.providerConfig).config(_main4.routerConfig).controller('annatheaCoreMainController', _main2.default);

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var MainController = function MainController() {
	  'ngInject';

	  _classCallCheck(this, MainController);
	};

	exports.default = MainController;

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';

	providerConfig.$inject = ["$provide", "$logProvider"];
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.providerConfig = providerConfig;
	function providerConfig($provide, $logProvider) {
	  'ngInject';
	  ////////////////
	  // Enable log //
	  ////////////////

	  $logProvider.debugEnabled(true);
	}

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';

	routerConfig.$inject = ["$stateProvider", "$urlRouterProvider"];
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.routerConfig = routerConfig;
	function routerConfig($stateProvider, $urlRouterProvider) {
	  'ngInject';

	  $stateProvider.state('annatheaCore', {
	    url: '',
	    controller: 'annatheaCoreMainController',
	    controllerAs: 'annatheaCore',
	    templateUrl: 'lib/core.html'
	  });

	  $urlRouterProvider.otherwise('/');
	}

/***/ }
/******/ ]);
angular.module("annatheaCore").run(["$templateCache", function($templateCache) {$templateCache.put("lib/core.html","<article><h1>This is a core component</h1><div><h5>Make your Global visual elements here</h5><h5>import your page views as dependencies to see see your full application</h5></div></article><footer><h6>This should be the ultimate-Parent State for all other views</h6></footer><ui-view></ui-view>");}]);
//# sourceMappingURL=../maps/scripts/app.js.map
