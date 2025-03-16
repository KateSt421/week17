class Transport {
  constructor(type, brand, price) {
    this.type = type;
    this.brand = brand;
    this.price = price;
  }

  getInfo() {
    return `Тип: ${this.type}, Бренд: ${this.brand}`;
  }

  getPrice() {
    return `Цена: ${this.price.toLocaleString()} руб.`;
  }
}

class Car extends Transport {
  constructor(brand, doors, price) {
    super("car", brand, price);
    this.doors = doors;
  }

  getDoorsCount() {
    return this.doors;
  }
}

class Bike extends Transport {
  constructor(brand, maxSpeed, price) {
    super("bike", brand, price);
    this.maxSpeed = maxSpeed;
  }

  getMaxSpeed() {
    return this.maxSpeed;
  }
}

// Данные о транспорте
const data = [
  {
    id: 1,
    type: "car",
    brand: "Audi",
    doors: 4,
    price: 4300000,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/2020_Audi_e-Tron_Sport_50_Quattro.jpg/1200px-2020_Audi_e-Tron_Sport_50_Quattro.jpg",
  },
  {
    id: 2,
    type: "car",
    brand: "Mercedes-Benz",
    doors: 4,
    price: 2800000,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/2019_Mercedes-Benz_E220d_SE_Automatic_2.0_Front.jpg/300px-2019_Mercedes-Benz_E220d_SE_Automatic_2.0_Front.jpg",
  },
  {
    id: 3,
    type: "bike",
    brand: "Harley-Davidson",
    maxSpeed: 210,
    price: 1300000,
    image:
      "https://www.harley-davidson.com/content/dam/h-d/images/product-images/bikes/motorcycle/2022/2022-iron-883/2022-iron-883-016/2022-iron-883-016-motorcycle.jpg",
  },
  {
    id: 4,
    type: "bike",
    brand: "Harley-Davidson",
    maxSpeed: 220,
    price: 1400000,
    image:
      "https://cdn.dealerspike.com/imglib/products/harley-showroom/2020/livewire/main/Vivid-Black-Main.png",
  },
];

// Создание объектов на основе данных и отображение на странице
const transports = data.map((item) => {
  if (item.type === "car") {
    return new Car(item.brand, item.doors, item.price);
  } else if (item.type === "bike") {
    return new Bike(item.brand, item.maxSpeed, item.price);
  }
});

// Отображение информации о транспорте на странице
const transportContainer = document.getElementById("transport-container");

transports.forEach((transport) => {
  const card = document.createElement("div");
  card.className = "transport-card";

  const image = document.createElement("img");
  image.src = data.find(
    (item) => item.brand === transport.brand && item.type === transport.type
  ).image;

  const title = document.createElement("h2");
  title.innerText = transport.getInfo();

  const price = document.createElement("p");
  price.innerText = transport.getPrice();

  if (transport instanceof Car) {
    const doorsCount = document.createElement("p");
    doorsCount.innerText = `Количество дверей: ${transport.getDoorsCount()}`;
    card.appendChild(doorsCount);
  } else if (transport instanceof Bike) {
    const maxSpeed = document.createElement("p");
    maxSpeed.innerText = `Максимальная скорость: ${transport.getMaxSpeed()} км/ч`;
    card.appendChild(maxSpeed);
  }

  card.appendChild(image);
  card.appendChild(title);
  card.appendChild(price);

  transportContainer.appendChild(card);
});
