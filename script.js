document.addEventListener("DOMContentLoaded", function () {
  const searchBtn = document.getElementById("searchBtn");
  const clearBtn = document.getElementById("clearBtn");
  const input = document.getElementById("searchInput");
  const results = document.getElementById("results");

  searchBtn.addEventListener("click", function () {
    const term = input.value.trim().toLowerCase();
    results.innerHTML = "";

    if (term.includes("beach")) {
      results.innerHTML += `
        <h2>Beach Recommendations</h2>
        <div class="destination">
          <div>
            <img src="https://as1.ftcdn.net/jpg/04/97/15/26/1000_F_497152642_F0AgZhKLS6OLnvV5zDrF9TU4SjDegMzH.webp" alt="Beach 1">
            <p>Beach Paradise</p>
          </div>
          <div>
            <img src="https://as2.ftcdn.net/jpg/02/12/69/71/1000_F_212697193_XcTtIafuuIotlj2VzrdfQqW03BGt56TS.webp" alt="Beach 2">
            <p>Sunny Shore</p>
          </div>
        </div>
      `;
    }

    if (term.includes("temple")) {
      results.innerHTML += `
        <h2>Temple Recommendations</h2>
        <div class="destination">
          <div>
            <img src="https://upload.wikimedia.org/wikipedia/commons/f/f1/Kedarnath_Temple_in_Kedarnath%2C_Uttarakhand%2C_India.jpg" alt="Temple 1">
            <p>Kedarnath Temple</p>
          </div>
          <div>
            <img src="https://upload.wikimedia.org/wikipedia/commons/e/ee/Meenakshi_Temple_India_2007.jpg" alt="Temple 2">
            <p>Meenakshi Temple</p>
          </div>
        </div>
      `;
    }

    if (term.includes("country")) {
      results.innerHTML += `
        <h2>Country Recommendations</h2>
        <div class="destination">
          <div>
            <img src="https://images.unsplash.com/photo-1509475826633-fed577a2c71b?auto=format&fit=crop&w=800&q=60" alt="Country 1">
            <p>Switzerland</p>
          </div>
          <div>
            <img src="https://images.unsplash.com/photo-1562028479-9a9cf1b5182b?auto=format&fit=crop&w=800&q=60" alt="Country 2">
            <p>New Zealand</p>
          </div>
        </div>
      `;
    }

    if (results.innerHTML === "") {
      results.innerHTML = "<p>No recommendations found. Try searching for 'beach', 'temple', or 'country'.</p>";
    }
  });

  clearBtn.addEventListener("click", function () {
    input.value = "";
    results.innerHTML = "";
  });
});
