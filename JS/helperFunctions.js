import { myAnimalsList } from "../mainJS.js";

export function NewElementWithCssClass(type, cssClassLst) {
    const temp = document.createElement(type);
    temp.classList.add(...cssClassLst)
    return temp
}

export function addAttributesToElement(element, list) {
    for (let i = 0; i < list.length; i++) {
        const attribute = list[i];
        element.setAttribute(...attribute);
    }
}

export function playSound(myVoice) {
    myVoice.paused ? myVoice.play() : myVoice.pause();
    myAnimalsList.forEach(animalVoice => { if (animalVoice.sound !== myVoice) animalVoice.sound.pause() })
}


export function showMyFood(animal) {
    const cardsList = document.getElementsByClassName("myCard")
    for (let i = 0; i < cardsList.length; i++) {
        const card = cardsList[i];
        const listFood = animal.getFood()
        if (listFood.includes(card.id)) {
            card.classList.remove("bg-dark");
            card.classList.add("bg-warning");
            setTimeout(() => {
                card.classList.remove("bg-warning");
                card.classList.add("bg-dark");
            }, 800)
        }
    }
}
