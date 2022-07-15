const fruits = [
  {
    id: 1,
    title: "Яблоки",
    price: 20,
    img: "plagins/apple.png",
  },
  {
    id: 2,
    title: "Апельсин",
    price: 30,
    img: "plagins/orange.png",
  },
  {
    id: 3,
    title: "Манго",
    price: 40,
    img: "plagins/mango.png",
  },
];

const PriceModal = $.modal({
  title: "Цена на товар",
  closable: true,
  width: "400px",
  footerButtons: [
    {
      text: "Закрыть",
      type: "primary",
      handler() {
        PriceModal.close();
      },
    },
  ],
});

const toHTML = (fruit) => `
				<div class="col">
          <div class="card">
            <img height="213.52px" src="${fruit.img}" class="card-img-top" alt="${fruit.title}" />
            <div class="card-body">
              <h5 class="card-title">${fruit.title}</h5>
              <a href="#" class="btn btn-primary" data-btn="price" data-id="${fruit.id}">Посмотреть цену</a>
              <a href="#" class="btn btn-danger">Удалить</a>
            </div>
          </div>
        </div>
				`;

function render() {
  const html = fruits.map(toHTML).join("");
  document.querySelector("#fruits").innerHTML = html;
}

render();

document.addEventListener("click", (event) => {
  event.preventDefault();
  const btnType = event.target.dataset.btn;
  const id = event.target.dataset.id;

  if (btnType === "price") {
    const fruit = fruits.find((f) => f.id === id);
    console.log(fruit);
    PriceModal.open();
  }
});
