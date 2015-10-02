(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/Users/Shared/Development/Projects/react_playground2/src/js/Add.js":[function(require,module,exports){
var addObj  = {
  add: function(x,y){
    return x + y;
  }
};

module.exports = addObj;

},{}],"/Users/Shared/Development/Projects/react_playground2/src/js/Math.js":[function(require,module,exports){
var addObj = require('./Add'),
  multiplyObj = require('./Multiply');

console.log( addObj.add(3,4) ); // 7
console.log( multiplyObj.multiply(2,5) ); // 10

},{"./Add":"/Users/Shared/Development/Projects/react_playground2/src/js/Add.js","./Multiply":"/Users/Shared/Development/Projects/react_playground2/src/js/Multiply.js"}],"/Users/Shared/Development/Projects/react_playground2/src/js/Multiply.js":[function(require,module,exports){
var multiplyObj = {
  multiply: function(x,y) {
    return x * y;
  }
};

module.exports = multiplyObj;

},{}]},{},["/Users/Shared/Development/Projects/react_playground2/src/js/Math.js"])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvU2hhcmVkL0RldmVsb3BtZW50L1Byb2plY3RzL3JlYWN0X3BsYXlncm91bmQyL3NyYy9qcy9BZGQuanMiLCIvVXNlcnMvU2hhcmVkL0RldmVsb3BtZW50L1Byb2plY3RzL3JlYWN0X3BsYXlncm91bmQyL3NyYy9qcy9NYXRoLmpzIiwiL1VzZXJzL1NoYXJlZC9EZXZlbG9wbWVudC9Qcm9qZWN0cy9yZWFjdF9wbGF5Z3JvdW5kMi9zcmMvanMvTXVsdGlwbHkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQSxJQUFJLE1BQU0sSUFBSTtFQUNaLEdBQUcsRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDaEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0dBQ2Q7QUFDSCxDQUFDLENBQUM7O0FBRUYsTUFBTSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7OztBQ054QixJQUFJLE1BQU0sR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDO0FBQzdCLEVBQUUsV0FBVyxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQzs7QUFFdEMsT0FBTyxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSTtBQUNwQyxPQUFPLENBQUMsR0FBRyxFQUFFLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLOzs7QUNKL0MsSUFBSSxXQUFXLEdBQUc7RUFDaEIsUUFBUSxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRTtJQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7R0FDZDtBQUNILENBQUMsQ0FBQzs7QUFFRixNQUFNLENBQUMsT0FBTyxHQUFHLFdBQVcsQ0FBQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJ2YXIgYWRkT2JqICA9IHtcbiAgYWRkOiBmdW5jdGlvbih4LHkpe1xuICAgIHJldHVybiB4ICsgeTtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBhZGRPYmo7XG4iLCJ2YXIgYWRkT2JqID0gcmVxdWlyZSgnLi9BZGQnKSxcbiAgbXVsdGlwbHlPYmogPSByZXF1aXJlKCcuL011bHRpcGx5Jyk7XG5cbmNvbnNvbGUubG9nKCBhZGRPYmouYWRkKDMsNCkgKTsgLy8gN1xuY29uc29sZS5sb2coIG11bHRpcGx5T2JqLm11bHRpcGx5KDIsNSkgKTsgLy8gMTBcbiIsInZhciBtdWx0aXBseU9iaiA9IHtcbiAgbXVsdGlwbHk6IGZ1bmN0aW9uKHgseSkge1xuICAgIHJldHVybiB4ICogeTtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBtdWx0aXBseU9iajtcbiJdfQ==
