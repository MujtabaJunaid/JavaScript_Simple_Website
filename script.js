document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("searchForm");
  const input = document.getElementById("searchInput");
  const results = document.getElementById("results");
  const clearBtn = document.getElementById("clearBtn");

  clearBtn.addEventListener("click", function () {
    input.value = "";
    results.innerHTML = "";
  });

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const term = input.value.trim().toLowerCase();
    results.innerHTML = "";

    if (term.includes("beach")) {
      results.innerHTML += `
        <h2>Beach Recommendations</h2>
        <div class="destination">
          <div>
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/View_of_tropical_sand_beach_and_ocean.jpg" alt="Beach 1">
            <p>Beach Paradise</p>
          </div>
          <div>
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a1/Beach_ocean_water_sand_pier_waves.jpg" alt="Beach 2">
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
            <img src="https://upload.wikimedia.org/wikipedia/commons/3/30/Angkor_Wat.jpg" alt="Temple 1">
            <p>Temple of Dawn</p>
          </div>
          <div>
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/Parthenon_at_sunset.jpg" alt="Temple 2">
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
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a8/Switzerland_Alps.jpg" alt="Country 1">
            <p>Switzerland</p>
          </div>
          <div>
            <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/New_Zealand_Landscape.jpg" alt="Country 2">
            <p>New Zealand</p>
          </div>
        </div>
      `;
    }

    if (results.innerHTML === "") {
      results.innerHTML = "<p>No recommendations found. Try searching for 'beach', 'temple', or 'country'.</p>";
    }
  });
});
