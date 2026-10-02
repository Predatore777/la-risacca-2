/* ====== DATI DA CONFERMARE COL TITOLARE ====== */
// Numero WhatsApp in formato internazionale senza + (es. "393331234567"). Vuoto = pulsanti WhatsApp nascosti.
const WHATSAPP = "";
const WA_TEXT = "Buongiorno, vorrei prenotare un tavolo a La Risacca 2.";
// Orari: 0 = domenica … 6 = sabato. Ogni fascia [apertura, chiusura].
const TURNI = [["12:30", "14:30"], ["19:30", "23:30"]];
const ORARI = { 0: [], 1: TURNI, 2: TURNI, 3: TURNI, 4: TURNI, 5: TURNI, 6: TURNI };

/* ====== MENU (fonte: larisacca2.com) ====== */
const MENU = [
  { id: "crudi", t: "Crudi e antipasti", img: ["piatti12", "piatti6"], g: [
    ["Frutti di mare e crudi", [
      ["Ostriche Kys", "4–5 cad."], ["Scampi", "5–7 cad."], ["Gamberi rossi di Mazara del Vallo", "5–7 cad."],
      ["Tartufi di mare", "3 cad."], ["Tartare di tonno, ricciola, salmone", "20"], ["Tartare di gambero rosso", "8 /hg"],
      ["Carpaccio di tonno, ricciola, spada, salmone", "20"], ["Piatto di degustazione", "25"]]],
    ["Antipasti", [
      ["Antipasto della Risacca", "25"], ["Insalata di mare al vapore", "20"], ["Gran misto gratinato", "22"],
      ["Scampi e polpo alla catalana", "20"], ["Le sfumature del polpo", "20"],
      ["Code di scampi con verdure di stagione e bottarga", "18"], ["Gamberi rossi di Mazara con asparagi", "30"],
      ["Zuppa di cozze", "15"], ["Sauté di vongole con crostini toscani all'aglio", "18"],
      ["Guazzetto di scampi, calamari e calamaretti", "20"], ["Acquarello di capesante", "5"],
      ["Alici marinate con pepe rosa o peperoncini", "15"], ["Acciughe del Cantabrico con crostini e burro", "18"],
      ["Zuppa di frutti di mare", "25"]]]] },
  { id: "primi", t: "Primi", img: ["piatti10", "piatti8"], g: [
    ["Primi piatti", [
      ["Tagliolini della Risacca", "18"], ["Tagliolini scampi e fiori di zucca", "16"],
      ["Tagliolini gambero rosso e tartufo nero", "25"], ["Tagliolini al riccio", "20"],
      ["Spaghetti alle vongole", "16"], ["Spaghetti riccio, vongole e bottarga", "20"],
      ["Spaghetti scampi, vongole, calamaretti e bottarga", "20"], ["Fregola sarda ai frutti di mare", "20"],
      ["Paccheri al granchio", "20"], ["Paccheri allo scorfano", "15"],
      ["Linguine all'astice canadese", "8 /hg"], ["Linguine all'astice blu", "12 /hg"], ["Linguine all'aragosta", "14 /hg"],
      ["Risotto ai frutti di mare", "16"], ["Risotto scampi e fiori di zucca", "16"],
      ["Risotto al nero di seppia", "16"], ["Risotto alla granseola", "20"]]]] },
  { id: "secondi", t: "Secondi", img: ["piatti11", "piatti7"], g: [
    ["Secondi piatti", [
      ["Fritto misto della Risacca", "25"], ["Gran misto griglia", "25"], ["Branzino al sale o alla griglia", "22"],
      ["Orata vernaccia e olive", "22"], ["Rombo steccato (min. 2 persone)", "30"],
      ["Astice alla catalana", "9 /hg"], ["Astice blu alla catalana", "12 /hg"], ["Aragosta blu alla catalana", "15 /hg"],
      ["Tonno in crosta all'aceto balsamico", "25"], ["Seppie e calamari alla griglia", "20"],
      ["Scamponi al sale o alla griglia", "20"], ["Gamberoni cognac e pepe nero", "20"],
      ["Scottata di ricciola con contorno", "25"], ["Pescato del giorno", "8 /hg"],
      ["King crab al vapore o alla griglia su insalatina", "45"], ["Tagliata di carne", "45"]]],
    ["Contorni", [
      ["Verdure alla griglia o fritte", "7"], ["Verdure saltate", "7"], ["Insalata mista", "7"], ["Insalata di pomodoro camone", "8"]]],
    ["Formaggi", [["Pecorino sardo", "7"], ["Grana", "7"], ["Gorgonzola", "7"]]]] },
  { id: "dolci", t: "Dolci", img: ["dolce"], g: [
    ["Dessert", [
      ["Torte del giorno", "8"], ["Tiramisù", "7"], ["Crema catalana", "7"],
      ["Tortino al cuore di cioccolato caldo con gelato", "8"], ["Sorbetto", "7"],
      ["Frutti di bosco", "8"], ["Frutta esotica", "8"], ["Frutta di stagione", "6"]]]] },
  { id: "vini", t: "Vini", wine: true, img: ["ristorante9", "vino"], g: [
    ["Spumanti", [
      ["Prosecco Valdobbiadene", "25"], ["Trento Doc Ferrari «Maximum»", "35"], ["Trento Doc Ferrari «Perlé» millesimato", "45"],
      ["Giulio Ferrari Riserva del Fondatore", "180"], ["Franciacorta Bellavista «Alma» brut", "50"],
      ["Franciacorta Bellavista rosé millesimato", "70"], ["Franciacorta Bellavista Satèn millesimato", "60"],
      ["Franciacorta Berlucchi 61 rosé", "40"], ["Franciacorta Berlucchi 61 extra brut", "35"],
      ["Franciacorta Ca' del Bosco «Cuvée Prestige»", "50"], ["Franciacorta Ca' del Bosco «Prestige Rosé»", "70"]]],
    ["Champagne", [
      ["Laurent-Perrier", "80"], ["Laurent-Perrier rosé", "140"], ["Taittinger brut Prestige", "80"],
      ["Taittinger brut Prestige rosé", "90"], ["Ruinart Blanc de Blancs", "130"], ["Ruinart brut rosé", "140"],
      ["Perrier-Jouët Grand Brut", "90"], ["Louis Roederer", "90"], ["Cristal", "480"], ["Dom Pérignon", "450"], ["Krug", "480"]]],
    ["Bianchi · Nord-Est", [
      ["Pinot grigio Jerman", "30"], ["Pinot grigio Felluga", "30"], ["Friulano Tunella", "25"], ["Pinot bianco Kaltern", "25"],
      ["Sharis Felluga", "25"], ["Ribolla Gialla Tunella", "25"], ["Chardonnay Jerman", "30"], ["Terre Alte Felluga", "80"],
      ["Chardonnay «Gaun» Alois Lageder", "30"], ["Lugana Ca' dei Frati", "25"], ["Müller Thurgau St. Michael-Eppan", "25"],
      ["Sauvignon Jerman", "30"], ["Sauvignon Felluga", "30"], ["Sauvignon «St. Valentin» St. Michael-Eppan", "40"],
      ["Gewürztraminer St. Michael-Eppan", "25"], ["Gewürztraminer «Am Sand» Alois Lageder", "35"],
      ["Gewürztraminer «St. Valentin» St. Michael-Eppan", "40"], ["Vintage Tunina Jerman", "70"], ["Capo Martino Jerman", "80"]]],
    ["Bianchi · Nord-Ovest", [
      ["Pinot grigio ramato frizzante Prago", "18"], ["Arneis «Blangé» Ceretto", "30"],
      ["Gavi di Gavi «Etichetta nera» La Scolca", "40"], ["Rossj-Bass Gaja", "75"], ["Gaia & Rey Gaja", "250"]]],
    ["Bianchi · Centro", [
      ["Verdicchio Castelli di Jesi Umani Ronchi", "20"], ["Pecorino Colli Aprutini Umani Ronchi", "20"],
      ["Conte della Vipera Castello della Sala", "40"], ["Bramìto del Cervo Castello della Sala", "30"],
      ["Vistamare Ca' Marcanda Gaja", "50"], ["Cervaro della Sala", "70"]]],
    ["Bianchi · Sud e isole", [
      ["Chardonnay Planeta", "40"], ["Vermentino di Gallura «Karagnanj» Tondini", "25"],
      ["Vermentino di Gallura Superiore «Katala» Tondini", "30"], ["Vermentino «Orahona» Conca Entosa", "40"],
      ["Greco di Tufo «Cutizzi» Feudi di San Gregorio", "25"], ["Fiano di Avellino «Pietracalda» Feudi di San Gregorio", "25"],
      ["Falanghina «Serrocielo» Feudi di San Gregorio", "25"], ["Grillo «Passiperduti» Donnafugata", "25"],
      ["Etna Bianco «Sul Vulcano» Donnafugata", "30"], ["Nozze d'Oro Tasca d'Almerita", "30"], ["Cometa Fiano Planeta", "40"]]],
    ["Bianchi francesi", [
      ["Pouilly-Fumé Baron de Ladoucette", "45"], ["Baron de L, Baron de Ladoucette", "130"],
      ["Sancerre Blanc Baron de Ladoucette", "45"], ["Chablis Premier Cru Les Fourneaux", "60"]]],
    ["Rossi", [
      ["Monica di Sardegna «Perdera» Argiolas", "20"], ["Cannonau «Costera» Argiolas", "25"], ["Pinot nero Kaltern", "25"],
      ["Vertigo Felluga", "30"], ["Pinot nero Alois Lageder", "30"], ["Lagrein «Conus» Alois Lageder", "30"],
      ["Etna Rosso Donnafugata", "30"], ["Nebbiolo Vajra", "25"], ["Rosso di Montalcino Campogiovanni", "25"],
      ["Sassoalloro Biondi Santi", "40"], ["Barolo Vajra", "60"], ["Brunello di Montalcino Campogiovanni", "60"],
      ["Tignanello Antinori", "130"], ["Sassicaia", "350"]]],
    ["Rosati", [["Rosada Cannonau Dolianova", "20"], ["Scalabrone Antinori", "25"], ["Rosa dei Frati Ca' dei Frati", "25"]]],
    ["Mezze bottiglie", [
      ["Franciacorta Berlucchi 61 extra brut", "20"], ["Ruinart Blanc de Blancs", "65"], ["Ruinart brut rosé", "70"],
      ["Anthìlia Donnafugata", "12"], ["Ribolla Gialla La Tunella", "15"], ["Sedàra Donnafugata", "12"], ["Pinot nero La Tunella", "15"]]]] }
];

