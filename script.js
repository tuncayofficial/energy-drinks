function direct(){
    return window.location.href = "https://az.wikipedia.org/wiki/Energetik_i%C3%A7ki"
}

function check(){
    let checkbox = document.querySelector(".check")
    let alert = document.querySelector(".alert")

    if(checkbox.checked !== true){
        alert.style.display = "block";
    } else {
        return window.location.href = "https://github.com/tuncayofficial/energy-drinks"
    }
}