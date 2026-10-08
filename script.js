const menuBtn = document.getElementById ("menuBtn");
const cardsContainer =  document.getElementById ("cardsContainer");
const navBar = document.getElementById ("navBar");
const icon = menuBtn.querySelector("i");

menuBtn.addEventListener("click",() => {

  navBar.classList.toggle("active");

  if(navBar.classList.contains("active")) {
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-xmark");
  }else{
    icon.classList.remove("fa-xmark");
    icon.classList.add("fa-bars");
  }
});
const menuItems = [
  {
    title:"Espresso",
    price:"K20",
    category:"Coffee",
    image:"assets/images/espresso.jpg",
    description:"A strong and bold coffee made by forcing hot water through finely-ground coffee beans."
  },

  {
    title:"Latte",
    price:"K22",
    category:"Coffee",
    image:"assets/images/Latte.jpg",
    description:"A creamy coffee made with espresso and steamed milk, often topped with foam."
  },

  {
    title:"Cappuccino",
    price:"K25",
    category:"Coffee",
    image:"assets/images/Cappuccino.jpg",
    description:"A classic Italian coffee made with equal parts espresso, steamed milk, and foam."
  }
];

menuItems.forEach((item) => {

    card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
    <img src ="${item.image}" alt =""> 
    
    <div class = "card-content">
        <span class = "tag">${item.category}</span>
        <h2>${item.title}</h2>
        <p>${item.description}</p>
        <button>Order Now</button>
    </div>
     `;
     cardsContainer.append(card);
    
});


