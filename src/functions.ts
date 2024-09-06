import { searchInput, resultParentEl } from "./variabless.js";

import { searchResult, renderUi } from "./view.js";

interface iState {
  results: iSearchResult[];
  ingredients: string[];
  id: string | null;
}
export interface iCocktailData {
  cocktailName: string;
  idDrink: string;
  alcoholic: string | boolean;
  category: string;
  ingredient: string[];
  imageSource: string;
  preparation: string;
}

export interface iSearchResult {
  id: string;
  name: string;
  alcohol: string;
  category: string;
}

export const state: iState = {
  results: [],
  ingredients: [],
  id: "",
};

export function clearField(): void {
  searchInput.value = "";
}

export const findCocktail = async function (): Promise<void> {
  try {
    const inputValue: string = searchInput.value;
    resultParentEl.innerHTML = "";
    if (inputValue !== "") {
      // _______________________________________
      await searchResult();
      await renderUi(inputValue);
      clearField();
    } else return;
  } catch (err: any) {
    alert(`Please insert correct Cocktail name! ${err}`);
    clearField();
  }
};

export function displayFromCocktailList(event: Event) {
  const target = event.target as HTMLElement;
  const itemFromListWithAttr = target.closest(".resultsItem") as HTMLLIElement;
  const CocktailID = itemFromListWithAttr.getAttribute("data-id");

  renderUi(CocktailID);
}

export function keyboardHendler(event: KeyboardEvent) {
  const key = event.key;
  if (key === "Enter") findCocktail();
}
