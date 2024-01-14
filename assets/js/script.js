    // let btnMenu = document.querySelector(".btnMenu i");
    // let navMobile = document.querySelector(".navMobile");
    // let btnSearch = document.querySelector(".btnSearch i");
    // let searchMobile = document.querySelector(".searchMobile");

    //     btnMenu.addEventListener("click", ()=> {
    //         btnSearch.classList.remove("fa-close");
    //         searchMobile.classList.remove("navActive");
    //         navMobile.classList.toggle("navActive");
    //         btnMenu.classList.toggle("fa-circle-xmark");
    //     })

    //     btnSearch.addEventListener("click", ()=> {
    //         btnMenu.classList.remove("fa-circle-xmark");
    //         navMobile.classList.remove("navActive");
    //         searchMobile.classList.toggle("navActive");
    //         btnSearch.classList.toggle("fa-close");
    //     })

    let iconClick = document.querySelectorAll(".arrow i");
    let slider = document.querySelector(".slider");

    iconClick.forEach((e) => {
    e.addEventListener("click", () => {
        slider.scrollBy({
        left: e.dataset.option,
        behavior: "smooth",
        });
    });
    });

    let filter_icon = document.querySelector(".filter-icon");

    filter_icon.addEventListener("click", () => {
    filter_icon.classList.toggle("active-icon");
    });

    let btnMenu = document.querySelectorAll(".button-options > i");
    let barMenu = document.querySelectorAll(".bar-options");

    btnMenu.forEach((e, i) => {
    e.addEventListener("click", () => {
        console.log(e, i);
        e.classList.toggle("fa-circle-xmark");
        barMenu[i].classList.toggle("activeBar");
    });
    });

    let tab = document.querySelectorAll(".tabs li");
    let list = document.querySelectorAll("#list > .movie-list > .card-post");

    function none() {
    for (let index = 0; index < list.length; index++) {
        list[index].style.display = "none";
    }
    }

    tab.forEach((e) => {
    e.addEventListener("click", () => {
        
        if (e.dataset.btntage == "movie" || e.dataset.btntage == "anime") {
            none();
        }
        
        for (i = 0; i < list.length; i++) {
        if (e.dataset.btntage == list[i].dataset.tage) {
            // console.log(e);
            list[i].style.display = "block";
        }
        }
        tab.forEach((r) => {
        r.classList.remove("active");
        });
        e.classList.add("active");
    });
    });


    arraylist = []
    for (let index = 0; index < list.length; index++) {
        arraylist.push(list[index].dataset.date)
        arraylist.sort().reverse()
        for (let i = 0 ; i < list.length; i++) {
        if (list[index].dataset.date == arraylist[i]) {
            list[index].style.order = (arraylist.indexOf(list[index].dataset.date))+1
            }
        }

    }


console.log(arraylist)





    
    // for (let index = list.length - 1; index > 0; index--) {
    //     arraylist.push(list[index].dataset.date)
    //     arraylist.sort().reverse()
    //     let listx = list[index].parentElement
    // for (let i = 0; i < list.length; i++) {
    //     if (+(list[index].dataset.date) > +(arraylist[i])) {
    //         listx.prepend(list[index])
    //     }else {
    //         listx.append(list[index])
    //     }
    // }
    // }


