
nameId = document.getElementById("nameOrder")
orderId = document.getElementById("orderId")

const resultOrder = () =>{
	if(!orderProduct){
    const orderProduct = sessionStorage.getItem("orderP5")
    let orderProductParse = JSON.parse(orderProduct)

    nameId.innerHTML = orderProductParse.contact.lastName
    orderId.innerHTML = orderProductParse.orderId
    
}else{
  alert("Aucune commande passée, vous êtes arrivé ici par erreur");
}
}

resultOrder()