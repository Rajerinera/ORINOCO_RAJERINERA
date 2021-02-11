let form = document.getElementById("order_form");

// récupération du localStorage
const getProduct = localStorage.getItem("adrienR_orinoco_p5")
let productData = JSON.parse(getProduct)

// récupération du de l'id du produit
let id_products = []
if (productData) {
    id_products = productData.map(function (product) {
        return product._id
    })
    console.log(id_products)
}
// Attribution des données dans order (variable pour le formulaire)
const order = {
    contact: {
        firstName: '',
        lastName: '',
        email: '',
        city: '',
        address: ''
    },
    products: id_products
};
// Test des inputs
const checkInput = (inputValue) => {
    let checkString = /[a-zA-Z]/;
    let checkNumber = /[0-9]/;
    let checkSpecialCharacter = /[§!@#$%^&*(),.?":{}|<>]/;

    if (!checkNumber.test(inputValue) || !checkSpecialCharacter.test(inputValue) || checkString.test(inputValue)) {
        return false
    } else {
        console.log("Administration : Nom ok");
        return true
    };
};
// Test pour vérifier si des données ne sont pas notés dans le formulaire

const checkFieldIsNotEmpty = (formfield) => {
    if (formfield.trim().length > 0) {
        console.log("rien")
        return true

    } else {
        return false
    }
}

// Test pour vérifier que les données ont bien été selectionné
checkCart = () => {

    if (!productData || productData.length < 1) {
        console.log("pas de localStorage")
        alert("Votre panier est vide");
        return false;
    } else {
        console.log("panier présent" + productData)
        return true;
    }
};


// Envoyer les données dans le serveur 
function sendForm(){
ajaxPost("http://localhost:3000/api/teddies/order")
    .then(function (orderId) {

    }).catch(function (error) {
        alert(error)
});

// Valider le formulaire et enregistrement des données

const validForm = () => {
    
    form.addEventListener("submit", function (e) {
        e.preventDefault()
        const firstName = document.getElementById("firstName").value
        const lastName = document.getElementById("lastName").value
        const email = document.getElementById("email").value
        const city = document.getElementById("city").value
        const address = document.getElementById("address").value
        if (!checkCart()) {
            alert("panier vide")
            return
        }
        if (!checkFieldIsNotEmpty(firstName)) {
            alert("Nom incorrect")
            return
        }
        if (!checkFieldIsNotEmpty(lastName)) {
            alert("Nom incorrect")
            return
        }
        if (!checkFieldIsNotEmpty(email)) {
            alert("Email incorrect")
            return
        }
        if (!checkFieldIsNotEmpty(city)) {
            alert("city incorrect")
            return
        }
        if (!checkFieldIsNotEmpty(address)) {
            alert("address incorrect")
            return
        }
        order.contact.firstName = firstName;
        order.contact.lastName = lastName;
        order.contact.email = email;
        order.contact.city = city;
        order.contact.address = address;
        sendForm()
        })
        

    };
};

validForm()

const removeForm = () =>{
form.remove 
form.add
}