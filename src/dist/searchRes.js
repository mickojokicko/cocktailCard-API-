export {};
// const searchResult = async function () {
//   try {
//     const response = await fetch(`${API_URL}${inputValue}`);
//     const data = await response.json();
//     state.search.results = data.drinks.map((item: any) => {
//       return {
//         id: item.idDrink,
//         name: item.strDrink,
//         alcohol: item.strAlcoholic,
//         category: item.strCategory,
//       };
//     });
//     const searchResult = state.search.results;
//     searchResult.forEach((item: iSearchResult) => {
//       console.log(item.name);
//     });
//     console.log(searchResult);
//   } catch (err) {
//     console.log(err);
//   }
// };
