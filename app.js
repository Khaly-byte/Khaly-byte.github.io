const campusData = {
  "North Lake University": {
    weeklyBudget: 35,
    stores: [
      { name: "Target Express", distance: "0.4 mi", multiplier: 1, note: "Fastest all-around stop" },
      { name: "Campus Corner Market", distance: "0.2 mi", multiplier: 1.08, note: "Closest walk from dorms" },
      { name: "Fresh Market Hub", distance: "0.9 mi", multiplier: 0.94, note: "Best value on proteins" }
    ]
  },
  "City Tech College": {
    weeklyBudget: 32,
    stores: [
      { name: "Metro Grocery", distance: "0.5 mi", multiplier: 1, note: "Balanced pantry and produce prices" },
      { name: "Student Union Pantry", distance: "On campus", multiplier: 0.72, note: "Free and subsidized staples when available" },
      { name: "Value Foods", distance: "0.7 mi", multiplier: 0.93, note: "Best frozen and breakfast deals" }
    ]
  },
  "River State University": {
    weeklyBudget: 30,
    stores: [
      { name: "Campus Co-op Market", distance: "0.3 mi", multiplier: 1.03, note: "Easy between classes" },
      { name: "Green Basket", distance: "0.6 mi", multiplier: 0.91, note: "Best pantry pricing nearby" },
      { name: "Discount Mart", distance: "1.1 mi", multiplier: 0.87, note: "Worth the longer trip for bulk shopping" }
    ]
  }
};

