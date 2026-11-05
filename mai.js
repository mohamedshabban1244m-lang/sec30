const api = "https://fakestoreapi.com/products";

// =================================================
// First Method (Then)
// =================================================

fetch(api)
    .then(function (result) {
        return result.json();
    })
    .then(function (data) {

        var basket = "";

        for (var i = 0; i < data.length; i++) {

            var cartoona = `
        <div class="col-md-4 text-center mb-4">

            <div class="card p-3 h-100">

                <img src="${data[i].image}"
                    class="w-100"
                    style="height:250px; object-fit:contain">

                <h4>${data[i].title}</h4>

                <h6>${data[i].category}</h6>

                <h6>${data[i].description.substring(0, 80)}</h6>

                <h6>${data[i].rating.rate} of 5</h6>

                <h6>${data[i].price}$</h6>

                <h6>${data[i].id}</h6>

            </div>

        </div>
        `;

            basket += cartoona;
        }

        document.querySelector(".test1").innerHTML = basket;

    })
    .catch(function (error) {
        console.log(error);
    });


// =================================================
// Second Method (Async Await)
// =================================================

async function getApi() {

    try {

        var result = await fetch(api);

        var data = await result.json();

        var basket = "";

        for (var i = 0; i < data.length; i++) {

            var cartoona = `
            <div class="col-md-4 text-center mb-4">

                <div class="card p-3 h-100">

                    <img src="${data[i].image}"
                        class="w-100"
                        style="height:250px; object-fit:contain">

                    <h4>${data[i].title}</h4>

                    <h6>${data[i].category}</h6>

                    <h6>${data[i].description.substring(0, 80)}</h6>

                    <h6>${data[i].rating.rate} of 5</h6>

                    <h6>${data[i].price}$</h6>

                    <h6>${data[i].id}</h6>

                </div>

            </div>
            `;

            basket += cartoona;
        }

        document.querySelector(".test2").innerHTML = basket;

    }

    catch (error) {
        console.log(error);
    }

}

getApi();