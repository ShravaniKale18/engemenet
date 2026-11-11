/**
 * ====================================================================
 * ROYAL INDIAN ENGAGEMENT INVITATION - INTERACTIVE SCRIPT
 * Multi-Language: Marathi (Default), Hindi, English
 * 3D Luxury Effects & Fail-Safe Architecture
 * ====================================================================
 */

let currentLang = "mr";

// Global Open Invitation function (accessible anytime from HTML onclick or script)
function openInvitationWebsite(e) {
  if (e) {
    if (typeof e.preventDefault === "function") e.preventDefault();
    if (typeof e.stopPropagation === "function") e.stopPropagation();
  }
  const ws = document.getElementById("welcome-screen");
  if (ws) {
    ws.classList.add("hidden");
    ws.style.display = "none";
    try {
      if (ws.parentNode) ws.parentNode.removeChild(ws);
    } catch (err) { }
  }
  document.querySelectorAll(".reveal-fade").forEach(el => {
    el.classList.add("revealed");
  });
  const main = document.getElementById("main-content");
  if (main) {
    main.scrollIntoView({ behavior: "smooth" });
  }
  try {
    if (typeof playWeddingMusic === "function") playWeddingMusic();
  } catch (err) { }
  try {
    if (typeof window.triggerPetalCelebration === "function") {
      window.triggerPetalCelebration();
    }
  } catch (err) { }
}

if (typeof window !== "undefined") {
  window.openInvitationWebsite = openInvitationWebsite;
}

document.addEventListener("DOMContentLoaded", () => {
  // Determine initial language (Default: 'mr' - Marathi)
  try {
    const savedLang = localStorage.getItem("invitation_lang");
    if (savedLang && INVITATION_CONFIG.languages && INVITATION_CONFIG.languages[savedLang]) {
      currentLang = savedLang;
    } else {
      currentLang = INVITATION_CONFIG.defaultLanguage || "mr";
    }
  } catch (e) {
    currentLang = "mr";
  }

  // Initialize UI features safely
  try { applyDemoPhotos(); } catch (e) { console.warn("applyDemoPhotos:", e); }
  try { initLanguageSwitcher(); } catch (e) { console.warn("initLanguageSwitcher:", e); }
  try { switchLanguage(currentLang); } catch (e) { console.warn("switchLanguage:", e); }
  try { initPetalAndSparkleCanvas(); } catch (e) { console.warn("initPetalAndSparkleCanvas:", e); }
  try { initCountdownTimer(); } catch (e) { console.warn("initCountdownTimer:", e); }
  try { initAudioPlayer(); } catch (e) { console.warn("initAudioPlayer:", e); }
  try { initWelcomeScreen(); } catch (e) { console.warn("initWelcomeScreen:", e); }
  try { initScrollAnimations(); } catch (e) { console.warn("initScrollAnimations:", e); }
  try { initActionButtons(); } catch (e) { console.warn("initActionButtons:", e); }
  try { initBlessingsGuestbook(); } catch (e) { console.warn("initBlessingsGuestbook:", e); }
});

/**
 * Helper to get current active language dictionary
 */
function getCurrentLangData() {
  if (typeof INVITATION_CONFIG === "undefined" || !INVITATION_CONFIG.languages) {
    return null;
  }
  return INVITATION_CONFIG.languages[currentLang] || INVITATION_CONFIG.languages["mr"];
}

/**
 * 1. Language Switcher Initialization & Handler
 */
function initLanguageSwitcher() {
  const toggleBtn = document.getElementById("lang-toggle-btn");
  const dropdownMenu = document.getElementById("lang-dropdown-menu");
  const optButtons = document.querySelectorAll(".lang-opt-item");

  if (!toggleBtn || !dropdownMenu) return;

  toggleBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    dropdownMenu.classList.toggle("show");
  });

  document.addEventListener("click", (e) => {
    if (!dropdownMenu.contains(e.target) && e.target !== toggleBtn) {
      dropdownMenu.classList.remove("show");
    }
  });

  optButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const selected = btn.getAttribute("data-lang");
      if (selected && selected !== currentLang) {
        switchLanguage(selected);
      }
      dropdownMenu.classList.remove("show");
    });
  });
}

/**
 * Core Language Switch Engine: Updates all DOM content dynamically
 */
