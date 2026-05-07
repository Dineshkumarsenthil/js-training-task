const API_URL = "https://fakestoreapi.com/products/";

const productsContainer = document.getElementById("products");

const searchInput = document.getElementById("search");

const categorySelect = document.getElementById("category");

const sortSelect = document.getElementById("sort");

let allProducts = [];

/* =========================
   FETCH PRODUCTS
========================= */

fetch(API_URL)

  .then((response) => {
    return response.json();
  })

  .then((data) => {

    allProducts = data;

    displayProducts(data);

    populateCategories(data);

  })

  .catch((error) => {

    productsContainer.innerHTML =
      "<h2>Failed to load data</h2>";

    console.log(error);

  });

/* =========================
   DISPLAY PRODUCTS
========================= */

function displayProducts(data) {

  productsContainer.innerHTML = "";

  if (data.length === 0) {
    productsContainer.innerHTML =
      "<h2>No Products Found</h2>";

    return;
  }

  data.forEach((product) => {

    let card = document.createElement("div");

    card.classList.add("card");

    card.innerHTML = `

      <img src="${product.image}" alt="">

      <h3>
        ${product.title.slice(0, 50)}...
      </h3>

      <p class="price">
        ₹${product.price}
      </p>

      <p class="desc">
        ${product.description.slice(0, 60)}...
      </p>

      <div class="buttons">

        <button class="view-btn">
          View More
        </button>

        <button class="cart-btn">
          Add To Cart
        </button>

      </div>
    `;

    /* View More Button */

    card
      .querySelector(".view-btn")
      .addEventListener("click", () => {

        alert(
          product.title +
          "\\n\\n" +
          product.description
        );

      });

    /* Add To Cart */

    card
      .querySelector(".cart-btn")
      .addEventListener("click", () => {

        let cart =
          JSON.parse(localStorage.getItem("cart"))
          || [];

        cart.push(product);

        localStorage.setItem(
          "cart",
          JSON.stringify(cart)
        );

        alert("Product Added To Cart");

      });

    productsContainer.appendChild(card);

  });
}

/* =========================
   SEARCH FUNCTION
========================= */

searchInput.addEventListener("input", filterProducts);

/* =========================
   CATEGORY FILTER
========================= */

function populateCategories(data) {

  let categories = [
    ...new Set(data.map((item) => item.category))
  ];

  categories.forEach((category) => {

    let option = document.createElement("option");

    option.value = category;

    option.textContent = category;

    categorySelect.appendChild(option);

  });
}

categorySelect.addEventListener("change", filterProducts);

/* =========================
   SORT FEATURE
========================= */

sortSelect.addEventListener("change", filterProducts);

/* =========================
   FILTER PRODUCTS
========================= */

function filterProducts() {

  let filtered = [...allProducts];

  /* Search */

  let searchValue =
    searchInput.value.toLowerCase();

  filtered = filtered.filter((product) => {

    return product.title
      .toLowerCase()
      .includes(searchValue);

  });

  /* Category */

  let categoryValue = categorySelect.value;

  if (categoryValue !== "all") {

    filtered = filtered.filter((product) => {

      return product.category === categoryValue;

    });

  }

  /* Sort */

  if (sortSelect.value === "low") {

    filtered.sort((a, b) => {
      return a.price - b.price;
    });

  }

  else if (sortSelect.value === "high") {

    filtered.sort((a, b) => {
      return b.price - a.price;
    });

  }

  displayProducts(filtered);
}