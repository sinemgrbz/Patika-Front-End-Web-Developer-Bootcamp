const menu = [
  {
    id: 1,
    title: "Tteokbokki",
    category: "Korea",
    price: 10.99,
    img:
      "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
    desc: `Spicy rice cakes, serving with fish cake.`,
  },
  {
    id: 2,
    title: "Chicken Ramen",
    category: "Japan",
    price: 7.99,
    img:
      "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
  },
  {
    id: 3,
    title: "Bibimbap",
    category: "Korea",
    price: 8.99,
    img:
      "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
    desc: `Boiling vegetables, serving with special hot sauce`,
  },
  // {
  //   id: 4,
  //   title: "Dan Dan Mian",
  //   category: "China",
  //   price: 5.99,
  //   img:
  //     "https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg",
  //   desc: `Dan dan noodle, serving with green onion `,
  // },
  {
    id: 5,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    img:
      "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
    desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
    id: 6,
    title: "Onigiri",
    category: "Japan",
    price: 9.99,
    img:
      "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
    desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
    id: 7,
    title: "Jajangmyeon",
    category: "Korea",
    price: 15.99,
    img:
      "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: 8,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: 12.99,
    img:
      "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 9,
    title: "Doroyaki",
    category: "Japan",
    price: 3.99,
    img:
      "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
];

// html sayfası acildiginde menunun ve butonların eklenmesi icin fonk cagrildi
window.addEventListener('DOMContentLoaded', function () {
  createCard(menu);
  menuButtons();
})

// html elemanları seçildi
const section = document.querySelector(".menu")
const buttons = document.querySelector(".btn-container")
const menuItem = document.querySelector(".section-center")

// createCard fonsksiyonu ile verilen ogelerin içindeki ogeleri map yontemi uygulanarak hepsi icin bir article html olusturuldu
function createCard(menuCard) { 
  let newMenu = menuCard.map((item) => {
      return  `<article class="menu-items">
              <img src="${item.img}" alt="${item.title}" class="photo" />
              <div class="menu-info" >
              <div class="menu-title"> 
              <h4>${item.title}</h4>
              <span class="price">${item.price}</h4>
              </div>
              <p class="menu-text">${item.desc}</p>
              </div>
              </article>`;
    }
  )
  // join ile oluşturulan article birlestirildi
  newMenu = newMenu.join("");
  menuItem.innerHTML = newMenu;  
}

// menu deki kategoriler ayristirildi
function menuButtons() {

  const categories = menu.reduce(
    function (values,item) {
      if(!values.includes(item.category)){
        values.push(item.category);
      }
      return values;
    },
    ["all"] // default tanım olarak tum kategoriler alinir. all butonu icin
  );

  // reduce ile elde edilen kategoriler icin buton etiketi html e eklendi
  const categoryBtn = categories.map(function(category){
    return `<button class="filter btn-item" type="button" data-id=${category}>${category}</button>`
  }).join("");
  buttons.innerHTML=categoryBtn;

  // butonlara click event eklenerek menu kategorilerine gore sayfada filtrelendi
  const filterBtn= document.querySelectorAll(".filter")

  filterBtn.forEach(function (btn) {
    btn.addEventListener("click", function(e){
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter(function (menuItem) {
          if(menuItem.category === category){
              return menuItem;
          }
      });
      if(category==="all"){
        createCard(menu);
      }else {
        createCard(menuCategory);
      }
    });
    
  })
  
}

