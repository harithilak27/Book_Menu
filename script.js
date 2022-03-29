'use strict';

const menu=[
    {
      id: 1,
      title: "HOLLOW-The Zero Saga ------------- ",
      price:"$15",
      category: "thriller",
      img: "./images/1.jpg",
      desc: `Two lives cross, both fighting for survival. Both desperate to save their race from extinction. Zero won't stop until she brings her enemies to their knees. But first she must keep herself from falling for Ronan.This book is intended for mature audiences and contains strong language and graphic violence`,
    },
    {
        id: 2,
        title: "THE YOUNG LOVE ------------------ ",
        price:"$15",
        category: "love",
        img: "./images/2.jpg",
        desc: `Two lives cross, both fighting for survival. Both desperate to save their race from extinction. Zero won't stop until she brings her enemies to their knees. But first she must keep herself from falling for Ronan.This book is intended for mature audiences and contains strong language and graphic violence`,
    },
    {
        id: 3,
        title: "THE GAME OF THRONES ------------- ",
        price:"$15",
        category: "history",
        img: "./images/3.jpg",
        desc: `Two lives cross, both fighting for survival. Both desperate to save their race from extinction. Zero won't stop until she brings her enemies to their knees. But first she must keep herself from falling for Ronan.This book is intended for mature audiences and contains strong language and graphic violence`,
    },
    {
        id: 4,
        title: "THE BOOK THIEF ------------------ ",
        price:"$15",
        category: "thriller",
        img: "./images/4.jpg",
        desc: `Two lives cross, both fighting for survival. Both desperate to save their race from extinction. Zero won't stop until she brings her enemies to their knees. But first she must keep herself from falling for Ronan.This book is intended for mature audiences and contains strong language and graphic violence`,
    },
    {
        id: 5,
        title: "DAY ZER0 ------------------------  ",
        price:"$15",
        category: "thriller",
        img: "./images/5.jpg",
        desc: `In this harrowing apocalyptic adventure—from the author of the critically acclaimed Sea of Rust—noted novelist and co-screenwriter of Marvel’s Doctor Strange C. Robert Cargill explores the fight for purpose and agency between humans and robots in a crumbling world.`,
    },
    {
        id: 6,
        title: "LEECHILD 61 HOURS --------------- ",
        price:"$15",
        category: "thriller",
        img: "./images/6.jpg",
        desc: `Two lives cross, both fighting for survival. Both desperate to save their race from extinction. Zero won't stop until she brings her enemies to their knees. But first she must keep herself from falling for Ronan.This book is intended for mature audiences and contains strong language and graphic violence`,
    },
    {
        id: 7,
        title: "DARK HOPE ----------------------- ",
        price:"$15",
        category: "thriller",
        img: "./images/7.jpg",
        desc: `After five years of working for the Devil, Claire Cooper believes she lives an otherwise normal life. Until she finds herself in jeopardy for a murder she did not commit. Desperate to save her life and soul, she enters Purgatory, but runs afoul of the Devil's sister, Pagan Queen Mab. Mab has her own agenda and uses Claire to get even with the Devil. Claire learns each ruler is in a race to discover "the girl" in the prophecy to fix time.`,
    },
    {
        id: 8,
        title: "THE HEART OF THE DEVIL ---------- ",
        price:"$15",
        category: "thriller",
        img: "./images/8.jpg",
        desc: `Two lives cross, both fighting for survival. Both desperate to save their race from extinction. Zero won't stop until she brings her enemies to their knees. But first she must keep herself from falling for Ronan.This book is intended for mature audiences and contains strong language and graphic violence`,
    },
    {
        id: 9,
        title: "WAR AND PEACE      ---------------",
        price:"$15",
        category: "history",
        img: "./images/9.jpg",
        desc: `In Russia's struggle with Napoleon, Tolstoy saw a tragedy that involved all mankind. Greater than a historical chronicle, War and Peace is an affirmation of life itself, 'a complete picture', as a contemporary reviewer put it, 'of everything in which people find their happiness and greatness, their grief and humiliation'.Tolstoy's important essay 'Some Words about War and Peace'e`,
    },
    {
        id: 10,
        title: "MARK GREANEY  ---------------------",
        price:"$15",
        category: "thriller",
        img: "./images/10.jpg",
        desc: `Two lives cross, both fighting for survival. Both desperate to save their race from extinction. Zero won't stop until she brings her enemies to their knees. But first she must keep herself from falling for Ronan.This book is intended for mature audiences and contains strong language and graphic violence`,
    },
]

const sectionCenter = document.querySelector('.section-items');
const allBtn = document.querySelectorAll('.btn');

//load items
// window.addEventListener('DOMContentLoaded',function () {
//   displayMenuItem(menu);

// });

//buttons
allBtn.forEach(function (btn) {
    btn.addEventListener('click', function (e){
        const category = e.currentTarget.dataset.id;
        console.log(category);
    const menuCategory = menu.filter(function (menuItem){
        if(menuItem.category === category){
            return menuItem;
        }
    });
    if(category === 'all') {
      displayMenuItem(menu);
    }else {
        displayMenuItem(menuCategory);
    }
   //console.log(category);
   //console.log(menuCategory);
});
});

//display all categories
function displayMenuItem(MenuItems){
let displayMenu = "";
MenuItems.map((item) => {

   displayMenu +=`<article class="book-10" id="book-1">
           <img src=${item.img}>
           <div class="info">
           <header>
           <h4>${item.title}<span>  ${item.price}</span></h4>
           <h4 class="underline"></h4>
           </header>
           <p>
            ${item.desc}
           </p>
           </div>
          </article>`;
})
sectionCenter.innerHTML = displayMenu
}


displayMenuItem(menu);