const baseMeals = [
  {
    id: "spicy-ramen-egg",
    title: "Spicy Ramen Egg Bowl",
    source: "TikTok",
    campus: "North Lake University",
    totalPrice: 6.85,
    servings: 2,
    cookTime: "12 min",
    tags: ["Dorm friendly", "High protein", "One pot"],
    importUrl: "https://www.tiktok.com/example/spicy-ramen-egg",
    ingredients: [
      { name: "Instant ramen", amount: "2 packs", price: 1.6 },
      { name: "Eggs", amount: "4 large", price: 1.48 },
      { name: "Frozen spinach", amount: "1 bag", price: 1.69 },
      { name: "Chili crisp", amount: "2 tbsp", price: 1.12 },
      { name: "Soy sauce", amount: "1 tbsp", price: 0.96 }
    ],
    steps: [
      "Boil the ramen and spinach in the same pot for a quick base.",
      "Soft boil or fry the eggs while the noodles cook.",
      "Stir in soy sauce and chili crisp, then top with eggs."
    ]
  },
  {
    id: "chicken-rice-burrito",
    title: "Chicken Rice Burrito Bowl",
    source: "Instagram",
    campus: "North Lake University",
    totalPrice: 11.2,
    servings: 4,
    cookTime: "20 min",
    tags: ["Meal prep", "Microwave friendly", "Budget staple"],
    importUrl: "https://www.instagram.com/example/chicken-rice-burrito",
    ingredients: [
      { name: "Microwave rice", amount: "2 pouches", price: 4.0 },
      { name: "Rotisserie chicken", amount: "1 chicken", price: 4.99 },
      { name: "Black beans", amount: "1 can", price: 1.19 },
      { name: "Salsa", amount: "1 jar", price: 1.02 }
    ],
    steps: [
      "Warm the rice and beans together with a little salsa.",
      "Pull the rotisserie chicken into small pieces.",
      "Assemble bowls and portion into containers for later meals."
    ]
  },
  {
    id: "peanut-noodles",
    title: "Cold Peanut Noodle Cup",
    source: "Facebook",
    campus: "City Tech College",
    totalPrice: 8.35,
    servings: 3,
    cookTime: "15 min",
    tags: ["No oven", "Vegetarian", "Meal prep"],
    importUrl: "https://www.facebook.com/example/peanut-noodles",
    ingredients: [
      { name: "Spaghetti", amount: "8 oz", price: 1.39 },
      { name: "Peanut butter", amount: "4 tbsp", price: 1.22 },
      { name: "Cucumber", amount: "1 whole", price: 0.99 },
      { name: "Carrots", amount: "1 bag", price: 1.49 },
      { name: "Soy sauce", amount: "2 tbsp", price: 1.1 },
      { name: "Lime", amount: "1 whole", price: 0.89 },
      { name: "Sriracha", amount: "1 tbsp", price: 1.27 }
    ],
    steps: [
      "Cook and rinse the pasta until it is cool.",
      "Whisk peanut butter, soy sauce, lime juice, and sriracha.",
      "Toss noodles with sliced vegetables and the sauce."
    ]
  },
  {
    id: "loaded-potato-skillet",
    title: "Loaded Potato Breakfast Skillet",
    source: "Instagram",
    campus: "City Tech College",
    totalPrice: 9.1,
    servings: 4,
    cookTime: "18 min",
    tags: ["Breakfast", "One pan", "Filling"],
    importUrl: "https://www.instagram.com/example/loaded-potato-skillet",
    ingredients: [
      { name: "Frozen hash browns", amount: "1 bag", price: 2.99 },
      { name: "Eggs", amount: "6 large", price: 2.22 },
      { name: "Shredded cheese", amount: "1 bag", price: 2.49 },
      { name: "Green onions", amount: "1 bunch", price: 0.99 },
      { name: "Greek yogurt", amount: "1 cup", price: 0.41 }
    ],
    steps: [
      "Crisp the hash browns in a skillet.",
      "Crack eggs on top and cover until set.",
      "Add cheese, onions, and a spoon of yogurt before serving."
    ]
  },
  {
    id: "lentil-tacos",
    title: "Lentil Taco Night",
    source: "TikTok",
    campus: "River State University",
    totalPrice: 7.4,
    servings: 4,
    cookTime: "25 min",
    tags: ["Plant based", "High fiber", "Cheap dinner"],
    importUrl: "https://www.tiktok.com/example/lentil-tacos",
    ingredients: [
      { name: "Brown lentils", amount: "1 lb", price: 1.79 },
      { name: "Taco seasoning", amount: "1 packet", price: 0.89 },
      { name: "Corn tortillas", amount: "10 count", price: 1.49 },
      { name: "Onion", amount: "1 whole", price: 0.82 },
      { name: "Tomato", amount: "2 whole", price: 1.39 },
      { name: "Cheddar cheese", amount: "1 cup", price: 1.02 }
    ],
    steps: [
      "Simmer lentils until tender, then stir in taco seasoning.",
      "Warm tortillas and prep tomato and onion toppings.",
      "Build tacos and use leftovers for lunch bowls the next day."
    ]
  },
  {
    id: "turkey-pesto-melts",
    title: "Turkey Pesto Melt Sandwiches",
    source: "Facebook",
    campus: "River State University",
    totalPrice: 10.55,
    servings: 4,
    cookTime: "14 min",
    tags: ["Quick lunch", "Protein", "Air fryer optional"],
    importUrl: "https://www.facebook.com/example/turkey-pesto-melts",
    ingredients: [
      { name: "Sandwich bread", amount: "8 slices", price: 2.1 },
      { name: "Deli turkey", amount: "8 oz", price: 3.49 },
      { name: "Mozzarella", amount: "6 slices", price: 2.19 },
      { name: "Pesto", amount: "3 tbsp", price: 1.44 },
      { name: "Tomato", amount: "1 whole", price: 1.33 }
    ],
    steps: [
      "Spread pesto on bread and layer turkey, cheese, and tomato.",
      "Toast in a pan or air fryer until the bread is crisp.",
      "Pair with fruit or soup for a fuller meal."
    ]
  }
];

const customMeals = JSON.parse(localStorage.getItem("campusBitesCustomMeals") || "[]");