const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;

/* header */
const hdr = $("#hdr"), burger = $("#burger");
const prog = $("#prog"), bar = $(".bar"), heroBg = $(".hero-bg"), plate = $(".hero-plate");
const pars = [[".collage .c2", -0.07], [".collage .c3", 0.09], [".band-img", -0.05], [".strip .up", -0.05]]
  .flatMap(([s, k]) => $$(s).map(el => ({ el, k })));
let lastY = 0, tick = false;
function frame() {
  tick = false;
  const y = scrollY, vh = innerHeight;
  hdr.classList.toggle("on", y > 40);
  lastY = y;
  bar.classList.toggle("show", y > vh * 0.5);
  prog.style.transform = "scaleX(" + Math.min(1, y / (document.documentElement.scrollHeight - vh)) + ")";
  if (reduce) return;
  if (y < vh * 1.3) { heroBg.style.translate = "0 " + (y * 0.22).toFixed(1) + "px"; plate.style.translate = "0 " + (-y * 0.1).toFixed(1) + "px"; }
  for (const p of pars) {
    const r = p.el.getBoundingClientRect();
    if (r.bottom < -100 || r.top > vh + 100) continue;
    p.el.style.translate = "0 " + ((r.top + r.height / 2 - vh / 2) * p.k).toFixed(1) + "px";
  }
}
const onScroll = () => { if (!tick) { tick = true; requestAnimationFrame(frame); } };
addEventListener("scroll", onScroll, { passive: true }); addEventListener("resize", onScroll); frame();
const closeNav = () => { hdr.classList.remove("open"); burger.setAttribute("aria-expanded", "false"); };
burger.addEventListener("click", () => {
  const o = hdr.classList.toggle("open"); burger.setAttribute("aria-expanded", o);
});
$$("#nav a").forEach(a => a.addEventListener("click", closeNav));

