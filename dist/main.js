(()=>{"use strict";const e=function(){const e=document.querySelector(".main");e.textContent="",e.appendChild(function(){const e=document.createElement("div"),t=document.createElement("p");t.textContent="THE BEST PIZZA",t.classList.add("heading-home");const n=document.createElement("p");n.textContent="Low Carb and Crunchy",n.classList.add("text-home");const a=document.createElement("p");a.textContent="Order online now or visit us",a.classList.add("text-home");const o=document.createElement("p");o.textContent="Since 2020",o.classList.add("text-home"),e.classList.add("home-section");const c=document.createElement("img");return c.src="images/home.jpg",c.alt="Pizza",e.appendChild(t),e.appendChild(c),e.appendChild(n),e.appendChild(a),e.appendChild(o),e}())};function t(e,t){const n=document.createElement("div");n.classList.add("card-container");const a=document.createElement("h3");a.textContent=e;const o=document.createElement("p");o.textContent=t;const c=document.createElement("img");return c.src=`images/${e.toLowerCase()}.jpg`,c.alt=`${e}`,n.appendChild(c),n.appendChild(a),n.appendChild(o),n}function n(){const n=document.createElement("header");n.classList.add("header");const o=document.createElement("p");return o.textContent="The Roman",o.classList.add("heading"),n.appendChild(o),n.appendChild(function(){const n=document.createElement("div");n.classList.add("tab-section");const o=document.createElement("button");o.classList.add("button-tab"),o.classList.add("home"),o.textContent="Home",o.addEventListener("click",(()=>{o.classList.contains("active")||(a(o),e())}));const c=document.createElement("button");c.classList.add("button-tab"),c.textContent="Contact",c.addEventListener("click",(()=>{c.classList.contains("active")||(a(c),function(){const e=document.querySelector(".main");e.textContent="",e.appendChild(function(){const e=document.createElement("div");e.classList.add("contact");const t=document.createElement("div");t.classList.add("card-contact");const n=document.createElement("h2"),a=document.createElement("p");n.textContent="Contact",a.textContent="+51 999 999 999",t.appendChild(n),t.appendChild(a);const o=document.createElement("div");o.classList.add("card-contact");const c=document.createElement("h2"),d=document.createElement("div");c.textContent="Location",d.innerHTML='<div class="mapouter"><div class="gmap_canvas"><iframe width="670" height="468" id="gmap_canvas" \n    src="https://maps.google.com/maps?q=Prolongaci%C3%B3n%20Primavera%202390,%20Lima%2015023&t=&z=17&ie=UTF8&iwloc=&output=embed" \n    frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://2piratebay.org"></a><br>\n    <style>.mapouter{position:relative;height:468px;width:670px;}</style><a href="https://www.embedgooglemap.net">using google maps on your website</a><style>.gmap_canvas\n    {overflow:hidden;background:none!important;height:468px;width:670px;}</style></div></div>',o.appendChild(c),o.appendChild(d);const i=document.createElement("div");i.classList.add("card-contact");const s=document.createElement("h2"),l=document.createElement("p");return s.textContent="Hours",l.textContent="Monday to Friday - 12:00 a 1:00",i.appendChild(s),i.appendChild(l),e.appendChild(t),e.appendChild(o),e.appendChild(i),e}())}())}));const d=document.createElement("button");return d.classList.add("button-tab"),d.textContent="Menu",d.addEventListener("click",(()=>{d.classList.contains("active")||(a(d),function(){const e=document.querySelector(".main");e.textContent="",e.appendChild(function(){const e=document.createElement("div");return e.classList.add("menu"),e.appendChild(t("Hawaiian","Lorem ipsum et al or lele lorem")),e.appendChild(t("Neapolitan","lorem ipsum")),e.appendChild(t("Cheese","lorem ipsum")),e.appendChild(t("Sicilian","lorem ipsum lorie")),e.appendChild(t("Pepperoni","lorem ipsum loriet")),e.appendChild(t("Greek","lorem ipsum")),e.appendChild(t("Chicago","lorem ipsum")),e.appendChild(t("Margherit","lorem ipsum loriet")),e}())}())})),n.appendChild(o),n.appendChild(c),n.appendChild(d),n}()),n}function a(e){console.log(e.textContent),document.querySelectorAll(".button-tab").forEach((e=>{console.log("im in"),e.classList.remove("active")})),e.classList.add("active")}!function(){const t=document.querySelector(".content");t.appendChild(n()),t.appendChild(function(){const e=document.createElement("main");return e.classList.add("main"),e}()),t.appendChild(function(){const e=document.createElement("footer");e.classList.add("footer");const t=document.createElement("p");t.textContent="Copyright © "+(new Date).getFullYear()+" jrenzzo";const n=document.createElement("a");n.href="https://github.com/jrenzzo";const a=document.createElement("i");return a.classList.add("fab"),a.classList.add("fa-github"),n.appendChild(a),e.appendChild(t),e.appendChild(n),e}()),a(document.querySelector(".home")),e()}()})();