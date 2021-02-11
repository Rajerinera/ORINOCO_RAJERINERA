// récupérer les données du produit dans l'url

function ajaxGet(url) {
    return new Promise(function (resolve, reject) {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", url);
        xhr.send();
        xhr.addEventListener("load", function () {
            if (xhr.status >= 200 && xhr.status < 300) {
                let result = JSON.parse(xhr.responseText);
                resolve(result)
            } else {
                console.log("code erreur: " + xhr.status)
                reject("error")
            }
        });
    })
}

function ajaxPost () {
    return new Promise(function (resolve, reject) {
        let form = new XMLHttpRequest();
        form.open("POST", "http://localhost:3000/api/teddies/order");
        form.setRequestHeader("content-type", "application/json");
        form.send();
        form.addEventListener("load", function () {
            if (form.status >= 200 && form.status < 300) {
                sessionStorage.setItem("orderP5", form.responseText)
                let resultForm = JSON.parse(form.responseText);
                console.log(resultForm)
                resolve(resultForm.orderId);

            } else {
                console.log("requête erreur: " + form.status)
                reject("error")
            }
        })
        
    });
}