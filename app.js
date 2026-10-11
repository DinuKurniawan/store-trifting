/* Thrift Corner — VanillaJS */
const WA = "6281234567890";
const waLink = (msg) => `https://wa.me/${WA}?text=${encodeURIComponent(msg)}`;
const rupiah = (n) => "Rp " + n.toLocaleString("id-ID");

const PRODUCTS = [
  {
    id: "carhartt-detroit", brand: "Carhartt", name: "90s Carhartt Detroit Jacket", cat: "outerwear",
    catLabel: "Outerwear", price: 450000, original: 750000, size: "M", measure: "LD 56 × P 64 cm",
    condition: "9/10", material: "Duck Canvas", soldOut: false,
    desc: "Detroit jacket 90s original dengan blanket lining hangat. Warna coklat klasik, jahitan kokoh, sudah dicuci higienis dan siap pakai harian.",
    ukuran: { dada: 56, panjang: 64, lengan: 60, bahu: 48 },
    note: "Warna sedikit pudar merata khas vintage (faded natural). Kancing dan resleting semua fungsi normal.",
    images: [
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?q=80&w=800&auto=format&fit=crop",
    ],
  },
  {
    id: "nike-swoosh", brand: "Nike", name: "Vintage Nike Center Swoosh Tee", cat: "tshirt",
    catLabel: "Vintage T-Shirt", price: 185000, original: 310000, size: "L", measure: "LD 54 × P 72 cm",
    condition: "9/10", material: "Katun 100%", soldOut: false,
    desc: "Tee Nike center swoosh bordir era 2000s. Bahan adem, sablon dan bordir masih tegas, cocok buat daily fit santai.",
    ukuran: { dada: 54, panjang: 72, lengan: 22, bahu: 47 },
    note: "Minus pemakaian wajar, tidak ada bolong atau noda.",
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1503341504253-dff4815485f1?q=80&w=800&auto=format&fit=crop",
    ],
  },
  {
    id: "wrangler-corduroy", brand: "Wrangler", name: "Wrangler Vintage Corduroy Pants", cat: "celana",
    catLabel: "Celana", price: 220000, original: 370000, size: "30", measure: "LP 78 × P 100 cm",
    condition: "9/10", material: "Korduroi", soldOut: false,
    desc: "Celana korduroi Wrangler vintage, tekstur garis rapat, potongan straight yang gampang di-mix dengan sneakers maupun boots.",
    ukuran: { dada: 40, panjang: 100, lengan: 0, bahu: 0 },
    note: "Pinggang 78 cm melar dikit, bagian lutut masih kencang.",
    images: [
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1475178626620-a4d074967452?q=80&w=800&auto=format&fit=crop",
    ],
  },
  {
    id: "ralph-harrington", brand: "Ralph Lauren", name: "Ralph Lauren Harrington Jacket", cat: "outerwear",
    catLabel: "Outerwear", price: 380000, original: 640000, size: "M", measure: "LD 58 × P 65 cm",
    condition: "9/10", material: "Katun Blend", soldOut: true,
    desc: "Harrington jacket Ralph Lauren dengan tartan lining khas. Model timeless, cocok buat gaya rapi maupun street.",
    ukuran: { dada: 58, panjang: 65, lengan: 61, bahu: 47 },
    note: "Sudah terjual. Chat admin untuk dicarikan barang serupa.",
    images: [
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?q=80&w=800&auto=format&fit=crop",
    ],
  },
  {
    id: "stussy-hoodie", brand: "Stüssy", name: "Stüssy Vintage Tribe Hoodie", cat: "outerwear",
    catLabel: "Outerwear", price: 320000, original: 535000, size: "L", measure: "LD 60 × P 68 cm",
    condition: "9/10", material: "Fleece Katun", soldOut: false,
    desc: "Hoodie tribe Stüssy era 90s, fleece tebal dan hangat. Grafis depan-belakang masih pekat, tali dan saku aman.",
    ukuran: { dada: 60, panjang: 68, lengan: 62, bahu: 52 },
    note: "Sablon crack halus khas pemakaian vintage, bukan cacat.",
    images: [
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1578681994506-b8f463449011?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1509942774463-acf339cf87d5?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?q=80&w=800&auto=format&fit=crop",
    ],
  },
  {
    id: "floral-dress", brand: "Vintage Curated", name: "Vintage Floral Cottage Dress", cat: "dress",
    catLabel: "Dress & Tops", price: 165000, original: 275000, size: "S–M", measure: "LD 48 × P 118 cm",
    condition: "9/10", material: "Katun Voile", soldOut: false,
    desc: "Cottage dress floral manis, ringan dan flowy. Kancing depan fungsi, ada tali pinggang bawaan. Favorit buat hangout Bandung!",
    ukuran: { dada: 48, panjang: 118, lengan: 24, bahu: 38 },
    note: "Motif bunga autentik 90s, jahitan pinggang masih kencang.",
    images: [
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?q=80&w=800&auto=format&fit=crop",
    ],
  },
  {
    id: "levis-501", brand: "Levi's", name: "Levi's 501 Made in USA 90s", cat: "celana",
    catLabel: "Celana", price: 350000, original: 585000, size: "29", measure: "LP 74 × P 102 cm",
    condition: "9/10", material: "Denim Selvedge", soldOut: true,
    desc: "Levi's 501 Made in USA era 90s, button fly original, fading biru natural yang cakep banget.",
    ukuran: { dada: 38, panjang: 102, lengan: 0, bahu: 0 },
    note: "Sudah terjual. Stok 501 USA langka — chat admin untuk waiting list.",
    images: [
      "https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1475178626620-a4d074967452?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?q=80&w=800&auto=format&fit=crop",
    ],
  },
  {
    id: "columbia-vest", brand: "Columbia", name: "Columbia Fleece Vest", cat: "outerwear",
    catLabel: "Outerwear", price: 195000, original: 325000, size: "M", measure: "LD 56 × P 62 cm",
    condition: "9/10", material: "Fleece Polar", soldOut: false,
    desc: "Vest fleece Columbia, ringan tapi anget. Layering paling gampang buat cuaca Bandung yang adem.",
    ukuran: { dada: 56, panjang: 62, lengan: 0, bahu: 44 },
    note: "Resleting YKK lancar, saku dalam masih bagus.",
    images: [
      "https://images.unsplash.com/photo-1598032895397-b9472444bf93?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=800&auto=format&fit=crop",
    ],
  },
];

