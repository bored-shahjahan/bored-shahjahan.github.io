(function(){var $=function(i){return document.getElementById(i)},E="shahjahan.adeel.aslam01@gmail.com",R=document.documentElement;
var K="cookie-consent",b=$("cookie-banner");
function g(k){try{return localStorage.getItem(k)}catch(e){return null}}function p(k,v){try{localStorage.setItem(k,v)}catch(e){}}
function s(v){p(K,v);b.hidden=true;if(v==="accepted"&&window.onConsentAccepted)window.onConsentAccepted()}
if(!g(K))b.hidden=false;else if(g(K)==="accepted"&&window.onConsentAccepted)window.onConsentAccepted();
$("cb-accept").onclick=function(){s("accepted")};$("cb-reject").onclick=function(){s("rejected")};
[].forEach.call(document.querySelectorAll(".open-cookie-settings"),function(x){x.onclick=function(){b.hidden=false;$("cb-accept").focus()}});
var tb=$("theme-btn");function dark(){var t=R.dataset.theme;return t?t==="dark":matchMedia("(prefers-color-scheme: dark)").matches}
function sync(){var d=dark();tb.setAttribute("aria-pressed",d);tb.setAttribute("aria-label",d?"Switch to light theme":"Switch to dark theme")}
tb.onclick=function(){var n=dark()?"light":"dark";R.dataset.theme=n;p("theme",n);sync()};sync();
var mb=$("menu-btn"),nv=$("nav");mb.onclick=function(){var o=nv.classList.toggle("open");mb.setAttribute("aria-expanded",o)};
nv.onclick=function(e){if(e.target.tagName==="A"){nv.classList.remove("open");mb.setAttribute("aria-expanded",false)}};
document.addEventListener("keydown",function(e){if(e.key==="Escape"){nv.classList.remove("open");mb.setAttribute("aria-expanded",false)}});
var tp=$("top-btn");addEventListener("scroll",function(){tp.hidden=scrollY<600},{passive:true});tp.onclick=function(){scrollTo({top:0,behavior:matchMedia("(prefers-reduced-motion: reduce)").matches?"auto":"smooth"})};
var ids=["about","projects","contact"],links=nv.querySelectorAll("a");
if("IntersectionObserver"in window){
 var spy=new IntersectionObserver(function(es){es.forEach(function(en){if(en.isIntersecting)[].forEach.call(links,function(a){a.removeAttribute("aria-current");if(a.getAttribute("href").slice(-en.target.id.length-1)==="#"+en.target.id)a.setAttribute("aria-current","true")})})},{rootMargin:"-40% 0px -55% 0px"});
 ids.forEach(function(i){if($(i))spy.observe($(i))});
 var rv=new IntersectionObserver(function(es){es.forEach(function(en){if(en.isIntersecting){en.target.classList.add("in");rv.unobserve(en.target)}})},{threshold:.12});
 [].forEach.call(document.querySelectorAll(".reveal"),function(x){rv.observe(x)})}else{[].forEach.call(document.querySelectorAll(".reveal"),function(x){x.classList.add("in")})}
var hero=document.querySelector(".hero");if(hero)hero.addEventListener("mousemove",function(e){var r=hero.getBoundingClientRect();hero.style.setProperty("--mx",e.clientX-r.left+"px");hero.style.setProperty("--my",e.clientY-r.top+"px")});
[].forEach.call(document.querySelectorAll("[data-copy]"),function(x){var t=x.textContent;x.onclick=function(){var v=x.getAttribute("data-copy");function ok(){x.textContent="Copied";setTimeout(function(){x.textContent=t},1800)}
 if(navigator.clipboard)navigator.clipboard.writeText(v).then(ok,function(){location.href="mailto:"+v});else location.href="mailto:"+v}});
var P=window.PROJECTS||[],grid=$("grid");
if(grid){$("proj-count").textContent=P.length;var act="All",q="";
 function draw(){grid.textContent="";var n=0;P.forEach(function(x){var hay=(x.title+" "+x.description+" "+(x.tools||[]).join(" ")).toLowerCase();if((act==="All"||(x.tags||[]).indexOf(act)>-1)&&hay.indexOf(q)>-1){n++;
  var c=document.createElement("article");c.className="pcard";var h=document.createElement("h3");h.textContent=x.title;var d=document.createElement("p");d.textContent=x.description;c.appendChild(h);c.appendChild(d);
  var tg=document.createElement("div");tg.className="tags";(x.tags||[]).concat(x.tools||[]).forEach(function(t){var s=document.createElement("span");s.className="tag";s.textContent=t;tg.appendChild(s)});c.appendChild(tg);
  if(/^https:\/\//.test(x.url||"")){var a=document.createElement("a");a.href=x.url;a.rel="noopener";a.textContent="View "+x.title;c.appendChild(a)}grid.appendChild(c)}});
  $("empty").hidden=P.length>0;if(P.length&&!n){$("empty").hidden=false;$("empty").textContent="No projects match. Clear the search or choose All."}}
 if(P.length){var tags=["All"];P.forEach(function(x){(x.tags||[]).forEach(function(t){if(tags.indexOf(t)<0)tags.push(t)})});var f=$("filters");f.hidden=false;$("q").hidden=false;
  tags.forEach(function(t){var c=document.createElement("button");c.type="button";c.className="chip";c.textContent=t;c.setAttribute("aria-pressed",t==="All");c.onclick=function(){act=t;[].forEach.call(f.children,function(k){k.setAttribute("aria-pressed",k===c)});draw()};f.appendChild(c)});
  $("q").oninput=function(){q=this.value.toLowerCase();draw()}}
 draw()}
var fm=$("contact-form");if(fm){var m=fm.m,cn=$("m-c");m.oninput=function(){cn.textContent=m.value.length+" / 1000"};
 function er(i,t){$(i).textContent=t}
 fm.onsubmit=function(ev){ev.preventDefault();var ok=true;er("n-e","");er("e-e","");er("m-e","");er("c-e","");
  if(!fm.n.value.trim()){er("n-e","Enter your name.");ok=false}
  if(!/^\S+@\S+\.\S+$/.test(fm.e.value.trim())){er("e-e","Enter a valid email address, like name@example.com.");ok=false}
  if(!m.value.trim()){er("m-e","Write a message.");ok=false}
  if(!fm.c1.checked||!fm.c2.checked){er("c-e","Tick both boxes to continue.");ok=false}
  if(!ok){var first=fm.querySelector(".err:not(:empty)");if(first&&first.previousElementSibling&&first.previousElementSibling.focus)first.previousElementSibling.focus();return}
  $("status").textContent="Your email app should open now. If it does not, copy my address and write to me there.";
  location.href="mailto:"+E+"?subject="+encodeURIComponent("Message from "+fm.n.value.trim())+"&body="+encodeURIComponent(m.value+"\n\n"+fm.n.value.trim()+" ("+fm.e.value.trim()+")")}}})();