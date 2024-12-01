import{i as u,S as p}from"./assets/vendor-BrddEoy-.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const d="47379465-d19c322484d0cfa984d66258f",m=s=>{const r=new URLSearchParams({key:d,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`https://pixabay.com/api/?${r}`).then(a=>{if(!a.ok)throw new Error(a.statusText);return a.json()})},l=s=>{u.error({message:s,messageColor:"#fafafb",backgroundColor:"#ef4040"})},h=(s,r)=>{if(s.innerHTML="",r.length===0){l("Sorry, there are no images matching your search query. Please, try again!");return}s.insertAdjacentHTML("beforeend",y(r))},y=s=>s.map(({webformatURL:r,largeImageURL:a,tags:o,likes:e,views:t,comments:n,downloads:f})=>`
      <li class="gallery-item">
      <a class="gallery-link" href="${a}">   
      <img class="gallery-image" src="${r}" alt="${o}" width="360"/>
      </a>
      <div class="container">
      <p class="facts-container">Likes <span class="facts-span">${e}</span></p> 
      <p class="facts-container">Views <span class="facts-span">${t}</span></p>
      <p class="facts-container">Comments <span class="facts-span">${n}</span></p>
      <p class="facts-container">Downloads <span class="facts-span">${f}</span></p>
      </div>
      </li>
    `).join(""),g=document.querySelector(".js-form"),L=document.querySelector(".gallery"),c=document.querySelector(".form-search"),i=document.querySelector(".loader");g.addEventListener("submit",b);function b(s){s.preventDefault();const r=c.value.trim();r&&(c.value="",i.classList.add("visible"),m(r).then(a=>{h(L,a.hits),new p(".gallery a").refresh()}).catch(a=>{console.log(a),l("Sorry, there are no images matching your search query. Please, try again!")}).finally(()=>{i.classList.remove("visible")}))}
//# sourceMappingURL=index.js.map
