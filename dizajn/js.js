$(document).ready(function(){
// nakon malog tajmauta pokreni vaznije funkcije
$.paliOdma();
if(window.location.pathname.length>2)  $('#linkovi>ul>li>a[href$="'+location.pathname.substring(1).substring(location.pathname.substring(1).lastIndexOf("/")+1)+'"]').parent().addClass("trenutnaStranica");
// testis zona
/* 
$("#zaglavlje a img").hover( function(){$(this).fadeTo("slow",0.1);},
							 function(){$(this).fadeTo("slow",1);});
*/
$("#linkovi ul li").hover(	function(){$(this).children("a").children("span")
	.animate({backgroundColor:"#0066AA",float:"right",fontVariant:"small-caps"});},
							function(){$(this).children("a").children("span").css("background-color","#FFF");});

});
jQuery.extend({	// stare metode prebacene u $.namespace
paliOdma: function (){	// pokrice funkcije nakon $(document).ready();
// kozmetika
window.setTimeout("$.paliKasnije()",500);
},
paliKasnije: function(){
$.emajl();
$("table.zebra tbody tr:nth-child(odd)").css("background-color","#F0F0F0");

},

emajl: function(){  // <a class="emajl" href="user_nameATdomain">tekst linka</a>  >>>  mailto:user_name@domain
$("a.emajl").each(function(){
s=$(this).attr("href").indexOf("AT");
href=$(this).attr("href").substring(0,s)+"@"+$(this).attr("href").substring(s+2);
if(s>0) $(this).attr("href",("mailto:"+href));
if($(this).html()=="") $(this).html(href);});},
debag: function(msg,rplc){ // funkcija za debugiranje skripti, rplc -> zamjena poruke
 rplc ? $("#zagSredina").empty().append(msg) : $("#zagSredina").append(msg);},
engleski: function(){ // koji je jezik, POZIVATI KAO if($.engleski())...
if(window.location.href.indexOf("-en.")==-1) return 0;else return 1;}
// testis zona, dodaj zarez prije nove funkcije
});