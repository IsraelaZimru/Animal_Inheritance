import { addAttributesToElement, NewElementWithCssClass } from "./helperFunctions.js";

export default function SetModalAndFooter(message) {
    const footerDiv = NewElementWithCssClass("div", ["footer", "text-success","py-3"])

    const btnSort = NewElementWithCssClass("button", ["btn", "btn-warning", "col", "m-2"])
    addAttributesToElement(btnSort, [["type", "button"], ["data-toggle", "modal"], ["data-target", "#exampleModal"]])
    btnSort.textContent = "Click here to see sorted animal list by weight"

    const divOuter = NewElementWithCssClass("div", ["modal", "fade"]);
    addAttributesToElement(divOuter, [["tabindex", "-1"], ["aria-labelledby", "exampleModalLabel"], ["aria-hidden", "true"]]);
    divOuter.id = "exampleModal";

    const divOuter2 = NewElementWithCssClass("div", ["modal-dialog"]);

    const divOuter3 = NewElementWithCssClass("div", ["modal-content"]);

    const h2 = NewElementWithCssClass("h2", ["modal-title"]);
    h2.textContent = "Dynamic sorted weight list: "

    const textModal = NewElementWithCssClass("ul", ["list-group"]);

    //adding li element in a loop:
    for (let i = 0; i < message.length; i++) {
        const li = NewElementWithCssClass("li", ["list-group-item"])
        li.textContent = message[i]
        textModal.append(li)
    }

    const textFooter = NewElementWithCssClass("p", ["text-white"]);
    textFooter.textContent = "Israela Zimru Ⓒ"


    divOuter3.append(h2, textModal)
    divOuter2.appendChild(divOuter3)
    divOuter.appendChild(divOuter2)
    footerDiv.append(btnSort, divOuter, textFooter)
    document.body.insertAdjacentElement("beforeend", footerDiv)
}




