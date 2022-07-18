const container = document.getElementsByClassName('itemList'),
searchBox = document.getElementById('searchBox'),
searchInput = document.getElementById('searchInput');



searchInput.addEventListener("keyup", () =>{
console.log(searchInput.value)

for (let i = 0; i < container.length; i++) { 
    if (!container[i].innerHTML.toLowerCase().includes(searchInput.value)) {
        container[i].style.display="none";
    }
    else {
        container[i].style.display="list-item";                 
    }


}
})