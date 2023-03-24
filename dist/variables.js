"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.typeArray = exports.titleArray = exports.roomDescriptions = exports.priceList = exports.photosArray = exports.offers = exports.numberOfRooms = exports.numberOfGuests = exports.numberOfClients = exports.numberOfAvatars = exports.locationYValues = exports.locationXValues = exports.features = exports.exampleOffer = exports.checkoutTimes = exports.checkinTimes = exports.authorNames = void 0;
var variables = _interopRequireWildcard(require("./variables.js"));
var _data = require("./data.js");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var numberOfClients = 45;
exports.numberOfClients = numberOfClients;
var exampleNumber = 1;
var numberOfRooms = ["1 кімната", "2 кімнати", "3 кімнати", "100 кімнат"];
exports.numberOfRooms = numberOfRooms;
var numberOfGuests = {
  MIN: 0,
  MAX: 3
};
exports.numberOfGuests = numberOfGuests;
var priceList = {
  MIN: 1000,
  MAX: 30000
};
exports.priceList = priceList;
var numberOfAvatars = {
  MIN: 1,
  MAX: 8
};
exports.numberOfAvatars = numberOfAvatars;
var locationXValues = {
  MIN: 35.65000,
  MAX: 35.70000
};
exports.locationXValues = locationXValues;
var locationYValues = {
  MIN: 139.70000,
  MAX: 139.80000
};
exports.locationYValues = locationYValues;
var authorNames = ["Emily Rodriguez", "Thomas Nguyen", "Samantha Patel", "William Kim", "Elizabeth Davis", "Michael Johnson", "Rachel Lee", "Alexander Brown", "Olivia Garcia", "Benjamin Wright"];
exports.authorNames = authorNames;
var checkinTimes = ["12:00", "13:00", "14:00"];
exports.checkinTimes = checkinTimes;
var checkoutTimes = ["12:00", "13:00", "14:00"];
exports.checkoutTimes = checkoutTimes;
var titleArray = ["Book Now and Save: Exclusive Limited - Time Offer!", "Don't Miss Out on Our Early Bird Specials - Book Today!", "Last-Minute Deals: Book Now and Save on Your Next Trip!", "Get More for Less: Book Your Stay and Enjoy Great Discounts!", "The Ultimate Escape: Book Now and Enjoy a Relaxing Getaway!", "Adventure Awaits: Book Now and Save on Your Next Excursion!", "Stay Longer and Save: Book Your Extended Stay and Enjoy Big Discounts!", "Book Early and Save Big on Your Next Vacation!", "Your Dream Vacation Awaits: Book Now and Enjoy Great Savings!", "Romantic Getaways: Book Now and Surprise Your Loved One!"];
exports.titleArray = titleArray;
var typeArray = ["palace", "flat", "house", "bungalow"];
exports.typeArray = typeArray;
var features = ["wifi", "dishwasher", "parking", "washer", "elevator", "conditioner"];
exports.features = features;
var roomDescriptions = ["Cozy room with a comfortable queen-size bed and beautiful garden views.", "Spacious suite with a separate living area, kitchenette, and stunning ocean views.", "Modern room with a flat-screen TV, mini fridge, and access to a private balcony.", "Charming room with a traditional decor, featuring a king-size bed and antique furnishings.", "Luxurious penthouse suite with a private terrace, hot tub, and panoramic city views.", "Bright and airy room with large windows, a writing desk, and a plush queen-size bed.", "Rustic cabin with a fireplace, fully equipped kitchen, and a scenic forest location.", "Stylish room with contemporary decor, a rain shower, and a king-size bed with premium linens.", "Quaint room with a four-poster queen-size bed, hardwood floors, and a private bathroom.", "Family-friendly suite with bunk beds, a separate dining area, and easy access to nearby attractions."];
exports.roomDescriptions = roomDescriptions;
var photosArray = ["http://o0.github.io/assets/images/tokyo/hotel1.jpg", "http://o0.github.io/assets/images/tokyo/hotel2.jpg", "http://o0.github.io/assets/images/tokyo/hotel3.jpg"];
exports.photosArray = photosArray;
var offers = new Array(variables.numberOfClients).fill(null).map(function () {
  return (0, _data.getOffer)();
});
exports.offers = offers;
var exampleOffer = new Array(exampleNumber).fill(null).map(function () {
  return (0, _data.getOffer)();
});

/*end of variables.js */
exports.exampleOffer = exampleOffer;