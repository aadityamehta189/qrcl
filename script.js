const value = window.location.pathname.slice(1);
// console.log(value);
//const value = 2;
passkey = "lbsd502"

//highlight the scanned qr item

//connection of databases
//qr codes fabricated
//button/function to add new item

//learning the right order until sql (even git && css and js with notes -> can skip css though)

let defaultitems = [
    {
        name: "green-polo-tshirt",
        counter: 0,
        maxCounter: 1,
        due: 1
    },
    {
        name: "blue-pyjama",
        counter: 0,
        maxCounter: 3,
        due: 0
    },
    {
        name: "black-polo-tshirt",
        counter: 0,
        maxCounter: 1,
        due: 0
    },
    {
        name: "purple-polo-tshirt",
        counter: 0,
        maxCounter: 1,
        due: 0
    },
    {
        name: "kgp-tshirt",
        counter: 0,
        maxCounter: 1,
        due: 0
    },
];

let session = JSON.parse(localStorage.getItem("session")) ?? 0;
let items = JSON.parse(localStorage.getItem("clothingItems")) ?? defaultitems;

if(session == 1){
    enter(1);
}

function saveItem(){
    localStorage.setItem("clothingItems",JSON.stringify(items));
    localStorage.setItem("session",JSON.stringify(session));
}

function enter(mode){

    let y = document.getElementById("maine")
    let z = document.getElementById("hoste")

    if(mode == 0){
        let x = document.getElementById("pass").value
        if(passkey == x){
            console.log("Welcome Dear User")
            y.classList.add("hidden")
            z.classList.remove("hidden")
            goto();
            scan();

        } else {
            alert("Wrong password")
        }
        console.log(x)
    } else {
        console.log("Welcome Dear User")
        y.classList.add("hidden")
        z.classList.remove("hidden")
        goto();
        scan();
        
    }
}

function goto(){
    let container = document.getElementById("items");
    let i = 0;
    console.log("Session incoming")
    console.log(session)
    if(session == 0){
        if(items[value].due == 0){
            items[value].counter += 1;
        } else {
            alert("The clothing item is dued");
        }
    }
    for(const item of items){
        let card = document.createElement("div");
        card.id = `carded${i}`;
        if(item.due == 1){
            card.innerHTML = `
                <h3>${item.name}</h3>
                <p>${item.counter}/${item.maxCounter}</p>
                <p id="due${i}">It is due</p>
                <button type="button" onclick="plumb(${i})">Plumb</button>
                <button type="button" onclick="rescore(${i})">Reset</button>
                <button type="button" onclick="counter(${i})">Counter</button>
            `;
        } else {
                card.innerHTML = `
                <h3>${item.name}</h3>
                <p>${item.counter}/${item.maxCounter}</p>
                <button type="button" onclick="plumb(${i})">Plumb</button>
                <button type="button" onclick="rescore(${i})">Reset</button>
                <button type="button" onclick="counter(${i})">Counter</button>
            `;
        }
        
        
        card.classList.add("card");
        container.appendChild(card);
        i += 1;
    }
}

function scan(){
    console.log("Value incoming")
    console.log(value)
    

    let x = document.getElementById(`carded${value}`);
    x.classList.add("highlight")

    session = 0;
    saveItem();
}

function plumb(ids){
    if(items[ids].due == 0){
        items[ids].due = 1;
    } else {
        items[ids].due = 0;
    }
    session = 1;
    saveItem();
    location.reload();
}

function rescore(ids){
    console.log("Rescoring")
    console.log(ids)
    items[ids].counter = 0;
    session = 1;
    saveItem();
    location.reload();
}

function counter(ids){
    console.log("Counter = ")
    console.log(items[ids].counter)
    console.log("Session = ")
    console.log(session)
}
