const container = document.getElementsByClassName('itemList'),
searchBox = document.getElementById('searchBox'),
searchInput = document.getElementById('searchInput'),
dateButton = document.getElementById('dateButton'),
dateRangeInput = document.getElementById('reportrange');
import { startDateValue, endDateValue} from "./dateRangePicker.js"



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



dateButton.addEventListener("click", () =>{    
    for (let i = 0; i < container.length; i++) { 
    let dateItem = new Date(container[i].querySelector('.date').innerHTML);

        if (dateItem >= startDateValue && dateItem <= endDateValue ) {

            container[i].style.display="list-item";
            
        }
        else {
            container[i].style.display="none";
            console.log('no listar')
            console.log(startDateValue, endDateValue )

            
        }
    
    
    }
    })