/* whatsapp */
$$(".wa").forEach(a => {
  if (!WHATSAPP) { a.hidden = true; return; }
  a.href = "https://wa.me/" + WHATSAPP + "?text=" + encodeURIComponent(WA_TEXT);
  a.target = "_blank"; a.rel = "noopener";
});

/* menu */
const tabs = $("#tabs"), panel = $("#panel");
let cur = 0;
const wineCount = MENU.find(m => m.wine).g.reduce((n, g) => n + g[1].length, 0);
function show(i) {
  cur = (i + MENU.length) % MENU.length;
  const m = MENU[cur];
  $$("button", tabs).forEach((b, k) => { b.classList.toggle("on", k === cur); b.setAttribute("aria-selected", k === cur); });
  const b = tabs.children[cur];
  tabs.scrollTo({ left: b.offsetLeft - tabs.clientWidth / 2 + b.clientWidth / 2, behavior: reduce ? "auto" : "smooth" });
  panel.innerHTML =
    (m.img[0] ? `<img class="dish" src="img/${m.img[0]}.webp" alt="">` : "") +
    `<h3>${m.t}</h3>` +
    m.g.map((g, k) =>
      (k === 1 && m.img[1] ? `<img class="dish l" src="img/${m.img[1]}.webp" alt="" loading="lazy">` : "") +
      `<h4>${g[0]}</h4><ul>` + g[1].map((d, n) => `<li style="animation-delay:${Math.min(n, 14) * 35}ms"><span>${d[0]}</span><b>${d[1]}</b></li>`).join("") + "</ul>"
    ).join("") +
    (m.g.length === 1 && m.img[1] ? `<img class="dish l" src="img/${m.img[1]}.webp" alt="" loading="lazy">` : "");
  panel.style.animation = "none"; void panel.offsetWidth; panel.style.animation = "";
}
MENU.forEach((m, i) => {
  const b = document.createElement("button");
  b.textContent = m.t; b.setAttribute("role", "tab");
  b.addEventListener("click", () => show(i));
  tabs.appendChild(b);
});
show(0);
let sx = 0, sy = 0;
panel.addEventListener("touchstart", e => { sx = e.touches[0].clientX; sy = e.touches[0].clientY; }, { passive: true });
panel.addEventListener("touchend", e => {
  const dx = e.changedTouches[0].clientX - sx, dy = e.changedTouches[0].clientY - sy;
  if (Math.abs(dx) > 60 && Math.abs(dy) < 50) { show(cur + (dx < 0 ? 1 : -1)); $("#menu").scrollIntoView(); }
}, { passive: true });
$$("[data-tab]").forEach(a => a.addEventListener("click", () => show(MENU.findIndex(m => m.id === a.dataset.tab))));

