let productSelected;
const selectQuantite = document.getElementById('selectQuantite');

// récupérer les données de chaque produit
const idProduit = location.search.substring(4);

// Pour faire apparaitre un produit en particulier sur la page HTML (Description du produit, prix, nom et couleur)
function detailProduct(produitChoose) {

    document.getElementById("imgProduct").setAttribute("src", produitChoose.imageUrl);
    document.getElementById("nameProduct").innerHTML = produitChoose.name;
    document.getElementById("descriptionProduct").innerHTML = produitChoose.description;
    document.getElementById("priceProduct").innerHTML = produitChoose.price + " Francs";

    let colors = produitChoose.colors
    for (let i = 0; i < colors.length; i++) {
        const selectColor = document.getElementById('selectColor');
        const optionColor = document.createElement('option');
        optionColor.value = colors[i];
        optionColor.innerText = colors[i];
        selectColor.appendChild(optionColor);
    }
}

// Mettre en place le nombre de produit selectionné
function value() { 
    for (let i = 1; i <= 20; i++) {
        const option = document.createElement('option');
        option.value = i
        option.innerText = i
        selectQuantite.appendChild(option)
    }
};
value();

// L'évènement lorsque l'on appui sur le bouton panier
let buy = document.getElementById("panier");
buy.addEventListener("click", function (){
    alert("article ajouté");
    let panierStorage = localStorage.getItem("adrienR_orinoco_p5")
    const teddie = {
        _id: productSelected._id,
        name: productSelected.name,
        price: productSelected.price,
        quantity: selectQuantite.value
    }

    if(!panierStorage){
        panierStorage = []
        
    }else{
        panierStorage= JSON.parse(panierStorage);   
    }
    panierStorage.push(teddie)

    const panierStringified = JSON.stringify(panierStorage)
    localStorage.setItem("adrienR_orinoco_p5",  panierStringified)
})


// récupérer l'ajax pour un produit séléctionner
ajaxGet("http://localhost:3000/api/teddies/" + idProduit)
    .then(function (resultProduct) {
        detailProduct(resultProduct)
        productSelected = resultProduct
    });