const state = {
  campus: "North Lake University",
  source: "all",
  maxPrice: 14,
  selectedMealId: null,
  savedMeals: new Set(JSON.parse(localStorage.getItem("campusBitesSaved") || "[]")),
  weeklyPlan: JSON.parse(localStorage.getItem("campusBitesWeeklyPlan") || "[]")
};

const elements = {
  campusSelect: document.querySelector("#campusSelect"),
  importCampus: document.querySelector("#importCampus"),
  sourceSelect: document.querySelector("#sourceSelect"),
  priceRange: document.querySelector("#priceRange"),
  priceRangeLabel: document.querySelector("#priceRangeLabel"),
  mealGrid: document.querySelector("#mealGrid"),
  mealCount: document.querySelector("#mealCount"),
  detailPanel: document.querySelector("#detailPanel"),
  savedCount: document.querySelector("#savedCount"),
  budgetHeadline: document.querySelector("#budgetHeadline"),
  averageMealCost: document.querySelector("#averageMealCost"),
  averageServingCost: document.querySelector("#averageServingCost"),
  focusImport: document.querySelector("#focusImport"),
  importSection: document.querySelector("#importSection"),
  savedToggle: document.querySelector("#savedToggle"),
  cardTemplate: document.querySelector("#mealCardTemplate"),
  importForm: document.querySelector("#recipeImportForm"),
  importSource: document.querySelector("#importSource"),
  importStatus: document.querySelector("#importStatus"),
  importUrl: document.querySelector("#importUrl"),
  importTitle: document.querySelector("#importTitle"),
  importPrice: document.querySelector("#importPrice"),
  importServings: document.querySelector("#importServings"),
  importCookTime: document.querySelector("#importCookTime"),
  importIngredients: document.querySelector("#importIngredients"),
  importSteps: document.querySelector("#importSteps"),
  loadExampleRecipe: document.querySelector("#loadExampleRecipe"),
  addSelectedToPlan: document.querySelector("#addSelectedToPlan"),
  clearPlan: document.querySelector("#clearPlan"),
  plannerSummary: document.querySelector("#plannerSummary"),
  plannerList: document.querySelector("#plannerList"),
  storeComparison: document.querySelector("#storeComparison")
};

function formatCurrency(value) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
  }).format(value);
}

function slugify(value) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function getAllMeals() {
  return [...baseMeals, ...customMeals];
}

function persistCustomMeals() {
  localStorage.setItem("campusBitesCustomMeals", JSON.stringify(customMeals));
}

function persistSavedMeals() {
  localStorage.setItem("campusBitesSaved", JSON.stringify([...state.savedMeals]));
}

function persistWeeklyPlan() {
  localStorage.setItem("campusBitesWeeklyPlan", JSON.stringify(state.weeklyPlan));
}

function getCampusStores(campus) {
  return campusData[campus].stores;
}

function buildStoreOptions(meal) {
  return getCampusStores(meal.campus).map((store) => ({
    ...store,
    estimatedTotal: Number((meal.totalPrice * store.multiplier).toFixed(2))
  }));
}

function enrichMeal(meal) {
  const stores = buildStoreOptions(meal);
  const cheapestStore = stores.reduce((best, current) => (
    current.estimatedTotal < best.estimatedTotal ? current : best
  ), stores[0]);

  return {
    ...meal,
    stores,
    cheapestStore
  };
}

function getVisibleMeals() {
  return getAllMeals()
    .filter((meal) => {
      const matchesCampus = meal.campus === state.campus;
      const matchesSource = state.source === "all" || meal.source === state.source;
      const matchesPrice = meal.totalPrice <= state.maxPrice;
      return matchesCampus && matchesSource && matchesPrice;
    })
    .map(enrichMeal);
}

function getMealById(id) {
  return getAllMeals().find((meal) => meal.id === id);
}

