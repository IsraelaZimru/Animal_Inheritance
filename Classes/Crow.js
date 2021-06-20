import Bird from './Bird.js'

export default function Crow(name, weight, location) {
    Bird.call(this, name, 15, weight, location, "/imges/crow.jpg", new Audio("/sounds/crow.aac"))
}

Crow.prototype = Object.create(Bird.prototype);
Crow.prototype.constructor = Crow;

Crow.prototype.getFood = function () { return ["Sardine"] }