function switchLanguage(lang) {
  if (!INVITATION_CONFIG.languages || !INVITATION_CONFIG.languages[lang]) {
    lang = "mr";
  }
  currentLang = lang;
  try {
    localStorage.setItem("invitation_lang", lang);
  } catch (e) { }

  const d = INVITATION_CONFIG.languages[lang];
  document.documentElement.lang = d.langCode;

  // Document metadata
  document.title = d.pageTitle;
  const metaDesc = document.getElementById("html-meta-desc");
  if (metaDesc) metaDesc.content = d.metaDesc;

  // Update Language Switcher UI
  setText("active-lang-label", d.langName);
  document.querySelectorAll(".lang-opt-item").forEach(item => {
    if (item.getAttribute("data-lang") === lang) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });

  // 1. Welcome Screen
  if (d.welcome) {
    setText("welcome-shloka", d.welcome.shloka);
    setText("welcome-subtext", d.welcome.subtext);
    setText("welcome-heading", d.welcome.heading);
    if (document.getElementById("welcome-invitation-text")) {
      setText("welcome-invitation-text", d.welcome.previewText);
      setText("welcome-couple-names", d.welcome.coupleHighlight);
    } else {
      setHTML("welcome-couple-preview", `${escapeHtml(d.welcome.previewText)}<br><strong class="names-highlight" id="welcome-couple-names">${escapeHtml(d.welcome.coupleHighlight)}</strong>`);
    }
    setText("welcome-open-btn-text", d.welcome.openBtn);
    setHTML("welcome-audio-hint", `<i class="fa-solid fa-volume-high"></i> ${d.welcome.audioHint}`);
  }

  // 2. Card Header
  if (d.cardHeader) {
    setText("main-shloka", d.cardHeader.shloka);
    setText("family-announcement", d.cardHeader.announcement);
  }

  // 3. Couple Hero Section
  if (d.couple) {
    setText("monogram-display", d.couple.monogram);
    if (d.couple.groom) {
      setText("groom-initial", d.couple.groom.initial);
      setText("groom-name", d.couple.groom.displayName);
      setHTML("groom-parentage", d.couple.groom.parentageHTML);
    }

    if (d.couple.bride) {
      setText("bride-initial", d.couple.bride.initial);
      setText("bride-name", d.couple.bride.displayName);
      setHTML("bride-parentage", d.couple.bride.parentageHTML);
    }

    setText("couple-subtitle", d.couple.subtitle);
    setText("couple-quote", `"${d.couple.quote}"`);
    setText("couple-hashtag", d.couple.hashtag);
    setText("romantic-section-title", d.couple.romanticTitle);
    setText("rings-photo-title", d.couple.ringsTitle);
    setText("hero-couple-caption", d.couple.demoCaption);
    setText("romantic-couple-caption", d.couple.demoCaption);
    setText("rings-photo-caption", d.couple.demoCaption);
    applyDemoPhotoAlts(d);
  }

  // 4. Live Countdown Labels
  if (d.countdown) {
    setText("countdown-pre-title", d.countdown.preTitle);
    setText("countdown-main-title", d.countdown.title);
    setText("days-label", d.countdown.daysLabel);
    setText("hours-label", d.countdown.hoursLabel);
    setText("minutes-label", d.countdown.minutesLabel);
    setText("seconds-label", d.countdown.secondsLabel);
    setText("countdown-status", d.countdown.statusText);
  }

  // 5. Event Details Cards
  if (d.details) {
    setText("details-pre-title", d.details.preTitle);
    setText("details-section-title", d.details.title);
    setText("details-subtitle", d.details.subtitle);

    // Date Card
    if (d.details.dateCard) {
      setText("date-card-heading", d.details.dateCard.heading);
      setText("display-date", d.details.dateCard.display);
      setText("date-card-subinfo", d.details.dateCard.subInfo);
      setText("add-calendar-btn-text", d.details.dateCard.btnText);
    }

    // Time Card
    if (d.details.timeCard) {
      setText("time-card-heading", d.details.timeCard.heading);
      setText("display-time", d.details.timeCard.display);
      setHTML("display-muhurat", `<i class="fa-solid fa-sparkles"></i> ${d.details.timeCard.muhurat}`);
      setText("time-badge-text", d.details.timeCard.badge);
    }

    // Venue Card
    if (d.details.venueCard) {
      setText("venue-card-heading", d.details.venueCard.heading);
      setText("display-venue-name", d.details.venueCard.name);
      setText("display-venue-hall", d.details.venueCard.hall);
      setText("venue-badge-text", d.details.venueCard.badge);
    }

    // Address Card
    if (d.details.addressCard) {
      setText("address-card-heading", d.details.addressCard.heading);
      setText("display-address-line", d.details.addressCard.line);
      setText("display-city-state", d.details.addressCard.city);
      setText("copy-address-btn-text", d.details.addressCard.copyBtn);
      setText("directions-btn-text", d.details.addressCard.directionsBtn);
    }
  }

  const dirBtn = document.getElementById("get-directions-btn");
  if (dirBtn && INVITATION_CONFIG.googleMapsUrl) {
    dirBtn.href = INVITATION_CONFIG.googleMapsUrl;
  }

  // 6. Itinerary
  if (d.itinerary) {
    setText("itinerary-heading", d.itinerary.heading);
    const itineraryContainer = document.getElementById("itinerary-timeline");
    if (itineraryContainer && Array.isArray(d.itinerary.items)) {
      itineraryContainer.innerHTML = d.itinerary.items.map(item => `
        <div class="itinerary-item">
          <div class="itinerary-time-badge">${escapeHtml(item.time)}</div>
          <div class="itinerary-content">
            <h5>${escapeHtml(item.title)}</h5>
            <p>${escapeHtml(item.desc)}</p>
          </div>
        </div>
      `).join("");
    }
  }

  // 7. Dress Code
  if (d.dressCode) {
    setText("dress-code-title", d.dressCode.heading);
    setText("dress-theme", d.dressCode.theme);
    setText("dress-suggestion", d.dressCode.suggestion);
  }

  // 8. Blessings & Wishes
  if (d.blessings) {
    setText("blessings-pre-title", d.blessings.preTitle);
    setText("blessings-title", d.blessings.title);
    setText("blessings-subtitle", d.blessings.subtitle);
    setHTML("quick-wish-label", `<i class="fa-solid fa-sparkles gold-icon"></i> ${escapeHtml(d.blessings.quickLabel)}`);

    const pillsContainer = document.getElementById("quick-pills-list");
    if (pillsContainer && Array.isArray(d.blessings.pills)) {
      pillsContainer.innerHTML = d.blessings.pills.map(p => `
        <button type="button" class="quick-pill-btn" data-wish="${escapeHtml(p)}">${escapeHtml(p)}</button>
      `).join("");
      bindQuickPillButtons();
    }

    setText("label-guest-name", d.blessings.nameLabel);
    const nameInput = document.getElementById("guest-name");
    if (nameInput) nameInput.placeholder = d.blessings.namePlaceholder;

    setText("label-guest-relation", d.blessings.relationLabel);
    const relInput = document.getElementById("guest-relation");
    if (relInput) relInput.placeholder = d.blessings.relationPlaceholder;

    setText("label-guest-message", d.blessings.msgLabel);
    const msgInput = document.getElementById("guest-message");
    if (msgInput) msgInput.placeholder = d.blessings.msgPlaceholder;

    setText("submit-blessing-btn-text", d.blessings.sendBtn);
    setHTML("feed-heading-text", `<i class="fa-solid fa-heart gold-icon"></i> ${escapeHtml(d.blessings.feedHeading)}`);

    refreshBlessingsFeed();
  }

  // 9. Footer
  if (d.footer) {
    setText("closing-text", `"${d.footer.closingText}"`);
    setText("with-love-tag", d.footer.signatureWithLove);
    setText("the-families-tag", d.footer.families);
    setText("rsvp-heading", d.footer.rsvpHeading);
    setText("rsvp-subtext", d.footer.rsvpSubtext);
    setText("whatsapp-rsvp-btn-text", d.footer.whatsappBtn);
    setText("add-cal-bottom-btn-text", d.footer.saveCalBtn);
    setText("auspicious-ending", d.footer.footnoteShloka);
    setText("copyright-note-text", d.footer.copyright);

    const whatsappBtn = document.getElementById("whatsapp-rsvp-btn");
    if (whatsappBtn && d.footer.whatsappNumber) {
      const encodedMsg = encodeURIComponent(d.footer.whatsappMessage || "Namaste!");
      whatsappBtn.href = `https://wa.me/${d.footer.whatsappNumber}?text=${encodedMsg}`;
    }

    const contactsList = document.getElementById("rsvp-contacts-list");
    if (contactsList && Array.isArray(d.footer.rsvpContacts)) {
      contactsList.innerHTML = d.footer.rsvpContacts.map(c => `
        <div class="contact-item">
          <strong>${escapeHtml(c.name)}:</strong>
          <a href="tel:${escapeHtml(c.phone.replace(/\s+/g, ''))}">${escapeHtml(c.phone)}</a>
        </div>
      `).join("");
    }
  }
}

