// //This the real python dictionary
// let object = {
//     name:{skibidi:{Hello:{JJ:"Steve"}}},
//     age:23,
//     gender:"Skibidi",
//     sayHello: function(){
//         console.log('Hello'+this.gender);
//     }
// }
// console.log(object.sayHello())
function btn1(){
    document.getElementById('title').style.color = 'yellow'
    document.getElementById('title').style.textShadow = '2px 2px 0 #000'
    document.getElementById('title').innerHTML = 'Kagamine Len'
}
function btn2(){
    document.getElementById('title').style.color = 'blue'
    document.getElementById('title').innerHTML = 'KAITO'
}
function btn3(){
    document.getElementById('title').style.color = 'orange'
    document.getElementById('title').innerHTML = 'Kagamine Rin'
}
function hiddens(){
    if(document.getElementById('title').classList.contains('hidden')){
        document.getElementById('title').classList.remove('hidden')
    }
    else{
        document.getElementById('title').classList.add('hidden')
    }
}