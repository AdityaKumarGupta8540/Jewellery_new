/* =========================================================
   AURA FINE JEWELLERY — Product Catalogue Engine
   Handles: Data, Filtering, Sorting, Rendering, Quick View
   ========================================================= */

const products = [
    // ── GOLD ──
    {
        id: 0, name: 'Royal Lakshmi Temple Necklace Set', category: 'Gold',
        subcategory: 'Necklaces', material: '22K Antique Gold', gemstone: 'Ruby & Emeralds',
        price: 565000, displayPrice: '₹5,65,000', originalPrice: null,
        image: '../assets/temple-jewellery.jpg',
        rating: 5.0, isNew: false, isBestseller: true, badge: 'Masterpiece',
        description: 'A hand-carved temple necklace set in pure 22K antique gold with inlaid rubies and emeralds. A sacred heirloom for the modern queen.'
    },
    {
        id: 1, name: 'Heritage Emerald Gold Ring', category: 'Rings',
        subcategory: 'Gold Rings', material: '22K Gold', gemstone: 'Forest Emerald',
        price: 168500, displayPrice: '₹1,68,500', originalPrice: '₹1,95,000',
        image: '../assets/heritage-gold-ring.jpg',
        rating: 4.8, isNew: true, isBestseller: false, badge: 'New',
        description: 'Intricately engraved 22K gold band set with a deep forest emerald — a timeless piece born from centuries of royal craftsmanship.'
    },
    {
        id: 7, name: 'Imperial Gold Bangle Set', category: 'Bangles',
        subcategory: 'Gold Bangles', material: '22K Antique Gold', gemstone: null,
        price: 195000, displayPrice: '₹1,95,000', originalPrice: null,
        image: '../assets/temple-jewellery.jpg',
        rating: 4.7, isNew: false, isBestseller: true, badge: 'Bestseller',
        description: 'A pair of ornately carved 22K antique gold bangles with temple-inspired motifs — the quintessential royal adornment.'
    },
    {
        id: 11, name: 'Sovereign Gold Chain Necklace', category: 'Gold',
        subcategory: 'Necklaces', material: '22K Gold', gemstone: null,
        price: 220000, displayPrice: '₹2,20,000', originalPrice: null,
        image: 'https://images.unsplash.com/photo-1599643478524-fb66f7ca065b?auto=format&fit=crop&q=80&w=800',
        rating: 4.6, isNew: false, isBestseller: false, badge: null,
        description: 'A refined 22K gold chain necklace with a hand-finished box-link design. Elegant simplicity at its finest.'
    },
    // ── DIAMOND ──
    {
        id: 2, name: 'Signature Diamond Necklace', category: 'Necklaces',
        subcategory: 'Diamond Necklaces', material: '18K Gold', gemstone: 'VVS Diamonds',
        price: 425000, displayPrice: '₹4,25,000', originalPrice: '₹4,80,000',
        image: '../assets/signature-diamond.jpg',
        rating: 4.9, isNew: false, isBestseller: true, badge: 'Bestseller',
        description: 'A breathtaking solitaire diamond ring crafted in 18K rose gold with a twisted pavé band. More than a diamond — it\'s a signature.'
    },
    {
        id: 12, name: 'Imperial Diamond Tennis Bracelet', category: 'Bracelets',
        subcategory: 'Diamond Bracelets', material: '18K White Gold', gemstone: 'Round Brilliant Diamonds',
        price: 280000, displayPrice: '₹2,80,000', originalPrice: null,
        image: '../assets/imperial-diamond-bracelet.jpg',
        rating: 4.9, isNew: false, isBestseller: true, badge: 'Crown Jewel',
        description: 'A stunning row of perfectly matched round brilliant-cut diamonds set in polished 18K white gold. Timeless elegance, forever yours.'
    },
    {
        id: 13, name: 'Imperial Solitaire Ring', category: 'Rings',
        subcategory: 'Diamond Rings', material: '18K White Gold', gemstone: '1.2ct VVS Diamond',
        price: 315000, displayPrice: '₹3,15,000', originalPrice: null,
        image: '../assets/imperial-diamond.jpg',
        rating: 5.0, isNew: false, isBestseller: true, badge: 'Masterpiece',
        description: 'A flawlessly set 1.2 carat VVS solitaire diamond in a classic four-prong 18K white gold setting — the definitive symbol of eternal love.'
    },
    {
        id: 14, name: 'Diamond Cluster Drop Earrings', category: 'Earrings',
        subcategory: 'Diamond Earrings', material: '18K White Gold', gemstone: 'Diamond Clusters',
        price: 195000, displayPrice: '₹1,95,000', originalPrice: '₹2,20,000',
        image: 'https://images.unsplash.com/photo-1635324316335-51921316bcf1?auto=format&fit=crop&q=80&w=800',
        rating: 4.8, isNew: true, isBestseller: false, badge: 'New',
        description: 'Dazzling diamond cluster drop earrings in 18K white gold — the perfect statement piece for any royal occasion.'
    },
    // ── BRIDAL ──
    {
        id: 5, name: 'Kundan Bridal Choker Set', category: 'Bridal',
        subcategory: 'Bridal Necklaces', material: '22K Gold', gemstone: 'Uncut Diamonds & Rubies',
        price: 850000, displayPrice: '₹8,50,000', originalPrice: null,
        image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80&w=800',
        rating: 5.0, isNew: false, isBestseller: true, badge: 'Heirloom',
        description: 'An exquisite Kundan bridal choker set in 22K gold with uncut diamonds and rubies — crafted for the most sacred chapter of your story.'
    },
    {
        id: 15, name: 'Royal Bridal Maang Tikka', category: 'Bridal',
        subcategory: 'Bridal Accessories', material: '22K Gold', gemstone: 'Pearls & Emeralds',
        price: 175000, displayPrice: '₹1,75,000', originalPrice: null,
        image: 'https://images.unsplash.com/photo-1599643478524-fb66f7ca065b?auto=format&fit=crop&q=80&w=800',
        rating: 4.8, isNew: true, isBestseller: false, badge: 'New',
        description: 'A regal gold maang tikka adorned with freshwater pearls and Colombian emeralds — the crowning jewel of any bridal ensemble.'
    },
    // ── RINGS ──
    {
        id: 16, name: 'Floral Diamond Gold Ring', category: 'Rings',
        subcategory: 'Gold Rings', material: '18K Yellow Gold', gemstone: 'Diamond Petals',
        price: 88000, displayPrice: '₹88,000', originalPrice: '₹1,05,000',
        image: 'https://images.unsplash.com/photo-1605100804763-247f66126e28?auto=format&fit=crop&q=80&w=800',
        rating: 4.6, isNew: false, isBestseller: false, badge: null,
        description: 'A delicate floral diamond ring in 18K yellow gold — a bloom of brilliance to wear every day.'
    },
    {
        id: 17, name: 'Royal Emerald Statement Ring', category: 'Rings',
        subcategory: 'Gemstone Rings', material: '18K Gold', gemstone: 'Colombian Emerald',
        price: 245000, displayPrice: '₹2,45,000', originalPrice: null,
        image: '../assets/heritage-gold-ring.jpg',
        rating: 4.9, isNew: false, isBestseller: true, badge: 'Bestseller',
        description: 'A bold Colombian emerald set in an ornate 18K gold bezel — a ring fit for royalty.'
    },
    // ── EARRINGS ──
    {
        id: 3, name: 'Temple Gold Jhumka Earrings', category: 'Earrings',
        subcategory: 'Gold Earrings', material: '22K Gold', gemstone: 'Ruby Drops',
        price: 42000, displayPrice: '₹42,000', originalPrice: null,
        image: 'https://images.unsplash.com/photo-1635324316335-51921316bcf1?auto=format&fit=crop&q=80&w=800',
        rating: 4.7, isNew: false, isBestseller: false, badge: null,
        description: 'Handcrafted 22K gold jhumka earrings with delicate filigree work and ruby drops — a timeless Indian classic.'
    },
    {
        id: 18, name: 'Pearl Drop Gold Earrings', category: 'Earrings',
        subcategory: 'Pearl Earrings', material: '22K Gold', gemstone: 'South Sea Pearls',
        price: 68000, displayPrice: '₹68,000', originalPrice: '₹82,000',
        image: 'https://images.unsplash.com/photo-1635324316335-51921316bcf1?auto=format&fit=crop&q=80&w=800',
        rating: 4.8, isNew: true, isBestseller: false, badge: 'New',
        description: 'Lustrous South Sea pearl drop earrings in polished 22K gold settings — understated luxury for every occasion.'
    },
    // ── NECKLACES ──
    {
        id: 19, name: 'Gold Layered Chain Set', category: 'Necklaces',
        subcategory: 'Gold Necklaces', material: '22K Gold', gemstone: null,
        price: 145000, displayPrice: '₹1,45,000', originalPrice: null,
        image: 'https://images.unsplash.com/photo-1599643478524-fb66f7ca065b?auto=format&fit=crop&q=80&w=800',
        rating: 4.5, isNew: false, isBestseller: false, badge: null,
        description: 'A set of three interlocking 22K gold chains of varying lengths — effortlessly layered, endlessly elegant.'
    },
    {
        id: 20, name: 'Antique Haar Necklace', category: 'Necklaces',
        subcategory: 'Antique Necklaces', material: '22K Antique Gold', gemstone: 'Emeralds & Rubies',
        price: 395000, displayPrice: '₹3,95,000', originalPrice: null,
        image: '../assets/temple-jewellery.jpg',
        rating: 5.0, isNew: false, isBestseller: true, badge: 'Heritage',
        description: 'A magnificent antique gold haar necklace with alternating emerald and ruby drops — a museum-worthy piece of living history.'
    },
    // ── BRACELETS ──
    {
        id: 4, name: 'Royal Diamond Bracelet', category: 'Bracelets',
        subcategory: 'Diamond Bracelets', material: '18K White Gold', gemstone: 'Round Diamonds',
        price: 280000, displayPrice: '₹2,80,000', originalPrice: null,
        image: 'https://images.unsplash.com/photo-1515562141207-7a8efc11b11f?auto=format&fit=crop&q=80&w=800',
        rating: 4.9, isNew: false, isBestseller: true, badge: 'Bestseller',
        description: 'A delicate row of round-cut diamonds set in polished 18K white gold — wear it alone or stack it for a bolder statement.'
    },
    {
        id: 21, name: 'Temple Gold Bangle Bracelet', category: 'Bracelets',
        subcategory: 'Gold Bracelets', material: '22K Gold', gemstone: null,
        price: 125000, displayPrice: '₹1,25,000', originalPrice: null,
        image: 'https://images.unsplash.com/photo-1515562141207-7a8efc11b11f?auto=format&fit=crop&q=80&w=800',
        rating: 4.6, isNew: true, isBestseller: false, badge: 'New',
        description: 'A wide 22K gold cuff bracelet with hand-engraved floral motifs — bold, beautiful, and entirely royal.'
    },
    // ── BANGLES ──
    {
        id: 22, name: 'Paisley Kara Gold Bangles', category: 'Bangles',
        subcategory: 'Gold Bangles', material: '22K Gold', gemstone: null,
        price: 98000, displayPrice: '₹98,000', originalPrice: '₹1,15,000',
        image: '../assets/temple-jewellery.jpg',
        rating: 4.7, isNew: false, isBestseller: false, badge: null,
        description: 'A set of two paisley-engraved 22K gold kara bangles — a celebration of Indian artisanal heritage.'
    },
    {
        id: 23, name: 'Diamond-Studded Gold Bangles', category: 'Bangles',
        subcategory: 'Diamond Bangles', material: '22K Gold', gemstone: 'Single-Cut Diamonds',
        price: 235000, displayPrice: '₹2,35,000', originalPrice: null,
        image: '../assets/imperial-diamond-bracelet.jpg',
        rating: 4.8, isNew: false, isBestseller: true, badge: 'Bestseller',
        description: 'Elegant 22K gold bangles encrusted with a single row of single-cut diamonds — the perfect balance of tradition and sparkle.'
    },
    // ── PENDANTS ──
    {
        id: 8, name: 'Emerald Drop Pendant', category: 'Pendants',
        subcategory: 'Gemstone Pendants', material: '18K Gold', gemstone: 'Zambian Emerald',
        price: 125000, displayPrice: '₹1,25,000', originalPrice: null,
        image: 'https://images.unsplash.com/photo-1599643478524-fb66f7ca065b?auto=format&fit=crop&q=80&w=800',
        rating: 4.8, isNew: true, isBestseller: false, badge: 'New',
        description: 'A pear-cut Zambian emerald suspended in a delicate 18K gold frame — vivid, luminous, and utterly captivating.'
    },
    {
        id: 24, name: 'Diamond Lotus Pendant', category: 'Pendants',
        subcategory: 'Diamond Pendants', material: '18K White Gold', gemstone: 'Pavé Diamonds',
        price: 185000, displayPrice: '₹1,85,000', originalPrice: '₹2,10,000',
        image: '../assets/signature-diamond.jpg',
        rating: 4.9, isNew: false, isBestseller: true, badge: 'Bestseller',
        description: 'A pavé diamond lotus pendant in 18K white gold — a symbol of purity and timeless beauty.'
    }
];

