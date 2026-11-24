// let products = [
//     { name: "Mobile", price: 50000 },
//     { name: "Headphones", price: 3000 },
//     { name: "Keyboard", price: 2500 },
//     { name: "Mouse", price: 1500 }
// ]

// let cart = [];

// cart.push(products[0])
// cart.push(products[1])
// cart.push(products[3])
// cart.pop()
// console.log(cart);
// console.log("Total Products:" + cart.length);
// =============================

// cart.forEach((item) => {
//     console.log(item.name + "- Rs." + item.price);
    
// });
// ===========================

// let cartTotal = cart.reduce((total,val)=>{
// return total + val.price
// },0)
// console.log(cartTotal);
// =============================

// cart.splice(1,1)
// console.log(cart);
// =============================

// cart.splice(0,cart.length)
// console.log(cart);

// let find = cart.find((item)=>{
// return item.name === "Mobile"
// })
// console.log(find);


// let some = cart.some((item)=>{
// return item.price > 3000
// })
// console.log(some);


// let every = cart.every((item)=>{
// return item.price > 1000
// })
// console.log(every);

// let sort = products.sort((a,b)=>{
// return a.price-b.price
// })

// console.log(sort);



// let products = [
//     { name: "Mobile", price: 50000, quantity: 2 },
//     { name: "Headphones", price: 3000, quantity: 4 },
//     { name: "Keyboard", price: 2500, quantity: 6 },
//     { name: "Mouse", price: 1500, quantity: 8 }
// ]

// products.forEach((item)=>{
// console.log(item.price*item.quantity);

// })

// let reduce = products.reduce((total,item)=>{

// return total + item.price * item.quantity

// },0)

// console.log(reduce);
