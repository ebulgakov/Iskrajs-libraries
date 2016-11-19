function HC595(pin) {
  this.pin = pin;
};

HC595.prototype.setInt = function (digist, withZero) {
  var ht = this;
  pinMode(ht.pin);
  digitalWrite(ht.pin, 0);

};

exports.connect = function(pin) {
    return new HC595(pin);
};
