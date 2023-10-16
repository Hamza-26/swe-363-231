pizzas = 
[
    {
        type: "Pepperoni",
        price: 19,
        toppings: ["Cheese", "Pepperoni", "Tomato Sauce"]
   
    },
    {
        type: "Margherita",
        price: 15,
        toppings: ["Cheese", "Tomato Sauce"]
    },
    {
        type: "BBQ Chicken",
        price: 22,
        toppings: ["Cheese", "BBQ Sauce", "Chicken"]
    },
    {
        type: "Ranch Chicken",
        price: 22,
        toppings: ["Cheese", "Ranch Sauce", "Chicken"]
    }
]




for( pizza of pizzas){
    let div = document.createElement("div")
    div.classList.add("pizza")

    let h2 = document.createElement("h2")
    h2.innerText = pizza.type
    div.appendChild(h2)

    let h4 = document.createElement("h4")
    h4.innerText = "Toppings: "
    div.appendChild(h4)

    let ul = document.createElement("ul")
    for(topping of pizza.toppings){
        let li = document.createElement("li")
        li.innerText = topping
        ul.appendChild(li)
    }
    div.appendChild(ul)
    let p = document.createElement("p")
    p.innerText = "price: "+pizza.price + " SR"
    div.appendChild(p)

    document.querySelector("#pizzas").appendChild(div)
}