const grid = document.getElementById("productGrid");
const emptyState = document.getElementById("emptyState");
let activeFilter = "semua";
let favs = new Set();

function cardHTML(p) {
  const sold = p.soldOut;
  const waMsg = `Halo Thrift Corner! Saya mau beli ${p.name} (${p.brand}, size ${p.size}) ${rupiah(p.price)}. Apakah masih ada?`;
  const detailBtn = sold
    ? `<button type="button" data-open data-detail aria-label="Lihat detail ${p.name}" class="prod-btn flex-1 inline-flex items-center justify-center gap-1.5 rounded-full border-[1.5px] border-[#75786F] bg-transparent text-[#444840] text-[13px] font-bold min-h-[44px] px-3 py-2.5 transition hover:bg-[#E5EADF] active:scale-95 cursor-pointer"><span class="material-symbols-outlined text-[18px]">visibility</span><span class="min-[560px]:hidden">Lihat Detail</span><span class="hidden min-[560px]:inline">Detail</span></button>`
    : `<button type="button" data-open data-detail aria-label="Lihat detail ${p.name}" class="prod-btn flex-1 inline-flex items-center justify-center gap-1.5 rounded-full border-[1.5px] border-[#25331D] bg-transparent text-[#25331D] text-[13px] font-bold min-h-[44px] px-3 py-2.5 transition hover:bg-[#D6E8C7] active:scale-95 cursor-pointer"><span class="material-symbols-outlined text-[18px]">visibility</span><span class="min-[560px]:hidden">Lihat Detail</span><span class="hidden min-[560px]:inline">Detail</span></button>`;
  const buyBtn = sold
    ? `<button type="button" disabled aria-label="${p.name} sudah terjual" class="flex-1 inline-flex items-center justify-center gap-1.5 rounded-full bg-[#C5C8BD] text-[#5a5e56] text-[13px] font-bold min-h-[44px] px-3 py-2.5 cursor-not-allowed"><span class="material-symbols-outlined text-[18px]">block</span>Terjual</button>`
    : `<a href="${waLink(waMsg)}" target="_blank" rel="noopener" data-stop aria-label="Beli ${p.name} via WhatsApp" class="prod-btn flex-1 inline-flex items-center justify-center gap-1.5 rounded-full bg-[#25331D] text-[#F6FBEF] text-[13px] font-bold min-h-[44px] px-3 py-2.5 transition hover:bg-[#3B4A32] active:scale-95"><span class="material-symbols-outlined text-[18px]">chat</span><span class="min-[560px]:hidden">Beli via WhatsApp</span><span class="hidden min-[560px]:inline">Beli</span></a>`;
  return `
  <article data-id="${p.id}" class="prod-card group bg-white rounded-[20px] overflow-hidden border border-[#E5EADF] shadow-[0_8px_24px_-12px_rgba(37,51,29,.25)] hover:shadow-[0_20px_40px_-16px_rgba(37,51,29,.35)] transition flex flex-col">
    <div class="relative aspect-[4/5] overflow-hidden bg-[#EBF0E4]">
      <button type="button" data-open aria-label="Lihat detail ${p.name}" class="block w-full h-full cursor-pointer min-h-[44px]">
        <img src="${p.images[0]}" alt="${p.name}" loading="lazy" class="w-full h-full object-cover group-hover:scale-105 transition duration-500 ${sold ? "grayscale opacity-70" : ""}" />
      </button>
      <span class="absolute top-3 left-3 bg-[#FF915A] text-[#25331D] text-[11px] font-display font-bold uppercase tracking-widest px-3 py-1.5 rounded-full pointer-events-none">1 of 1</span>
      <span class="absolute top-3 right-3 bg-white/95 text-[#25331D] text-[11px] font-bold px-3 py-1.5 rounded-full pointer-events-none">Kondisi 9/10</span>
      ${sold ? `<span class="absolute inset-0 grid place-items-center pointer-events-none"><span class="bg-[#BA1A1A] text-white font-display font-bold uppercase tracking-[0.18em] text-[13px] px-5 py-2.5 rounded-full shadow-lg">Sold Out</span></span>` : ""}
    </div>
    <div class="p-4 flex flex-col flex-1">
      <p class="text-[11px] font-display font-bold uppercase tracking-[0.18em] text-[#9B4413]">${p.brand}</p>
      <h3 class="font-display font-bold text-[16px] leading-snug mt-1 line-clamp-2 ${sold ? "line-through text-[#75786F]" : ""}"><button type="button" data-open class="text-left leading-snug hover:underline underline-offset-4 cursor-pointer"> ${p.name}</button></h3>
      <p class="flex items-center gap-1.5 text-[13px] text-[#444840] mt-1.5"><span class="material-symbols-outlined text-[16px]">straighten</span> ${p.size} • ${p.measure}</p>
      <p class="font-display font-bold text-[17px] mt-2 ${sold ? "line-through text-[#75786F]" : ""}">${rupiah(p.price)}</p>
      <div class="mt-3 flex flex-col min-[560px]:flex-row gap-2">
        ${detailBtn}
        ${buyBtn}
      </div>
    </div>
  </article>`;
}

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
document.documentElement.classList.add("js");
let gridRevealed = false;