function updateOverview(meals) {
  const weeklyBudget = campusData[state.campus].weeklyBudget;
  const averageMeal = meals.length
    ? meals.reduce((sum, meal) => sum + meal.totalPrice, 0) / meals.length
    : 0;
  const averageServing = meals.length
    ? meals.reduce((sum, meal) => sum + meal.totalPrice / meal.servings, 0) / meals.length
    : 0;

  elements.budgetHeadline.textContent = formatCurrency(weeklyBudget);
  elements.averageMealCost.textContent = formatCurrency(averageMeal);
  elements.averageServingCost.textContent = formatCurrency(averageServing);
  elements.savedCount.textContent = state.savedMeals.size;
}

function renderMealGrid() {
  const meals = getVisibleMeals();
  elements.mealGrid.innerHTML = "";
  elements.mealCount.textContent = `${meals.length} meal${meals.length === 1 ? "" : "s"}`;

  if (!meals.length) {
    elements.mealGrid.innerHTML = `
      <div class="empty-state">
        <h4>No meals match this filter.</h4>
        <p>Try another campus, source app, or raise the max meal price.</p>
      </div>
    `;
    elements.detailPanel.innerHTML = '<p class="detail-empty">No meal selected right now because the current filters returned no matches.</p>';
    updateOverview(meals);
    renderStoreComparison();
    return;
  }

  if (!state.selectedMealId || !meals.some((meal) => meal.id === state.selectedMealId)) {
    state.selectedMealId = meals[0].id;
  }

  meals.forEach((meal) => {
    const card = elements.cardTemplate.content.firstElementChild.cloneNode(true);
    const sourcePill = card.querySelector(".source-pill");
    const saveButton = card.querySelector(".save-button");

    sourcePill.textContent = meal.source;
    sourcePill.classList.add(meal.source.toLowerCase());
    card.querySelector(".meal-title").textContent = meal.title;
    card.querySelector(".meal-meta").textContent = `${meal.campus} | ${meal.cookTime} | ${meal.servings} servings`;
    card.querySelector(".meal-total").textContent = formatCurrency(meal.totalPrice);
    card.querySelector(".meal-serving").textContent = formatCurrency(meal.totalPrice / meal.servings);

    const tagRow = card.querySelector(".tag-row");
    meal.tags.forEach((tag) => {
      const tagNode = document.createElement("span");
      tagNode.className = "tag";
      tagNode.textContent = tag;
      tagRow.appendChild(tagNode);
    });

    const isSaved = state.savedMeals.has(meal.id);
    saveButton.textContent = isSaved ? "Saved" : "Save";
    saveButton.classList.toggle("is-saved", isSaved);
    card.classList.toggle("is-active", meal.id === state.selectedMealId);

    saveButton.addEventListener("click", (event) => {
      event.stopPropagation();
      toggleSaveMeal(meal.id);
    });

    card.addEventListener("click", () => {
      state.selectedMealId = meal.id;
      renderApp();
    });

    elements.mealGrid.appendChild(card);
  });

  updateOverview(meals);
  renderMealDetail();
  renderStoreComparison();
}

