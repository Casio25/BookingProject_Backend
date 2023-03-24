"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getOffer = getOffer;
var variables = _interopRequireWildcard(require("./variables.js"));
var func = _interopRequireWildcard(require("./util.js"));
var _variables2 = require("../dist/variables.js");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function getOffer() {
  function priceRanger(price) {
    var range = "";
    if (price < 10000) {
      range = "low";
    } else if (price > 10000 && price < 20000) {
      range = "middle";
    } else if (price > 20000) {
      range = "high";
    }
    return range;
  }
  var shuffledFeatures = func.shuffle(variables.features);
  var getRandomX = func.RandomFloatNumber(variables.locationXValues.MIN, variables.locationXValues.MAX);
  var getRandomY = func.RandomFloatNumber(variables.locationYValues.MIN, variables.locationYValues.MAX);
  var getPrice = func.RandomNaturalNumber(variables.priceList.MIN, variables.priceList.MAX);
  return {
    author: {
      avatar: "img/avatars/user0".concat(func.RandomNaturalNumber(variables.numberOfAvatars.MIN, variables.numberOfAvatars.MAX), ".png")
    },
    offer: {
      title: variables.titleArray[func.RandomNaturalNumber(0, variables.titleArray.length - 1)],
      adress: {
        locationX: getRandomX,
        locationY: getRandomY
      },
      price: getPrice,
      priceRange: priceRanger(getPrice),
      type: variables.typeArray[func.RandomNaturalNumber(0, variables.typeArray.length)],
      rooms: variables.numberOfRooms[func.RandomNaturalNumber(0, variables.numberOfRooms.length)],
      guests: func.RandomNaturalNumber(variables.numberOfGuests.MIN, variables.numberOfGuests.MAX),
      checkin: variables.checkinTimes[func.RandomNaturalNumber(0, variables.checkinTimes.length)],
      checkout: variables.checkoutTimes[func.RandomNaturalNumber(0, variables.checkoutTimes.length)],
      features: shuffledFeatures.slice(0, func.RandomNaturalNumber(1, variables.features.length)),
      description: variables.roomDescriptions[func.RandomNaturalNumber(0, variables.roomDescriptions.length)],
      photos: variables.photosArray.slice(0, func.RandomNaturalNumber(1, variables.photosArray.length)),
      location: {
        x: getRandomX,
        y: getRandomY
      }
    }
  };
}