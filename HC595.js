function HC595(pin) {
  this.pin = pin;
}

HC595.prototype.setInt = function (digist, withZero) {


}
exports.connect = function(pin) {
    return new HC595(pin);
};