/**
 * Apply Demo Photos from INVITATION_CONFIG
 */
function applyDemoPhotos() {
  const photos = INVITATION_CONFIG.demoPhotos;
  if (!photos) return;

  setImgSrc("hero-couple-photo", photos.heroCouple, photos.heroCoupleFallback);
  setImgSrc("bride-photo", photos.bridePortrait, photos.bridePortraitFallback);
  setImgSrc("groom-photo", photos.groomPortrait, photos.groomPortraitFallback);
  setImgSrc("romantic-couple-photo", photos.romanticCouple, photos.romanticCoupleFallback);
  setImgSrc("engagement-rings-photo", photos.engagementRings, photos.engagementRingsFallback);
}

function applyDemoPhotoAlts(d) {
  if (!d || !d.couple) return;
  setImgAlt("hero-couple-photo", d.couple.heroAlt);
  setImgAlt("bride-photo", d.couple.brideAlt);
  setImgAlt("groom-photo", d.couple.groomAlt);
  setImgAlt("romantic-couple-photo", d.couple.romanticAlt);
  setImgAlt("engagement-rings-photo", d.couple.ringsAlt);
}

function setImgSrc(id, src, fallback) {
  const el = document.getElementById(id);
  if (!el) return;
  if (src) el.src = src;
  if (fallback) {
    el.onerror = function () {
      this.onerror = null;
      this.src = fallback;
    };
  }
}

