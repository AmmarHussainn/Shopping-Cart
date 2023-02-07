let shop = document.getElementById('shop');

let basket = JSON.parse(localStorage.getItem("data")) || []
console.log(shop)
let generateShop =()=>{
 return (shop.innerHTML = ShopItemsData.map((x)=>{
    let {id,name,price,desc,img} = x
    let search = basket.find((x)=> x.id == id) || []
    return(
        `
        <div class="item" id=product-id-${id}>
        <img width="220" src=${img} />
        <div class="details">
            <h3>${name}</h3>
            <p>${desc}
            </p>
            <div class="price-quantity">
                <h2>$ ${price}</h2>
                <div class="buttons"> 
                    <i onclick="decremenet(${id})" class="bi bi-dash-lg"></i>
                    <div id=${id} class="quantity" >${search.item === undefined ? 0 : search.item}</div>
                    <i onclick = "increment(${id})" class="bi bi-plus-lg"></i>
                </div>
            </div>
        </div>
        </div>
        `
    )
 }).join(""))
}
generateShop()
let increment =(id)=>{
    let selecteditem = id
 
  let search = basket.find((datx)=>{
   return datx.id === selecteditem.id 
    
 
  })
  
  if (search ===  undefined){
   
    basket.push({
        id : selecteditem.id,
        item  : 1

      })
      
  }
 
  else{
    search.item +=1;    
  
  }
 
  update(selecteditem.id)
  localStorage.setItem('data',JSON.stringify(basket))
}
let decremenet = (id)=>{
    let selectedItem = id;
    let search = basket.find((x) => x.id === selectedItem.id);
  if (search === undefined) return;
   else if (search.item === 0) return;
     else {
      search.item -= 1;
    }
    update(selectedItem.id)
 basket= basket.filter((x)=>x.item !==0) ;
 
   
    localStorage.setItem('data',JSON.stringify(basket))
}
let update = (id)=>{
   let search = basket.find((x)=>x.id === id)
   console.log(search.item)
   document.getElementById(id).innerHTML =search.item
   calculation()
}
let calculation = ()=>{
   let cartIcon = document.getElementById('cartAmount')
   cartIcon.innerHTML = basket.map((x)=>x.item).reduce((x,y)=>x+y,0)
}
calculation()