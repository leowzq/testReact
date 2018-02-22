var { EventEmitter } = require('fbemitter');
class MyEmitter extends EventEmitter {
  constructor(){
    super()
    this.on = this.addListener
  }
}
var EventCenter = new MyEmitter();
export default  EventCenter;
