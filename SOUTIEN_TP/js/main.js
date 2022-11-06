document.addEventListener("DOMContentLoaded", function () {

    // ************ 2 ************
    let mainHeaderContainer = document.getElementsByTagName("header")[0];

    // ************ 3 ************
    let headerLogo = document.createElement("img");

    // ************ 4 ************
    headerLogo.setAttribute("src", "img/logo.png");

    // ************ 5 ************
    headerLogo.setAttribute("class", "websiteLogo");

    // ************ 6 ************
    headerLogo.setAttribute("alt", "logo du site");

    // ************ 7 ************
    headerLogo.setAttribute("width", "135");

    // ************ 8 ************
    mainHeaderContainer.appendChild(headerLogo);

    // ************ 9 ************
    let mainTitle = document.createElement("h1");

    // ************ 10 ************
    mainTitle.append("Planete sushi");

    // ************ 11 ************
    mainHeaderContainer.appendChild(mainTitle);

    // ************ 12 ************
    mainHeaderContainer.setAttribute("style", "display:flex; flex-direction:column; " +
        "font-family:Sushi Brush, serif; text-transform:uppercase; align-items:center");

    // ************ 17 ************
    mainTitle.setAttribute("style", "margin-top: 1%");

    // ************ 18 ************
    let mainNavContainer = document.createElement("nav");

    // ************ 19 ************
    mainNavContainer.setAttribute("style", "width:80%; font-size:1.3rem");

    // ************ 21 ************
    mainHeaderContainer.appendChild(mainNavContainer);

    // ************ 22 ************
    let mainNavListContainer = document.createElement("ul");
    mainNavListContainer.setAttribute("style", "font-size:1.3rem; display:flex; " +
        "justify-content: space-around; margin-top: 3%")
    // ************ 26 ************
    let mainNavListItem1 = document.createElement("li");

    // ************ 27 ************
    let mainNavListItemLink1 = document.createElement("a");

    // ************ 28 ************
    mainNavListItemLink1.setAttribute("href","index.html");

    // ************ 29 ************
    mainNavListItemLink1.append("Accueil");

    // ************ 30 ************
    mainNavListItem1.appendChild(mainNavListItemLink1);

    // ************ 31 ************
    mainNavListContainer.appendChild(mainNavListItem1);

    // ************ 32 ************
    let mainNavListItem2 = document.createElement("li");

    // ************ 33 ************
    let mainNavListItemLink2 = document.createElement("a");

    // ************ 34 ************
    mainNavListItemLink2.setAttribute("href", "#");

    // ************ 35 ************
    mainNavListItemLink2.append("A la carte");

    // ************ 36 ************
    mainNavListItem2.appendChild(mainNavListItemLink2);

    // ************ 37 ************
    mainNavListContainer.appendChild(mainNavListItem2);

    // ************ 38 ************
    let mainNavListItem3 = document.createElement("li");


    // ************ 39 ************
    let mainNavListItemLink3 = document.createElement("a");


    // ************ 40 ************
    mainNavListItemLink3.setAttribute("href", "#");


    // ************ 41 ************
    mainNavListItemLink3.append("Nos menus");


    // ************ 42 ************
    mainNavListItem3.appendChild(mainNavListItemLink3);


    // ************ 43 ************
    mainNavListContainer.appendChild(mainNavListItem3);


    // ************ 44 ************
    let mainNavListItem4 = document.createElement("li");


    // ************ 45 ************
    let mainNavListItemLink4 = document.createElement("a");


    // ************ 46 ************
    mainNavListItemLink4.setAttribute("href", "#");


    // ************ 47 ************
    mainNavListItemLink4.append("Mon compte");


    // ************ 48 ************
    mainNavListItem4.appendChild(mainNavListItemLink4);


    // ************ 49 ************
    mainNavListContainer.appendChild(mainNavListItem4);

    // ************ 50 ************
    let mainNavListItem5 = document.createElement("li");


    // ************ 51 ************
    let mainNavListItemLink5 = document.createElement("a");


    // ************ 52 ************
    mainNavListItemLink5.setAttribute("href", "#");


    // ************ 53 ************
    mainNavListItemLink5.append("Contact");


    // ************ 54 ************
    mainNavListItem5.appendChild(mainNavListItemLink5);


    // ************ 55 ************
    mainNavListContainer.appendChild(mainNavListItem5);

    // ************ 56 ************
    mainNavContainer.appendChild(mainNavListContainer);

});