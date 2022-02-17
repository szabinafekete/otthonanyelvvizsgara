

document.getElementById('facebook').addEventListener("mouseover", ()=>{
    document.getElementById('change').src = "../img/facebook2.svg";
})
document.getElementById('facebook').addEventListener("mouseout", ()=>{
    document.getElementById('change').src = "../img/facebook.svg";
})
console.log("ok")


function zIndex(){
    console.log("katt");
    document.getElementById("zIndex").style.zIndex = "-1";
    window.onclick = ()=> document.getElementById("zIndex").style.zIndex = "1";
}
    

