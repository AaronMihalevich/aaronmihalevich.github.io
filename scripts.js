function myWork(theImg, theTitle, theInfo)
{
    this.src = theImg;
    this.title = theTitle;
    this.info = theInfo;
}
//********************************************************//
//************* GRAPHIC DESIGN PRINT SECTION *************//
//********************************************************//
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
    "Assignment: Create a 20 x 30 poster to be printed on vinyl."
)

gdp4 = new myWork
(
    "img/gd/print/wolf_poster.jpg",
    "Student Work | Poster Design",
    "Assignment: Create a 20 x 30 poster to be printed on vinyl."
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

gdp12 = new myWork
(
    "img/gd/print/cd_design-web.jpg",
    "Student Work | CD Design",
    ""
)

gdp13 = new myWork
(
    "img/gd/print/info_graph-web.jpg",
    "Student Work | Info Graph",
    ""
)

gdp14 = new myWork
(
    "img/gd/print/Linbergs-menu-design-web.jpg",
    "Student Work | Resturant Menu Design",
    ""
)

gdp15 = new myWork
(
    "img/gd/print/prez_poster_ARM-web.jpg",
    "Student Work | Presidential Overview Poster",
    ""
)

gdp16 = new myWork
(
    "img/gd/print/TheLastAscension-web.jpg",
    "Student Work | Magazine Layout",
    ""
)

gdp17 = new myWork
(
    "img/gd/print/Typeface_poster_ARM-web.jpg",
    "Student Work | Typeface Poster",
    ""
)


var gdpAry = [gdp1, gdp2, gdp3, gdp4, gdp5, gdp6, gdp7, gdp8, gdp9, gdp10, gdp11, gdp12, gdp13, gdp14, gdp15, gdp16, gdp17];
var gdp = document.getElementById('gdpThumbs');

for (var i=0; i < gdpAry.length; i++)
{
    gdp.innerHTML += `<img onclick="openImg(this)" src=${gdpAry[i].src} alt="${gdpAry[i].title}">`;
    console.log(gdpAry[i].title)
};

//********************************************************//
//************* GRAPHIC DESIGN PRINT SECTION *************//
//************************ END ***************************//
//********************************************************//



//********************************************************//
//************** GRAPHIC DESIGN WEB SECTION **************//
//********************************************************//
//img/gd/web/
gdw1 = new myWork
(
    "img/gd/web/Chaco.jpg",
    "",
    ""
)

gdw2 = new myWork
(
    "img/gd/web/fathers_day_special_2017.jpg",
    "",
    ""
)

gdw3 = new myWork
(
    "img/gd/web/fishing_kayaks_2016.jpg",
    "",
    ""
)

gdw4 = new myWork
(
    "img/gd/web/glasses_selection.jpg",
    "",
    ""
)

gdw5 = new myWork
(
    "img/gd/web/OA_banner_F17.jpg",
    "",
    ""
)

gdw6 = new myWork
(
    "img/gd/web/Patagonia_spring18_womens.jpg",
    "",
    ""
)

gdw7 = new myWork
(
    "img/gd/web/web_wms_thermoball.jpg",
    "",
    ""
)

gdw8 = new myWork
(
    "img/gd/web/Yakima.jpg",
    "",
    ""
)

gdw9 = new myWork
(
    "img/gd/web/may_aefter_post3.jpg",
    "",
    ""
)

gdw10 = new myWork
(
    "img/gd/web/may_aefter_post7.jpg",
    "",
    ""
)

var gdwAry = [gdw1, gdw2, gdw3, gdw4, gdw5, gdw6, gdw7, gdw8, gdw9, gdw10];
var gdw = document.getElementById('gdwThumbs');

for (var i=0; i < gdwAry.length; i++)
{
    gdw.innerHTML += `<img onclick="openImg(this)" src=${gdwAry[i].src} alt="${gdwAry[i].title}">`;
    console.log(gdwAry[i].src)
};
//********************************************************//
//************** GRAPHIC DESIGN WEB SECTION **************//
//************************ END ***************************//
//********************************************************//

//********************************************************//
//************ GRAPHIC DESIGN BRANDING SECTION ***********//
//********************************************************//

gdb1 = new myWork 
(
    "img/gd/branding/afterlogo-web.jpg",
    "",
    ""
)

gdb2 = new myWork 
(
    "img/gd/branding/jem-layout.jpg",
    "",
    ""
)

gdb3 = new myWork 
(
    "img/gd/branding/LF_logo_layout.jpg",
    "",
    ""
)

gdb4 = new myWork 
(
    "img/gd/branding/LF-businessCard.jpg",
    "",
    ""
)

gdb5 = new myWork 
(
    "img/gd/branding/SVR-logos-web.jpg",
    "",
    ""
)

gdb6 = new myWork 
(
    "img/gd/branding/stationary-layout-web.jpg",
    "",
    ""
)

gdb7 = new myWork 
(
    "img/gd/branding/brochure-layout-web.jpg",
    "",
    ""
)
var gdbAry = [gdb1, gdb2, gdb3, gdb4, gdb5, gdb6, gdb7];
var gdb = document.getElementById('gdbThumbs');

for (var i=0; i < gdbAry.length; i++)
{
    gdb.innerHTML += `<img onclick="openImg(this)" src=${gdbAry[i].src} alt="${gdbAry[i].title}">`;
    console.log(gdbAry[i].src)
};

//********************************************************//
//************ GRAPHIC DESIGN BRANDING SECTION ***********//
//************************ END ***************************//
//********************************************************//


//********************************************************//
//************* GRAPHIC DESIGN MANIP SECTION *************//
//********************************************************//
gdm1 = new myWork
(
    "img/gd/manip/american-taco-web.jpg",
    "",
    ""
)

gdm2 = new myWork
(
    "img/gd/manip/headless-taco.jpg",
    "",
    ""
)

gdm3 = new myWork
(
    "img/gd/manip/givemetacos-web.jpg",
    "",
    ""
)

gdm4 = new myWork
(
    "img/gd/manip/ItsATaco-web.jpg",
    "",
    ""
)

gdm5 = new myWork
(
    "img/gd/manip/sop_bogwater_final.jpg",
    "",
    ""
)

gdm6 = new myWork
(
    "img/gd/manip/croc-web.jpg",
    "",
    ""
)

gdm7 = new myWork
(
    "img/gd/manip/TS_wonderland.jpg",
    "",
    ""
)

gdm8 = new myWork
(
    "img/gd/manip/bootdaddy-web.jpg",
    "",
    ""
)

gdm9 = new myWork
(
    "img/gd/manip/creekfun-web.jpg",
    "",
    ""
)

gdm10 = new myWork
(
    "img/gd/manip/mike_tattoo_close.jpg",
    "",
    ""
)

gdm11 = new myWork
(
    "img/gd/manip/landscape-final.jpg",
    "",
    ""
)

var gdmAry = [gdm1, gdm2, gdm3, gdm4, gdm5, gdm6, gdm7, gdm8, gdm9, gdm10, gdm11]
var gdm = document.getElementById('gdmThumbs');

for (var i=0; i < gdmAry.length; i++)
{
    gdm.innerHTML += `<img onclick="openImg(this)" src=${gdmAry[i].src} alt="${gdmAry[i].title}">`;
    console.log(gdmAry[i].src)
};

//********************************************************//
//************* GRAPHIC DESIGN MANIP SECTION *************//
//************************ END ***************************//
//********************************************************//


//********************************************************//
//****************** PHOTOGRAPHY SECTION *****************//
//********************************************************//
pht1 = new myWork
(
    "img/land/Upper_Indian_Creek_32x40.jpg",
    "",
    ""
)

pht2 = new myWork
(
    "img/land/BigBluffOverlook_48x32.jpg",
    "",
    ""
)

pht3 = new myWork
(
    "img/land/ElevenPointSunset_48x30.jpg",
    "",
    ""
)

pht4 = new myWork
(
    "img/land/SOP-Gallery-30.jpg",
    "",
    ""
)

pht5 = new myWork
(
    "img/land/SOP_Gallery-15.jpg",
    "",
    ""
)

pht6 = new myWork
(
    "img/land/SOP_Gallery-10.jpg",
    "",
    ""
)

pht7 = new myWork
(
    "img/land/RockyCreek_48x32.jpg",
    "",
    ""
)

pht8 = new myWork
(
    "img/land/RiseAndShine_48x30.jpg",
    "",
    ""
)

pht9 = new myWork
(
    "img/land/MiddleOfKings_32x40.jpg",
    "",
    ""
)

pht10 = new myWork
(
    "img/land/Middle_Indian_Creek_30x42.jpg",
    "",
    ""
)

pht11 = new myWork
(
    "img/land/LookingOver_30x42.jpg",
    "",
    ""
)

pht12 = new myWork
(
    "img/land/AsItFlowsAtGreer_48x27.jpg",
    "",
    ""
)

pht13 = new myWork
(
    "img/macro/wildflower.jpg",
    "",
    ""
)

pht14 = new myWork
(
    "img/macro/wet_leaf.jpg",
    "",
    ""
)

pht15 = new myWork
(
    "img/macro/wet_hosta.jpg",
    "",
    ""
)

pht16 = new myWork
(
    "img/macro/the_cat.jpg",
    "",
    ""
)

pht17 = new myWork
(
    "img/macro/SOP_Gallery-5.jpg",
    "",
    ""
)

pht18 = new myWork
(
    "img/macro/foxfire_log.jpg",
    "",
    ""
)

pht19 = new myWork
(
    "img/macro/CR-jan-19.jpg",
    "",
    ""
)

pht20 = new myWork
(
    "img/macro/CR-jan-2.jpg",
    "",
    ""
)

pht21 = new myWork
(
    "img/food/SOP-Gallery-58.jpg",
    "",
    ""
)

pht22 = new myWork
(
    "img/food/SOP_Gallery-19.jpg",
    "",
    ""
)

pht23 = new myWork
(
    "img/food/SOP_Gallery-18.jpg",
    "",
    ""
)

pht24 = new myWork
(
    "img/food/sop_drinks-4.jpg",
    "",
    ""
)

pht25 = new myWork
(
    "img/food/R&D_march4-2.jpg",
    "",
    ""
)

pht26 = new myWork
(
    "img/food/Aefter-may-4.jpg",
    "",
    ""
)

pht27 = new myWork
(
    "img/food/AefterDinner_march31-23.jpg",
    "",
    ""
)

pht28 = new myWork
(
    "img/food/Aefter-may-54.jpg",
    "",
    ""
)

pht29 = new myWork
(
    "img/food/Aefter-may-36.jpg",
    "",
    ""
)

pht30 = new myWork
(
    "img/food/Aefter-may-20.jpg",
    "",
    ""
)

var phtAry = [pht1, pht2, pht3, pht4, pht5, pht6, pht7, pht8, pht9, pht10, pht11, pht12, pht13, pht14, pht15, pht16, pht17, pht18, pht19, pht20, pht21, pht22, pht23, pht24, pht25, pht26, pht27, pht28, pht29, pht30];
var pht = document.getElementById('phtThumbs');

for (var i=0; i < phtAry.length; i++)
{
    pht.innerHTML += `<img onclick="openImg(this)" src=${phtAry[i].src} alt="${phtAry[i].title}">`;
    console.log(phtAry[i].src)
};
//********************************************************//
//****************** PHOTOGRAPHY SECTION *****************//
//************************ END ***************************//
//********************************************************//

var web = document.getElementById('webThumbs');



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
