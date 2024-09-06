var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { searchInput, resultParentEl } from "./variabless.js";
import { searchResult, renderUi } from "./view.js";
export const state = {
    results: [],
    ingredients: [],
    id: "",
};
export function clearField() {
    searchInput.value = "";
}
export const findCocktail = function () {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const inputValue = searchInput.value;
            resultParentEl.innerHTML = "";
            if (inputValue !== "") {
                // _______________________________________
                yield searchResult();
                yield renderUi(inputValue);
                clearField();
            }
            else
                return;
        }
        catch (err) {
            alert(`Please insert correct Cocktail name! ${err}`);
            clearField();
        }
    });
};
export function displayFromCocktailList(event) {
    const target = event.target;
    const itemFromListWithAttr = target.closest(".resultsItem");
    const CocktailID = itemFromListWithAttr.getAttribute("data-id");
    renderUi(CocktailID);
}
export function keyboardHendler(event) {
    const key = event.key;
    if (key === "Enter")
        findCocktail();
}
