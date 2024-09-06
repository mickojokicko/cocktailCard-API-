export const API_URL: string =
  "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

export const searchInput = document.querySelector(
  ".search-input"
) as HTMLInputElement;

export const searchBtn = document.querySelector(
  ".search-button"
) as HTMLButtonElement;
export const cocktailList = document.getElementById(
  "cocktailList"
) as HTMLUListElement;

export const cocktailName = document.getElementById(
  "cocktailName"
) as HTMLHeadElement;

export const preparationField = document.getElementById(
  "preparationField"
) as HTMLParagraphElement;

export const cocktailPicture = document.getElementById(
  "cocktail"
) as HTMLDivElement;

export const drinkId = document.getElementById("drinkId") as HTMLLIElement;
export const alkoholicYN = document.getElementById(
  "alkoholicYorN"
) as HTMLLIElement;
export const cocktailCategory = document.getElementById(
  "cocktailCategory"
) as HTMLLIElement;

export const resultParentEl = document.getElementById(
  "cocktailList"
) as HTMLLIElement;

export const ingredientsList = document.getElementById(
  "ingredientsList"
) as HTMLUListElement;
