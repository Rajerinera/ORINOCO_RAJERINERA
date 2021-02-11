
// créer la selection de produit dans la page de l'index
function itemsShow(items) {
    let ul = document.querySelector('#teddies-items-1');

    for (let i = 0; i < items.length; i++) {
        let li = document.createElement('li');
        let a = document.createElement('a');
        a.href = "produit.html?id=" + items[i]._id

        li.className = 'li_items';
        let items_name = document.createElement('h4');
        let items_price = document.createElement('p');
        let items_img = document.createElement('img');

        items_name.textContent = items[i].name; //nom du produit
        items_price.textContent = 'Prix: ' + items[i].price + ' Francs' //prix du produit
        items_img.src = items[i].imageUrl; //image du produit

        li.appendChild(a);
        a.appendChild(items_name);
        a.appendChild(items_price);
        a.appendChild(items_img);
        ul.appendChild(li);
    }
}

// l'ajax pour obtenir des teddies
ajaxGet("http://localhost:3000/api/teddies")
    .then(function (teddies) {
        itemsShow(teddies);
    });








