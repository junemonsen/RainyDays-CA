let apiurl = "https://api.noroff.dev/api/v1/rainy-days?fbclid=IwAR1O2roL4g7X-esQpG8P7kZ20YK_3luGor8b4KlVeHdLHQAbzToYTTxAZ34";
       

function showLoadingIndicator() {
    const loadingIndicator = document.getElementById("loading-indicator");
    loadingIndicator.style.display = "block";
}


function hideLoadingIndicator() {
    const loadingIndicator = document.getElementById("loading-indicator");
    loadingIndicator.style.display = "none";
}

function getProductsofHome() {
    showLoadingIndicator(); 

    fetch(apiurl) .then(function(response) {
            return response.json();
    }).then(function(products) {
        let productsContainer = document.querySelector(".front_products");
        productsContainer.innerHTML = "";

        for (let i = 0; i < 4 && i < products.length; i++) {
            const product = products[i];
            productsContainer.innerHTML += `<a href="productspecific.html?id=${product.id}" style="text-decoration: none; text-align: center; border: 1px solid #eee;">
                <img src="${product.image}" alt="Jacket1" max-width="100" height="60%">
                <h4 style="font-size: 23px;">${product.title}</h4>
                <h5 style="margin: 0; font-size: 24px;">USD ${product.price}</h5>`;
        }

        hideLoadingIndicator(); 
    })
        .catch(function(error) {
        console.dir(error);
        hideLoadingIndicator(); 
    });
}

getProductsofHome();
