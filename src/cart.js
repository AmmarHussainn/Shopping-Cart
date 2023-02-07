let basket = JSON.parse(localStorage.getItem('data')) || [] 
let label = document.getElementById('label')
let ShoppingCart = document.getElementById('shopping-cart')
let calculation = ()=>{
    let cartIcon = document.getElementById('cartAmount')
    cartIcon.innerHTML = basket.map((x)=>x.item).reduce((x,y)=>x+y,0)
 }
 calculation();
 let generateShopItems =()=>{
 if (basket.length != 0) {
   return (ShoppingCart.innerHTML = basket.map((x)=> {
      return`
      <div class="cart-item"> ${x.item}Helly</div>
      
      `
   }
   
   
   ))
    console.log("Basket is not empty")
 } else {
    ShoppingCart.innerHTML = ``
    label.innerHTML = `
    <h2>Cart is Empty</h2>
   
    <button class="HomeBtn" href="./index.html">Back to Home</button>
    `;
 }
 }
 generateShopItems()