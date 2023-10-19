/*
<ul id="ingredients"></ul>

Напиши скрипт, який для кожного елемента масиву ingredients:

Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
Додасть назву інгредієнта як його текстовий вміст.
Додасть елементу клас item.
Після чого, вставить усі <> за одну операцію у список ul#ingredients.
*/
const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.createElement("ul");
list.setAttribute("id", "ingredients");

const listItemMarkup = () => {
  for (let i = 0; i < ingredients.length; i++) {
    const listItem = document.createElement("li");
    listItem.classList.add("item");
    listItem.textContent = ingredients[i];
    list.appendChild(listItem);
  }
};

listItemMarkup();

document.body.appendChild(list);

/********** 2nd variant **********/

// const listMarkup = ingredients.map((ingredient) => {
//   const listItem = document.createElement("li");
//   listItem.classList.add("item");
//   listItem.textContent = ingredient;
//   // console.dir(listItem);
//   // console.log(listItem);

//   list.appendChild(listItem);
// });
