import Animal from "./Animal.js";

export default function Fish(name, avgLive, weight, location, img, sound) {
    Animal.call(this, name, avgLive, weight, location, img, sound)
    this.liveInGroup = false

}
Fish.prototype = Object.create(Animal.prototype);
Fish.prototype.constructor = Fish;

