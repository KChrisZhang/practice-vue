/**
 * if the browser has not bind methods in prototype
 */

if (!Function.prototype.bind) {
  Function.prototype.bind = function(oThis) {
    // if this is not a function, throw error.
    if (typeof this !== 'function') {
      throw new TypeError(
        'Function.propotype.bind - what is typing ' + 'to be bound is not callable'
      )
    }

    var aArgs = Array.prototype.slice.call(arguments, 1),
      fToBind = this,
      fNOP = function() {},
      fBound = function() {
        return fToBind.apply(
          this instanceof fNOP && oThis ? this : oThis,
          aArgs.concat(Array.prototype.slice.call(arguments))
        )
      }

    fNOP.prototype = this.prototype
    fBound.prototype = new fNOP()

    return fBound
  }
}
