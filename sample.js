function createCard(titel, cName, views, monthsOld, duration, thumbnail) {
    //Finish this function
    let viewStr
    if (views < 1000000) {
        viewStr = views / 1000 + "k"
    }
    else if (views > 1000000) {
        viewStr = views / 1000000 + "M"
    }
    else (
        viewStr = views / 1000 + "k"
    )
    let html = `<div class="card">
    <div class="image">
        <img src="${thumbnail}"
            alt="">
        <div class="capsule">${duration}</div>
    </div>
    <div class="text">
        <h1>${titel}</h1>
        <p>${cName} . ${viewStr} views . ${monthsOld} month ago</p>
    </div>
</div>`
    document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html
    document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html
}

createCard("Introduction to my video | Welcome to new One #2", "National Academy", 780000, 7, "31:22", "https://ergonotes.com/wp-content/uploads/2022/11/Find-YouTube-Thumbnail-Source.jpg")

createCard("Introduction to my video | Welcome to new One #2", "National Academy", 780000, 7, "31:22", "https://ergonotes.com/wp-content/uploads/2022/11/Find-YouTube-Thumbnail-Source.jpg")