function setImgAlt(id, alt) {
  const el = document.getElementById(id);
  if (el && alt) el.alt = alt;
}

// Helpers for safe DOM updates
function setText(id, text) {
  const el = document.getElementById(id);
  if (el && text !== undefined) el.textContent = text;
}
function setHTML(id, html) {
  const el = document.getElementById(id);
  if (el && html !== undefined) el.innerHTML = html;
}
function escapeHtml(str) {
  return String(str).replace(/[&<>"']/g, m => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  })[m]);
}


/**
 * 2. Welcome Screen Opening & Reveal
 */
function initWelcomeScreen() {
  const welcomeScreen = document.getElementById("welcome-screen");
  const openBtn = document.getElementById("open-invite-btn");

  if (!welcomeScreen || !openBtn) return;

  openBtn.addEventListener("click", (e) => {
    window.openInvitationWebsite(e);
  });
}


/**
 * 3. Live Countdown Timer (Auspicious Date: Nov 30, 2026 18:30:00)
 */
function initCountdownTimer() {
  const targetDateStr = INVITATION_CONFIG.eventDate;
  const targetDate = new Date(targetDateStr).getTime();

  const daysEl = document.getElementById("days-val");
  const hoursEl = document.getElementById("hours-val");
  const minutesEl = document.getElementById("minutes-val");
  const secondsEl = document.getElementById("seconds-val");
  const statusEl = document.getElementById("countdown-status");

  function update() {
    const now = new Date().getTime();
    const distance = targetDate - now;
    const d = getCurrentLangData();

    if (distance < 0) {
      if (daysEl) daysEl.textContent = "00";
      if (hoursEl) hoursEl.textContent = "00";
      if (minutesEl) minutesEl.textContent = "00";
      if (secondsEl) secondsEl.textContent = "00";
      if (statusEl && d && d.countdown) {
        statusEl.textContent = d.countdown.statusFinished || "आजचा दिवस मंगलमय!";
      }
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if (daysEl) daysEl.textContent = String(days).padStart(2, "0");
    if (hoursEl) hoursEl.textContent = String(hours).padStart(2, "0");
    if (minutesEl) minutesEl.textContent = String(minutes).padStart(2, "0");
    if (secondsEl) secondsEl.textContent = String(seconds).padStart(2, "0");
  }

  update();
  setInterval(update, 1000);
}


/**
 * 4. 3D Petal & Sparkle Canvas Animation
 */
function initPetalAndSparkleCanvas() {
  const canvas = document.getElementById("petals-canvas");
  if (!canvas || !canvas.getContext) return;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener("resize", () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const petals = [];
  const sparkles = [];
  const maxPetals = window.innerWidth < 768 ? 20 : 36;
  const maxSparkles = window.innerWidth < 768 ? 16 : 28;

  const petalColors = [
    { r: 247, g: 180, b: 185, a: 0.75 }, // Rose blush
    { r: 254, g: 210, b: 195, a: 0.75 }, // Soft peach
    { r: 255, g: 220, b: 140, a: 0.8 },  // Marigold golden
    { r: 245, g: 150, b: 160, a: 0.7 }   // Deep rose
  ];

  class Petal {
    constructor(isBurst = false) {
      this.reset(isBurst);
    }

    reset(isBurst = false) {
      this.x = isBurst ? width / 2 + (Math.random() - 0.5) * 300 : Math.random() * width;
      this.y = isBurst ? height / 2 + (Math.random() - 0.5) * 200 : -30;
      this.size = Math.random() * 12 + 10;
      this.speedY = isBurst ? (Math.random() - 0.5) * 6 - 2 : Math.random() * 1.5 + 0.8;
      this.speedX = (Math.random() - 0.5) * 1.8;
      this.rotation = Math.random() * Math.PI * 2;
      this.rotationSpeed = (Math.random() - 0.5) * 0.04;
      this.color = petalColors[Math.floor(Math.random() * petalColors.length)];
      this.flip = Math.random() * Math.PI;
      this.flipSpeed = Math.random() * 0.03 + 0.015;
    }

    update() {
      this.y += this.speedY;
      this.x += this.speedX + Math.sin(this.y * 0.01) * 0.5;
      this.rotation += this.rotationSpeed;
      this.flip += this.flipSpeed;

      if (this.y > height + 40 || this.x < -40 || this.x > width + 40) {
        this.reset();
      }
    }

    draw(c) {
      c.save();
      c.translate(this.x, this.y);
      c.rotate(this.rotation);
      c.scale(1, Math.cos(this.flip));

      c.beginPath();
      c.moveTo(0, -this.size / 2);
      c.bezierCurveTo(
        this.size / 2, -this.size / 2,
        this.size / 2, this.size / 2,
        0, this.size
      );
      c.bezierCurveTo(
        -this.size / 2, this.size / 2,
        -this.size / 2, -this.size / 2,
        0, -this.size / 2
      );

      c.fillStyle = `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${this.color.a})`;
      c.fill();
      c.restore();
    }
  }

  class Sparkle {
    constructor() {
      this.reset();
    }

    reset() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.size = Math.random() * 3 + 1;
      this.alpha = Math.random() * 0.7 + 0.2;
      this.alphaSpeed = (Math.random() * 0.02 + 0.01) * (Math.random() > 0.5 ? 1 : -1);
      this.color = Math.random() > 0.5 ? "212, 175, 55" : "255, 235, 170";
    }

    update() {
      this.alpha += this.alphaSpeed;
      if (this.alpha <= 0.1 || this.alpha >= 0.9) {
        this.alphaSpeed = -this.alphaSpeed;
      }
    }

    draw(c) {
      c.save();
      c.beginPath();
      c.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      c.fillStyle = `rgba(${this.color}, ${this.alpha})`;
      c.shadowBlur = 8;
      c.shadowColor = "rgba(212, 175, 55, 0.8)";
      c.fill();
      c.restore();
    }
  }

  for (let i = 0; i < maxPetals; i++) petals.push(new Petal());
  for (let i = 0; i < maxSparkles; i++) sparkles.push(new Sparkle());

  window.triggerPetalCelebration = function () {
    for (let i = 0; i < 35; i++) petals.push(new Petal(true));
    setTimeout(() => {
      while (petals.length > maxPetals) petals.pop();
    }, 6000);
  };

  function animate() {
    ctx.clearRect(0, 0, width, height);
    for (let s of sparkles) {
      s.update();
      s.draw(ctx);
    }
    for (let p of petals) {
      p.update();
      p.draw(ctx);
    }
    requestAnimationFrame(animate);
  }
  animate();
}


/**
 * 5. Audio Player with Traditional Indian Drone Fallback
 */
let audioInstance = null;
let audioPlaying = false;

function initAudioPlayer() {
  audioInstance = document.getElementById("wedding-audio");
  const musicToggleBtn = document.getElementById("music-toggle-btn");

  if (!audioInstance) return;

  if (INVITATION_CONFIG.music && INVITATION_CONFIG.music.audioSrc) {
    if (!audioInstance.src || !audioInstance.src.includes(INVITATION_CONFIG.music.audioSrc)) {
      audioInstance.src = INVITATION_CONFIG.music.audioSrc;
    }
  }

  if (musicToggleBtn) {
    musicToggleBtn.addEventListener("click", () => {
      if (audioPlaying) {
        pauseWeddingMusic();
      } else {
        playWeddingMusic();
      }
    });
  }
}

function playWeddingMusic() {
  const musicToggleBtn = document.getElementById("music-toggle-btn");
  if (!audioInstance) {
    audioInstance = document.getElementById("wedding-audio");
  }
  if (!audioInstance) return;

  const playPromise = audioInstance.play();
  if (playPromise !== undefined) {
    playPromise.then(() => {
      audioPlaying = true;
      if (musicToggleBtn) musicToggleBtn.classList.add("playing");
    }).catch(err => {
      console.warn("Autoplay audio waiting for interaction:", err);
      const startOnTouch = () => {
        if (audioInstance) {
          audioInstance.play().then(() => {
            audioPlaying = true;
            if (musicToggleBtn) musicToggleBtn.classList.add("playing");
          }).catch(() => { });
        }
        document.removeEventListener("click", startOnTouch);
        document.removeEventListener("touchstart", startOnTouch);
      };
      document.addEventListener("click", startOnTouch, { once: true });
      document.addEventListener("touchstart", startOnTouch, { once: true });
    });
  }
}

function pauseWeddingMusic() {
  const musicToggleBtn = document.getElementById("music-toggle-btn");
  if (audioInstance) audioInstance.pause();
  audioPlaying = false;
  if (musicToggleBtn) musicToggleBtn.classList.remove("playing");
}

let audioCtx = null;
function playIndianChimeDrone() {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    if (!audioCtx) audioCtx = new AudioContext();
    if (audioCtx.state === "suspended") {
      audioCtx.resume();
    }

    const saFreq = 261.63; // C4
    const paFreq = 392.00; // G4
    const notes = [saFreq, paFreq, saFreq * 2];

    notes.forEach((freq, idx) => {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(freq, audioCtx.currentTime);

      gain.gain.setValueAtTime(0.001, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.04 / (idx + 1), audioCtx.currentTime + 1.5);
      gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 8);

      osc.connect(gain);
      gain.connect(audioCtx.destination);

      osc.start(audioCtx.currentTime + idx * 0.2);
      osc.stop(audioCtx.currentTime + 8.5);
    });
  } catch (e) {
    console.warn("Audio synthesis note:", e);
  }
}


/**
 * 6. Scroll Animations via IntersectionObserver
 */
function initScrollAnimations() {
  const elements = document.querySelectorAll(".reveal-fade");
  if (!elements.length) return;

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    elements.forEach(el => observer.observe(el));
  } else {
    elements.forEach(el => el.classList.add("revealed"));
  }
}


