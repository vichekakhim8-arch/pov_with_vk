<!-- src/components/layout/Footer.vue -->

<template>
  <footer class="footer">

    <div class="footer__inner">

      <!-- TOP GRID -->
      <div class="footer__grid">

        <!-- BRAND + SOCIAL -->
        <div class="footer__brand">
          <RouterLink to="/" class="footer__logo">
            <span class="footer__logo-s">S</span>ky<span class="footer__logo-way">Way</span>Hotel
          </RouterLink>

          <p class="footer__tagline">
            Book hotels effortlessly — best prices, unmatched comfort.
          </p>

          <div class="footer__socials">
            <a href="https://facebook.com" target="_blank" aria-label="Facebook" class="footer__social-link footer__social-link--fb">
              <i class="bi bi-facebook"></i>
            </a>
            <a href="https://t.me" target="_blank" aria-label="Telegram" class="footer__social-link footer__social-link--tg">
              <i class="bi bi-telegram"></i>
            </a>
            <a href="https://instagram.com" target="_blank" aria-label="Instagram" class="footer__social-link footer__social-link--ig">
              <i class="bi bi-instagram"></i>
            </a>
            <a href="https://twitter.com" target="_blank" aria-label="Twitter / X" class="footer__social-link footer__social-link--tw">
              <i class="bi bi-twitter-x"></i>
            </a>
          </div>
        </div>

        <!-- QUICK LINKS -->
        <div class="footer__col">
          <h3 class="footer__heading">Quick Links</h3>
          <ul class="footer__list">
            <li><RouterLink to="/" class="footer__link">Home</RouterLink></li>
            <li><RouterLink to="/hotels" class="footer__link">Hotels</RouterLink></li>
            <li><RouterLink to="/booking" class="footer__link">Booking</RouterLink></li>
            <li><RouterLink to="/payment" class="footer__link">Payment</RouterLink></li>
          </ul>
        </div>

        <!-- ACCOUNT -->
        <div class="footer__col">
          <h3 class="footer__heading">Account</h3>
          <ul class="footer__list">
            <li><RouterLink to="/login" class="footer__link">Login</RouterLink></li>
            <li><RouterLink to="/register" class="footer__link">Register</RouterLink></li>
            <li><RouterLink to="/dashboard" class="footer__link">Dashboard</RouterLink></li>
          </ul>
        </div>

        <!-- CONTACT -->
        <div class="footer__col">
          <h3 class="footer__heading">Contact Us</h3>
          <ul class="footer__contact-list">
            <li>
              <i class="bi bi-geo-alt footer__contact-icon"></i>
              <span>Kompot, Cambodia</span>
            </li>
            <li>
              <i class="bi bi-envelope footer__contact-icon"></i>
              <a href="mailto:skywayhotel@hotelbooker.com" class="footer__link">
                skywayhotel@hotelbooker.com
              </a>
            </li>
            <li>
              <i class="bi bi-telephone footer__contact-icon"></i>
              <a href="tel:+85512345678" class="footer__link">+855 12 345 678</a>
            </li>
          </ul>
        </div>

      </div>

      <!-- BOTTOM BAR -->
      <div class="footer__bottom">
        <span>© 2026 SkyWayHotel. All rights reserved.</span>
        <div class="footer__bottom-links">
          <RouterLink to="/privacy" class="footer__bottom-link">Privacy Policy</RouterLink>
          <RouterLink to="/terms" class="footer__bottom-link">Terms of Service</RouterLink>
        </div>
      </div>

    </div>

  </footer>
</template>

<script setup>
</script>

<style scoped>
/* ── Root ── */
.footer {
  background: #0b1120;
  color: #cbd5e1;
  font-family: 'Segoe UI', system-ui, sans-serif;
  border-top: 1px solid rgba(255 255 255 / 0.07);
  margin-top: 4rem;
}

.footer__inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 1.5rem 1.5rem;
}

/* ── Grid ── */
.footer__grid {
  display: grid;
  grid-template-columns: 1.6fr 1fr 1fr 1.4fr;
  gap: 2.5rem;
}

@media (max-width: 900px) {
  .footer__grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 540px) {
  .footer__grid {
    grid-template-columns: 1fr;
  }
}

/* ── Brand ── */
.footer__logo {
  display: inline-block;
  font-size: 1.6rem;
  font-weight: 800;
  letter-spacing: -0.5px;
  color: #f1f5f9;
  text-decoration: none;
  line-height: 1;
}

.footer__logo-s {
  color: #ef4444;
  font-size: 2rem;
}

.footer__logo-way {
  color: #facc15;
}

.footer__tagline {
  margin-top: 0.85rem;
  font-size: 0.875rem;
  color: #64748b;
  line-height: 1.65;
  max-width: 240px;
}

/* ── Socials ── */
.footer__socials {
  display: flex;
  gap: 0.65rem;
  margin-top: 1.4rem;
}

.footer__social-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 8px;
  font-size: 1rem;
  color: #94a3b8;
  background: rgba(255 255 255 / 0.05);
  border: 1px solid rgba(255 255 255 / 0.08);
  text-decoration: none;
  transition: background 0.2s, color 0.2s, border-color 0.2s, transform 0.15s;
}

.footer__social-link:hover {
  transform: translateY(-2px);
}

.footer__social-link--fb:hover { background: rgba(59,130,246,0.15); color: #60a5fa; border-color: rgba(59,130,246,0.3); }
.footer__social-link--tg:hover { background: rgba(14,165,233,0.15); color: #38bdf8; border-color: rgba(14,165,233,0.3); }
.footer__social-link--ig:hover { background: rgba(236,72,153,0.15); color: #f472b6; border-color: rgba(236,72,153,0.3); }
.footer__social-link--tw:hover { background: rgba(148,163,184,0.15); color: #e2e8f0; border-color: rgba(148,163,184,0.3); }

/* ── Columns ── */
.footer__heading {
  font-size: 0.78rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #f1f5f9;
  margin-bottom: 1.1rem;
}

.footer__list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
}

.footer__link {
  font-size: 0.9rem;
  color: #64748b;
  text-decoration: none;
  transition: color 0.18s;
}

.footer__link:hover {
  color: #93c5fd;
}

/* ── Contact ── */
.footer__contact-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.footer__contact-list li {
  display: flex;
  align-items: flex-start;
  gap: 0.55rem;
  font-size: 0.875rem;
  color: #64748b;
  line-height: 1.5;
}

.footer__contact-icon {
  color: #3b82f6;
  font-size: 1rem;
  flex-shrink: 0;
  margin-top: 1px;
}

/* ── Bottom bar ── */
.footer__bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 3rem;
  padding-top: 1.25rem;
  border-top: 1px solid rgba(255 255 255 / 0.07);
  font-size: 0.8rem;
  color: #475569;
}

.footer__bottom-links {
  display: flex;
  gap: 1.25rem;
}

.footer__bottom-link {
  color: #475569;
  text-decoration: none;
  transition: color 0.18s;
}

.footer__bottom-link:hover {
  color: #93c5fd;
}
</style>