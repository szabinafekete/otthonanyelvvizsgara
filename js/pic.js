

//kelhet------
/*arr = []

function removeDuplicates(data){
    return[...new Set(data)]
}

for(let i=0;i<pictures.length;i++){
    arr.push(pictures[i].theme)
    arrTheme = removeDuplicates(arr)
}
randomTheme = []

for (let i = 0; i < 3; i++) {
    random = arrTheme[Math.floor(Math.random()*arrTheme.length)]
    randomTheme.push(random)
}
while (randomTheme[0] === randomTheme[1]){
    delete randomTheme[1]
    randomTheme[1] = arrTheme[Math.floor(Math.random()*arrTheme.length)]
}
while (randomTheme[1] === randomTheme[2] || randomTheme[0] === randomTheme[2]){
    delete randomTheme[2]
    randomTheme[2] = arrTheme[Math.floor(Math.random()*arrTheme.length)]
}

console.log(randomTheme)*/
//kelhet-------



//kellhet ----------------------
/*for (let i = 0; i < 3; i++) {
    let img = document.createElement("img")
    img.setAttribute("alt", "random kép")
    img.setAttribute("class", "img-fluid col-12 col-sm-6 col-md-4")
    img.setAttribute("max-width", "500")
    Arr =[]
    pictures.filter(o => Arr.push(o.src))
    let i = Math.floor(Math.random() * pictures.length);
    let src = Arr[i]*/

    /*switch (i){
        default:
             img.setAttribute("src", src);
             break;*/
         
 /*}
    document.getElementById("pic").appendChild(img)
}*/
//kellhet ----------------------


const family = [
    "../img/familie/family-1.jpg",
    "../img/familie/family-2.jpg",
    "../img/familie/family-3.jpg",
]
    
const home = [
    "../img/zuHause/home-1.jpg",
    "../img/zuHause/home-2.jpg",
    "../img/zuHause/home-3.jpg",
]
    
const work = [
    "../img/arbeit/work-1.jpg",
    "../img/arbeit/work-2.jpg",
    "../img/arbeit/work-3.jpg",
]

const learning = [
    "../img/lernen/learning-1.jpg",
    "../img/lernen/learning-2.jpg",
    "../img/lernen/learning-3.jpg",
]

Themes = [family, home, work, learning]

randomTheme = []

for (let i = 0; i < 3; i++) {
    random = Themes[Math.floor(Math.random()*Themes.length)]
    randomTheme.push(random)
}
while (randomTheme[0] === randomTheme[1]){
    delete randomTheme[1]
    randomTheme[1] = Themes[Math.floor(Math.random()*Themes.length)]
}
while (randomTheme[1] === randomTheme[2] || randomTheme[0] === randomTheme[2]){
    delete randomTheme[2]
    randomTheme[2] = Themes[Math.floor(Math.random()*Themes.length)]
}

let theme1 = randomTheme[0]
let pic1 = theme1[Math.floor(Math.random()*theme1.length)]
console.log(pic1)
let theme2 = randomTheme[1]
let pic2 = theme2[Math.floor(Math.random()*theme2.length)]
console.log(pic2)
let theme3 = randomTheme[2]
let pic3 = theme3[Math.floor(Math.random()*theme3.length)]
console.log(pic3)

picture = [pic1, pic2, pic3]


for (let i = 0; i < 3; i++){
    var img = document.createElement("img")
    img.setAttribute("alt", "random kép")
    img.setAttribute("class", "img-fluid col-12 col-sm-6 col-md-4")
    img.setAttribute("max-width", "500")
    let src = picture[i]
    img.setAttribute("src", src)
    document.getElementById("pic").appendChild(img)
}


