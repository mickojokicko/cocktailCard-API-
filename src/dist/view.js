var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { state } from "./functions.js";
import { resultParentEl, searchInput, API_URL, ingredientsList, } from "./variabless.js";
import { alkoholicYN, cocktailCategory, cocktailName, cocktailPicture, drinkId, preparationField, } from "./variabless.js";
export const searchResult = function () {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const inputValue = searchInput.value;
            const response = yield fetch(`${API_URL}${inputValue}`);
            const data = yield response.json();
            state.results = data.drinks.map((item) => {
                return {
                    id: item.idDrink,
                    name: item.strDrink,
                    alcohol: item.strAlcoholic,
                    category: item.strCategory,
                };
            });
            const searchResult = state.results;
            searchResult.forEach((item) => {
                displayResults(item);
            });
        }
        catch (err) {
            console.log(err);
        }
    });
};
export function displayResults(item) {
    const dataPattern = document.createElement("li");
    dataPattern.setAttribute("data-id", item.name.toString());
    dataPattern.innerHTML = ` <span id="resultName">Name: ${item.name} </span><span id="resultId">ID: ${item.id}</span> <span id="resultCategory"> Category: ${item.category} </span>`;
    dataPattern.classList.add("resultsItem");
    resultParentEl.appendChild(dataPattern);
}
export const renderUi = function (uniqueValue) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`${API_URL}${uniqueValue}`);
        const data = yield response.json();
        if (response.ok) {
            const cocktails = data.drinks[0];
            const PicUrl = cocktails.strDrinkThumb;
            const modifiedUrl = PicUrl.replace("https:", "");
            console.log(modifiedUrl);
            // _______________________________________________________________________
            const fetchedData = {
                cocktailName: cocktails.strDrink,
                idDrink: cocktails.idDrink,
                alcoholic: cocktails.strAlcoholic,
                category: cocktails.strCategory,
                ingredient: [
                    cocktails.strIngredient1,
                    cocktails.strIngredient2,
                    (cocktails === null || cocktails === void 0 ? void 0 : cocktails.strIngredient3) || "",
                    (cocktails === null || cocktails === void 0 ? void 0 : cocktails.strIngredient4) || "",
                    (cocktails === null || cocktails === void 0 ? void 0 : cocktails.strIngredient5) || "",
                    (cocktails === null || cocktails === void 0 ? void 0 : cocktails.strIngredient6) || "",
                ],
                imageSource: cocktails.strDrinkThumb,
                preparation: cocktails.strInstructions,
            };
            state.ingredients = fetchedData.ingredient;
            const inngArr = state.ingredients;
            ingredientsList.innerHTML = `<h5> Ingredients</h5>`;
            inngArr.forEach((item) => displayIngredients(item));
            cocktailName.innerText = fetchedData.cocktailName;
            preparationField.innerText = fetchedData.preparation;
            cocktailPicture.style.background = `url(${modifiedUrl})`;
            drinkId.innerText = `ID: ${fetchedData.idDrink}`;
            cocktailCategory.innerText = `Category: ${fetchedData.category}`;
            alkoholicYN.innerText = `Alcohol: ${fetchedData.alcoholic === "Alcoholic" ? "Yes" : "No"}`;
        }
        else {
            throw new Error("Failed to fetch cocktail with this name!!");
        }
    });
};
function displayIngredients(data) {
    const dataPattern = document.createElement("li");
    dataPattern.innerHTML = ` <li id="ingredientsListItem">${data}</li> 
  `;
    ingredientsList.append(dataPattern);
}