function renderMealDetail() {
  const rawMeal = getMealById(state.selectedMealId);
  if (!rawMeal) {
    elements.detailPanel.innerHTML = '<p class="detail-empty">Choose a meal to see ingredients, prices, and where to shop nearby.</p>';
    return;
  }

  const meal = enrichMeal(rawMeal);
  const ingredientMarkup = meal.ingredients.map((ingredient) => `
    <li class="ingredient-item">
      <div>
        <strong>${ingredient.name}</strong>
        <span class="ingredient-note">${ingredient.amount}</span>
      </div>
      <strong>${formatCurrency(ingredient.price)}</strong>
    </li>
  `).join("");

  const storeMarkup = meal.stores.map((store) => `
    <li class="store-item">
      <div>
        <strong>${store.name}</strong>
        <span class="store-note">${store.note}</span>
      </div>
      <div>
        <span class="store-distance">${store.distance}</span>
        <strong>${formatCurrency(store.estimatedTotal)}</strong>
      </div>
    </li>
  `).join("");

  const stepMarkup = meal.steps.map((step, index) => `
    <li class="step-item">
      <strong>Step ${index + 1}</strong>
      <span>${step}</span>
    </li>
  `).join("");

  const isSaved = state.savedMeals.has(meal.id);

  elements.detailPanel.innerHTML = `
    <div class="detail-heading">
      <div>
        <p class="eyebrow">${meal.source} import</p>
        <h3>${meal.title}</h3>
        <p class="meal-meta">${meal.campus} | ${meal.cookTime} | ${meal.servings} servings</p>
      </div>
      <div class="detail-price">
        <span class="detail-label">Meal total</span>
        <strong>${formatCurrency(meal.totalPrice)}</strong>
        <span>${formatCurrency(meal.totalPrice / meal.servings)} per serving</span>
      </div>
    </div>

    <div class="detail-block">
      <p class="detail-label">Best nearby store</p>
      <div class="comparison-card">
        <div>
          <strong>${meal.cheapestStore.name}</strong>
          <p>${meal.cheapestStore.note}</p>
        </div>
        <div>
          <span class="store-distance">${meal.cheapestStore.distance}</span>
          <strong>${formatCurrency(meal.cheapestStore.estimatedTotal)}</strong>
        </div>
      </div>
    </div>

    <div class="detail-block">
      <p class="detail-label">Tags</p>
      <div class="tag-row">${meal.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}</div>
    </div>

    <div class="detail-block">
      <p class="detail-label">Imported from</p>
      <p class="meal-meta">${meal.importUrl || "Imported manually inside Campus Bites"}</p>
    </div>

    <div class="detail-block">
      <p class="detail-label">Ingredient prices</p>
      <ul class="ingredient-list">${ingredientMarkup}</ul>
    </div>

    <div class="detail-block">
      <p class="detail-label">Where to shop near campus</p>
      <ul class="store-list">${storeMarkup}</ul>
    </div>

    <div class="detail-block">
      <p class="detail-label">Recipe steps</p>
      <ul class="steps-list">${stepMarkup}</ul>
    </div>

    <div class="detail-block">
      <div class="planner-actions">
        <button class="primary-button" id="detailSaveButton" type="button">${isSaved ? "Saved to your list" : "Save this meal"}</button>
        <button class="secondary-button" id="detailPlanButton" type="button">Add to weekly plan</button>
      </div>
    </div>
  `;

  document.querySelector("#detailSaveButton").addEventListener("click", () => {
    toggleSaveMeal(meal.id);
  });

  document.querySelector("#detailPlanButton").addEventListener("click", () => {
    addMealToPlan(meal.id);
  });
}

function renderPlanner() {
  const plannedMeals = state.weeklyPlan
    .map((mealId) => getMealById(mealId))
    .filter(Boolean)
    .map(enrichMeal);
  const weeklyBudget = campusData[state.campus].weeklyBudget;
  const total = plannedMeals.reduce((sum, meal) => sum + meal.cheapestStore.estimatedTotal, 0);
  const remaining = weeklyBudget - total;

  elements.plannerSummary.innerHTML = `
    <div>
      <p class="detail-label">Planned spend</p>
      <strong>${formatCurrency(total)}</strong>
    </div>
    <div>
      <p class="detail-label">Budget left</p>
      <strong>${formatCurrency(remaining)}</strong>
    </div>
  `;

  if (!plannedMeals.length) {
    elements.plannerList.innerHTML = `
      <div class="empty-state">
        <h4>Your weekly plan is empty.</h4>
        <p>Add a meal from the browser to build out a low-cost week.</p>
      </div>
    `;
    return;
  }

  elements.plannerList.innerHTML = plannedMeals.map((meal, index) => `
    <div class="planner-item">
      <div>
        <strong>${meal.title}</strong>
        <p>${meal.cheapestStore.name} | ${meal.servings} servings | ${meal.cookTime}</p>
      </div>
      <div>
        <strong>${formatCurrency(meal.cheapestStore.estimatedTotal)}</strong>
        <button type="button" data-remove-plan="${index}">Remove</button>
      </div>
    </div>
  `).join("");

  document.querySelectorAll("[data-remove-plan]").forEach((button) => {
    button.addEventListener("click", () => {
      const index = Number(button.getAttribute("data-remove-plan"));
      state.weeklyPlan.splice(index, 1);
      persistWeeklyPlan();
      renderPlanner();
      renderStoreComparison();
    });
  });
}

