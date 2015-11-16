(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/Users/Shared/Development/Projects/ReactJS/react_playground3/src/js/Add.js":[function(require,module,exports){
var addObj = {
  add: function(x, y) {
    return x + y
  }
}

module.exports = addObj

},{}],"/Users/Shared/Development/Projects/ReactJS/react_playground3/src/js/Math.jsx":[function(require,module,exports){
var addObj = require('./Add')
var multiplyObj = require('./Multiply')

console.log(addObj.add(3, 4)) // 7
console.log(multiplyObj.multiply(2, 5)) // 10
console.log(multiplyObj.multiply(6, 5)) // 11

},{"./Add":"/Users/Shared/Development/Projects/ReactJS/react_playground3/src/js/Add.js","./Multiply":"/Users/Shared/Development/Projects/ReactJS/react_playground3/src/js/Multiply.js"}],"/Users/Shared/Development/Projects/ReactJS/react_playground3/src/js/Multiply.js":[function(require,module,exports){
var multiplyObj = {
  multiply: function(x, y) {
    return x * y
  }
}

module.exports = multiplyObj

},{}]},{},["/Users/Shared/Development/Projects/ReactJS/react_playground3/src/js/Math.jsx"])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvU2hhcmVkL0RldmVsb3BtZW50L1Byb2plY3RzL1JlYWN0SlMvcmVhY3RfcGxheWdyb3VuZDMvc3JjL2pzL0FkZC5qcyIsIi9Vc2Vycy9TaGFyZWQvRGV2ZWxvcG1lbnQvUHJvamVjdHMvUmVhY3RKUy9yZWFjdF9wbGF5Z3JvdW5kMy9zcmMvanMvTWF0aC5qc3giLCIvVXNlcnMvU2hhcmVkL0RldmVsb3BtZW50L1Byb2plY3RzL1JlYWN0SlMvcmVhY3RfcGxheWdyb3VuZDMvc3JjL2pzL011bHRpcGx5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUEsSUFBSSxNQUFNLEdBQUc7RUFDWCxHQUFHLEVBQUUsU0FBUyxDQUFDLEVBQUUsQ0FBQyxFQUFFO0lBQ2xCLE9BQU8sQ0FBQyxHQUFHLENBQUM7R0FDYjtBQUNILENBQUM7O0FBRUQsTUFBTSxDQUFDLE9BQU8sR0FBRyxNQUFNOzs7QUNOdkIsSUFBSSxNQUFNLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQztBQUM3QixJQUFJLFdBQVcsR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDOztBQUV2QyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSTtBQUNsQyxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSztBQUM3QyxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSzs7O0FDTDdDLElBQUksV0FBVyxHQUFHO0VBQ2hCLFFBQVEsRUFBRSxTQUFTLENBQUMsRUFBRSxDQUFDLEVBQUU7SUFDdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQztHQUNiO0FBQ0gsQ0FBQzs7QUFFRCxNQUFNLENBQUMsT0FBTyxHQUFHLFdBQVciLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwidmFyIGFkZE9iaiA9IHtcbiAgYWRkOiBmdW5jdGlvbih4LCB5KSB7XG4gICAgcmV0dXJuIHggKyB5XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhZGRPYmpcbiIsInZhciBhZGRPYmogPSByZXF1aXJlKCcuL0FkZCcpXG52YXIgbXVsdGlwbHlPYmogPSByZXF1aXJlKCcuL011bHRpcGx5JylcblxuY29uc29sZS5sb2coYWRkT2JqLmFkZCgzLCA0KSkgLy8gN1xuY29uc29sZS5sb2cobXVsdGlwbHlPYmoubXVsdGlwbHkoMiwgNSkpIC8vIDEwXG5jb25zb2xlLmxvZyhtdWx0aXBseU9iai5tdWx0aXBseSg2LCA1KSkgLy8gMTFcbiIsInZhciBtdWx0aXBseU9iaiA9IHtcbiAgbXVsdGlwbHk6IGZ1bmN0aW9uKHgsIHkpIHtcbiAgICByZXR1cm4geCAqIHlcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG11bHRpcGx5T2JqXG4iXX0=