function revealCardsFast(cards) {
  cards.forEach((c) => c.classList.add("rv", "prod-fast"));
  requestAnimationFrame(() => requestAnimationFrame(() => cards.forEach((c) => c.classList.add("in"))));
}

function revealCardsStagger(cards) {
  const vis = cards.slice(0, 8);
  vis.forEach((c, i) => { c.style.transitionDelay = (i * 80) + "ms"; });
  requestAnimationFrame(() => requestAnimationFrame(() => vis.forEach((c) => c.classList.add("in"))));
  setTimeout(() => vis.forEach((c) => { c.style.transitionDelay = ""; }), 900);
  cards.slice(8).forEach((c) => c.classList.add("in"));
}

function renderGrid() {
  const list = PRODUCTS.filter((p) => activeFilter === "semua" || p.cat === activeFilter);
  grid.innerHTML = list.map(cardHTML).join("");
  emptyState.classList.toggle("hidden", list.length > 0);
  const cards = [...grid.querySelectorAll(".prod-card")];
  cards.forEach((el) => {
    el.querySelectorAll("[data-open]").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        openModal(el.dataset.id);
      });
    });
    el.querySelectorAll("[data-stop]").forEach((a) => {
      a.addEventListener("click", (e) => e.stopPropagation());
    });
  });
  if (reduceMotion) return;
  if (!gridRevealed) {
    cards.forEach((c) => c.classList.add("rv"));
  } else {
    revealCardsFast(cards);
  }
}

document.querySelectorAll(".filter-tab").forEach((btn) => {
  btn.addEventListener("click", () => {
    activeFilter = btn.dataset.filter;
    document.querySelectorAll(".filter-tab").forEach((b) => {
      const on = b === btn;
      b.className = "filter-tab px-5 py-2.5 rounded-full text-sm font-bold min-h-[44px] " + (on ? "bg-[#25331D] text-white" : "bg-white border border-[#C5C8BD] hover:border-[#25331D]");
    });
    renderGrid();
  });
});

/* ---------- MODAL ---------- */
const modal = document.getElementById("productModal");
const modalContent = document.getElementById("modalContent");
let currentId = null, photoIdx = 0;

function openModal(id) {
  currentId = id; photoIdx = 0;
  renderModal();
  modal.classList.remove("hidden"); modal.classList.add("flex");
  document.body.style.overflow = "hidden";
}
function closeModal() {
  modal.classList.add("hidden"); modal.classList.remove("flex");
  document.body.style.overflow = "";
}
document.getElementById("modalClose").addEventListener("click", closeModal);
document.getElementById("modalBackdrop").addEventListener("click", closeModal);
document.addEventListener("keydown", (e) => { if (e.key === "Escape" && !modal.classList.contains("hidden")) closeModal(); });

