/*
Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).
В результаті, в консолі будуть виведені наступні повідомлення.

Number of categories: 3

Category: Animals
Elements: 4

Category: Products
Elements: 3

Category: Technologies
Elements: 5
*/

const categories = document.querySelectorAll("li.item");
const quantityOfCategories = categories.length;

console.log("Number of categories:", quantityOfCategories);

categories.forEach((element) => {
  console.log("Category:", element.firstElementChild.textContent);
  console.log("Elements:", element.lastElementChild.childElementCount);
});

/********** 2nd variant **********/
console.log("/****************************/");

for (let i = 0; i < categories.length; i++) {
  const category = categories[i];
  console.log("Category:", category.firstElementChild.textContent);
  console.log("Elements:", category.lastElementChild.childElementCount);
}
