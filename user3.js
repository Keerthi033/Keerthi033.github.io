let kohlioldinfo = {
    imgurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_Yv7QhTpDEWS9Fn-oZ5b3oJDc6VQOjh5vPg&usqp=CAU",
    name:"virat kohli",
    description: "Captain of Indian Cricket Team"
}

let displayobject;
let getRandomUser = function(){
    fetch("https://randomuser.me/api")
    .then(response=>response.json())
    .then(data=>{
        displayobject.name = data.results[0].name.first + " " + data.results[0].name.last
        displayobject.imageurl = data.results[0].picture.large
        displayobject.description = data.results[0].gender        
    document.getElementById("il").src=displayobject.imgurl;
    document.getElementById("n").innerHTML=displayobject.name;
    document.getElementById("d").innerHTML=displayobject.description;
    })

}
