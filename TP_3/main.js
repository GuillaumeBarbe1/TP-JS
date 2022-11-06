document.addEventListener("DOMContentLoaded", function () {

    // ********* 1 *********
    let headerLink = document.getElementById("mainHeaderLink");
    headerLink.setAttribute("href", "https://www.billieeilish.com/");
    headerLink.setAttribute("target", "_BLANK");


    // ********* 3 *********
    let headerTitle = document.getElementById("mainHeaderTitle");
    headerTitle.setAttribute("style", "font-family:eilish regular, serif; text-transform: uppercase");

    // ********* 5 *********
    let BilliePortrait = document.getElementById("billieEilishPortrait");
    BilliePortrait.setAttribute("alt", "Billie Eilish Portrait")

    // ********* 6 *********

    let mainIntroContainer = document.getElementById("introMainContainer");
    let mainIntroImg = mainIntroContainer.getElementsByTagName("img");
    let imgArray = Array.from(mainIntroImg);

    imgArray.forEach(item =>
        item.classList.add("introContentImg")
    );

    // ********* 7 *********
    let mainIntroText = mainIntroContainer.getElementsByTagName("p");
    let pArray = Array.from(mainIntroText);

    pArray.forEach(item =>
        item.classList.add("introContentText")
    );

    // ********* 8 *********
    let FinneasPortrait = document.getElementById("finneasPortrait");
    FinneasPortrait.setAttribute("alt", "Billie Eilish Portrait")


    // ********* 9 *********
    FinneasPortrait.style.display = BilliePortrait.style.display = '';

    FinneasPortrait.onclick = function() {
        if (BilliePortrait.style.display === "none"){
            BilliePortrait.style.display = "";
        }
        else {
            BilliePortrait.style.display = "none";
        }
    };

    BilliePortrait.onclick = function() {
        if (FinneasPortrait.style.display === "none"){
            FinneasPortrait.style.display = "";
        }
        else {
            FinneasPortrait.style.display = "none";
        }
    };

    // ********* 10 *********

    let BillieBio = document.getElementById("billieEilishBio");
    let BillieBioContent = document.createTextNode("Billie Eilish Pirate Baird O'Connell, born December 18 2001, is an American\n" +
        "  singer and songwriter. She first gained public attention in 2015 with her debut single Ocean Eyes,\n" +
        "  which was subsequently released by Darkroom, a subsidiary of Interscope Records. The song was written\n" +
        "  and produced by her brother, Finneas O'Connell, with whom she frequently collaborates on music and in\n" +
        "  live shows. Her debut extended play, Don't Smile at Me (2017), was commercially successful and charted\n" +
        "  within the top 15 in the US, UK, Canada, and Australia.")
    BillieBio.appendChild(BillieBioContent);

    // ********* 11 *********

    let PhinneasBio = document.getElementById("finneasBio");
    let PhineasBioContent = document.createTextNode("Finneas Baird O'Connell, born July 30, 1997, known mononymously by his first name, is an American\n" +
        "singer-songwriter, record producer, and actor. He has written and produced music for various artists,\n" +
        "including his sister, Billie Eilish. He has won eight Grammy Awards, including Album of the Year,\n" +
        "Producer of the Year, Non-Classical and the Best Engineered Album, Non-Classical for his work on\n" +
        "Eilish's debut album When We All Fall Asleep, Where Do We Go? (2019). Finneas has released several\n" +
        "singles as a solo artist.")
    PhinneasBio.appendChild(PhineasBioContent);

    // ********* 12 *********
    let dontSmileAtMeAlbumImg = document.getElementById("dontSmileAtMeAlbumImg");
    dontSmileAtMeAlbumImg.setAttribute("src", "/img/dont_smile_at_me.png");
    dontSmileAtMeAlbumImg.setAttribute("alt", "Don't Smile at Me Album Cover");


    // ********* 13 *********
    let whenWeAllFallAsleepAlbumImg = document.getElementById("whenWeAllFallAsleepAlbumImg");
    whenWeAllFallAsleepAlbumImg.setAttribute("src", "/img/when_we_all_fall_asleep.png");
    whenWeAllFallAsleepAlbumImg.setAttribute("alt", "When We All Fall Asleep, Where Do We Go Album Cover");

    // ********* 14 *********
    let happierThanEverAlbumImg = document.getElementById("happierThanEverAlbumImg");
    happierThanEverAlbumImg.setAttribute("src", "/img/happier_than_ever.png");
    happierThanEverAlbumImg.setAttribute("alt", "Happier Than Ever Album Cover");

    // ********* 18 *********
    let dontSmileAtMePurchaseButton = document.getElementById("dontSmileAtMePurchaseButton");
    dontSmileAtMePurchaseButton.addEventListener("click", function (){
        window.open("https://www.fnac.com/a13662009/Billie-Eilish-Don-t-smile-at-me-CD-album#omnsearchpos=5",
            "_blank");
    });
        // ********* 19 *********


    // ********* 20 *********


    // ********* 21 *********


    // ********* 22 *********


    // ********* 23 *********



    // ********* 24 *********



});