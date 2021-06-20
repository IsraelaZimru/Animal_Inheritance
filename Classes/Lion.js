import Mammal from './Mammal.js'

export default function Lion(name, weight, location) {
    Mammal.call(this, name, 50, weight, location, '/imges/lion.jpg', new Audio("/sounds/lion.aac"))
    this.friendly = false
}

Lion.prototype = Object.create(Mammal.prototype);
Lion.prototype.constructor = Lion;

Lion.prototype.getFood = function () { return ["Crow", "Deer", "Stork"] }