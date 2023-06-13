let kohlioldinfo = {
    imgurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_Yv7QhTpDEWS9Fn-oZ5b3oJDc6VQOjh5vPg&usqp=CAU",
    name:"virat kohli",
    description: "Captain of Indian Cricket Team"
}
let kohlinewinfo = {
    imgurl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5Xd1MjNmBYBFy3lmxS5kapwbiJf0Q5MSCIg&usqp=CAU",
    name:"kohli",
    description: "Kohli in ICC Tournament"

}
let iskohliold=true;
let displayobject;
let flipdata = function(){
    if (iskohliold==true){
        displayobject=kohlinewinfo;
        iskohliold=false;
    }
    else{
        displayobject=kohlioldinfo;
        iskohliold=true;
    }

    document.getElementById("il").src=displayobject.imgurl;
    document.getElementById("n").innerHTML=displayobject.name;
    document.getElementById("d").innerHTML=displayobject.description;
}
