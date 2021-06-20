import { NewElementWithCssClass, addAttributesToElement, playSound, showMyFood } from "./helperFunctions.js";


export default function creatCard(animal) {
    const cardSection = document.querySelectorAll(".subDiv")

    const newCard = NewElementWithCssClass("div", ["myCard", "card", "text-white", "bg-dark", "m-auto", "mb-4", "mt-4", "text-center", "p-1"]);
    newCard.id = animal.__proto__.constructor.name;

    const newImg = NewElementWithCssClass("img", ["card-img-top"]);
    addAttributesToElement(newImg, [["src", animal.img], ["width", "246"], ["height", "275"]]);

    const newCardBody = NewElementWithCssClass("div", ["card-body"]);

    for (const data in animal) {
        if (Object.hasOwnProperty.call(animal, data)) {
            if (data !== "img" && data !== "sound" && data !== "food") {
                const newParag = NewElementWithCssClass("p", ["card-text"]);
                newParag.textContent = `${data}: ${animal[data]}`;
                newCardBody.appendChild(newParag)
            }

        }
    }

    const footer = NewElementWithCssClass("div", ["card-footer", "bg-transparent", "border-success", "row", "px-4", "mx-5"]);
    footer.id = "footer";

    const btnFood = NewElementWithCssClass("button", ["btn", "rounded-circle", "btn-warning", "col", "mx-1"]);
    btnFood.setAttribute("type", "button");
    btnFood.addEventListener("click", () => { showMyFood(animal) });

    const iconFood = NewElementWithCssClass("I", ["fas", "fa-utensils"]);


    const btnSound = NewElementWithCssClass("button", ["btn", "rounded-circle", "btn-warning", "col", "mx-1"]);
    btnSound.setAttribute("type", "button");
    btnSound.addEventListener("click", () => playSound(animal.sound))

    const iconSound = NewElementWithCssClass("I", ["fas", "fa-music"]);

    btnFood.appendChild(iconFood)
    btnSound.appendChild(iconSound)
    footer.append(btnFood, btnSound)


    newCard.append(newImg, newCardBody, footer);
    for (let i = 0; i < cardSection.length; i++) {
        const speciesDiv = cardSection[i];
        if (speciesDiv.id === animal.constructor.name) speciesDiv.appendChild(newCard)//try
    }
}



export function showCardsInHTML(cards) {
    let timer = 1500
    for (let i = 0; i < cards.length; i++) {
        const card = cards[i];
        setTimeout(creatCard.bind(card), timer, card)
        timer += 500

    }
}
