function getHttpRequest(url, callback) {
            var request = new XMLHttpRequest();
            request.onreadystatechange = function (event) {
                if (request.readyState == 4) {
                    if (request.status == 200) {
                        // 요청이 정상적으로 처리된 경우
                        console.log("success");
                        callback(request.responseText);
                    } else {
                        // 에러가 발생한 경우
                        console.error("Error occurred while making the request");
                    }
                }
            };
    
            const method = "GET";
            request.open('GET', url, true);
            request.send();
        }
    
        const url1 = "./bestseller.json";
        getHttpRequest(url1, function (response) {
            var json = JSON.parse(response);
    
            let carouselInner = document.querySelector("#carouselExampleIndicators1 .carousel-inner");
    
            let startIndex = 0;
    
            let carouselItem = document.createElement('div');
            carouselItem.classList.add("carousel-item");
            carouselItem.classList.add("active");
    
            let row = document.createElement('div');
            row.classList.add("row");
            row.classList.add("row-cols-2");
            row.classList.add("row-cols-lg-5");
            row.classList.add("g-2");
            row.classList.add("g-lg-3");
    
            for (var j = startIndex; j < startIndex + 5 && j < json.length; j++) {
                let col = document.createElement('div');
                col.classList.add("col");
    
                let img = document.createElement('img');
                img.src = json[j].image;
                img.classList.add("img-fluid");
                img.alt = "베스트셀러";
                col.appendChild(img);
    
                let title = document.createElement('div');
                title.classList.add("p-3");
                title.textContent = json[j].title;
                col.appendChild(title);
    
                row.appendChild(col);
            }
    
            carouselItem.appendChild(row);
            carouselInner.appendChild(carouselItem);
    
            const carousel = new bootstrap.Carousel(document.querySelector('#carouselExampleIndicators1'), {
                interval: false
            });
    
            let nextButton = document.querySelector('#carouselExampleIndicators1 .carousel-control-next');
            nextButton.addEventListener('click', function () {
                if (startIndex + 5 < json.length) {
                    startIndex += 5;
    
                    let newCarouselItem = document.createElement('div');
                    newCarouselItem.classList.add("carousel-item");
    
                    let newRow = document.createElement('div');
                    newRow.classList.add("row");
                    newRow.classList.add("row-cols-2");
                    newRow.classList.add("row-cols-lg-5");
                    newRow.classList.add("g-2");
                    newRow.classList.add("g-lg-3");
    
                    for (var j = startIndex; j < startIndex + 5 && j < json.length; j++) {
                        let col = document.createElement('div');
                        col.classList.add("col");
    
                        let img = document.createElement('img');
                        img.src = json[j].image;
                        img.classList.add("img-fluid");
                        img.alt = "베스트셀러";
                        col.appendChild(img);
    
                        let title = document.createElement('div');
                        title.classList.add("p-3");
                        title.textContent = json[j].title;
                        col.appendChild(title);
    
                        newRow.appendChild(col);
                    }
    
                    newCarouselItem.appendChild(newRow);
                    carouselInner.appendChild(newCarouselItem);
    
                    carousel.next();
                }
            });
        });
    
        const url2 = "./newpublish.json";
        getHttpRequest(url2, function (response) {
            var json = JSON.parse(response);
    
            let carouselInner = document.querySelector("#carouselExampleIndicators2 .carousel-inner");
    
            let startIndex = 0;
    
            let carouselItem = document.createElement('div');
            carouselItem.classList.add("carousel-item");
            carouselItem.classList.add("active");
    
            let row = document.createElement('div');
            row.classList.add("row");
            row.classList.add("row-cols-2");
            row.classList.add("row-cols-lg-5");
            row.classList.add("g-2");
            row.classList.add("g-lg-3");
    
            for (var j = startIndex; j < startIndex + 5 && j < json.length; j++) {
                let col = document.createElement('div');
                col.classList.add("col");
    
                let img = document.createElement('img');
                img.src = json[j].image;
                img.classList.add("img-fluid");
                img.alt = "신간도서";
                col.appendChild(img);
    
                let title = document.createElement('div');
                title.classList.add("p-3");
                title.textContent = json[j].title;
                col.appendChild(title);
    
                row.appendChild(col);
            }
    
            carouselItem.appendChild(row);
            carouselInner.appendChild(carouselItem);
    
            const carousel = new bootstrap.Carousel(document.querySelector('#carouselExampleIndicators2'), {
                interval: false
            });
    
            let nextButton = document.querySelector('#carouselExampleIndicators2 .carousel-control-next');
            nextButton.addEventListener('click', function () {
                if (startIndex + 5 < json.length) {
                    startIndex += 5;
    
                    let newCarouselItem = document.createElement('div');
                    newCarouselItem.classList.add("carousel-item");
    
                    let newRow = document.createElement('div');
                    newRow.classList.add("row");
                    newRow.classList.add("row-cols-2");
                    newRow.classList.add("row-cols-lg-5");
                    newRow.classList.add("g-2");
                    newRow.classList.add("g-lg-3");
    
                    for (var j = startIndex; j < startIndex + 5 && j < json.length; j++) {
                        let col = document.createElement('div');
                        col.classList.add("col");
    
                        let img = document.createElement('img');
                        img.src = json[j].image;
                        img.classList.add("img-fluid");
                        img.alt = "신간도서";
                        col.appendChild(img);
    
                        let title = document.createElement('div');
                        title.classList.add("p-3");
                        title.textContent = json[j].title;
                        col.appendChild(title);
    
                        newRow.appendChild(col);
                    }
    
                    newCarouselItem.appendChild(newRow);
                    carouselInner.appendChild(newCarouselItem);
    
                    carousel.next();
                }
            });
        });



        const url3 = "./recbook.json";
    getHttpRequest(url3, function (response) {
        var json = JSON.parse(response);

        let carouselInner = document.querySelector("#carouselExampleIndicators3 .carousel-inner");

        let startIndex = 0;

        let carouselItem = document.createElement('div');
        carouselItem.classList.add("carousel-item");
        carouselItem.classList.add("active");

        let row = document.createElement('div');
        row.classList.add("row");
        row.classList.add("row-cols-2");
        row.classList.add("row-cols-lg-5");
        row.classList.add("g-2");
        row.classList.add("g-lg-3");

        for (var j = startIndex; j < startIndex + 5 && j < json.length; j++) {
            let col = document.createElement('div');
            col.classList.add("col");

            let img = document.createElement('img');
            img.src = json[j].image;
            img.classList.add("img-fluid");
            img.alt = "추천도서";
            col.appendChild(img);

            let title = document.createElement('div');
            title.classList.add("p-3");
            title.textContent = json[j].title;
            col.appendChild(title);

            row.appendChild(col);
        }

        carouselItem.appendChild(row);
        carouselInner.appendChild(carouselItem);

        const carousel = new bootstrap.Carousel(document.querySelector('#carouselExampleIndicators3'), {
            interval: false
        });

        let nextButton = document.querySelector('#carouselExampleIndicators3 .carousel-control-next');
        nextButton.addEventListener('click', function () {
            if (startIndex + 5 < json.length) {
                startIndex += 5;

                let newCarouselItem = document.createElement('div');
                newCarouselItem.classList.add("carousel-item");

                let newRow = document.createElement('div');
                newRow.classList.add("row");
                newRow.classList.add("row-cols-2");
                newRow.classList.add("row-cols-lg-5");
                newRow.classList.add("g-2");
                newRow.classList.add("g-lg-3");

                for (var j = startIndex; j < startIndex + 5 && j < json.length; j++) {
                    let col = document.createElement('div');
                    col.classList.add("col");

                    let img = document.createElement('img');
                    img.src = json[j].image;
                    img.classList.add("img-fluid");
                    img.alt = "추천도서";
                    col.appendChild(img);

                    let title = document.createElement('div');
                    title.classList.add("p-3");
                    title.textContent = json[j].title;
                    col.appendChild(title);

                    newRow.appendChild(col);
                }

                newCarouselItem.appendChild(newRow);
                carouselInner.appendChild(newCarouselItem);

                carousel.next();
            }
        });

        
    });











