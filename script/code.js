let sorting = document.querySelector("#sort1")
let adding = document.querySelector("#add1")
let clientAnswer = document.querySelector("#I-screen")
let clientOutput = document.querySelector("#list")
let clientList = []
let checkbox = document.querySelector("#completebox")
// let data = [{
//     id: 1,
//     name: clientList[0],
//     createdDate : new Date(),
//     completed: "",
// }]


adding.addEventListener("click", (e)=>{
    e.preventDefault()

    if(clientAnswer.value){
        clientList.push(clientAnswer.value)
        clientList.value = "" 
    } 
    else{
        clientAnswer.style = "outline: 3px solid red"
    }

    // update 
    localStorage.setItem("items", JSON.stringify(clientList)) 
})

adding.addEventListener("click", ()=>{
    clientList = JSON.parse (localStorage.getItem("items"))
    clientList.forEach((items) =>{
        clientOutput.innerHTML +=`
        <li id="list2"><input id="completebox" type="checkbox">${items} <button id="deletebox">x</button></li>`
        
      })
  })

checkbox.addEventListener("click", ()=>{
    checkbox.style= "text-decoration: line-through"
})

//   if (clientList[0]){
//     clientList(data[0].name)
//     data[0].name = clientList
// }


