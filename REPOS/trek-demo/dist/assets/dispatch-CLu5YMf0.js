import"./style-B6Tcu_hK.js";import{r as o}from"./data-BOrmzx4T.js";const r=document.getElementById("dispatch-list"),i=document.querySelectorAll(".filter-btn");function s(e){const a=e==="all"?o:o.filter(t=>t.routeId===e);r.innerHTML=a.map(t=>`
        <article class="dispatch-card">
          <div>
            <img src="${t.photo}" alt="${t.routeName} photograph from ${t.author}'s departure" loading="lazy" />
            <p class="mono" style="margin:0.75rem 0 0;opacity:0.78">Guide: ${t.guide} · Group of ${t.groupSize}</p>
          </div>
          <div>
            <div class="review-meta mono" style="margin-bottom:0.75rem">
              <span class="review-route">${t.routeName}</span>
              <span>${t.month} · High point ${t.maxAltReached} · SpO₂ ${t.spo2}</span>
            </div>
            <h3 style="margin-bottom:0.75rem">“${t.headline}”</h3>
            <p style="margin:0 0 1.25rem;max-width:64ch">${t.body}</p>
            <p class="mono" style="margin:0"><strong>${t.author}</strong> · ${t.city}</p>
          </div>
        </article>
      `).join("")}i.forEach(e=>{e.addEventListener("click",()=>{i.forEach(a=>a.setAttribute("aria-pressed",String(a===e))),s(e.dataset.filter)})});s("all");
