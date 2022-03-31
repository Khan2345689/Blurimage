


function handleClick(e){
    let x=e.innerText
    console.log(`I have clicked ${x}`)
    document.getElementById("inputField").value+=x

}
function handleSubmit(){
    console.log("dfghj")
    let x=document.getElementById("inputField").value
    let ans=eval(x)
    document.getElementById("inputField").value=ans
}

function handleClear(){
    
    document.getElementById("inputField").value=""
    
}
