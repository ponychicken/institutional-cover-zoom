var getUrlVars=function(){for(var e,t=[],r=window.location.href.slice(window.location.href.indexOf("?")+1).split("&"),s=0;s<r.length;s++)e=r[s].split("="),t.push(e[0]),t[e[0]]=e[1];return t},urlVars=getUrlVars();if("undefined"!=typeof urlVars.title)var coverTitle=atob(urlVars.title);else var coverTitle="Title was not passed";if("undefined"!=typeof urlVars.subtitle)var coverSubtitle=atob(urlVars.subtitle);else var coverSubtitle="Subtitle was not passed";document.querySelector("h1").innerText=coverTitle,document.querySelector("h2").innerText=coverSubtitle,$("h1").animate({scale:7},{step:function(e){$(this).css("-webkit-transform","scale("+e+")"),$(this).css("-moz-transform","scale("+e+")"),$(this).css("transform","scale("+e+")")},duration:1e5});