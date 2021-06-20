export default function Animal(name = 0, avgLive = 0, weight = 0, location = "zoo", img = 0, sound = "str") {
    this.name = name;
    this.avgLive = avgLive;
    this.weight = weight;
    this.location = location;
    this.img = img;
    this.sound = sound;
}

Animal.prototype.getFood = function () { return [] }