/* ── STATE ── */
let activeCategory = 'All';
let activeSortKey  = 'recommended';
let wishlist       = new Set();

/* ── UTILITY ── */
const isPagesDir = () => window.location.pathname.includes('/pages/');
const imgSrc = (img) => (img.startsWith('http') ? img : (isPagesDir() ? img : img.replace('../', '')));
const linkHref = (id) => (isPagesDir() ? `product-detail.html?id=${id}` : `pages/product-detail.html?id=${id}`);
const stars = (rating) => {
    const full = Math.floor(rating), half = rating % 1 >= 0.5;
    return `<span class="text-gold text-xs">${'★'.repeat(full)}${half ? '½' : ''}${'☆'.repeat(5 - full - (half ? 1 : 0))}</span><span class="text-charcoal/50 text-xs ml-1">(${rating})</span>`;
};

/* ── FILTER + SORT ── */
function getFilteredSorted() {
    let list = activeCategory === 'All'
        ? [...products]
        : products.filter(p => p.category.toLowerCase() === activeCategory.toLowerCase());

    switch (activeSortKey) {
        case 'newest':      list = list.filter(p => p.isNew).concat(list.filter(p => !p.isNew)); break;
        case 'price-asc':   list.sort((a, b) => a.price - b.price); break;
        case 'price-desc':  list.sort((a, b) => b.price - a.price); break;
        case 'bestseller':  list = list.filter(p => p.isBestseller).concat(list.filter(p => !p.isBestseller)); break;
        case 'rating':      list.sort((a, b) => b.rating - a.rating); break;
    }
    return list;
}