$("#nWine").dataset.count = wineCount; $("#nWine").textContent = wineCount; $("#nWine2").textContent = wineCount;

/* reveal + contatori */
function count(el) {
  const end = +el.dataset.count;
  if (reduce) { el.textContent = end; return; }
  const from = end > 1000 ? end - 40 : 0, t0 = performance.now(), dur = 1400;
  (function step(t) {
    const p = Math.min(1, (t - t0) / dur), e = 1 - Math.pow(1 - p, 3);
    el.textContent = Math.round(from + (end - from) * e);
    if (p < 1) requestAnimationFrame(step);
  })(t0);
}
const io = new IntersectionObserver(es => es.forEach(e => {
  if (!e.isIntersecting) return;
  e.target.classList.add("in");
  $$("[data-count]", e.target).forEach(count);
  if (e.target.dataset.count) count(e.target);
  io.unobserve(e.target);
}), { threshold: 0.15 });
$$(".rv").forEach((el, i) => { el.style.transitionDelay = (i % 4) * 90 + "ms"; io.observe(el); });

/* orari: ora di Milano */
const GIORNI = ["Domenica", "Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato"];
function milano() {
  const p = new Intl.DateTimeFormat("en-GB", { timeZone: "Europe/Rome", weekday: "short", hour: "2-digit", minute: "2-digit", hour12: false }).formatToParts(new Date());
  const g = k => p.find(x => x.type === k).value;
  return { d: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].indexOf(g("weekday")), m: (+g("hour") % 24) * 60 + +g("minute") };
}
const mins = s => { const [h, m] = s.split(":"); return +h * 60 + +m; };
function orari() {
  const now = milano(), ul = $("#hours");
  ul.innerHTML = [1, 2, 3, 4, 5, 6, 0].map(d =>
    `<li class="${d === now.d ? "today" : ""}"><span>${GIORNI[d]}</span><span>${ORARI[d].length ? ORARI[d].map(t => t.join("–")).join(" · ") : "Chiuso"}</span></li>`).join("");
  const open = ORARI[now.d].some(t => now.m >= mins(t[0]) && now.m < mins(t[1]));
  const o = $("#open"); o.textContent = open ? "Aperto ora" : "Chiuso ora"; o.classList.toggle("yes", open);
}
orari(); setInterval(orari, 60000);
