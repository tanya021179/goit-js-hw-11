import{i as d,S as f}from"./assets/vendor-5ObWk2rO.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const p="47379465-d19c322484d0cfa984d66258f",m=document.querySelector(".js-form"),i=document.querySelector(".gallery"),l=document.querySelector(".form-search"),c=document.querySelector(".loader");m.addEventListener("submit",h);function h(n){n.preventDefault(),console.log("handel ok");const o=l.value.trim();if(!o)return;l.value="",c.classList.add("visible"),console.log("loader ok");const s=new URLSearchParams({key:p,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0});fetch(`https://pixabay.com/api/?${s}`).then(r=>{if(!r.ok)throw new Error(r.statusText);return r.json()}).then(r=>{if(i.innerHTML="",r.hits.length===0){d.error({msg:"Sorry, there are no images matching your search query. Please, try again!"});return}i.insertAdjacentHTML("beforeend",y(r.hits)),new f(".gallery a").refresh()}).catch(r=>{console.log(r)}).finally(()=>{c.classList.remove("visible"),console.log("loader ok ok")})}function y(n){return n.map(({webformatURL:o,largeImageURL:s,tags:r,likes:e,views:t,comments:a,downloads:u})=>`
      <li class="gallery-item">
      <a class="gallery-link" href="${s}">   
      <img class="gallery-image" src="${o}" alt="${r}" width="360"/>
      </a>
      <div class="facts">
      <p>Likes: <spaan>${e}</spaan></p>
      <p>Views: <spaan>${t}</spaan></p>
      <p>Comments: <spaan>${a}</spaan></p>
      <p>Downloads: <spaan>${u}</spaan></p>
      </div>
      </li>
    `).join("")}
//# sourceMappingURL=index.js.map