/* ── PRODUCT CARD ── */
function buildCard(product) {
    const src  = imgSrc(product.image);
    const link = linkHref(product.id);
    const isWishlisted = wishlist.has(product.id);
    const badgeHtml = product.badge
        ? `<div class="absolute top-3 left-3 z-10 px-2.5 py-0.5 text-[9px] tracking-[0.18em] uppercase font-cinzel bg-charcoal text-ivory shadow">${product.badge}</div>`
        : '';
    const discountHtml = product.originalPrice
        ? `<span class="line-through text-charcoal/40 text-sm ml-2">${product.originalPrice}</span>` : '';

    return `
    <div class="product-card group relative bg-white border border-taupe/15 hover:border-gold/40 hover:shadow-[0_8px_30px_rgba(185,154,98,0.12)] transition-all duration-500 cursor-pointer" data-id="${product.id}">
        ${badgeHtml}
        <!-- Wishlist -->
        <button class="wishlist-btn absolute top-3 right-3 z-20 w-8 h-8 flex items-center justify-center bg-white/90 backdrop-blur border border-taupe/30 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:border-gold hover:bg-gold hover:text-white ${isWishlisted ? '!opacity-100 border-gold text-gold' : 'text-charcoal/60'}" data-id="${product.id}" title="Wishlist">
            <i data-lucide="heart" class="w-3.5 h-3.5 ${isWishlisted ? 'fill-current' : ''}"></i>
        </button>
        <!-- Image -->
        <div class="relative overflow-hidden aspect-[3/4] bg-[#faf8f4]">
            <img src="${src}" alt="${product.name}" loading="lazy"
                 class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105">
            <!-- Quick View -->
            <div class="absolute inset-x-0 bottom-0 flex justify-center pb-4 translate-y-full group-hover:translate-y-0 transition-transform duration-400">
                <button class="quick-view-btn flex items-center gap-2 bg-charcoal/90 backdrop-blur text-ivory text-[10px] tracking-[0.18em] uppercase font-cinzel px-5 py-2.5 hover:bg-gold transition-colors duration-300" data-id="${product.id}">
                    <i data-lucide="eye" class="w-3.5 h-3.5"></i> Quick View
                </button>
            </div>
        </div>
        <!-- Info -->
        <a href="${link}" class="block p-4 text-center border-t border-taupe/10">
            <p class="text-[9px] tracking-[0.25em] uppercase font-cinzel text-gold mb-1">${product.subcategory}</p>
            <h3 class="font-royal text-base text-charcoal leading-snug mb-2 group-hover:text-gold transition-colors duration-300">${product.name}</h3>
            <div class="flex justify-center items-center gap-1 mb-2">${stars(product.rating)}</div>
            <p class="text-[11px] text-charcoal/50 font-serif italic mb-2">${product.material}${product.gemstone ? ' · ' + product.gemstone : ''}</p>
            <div class="flex items-center justify-center gap-1">
                <span class="font-cinzel text-sm font-semibold text-charcoal">${product.displayPrice}</span>
                ${discountHtml}
            </div>
        </a>
    </div>`;
}