// function getHttpRequest(url, callback) {
//     var request = new XMLHttpRequest();
//     request.onreadystatechange = function (event) {
//         if (request.readyState == 4) {
//             if (request.status == 200) {
//                 // 요청이 정상적으로 처리 된 경우
//                 console.log("success");
//                 //console.log(request.responseText)
//                 callback(request.responseText);
//             } else {
//                 // 에러가 발생한 경우
//             }
//         }
//     }

//     const method = "GET";
//     request.open('get', url, true);
//     request.send();
// }

// const url = "./bestseller.json";
// getHttpRequest(url, function (response) {
//     var json = JSON.parse(response);

//     let carouselInner = document.querySelector("#carouselExampleIndicators1 .carousel-inner");


//     for (var i = 0; i < json.length; i += 5) {
//         let carouselItem = document.createElement('div');
//         carouselItem.classList.add("carousel-item");
//         if (i === 0) {
//             carouselItem.classList.add("active");
//         }

//         let row = document.createElement('div');
//         row.classList.add("row");
//         row.classList.add("row-cols-2");
//         row.classList.add("row-cols-lg-5");
//         row.classList.add("g-2");
//         row.classList.add("g-lg-3");

//         for (var j = i; j < i + 5 && j < json.length; j++) {
//             let col = document.createElement('div');
//             col.classList.add("col");

//             let img = document.createElement('img');
//             img.src = json[j].image;
//             img.classList.add("img-fluid");
//             img.alt = "베스트셀러";
//             col.appendChild(img);

//             let title = document.createElement('div');
//             title.classList.add("p-3");
//             title.innerHTML = json[j].title;
//             col.appendChild(title);

//             row.appendChild(col);
//         }

//         carouselItem.appendChild(row);
//         carouselInner.appendChild(carouselItem);
//     }
// });
