window.onload=function(){var t,e=document.querySelector("[data-start]"),n=document.querySelector("[data-stop]"),o=document.querySelector("body");e.addEventListener("click",(function(){t=setInterval((function(){var t=`#${Math.floor(16777215*Math.random()).toString(16)}`;o.style.backgroundColor=t}),1e3),e.disabled=!0})),n.addEventListener("click",(function(){clearInterval(t),e.disabled=!1}))};
//# sourceMappingURL=01-color-switcher.99adb7d8.js.map
