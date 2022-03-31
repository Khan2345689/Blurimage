let loadText=
document.getElementById("loading")
let bg=
document.getElementById("bg")
let load=0

let initial=setInterval(blurryLoading,30)



function blurryLoading(){
    load+=1
    console.log(load)
    if(load>99){
        clearInterval(initial)
    }
    loadText.innerText=load
     loadText.style.opacity=scale(load,0,100,1,0);

     bg.style.filter=`blur(${scale(load,0,100,30,0)}px)`
}

const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
}