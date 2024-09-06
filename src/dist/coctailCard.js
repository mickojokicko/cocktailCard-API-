import { searchBtn, cocktailList } from "./variabless.js";
import { findCocktail, keyboardHendler } from "./functions.js";
import { displayFromCocktailList } from "./functions.js";
searchBtn === null || searchBtn === void 0 ? void 0 : searchBtn.addEventListener("click", findCocktail);
cocktailList.addEventListener("click", displayFromCocktailList);
document.addEventListener("keydown", keyboardHendler);
