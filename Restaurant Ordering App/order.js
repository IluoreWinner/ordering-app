
import { v4 as uuidv4 } from 'https://jspm.dev/uuid';


const menuArray = [
    {
        name: "Pizza",
        ingredients: ["pepperoni", "mushrom", "mozarella"],
        id: 0,
        price: 14,
        uuid: uuidv4(),
        display: "Images/pizza.jpeg"
      
    },
    {
        name: "Hamburger",
        ingredients: ["beef", "cheese", "lettuce"],
        price: 12,
        display: "Images/burger.jpeg",
        uuid: uuidv4(),
        id: 1
    },
        {
        name: "Beer",
        ingredients: ["grain, hops, yeast, water"],
        price: 12,
        display: "Images/beer.jpeg",
        uuid: uuidv4(),
        id: 2
    }
]


document.addEventListener('click', function(e){
     handleAddClick(e.target.dataset.add)
 
 })

function handleAddClick(orderId) {
const targetAddOrder = menuArray.filter(function(menu){return menu.uuid === orderId})[0]
let orderArray = ''
orderArray += `<div> <h1> Your order </h1>
                    <h2> ${targetAddOrder.name} </h2>
                    <h2> ${targetAddOrder.price}</h2>
 </div>`   

document.getElementById("pop-up").innerHTML= orderArray
 
 render()
console.log(targetAddOrder)
 }

function getFeedHtml(){
    let feedHtml=''
   
    menuArray.forEach(function(menu){
       
     feedHtml += ` <div class="menu-item"> 
     <img src= ${menu.display} class="display"> 
     <div class= "details">
     <h2 class="name"> ${menu.name}</h2>
     <p class="ingredients"> ${menu.ingredients} </p>
     <h2 class= "price"> ${menu.price} </h2>
     </div>
     <span class="icon">
     <i class= "fa-solid fa-circle-plus" data-add="${menu.uuid}"></i>
     </span>
    </div>
    `
    

    })
    return feedHtml
}


function render(){
    document.getElementById("feed").innerHTML= getFeedHtml()
   
}
render()

