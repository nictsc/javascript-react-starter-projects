const storageKey = "shoppingListItems";
const defaultShoppingListItems = ["milk", "eggs", "bread"];

const getShoppingListItems = () => {
    const savedItems = localStorage.getItem(storageKey);

    if (!savedItems) {
        return [...defaultShoppingListItems];
    }

    try {
        const parsedItems = JSON.parse(savedItems);

        if (Array.isArray(parsedItems)) {
            return parsedItems;
        }
    } catch (error) {
        console.error("Could not read shopping list items", error);
    }

    return [...defaultShoppingListItems];
};

let shoppingListItems = getShoppingListItems();

const saveItems = () => {
    localStorage.setItem(storageKey, JSON.stringify(shoppingListItems));
};

const addItem = () => {
    let itemInput = document.getElementById("new-item-text");
    let item = itemInput.value.trim();

    if (!item) {
        return;
    }

    shoppingListItems.push(item);
    saveItems();
    updateItems();
    itemInput.value = "";
};

const updateItems = () => {
    let listElement = document.getElementById("shopping-list-items");
    listElement.innerHTML = "";

    for (const shoppingItem of shoppingListItems) {
        let itemElement = document.createElement("li");
        itemElement.innerText = shoppingItem;
        listElement.appendChild(itemElement);
    }
};

updateItems();