function renderStoreComparison() {
  const stores = getCampusStores(state.campus);
  const selectedMeal = getMealById(state.selectedMealId);
  const planMeals = state.weeklyPlan.map((mealId) => getMealById(mealId)).filter(Boolean);
  const comparisonMeals = selectedMeal ? [selectedMeal, ...planMeals] : planMeals;

  const cards = stores.map((store) => {
    const total = comparisonMeals.reduce((sum, meal) => sum + meal.totalPrice * store.multiplier, 0);
    return {
      ...store,
      total: Number(total.toFixed(2))
    };
  }).sort((a, b) => a.total - b.total);

  elements.storeComparison.innerHTML = cards.map((store, index) => `
    <div class="comparison-card">
      <div>
        <p class="detail-label">${index === 0 ? "Best value" : "Nearby option"}</p>
        <strong>${store.name}</strong>
        <p>${store.note}</p>
      </div>
      <div>
        <span class="store-distance">${store.distance}</span>
        <strong>${formatCurrency(store.total)}</strong>
      </div>
    </div>
  `).join("");
}

function toggleSaveMeal(mealId) {
  if (state.savedMeals.has(mealId)) {
    state.savedMeals.delete(mealId);
  } else {
    state.savedMeals.add(mealId);
  }
  persistSavedMeals();
  renderApp();
}

function addMealToPlan(mealId) {
  state.weeklyPlan.push(mealId);
  persistWeeklyPlan();
  renderPlanner();
  renderStoreComparison();
}

function populateCampusSelects() {
  Object.keys(campusData).forEach((campus) => {
    [elements.campusSelect, elements.importCampus].forEach((select) => {
      const option = document.createElement("option");
      option.value = campus;
      option.textContent = campus;
      select.appendChild(option);
    });
  });

  elements.campusSelect.value = state.campus;
  elements.importCampus.value = state.campus;
}

function loadDemoRecipe() {
  elements.importSource.value = "TikTok";
  elements.importCampus.value = state.campus;
  elements.importUrl.value = "https://www.tiktok.com/example/dorm-chili-mac";
  elements.importTitle.value = "Dorm Chili Mac";
  elements.importPrice.value = "8.75";
  elements.importServings.value = "3";
  elements.importCookTime.value = "15 min";
  elements.importIngredients.value = [
    "Elbow pasta | 8 oz | 1.49",
    "Turkey chili | 1 can | 3.29",
    "Shredded cheddar | 1 cup | 1.79",
    "Milk | 0.5 cup | 0.68",
    "Frozen corn | 1 cup | 1.50"
  ].join("\n");
  elements.importSteps.value = [
    "Boil pasta until tender.",
    "Warm chili with milk and corn.",
    "Stir in pasta and top with cheddar."
  ].join("\n");
  elements.importStatus.textContent = "Demo recipe loaded";
}

