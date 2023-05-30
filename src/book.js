function getHttpRequest(url, callback) {
    var request = new XMLHttpRequest();
    request.onreadystatechange = function (event) {
        if (request.readyState == 4) {
            if (request.status == 200) {
                // 요청이 정상적으로 처리 된 경우
                console.log("success");
                //console.log(request.responseText)
                callback(request.responseText);
            } else {
                // 에러가 발생한 경우
            }
        }
    }

    const method = "GET";
    request.open('get', url, true);
    request.send();
}

const url = "./bestseller.json";
getHttpRequest(url, function (response) {
    var json = JSON.parse(response);

    let carouselInner = document.querySelector("#carouselExampleIndicators1 .carousel-inner");


    for (var i = 0; i < json.length; i += 5) {
        let carouselItem = document.createElement('div');
        carouselItem.classList.add("carousel-item");
        if (i === 0) {
            carouselItem.classList.add("active");
        }

        let row = document.createElement('div');
        row.classList.add("row");
        row.classList.add("row-cols-2");
        row.classList.add("row-cols-lg-5");
        row.classList.add("g-2");
        row.classList.add("g-lg-3");

        for (var j = i; j < i + 5 && j < json.length; j++) {
            let col = document.createElement('div');
            col.classList.add("col");

            let img = document.createElement('img');
            img.src = json[j].image;
            img.classList.add("img-fluid");
            img.alt = "베스트셀러";
            col.appendChild(img);

            let title = document.createElement('div');
            title.classList.add("p-3");
            title.innerHTML = json[j].title;
            col.appendChild(title);

            row.appendChild(col);
        }

        carouselItem.appendChild(row);
        carouselInner.appendChild(carouselItem);
    }
});
