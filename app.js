const menu = [
    {
      Id: 1,
      tittle: "buttermilk pancakes",
      category: "breakfast",
      price: 15.99,
      img: "./assets/breakfast3.jpg",
      desc: `But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain `,
    },
    {
      Id: 2,
      tittle: "chiken",
      category: "lunch",
      price: 13.99,
      img: "assets/lunch1.jpg",
      desc: `We like to travel and usually go out for dinner to get to know the regional specialities. Menulist supports us optimally `,
    },
    {
      Id: 3,
      tittle: "godzilla milkshake",
      category: "shake",
      price: 6.99,
      img: "assets/shake1.jpg",
      desc: `because wherever we are at the moment, restaurants in the vicinity are suggested to us `,
    },
    {
      Id: 4,
      tittle: "egg attack",
      category: "breakfast",
      price: 22.99,
      img: "assets/breakfast2.jpg",
      desc: `No matter whether we are in the USA, Hong Kong or back in United States. We also like the community. `,
    },
    {
      Id: 5,
      tittle: "dinner duble",
      category: "dinner",
      price: 11.99,
      img: "assets/dinner2.jpg",
      desc: `We also like the community. We think that we have already helped many people with our reviews. `,
    },
    {
      Id: 6,
      tittle: "country lunch",
      category: "lunch",
      price: 18.99,
      img: "assets/lunch3.jpg",
      desc: `But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain `,
    },
    {
      Id: 7,
      tittle: "milk shake",
      category: "shake",
      price: 8.99,
      img: "assets/shake3.jpg",
      desc: `We serve quality-conscious delicacies from international and mediterranean cuisine in a stylish ambience. `,
    },
    {
      Id: 8,
      tittle: "benana shake",
      category: "shake",
      price: 2.99,
      img: "assets/shake2.jpg",
      desc: ` As experienced restaurateurs, we always focus on first-class products. `,
    },
    {
      Id: 9,
      tittle: "nodel",
      category: "lunch",
      price: 21.99,
      img: "assets/lunch2.jpg",
      desc: `Menulist convinced us with its perfect service. You can immediately see that this website was created  `,
    },
    {
      Id: 10,
      tittle: "vegtables",
      category: "breakfast",
      price: 10.99,
      img: "assets/breakfast1.jpg",
      desc: `the highest quality standards. We are happy to work with such a company. `,
    },
  ];
  const setActiveClass = (button) => {
    if (button) {
      document.querySelectorAll(".btn-category").forEach((b) => {
        b.classList.remove("active-btn");
      });
  
      button.classList.add("active-btn");
    }
  };
  
  const addMenulist = (itemList = []) => {
    document.getElementById("menu-list").innerHTML = itemList
      .map(
        (food) => `     
        <div class="food-item">
        <img src="${food.img}" alt="${food.tittle}">
        <div class="food-desc">
          <div class="food-detail">
            <h3>${food.tittle}</h3>
            <p class="price">$${food.price}</p>
          </div>
          <p class="food-more">${food.desc}</p>
        </div>
    
      </div>
    </div>
      `
      )
      .join("");
  };
  const addCategoryButtons = () => {
    const categoryList = menu.reduce(
      (categories, item) => {
        if (item && item.category && !categories.includes(item.category)) {
          categories.push(item.category);
        }
        return categories;
      },
      ["all"]
    );
  
    const buttons = categoryList.map(
      (cat) =>
        `<button class="btn btn-category ${
          cat === "all" ? "active-btn" : ""
        }" category-id="${cat}">${cat}</button>`
    );
  
    if (buttons.length > 0) {
      document.getElementById("menu-categories").innerHTML = buttons.join("");
    }
    document.querySelectorAll(".btn-category").forEach((item) => {
      const categoryType = item.getAttribute("category-id");
  
      item.addEventListener("click", function () {
        setActiveClass(item);
        item.classList.add("active-btn");
        if (categoryType === "all") {
          addMenulist(menu);
          return;
        }
        const filterList = menu.filter((item) => item.category === categoryType);
        addMenulist(filterList);
      });
    });
  };
  
  document.addEventListener("DOMContentLoaded", function () {
    addCategoryButtons();
    addMenulist(menu);
  });
  