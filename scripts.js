function myWork(theImg, theTitle, theInfo)
{
    this.src = theImg;
    this.title = theTitle;
    this.info = theInfo;
}

//******GRAPHIC DESIGN PRINT SECTION
//img/gd/print/
gdp1 = new myWork
(
    "img/gd/print/lfd_flyer2.jpg",
    "Client - Laissez-Faire Diamond | Poster Design",
    "Poster design for client to be used at various locations."
)

gdp2 = new myWork
(
    "img/gd/print/lfd_flyer.jpg",
    "Client - Laissez-Faire Diamond | Poster Design #2",
    "Poster design for client to be used at various locations."
)

gdp3 = new myWork
(
    "img/gd/print/gorillazPost.jpg",
    "Student Work | Poster Design",
    ""
)

gdp4 = new myWork
(
    "img/gd/print/wolf_poster.jpg",
    "",
    ""
)

gdp5 = new myWork
(
    "img/gd/print/SOP_Opera_performance_poster_color.jpg",
    "",
    ""
)

gdp6 = new myWork
(
    "img/gd/print/fathers_day_special_2018_FB.jpg",
    "Client - Ozark Adventures | In-Store Sign",
    "In-store sign designed for Ozark Adventures to promote an ongoing sale."
)

gdp7 = new myWork
(
    "img/gd/print/stock_up_on_sock_sale_2019.jpg",
    "Client - Ozark Adventures | In-Store Sign",
    "Sign designed for Ozark Adventures for an in-store promotion."
)

gdp8 = new myWork
(
    "img/gd/print/wooden_paddles.jpg",
    "Client - Ozark Adventures | In-Store Sign",
    "Sign designed for Ozark Adventures to promote a product line."
)

gdp9 = new myWork
(
    "img/gd/print/yakima_post.jpg",
    "Client - Ozark Adventures | In-Store Sign",
    "Sign designed for Ozark Adventures to promote a product line."
)

gdp10 = new myWork
(
    "img/gd/print/thermoball_graphic_half.jpg",
    "Client - Ozark Adventures | In-Store Sign",
    "Sign designed for Ozark Adventures to promote a product line."
)

gdp11 = new myWork
(
    "img/gd/print/winter_clearance_2017_FB.jpg",
    "Client - Ozark Adventures | Post Card",
    "Post card designed for Ozark Adventures to promote a winter clearance sale."
)


var gdAry = [gdp1, gdp2, gdp3, gdp4, gdp5, gdp6, gdp7, gdp8, gdp9, gdp10, gdp11];
// var phtAry = [];
// var webAry = [];


var gdp = document.getElementById('gdpThumbs');
var pht = document.getElementById('phtThumbs');
var web = document.getElementById('webThumbs');

for (var i=0; i < gdAry.length; i++)
{
    
    gdp.innerHTML += `<img onclick="openImg(this)" src=${gdAry[i].src} alt="${gdAry[i].title}">`;
    console.log(gdAry[i].title)
};

function openImg(img)
{
    document.getElementById('shadowBox').style.display = "block";
    document.getElementById('lgImg').src = img.src;
    document.getElementById('infoText').innerHTML = img.alt;
    console.log(img.alt)
}

document.getElementById('close').addEventListener('click', close);

function close()
{
    document.getElementById('shadowBox').style.display = "none";
}
