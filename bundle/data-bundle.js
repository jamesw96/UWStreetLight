var Mapbox =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */
/***/ (function(module, exports) {

module.exports = {
	"type": "FeatureCollection",
	"generator": "overpass-turbo",
	"copyright": "The data included in this document is from www.openstreetmap.org. The data is made available under ODbL.",
	"timestamp": "2017-04-07T23:44:02Z",
	"features": [
		{
			"type": "Feature",
			"id": "node/4348085426",
			"properties": {
				"@id": "node/4348085426",
				"highway": "street_lamp",
				"@timestamp": "2016-08-13T01:12:43Z",
				"@version": "1",
				"@changeset": "41421310",
				"@user": "NickBolten",
				"@uid": "2773196"
			},
			"geometry": {
				"type": "Point",
				"coordinates": [
					-122.3099053,
					47.6540442
				]
			}
		},
		{
			"type": "Feature",
			"id": "node/4638571095",
			"properties": {
				"@id": "node/4638571095",
				"highway": "street_lamp",
				"light:shape": "directed",
				"light_source": "lantern",
				"name": "Street Light",
				"@timestamp": "2017-01-27T23:03:03Z",
				"@version": "3",
				"@changeset": "45577515",
				"@user": "Glassman",
				"@uid": "447903"
			},
			"geometry": {
				"type": "Point",
				"coordinates": [
					-122.3026178,
					47.6587722
				]
			}
		},
		{
			"type": "Feature",
			"id": "node/4638584035",
			"properties": {
				"@id": "node/4638584035",
				"highway": "street_lamp",
				"light:shape": "directed",
				"light_source": "lantern",
				"name": "Street Light",
				"@timestamp": "2017-01-27T23:03:03Z",
				"@version": "3",
				"@changeset": "45577515",
				"@user": "Glassman",
				"@uid": "447903"
			},
			"geometry": {
				"type": "Point",
				"coordinates": [
					-122.3024375,
					47.6584685
				]
			}
		},
		{
			"type": "Feature",
			"id": "node/4638584036",
			"properties": {
				"@id": "node/4638584036",
				"highway": "street_lamp",
				"light:shape": "directed",
				"light_source": "lantern",
				"name": "Street Light",
				"support": "pole",
				"@timestamp": "2017-01-27T23:03:03Z",
				"@version": "3",
				"@changeset": "45577515",
				"@user": "Glassman",
				"@uid": "447903"
			},
			"geometry": {
				"type": "Point",
				"coordinates": [
					-122.302627,
					47.6586161
				]
			}
		},
		{
			"type": "Feature",
			"id": "node/4638584038",
			"properties": {
				"@id": "node/4638584038",
				"highway": "street_lamp",
				"light:shape": "directed",
				"light_source": "lantern",
				"name": "Street Light",
				"@timestamp": "2017-01-27T23:03:03Z",
				"@version": "3",
				"@changeset": "45577515",
				"@user": "Glassman",
				"@uid": "447903"
			},
			"geometry": {
				"type": "Point",
				"coordinates": [
					-122.3022725,
					47.6588718
				]
			}
		},
		{
			"type": "Feature",
			"id": "node/4638612202",
			"properties": {
				"@id": "node/4638612202",
				"highway": "street_lamp",
				"light:count": "2",
				"light:shape": "directed",
				"light_source": "lantern",
				"name": "Street Light",
				"@timestamp": "2017-01-27T23:03:03Z",
				"@version": "2",
				"@changeset": "45577515",
				"@user": "Glassman",
				"@uid": "447903"
			},
			"geometry": {
				"type": "Point",
				"coordinates": [
					-122.3026053,
					47.6584436
				]
			}
		},
		{
			"type": "Feature",
			"id": "node/4658760981",
			"properties": {
				"@id": "node/4658760981",
				"highway": "street_lamp",
				"name": "Street Lamp",
				"@timestamp": "2017-02-03T08:33:41Z",
				"@version": "1",
				"@changeset": "45771428",
				"@user": "jamesxxd",
				"@uid": "5210285"
			},
			"geometry": {
				"type": "Point",
				"coordinates": [
					-122.3177121,
					47.658397
				]
			}
		},
		{
			"type": "Feature",
			"id": "node/4658760982",
			"properties": {
				"@id": "node/4658760982",
				"highway": "street_lamp",
				"name": "Street Lamp",
				"@timestamp": "2017-02-03T08:33:41Z",
				"@version": "1",
				"@changeset": "45771428",
				"@user": "jamesxxd",
				"@uid": "5210285"
			},
			"geometry": {
				"type": "Point",
				"coordinates": [
					-122.3177497,
					47.6582453
				]
			}
		},
		{
			"type": "Feature",
			"id": "node/4658760983",
			"properties": {
				"@id": "node/4658760983",
				"highway": "street_lamp",
				"name": "Street Lamp",
				"@timestamp": "2017-02-03T08:33:41Z",
				"@version": "1",
				"@changeset": "45771428",
				"@user": "jamesxxd",
				"@uid": "5210285"
			},
			"geometry": {
				"type": "Point",
				"coordinates": [
					-122.3172695,
					47.6583338
				]
			}
		},
		{
			"type": "Feature",
			"id": "node/4658760984",
			"properties": {
				"@id": "node/4658760984",
				"highway": "street_lamp",
				"name": "Street Lamp",
				"@timestamp": "2017-02-03T08:33:41Z",
				"@version": "1",
				"@changeset": "45771428",
				"@user": "jamesxxd",
				"@uid": "5210285"
			},
			"geometry": {
				"type": "Point",
				"coordinates": [
					-122.3166902,
					47.6583916
				]
			}
		},
		{
			"type": "Feature",
			"id": "node/4658760985",
			"properties": {
				"@id": "node/4658760985",
				"highway": "street_lamp",
				"name": "Street Lamp",
				"@timestamp": "2017-02-03T08:33:41Z",
				"@version": "1",
				"@changeset": "45771428",
				"@user": "jamesxxd",
				"@uid": "5210285"
			},
			"geometry": {
				"type": "Point",
				"coordinates": [
					-122.3166124,
					47.658397
				]
			}
		},
		{
			"type": "Feature",
			"id": "node/4658760986",
			"properties": {
				"@id": "node/4658760986",
				"highway": "street_lamp",
				"name": "Street Lamp",
				"@timestamp": "2017-02-03T08:33:42Z",
				"@version": "1",
				"@changeset": "45771428",
				"@user": "jamesxxd",
				"@uid": "5210285"
			},
			"geometry": {
				"type": "Point",
				"coordinates": [
					-122.3166929,
					47.6583302
				]
			}
		},
		{
			"type": "Feature",
			"id": "node/4658760987",
			"properties": {
				"@id": "node/4658760987",
				"highway": "street_lamp",
				"name": "Street Lamp",
				"@timestamp": "2017-02-03T08:33:42Z",
				"@version": "1",
				"@changeset": "45771428",
				"@user": "jamesxxd",
				"@uid": "5210285"
			},
			"geometry": {
				"type": "Point",
				"coordinates": [
					-122.3166043,
					47.6583302
				]
			}
		},
		{
			"type": "Feature",
			"id": "node/4658760988",
			"properties": {
				"@id": "node/4658760988",
				"highway": "street_lamp",
				"name": "Street Lamp",
				"@timestamp": "2017-02-03T08:33:42Z",
				"@version": "1",
				"@changeset": "45771428",
				"@user": "jamesxxd",
				"@uid": "5210285"
			},
			"geometry": {
				"type": "Point",
				"coordinates": [
					-122.3167143,
					47.6579346
				]
			}
		},
		{
			"type": "Feature",
			"id": "node/4658761689",
			"properties": {
				"@id": "node/4658761689",
				"highway": "street_lamp",
				"name": "Street Lamp",
				"@timestamp": "2017-02-03T08:33:42Z",
				"@version": "1",
				"@changeset": "45771428",
				"@user": "jamesxxd",
				"@uid": "5210285"
			},
			"geometry": {
				"type": "Point",
				"coordinates": [
					-122.3167465,
					47.6576076
				]
			}
		},
		{
			"type": "Feature",
			"id": "node/4658761690",
			"properties": {
				"@id": "node/4658761690",
				"highway": "street_lamp",
				"name": "Street Lamp",
				"@timestamp": "2017-02-03T08:33:42Z",
				"@version": "1",
				"@changeset": "45771428",
				"@user": "jamesxxd",
				"@uid": "5210285"
			},
			"geometry": {
				"type": "Point",
				"coordinates": [
					-122.3166151,
					47.6571577
				]
			}
		},
		{
			"type": "Feature",
			"id": "node/4658761691",
			"properties": {
				"@id": "node/4658761691",
				"highway": "street_lamp",
				"name": "Street Lamp",
				"@timestamp": "2017-02-03T08:33:42Z",
				"@version": "1",
				"@changeset": "45771428",
				"@user": "jamesxxd",
				"@uid": "5210285"
			},
			"geometry": {
				"type": "Point",
				"coordinates": [
					-122.3155771,
					47.6583718
				]
			}
		},
		{
			"type": "Feature",
			"id": "node/4658761692",
			"properties": {
				"@id": "node/4658761692",
				"highway": "street_lamp",
				"name": "Street Lamp",
				"@timestamp": "2017-02-03T08:33:42Z",
				"@version": "1",
				"@changeset": "45771428",
				"@user": "jamesxxd",
				"@uid": "5210285"
			},
			"geometry": {
				"type": "Point",
				"coordinates": [
					-122.3154885,
					47.6580448
				]
			}
		},
		{
			"type": "Feature",
			"id": "node/4658761693",
			"properties": {
				"@id": "node/4658761693",
				"highway": "street_lamp",
				"name": "Street Lamp",
				"@timestamp": "2017-02-03T08:33:42Z",
				"@version": "1",
				"@changeset": "45771428",
				"@user": "jamesxxd",
				"@uid": "5210285"
			},
			"geometry": {
				"type": "Point",
				"coordinates": [
					-122.3154859,
					47.6574016
				]
			}
		},
		{
			"type": "Feature",
			"id": "node/4658761694",
			"properties": {
				"@id": "node/4658761694",
				"highway": "street_lamp",
				"name": "Street Lamp",
				"@timestamp": "2017-02-03T08:33:42Z",
				"@version": "1",
				"@changeset": "45771428",
				"@user": "jamesxxd",
				"@uid": "5210285"
			},
			"geometry": {
				"type": "Point",
				"coordinates": [
					-122.31551,
					47.6569825
				]
			}
		},
		{
			"type": "Feature",
			"id": "node/4658761695",
			"properties": {
				"@id": "node/4658761695",
				"highway": "street_lamp",
				"name": "Street Lamp",
				"@timestamp": "2017-02-03T08:33:42Z",
				"@version": "1",
				"@changeset": "45771428",
				"@user": "jamesxxd",
				"@uid": "5210285"
			},
			"geometry": {
				"type": "Point",
				"coordinates": [
					-122.3157782,
					47.6568199
				]
			}
		},
		{
			"type": "Feature",
			"id": "node/4658761696",
			"properties": {
				"@id": "node/4658761696",
				"highway": "street_lamp",
				"name": "Street Lamp",
				"@timestamp": "2017-02-03T08:33:42Z",
				"@version": "1",
				"@changeset": "45771428",
				"@user": "jamesxxd",
				"@uid": "5210285"
			},
			"geometry": {
				"type": "Point",
				"coordinates": [
					-122.3163576,
					47.6568325
				]
			}
		},
		{
			"type": "Feature",
			"id": "node/4658761697",
			"properties": {
				"@id": "node/4658761697",
				"highway": "street_lamp",
				"name": "Street Lamp",
				"@timestamp": "2017-02-03T08:33:42Z",
				"@version": "1",
				"@changeset": "45771428",
				"@user": "jamesxxd",
				"@uid": "5210285"
			},
			"geometry": {
				"type": "Point",
				"coordinates": [
					-122.3169369,
					47.6572227
				]
			}
		},
		{
			"type": "Feature",
			"id": "node/4658761698",
			"properties": {
				"@id": "node/4658761698",
				"highway": "street_lamp",
				"name": "Street Lamp",
				"@timestamp": "2017-02-03T08:33:42Z",
				"@version": "1",
				"@changeset": "45771428",
				"@user": "jamesxxd",
				"@uid": "5210285"
			},
			"geometry": {
				"type": "Point",
				"coordinates": [
					-122.317055,
					47.65708
				]
			}
		},
		{
			"type": "Feature",
			"id": "node/4658761699",
			"properties": {
				"@id": "node/4658761699",
				"highway": "street_lamp",
				"name": "Street Lamp",
				"@timestamp": "2017-02-03T08:33:42Z",
				"@version": "1",
				"@changeset": "45771428",
				"@user": "jamesxxd",
				"@uid": "5210285"
			},
			"geometry": {
				"type": "Point",
				"coordinates": [
					-122.3167331,
					47.6568072
				]
			}
		},
		{
			"type": "Feature",
			"id": "node/4658761700",
			"properties": {
				"@id": "node/4658761700",
				"highway": "street_lamp",
				"name": "Street Lamp",
				"@timestamp": "2017-02-03T08:33:42Z",
				"@version": "1",
				"@changeset": "45771428",
				"@user": "jamesxxd",
				"@uid": "5210285"
			},
			"geometry": {
				"type": "Point",
				"coordinates": [
					-122.3169691,
					47.6565958
				]
			}
		},
		{
			"type": "Feature",
			"id": "node/4658761701",
			"properties": {
				"@id": "node/4658761701",
				"highway": "street_lamp",
				"name": "Street Lamp",
				"@timestamp": "2017-02-03T08:33:42Z",
				"@version": "1",
				"@changeset": "45771428",
				"@user": "jamesxxd",
				"@uid": "5210285"
			},
			"geometry": {
				"type": "Point",
				"coordinates": [
					-122.3178784,
					47.657846
				]
			}
		},
		{
			"type": "Feature",
			"id": "node/4658761702",
			"properties": {
				"@id": "node/4658761702",
				"highway": "street_lamp",
				"name": "Street Lamp",
				"@timestamp": "2017-02-03T08:33:42Z",
				"@version": "1",
				"@changeset": "45771428",
				"@user": "jamesxxd",
				"@uid": "5210285"
			},
			"geometry": {
				"type": "Point",
				"coordinates": [
					-122.3177389,
					47.6575425
				]
			}
		},
		{
			"type": "Feature",
			"id": "node/4658761703",
			"properties": {
				"@id": "node/4658761703",
				"highway": "street_lamp",
				"name": "Street Lamp",
				"@timestamp": "2017-02-03T08:33:42Z",
				"@version": "1",
				"@changeset": "45771428",
				"@user": "jamesxxd",
				"@uid": "5210285"
			},
			"geometry": {
				"type": "Point",
				"coordinates": [
					-122.3178784,
					47.6574124
				]
			}
		},
		{
			"type": "Feature",
			"id": "node/4658761704",
			"properties": {
				"@id": "node/4658761704",
				"highway": "street_lamp",
				"@timestamp": "2017-02-21T03:48:40Z",
				"@version": "2",
				"@changeset": "46262405",
				"@user": "nbolten_import",
				"@uid": "5348229"
			},
			"geometry": {
				"type": "Point",
				"coordinates": [
					-122.3177308,
					47.6570172
				]
			}
		},
		{
			"type": "Feature",
			"id": "node/4658761705",
			"properties": {
				"@id": "node/4658761705",
				"highway": "street_lamp",
				"@timestamp": "2017-02-21T03:48:40Z",
				"@version": "2",
				"@changeset": "46262405",
				"@user": "nbolten_import",
				"@uid": "5348229"
			},
			"geometry": {
				"type": "Point",
				"coordinates": [
					-122.3177154,
					47.656837
				]
			}
		},
		{
			"type": "Feature",
			"id": "node/4658761706",
			"properties": {
				"@id": "node/4658761706",
				"highway": "street_lamp",
				"name": "Street Lamp",
				"@timestamp": "2017-02-03T08:33:42Z",
				"@version": "1",
				"@changeset": "45771428",
				"@user": "jamesxxd",
				"@uid": "5210285"
			},
			"geometry": {
				"type": "Point",
				"coordinates": [
					-122.3173795,
					47.6568596
				]
			}
		},
		{
			"type": "Feature",
			"id": "node/4658761707",
			"properties": {
				"@id": "node/4658761707",
				"highway": "street_lamp",
				"name": "Street Lamp",
				"@timestamp": "2017-02-03T08:33:42Z",
				"@version": "1",
				"@changeset": "45771428",
				"@user": "jamesxxd",
				"@uid": "5210285"
			},
			"geometry": {
				"type": "Point",
				"coordinates": [
					-122.317519,
					47.6566717
				]
			}
		},
		{
			"type": "Feature",
			"id": "node/4658761708",
			"properties": {
				"@id": "node/4658761708",
				"highway": "street_lamp",
				"name": "Street Lamp",
				"@timestamp": "2017-02-03T08:33:42Z",
				"@version": "1",
				"@changeset": "45771428",
				"@user": "jamesxxd",
				"@uid": "5210285"
			},
			"geometry": {
				"type": "Point",
				"coordinates": [
					-122.31746,
					47.6564929
				]
			}
		},
		{
			"type": "Feature",
			"id": "node/4782009900",
			"properties": {
				"@id": "node/4782009900",
				"highway": "street_lamp",
				"@timestamp": "2017-04-07T23:30:03Z",
				"@version": "1",
				"@changeset": "47555105",
				"@user": "jamesxxd",
				"@uid": "5210285"
			},
			"geometry": {
				"type": "Point",
				"coordinates": [
					-122.3172737,
					47.6561915
				]
			}
		},
		{
			"type": "Feature",
			"id": "node/4782009901",
			"properties": {
				"@id": "node/4782009901",
				"highway": "street_lamp",
				"@timestamp": "2017-04-07T23:30:03Z",
				"@version": "1",
				"@changeset": "47555105",
				"@user": "jamesxxd",
				"@uid": "5210285"
			},
			"geometry": {
				"type": "Point",
				"coordinates": [
					-122.3169356,
					47.6562138
				]
			}
		},
		{
			"type": "Feature",
			"id": "node/4782009902",
			"properties": {
				"@id": "node/4782009902",
				"highway": "street_lamp",
				"@timestamp": "2017-04-07T23:30:03Z",
				"@version": "1",
				"@changeset": "47555105",
				"@user": "jamesxxd",
				"@uid": "5210285"
			},
			"geometry": {
				"type": "Point",
				"coordinates": [
					-122.3171186,
					47.6560811
				]
			}
		},
		{
			"type": "Feature",
			"id": "node/4782009903",
			"properties": {
				"@id": "node/4782009903",
				"highway": "street_lamp",
				"@timestamp": "2017-04-07T23:30:03Z",
				"@version": "1",
				"@changeset": "47555105",
				"@user": "jamesxxd",
				"@uid": "5210285"
			},
			"geometry": {
				"type": "Point",
				"coordinates": [
					-122.3167802,
					47.6559928
				]
			}
		},
		{
			"type": "Feature",
			"id": "node/4782009904",
			"properties": {
				"@id": "node/4782009904",
				"highway": "street_lamp",
				"@timestamp": "2017-04-07T23:30:03Z",
				"@version": "1",
				"@changeset": "47555105",
				"@user": "jamesxxd",
				"@uid": "5210285"
			},
			"geometry": {
				"type": "Point",
				"coordinates": [
					-122.3165707,
					47.6560739
				]
			}
		},
		{
			"type": "Feature",
			"id": "node/4782009905",
			"properties": {
				"@id": "node/4782009905",
				"highway": "street_lamp",
				"@timestamp": "2017-04-07T23:30:03Z",
				"@version": "1",
				"@changeset": "47555105",
				"@user": "jamesxxd",
				"@uid": "5210285"
			},
			"geometry": {
				"type": "Point",
				"coordinates": [
					-122.3165711,
					47.656208
				]
			}
		},
		{
			"type": "Feature",
			"id": "node/4782009906",
			"properties": {
				"@id": "node/4782009906",
				"highway": "street_lamp",
				"@timestamp": "2017-04-07T23:30:03Z",
				"@version": "1",
				"@changeset": "47555105",
				"@user": "jamesxxd",
				"@uid": "5210285"
			},
			"geometry": {
				"type": "Point",
				"coordinates": [
					-122.3161635,
					47.6562015
				]
			}
		},
		{
			"type": "Feature",
			"id": "node/4782009907",
			"properties": {
				"@id": "node/4782009907",
				"highway": "street_lamp",
				"@timestamp": "2017-04-07T23:30:03Z",
				"@version": "1",
				"@changeset": "47555105",
				"@user": "jamesxxd",
				"@uid": "5210285"
			},
			"geometry": {
				"type": "Point",
				"coordinates": [
					-122.3158198,
					47.6561961
				]
			}
		},
		{
			"type": "Feature",
			"id": "node/4782009908",
			"properties": {
				"@id": "node/4782009908",
				"highway": "street_lamp",
				"@timestamp": "2017-04-07T23:30:03Z",
				"@version": "1",
				"@changeset": "47555105",
				"@user": "jamesxxd",
				"@uid": "5210285"
			},
			"geometry": {
				"type": "Point",
				"coordinates": [
					-122.3154123,
					47.6561825
				]
			}
		},
		{
			"type": "Feature",
			"id": "node/4782009909",
			"properties": {
				"@id": "node/4782009909",
				"highway": "street_lamp",
				"@timestamp": "2017-04-07T23:30:03Z",
				"@version": "1",
				"@changeset": "47555105",
				"@user": "jamesxxd",
				"@uid": "5210285"
			},
			"geometry": {
				"type": "Point",
				"coordinates": [
					-122.315423,
					47.6560813
				]
			}
		},
		{
			"type": "Feature",
			"id": "node/4782009910",
			"properties": {
				"@id": "node/4782009910",
				"highway": "street_lamp",
				"@timestamp": "2017-04-07T23:30:03Z",
				"@version": "1",
				"@changeset": "47555105",
				"@user": "jamesxxd",
				"@uid": "5210285"
			},
			"geometry": {
				"type": "Point",
				"coordinates": [
					-122.316174,
					47.6560795
				]
			}
		},
		{
			"type": "Feature",
			"id": "node/4782009911",
			"properties": {
				"@id": "node/4782009911",
				"highway": "street_lamp",
				"@timestamp": "2017-04-07T23:30:03Z",
				"@version": "1",
				"@changeset": "47555105",
				"@user": "jamesxxd",
				"@uid": "5210285"
			},
			"geometry": {
				"type": "Point",
				"coordinates": [
					-122.3158388,
					47.6560831
				]
			}
		},
		{
			"type": "Feature",
			"id": "node/4782009912",
			"properties": {
				"@id": "node/4782009912",
				"highway": "street_lamp",
				"@timestamp": "2017-04-07T23:30:03Z",
				"@version": "1",
				"@changeset": "47555105",
				"@user": "jamesxxd",
				"@uid": "5210285"
			},
			"geometry": {
				"type": "Point",
				"coordinates": [
					-122.3156939,
					47.6553352
				]
			}
		},
		{
			"type": "Feature",
			"id": "node/4782009913",
			"properties": {
				"@id": "node/4782009913",
				"highway": "street_lamp",
				"@timestamp": "2017-04-07T23:30:03Z",
				"@version": "1",
				"@changeset": "47555105",
				"@user": "jamesxxd",
				"@uid": "5210285"
			},
			"geometry": {
				"type": "Point",
				"coordinates": [
					-122.3157154,
					47.6550822
				]
			}
		},
		{
			"type": "Feature",
			"id": "node/4782009914",
			"properties": {
				"@id": "node/4782009914",
				"highway": "street_lamp",
				"@timestamp": "2017-04-07T23:30:03Z",
				"@version": "1",
				"@changeset": "47555105",
				"@user": "jamesxxd",
				"@uid": "5210285"
			},
			"geometry": {
				"type": "Point",
				"coordinates": [
					-122.3157315,
					47.6548582
				]
			}
		},
		{
			"type": "Feature",
			"id": "node/4782009915",
			"properties": {
				"@id": "node/4782009915",
				"highway": "street_lamp",
				"@timestamp": "2017-04-07T23:30:03Z",
				"@version": "1",
				"@changeset": "47555105",
				"@user": "jamesxxd",
				"@uid": "5210285"
			},
			"geometry": {
				"type": "Point",
				"coordinates": [
					-122.3157583,
					47.6546341
				]
			}
		},
		{
			"type": "Feature",
			"id": "node/4782009916",
			"properties": {
				"@id": "node/4782009916",
				"highway": "street_lamp",
				"@timestamp": "2017-04-07T23:30:03Z",
				"@version": "1",
				"@changeset": "47555105",
				"@user": "jamesxxd",
				"@uid": "5210285"
			},
			"geometry": {
				"type": "Point",
				"coordinates": [
					-122.316166,
					47.6547263
				]
			}
		},
		{
			"type": "Feature",
			"id": "node/4782009917",
			"properties": {
				"@id": "node/4782009917",
				"highway": "street_lamp",
				"@timestamp": "2017-04-07T23:30:03Z",
				"@version": "1",
				"@changeset": "47555105",
				"@user": "jamesxxd",
				"@uid": "5210285"
			},
			"geometry": {
				"type": "Point",
				"coordinates": [
					-122.3166139,
					47.654822
				]
			}
		},
		{
			"type": "Feature",
			"id": "node/4782009918",
			"properties": {
				"@id": "node/4782009918",
				"highway": "street_lamp",
				"@timestamp": "2017-04-07T23:30:04Z",
				"@version": "1",
				"@changeset": "47555105",
				"@user": "jamesxxd",
				"@uid": "5210285"
			},
			"geometry": {
				"type": "Point",
				"coordinates": [
					-122.3167775,
					47.6546432
				]
			}
		},
		{
			"type": "Feature",
			"id": "node/4782009919",
			"properties": {
				"@id": "node/4782009919",
				"highway": "street_lamp",
				"@timestamp": "2017-04-07T23:30:04Z",
				"@version": "1",
				"@changeset": "47555105",
				"@user": "jamesxxd",
				"@uid": "5210285"
			},
			"geometry": {
				"type": "Point",
				"coordinates": [
					-122.3167614,
					47.6543198
				]
			}
		},
		{
			"type": "Feature",
			"id": "node/4782009920",
			"properties": {
				"@id": "node/4782009920",
				"highway": "street_lamp",
				"@timestamp": "2017-04-07T23:30:04Z",
				"@version": "1",
				"@changeset": "47555105",
				"@user": "jamesxxd",
				"@uid": "5210285"
			},
			"geometry": {
				"type": "Point",
				"coordinates": [
					-122.3167802,
					47.6541192
				]
			}
		},
		{
			"type": "Feature",
			"id": "node/4782009921",
			"properties": {
				"@id": "node/4782009921",
				"highway": "street_lamp",
				"@timestamp": "2017-04-07T23:30:04Z",
				"@version": "1",
				"@changeset": "47555105",
				"@user": "jamesxxd",
				"@uid": "5210285"
			},
			"geometry": {
				"type": "Point",
				"coordinates": [
					-122.3169224,
					47.6542258
				]
			}
		},
		{
			"type": "Feature",
			"id": "node/4782009922",
			"properties": {
				"@id": "node/4782009922",
				"highway": "street_lamp",
				"@timestamp": "2017-04-07T23:30:04Z",
				"@version": "1",
				"@changeset": "47555105",
				"@user": "jamesxxd",
				"@uid": "5210285"
			},
			"geometry": {
				"type": "Point",
				"coordinates": [
					-122.3169465,
					47.6544354
				]
			}
		},
		{
			"type": "Feature",
			"id": "node/4782009923",
			"properties": {
				"@id": "node/4782009923",
				"highway": "street_lamp",
				"@timestamp": "2017-04-07T23:30:04Z",
				"@version": "1",
				"@changeset": "47555105",
				"@user": "jamesxxd",
				"@uid": "5210285"
			},
			"geometry": {
				"type": "Point",
				"coordinates": [
					-122.3170109,
					47.6549214
				]
			}
		},
		{
			"type": "Feature",
			"id": "node/4782009924",
			"properties": {
				"@id": "node/4782009924",
				"highway": "street_lamp",
				"@timestamp": "2017-04-07T23:30:04Z",
				"@version": "1",
				"@changeset": "47555105",
				"@user": "jamesxxd",
				"@uid": "5210285"
			},
			"geometry": {
				"type": "Point",
				"coordinates": [
					-122.3175312,
					47.6550443
				]
			}
		},
		{
			"type": "Feature",
			"id": "node/4782009925",
			"properties": {
				"@id": "node/4782009925",
				"highway": "street_lamp",
				"@timestamp": "2017-04-07T23:30:04Z",
				"@version": "1",
				"@changeset": "47555105",
				"@user": "jamesxxd",
				"@uid": "5210285"
			},
			"geometry": {
				"type": "Point",
				"coordinates": [
					-122.3180918,
					47.6551798
				]
			}
		},
		{
			"type": "Feature",
			"id": "node/4782009926",
			"properties": {
				"@id": "node/4782009926",
				"highway": "street_lamp",
				"@timestamp": "2017-04-07T23:30:04Z",
				"@version": "1",
				"@changeset": "47555105",
				"@user": "jamesxxd",
				"@uid": "5210285"
			},
			"geometry": {
				"type": "Point",
				"coordinates": [
					-122.3186712,
					47.6552936
				]
			}
		},
		{
			"type": "Feature",
			"id": "node/4782009927",
			"properties": {
				"@id": "node/4782009927",
				"highway": "street_lamp",
				"@timestamp": "2017-04-07T23:30:04Z",
				"@version": "1",
				"@changeset": "47555105",
				"@user": "jamesxxd",
				"@uid": "5210285"
			},
			"geometry": {
				"type": "Point",
				"coordinates": [
					-122.3187087,
					47.6543722
				]
			}
		},
		{
			"type": "Feature",
			"id": "node/4782009928",
			"properties": {
				"@id": "node/4782009928",
				"highway": "street_lamp",
				"@timestamp": "2017-04-07T23:30:04Z",
				"@version": "1",
				"@changeset": "47555105",
				"@user": "jamesxxd",
				"@uid": "5210285"
			},
			"geometry": {
				"type": "Point",
				"coordinates": [
					-122.3181822,
					47.6541006
				]
			}
		},
		{
			"type": "Feature",
			"id": "node/4782009929",
			"properties": {
				"@id": "node/4782009929",
				"highway": "street_lamp",
				"@timestamp": "2017-04-07T23:30:04Z",
				"@version": "1",
				"@changeset": "47555105",
				"@user": "jamesxxd",
				"@uid": "5210285"
			},
			"geometry": {
				"type": "Point",
				"coordinates": [
					-122.3182916,
					47.6539448
				]
			}
		},
		{
			"type": "Feature",
			"id": "node/4782009930",
			"properties": {
				"@id": "node/4782009930",
				"highway": "street_lamp",
				"@timestamp": "2017-04-07T23:30:04Z",
				"@version": "1",
				"@changeset": "47555105",
				"@user": "jamesxxd",
				"@uid": "5210285"
			},
			"geometry": {
				"type": "Point",
				"coordinates": [
					-122.3187221,
					47.6541987
				]
			}
		}
	]
};

/***/ })
/******/ ]);