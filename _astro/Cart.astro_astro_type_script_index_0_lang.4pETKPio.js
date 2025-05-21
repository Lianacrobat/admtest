document.addEventListener("DOMContentLoaded",()=>{const v={CART:"cart"},t={cartItemsContainer:document.getElementById("cart-items-container"),cartSummary:document.getElementById("cart-summary"),itemCount:document.getElementById("item-count"),clearCartBtn:document.getElementById("clear-cart"),toast:document.getElementById("toast"),toastMessage:document.getElementById("toast-message"),toastClose:document.getElementById("toast-close")},{getAllProducts:h}=window.CatalogoProducts||{},y=h?h():[],x=new Map(y.map(a=>[a.id,a])),w=(a,n)=>{let s;return(...e)=>{clearTimeout(s),s=setTimeout(()=>a(...e),n)}},d=(a,n=3e3)=>{t.toastMessage.textContent=a,t.toast.classList.remove("hidden"),t.toast.classList.add("animate-fade-in"),setTimeout(()=>{t.toast.classList.add("hidden"),t.toast.classList.remove("animate-fade-in")},n)},b=()=>{t.cartItemsContainer.classList.add("opacity-50","pointer-events-none"),t.cartItemsContainer.insertAdjacentHTML("afterbegin",'<div class="absolute inset-0 flex items-center justify-center"><div class="animate-spin h-8 w-8 border-4 border-t-[var(--accent-color)] rounded-full"></div></div>')},g=()=>{t.cartItemsContainer.classList.remove("opacity-50","pointer-events-none");const a=t.cartItemsContainer.querySelector(".animate-spin");a&&a.parentElement.remove()},l=()=>{try{return JSON.parse(localStorage.getItem(v.CART)||"[]")}catch{return d("Error al cargar el carrito"),[]}},m=a=>{try{localStorage.setItem(v.CART,JSON.stringify(a)),document.dispatchEvent(new CustomEvent("cartUpdated"))}catch{d("Error al guardar el carrito")}},C=(a,n)=>{const s=l(),e=s.findIndex(r=>r.id===a);e!==-1&&(n<=0?p(a):(s[e].quantity=n,m(s)))},p=a=>{const n=l().filter(s=>s.id!==a);m(n),d("Producto eliminado")},I=()=>{m([]),d("Carrito vaciado")},u=w(C,300),f=()=>{b();const a=l();if(a.length===0){t.cartItemsContainer.innerHTML=`
        <div class="empty-cart flex flex-col items-center justify-center py-12 text-[var(--text-color-secondary)] text-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-[var(--text-color-secondary)] mb-4">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
            <path d="M17 17a2 2 0 1 0 2 2" /><path d="M17 17h-11v-11" /><path d="M9.239 5.231l10.761 .769l-1 7h-2m-4 0h-7" /><path d="M3 3l18 18" />
          </svg>
          <p class="mb-4 text-lg font-medium">Tu carrito está vacío</p>
          <a href="/tienda" class="px-6 py-3 bg-[var(--accent-color)] text-white rounded-lg font-medium hover:bg-opacity-90 transition-colors">Explorar productos</a>
        </div>
      `,t.cartSummary.classList.add("hidden"),g();return}let n="",s=0;a.forEach(e=>{const r=x.get(e.id);r&&(s+=e.quantity,n+=`
          <div class="cart-item grid grid-cols-[80px_1fr_auto] sm:grid-cols-[100px_1fr_auto] gap-4 items-center py-4 border-b last:border-0 transition-all duration-200 hover:bg-[var(--button-bg)]" style="border-color: var(--select-border)" data-id="${r.id}">
            <img src="${r.images[0]}" alt="${r.name}" class="w-full h-20 object-cover rounded-md shadow-[var(--card-shadow)]" />
            <div class="flex flex-col gap-2">
              <h3 class="text-lg font-semibold truncate text-[var(--text-color)]">${r.name}</h3>
              <div class="flex items-center gap-3">
                <div class="flex items-center gap-2 rounded-full p-1 bg-[var(--button-bg)] border border-[var(--select-border)]">
                  <button class="decrease w-9 h-9 flex items-center justify-center rounded-full hover:bg-[var(--accent-color)] hover:text-white transition-colors" aria-label="Disminuir cantidad de ${r.name}">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M5 12h14"/>
                    </svg>
                  </button>
                  <input 
                    type="number" 
                    class="quantity-input w-12 text-center text-sm font-medium focus:outline-none bg-transparent text-[var(--text-color)]" 
                    value="${e.quantity}" 
                    min="1" 
                    max="99" 
                    aria-label="Cantidad de ${r.name}"
                  >
                  <button class="increase w-9 h-9 flex items-center justify-center rounded-full hover:bg-[var(--accent-color)] hover:text-white transition-colors" aria-label="Aumentar cantidad de ${r.name}">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M12 5v14"/><path d="M5 12h14"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <button class="remove-item w-9 h-9 flex items-center justify-center rounded-full hover:text-red-500 hover:bg-[var(--button-bg)] transition-colors text-[var(--text-color-secondary)]" aria-label="Eliminar ${r.name}">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/>
              </svg>
            </button>
          </div>
        `)}),t.cartItemsContainer.innerHTML=n,t.itemCount.textContent=s,t.cartSummary.classList.remove("hidden"),t.cartItemsContainer.querySelectorAll(".decrease").forEach(e=>{e.addEventListener("click",()=>{const r=e.closest(".cart-item"),i=r.dataset.id,o=r.querySelector(".quantity-input");let c=parseInt(o.value);c>1&&(o.value=--c,u(i,c))})}),t.cartItemsContainer.querySelectorAll(".increase").forEach(e=>{e.addEventListener("click",()=>{const r=e.closest(".cart-item"),i=r.dataset.id,o=r.querySelector(".quantity-input");let c=parseInt(o.value);c<99&&(o.value=++c,u(i,c))})}),t.cartItemsContainer.querySelectorAll(".quantity-input").forEach(e=>{e.addEventListener("change",()=>{const i=e.closest(".cart-item").dataset.id;let o=parseInt(e.value);isNaN(o)||o<1?(o=1,e.value=o):o>99&&(o=99,e.value=o),u(i,o)})}),t.cartItemsContainer.querySelectorAll(".remove-item").forEach(e=>{e.addEventListener("click",()=>p(e.closest(".cart-item").dataset.id))}),g()};t.clearCartBtn?.addEventListener("click",I),t.toastClose?.addEventListener("click",()=>t.toast.classList.add("hidden")),t.toast?.addEventListener("click",()=>t.toast.classList.add("hidden")),document.addEventListener("cartUpdated",f),f()});