/* ── RENDER GRID ── */
function renderGrid() {
    const container = document.getElementById('shop-grid');
    if (!container) return;

    const list = getFilteredSorted();
    if (list.length === 0) {
        container.innerHTML = `<p class="col-span-full text-center text-charcoal/50 py-20 font-serif italic text-xl">No jewellery found in this category.</p>`;
    } else {
        container.innerHTML = list.map(buildCard).join('');
    }

    // Product count
    const countEl = document.getElementById('product-count');
    if (countEl) countEl.textContent = `${list.length} ${list.length === 1 ? 'piece' : 'pieces'}`;

    if (typeof lucide !== 'undefined') lucide.createIcons();
    bindCardEvents();
}

/* ── BIND CARD EVENTS ── */
function bindCardEvents() {
    document.querySelectorAll('.wishlist-btn').forEach(btn => {
        btn.addEventListener('click', e => {
            e.stopPropagation();
            const id = parseInt(btn.dataset.id);
            if (wishlist.has(id)) { wishlist.delete(id); btn.classList.remove('!opacity-100','border-gold','text-gold'); }
            else { wishlist.add(id); btn.classList.add('!opacity-100','border-gold','text-gold'); }
        });
    });

    document.querySelectorAll('.quick-view-btn').forEach(btn => {
        btn.addEventListener('click', e => {
            e.stopPropagation();
            openQuickView(parseInt(btn.dataset.id));
        });
    });
}

