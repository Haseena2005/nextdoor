// NEXTDOOR - Global Scripts V4
// Trusted Hands Just Next Door - Service Marketplace Engine

/* ─── MOBILE NAV ─── */
function toggleMenu() {
  const n = document.getElementById('navLinks');
  if (n) n.classList.toggle('active');
}
document.addEventListener('click', (e) => {
  const nav = document.getElementById('navLinks');
  const hamburger = document.querySelector('.hamburger');
  if (nav && hamburger && !nav.contains(e.target) && !hamburger.contains(e.target)) {
    nav.classList.remove('active');
  }
});

/* ─── STRICT IMAGE MAP ─── */
// Every skill category has a curated, relevant Unsplash image (all URLs verified)
const SKILL_IMAGES = {
  // Pottery: potter shaping clay on wheel
  "Pottery":        "images/potter.jpg",
  // Mehendi Artist: intricate henna design on palms
  "Mehendi Artist": "images/mehandi_artist.jpg",
  // Electrician: electrician working on wiring panel
  "Electrician":    "images/electrician.jpg",
  // Plumber: plumber fixing under-sink pipes
  "Plumber":        "images/plumber.jpg",
  // Tailor: sewing machine with fabric
  "Tailor":         "images/tailor.jpg",
  // Weaver: close-up of handloom threads being woven
  "Weaver":         "images/tailor.jpg",
  // Mandala Artist: circular mandala drawing on paper
  "Mandala Artist": "images/mandela_artist.jpg",
  // Painter: painter painting a wall with roller
  "Painter":        "images/painter.jpg",
  // Folk Artist: folk art painting/performance
  "Folk Artist":    "images/folk_artist.jpg",
};

/* ─── NEXTDOOR MOCK DB - 4 CATEGORIES ─── */
const mockProfessionals = [
  {
    id: 1, name: "Ravi Kumar", skill: "Pottery", category: "Traditional Arts",
    location: "Chennai", experience: 15, rating: 4.9, price: 800, unit: "/hr",
    verified: true, nearby: true,
    img: SKILL_IMAGES["Pottery"],
    desc: "Master of traditional terracotta decor and custom clay wares. 15 years on the wheel.",
    gallery: [SKILL_IMAGES["Pottery"], "images/potter.jpg", "images/handamdecrafts.jpg"]
  },
  {
    id: 2, name: "Anita Devi", skill: "Mehendi Artist", category: "Events & Beauty",
    location: "Chennai", experience: 8, rating: 4.8, price: 1500, unit: "/session",
    verified: true, nearby: true,
    img: SKILL_IMAGES["Mehendi Artist"],
    desc: "Exquisite bridal henna designs, Arabic and traditional patterns for all celebrations.",
    gallery: [SKILL_IMAGES["Mehendi Artist"]]
  },
  {
    id: 3, name: "Suresh M.", skill: "Electrician", category: "Home Services",
    location: "Bangalore", experience: 5, rating: 5.0, price: 400, unit: "/visit",
    verified: true, nearby: false,
    img: SKILL_IMAGES["Electrician"],
    desc: "Resident wiring expert, specializing in efficient repairs and safety-first installs.",
    gallery: [SKILL_IMAGES["Electrician"]]
  },
  {
    id: 4, name: "Priya Sharma", skill: "Mandala Artist", category: "Traditional Arts",
    location: "Mumbai", experience: 6, rating: 4.7, price: 1000, unit: "/hr",
    verified: false, nearby: false,
    img: SKILL_IMAGES["Mandala Artist"],
    desc: "Intricate mandala artist creating meditative wall art and customized canvas pieces.",
    gallery: [SKILL_IMAGES["Mandala Artist"]]
  },
  {
    id: 5, name: "Lakshmi Weavers", skill: "Weaver", category: "Fashion & Textiles",
    location: "Hyderabad", experience: 20, rating: 4.9, price: 2500, unit: "/saree",
    verified: true, nearby: false,
    img: SKILL_IMAGES["Weaver"],
    desc: "Traditional handloom silks, woven with precision and legacy techniques.",
    gallery: [SKILL_IMAGES["Weaver"], "images/tailor.jpg"]
  },
  {
    id: 6, name: "Vijay Singh", skill: "Painter", category: "Home Services",
    location: "Chennai", experience: 12, rating: 4.5, price: 500, unit: "/day",
    verified: true, nearby: true,
    img: SKILL_IMAGES["Painter"],
    desc: "Expert wall painter and texture specialist for modern home interiors.",
    gallery: [SKILL_IMAGES["Painter"]]
  },
  {
    id: 7, name: "Mohan Lal", skill: "Plumber", category: "Home Services",
    location: "Delhi", experience: 10, rating: 4.6, price: 350, unit: "/visit",
    verified: true, nearby: false,
    img: SKILL_IMAGES["Plumber"],
    desc: "24/7 emergency plumbing services, leak detection, and pipe repairs.",
    gallery: [SKILL_IMAGES["Plumber"]]
  },
  {
    id: 8, name: "Sarah Textiles", skill: "Tailor", category: "Fashion & Textiles",
    location: "Mumbai", experience: 7, rating: 4.7, price: 600, unit: "/suit",
    verified: true, nearby: false,
    img: SKILL_IMAGES["Tailor"],
    desc: "Custom stitching for ethnic and modern corporate wear, bridal specialists.",
    gallery: [SKILL_IMAGES["Tailor"]]
  },
  {
    id: 9, name: "Rajesh Folk Arts", skill: "Folk Artist", category: "Traditional Arts",
    location: "Rajasthan", experience: 25, rating: 5.0, price: 5000, unit: "/performance",
    verified: true, nearby: false,
    img: SKILL_IMAGES["Folk Artist"],
    desc: "Preserving Rajasthani folk traditions through performance and painting.",
    gallery: [SKILL_IMAGES["Folk Artist"]]
  }
];

