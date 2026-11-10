import"./style-B6Tcu_hK.js";import{t as a}from"./data-BOrmzx4T.js";const d=document.getElementById("routes-container");d.innerHTML=a.map((e,t)=>`
      <article class="route-block" id="${e.id}">
        <div class="route-block-grid">
          <div class="route-photos">
            <img src="${e.photo}" alt="${e.photoAlt}" loading="${t===0?"eager":"lazy"}" />
            <img src="${e.photoSecondary}" alt="${e.name} secondary field view near ${e.summitName}" loading="lazy" />
          </div>
          <div>
            <p class="mono" style="color:var(--rust);margin:0 0 0.5rem">${e.code} · ${e.region} · ${e.gps}</p>
            <h2 style="margin-bottom:0.75rem">${e.name}</h2>
            <p style="font-size:1.08rem;max-width:58ch;margin:0 0 1.5rem">${e.summary}</p>
            <dl class="specs" style="border-color:rgba(14,21,18,0.2)">
              <div><dt class="mono">Duration</dt><dd>${e.days} days</dd></div>
              <div><dt class="mono">High point</dt><dd>${e.maxAlt.toLocaleString()} m</dd></div>
              <div><dt class="mono">Distance</dt><dd>${e.distanceKm} km (${e.dailyHours})</dd></div>
              <div><dt class="mono">Tariff</dt><dd>$${e.price.toLocaleString()}</dd></div>
            </dl>
            <p class="mono" style="margin:0 0 1.25rem;opacity:0.8">Permits included: ${e.permits} · Lead guide: ${e.leadGuide}</p>
            <h3 style="font-size:1.35rem;margin-bottom:0.85rem">Key stage progression</h3>
            <div class="comp-table-wrap" style="margin-top:0">
              <table class="comp-table">
                <thead>
                  <tr>
                    <th scope="col">Stage</th>
                    <th scope="col">Waypoint</th>
                    <th scope="col" class="num">Sleeping / Peak Alt</th>
                    <th scope="col">Field note</th>
                  </tr>
                </thead>
                <tbody>
                  ${e.stages.map(o=>`
                    <tr>
                      <td class="mono">${o.day}</td>
                      <td><strong>${o.place}</strong></td>
                      <td class="num">${o.alt.toLocaleString()} m</td>
                      <td>${o.note}</td>
                    </tr>
                  `).join("")}
                </tbody>
              </table>
            </div>
            <div style="margin-top:1.5rem;display:flex;gap:0.75rem;flex-wrap:wrap">
              <a class="btn btn-primary" href="/#book">Reserve ${e.name}</a>
              <a class="btn btn-ghost" style="border-color:var(--ink);color:var(--ink)" href="/#treks">Inspect on 3D SRTM terrain</a>
            </div>
          </div>
        </div>
      </article>
    `).join("");
