
//DINAMICKI ISPIS UL LISTE

var liValue=["", "New arrivals", "About", "Locations", "Contact", "Documentation"];
var liHref=["", "#portfolio", "#about", "#team", "#contact", "documentation.pdf"];

var ulList=document.getElementById("bs-example-navbar-collapse-1");
var tagUl=document.createElement("ul");
tagUl.classList.add("nav");
tagUl.classList.add("navbar-nav");
tagUl.classList.add("navbar-right");

for(var i=0; i<liValue.length; i++){
    var tagLi=document.createElement("li");
    var tagA=document.createElement("a");
    if(i==0){
        tagLi.classList.add("hidden");
        tagA.classList.add("#page-top");
    }
    else{
        tagA.classList.add("page-scroll");
        tagA.setAttribute("href", liHref[i]);
    }
        var textTagA=document.createTextNode(liValue[i]);
         tagA.appendChild(textTagA);
         tagLi.appendChild(tagA);    
         tagUl.appendChild(tagLi);
}

ulList.appendChild(tagUl);

//LOCATIONS

var arrayLocImg=["images/city1.jpg", "images/city2.png", "images/city3.png"];
var arrayLocAlt=["loc1", "loc2", "loc3"];
var arrayH3=["BELGRADE", "MADRID", "PARIS"];
var arrayId=["buttonFade", "buttonFade1", "buttonFade2"];
var arrayDivT=["-Interested in address? Click and see-", "-Click here-","-Interested in address? Click to view-"]
var arrayP=["textFade", "textFade1", "textFade2"];
var arrayPt=["Bulevar Vojvode Mišića (street in Belgrade) - Savski venac", "Gran Vía boulevard - street perfect just for shopping", "Rue Vieille Du Temple - store located in the famous shopping street"];

var locID=document.getElementById("loc");
for(k=0; k<arrayLocImg.length; k++){

var locDivD=document.createElement("div");
locDivD.classList.add("col-md-4");
var locDivD1=document.createElement("div");
locDivD1.classList.add("team-item");
var locDivD2=document.createElement("div");
locDivD2.classList.add("team-image");
var locDivImg=document.createElement("img");
locDivImg.setAttribute("src", arrayLocImg[k]);
locDivImg.classList.add("img-responsive");
locDivImg.classList.add("center-block");
locDivImg.setAttribute("alt", arrayLocAlt[k]);
var locDivD3=document.createElement("div");
locDivD3.classList.add("team-text");
var locH3=document.createElement("h3");
var loch3P=document.createTextNode(arrayH3[k]);
locH3.appendChild(loch3P);
var locDivD4=document.createElement("div");
locDivD4.classList.add("team-position");
locDivD4.setAttribute("id", arrayId[k])
var locDivText=document.createTextNode(arrayDivT[k]);
locDivD4.appendChild(locDivText);
var locDivP=document.createElement("p");
locDivP.setAttribute("id", arrayP[k]);
var locPText=document.createTextNode(arrayPt[k]);
locDivP.appendChild(locPText);

locDivD2.appendChild(locDivImg);
locDivD1.appendChild(locDivD2);
locDivD3.appendChild(locH3);
locDivD3.appendChild(locDivD4);
locDivD3.appendChild(locDivP);
locDivD1.appendChild(locDivD3);
locDivD.appendChild(locDivD1);
locID.appendChild(locDivD);

}

//PORTFOLIO

var arrayPh3=["Web Development", "Visualisation", "Photography", "UI/UX Design"];
var arrayFaFa=["fa-briefcase", "fa-photo", "fa-camera-retro", "fa-cube"];

var iconsID=document.getElementById("blackIcons");
     for(var p=0; p<arrayPh3.length; p++){
var iconsDiv1=document.createElement("div");
iconsDiv1.classList.add("col-md-3");
iconsDiv1.classList.add("col-0-gutter");
iconsDiv1.classList.add("mz-about-default");
iconsDiv1.classList.add("text-center");
iconsID.appendChild(iconsDiv1);
var iconsDiv2=document.createElement("div");
iconsDiv2.classList.add("mz-module-about");
iconsDiv1.appendChild(iconsDiv2);
var iconsI=document.createElement("i");
iconsI.classList.add("fa");
iconsI.classList.add(arrayFaFa[p]);
iconsI.classList.add("ot-circle");
iconsDiv2.appendChild(iconsI);
var iconsH3=document.createElement("h3");
var iconsText=document.createTextNode(arrayPh3[p]);
iconsH3.appendChild(iconsText);
iconsDiv2.appendChild(iconsH3);

}


//FOOTER-LI

var arrayFHref=["https://www.facebook.com/FurnitureGallery.gr","https://www.instagram.com/furnituregallery59/", "https://www.linkedin.com/in/marija-vucicevic-6692671b2/", "sitemap.xml", "rss.xml"];
var arrayClass=["fa-facebook", "fa-instagram", "fa-linkedin", "fa-sitemap", "fa-rss"];

var footerID=document.getElementById("liLI2");
var footerUl=document.createElement("ul");
footerUl.setAttribute("id", "liLI");
footerID.appendChild(footerUl);
      for(var a=0; a<arrayFHref.length; a++){
var footerLi=document.createElement("li");
footerUl.appendChild(footerLi);
var footerA=document.createElement("a");
footerA.setAttribute("href", arrayFHref[a]);
footerA.setAttribute("target", "_blank");
footerLi.appendChild(footerA);
var footerI=document.createElement("i");
footerI.classList.add("fa");
footerI.classList.add(arrayClass[a]);
footerA.appendChild(footerI);

}
