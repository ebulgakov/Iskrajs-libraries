function HC595(pin) {
  this.pin = pin;
};

HC595.prototype.setInt = function (digist, withZero) {
  var ht = this;
  pinMode(ht.pin);
  
  noInterrupts();
  MACRO_DIGITAL_WRITE(ht.pin, 0);
  MACRO_DIGITAL_WRITE(ht.pin, 1);
  interrupts();
  delayMicroseconds(30);
  


};

exports.connect = function(pin) {
    return new HC595(pin);
};