/* ── QUICK VIEW MODAL ── */
function openQuickView(id) {
    const p = products.find(x => x.id === id);
    if (!p) return;

    const src  = imgSrc(p.image);
    const link = linkHref(p.id);
    const isWl = wishlist.has(id);
    const discountLine = p.originalPrice
        ? `<span class="line-through text-charcoal/40 text-base ml-2">${p.originalPrice}</span>` : '';

    const modal = document.getElementById('quick-view-modal');
    modal.querySelector('#qv-content').innerHTML = `
        <div class="flex flex-col md:flex-row h-full">
            <!-- Image -->
            <div class="w-full md:w-1/2 bg-[#faf8f4] flex items-center justify-center overflow-hidden min-h-[300px] md:min-h-0">
                <img src="${src}" alt="${p.name}" class="w-full h-full object-cover">
            </div>
            <!-- Details -->
            <div class="w-full md:w-1/2 p-8 md:p-10 flex flex-col justify-between overflow-y-auto">
                <div>
                    <p class="text-[9px] tracking-[0.3em] uppercase font-cinzel text-gold mb-2">${p.subcategory}</p>
                    <h2 class="font-royal text-2xl md:text-3xl text-charcoal mb-3 leading-snug">${p.name}</h2>
                    <div class="flex items-center gap-2 mb-4">${stars(p.rating)}</div>
                    <div class="w-10 h-px bg-gold/40 mb-5"></div>
                    <p class="text-sm text-charcoal/70 font-serif italic leading-relaxed mb-5">${p.description}</p>
                    <div class="text-xs text-charcoal/60 font-cinzel tracking-wider space-y-1 mb-6">
                        <p><span class="text-charcoal">Material:</span> ${p.material}</p>
                        ${p.gemstone ? `<p><span class="text-charcoal">Gemstone:</span> ${p.gemstone}</p>` : ''}
                    </div>
                    <div class="flex items-end gap-3 mb-8">
                        <span class="font-royal text-2xl text-charcoal">${p.displayPrice}</span>
                        ${discountLine}
                    </div>
                </div>
                <div class="flex flex-col gap-3">
                    <a href="${link}" class="w-full text-center bg-charcoal text-ivory text-xs tracking-[0.2em] uppercase font-cinzel py-3.5 hover:bg-gold transition-colors duration-300">
                        View Full Details
                    </a>
                    <button class="qv-wishlist w-full border border-taupe/40 text-charcoal text-xs tracking-[0.2em] uppercase font-cinzel py-3 hover:border-gold hover:text-gold transition-colors duration-300 flex items-center justify-center gap-2 ${isWl ? 'border-gold text-gold' : ''}" data-id="${id}">
                        <i data-lucide="heart" class="w-4 h-4 ${isWl ? 'fill-current' : ''}"></i>
                        ${isWl ? 'Saved to Wishlist' : 'Add to Wishlist'}
                    </button>
                </div>
            </div>
        </div>`;

    modal.classList.remove('opacity-0', 'pointer-events-none');
    modal.classList.add('opacity-100');
    document.body.style.overflow = 'hidden';
    if (typeof lucide !== 'undefined') lucide.createIcons();

    // wishlist in modal
    modal.querySelector('.qv-wishlist')?.addEventListener('click', function() {
        const pid = parseInt(this.dataset.id);
        if (wishlist.has(pid)) {
            wishlist.delete(pid);
            this.innerHTML = `<i data-lucide="heart" class="w-4 h-4"></i> Add to Wishlist`;
            this.classList.remove('border-gold','text-gold');
        } else {
            wishlist.add(pid);
            this.innerHTML = `<i data-lucide="heart" class="w-4 h-4 fill-current"></i> Saved to Wishlist`;
            this.classList.add('border-gold','text-gold');
        }
        if (typeof lucide !== 'undefined') lucide.createIcons();
    });
}

