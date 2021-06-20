import Fish from './fish.js'

export default function Sardine(name, weight, location) {
    Fish.call(this, name, 3, weight, location, "/imges/sardin.jpg", new Audio("/sounds/sardin.aac"))
    this.liveInGroup = true
}

Sardine.prototype = Object.create(Fish.prototype);
Sardine.prototype.constructor = Sardine;

Sardine.prototype.getFood = function () { return ["Lion"] }
