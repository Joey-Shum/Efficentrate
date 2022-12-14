
document.querySelector('.new-item input[type=date]').valueAsDate = new Date();

document.querySelector('.create-to-do').addEventListener('click', function(){
    document.querySelector('.new-item').style.display='block';
});


var input = document.querySelector('.new-item input[type=text]')
input.addEventListener("keypress", function(event) {  
    if (event.key === "Enter") { 
        event.preventDefault();        
        var itemName = document.querySelector('.new-item input[type=text]').value;
        var itemDate = document.querySelector('.new-item input[type=date]').value;
        if(itemName != '') {
            var itemsStorage = localStorage.getItem('to-do-items');
            var itemsArr = JSON.parse(itemsStorage) || [];
            console.log(itemsArr);
            console.log(itemDate);
            itemsArr.push({"item": itemName, "date": itemDate, "status": 0});
            saveItems(itemsArr);
            fetchItems();
            document.querySelector('.new-item input[type=text]').value='';
            // document.querySelector('.new-item').style.display='none';
        }
    }});

function fetchItems(){

    const itemsList = document.querySelector('ul.to-do-items');
    itemsList.innerHTML = '';
    var newItemHTML = '';

    try{
        var itemsStorage = localStorage.getItem('to-do-items');
        var itemsArr = JSON.parse(itemsStorage);
        console.log(itemsArr);
        for (var i = 0; i < itemsArr.length; i++) {
            var status = '';
            if(itemsArr[i].status == 1) {
                status = 'class="done"';
            } else {
                status = 'class="pending"';
            }

            newItemHTML += `<li data-itemindex="${i}" ${status}>
            <span class="item">${itemsArr[i].item}</span> 
            <span class="date">${itemsArr[i].date}</span> 
            <div><span class="itemComplete">✅ </span> <span class="itemDelete">🗑️ </span></div>
            </li>`;
            
        }
        itemsList.innerHTML = newItemHTML;

        var itemsListUL = document.querySelectorAll('ul li');
        for (var i = 0; i < itemsListUL.length; i++) {
            itemsListUL[i].querySelector('.itemComplete').addEventListener('click', function(){
                var index = this.parentNode.parentNode.dataset.itemindex;
                itemComplete(index);
            });
            itemsListUL[i].querySelector('.itemDelete').addEventListener('click', function(){
                var index = this.parentNode.parentNode.dataset.itemindex;
                itemDelete(index);
            });
        }
    } catch(e) {
        //create a default item list
    }
}

document.querySelector('.sort-by-date').addEventListener('click', function(){
    var itemsStorage = localStorage.getItem('to-do-items');
    var itemsArr = JSON.parse(itemsStorage);
    console.log(itemsArr);
    console.log(itemsArr[0].date);
    x = [...Array(itemsArr.length).keys()];
    console.log(x);
    console.log("abc");
    y = itemsArr.sort((a,b) => (Date(a.date) < Date(b.date)) ? 1 : 0);
    console.log(y);
    // console.log(itemsArr.sort((a,b) => a.date >= b.date));
    
});

document.querySelector('.hide-done').addEventListener('click', function(){
    var itemsStorage = localStorage.getItem('to-do-items');
    var itemsArr = JSON.parse(itemsStorage);
    console.log(itemsArr);
    itemsArr = itemsArr.filter(a => a.status != 1);
    console.log(itemsArr);
    // console.log(itemsArr.sort((a,b) => a.date >= b.date));
    saveVisible(itemsArr);
});

function itemComplete(index){

    var itemsStorage = localStorage.getItem('to-do-items');
    var itemsArr = JSON.parse(itemsStorage);
    console.log(itemsArr);

    if (itemsArr[index].status == 0) {
        itemsArr[index].status = 1;
        saveItems(itemsArr);
        document.querySelector('ul.to-do-items li[data-itemindex="'+index+'"]').className='done';
    } else {
        itemsArr[index].status = 0;
        saveItems(itemsArr);
        document.querySelector('ul.to-do-items li[data-itemindex="'+index+'"]').className='pending';
    }
}

function itemDelete(index){
    var itemsStorage = localStorage.getItem('to-do-items');
    var itemsArr = JSON.parse(itemsStorage);

    itemsArr.splice(index, 1);
    saveItems(itemsArr);
    document.querySelector('ul.to-do-items li[data-itemindex="'+index+'"]').remove();
}

function saveVisible(obj){
    var string = JSON.stringify(obj);
    localStorage.setItem('visible-items', string);
}

function saveItems(obj){
    var string = JSON.stringify(obj);
    localStorage.setItem('to-do-items', string);
}

fetchItems();