const getRow = document.getElementById("element_row");

window.onload = async () => {
  const response = await fetch("https://striveschool-api.herokuapp.com/books");
  const result = await response.json();

  console.log(result);

  result.forEach((books) => console.log(books));
  result.forEach((books) => {
    getRow.innerHTML += `
    <div class="col mb-3">
            <div class="card h-100 shadow-sm">
              <img
                src="${books.img}"
                id="padding_low"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <div class="clearfix mb-4">
                  <span class="float-start badge"
                    >${books.category}</span
                  >
                  <span class="float-end price-hp">${books.price}$</span>
                </div>
                <h5 class="card-title">
                  ${books.title}
                </h5>
                <div class="text-center my-4">
                  <a href="#" class="btn btn-warning">Add To Cart</a>
                </div>
                <div class="text-center my-4">
                  <a href="#" class="btn btn-warning">Skip</a>
                </div>
              </div>
            </div>
          </div>`;
  });
};
