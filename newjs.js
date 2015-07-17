/**
 * Created by Dale on 7/16/2015.
 */
function Ferrari(color, hasLeather){
    this.color = color;
    this.hasLeather = hasLeather;
    this.hasBugs = true;
    this.gas = 90;

}
Ferrari.prototype.wipeWindshield = function(){
    this.hasBugs = false;
}

Ferrari.prototype.drive = function(){
    this.gas = this.gas - 5;
    console.log('vroom')
}

var ferrariInstance = new Ferrari('blue', true);

ferrariInstance.wipeWindshield();

ferrariInstance.drive();
console.log(ferrariInstance)