function handleImportSubmit(event) {
  event.preventDefault();

  const ingredients = elements.importIngredients.value
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => {
      const [name, amount, price] = line.split("|").map((part) => part.trim());
      return {
        name: name || "Ingredient",
        amount: amount || "1 unit",
        price: Number(price || 0)
      };
    });

  const steps = elements.importSteps.value
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);

  const title = elements.importTitle.value.trim();
  if (!title || !ingredients.length || !steps.length) {
    elements.importStatus.textContent = "Add a title, ingredients, and steps";
    return;
  }

  const customMeal = {
    id: `custom-${slugify(title)}-${Date.now()}`,
    title,
    source: elements.importSource.value,
    campus: elements.importCampus.value,
    totalPrice: Number(elements.importPrice.value || 0),
    servings: Number(elements.importServings.value || 1),
    cookTime: elements.importCookTime.value.trim() || "15 min",
    tags: ["Student imported", "Budget tracked", "Custom meal"],
    importUrl: elements.importUrl.value.trim(),
    ingredients,
    steps
  };

  customMeals.unshift(customMeal);
  persistCustomMeals();

  state.campus = customMeal.campus;
  state.selectedMealId = customMeal.id;
  elements.campusSelect.value = state.campus;
  elements.importCampus.value = state.campus;

  elements.importForm.reset();
  elements.importStatus.textContent = "Recipe imported into your meal board";
  renderApp();
}

function showSavedMeals() {
  const savedMeals = getAllMeals()
    .filter((meal) => state.savedMeals.has(meal.id))
    .map(enrichMeal);

  if (!savedMeals.length) {
    elements.detailPanel.innerHTML = `
      <p class="detail-empty">You have not saved any meals yet. Try saving a meal card to build your budget meal list.</p>
    `;
    return;
  }

  const listMarkup = savedMeals.map((meal) => `
    <li class="store-item">
      <div>
        <strong>${meal.title}</strong>
        <span class="store-note">${meal.source} | ${meal.campus}</span>
      </div>
      <div>
        <span class="store-distance">${meal.cheapestStore.name}</span>
        <strong>${formatCurrency(meal.cheapestStore.estimatedTotal)}</strong>
      </div>
    </li>
  `).join("");

  elements.detailPanel.innerHTML = `
    <div class="detail-heading">
      <div>
        <p class="eyebrow">Saved list</p>
        <h3>Your budget meal board</h3>
        <p class="meal-meta">${savedMeals.length} saved recipe${savedMeals.length === 1 ? "" : "s"}</p>
      </div>
    </div>
    <div class="detail-block">
      <p class="detail-label">Saved meals</p>
      <ul class="store-list">${listMarkup}</ul>
    </div>
  `;
}

function attachEvents() {
  elements.campusSelect.addEventListener("change", (event) => {
    state.campus = event.target.value;
    elements.importCampus.value = state.campus;
    renderApp();
  });

  elements.sourceSelect.addEventListener("change", (event) => {
    state.source = event.target.value;
    renderMealGrid();
    renderPlanner();
  });

  elements.priceRange.addEventListener("input", (event) => {
    state.maxPrice = Number(event.target.value);
    elements.priceRangeLabel.textContent = formatCurrency(state.maxPrice);
    renderMealGrid();
    renderPlanner();
  });

  elements.focusImport.addEventListener("click", () => {
    elements.importSection.scrollIntoView({ behavior: "smooth", block: "start" });
  });

  elements.savedToggle.addEventListener("click", showSavedMeals);
  elements.loadExampleRecipe.addEventListener("click", loadDemoRecipe);
  elements.importForm.addEventListener("submit", handleImportSubmit);
  elements.addSelectedToPlan.addEventListener("click", () => {
    if (state.selectedMealId) {
      addMealToPlan(state.selectedMealId);
    }
  });
  elements.clearPlan.addEventListener("click", () => {
    state.weeklyPlan = [];
    persistWeeklyPlan();
    renderPlanner();
    renderStoreComparison();
  });
}

function renderApp() {
  renderMealGrid();
  renderPlanner();
}

function init() {
  populateCampusSelects();
  elements.priceRangeLabel.textContent = formatCurrency(state.maxPrice);
  attachEvents();
  renderApp();
}

init();
