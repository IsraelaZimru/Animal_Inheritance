import Mammal from './Mammal.js'

export default function Deer(name, weight, location) {
    Mammal.call(this, name, 90, weight, location, '/imges/deer.png', new Audio("/sounds/deer.aac"))
}

Deer.prototype = Object.create(Mammal.prototype);
Deer.prototype.constructor = Deer;

Deer.prototype.getFood = function () { return ["Crow", "Lion"] }




