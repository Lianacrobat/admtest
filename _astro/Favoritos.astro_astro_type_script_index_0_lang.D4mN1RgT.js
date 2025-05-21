document.addEventListener("DOMContentLoaded",()=>{const l={CART:"cart",FAVORITES:"favorites"},c=document.getElementById("favorites-container"),p=document.getElementById("status-filter-favorites"),h=document.getElementById("reset-favorites-filters"),s=document.getElementById("toast"),x=document.getElementById("toast-message"),m=document.getElementById("toast-close"),{getAllProducts:g,getProductsByStatus:f}=window.CatalogoProducts||{},w=g?g():[],b=new Map(w.map(o=>[o.id,o])),v=(o,r=3e3)=>{x.textContent=o,s.classList.remove("hidden"),s.classList.add("animate-fade-in"),setTimeout(()=>{s.classList.add("hidden"),s.classList.remove("animate-fade-in")},r)},u=()=>{try{c.classList.add("opacity-50","pointer-events-none");const o=JSON.parse(localStorage.getItem(l.FAVORITES)||"[]"),r=p.value;let i=o;if(r){const e=f?f(r):[];i=o.filter(t=>e.some(a=>a.id===t))}if(i.length===0){c.innerHTML=`
          <div class="empty-favorites col-span-full flex flex-col items-center justify-center py-12 text-[var(--text-color-secondary)] text-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mb-4 text-[var(--text-color-secondary)]">
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
            </svg>
            <p class="mb-4 text-lg font-medium">No tienes productos favoritos${r?" con el estado seleccionado":""}</p>
            <a href="/tienda" class="px-6 py-3 bg-[var(--accent-color)] text-white rounded-lg font-medium hover:bg-opacity-90 transition-colors">Explorar productos</a>
          </div>
        `,c.classList.remove("opacity-50","pointer-events-none");return}let d="";i.forEach(e=>{const t=b.get(e);t&&(d+=`
            <div class="hidden md:block">
              <div class="product-card group bg-[var(--button-bg)] rounded-xl shadow-[var(--card-shadow)] overflow-hidden transition-all duration-200 hover:shadow-lg" data-product-id="${t.id}">
                <div class="relative overflow-hidden">
                  <img src="${t.images[0]||"/placeholder.svg"}" alt="${t.name}" class="w-full aspect-[4/3] object-cover transition-transform duration-300 group-hover:scale-105" loading="lazy" />
                  <span class="absolute top-3 left-3 px-2 py-1 text-xs font-semibold rounded-full z-10 ${t.status==="stock"?"bg-[var(--accent-color)] text-white":"bg-[var(--text-color)] text-white"}">
                    ${t.status==="stock"?"En Stock":"Importación"}
                  </span>
                  <div class="absolute inset-0 bg-black/30 items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex">
                    <button class="remove-favorite bg-[var(--bg-color)] text-[var(--text-color)] rounded-full w-10 h-10 flex items-center justify-center hover:scale-110 hover:text-red-500 transition-all" data-product-id="${t.id}" aria-label="Eliminar de favoritos">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/>
                      </svg>
                    </button>
                    <button class="add-to-cart-button bg-[var(--bg-color)] text-[var(--text-color)] rounded-full w-10 h-10 flex items-center justify-center hover:scale-110 hover:text-[var(--accent-color)] transition-all" aria-label="Añadir al carrito" data-product-id="${t.id}">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/>
                      </svg>
                    </button>
                  </div>
                </div>
                <div class="p-4">
                  <div class="flex gap-2 mb-2 flex-wrap">
                    ${t.tags?t.tags.map((a,n)=>`<span class="px-2 py-0.5 text-xs font-medium rounded-full ${n===1?"bg-[var(--accent-color)] text-white":"bg-[var(--text-color)] text-white"}">${a}</span>`).join(""):""}
                  </div>
                  <h3 class="text-xl font-semibold mb-2 text-[var(--text-color)] line-clamp-1">${t.name}</h3>
                  <span class="block text-sm text-[var(--text-color-secondary)] mb-3 line-clamp-2">${t.shortDescription||""}</span>
                </div>
              </div>
            </div>
            <div class="block md:hidden">
              <div class="product-card bg-[var(--button-bg)] rounded-xl shadow-[var(--card-shadow)] overflow-hidden flex transition-all duration-200 hover:shadow-lg" data-product-id="${t.id}">
                <div class="relative w-2/5">
                  <img src="${t.images[0]||"/placeholder.svg"}" alt="${t.name}" class="w-full h-full object-cover aspect-[4/3]" loading="lazy" />
                  <span class="absolute top-2 left-2 px-1.5 py-0.5 text-[10px] font-semibold rounded-full z-10 ${t.status==="stock"?"bg-[var(--accent-color)] text-white":"bg-[var(--text-color)] text-white"}">
                    ${t.status==="stock"?"En Stock":"Importación"}
                  </span>
                </div>
                <div class="p-3 flex-1 flex flex-col justify-between">
                  <div>
                    <div class="flex gap-1.5 mb-1 flex-wrap">
                      ${t.tags?t.tags.map((a,n)=>`<span class="px-1.5 py-0.5 text-[10px] font-medium rounded-full ${n===1?"bg-[var(--accent-color)] text-white":"bg-[var(--text-color)] text-white"}">${a}</span>`).join(""):""}
                    </div>
                    <h3 class="text-lg font-semibold text-[var(--text-color)] line-clamp-1">${t.name}</h3>
                    <span class="block text-xs text-[var(--text-color-secondary)] mb-2 line-clamp-2">${t.shortDescription||""}</span>
                  </div>
                  <div class="flex justify-between gap-2">
                    <button class="expand-button-mobile flex-1 py-2 px-2 bg-[var(--bg-color)] rounded-md flex items-center justify-center hover:bg-[var(--text-color-secondary)] transition-colors" aria-label="Ver detalles">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="m15 3 6 6m0 0-6 6m6-6H3"></path>
                      </svg>
                    </button>
                    <button class="remove-favorite-mobile flex-1 py-2 px-2 bg-[var(--bg-color)] rounded-md flex items-center justify-center hover:bg-red-500 hover:text-white transition-colors" aria-label="Eliminar de favoritos" data-product-id="${t.id}">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/>
                      </svg>
                    </button>
                    <button class="add-to-cart-button-mobile flex-1 py-2 px-2 bg-[var(--bg-color)] rounded-md flex items-center justify-center hover:bg-[var(--accent-color)] hover:text-white transition-colors" aria-label="Añadir al carrito" data-product-id="${t.id}">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          `)}),c.innerHTML=d,document.querySelectorAll(".add-to-cart-button, .add-to-cart-button-mobile").forEach(e=>{e.addEventListener("click",()=>{const a=e.closest(".product-card").dataset.productId;y(a),v("Producto añadido al carrito");const n=e.innerHTML;e.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="${e.classList.contains("add-to-cart-button-mobile")?"text-white":""}"><path d="M20 6 9 17l-5-5"/></svg>`,setTimeout(()=>{e.innerHTML=n},1e3)})}),document.querySelectorAll(".remove-favorite, .remove-favorite-mobile").forEach(e=>{e.addEventListener("click",()=>{const a=e.closest(".product-card").dataset.productId;k(a),v("Producto eliminado de favoritos")})}),document.querySelectorAll(".expand-button, .expand-button-mobile").forEach(e=>{e.addEventListener("click",()=>{const a=e.closest(".product-card").dataset.productId,n=document.getElementById(`modal-${a}`);n&&(n.classList.remove("hidden"),document.body.style.overflow="hidden")})}),c.classList.remove("opacity-50","pointer-events-none")}catch(o){console.error("Error loading favorites:",o),v("Error al cargar favoritos"),c.classList.remove("opacity-50","pointer-events-none")}},y=o=>{try{const r=JSON.parse(localStorage.getItem(l.CART)||"[]"),i=r.find(d=>d.id===o);i?i.quantity+=1:r.push({id:o,quantity:1}),localStorage.setItem(l.CART,JSON.stringify(r)),document.dispatchEvent(new CustomEvent("cartUpdated"))}catch(r){console.error("Error adding to cart:",r),v("Error al añadir al carrito")}},k=o=>{try{const i=JSON.parse(localStorage.getItem(l.FAVORITES)||"[]").filter(d=>d!==o);localStorage.setItem(l.FAVORITES,JSON.stringify(i)),document.dispatchEvent(new CustomEvent("favoritesUpdated")),u()}catch(r){console.error("Error removing favorite:",r),v("Error al eliminar de favoritos")}},E=()=>{p.value="",u()};p&&p.addEventListener("change",u),h&&h.addEventListener("click",E),m&&m.addEventListener("click",()=>s.classList.add("hidden")),s&&s.addEventListener("click",()=>s.classList.add("hidden")),u(),document.addEventListener("favoritesUpdated",u)});
