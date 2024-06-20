let main=document.querySelector(".main");
let cur=document.querySelector(".cursor");
let bubble=document.querySelector("#bubble")
let many=document.querySelector(".manybub")
let score_div=document.querySelector(".score");
let bomb=document.querySelector(".bomb");
let bomb2=document.querySelector(".bomb2");
let bomb3=document.querySelector(".bomb3");
let bomb4=document.querySelector(".bomb4");
let bomb5=document.querySelector(".bomb5");



let score =0;
main.addEventListener("mousemove",(cord)=>{
    let X = (cord.x - 1) + "px";
    let Y =cord.y + "px"
    cur.style.top= Y;
    cur.style.left= X;

})

bubble.addEventListener("mouseenter",()=>{
    const pop_audio = new Audio('bubble-pop.mp3');
    pop_audio.play();
    score+=1;
    score_div.innerHTML=`Score:${score}`;
    bubble.style.top=(Math.floor(Math.random()*600)) + "px";
    bubble.style.left=(Math.floor(Math.random()*1400)) + "px";

    bomb.style.display="block"
    bomb.style.top=(Math.floor(Math.random()*600)) + "px";
    bomb.style.left=(Math.floor(Math.random()*1400)) + "px";
    
    if(score>=6){
        bomb2.style.display="block"
        bomb2.style.top=(Math.floor(Math.random()*600)) + "px";
        bomb2.style.left=(Math.floor(Math.random()*1400)) + "px";
    }
    

    if(score>=25){
        bomb3.style.display="block";
        bomb3.style.top=(Math.floor(Math.random()*600)) + "px";
        bomb3.style.left=(Math.floor(Math.random()*1400)) + "px";
    }

    if(score>=40){
        bomb4.style.display="block";
        bomb4.style.top=(Math.floor(Math.random()*600)) + "px";
        bomb4.style.left=(Math.floor(Math.random()*1400)) + "px";
    }
    
    if(score>=55){
        bomb5.style.display="block";
        bomb5.style.top=(Math.floor(Math.random()*600)) + "px";
        bomb5.style.left=(Math.floor(Math.random()*1400)) + "px";
    }
})

const many_int=setInterval(()=>{
    
    many.style.top=(Math.floor(Math.random()*600)) + "px";
    many.style.left=(Math.floor(Math.random()*1400)) + "px";
    many.style.display="block";
    setTimeout(()=>{
        many.style.display="none";
    },2500)

},15000)

many.addEventListener("mouseenter",()=>{
    const pop_audio = new Audio('many.mp3');
    pop_audio.play();
    score+=5;
    score_div.innerHTML=`Score:${score}`;
    many.style.display="none";
})

bomb.addEventListener("mouseenter",()=>{
    const game_over_audio=new Audio('blast.mp3');
    game_over_audio.play();
    score_div.innerHTML=`Game Over!! <p>Final Score:${score}</p>`;

    bomb.style.display="none";
    bomb2.style.display="none";
    bomb3.style.display="none";
    bomb4.style.display="none";
    bomb5.style.display="none";
    bubble.style.display="none";
    clearInterval(many_int);


})

bomb2.addEventListener("mouseenter",()=>{
    const game_over_audio=new Audio('blast.mp3');
    game_over_audio.play();
    score_div.innerHTML=`Game Over!! <p>Final Score:${score}</p>`;

    bomb.style.display="none";
    bomb2.style.display="none";
    bomb3.style.display="none";
    bomb4.style.display="none";
    bomb5.style.display="none";
    bubble.style.display="none";
    clearInterval(many_int);



})

bomb3.addEventListener("mouseenter",()=>{
    const game_over_audio=new Audio('blast.mp3');
    game_over_audio.play();
    score_div.innerHTML=`Game Over!! <p>Final Score:${score}</p>`;

    bomb.style.display="none";
    bomb2.style.display="none";
    bomb3.style.display="none";
    bomb4.style.display="none";
    bomb5.style.display="none";
    bubble.style.display="none";


})
bomb4.addEventListener("mouseenter",()=>{
    const game_over_audio=new Audio('blast.mp3');
    game_over_audio.play();
    score_div.innerHTML=`Game Over!! <p>Final Score:${score}</p>`;

    bomb.style.display="none";
    bomb2.style.display="none";
    bomb3.style.display="none";
    bomb4.style.display="none";
    bomb5.style.display="none";
    bubble.style.display="none";
    clearInterval(many_int);


})
bomb5.addEventListener("mouseenter",()=>{
    const game_over_audio=new Audio('blast.mp3');
    game_over_audio.play();
    score_div.innerHTML=`Game Over!! <p>Final Score:${score}</p>`;

    bomb.style.display="none";
    bomb2.style.display="none";
    bomb3.style.display="none";
    bomb4.style.display="none";
    bomb5.style.display="none";
    bubble.style.display="none";

    clearInterval(many_int);

})