/**
 * 7. Action Buttons (Calendar, Copy Address, Share, Scroll-Top)
 */.02
function initActionButtons() {
  const addCalBtn = document.getElementById("add-calendar-btn");
  const addCalBottomBtn = document.getElementById("add-cal-bottom-btn");
  const copyAddressBtn = document.getElementById("copy-address-btn");
  const shareBtn = document.getElementById("share-btn");
  const scrollTopBtn = document.getElementById("scroll-top-btn");

  function openGoogleCalendar() {
    const d = getCurrentLangData();
    const title = encodeURIComponent(
      d ? `${d.couple.bride.name} & ${d.couple.groom.name} - Engagement Ceremony` : "Rutuja & Santosh - Engagement Ceremony"
    );
    const details = encodeURIComponent(
      d ? d.cardHeader.announcement : "Auspicious Engagement Ceremony of Rutuja and Santosh"
    );
    const location = encodeURIComponent("Vishnudas Mangal Karyalay, Navin Renapur Naka, Latur, Maharashtra");
    const dates = "20261130T070000Z/20261130T110000Z";

    const calUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${dates}&details=${details}&location=${location}`;
    window.open(calUrl, "_blank", "noopener,noreferrer");
    showToast(d ? d.toasts.openingCal : "Opening Google Calendar...");
  }

  if (addCalBtn) addCalBtn.addEventListener("click", openGoogleCalendar);
  if (addCalBottomBtn) addCalBottomBtn.addEventListener("click", openGoogleCalendar);

  if (copyAddressBtn) {
    copyAddressBtn.addEventListener("click", () => {
      const d = getCurrentLangData();
      const addr = d ? `${d.details.venueCard.name}, ${d.details.venueCard.hall}, ${d.details.addressCard.line}, ${d.details.addressCard.city}` : "विष्णुदास मंगल कार्यालय, नवीन रेणापूर नाका, लातूर";
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(addr).then(() => {
          showToast(d ? d.toasts.copiedAddress : "Address copied!");
        }).catch(() => {
          showToast(d ? d.toasts.failedCopy : "Unable to copy address");
        });
      } else {
        showToast(d ? d.toasts.copiedAddress : "Address copied!");
      }
    });
  }

  if (shareBtn) {
    shareBtn.addEventListener("click", () => {
      const d = getCurrentLangData();
      const shareData = {
        title: d ? d.pageTitle : document.title,
        text: d ? d.metaDesc : "Santosh & Rutuja Engagement Invitation",
        url: window.location.href
      };

      if (navigator.share) {
        navigator.share(shareData).catch(() => { });
      } else if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(window.location.href).then(() => {
          showToast(d ? d.toasts.copiedLink : "Invitation link copied!");
        });
      }
    });
  }

  if (scrollTopBtn) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        scrollTopBtn.classList.add("visible");
      } else {
        scrollTopBtn.classList.remove("visible");
      }
    });

    scrollTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
}

function showToast(msg) {
  const toast = document.getElementById("toast-notification");
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 3200);
}


/**
 * 9. Guest Blessings & Wishes Guestbook
 */
function initBlessingsGuestbook() {
  const form = document.getElementById("blessing-form");
  if (!form) return;

  bindQuickPillButtons();

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const nameInput = document.getElementById("guest-name");
    const relInput = document.getElementById("guest-relation");
    const msgInput = document.getElementById("guest-message");
    const d = getCurrentLangData();

    const name = nameInput ? nameInput.value.trim() : "";
    const relation = relInput ? relInput.value.trim() : "";
    const message = msgInput ? msgInput.value.trim() : "";

    if (!name || !message) {
      showToast(d ? d.toasts.missingInput : "Please enter your name and blessing!");
      return;
    }

    const newBlessing = {
      name,
      relation: relation || (d ? (currentLang === "mr" ? "आप्तेष्ट" : currentLang === "hi" ? "शुभचिंतक" : "Well-wisher") : "Well-wisher"),
      message,
      timestamp: new Date().toISOString()
    };

    saveCustomBlessing(newBlessing);
    refreshBlessingsFeed();

    if (nameInput) nameInput.value = "";
    if (relInput) relInput.value = "";
    if (msgInput) msgInput.value = "";

    if (typeof window.triggerPetalCelebration === "function") {
      window.triggerPetalCelebration();
    }

    showToast(d ? d.toasts.blessingThanks : "Thank you for your warm blessings! 🌸");
  });
}

function bindQuickPillButtons() {
  const pills = document.querySelectorAll(".quick-pill-btn");
  const msgInput = document.getElementById("guest-message");
  pills.forEach(pill => {
    pill.addEventListener("click", () => {
      const wish = pill.getAttribute("data-wish");
      if (msgInput && wish) {
        msgInput.value = wish;
        msgInput.focus();
      }
    });
  });
}

function getStoredBlessings() {
  const key = `blessings_storage_${currentLang}`;
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}

function saveCustomBlessing(item) {
  const key = `blessings_storage_${currentLang}`;
  const list = getStoredBlessings();
  list.unshift(item);
  try {
    localStorage.setItem(key, JSON.stringify(list));
  } catch (e) { }
}

function refreshBlessingsFeed() {
  const listEl = document.getElementById("blessings-list");
  if (!listEl) return;

  const stored = getStoredBlessings();
  const d = getCurrentLangData();
  const defaults = (d && d.blessings && d.blessings.defaultBlessings) ? d.blessings.defaultBlessings : [];

  const combined = [...stored, ...defaults];

  listEl.innerHTML = combined.map(b => `
    <div class="blessing-card-item">
      <div class="blessing-author-bar">
        <span class="blessing-author-name"><i class="fa-solid fa-user-pen"></i> ${escapeHtml(b.name)}</span>
        ${b.relation ? `<span class="blessing-relation-tag">${escapeHtml(b.relation)}</span>` : ""}
      </div>
      <p class="blessing-body-text">"${escapeHtml(b.message)}"</p>
    </div>
  `).join("");
}
