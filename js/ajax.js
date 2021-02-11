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
