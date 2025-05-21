import{s as E,g as F,a as S,b as I}from"./CatalogoProductsB.BJ_Qomq6.js";function L({allProducts:t,category:d,subcategory:u,status:l,search:g}){let n=t;return g?n=E(g):u?n=F(u):l?n=S(l):d&&(n=I(d)),n}document.addEventListener("DOMContentLoaded",()=>{const t={searchInput:document.getElementById("search-input"),categoryFilter:document.getElementById("category-filter"),subcategoryFilter:document.getElementById("subcategory-filter"),statusFilter:document.getElementById("status-filter"),resetFiltersBtn:document.getElementById("reset-filters"),resetFiltersBtns:document.querySelectorAll(".reset-filters-btn"),productsContainer:document.getElementById("products-container"),resultsCount:document.getElementById("results-count"),loadingIndicator:document.getElementById("loading-indicator"),noResultsTemplate:document.getElementById("no-results-template"),cartCount:document.getElementById("cart-count")},d=()=>{const e=new URLSearchParams(window.location.search),r=JSON.parse(localStorage.getItem("catalogFilters")||"{}");t.searchInput.value=e.get("search")||r.search||"",t.categoryFilter.value=e.get("category")||r.category||"",t.subcategoryFilter.value=e.get("subcategory")||r.subcategory||"",t.statusFilter.value=e.get("status")||r.status||""},u=(e,r)=>{let a;return(...o)=>{clearTimeout(a),a=setTimeout(()=>e(...o),r)}},l=()=>{if(t.cartCount)try{const r=JSON.parse(localStorage.getItem("cart")||"[]").reduce((a,o)=>a+o.quantity,0);t.cartCount.textContent=r.toString()}catch(e){console.error("Error updating cart count:",e),t.cartCount.textContent="0"}},g=e=>{const r=document.createElement("div");return r.className="product-card-wrapper",r.dataset.productId=e.id,r.innerHTML=`
      <div class="hidden md:block">
        <div class="product-card group bg-[var(--button-bg)] rounded-xl  hover:shadow-lg overflow-hidden" data-product-id="${e.id}">
          <div class="relative overflow-hidden">
            <img 
              src="${e.images[0]||"/placeholder.svg"}" 
              class="w-full aspect-[4/3] object-cover transition-all duration-300 group-hover:blur-xs group-hover:scale-105"
              loading="lazy" 
              />
            <span 
              class="absolute top-3 left-3 px-2 py-1 text-xs font-semibold rounded-full z-10 
              ${e.status==="stock"?"bg-blue-500 text-white":"bg-red-500 text-white"}">
              ${e.status==="stock"?"En Stock":"Importación"}
            </span>

            <div 
              class="absolute inset-0 bg-black/50 items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex "
            >
            
            <button 
              class="expand-button bg-white text-gray-700 rounded-full w-10 h-10 flex items-center justify-center hover:scale-110 transition-transform" aria-label="Ver detalles">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="m15 3 6 6m0 0-6 6m6-6H3"></path>
                </svg>
              </button>

              <button 
                class="favorite-button bg-white text-gray-700 rounded-full w-10 h-10 flex items-center justify-center hover:scale-110 transition-transform" 
                aria-label="Añadir a favoritos" 
                data-product-id="${e.id}"
                >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="20" height="20" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  stroke-width="2" 
                  stroke-linecap="round" 
                  stroke-linejoin="round"
                  >
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
                </svg>
              </button>

              <button 
              class="add-to-cart-button bg-white text-gray-700 rounded-full w-10 h-10 flex items-center justify-center hover:scale-110 transition-transform" 
              aria-label="Añadir al carrito"
              >
                <svg xmlns="http://www.w3.org/2000/svg" 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" stroke="currentColor" 
                stroke-width="2" 
                stroke-linecap="round" 
                stroke-linejoin="round"
                >
                  <circle cx="8" cy="21" r="1"/>
                  <circle cx="19" cy="21" r="1"/>
                  <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/>
                </svg>
              </button>
            </div>
          </div>

          <div class="p-4">
            <div class="flex gap-2 mb-2">
              ${e.tags?e.tags.map((a,o)=>`<span class="px-2 py-0.5 text-xs font-medium rounded-full ${o===1?"bg-blue-400 text-white":"bg-blue-600 text-white"}">${a}</span>`).join(""):""}
            </div>
            <h3 class="text-xl font-semibold mb-2 text-[var(--text-color)]">${e.name}</h3>
            <span class="block text-sm text-[var(--text-color-secondary)] mb-3 line-clamp-2">${e.shortDescription}</span>
          </div>
        </div>
      </div>
      <div class="block md:hidden">
        <div class="product-card bg-[var(--button-bg)] rounded-lg shadow-sm  overflow-hidden flex" data-product-id="${e.id}">
          <div class="relative w-2/5">
            <img src="${e.images[0]||"/placeholder.svg"}" alt="${e.name}" class="w-full h-full object-cover aspect-[4/3]" loading="lazy" />
            <span class="absolute top-2 left-2 px-1.5 py-0.5 text-[10px] font-semibold rounded-full z-10 ${e.status==="stock"?"bg-blue-500 text-white":"bg-black text-white"}">
              ${e.status==="stock"?"En Stock":"Importación"}
            </span>
          </div>
          <div class="p-3 flex-1 flex flex-col justify-between">
            <div>
              <div class="flex gap-1.5 mb-1 flex-wrap">
                ${e.tags?e.tags.map((a,o)=>`<span class="px-1.5 py-0.5 text-[10px] font-medium rounded-full ${o===1?"bg-blue-400 text-white":"bg-blue-600 text-white"}">${a}</span>`).join(""):""}
              </div>
              <h3 class="text-lg font-semibold text-[var(--text-color)] line-clamp-1">${e.name}</h3>
              <span class="block text-xs text-[var(--text-color-secondary)] mb-2 line-clamp-2">${e.shortDescription}</span>
            </div>
            <div class="flex justify-between gap-1">

              <button class="expand-button-mobile flex-1 py-1.5 px-1 bg-[var(--bg-color)] rounded-md flex items-center justify-center hover:bg-[var(--text-color-secondary)] transition-colors" aria-label="Ver detalles">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="m15 3 6 6m0 0-6 6m6-6H3"></path>
                </svg>
              </button>

              <button class="favorite-button-mobile flex-1 py-1.5 px-1 bg-[var(--bg-color)] rounded-md flex items-center justify-center hover:bg-[var(--text-color-secondary)] transition-colors" aria-label="Añadir a favoritos" data-product-id="${e.id}">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
                </svg>
              </button>

              <button class="add-to-cart-button-mobile flex-1 py-1.5 px-1 bg-black text-white rounded-md flex items-center justify-center hover:bg-green-500 transition-colors" aria-label="Añadir al carrito">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white">
                  <circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    `,r},n=()=>{try{if(!window.CatalogoProducts)throw new Error("CatalogoProducts not loaded");t.loadingIndicator.classList.remove("hidden");const e={allProducts:window.CatalogoProducts.getAllProducts(),category:t.categoryFilter.value,subcategory:t.subcategoryFilter.value,status:t.statusFilter.value,search:t.searchInput.value.trim().toLowerCase()},r=L(e);t.resultsCount.innerHTML=`Mostrando <span class="font-semibold">${r.length}</span> productos`;const a=new Map;if(document.querySelectorAll(".product-card-wrapper").forEach(o=>{a.set(o.dataset.productId,o)}),t.productsContainer.innerHTML="",r.length===0){const o=t.noResultsTemplate.content.cloneNode(!0);t.productsContainer.appendChild(o);const i=t.productsContainer.querySelector(".reset-filters-btn");i&&i.addEventListener("click",h)}else r.forEach(o=>{const i=a.get(o.id.toString())||g(o);t.productsContainer.appendChild(i)});k(),t.loadingIndicator.classList.add("hidden")}catch(e){console.error("Error filtering products:",e),t.productsContainer.innerHTML=`
        <div class="col-span-full text-center text-red-500 py-4">
          Error al cargar los productos. Por favor, intenta de nuevo.
        </div>
      `,t.loadingIndicator.classList.add("hidden")}},f=()=>{try{const e=t.categoryFilter.value;t.subcategoryFilter.innerHTML='<option value="">Todas las subcategorías</option>',(e?window.CatalogoProducts.getSubcategoriesByCategory(e):window.CatalogoProducts.getAllSubcategories()).forEach(a=>{const o=document.createElement("option");o.value=a,o.textContent=a,a===t.subcategoryFilter.value&&(o.selected=!0),t.subcategoryFilter.appendChild(o)}),n()}catch(e){console.error("Error updating subcategories:",e)}},c=()=>{const e={search:t.searchInput.value,category:t.categoryFilter.value,subcategory:t.subcategoryFilter.value,status:t.statusFilter.value};localStorage.setItem("catalogFilters",JSON.stringify(e))},h=()=>{t.searchInput.value="",t.categoryFilter.value="",t.subcategoryFilter.value="",t.statusFilter.value="",f(),c();const e=new URL(window.location);e.search="",window.history.pushState({},"",e)},v=()=>{const e=new URL(window.location);e.searchParams.delete("category"),e.searchParams.delete("subcategory"),e.searchParams.delete("status"),e.searchParams.delete("search"),t.categoryFilter.value&&e.searchParams.set("category",t.categoryFilter.value),t.subcategoryFilter.value&&e.searchParams.set("subcategory",t.subcategoryFilter.value),t.statusFilter.value&&e.searchParams.set("status",t.statusFilter.value),t.searchInput.value.trim()&&e.searchParams.set("search",t.searchInput.value.trim()),window.history.pushState({},"",e)},w=e=>{try{let r=JSON.parse(localStorage.getItem("favorites")||"[]");Array.isArray(r)||(r=[]);const a=r.indexOf(e);a===-1?r.push(e):r.splice(a,1),localStorage.setItem("favorites",JSON.stringify(r)),document.dispatchEvent(new CustomEvent("favoritesUpdated"))}catch(r){console.error("Error toggling favorite:",r)}},C=e=>{try{let r=JSON.parse(localStorage.getItem("cart")||"[]");Array.isArray(r)||(r=[]);const a=r.find(o=>o.id===e);a?a.quantity+=1:r.push({id:e,quantity:1}),localStorage.setItem("cart",JSON.stringify(r)),document.dispatchEvent(new CustomEvent("cartUpdated"))}catch(r){console.error("Error adding to cart:",r)}},m=(e,r)=>{const o=JSON.parse(localStorage.getItem("favorites")||"[]").includes(e);r.favorite&&(r.favorite.classList.toggle("text-red-500",o),r.favorite.querySelector("svg").setAttribute("fill",o?"red":"none")),r.favoriteMobile&&(r.favoriteMobile.classList.toggle("text-red-500",o),r.favoriteMobile.querySelector("svg").setAttribute("fill",o?"red":"none"))},k=()=>{document.querySelectorAll(".product-card").forEach(e=>{const r=e.dataset.productId,a=e.cloneNode(!0);e.parentNode.replaceChild(a,e);const o={expand:a.querySelector(".expand-button"),favorite:a.querySelector(".favorite-button"),addToCart:a.querySelector(".add-to-cart-button"),expandMobile:a.querySelector(".expand-button-mobile"),favoriteMobile:a.querySelector(".favorite-button-mobile"),addToCartMobile:a.querySelector(".add-to-cart-button-mobile")};m(r,o);const i=s=>{s.preventDefault(),s.stopPropagation();const p=document.getElementById(`modal-${r}`);p?(p.classList.remove("hidden"),document.body.style.overflow="hidden"):console.error(`Modal with ID modal-${r} not found`)},y=s=>{s.preventDefault(),s.stopPropagation(),w(r),m(r,o)},x=s=>{if(s.dataset.processing==="true")return;s.dataset.processing="true",C(r);const p=s.innerHTML;s.classList.add("text-green-700"),s.innerHTML=`
          
         <svg viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="text-green-700 w-6 h-6 ">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
          <path d="M5 12l5 5l10 -10" />
          </svg>
          </class=>
        `,setTimeout(()=>{s.classList.remove("text-green-700"),s.innerHTML=p,s.dataset.processing="false"},1e3)};o.expand&&o.expand.addEventListener("click",i),o.expandMobile&&o.expandMobile.addEventListener("click",i),o.favorite&&o.favorite.addEventListener("click",y),o.favoriteMobile&&o.favoriteMobile.addEventListener("click",y),o.addToCart&&o.addToCart.addEventListener("click",s=>{s.preventDefault(),s.stopPropagation(),x(o.addToCart)}),o.addToCartMobile&&o.addToCartMobile.addEventListener("click",s=>{s.preventDefault(),s.stopPropagation(),x(o.addToCartMobile)})})},b=u(n,300);t.searchInput&&(t.searchInput.addEventListener("input",b),t.searchInput.addEventListener("change",()=>{c(),v(),b()}),t.searchInput.focus()),t.categoryFilter&&t.categoryFilter.addEventListener("change",()=>{f(),c(),v()}),t.subcategoryFilter&&t.subcategoryFilter.addEventListener("change",()=>{c(),v(),n()}),t.statusFilter&&t.statusFilter.addEventListener("change",()=>{c(),v(),n()}),t.resetFiltersBtn&&t.resetFiltersBtn.addEventListener("click",h),t.resetFiltersBtns.forEach(e=>e.addEventListener("click",h)),document.addEventListener("cartUpdated",l),document.addEventListener("favoritesUpdated",()=>{document.querySelectorAll(".product-card").forEach(e=>{const r=e.dataset.productId,a={favorite:e.querySelector(".favorite-button"),favoriteMobile:e.querySelector(".favorite-button-mobile")};m(r,a)})}),d(),l(),f(),n()});
