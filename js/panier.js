const table = document.getElementById('table')

// récupérer les données du localStorage
const getProduct = localStorage.getItem("adrienR_orinoco_p5")
let productData = JSON.parse(getProduct)


// Création du tableau pour l'apparition des prix
// tr = Celule du tableau // th = Entête du tableau // td = Contenu du tableau
function addCart() {
    if (productData.length > 0) {
        let tr = document.createElement('tr')

        let th_name = document.createElement('th')
        let th_price = document.createElement('th')
        let th_quantity = document.createElement('th')


        table.appendChild(tr)
        tr.appendChild(th_name)
        tr.appendChild(th_price)
        tr.appendChild(th_quantity)


        th_name.textContent = "Votre produit"
        th_price.textContent = "Prix"
        th_quantity.textContent = "Quantité"

        for (let i = 0; i < productData.length; i++) {
            let tr_container = document.createElement('tr')
            let td_name = document.createElement('td')
            let td_price = document.createElement('td')
            let td_quantity = document.createElement('td')
            

            table.appendChild(tr_container)
            tr_container.appendChild(td_name)
            tr_container.appendChild(td_price)
            tr_container.appendChild(td_quantity)

            td_name.innerHTML = productData[i].name
            td_price.innerHTML = productData[i].price + "Francs"
            td_quantity.innerHTML = productData[i].quantity


           
        }
        let tr_container_total = document.createElement("tr")
        let th_total = document.createElement("th")
        let td_total = document.createElement("td")

        table.appendChild(tr_container_total);
        tr_container_total.appendChild(th_total);
        tr_container_total.appendChild(td_total)


        th_total.textContent = "Total :"
        td_total.setAttribute("id", "totalCartS")

        let totalPaid = 0

        for (let i = 0; i < productData.length; i++) {
            totalPaid += productData[i].price * productData[i].quantity
        }
        document.getElementById("totalCartS").textContent = totalPaid + " Francs"
    }

}

addCart()


// Boutton pour supprimer le panier
const button = document.querySelector("#button")
button.addEventListener("click", removeItem)
function removeItem(){
   localStorage.removeItem("adrienR_orinoco_p5")
   productData=[]
   table.innerHTML = ""
}; 

let allPage = document.getElementById("confirmPage")
let removePage = document.getElementById("buttonConfirm")
removePage.addEventListener("click", function(){
    allPage.remove();
})