function closeQuickView() {
    const modal = document.getElementById('quick-view-modal');
    modal.classList.add('opacity-0', 'pointer-events-none');
    modal.classList.remove('opacity-100');
    document.body.style.overflow = '';
}

/* ── CATEGORY TABS ── */
function initCategoryTabs() {
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            activeCategory = btn.dataset.category;
            document.querySelectorAll('.filter-btn').forEach(b => {
                b.classList.remove('active-cat');
            });
            btn.classList.add('active-cat');
            renderGrid();
        });
    });
}

/* ── SORT DROPDOWN ── */
function initSort() {
    const sortEl = document.getElementById('sort-select');
    if (!sortEl) return;
    sortEl.addEventListener('change', () => {
        activeSortKey = sortEl.value;
        renderGrid();
    });
}

/* ── URL PARAMS (from homepage links) ── */
function handleURLParams() {
    const params  = new URLSearchParams(window.location.search);
    const search  = params.get('search');
    const catParam = params.get('category');

    if (search) {
        const q = search.toLowerCase().trim();
        const container = document.getElementById('shop-grid');
        const list = products.filter(p =>
            p.name.toLowerCase().includes(q) ||
            p.category.toLowerCase().includes(q) ||
            p.material.toLowerCase().includes(q) ||
            (p.gemstone && p.gemstone.toLowerCase().includes(q))
        );
        if (container) {
            container.innerHTML = list.length
                ? list.map(buildCard).join('')
                : `<p class="col-span-full text-center text-charcoal/50 py-20 font-serif italic text-xl">No results for "${search}".</p>`;
            const countEl = document.getElementById('product-count');
            if (countEl) countEl.textContent = `${list.length} pieces`;
            if (typeof lucide !== 'undefined') lucide.createIcons();
            bindCardEvents();
        }
        return true;
    }

    if (catParam) {
        const matched = ['All','Gold','Diamond','Bridal','Rings','Earrings','Necklaces','Bracelets','Bangles','Pendants']
            .find(c => c.toLowerCase() === catParam.toLowerCase());
        if (matched) {
            activeCategory = matched;
            document.querySelectorAll('.filter-btn').forEach(b => {
                b.classList.toggle('active-cat', b.dataset.category === matched);
            });
        }
    }
    return false;
}

/* ── BOOT ── */
document.addEventListener('DOMContentLoaded', () => {
    if (!document.getElementById('shop-grid')) return; // only run on products page

    const handled = handleURLParams();
    if (!handled) renderGrid();

    initCategoryTabs();
    initSort();

    // Quick view close
    document.getElementById('qv-close')?.addEventListener('click', closeQuickView);
    document.getElementById('quick-view-modal')?.addEventListener('click', e => {
        if (e.target === e.currentTarget) closeQuickView();
    });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeQuickView(); });
});

/* ── kept for home page (if ever needed) ── */
function renderProductGrid(list, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = list.map(buildCard).join('');
    if (typeof lucide !== 'undefined') lucide.createIcons();
    bindCardEvents();
}
