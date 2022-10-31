

var input = document.querySelector('#text-host')
input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") { 
        event.preventDefault();
        var itemName = document.querySelector('#text-name').value;
        var itemHost = document.querySelector('#text-host').value;
        if(itemName != '') {
            var itemsStorage = localStorage.getItem('to-block-items');
            var itemsArr = JSON.parse(itemsStorage) || [];
            console.log(itemsArr);
            itemsArr.push({"item": itemName, "host": itemHost, "status": 0});
            saveItems(itemsArr);
            fetchItems();
            document.querySelector('#text-name').value='';
            document.querySelector('#text-host').value='';
            // document.querySelector('.new-item').style.display='none';
        }
    }
});

function fetchItems(){

    const itemsList = document.querySelector('ul.to-block-items');
    itemsList.innerHTML = '';
    var newItemHTML = '';

    try{
        var itemsStorage = localStorage.getItem('to-block-items');
        var itemsArr = JSON.parse(itemsStorage);
        for (var i = 0; i < itemsArr.length; i++) {
            var status = '';
            if(itemsArr[i].status == 1) {
                status = 'class="done"';
            } else {
                status = 'class="pending"';
            }

            newItemHTML += `<li data-itemindex="${i}" ${status}>
            <span class="item">${itemsArr[i].item}</span>
            <span class="host">${itemsArr[i].host}</span>
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

function itemComplete(index){

    var itemsStorage = localStorage.getItem('to-block-items');
    var itemsArr = JSON.parse(itemsStorage);
    console.log(itemsArr);

    if (itemsArr[index].status == 0) {
        itemsArr[index].status = 1;
        saveItems(itemsArr);
        document.querySelector('ul.to-block-items li[data-itemindex="'+index+'"]').className='done';
    } else {
        itemsArr[index].status = 0;
        saveItems(itemsArr);
        document.querySelector('ul.to-block-items li[data-itemindex="'+index+'"]').className='pending';
    }
}

function itemDelete(index){
    var itemsStorage = localStorage.getItem('to-block-items');
    var itemsArr = JSON.parse(itemsStorage);

    itemsArr.splice(index, 1);
    saveItems(itemsArr);
    document.querySelector('ul.to-block-items li[data-itemindex="'+index+'"]').remove();
}

function saveVisible(obj){
    var string = JSON.stringify(obj);
    localStorage.setItem('visible-items', string);
}

function saveItems(obj){
    var string = JSON.stringify(obj);
    localStorage.setItem('to-block-items', string);
}

fetchItems();