const mockProducts = [
  { id: 1, name: "Hand-painted Clay Pot", price: 1200, img: "images/potter.jpg", creator: "Ravi Kumar", tag: "Pottery" },
  { id: 2, name: "Indigo Silk Saree",     price: 8500, img: "images/tailor.jpg", creator: "Lakshmi Weavers", tag: "Textiles" },
  { id: 3, name: "Floral Mandala Frame",  price: 4500, img: "images/mandela_artist.jpg", creator: "Priya Sharma", tag: "Art" },
  { id: 4, name: "Terracotta Earrings",  price: 1500, img: "images/handamdecrafts.jpg", creator: "Traditional Crafts", tag: "Jewelry" }
];

const mockWorkshops = [
  { id: 1, title: "Pottery Wheel Basics",    host: "Ravi Kumar",     date: "Oct 25", duration: "3 Hours", price: 1500,  img: SKILL_IMAGES["Pottery"],        desc: "Learn to shape clay on a traditional potter's wheel with hands-on guidance." },
  { id: 2, title: "Mandala Painting Class",  host: "Priya Sharma",   date: "Oct 28", duration: "2 Hours", price: 800,   img: SKILL_IMAGES["Mandala Artist"],  desc: "Unlock creativity through symmetrical, meditative mandala patterns." },
  { id: 3, title: "Home Electrical Safety",  host: "Suresh M.",      date: "Nov 5",  duration: "4 Hours", price: 500,   img: SKILL_IMAGES["Electrician"],     desc: "Critical DIY skills for safe home electrical maintenance." },
  { id: 4, title: "Handloom Weaving Intro",  host: "Lakshmi Weavers",date: "Nov 10", duration: "5 Hours", price: 1200,  img: SKILL_IMAGES["Weaver"],         desc: "Discover the art of traditional handloom silk saree weaving." }
];