function renderModal() {
  const p = PRODUCTS.find((x) => x.id === currentId);
  if (!p) return;
  const isFav = favs.has(p.id);
  const related = PRODUCTS.filter((x) => x.id !== p.id && !x.soldOut).slice(0, 3);
  modalContent.innerHTML = `
  <div class="grid md:grid-cols-2 gap-6">
    <div>
      <div class="relative aspect-[4/5] rounded-[20px] overflow-hidden bg-white">
        <img id="mMain" src="${p.images[photoIdx]}" alt="${p.name} foto ${photoIdx + 1}" class="w-full h-full object-cover ${p.soldOut ? "grayscale opacity-70" : ""}" />
        <span class="absolute top-3 left-3 bg-[#FF915A] text-[#25331D] text-[11px] font-display font-bold uppercase tracking-widest px-3 py-1.5 rounded-full">1 of 1 Vintage</span>
        <span class="absolute top-3 right-3 bg-white/95 text-[12px] font-bold px-3 py-1.5 rounded-full">Kondisi 9/10</span>
        ${p.soldOut ? `<span class="absolute inset-0 grid place-items-center"><span class="bg-[#BA1A1A] text-white font-display font-bold uppercase tracking-[0.18em] text-sm px-5 py-2.5 rounded-full">Sold Out</span></span>` : ""}
        <button id="mPrev" aria-label="Foto sebelumnya" class="absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/95 shadow grid place-items-center hover:bg-white min-w-[44px] min-h-[44px]"><span class="material-symbols-outlined">chevron_left</span></button>
        <button id="mNext" aria-label="Foto berikutnya" class="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/95 shadow grid place-items-center hover:bg-white min-w-[44px] min-h-[44px]"><span class="material-symbols-outlined">chevron_right</span></button>
        <span class="absolute bottom-3 left-1/2 -translate-x-1/2 bg-black/60 text-white text-[12px] font-bold px-3.5 py-1.5 rounded-full">Foto ${photoIdx + 1} / ${p.images.length}</span>
      </div>
      <div class="grid grid-cols-4 gap-2.5 mt-3">
        ${p.images.map((src, i) => `<button data-thumb="${i}" aria-label="Lihat foto ${i + 1}" class="thumb aspect-square rounded-2xl overflow-hidden border-2 ${i === photoIdx ? "border-[#FF915A]" : "border-transparent"} bg-white min-h-[44px]"><img src="${src}" alt="${p.name} angle ${i + 1}" class="w-full h-full object-cover ${p.soldOut ? "grayscale" : ""}" loading="lazy" /></button>`).join("")}
      </div>
    </div>
    <div>
      <div class="flex items-center justify-between gap-2">
        <p class="text-[12px] font-display font-bold uppercase tracking-[0.2em] text-[#9B4413]">${p.catLabel}</p>
        <div class="flex gap-2">
          <button id="mShare" aria-label="Bagikan" class="w-11 h-11 rounded-full bg-white border border-[#C5C8BD] grid place-items-center hover:border-[#25331D] min-w-[44px] min-h-[44px]"><span class="material-symbols-outlined text-[20px]">share</span></button>
          <button id="mFav" aria-label="Favorit" class="w-11 h-11 rounded-full bg-white border border-[#C5C8BD] grid place-items-center hover:border-[#25331D] min-w-[44px] min-h-[44px]"><span class="material-symbols-outlined ${isFav ? "fill text-[#BA1A1A]" : ""} text-[20px]">favorite</span></button>
        </div>
      </div>
      <h3 class="font-display font-bold text-[24px] leading-tight tracking-tight mt-1">${p.name}</h3>
      <div class="flex items-center gap-2.5 mt-2 flex-wrap">
        <span class="font-display font-bold text-[24px]">${rupiah(p.price)}</span>
        <span class="text-[#75786F] line-through text-sm">${rupiah(p.original)}</span>
        <span class="bg-[#25331D] text-white text-[11px] font-bold px-3 py-1.5 rounded-full">Hemat 40%</span>
      </div>
      <div class="flex flex-wrap gap-2 mt-3">
        <span class="text-[12px] font-bold bg-white border border-[#C5C8BD] px-3.5 py-2 rounded-full">Ukuran: ${p.size}</span>
        <span class="text-[12px] font-bold bg-white border border-[#C5C8BD] px-3.5 py-2 rounded-full">Kondisi: ${p.condition}</span>
        <span class="text-[12px] font-bold bg-white border border-[#C5C8BD] px-3.5 py-2 rounded-full">Brand: ${p.brand}</span>
        <span class="text-[12px] font-bold bg-white border border-[#C5C8BD] px-3.5 py-2 rounded-full">Bahan: ${p.material}</span>
      </div>
      <p class="text-sm text-[#444840] leading-relaxed mt-3">${p.desc}</p>
      <div class="bg-white rounded-[18px] border border-[#E5EADF] p-4 mt-4">
        <p class="font-display font-bold text-[14px]">Detail Pengukuran Presisi</p>
        <dl class="grid grid-cols-2 gap-x-4 gap-y-2 text-[13px] mt-2.5">
          <div class="flex justify-between border-b border-dashed border-[#E5EADF] pb-1.5"><dt class="text-[#75786F]">Lebar Dada</dt><dd class="font-bold">${p.ukuran.dada || "—"} cm</dd></div>
          <div class="flex justify-between border-b border-dashed border-[#E5EADF] pb-1.5"><dt class="text-[#75786F]">Panjang Baju</dt><dd class="font-bold">${p.ukuran.panjang || "—"} cm</dd></div>
          <div class="flex justify-between border-b border-dashed border-[#E5EADF] pb-1.5"><dt class="text-[#75786F]">Panjang Lengan</dt><dd class="font-bold">${p.ukuran.lengan || "—"} cm</dd></div>
          <div class="flex justify-between border-b border-dashed border-[#E5EADF] pb-1.5"><dt class="text-[#75786F]">Lebar Bahu</dt><dd class="font-bold">${p.ukuran.bahu || "—"} cm</dd></div>
        </dl>
      </div>
      <div class="flex gap-2.5 bg-[#D6E8C7]/50 border border-[#25331D]/15 rounded-[18px] p-4 mt-3 text-[13px] leading-relaxed">
        <span class="material-symbols-outlined text-[#25331D] shrink-0">info</span>
        <p><strong>Catatan Kejujuran Kondisi:</strong> ${p.note}</p>
      </div>
      <div class="flex items-center gap-2.5 mt-4 text-sm font-bold">
        <span class="relative flex w-2.5 h-2.5"><span class="pulse-dot absolute w-full h-full rounded-full ${p.soldOut ? "bg-[#BA1A1A]" : "bg-green-600"}"></span><span class="relative w-2.5 h-2.5 rounded-full ${p.soldOut ? "bg-[#BA1A1A]" : "bg-green-600"}"></span></span>
        ${p.soldOut ? "Stok habis — item ini sudah laku" : "Stok Terbatas: 1 Pcs Saja"}
      </div>
      ${p.soldOut ? "" : `<p class="text-[13px] text-[#9B4413] font-semibold">Siapa Cepat Dia Dapat</p>`}
      <div class="flex flex-wrap gap-2 mt-2.5">
        <span class="inline-flex items-center gap-1.5 text-[12px] font-bold bg-white px-3.5 py-2 rounded-full border border-[#E5EADF]"><span class="material-symbols-outlined text-[16px]">wash</span> Dicuci Higienis</span>
        <span class="inline-flex items-center gap-1.5 text-[12px] font-bold bg-white px-3.5 py-2 rounded-full border border-[#E5EADF]"><span class="material-symbols-outlined text-[16px]">photo_camera</span> Foto Asli</span>
        <span class="inline-flex items-center gap-1.5 text-[12px] font-bold bg-white px-3.5 py-2 rounded-full border border-[#E5EADF]"><span class="material-symbols-outlined text-[16px]">verified</span> Garansi Autentik</span>
      </div>
      <div class="grid gap-2.5 mt-4">
        ${p.soldOut ? `
          <button disabled class="w-full bg-[#C5C8BD] text-white font-bold py-4 rounded-full cursor-not-allowed min-h-[52px]">Sudah Terjual (Sold Out)</button>
          <a href="${waLink(`Halo Thrift Corner! ${p.name} sudah sold out. Beritahu saya jika ada barang serupa ya!`)}" target="_blank" rel="noopener" class="w-full text-center bg-[#FFDBCC] text-[#9B4413] font-bold py-4 rounded-full hover:brightness-95 min-h-[52px]">Beritahu Saya Jika Ada Barang Serupa</a>
        ` : `
          <a href="${waLink(`Halo Thrift Corner! Saya mau beli ${p.name} (${p.brand}, size ${p.size}) ${rupiah(p.price)}. Apakah masih ada?`)}" target="_blank" rel="noopener" class="w-full inline-flex justify-center items-center gap-2 bg-[#25331D] text-white font-bold py-4 rounded-full hover:bg-[#3B4A32] min-h-[52px]"><span class="material-symbols-outlined">chat</span> Beli via WhatsApp</a>
          <a href="${waLink(`Halo Admin! Saya mau tanya / minta video fitting untuk ${p.name} (${p.brand}, size ${p.size}).`)}" target="_blank" rel="noopener" class="w-full text-center border-2 border-[#25331D] text-[#25331D] font-bold py-[14px] rounded-full hover:bg-[#D6E8C7]/40 min-h-[52px]">Tanya Admin / Video Fitting</a>
        `}
      </div>
    </div>
  </div>
  <div class="grid gap-2.5 mt-6" id="accWrap">
    ${acc("Cara Pemesanan Cepat via WhatsApp", "Klik Beli via WhatsApp → admin cek ketersediaan → transfer BCA/Mandiri/QRIS max 1×24 jam → barang langsung dibungkus dan dikirim dari Bandung.")}
    ${acc("Pengiriman & Ekspedisi Terpercaya", "Kami kirim via JNE Reg/YES, SiCepat, J&T Express, dan Gosend khusus Bandung. Semua paket berasuransi dan dapat nomor resi di hari yang sama.")}
    ${acc("Kebijakan Retur & Garansi Ukuran", "Salah ukuran karena kesalahan tabel kami? Tukar atau refund 100% dalam 2×24 jam setelah paket diterima. Klaim mudah cukup via chat WhatsApp.")}
  </div>
  <h4 class="font-display font-bold text-[18px] mt-7 mb-3">Mungkin Kamu Suka</h4>
  <div class="grid grid-cols-3 gap-3">
    ${related.map((r) => `
      <button data-rel="${r.id}" class="rel-card text-left bg-white rounded-[18px] overflow-hidden border border-[#E5EADF] hover:shadow-lg transition min-h-[44px]">
        <img src="${r.images[0]}" alt="${r.name}" class="aspect-square w-full object-cover" loading="lazy" />
        <span class="block p-2.5"><span class="block text-[11px] font-display font-bold uppercase tracking-wider text-[#9B4413]">${r.brand}</span><span class="block text-[12.5px] font-bold leading-snug line-clamp-2">${r.name}</span><span class="block text-[13px] font-display font-bold mt-1">${rupiah(r.price)}</span></span>
      </button>`).join("")}
  </div>`;

  document.getElementById("mPrev").onclick = () => { photoIdx = (photoIdx - 1 + p.images.length) % p.images.length; renderModal(); };
  document.getElementById("mNext").onclick = () => { photoIdx = (photoIdx + 1) % p.images.length; renderModal(); };
  modalContent.querySelectorAll("[data-thumb]").forEach((b) => b.onclick = () => { photoIdx = +b.dataset.thumb; renderModal(); });
  document.getElementById("mFav").onclick = (e) => {
    if (favs.has(p.id)) favs.delete(p.id); else favs.add(p.id);
    renderModal();
  };
  document.getElementById("mShare").onclick = async () => {
    const url = location.href.split("#")[0] + "#koleksi";
    const text = `${p.name} — ${rupiah(p.price)} di Thrift Corner Bandung!`;
    if (navigator.share) { try { await navigator.share({ title: p.name, text, url }); } catch {} }
    else { try { await navigator.clipboard.writeText(text + " " + url); alert("Tautan produk disalin!"); } catch { alert(text); } }
  };
  modalContent.querySelectorAll(".acc-btn").forEach((b) => b.addEventListener("click", () => {
    const panel = b.nextElementSibling;
    const open = !panel.classList.contains("hidden");
    modalContent.querySelectorAll(".acc-panel").forEach((x) => x.classList.add("hidden"));
    modalContent.querySelectorAll(".acc-btn .material-symbols-outlined").forEach((x) => x.textContent = "expand_more");
    if (!open) { panel.classList.remove("hidden"); b.querySelector(".material-symbols-outlined").textContent = "expand_less"; }
  }));
  modalContent.querySelectorAll("[data-rel]").forEach((b) => b.onclick = () => { currentId = b.dataset.rel; photoIdx = 0; renderModal(); modal.querySelector(".relative").scrollTop = 0; });
}

function acc(title, body) {
  return `<div class="bg-white border border-[#E5EADF] rounded-[18px] overflow-hidden">
    <button class="acc-btn w-full flex items-center justify-between gap-3 text-left font-bold text-[14.5px] px-5 py-4 min-h-[52px]">${title}<span class="material-symbols-outlined shrink-0">expand_more</span></button>
    <div class="acc-panel hidden px-5 pb-4 text-sm text-[#444840] leading-relaxed">${body}</div>
  </div>`;
}

/* ---------- NAV / DRAWER ---------- */
const menuBtn = document.getElementById("menuBtn");
const drawer = document.getElementById("mobileDrawer");
const menuIcon = document.getElementById("menuIcon");
menuBtn.addEventListener("click", () => {
  const open = drawer.classList.toggle("hidden");
  menuIcon.textContent = open ? "menu" : "close";
});
drawer.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => { drawer.classList.add("hidden"); menuIcon.textContent = "menu"; }));

const sections = ["beranda", "kategori", "koleksi", "cara-belanja", "tentang", "testimoni", "kontak"];
const navLinks = document.querySelectorAll(".nav-link");
const io = new IntersectionObserver((entries) => {
  entries.forEach((en) => {
    if (en.isIntersecting) {
      navLinks.forEach((l) => {
        const on = l.dataset.nav === en.target.id;
        l.classList.toggle("bg-[#D6E8C7]", on);
        l.classList.toggle("hover:bg-[#EBF0E4]", !on);
      });
    }
  });
}, { rootMargin: "-40% 0px -55% 0px" });
sections.forEach((id) => { const s = document.getElementById(id); if (s) io.observe(s); });

/* ---------- REVIEW FORM ---------- */
const form = document.getElementById("reviewForm");
let rating = 0;
const starBtns = document.querySelectorAll(".star-btn");
const starLabel = document.getElementById("starLabel");
const labels = ["Ketuk bintang", "Tidak Puas (1/5)", "Kurang Puas (2/5)", "Cukup Puas (3/5)", "Puas (4/5)", "Sangat Puas (5/5)"];
function paintStars() {
  starBtns.forEach((b) => {
    const on = +b.dataset.star <= rating;
    b.querySelector(".material-symbols-outlined").classList.toggle("fill", on);
    b.querySelector(".material-symbols-outlined").style.color = on ? "#FF915A" : "#C5C8BD";
  });
  starLabel.textContent = labels[rating];
}
starBtns.forEach((b) => b.addEventListener("click", () => { rating = +b.dataset.star; paintStars(); hideErr("rating"); }));
paintStars();

const ulasan = document.getElementById("ulasan");
const charCount = document.getElementById("charCount");
ulasan.addEventListener("input", () => { charCount.textContent = Math.min(ulasan.value.length, 500); });
const foto = document.getElementById("foto");
const dropArea = document.getElementById("dropArea");
const preview = document.getElementById("fotoPreview");
function handleFile(f) {
  const errEl = document.querySelector('[data-err="foto"]');
  if (!f) return;
  const okType = ["image/jpeg", "image/png", "image/webp"].includes(f.type);
  const okSize = f.size <= 5 * 1024 * 1024;
  if (!okType || !okSize) { errEl.classList.remove("hidden"); return; }
  errEl.classList.add("hidden");
  const url = URL.createObjectURL(f);
  preview.src = url; preview.classList.remove("hidden");
}
foto.addEventListener("change", () => handleFile(foto.files[0]));
["dragover", "dragenter"].forEach((ev) => dropArea.addEventListener(ev, (e) => { e.preventDefault(); dropArea.classList.add("border-[#25331D]"); }));
["dragleave", "drop"].forEach((ev) => dropArea.addEventListener(ev, (e) => { e.preventDefault(); dropArea.classList.remove("border-[#25331D]"); }));
dropArea.addEventListener("drop", (e) => { const f = e.dataTransfer.files[0]; if (f) handleFile(f); });

function showErr(k) { document.querySelector(`[data-err="${k}"]`)?.classList.remove("hidden"); }
function hideErr(k) { document.querySelector(`[data-err="${k}"]`)?.classList.add("hidden"); }
["nama", "ulasan", "setuju"].forEach((k) => {
  const el = document.getElementById(k === "nama" ? "nama" : k === "ulasan" ? "ulasan" : "setuju");
  el?.addEventListener("input", () => hideErr(k));
  el?.addEventListener("change", () => hideErr(k));
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let ok = true;
  const nama = document.getElementById("nama").value.trim();
  if (!nama) { showErr("nama"); ok = false; }
  if (rating === 0) { showErr("rating"); ok = false; }
  if (ulasan.value.trim().length < 20) { showErr("ulasan"); ok = false; }
  if (!document.getElementById("setuju").checked) { showErr("setuju"); ok = false; }
  if (!ok) return;
  document.getElementById("formSuccess").classList.remove("hidden");
  document.getElementById("formSuccess").scrollIntoView({ behavior: "smooth", block: "center" });
  form.reset(); rating = 0; paintStars(); charCount.textContent = "0"; preview.classList.add("hidden"); preview.src = "";
});

/* ---------- SCROLL FX (reveal, parallax, navbar, count-up) ---------- */
function initScrollFX() {
  /* 1. Heading reveal — sekali, threshold ~15% */
  const heads = [...document.querySelectorAll("[data-rv]")];
  if (!reduceMotion) heads.forEach((el) => el.classList.add("rv"));
  if ("IntersectionObserver" in window && !reduceMotion) {
    const ro = new IntersectionObserver((es) => {
      es.forEach((en) => {
        if (en.isIntersecting) { en.target.classList.add("in"); ro.unobserve(en.target); }
      });
    }, { threshold: 0.15 });
    heads.forEach((el) => ro.observe(el));
  } else {
    heads.forEach((el) => el.classList.add("in"));
  }

  /* 2. Stagger grid statis (maks 8 item, 80ms) */
  document.querySelectorAll("[data-stagger]").forEach((box) => {
    const items = [...box.children].slice(0, 8);
    const rest = [...box.children].slice(8);
    if (reduceMotion || !("IntersectionObserver" in window)) return;
    items.forEach((c) => c.classList.add("rv"));
    const so = new IntersectionObserver((es) => {
      es.forEach((en) => {
        if (!en.isIntersecting) return;
        items.forEach((c, i) => { c.style.transitionDelay = (i * 80) + "ms"; });
        requestAnimationFrame(() => requestAnimationFrame(() => {
          items.forEach((c) => c.classList.add("in"));
          rest.forEach((c) => c.classList.add("in"));
        }));
        setTimeout(() => items.forEach((c) => { c.style.transitionDelay = ""; }), 1100);
        so.disconnect();
      });
    }, { threshold: 0.15 });
    so.observe(box);
  });

  /* 2b. Produk: stagger saat grid terlihat pertama kali */
  if (!reduceMotion && "IntersectionObserver" in window) {
    const go = new IntersectionObserver((es) => {
      es.forEach((en) => {
        if (!en.isIntersecting) return;
        gridRevealed = true;
        revealCardsStagger([...grid.querySelectorAll(".prod-card")]);
        go.disconnect();
      });
    }, { threshold: 0.1 });
    go.observe(grid);
    setTimeout(() => {
      if (!gridRevealed && grid.getBoundingClientRect().top < innerHeight) {
        gridRevealed = true;
        revealCardsStagger([...grid.querySelectorAll(".prod-card")]);
        go.disconnect();
      }
    }, 2500);
  } else {
    gridRevealed = true;
    grid.querySelectorAll(".prod-card").forEach((c) => c.classList.add("in"));
  }

  /* Tentang: foto kiri, teks kanan, badge pop menyusul */
  const tPhoto = document.getElementById("tentangPhoto");
  const tText = document.getElementById("tentangText");
  const tBadge = document.getElementById("tentangBadge");
  if (tPhoto && tText) {
    if (!reduceMotion && "IntersectionObserver" in window) {
      tPhoto.classList.add("rv-left");
      tText.classList.add("rv-right");
      if (tBadge) { tBadge.classList.add("rv-pop"); tBadge.style.transitionDelay = "300ms"; }
      const to = new IntersectionObserver((es) => {
        es.forEach((en) => {
          if (!en.isIntersecting) return;
          tPhoto.classList.add("in");
          tText.classList.add("in");
          if (tBadge) tBadge.classList.add("in");
          to.disconnect();
        });
      }, { threshold: 0.15 });
      to.observe(tPhoto);
    }
  }

  /* 3. Hero entrance berurutan 100ms */
  const heroItems = [...document.querySelectorAll(".hero-it")];
  if (reduceMotion) {
    heroItems.forEach((el) => el.classList.add("in"));
  } else {
    heroItems.forEach((el, i) => { el.style.transitionDelay = (i * 100) + "ms"; });
    requestAnimationFrame(() => requestAnimationFrame(() => heroItems.forEach((el) => el.classList.add("in"))));
    setTimeout(() => heroItems.forEach((el) => { el.style.transitionDelay = ""; }), 1200);
  }

  /* 5. Count-up rating & ulasan (1.2s) */
  document.querySelectorAll("[data-countup]").forEach((el) => {
    const target = parseFloat(el.dataset.countup);
    const dec = parseInt(el.dataset.decimals || "0", 10);
    const fmt = (v) => dec > 0 ? v.toFixed(dec) : String(Math.round(v));
    if (reduceMotion || !("IntersectionObserver" in window)) { el.textContent = fmt(target); return; }
    const co = new IntersectionObserver((es) => {
      es.forEach((en) => {
        if (!en.isIntersecting) return;
        co.disconnect();
        const t0 = performance.now(), D = 1200;
        const tick = (t) => {
          const p = Math.min((t - t0) / D, 1);
          const e = 1 - Math.pow(1 - p, 3);
          el.textContent = fmt(target * e);
          if (p < 1) requestAnimationFrame(tick);
          else el.textContent = fmt(target);
        };
        requestAnimationFrame(tick);
      });
    }, { threshold: 0.4 });
    co.observe(el);
  });

  /* 4. Navbar shrink + progress + parallax + floating (satu scroll listener rAF) */
  const header = document.getElementById("siteHeader");
  const prog = document.getElementById("scrollProgress");
  const heroBg = document.getElementById("heroBg");
  const heroSec = document.getElementById("beranda");
  const floatWrap = document.getElementById("floatWrap");
  let ticking = false;
  function onScroll() {
    const y = window.scrollY || 0;
    if (header) header.classList.toggle("scrolled", y > 40);
    if (prog) {
      const max = document.documentElement.scrollHeight - innerHeight;
      prog.style.transform = "scaleX(" + (max > 0 ? Math.min(y / max, 1) : 0) + ")";
    }
    if (heroBg && heroSec && !reduceMotion) {
      if (y < heroSec.offsetHeight + 200) {
        heroBg.style.transform = "translateY(" + Math.min(y * 0.12, 40) + "px)";
      }
    }
    if (floatWrap && heroSec) {
      const past = y > (heroSec.offsetTop + heroSec.offsetHeight - innerHeight * 0.4);
      floatWrap.classList.toggle("show", past || reduceMotion);
    }
    ticking = false;
  }
  addEventListener("scroll", () => {
    if (!ticking) { ticking = true; requestAnimationFrame(onScroll); }
  }, { passive: true });
  onScroll();
}

renderGrid();
initScrollFX();
