import { iSearchResult, state, iCocktailData } from "./functions.js";
import {
  resultParentEl,
  searchInput,
  API_URL,
  ingredientsList,
} from "./variabless.js";
import {
  alkoholicYN,
  cocktailCategory,
  cocktailName,
  cocktailPicture,
  drinkId,
  preparationField,
} from "./variabless.js";

export const searchResult = async function () {
  try {
    const inputValue: string = searchInput.value;
    const response = await fetch(`${API_URL}${inputValue}`);
    const data = await response.json();
    state.results = data.drinks.map((item: any) => {
      return {
        id: item.idDrink,
        name: item.strDrink,
        alcohol: item.strAlcoholic,
        category: item.strCategory,
      };
    });

    const searchResult = state.results;
    searchResult.forEach((item: iSearchResult) => {
      displayResults(item);
    });
  } catch (err) {
    console.log(err);
  }
};

export function displayResults(item: iSearchResult) {
  const dataPattern = document.createElement("li") as HTMLLIElement;
  dataPattern.setAttribute("data-id", item.name.toString());

  dataPattern.innerHTML = ` <span id="resultName">Name: ${item.name} </span><span id="resultId">ID: ${item.id}</span> <span id="resultCategory"> Category: ${item.category} </span>`;

  dataPattern.classList.add("resultsItem");
  resultParentEl.appendChild(dataPattern);
}

export const renderUi = async function (uniqueValue: string | null) {
  const response = await fetch(`${API_URL}${uniqueValue}`);
  const data = await response.json();
  if (response.ok) {
    const cocktails = data.drinks[0];
    const PicUrl = cocktails.strDrinkThumb;
    const modifiedUrl = PicUrl.replace("https:", "");
    console.log(modifiedUrl);
    // _______________________________________________________________________
    const fetchedData: iCocktailData = {
      cocktailName: cocktails.strDrink,
      idDrink: cocktails.idDrink,
      alcoholic: cocktails.strAlcoholic,
      category: cocktails.strCategory,
      ingredient: [
        cocktails.strIngredient1,
        cocktails.strIngredient2,
        cocktails?.strIngredient3 || "",
        cocktails?.strIngredient4 || "",
        cocktails?.strIngredient5 || "",
        cocktails?.strIngredient6 || "",
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
    alkoholicYN.innerText = `Alcohol: ${
      fetchedData.alcoholic === "Alcoholic" ? "Yes" : "No"
    }`;
  } else {
    throw new Error("Failed to fetch cocktail with this name!!");
  }
};

function displayIngredients(data: string) {
  const dataPattern = document.createElement("li") as HTMLLIElement;
  dataPattern.innerHTML = ` <li id="ingredientsListItem">${data}</li> 
  `;

  ingredientsList.append(dataPattern);
}
