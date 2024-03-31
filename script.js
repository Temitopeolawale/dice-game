let randomNumber1 = Math.floor(Math.random()*6)+1
let randomNumber2 = Math.floor(Math.random()*6)+1
let randomImage="dice"+randomNumber1+".png"
let randomImage2="dice"+randomNumber2+".png"
let images="images/"+ randomImage
let images2="images/"+ randomImage2

image1=document.querySelectorAll("img")[0] 
image1.setAttribute("src",images)
image2=document.querySelectorAll('img')[1]
image2.setAttribute("src",images2)

console.log(randomNumber1)

if(randomNumber1>randomNumber2){
    document.querySelector('h1').textContent="Player 1 wins😇"
}
else if(randomNumber2>randomNumber1){
    document.querySelector("h1").textContent="player 2 wins😇"
}else{
    document.querySelector("h1").textContent="Draw🥲"
}