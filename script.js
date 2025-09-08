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
            <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=60" alt="Beach 1">
            <p>Beach Paradise</p>
          </div>
          <div>
            <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=60" alt="Beach 2">
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
            <img src="https://images.unsplash.com/photo-1561037404-61cd46aa6159?auto=format&fit=crop&w=800&q=60" alt="Temple 1">
            <p>Temple of Dawn</p>
          </div>
          <div>
            <img src="https://images.unsplash.com/photo-1597733336794-12d6aa30901b?auto=format&fit=crop&w=800&q=60" alt="Temple 2">
            <p>Ancient Temple Ruins</p>
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