/* ─── PROFESSIONAL CARD RENDERER ─── */
function renderProfessionalCard(prof) {
  return `
    <div class="card">
      <div class="card-img-container">
        <img src="${prof.img}" class="card-img" alt="${prof.skill} - ${prof.name}" loading="lazy">
      </div>
      <div class="card-body">
        <div class="card-header">
          <h3 class="card-title">${prof.name}</h3>
          <div style="display:flex;gap:6px;flex-wrap:wrap;">
            ${prof.verified ? '<span class="badge badge-verified">✔ Verified</span>' : ''}
            ${prof.nearby   ? '<span class="badge badge-nearby">📍 Nearby</span>'  : ''}
          </div>
        </div>
        <p class="card-subtitle">${prof.skill} &nbsp;•&nbsp; ⭐ ${prof.rating} &nbsp;•&nbsp; ${prof.location}</p>
        <p class="card-text" style="margin-bottom:16px; flex:1;">${prof.desc}</p>
        <p style="font-size:0.8rem;font-weight:700;color:var(--muted);margin-bottom:16px;">📅 ${prof.experience} Yrs Experience</p>
        <div class="flex-between mt-auto">
          <span style="font-weight:900;color:var(--primary);font-size:1.1rem;">₹${prof.price.toLocaleString()}<span style="font-size:0.7rem;font-weight:500;color:var(--muted);"> ${prof.unit}</span></span>
          <div style="display:flex;gap:6px;">
            <a href="professional_profile.html?id=${prof.id}" class="btn btn-outline btn-sm">Profile</a>
            <a href="booking.html?id=${prof.id}"           class="btn btn-primary btn-sm">Book Service</a>
          </div>
        </div>
      </div>
    </div>`;
}

/* ─── FILTER ENGINE ─── */
function applyFilters() {
  const grid = document.getElementById('servicesGrid') || document.getElementById('artisansGrid');
  if (!grid) return;

  const keyword  = (document.getElementById('filterKeyword')?.value   || '').toLowerCase().trim();
  const skill    =  document.getElementById('filterSkill')?.value     || 'all';
  const loc      =  document.getElementById('filterLocation')?.value  || 'all';
  const rating   = parseFloat(document.getElementById('filterRating')?.value || '0');
  const sort     =  document.getElementById('sortOption')?.value      || 'recommended';

  let results = mockProfessionals.filter(a => {
    const kw  = !keyword || a.name.toLowerCase().includes(keyword) || a.skill.toLowerCase().includes(keyword) || a.desc.toLowerCase().includes(keyword);
    const sk  = skill === 'all' || a.skill === skill || a.category === skill;
    const lc  = loc === 'all'   || a.location === loc;
    const rt  = a.rating >= rating;
    return kw && sk && lc && rt;
  });

  if (sort === 'rating_high') results.sort((a, b) => b.rating - a.rating);
  if (sort === 'price_low')   results.sort((a, b) => a.price   - b.price);
  if (sort === 'exp_high')    results.sort((a, b) => b.experience - a.experience);

  const counter = document.getElementById('resultsCount');
  if (counter) counter.textContent = results.length;

  grid.innerHTML = results.length
    ? results.map(renderProfessionalCard).join('')
    : `<div style="grid-column:1/-1;text-align:center;padding:60px;color:var(--muted);">
         <p style="font-size:2rem;">🔍</p>
         <p style="font-weight:700;font-size:1.1rem;">No professionals found matching your filters near you.</p>
       </div>`;
}

/* ─── CART ─── */
function addToCartGeneric(name) {
  const toast = document.createElement('div');
  toast.innerHTML = `✅ <strong>${name}</strong> added to cart!`;
  Object.assign(toast.style, {
    position:'fixed', bottom:'30px', right:'30px', zIndex: 9999,
    background: '#1E3A8A', color: 'white', padding: '16px 24px',
    borderRadius: '14px', fontWeight: '700', fontSize: '0.95rem',
    boxShadow: '0 8px 24px rgba(0,0,0,0.2)', transition: 'opacity 0.5s',
    maxWidth: '320px'
  });
  document.body.appendChild(toast);
  setTimeout(() => { toast.style.opacity = '0'; setTimeout(() => toast.remove(), 500); }, 2500);
}

/* ─── MOCK CHECKOUT FLOW ─── */
function addToCartGeneric(itemName) {
  const confirmCheckout = confirm(`"${itemName}" added to cart. Would you like to checkout now?`);
  if (confirmCheckout) {
    alert("Checkout successful! Your order has been placed.");
    window.location.href = "customer_dashboard.html#orders";
  }
}

/* ─── AUTO-INIT ─── */
if (document.getElementById('servicesGrid') || document.getElementById('artisansGrid')) {
  const params = new URLSearchParams(window.location.search);
  const cat = params.get('cat');
  if (cat) {
    const sel = document.getElementById('filterSkill');
    if (sel) sel.value = cat;
  }
  applyFilters();
}
