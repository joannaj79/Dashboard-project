!function(e){var n={};function t(o){if(n[o])return n[o].exports;var i=n[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,t),i.l=!0,i.exports}t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var i in e)t.d(o,i,function(n){return e[n]}.bind(null,i));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){t(1),t(5)},function(e,n,t){var o=t(2),i=t(3);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var r={insert:"head",singleton:!1};o(i,r);e.exports=i.locals||{}},function(e,n,t){"use strict";var o,i=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},r=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),a=[];function s(e){for(var n=-1,t=0;t<a.length;t++)if(a[t].identifier===e){n=t;break}return n}function c(e,n){for(var t={},o=[],i=0;i<e.length;i++){var r=e[i],c=n.base?r[0]+n.base:r[0],d=t[c]||0,l="".concat(c," ").concat(d);t[c]=d+1;var p=s(l),f={css:r[1],media:r[2],sourceMap:r[3]};-1!==p?(a[p].references++,a[p].updater(f)):a.push({identifier:l,updater:g(f,n),references:1}),o.push(l)}return o}function d(e){var n=document.createElement("style"),o=e.attributes||{};if(void 0===o.nonce){var i=t.nc;i&&(o.nonce=i)}if(Object.keys(o).forEach((function(e){n.setAttribute(e,o[e])})),"function"==typeof e.insert)e.insert(n);else{var a=r(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}return n}var l,p=(l=[],function(e,n){return l[e]=n,l.filter(Boolean).join("\n")});function f(e,n,t,o){var i=t?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(e.styleSheet)e.styleSheet.cssText=p(n,i);else{var r=document.createTextNode(i),a=e.childNodes;a[n]&&e.removeChild(a[n]),a.length?e.insertBefore(r,a[n]):e.appendChild(r)}}function x(e,n,t){var o=t.css,i=t.media,r=t.sourceMap;if(i?e.setAttribute("media",i):e.removeAttribute("media"),r&&btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var b=null,u=0;function g(e,n){var t,o,i;if(n.singleton){var r=u++;t=b||(b=d(n)),o=f.bind(null,t,r,!1),i=f.bind(null,t,r,!0)}else t=d(n),o=x.bind(null,t,n),i=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return o(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;o(e=n)}else i()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=i());var t=c(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var o=0;o<t.length;o++){var i=s(t[o]);a[i].references--}for(var r=c(e,n),d=0;d<t.length;d++){var l=s(t[d]);0===a[l].references&&(a[l].updater(),a.splice(l,1))}t=r}}}},function(e,n,t){(n=t(4)(!1)).push([e.i,'body{margin-top:75px;box-sizing:border-box;background-color:#e3e7e6}.navbarContainer{width:100%;background-color:#fff;position:fixed;top:0;z-index:1}.navbarList{margin:0;list-style:none;height:50px;display:grid;grid-template-columns:repeat(20, 1fr);border:1px solid grey}.navbarListItem{display:flex;justify-content:center;align-items:center}.navbarListItem.offset{margin:5px;grid-column:span 12}.navbarListItem.wallet{grid-column:span 3;border-right:1px solid grey;width:100%;border-left:1px solid grey;color:#969696;font-weight:bold;font-size:16px;font-family:Arial}.navbarListItem.account{grid-column:span 3;border-right:1px solid grey;width:100%;border-left:1px solid grey;color:#b1bde7;font-size:14px;font-family:Arial}.navbarListItem.notification{grid-column:span 1;border-right:1px solid grey;width:100%}.navbarListItem.exit{grid-column:span 1;border-right:1px solid grey;width:100%}.navbarList .topbarIcon{width:16px;margin:5px;color:#a9a9a9}.sidebarContainer{position:fixed;top:0;background-color:#191919;color:#a9a9a9;z-index:1;height:100vh;width:13%}.sidebarContainer .logoContainer{display:flex;justify-content:space-around;align-items:center;height:50px}.sidebarContainer .logoContainer .logoItem{font-size:26px;font-family:cursive;color:#fff}.sidebarContainer .logoContainer .menuContainer{display:flex;align-items:center}.sidebarContainer .logoContainer .menuContainer .menu{width:20px}.sidebarContainer .sidebarList{padding:0;margin:0;margin-top:20px;border-bottom:1px solid #353535}.sidebarContainer .sidebarListItem{display:flex;justify-content:flex-start;align-items:space-between;border-left:5px solid transparent;cursor:pointer;padding:5px 10px 5px 30px;line-height:20px;margin-bottom:10px;font-family:Arial}.sidebarContainer .sidebarListItemLink{text-decoration:none;color:#a9a9a9}.sidebarContainer .sidebarListItem:hover{border-left:5px solid #ffa200;background-color:#353535;transition:0.8s}.sidebarContainer .sidebarListItem:hover .sidebarListItemLink{color:#fff}.sidebarContainer .sidebarListItem:hover .sidebarListItemIcon{filter:invert(100%) sepia(0%) saturate(5953%) hue-rotate(276deg) brightness(123%) contrast(113%)}.sidebarContainer .sidebarListItemIcon{margin-right:20px;width:16px;filter:invert(53%) sepia(5%) saturate(8%) hue-rotate(320deg) brightness(100%) contrast(89%)}.chatContainer{display:flex;justify-content:center;align-items:center}.chatContainer .chatImageContainer{position:relative;margin-right:15px}.chatContainer .greenDot{background-color:green;width:10px;height:10px;border-radius:50%;position:absolute;left:30px;top:0;display:inline-block}.sectionGeneralContainer{box-sizing:border-box;margin:15px 15px 15px 15%;width:80%;border:1px solid transparent;-webkit-box-shadow:0px 0px 20px 0px #e3e3e3;-moz-box-shadow:0px 0px 20px 0px #e3e3e3;box-shadow:0px 0px 20px 0px #e3e3e3;background-color:#fff}.sectionGeneralContainer .sectionGeneralHeader{border-bottom:1px solid #e3e3e3}.sectionGeneralContainer .sectionGeneralHeader h1{font-family:sans-serif;color:blue}.sectionGeneralContainer .sectionGeneralHeader .mainHeader{font-size:15px;color:#bababa;font-family:Verdana, Geneva, Tahoma, sans-serif;padding-bottom:5px;padding-left:20px;text-transform:uppercase}.sectionGeneralContainer .sectionGeneralCalender{border-bottom:1px solid #e3e3e3;display:flex;justify-content:center;align-items:center;min-height:100px;margin-bottom:50px}.sectionGeneralContainer .sectionGeneralCalenderItem{width:300px;border:1px solid #a9a9a9;border-radius:2px;min-height:35px;display:flex;justify-content:space-around;align-items:center;margin-right:10px}.sectionGeneralContainer .sectionGeneralCalenderItem .date{margin:0;padding:5px}.sectionGeneralContainer .sectionGeneralCalenderItem .vertical-line{border-right:1px solid #a9a9a9;height:25px;width:1px}.sectionGeneralContainer .sectionGeneralCalenderItem .Icon{width:17px;height:17px}.sectionGeneralContainer .sectionGeneralCalenderButton{width:40px;height:40px;background:#ffa200;border:none;border-radius:5px;display:flex;justify-content:center;align-items:center}.sectionGeneralContainer .sectionGeneralCalenderButton .Icon{width:17px;height:17px}.sectionGeneralStatistics{display:flex;justify-content:center;align-items:center;width:100%}.sectionGeneralStatisticsContainer{display:flex;justify-content:space-between;align-items:center;width:25%;margin:0 3%;border-bottom:1px solid #e3e3e3}.sectionGeneralStatisticsContainer .stats{padding:5px}.sectionGeneralStatisticsContainer .Icon{width:17px;height:17px}.sectionGeneralStatisticsChart{width:80%;margin:50px auto}.sectionGeneralStatisticsChart .headerTwo{font-size:13px;color:#bababa;font-family:Verdana, Geneva, Tahoma, sans-serif}.sectionLinksContainer{box-sizing:border-box;margin:15px 15px 15px 15%;width:80%;border:1px solid transparent;-webkit-box-shadow:0px 0px 20px 0px #e3e3e3;-moz-box-shadow:0px 0px 20px 0px #e3e3e3;box-shadow:0px 0px 20px 0px #e3e3e3;background-color:#fff}.sectionLinksContainer .sectionLinksHeader{border-bottom:1px solid #e3e3e3}.sectionLinksContainer .sectionLinksHeader .mainHeader{font-size:15px;color:#bababa;font-family:Verdana, Geneva, Tahoma, sans-serif;padding-bottom:5px;padding-left:20px;text-transform:uppercase}.sectionLinksContainer .sectionLinksContent{display:flex;flex-direction:column;justify-content:center;align-items:center}.sectionLinksContainer .sectionLinksContent:hover .Icon .link .sectionLinksContainer .sectionLinksContentitem{background-color:green;filter:grey}.sectionLinksContainer .sectionLinksContent .button{width:40px;height:40px;background:#ffa200;border:none;border-radius:5px;display:flex;justify-content:center;align-items:center;width:120px;color:#fff;margin-top:10px;margin-bottom:10px}.sectionLinksContainer .sectionLinksContentItem{display:grid;grid-template-columns:repeat(5, 1fr);justify-content:center;align-items:center;border-top:1px solid #e3e3e3;width:60%;margin:0 auto}.sectionLinksContainer .sectionLinksContentItem.twitterLine{border-bottom:1px solid #e3e3e3}.sectionLinksContainer .sectionLinksContentItem .headerTwo{font-size:13px;color:#bababa;font-family:Verdana, Geneva, Tahoma, sans-serif;grid-column:span 1}.sectionLinksContainer .sectionLinksContentItem .link{grid-column:span 3;padding-left:50px;color:#56819f;text-decoration:none}.sectionLinksContainer .sectionLinksContentItem .link:hover{color:orange}.sectionLinksContainer .sectionLinksContentItem .icons{grid-column:span 1}.sectionLinksContainer .sectionLinksContentItem:hover .Icon{opacity:1}.sectionLinksContainer .sectionLinksContent .Icon{width:17px;opacity:0;padding:20px;cursor:pointer;filter:invert(53%) sepia(5%) saturate(8%) hue-rotate(320deg) brightness(100%) contrast(89%)}.sectionLinksContainer .sectionLinksContent .Icon:hover{filter:invert(71%) sepia(25%) saturate(6461%) hue-rotate(341deg) brightness(94%) contrast(104%)}.personalDataContainer{box-sizing:border-box;margin:15px 15px 15px 15%;width:82%;border:1px solid transparent;-webkit-box-shadow:0px 0px 20px 0px #e3e3e3;-moz-box-shadow:0px 0px 20px 0px #e3e3e3;box-shadow:0px 0px 20px 0px #e3e3e3;background-color:#fff;padding-top:10px;z-index:-1}.personalDataContainer .button{width:40px;height:40px;background:#ffa200;border:none;border-radius:5px;display:flex;justify-content:center;align-items:center;width:120px;color:#fff;margin-top:25px;margin-bottom:25px;margin-left:550px}.personalDataContainer .personalHeader{border-bottom:1px solid #e3e3e3}.personalDataContainer .personalHeader .mainHeader{font-size:15px;color:#bababa;font-family:Verdana, Geneva, Tahoma, sans-serif;padding-bottom:5px;padding-left:20px;text-transform:uppercase}.personalDataContainer .personalDataContent{display:flex;flex-direction:column;justify-content:space-between;align-items:center;border-bottom:1px solid #e3e3e3;padding-top:12px;padding-bottom:12px}.personalDataContainer .personalDataContentRow{display:flex;flex-direction:row;justify-content:flex-start;align-items:center;width:40%;margin:15px 0}.personalDataContainer .personalDataContentRowLabel{width:40%;font-size:14px;color:#bababa;font-family:Verdana, Geneva, Tahoma, sans-serif}.personalDataContainer .personalDataContentRow .formInput{border-radius:5px;border-color:none;height:35px;width:500px;padding-left:20px;font-family:"Roboto" sans-serif;font-size:14px;font-weight:solid;color:#bababa;border:1px solid;cursor:text;opacity:0.9}.sectionLinksContainer{box-sizing:border-box;margin:15px 15px 15px 15%;width:80%;border:1px solid transparent;-webkit-box-shadow:0px 0px 20px 0px #e3e3e3;-moz-box-shadow:0px 0px 20px 0px #e3e3e3;box-shadow:0px 0px 20px 0px #e3e3e3;background-color:#fff}.sectionLinksContainer .sectionLinksHeader{border-bottom:1px solid #e3e3e3}.sectionLinksContainer .sectionLinksHeader .mainHeader{font-size:15px;color:#bababa;font-family:Verdana, Geneva, Tahoma, sans-serif;padding-bottom:5px;padding-left:20px;text-transform:uppercase}.sectionLinksContainer .sectionLinksContent{display:flex;flex-direction:column;justify-content:center;align-items:center}.sectionLinksContainer .sectionLinksContent:hover .Icon .link .sectionLinksContainer .sectionLinksContentitem{background-color:green;filter:grey}.sectionLinksContainer .sectionLinksContent .button{width:40px;height:40px;background:#ffa200;border:none;border-radius:5px;display:flex;justify-content:center;align-items:center;width:120px;color:#fff;margin-top:10px;margin-bottom:10px}.sectionLinksContainer .sectionLinksContentItem{display:grid;grid-template-columns:repeat(5, 1fr);justify-content:center;align-items:center;border-top:1px solid #e3e3e3;width:60%;margin:0 auto}.sectionLinksContainer .sectionLinksContentItem.twitterLine{border-bottom:1px solid #e3e3e3}.sectionLinksContainer .sectionLinksContentItem .headerTwo{font-size:13px;color:#bababa;font-family:Verdana, Geneva, Tahoma, sans-serif;grid-column:span 1}.sectionLinksContainer .sectionLinksContentItem .link{grid-column:span 3;padding-left:50px;color:#56819f;text-decoration:none}.sectionLinksContainer .sectionLinksContentItem .link:hover{color:orange}.sectionLinksContainer .sectionLinksContentItem .icons{grid-column:span 1}.sectionLinksContainer .sectionLinksContentItem:hover .Icon{opacity:1}.sectionLinksContainer .sectionLinksContent .Icon{width:17px;opacity:0;padding:20px;cursor:pointer;filter:invert(53%) sepia(5%) saturate(8%) hue-rotate(320deg) brightness(100%) contrast(89%)}.sectionLinksContainer .sectionLinksContent .Icon:hover{filter:invert(71%) sepia(25%) saturate(6461%) hue-rotate(341deg) brightness(94%) contrast(104%)}.tableContainer{width:80%;border-collapse:collapse;margin:0 auto}.tableHeader{text-align:center;border-bottom:1px solid #e3e3e3}.tableBody{text-align:center}.tableRow{border-bottom:1px solid #e3e3e3}.tableRow:hover{background-color:#e3e3e3;transition:0.7s ease-in}.tableRow :nth-child(n){padding:20px 0}.pagination{display:flex;justify-content:center;align-items:center;padding:20px 0}.pagination a{color:black;padding:8px 16px;text-decoration:none}.pagination a:hover{color:orange;cursor:pointer}.pagination a.active{background-color:grey}.paginationIcon{width:15px;height:15px;display:flex;align-items:center}.paginationIcon:hover{color:orange;cursor:pointer}.postbackContainer,.statusArea{width:95%;display:grid;grid-template-columns:repeat(2, 1fr);grid-gap:20px;margin:0 auto}.postbackTextarea{resize:none;width:100%}.postbackHeader,.selectionHeader{text-align:left}.selectionArea{width:95%;display:grid;grid-template-columns:repeat(3, 1fr);grid-gap:20px;margin:0 auto}.selectionType{width:100%;height:40px}.statusContainer{height:150px;overflow-y:scroll}\n',""]),e.exports=n},function(e,n,t){"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=function(e,n){var t=e[1]||"",o=e[3];if(!o)return t;if(n&&"function"==typeof btoa){var i=(a=o,s=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(c," */")),r=o.sources.map((function(e){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(e," */")}));return[t].concat(r).concat([i]).join("\n")}var a,s,c;return[t].join("\n")}(n,e);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,o){"string"==typeof e&&(e=[[null,e,""]]);var i={};if(o)for(var r=0;r<this.length;r++){var a=this[r][0];null!=a&&(i[a]=!0)}for(var s=0;s<e.length;s++){var c=[].concat(e[s]);o&&i[c[0]]||(t&&(c[2]?c[2]="".concat(t," and ").concat(c[2]):c[2]=t),n.push(c))}},n}},function(e,n){var t=document.getElementById("myChart").getContext("2d");new Chart(t,{type:"bar",data:{labels:["01","02","03","04","05","06","07","08","09","10"],datasets:[{label:"Signups",backgroundColor:"#8DBEC8",borderColor:"#8DBEC8",data:[52,51,41,94,26,6,72,9,21,88]},{label:"FTD",backgroundColor:"#F29E4E",borderColor:"#F29E4E",data:[6,72,1,0,47,11,50,44,63,76]},{label:"Earned",backgroundColor:"#71B374",borderColor:"#71B374",data:[59,49,68,90,67,41,13,38,48,48],hidden:!0}]},options:{legend:{display:!0,labels:{usePointStyle:!0,fontFamily:"Roboto",fontSize:15}}}})}]);
//# sourceMappingURL=bundle.js.map