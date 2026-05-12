// ════════════════════════════════════════════════════════════
// DOM Elements
// ════════════════════════════════════════════════════════════
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileNavDropdown = document.getElementById('mobile-nav-dropdown');
const mobileNavLinks = document.querySelectorAll('.mobile-nav-links a');
const themeToggle = document.getElementById('theme-toggle');
const projectsContainer = document.getElementById('projects-container');
const skillsContainer = document.getElementById('skills-container');
const experienceContainer = document.getElementById('experience-container');
const contactForm = document.getElementById('contact-form');
const newsletterForm = document.getElementById('newsletter-form');
const currentYearSpan = document.getElementById('current-year');
const backToTopBtn = document.getElementById('back-to-top');
const scrollProgress = document.querySelector('.scroll-progress');
const desktopNavLinks = document.querySelectorAll('.nav-links a');

// Typing animation
let typingText = document.querySelector('.typing-text');
const roles = ['Software Developer', 'Full Stack Developer', 'Data Analyst'];
let roleIndex = 0, charIndex = 0, isDeleting = false, isTyping = true;

// Nav overlay (dim background when mobile menu open)
let navOverlay = null;

// ════════════════════════════════════════════════════════════
// Init
// ════════════════════════════════════════════════════════════
document.addEventListener('DOMContentLoaded', function () {
    console.log('Portfolio initialized — Sandeep Aryan');

    AOS.init({ duration: 1000, once: true, offset: 80, delay: 100, easing: 'ease-out-cubic' });

    setCurrentYear();
    initTheme();
    loadProjects();
    loadSkills();

    setupMobileMenu();
    setupThemeToggle();
    setupSmoothScrolling();
    setupFormSubmission();
    setupNewsletter();
    setupActiveNavLink();
    setupScrollProgress();
    setupBackToTop();
    setupCounters();
    startTypingAnimation();
    addNotificationStyles();

    // Create nav overlay element
    navOverlay = document.createElement('div');
    navOverlay.className = 'nav-overlay';
    document.body.appendChild(navOverlay);
    navOverlay.addEventListener('click', closeMobileMenu);
});

// ════════════════════════════════════════════════════════════
// Utilities
// ════════════════════════════════════════════════════════════
function setCurrentYear() {
    if (currentYearSpan) currentYearSpan.textContent = new Date().getFullYear();
}

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// ════════════════════════════════════════════════════════════
// Theme
// ════════════════════════════════════════════════════════════
function initTheme() {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const saved = localStorage.getItem('theme') || (prefersDark ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', saved);
    updateThemeIcon(saved);
}

function setupThemeToggle() {
    if (!themeToggle) return;
    themeToggle.addEventListener('click', () => {
        const cur = document.documentElement.getAttribute('data-theme');
        const next = cur === 'light' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', next);
        localStorage.setItem('theme', next);
        updateThemeIcon(next);
    });
}

function updateThemeIcon(theme) {
    if (!themeToggle) return;
    const icon = themeToggle.querySelector('i');
    if (icon) icon.className = theme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
}

// ════════════════════════════════════════════════════════════
// MOBILE MENU — hamburger ↔ X, dropdown slide
// ════════════════════════════════════════════════════════════
function openMobileMenu() {
    mobileMenuBtn.classList.add('open');
    mobileMenuBtn.setAttribute('aria-expanded', 'true');
    mobileNavDropdown.classList.add('open');
    if (navOverlay) {
        navOverlay.style.display = 'block';
        setTimeout(() => navOverlay.classList.add('visible'), 10);
    }
    document.body.style.overflow = 'hidden'; // prevent body scroll while menu open
}

function closeMobileMenu() {
    mobileMenuBtn.classList.remove('open');
    mobileMenuBtn.setAttribute('aria-expanded', 'false');
    mobileNavDropdown.classList.remove('open');
    if (navOverlay) {
        navOverlay.classList.remove('visible');
        setTimeout(() => { navOverlay.style.display = 'none'; }, 300);
    }
    document.body.style.overflow = '';
}

function setupMobileMenu() {
    if (!mobileMenuBtn || !mobileNavDropdown) return;

    // Toggle on button click
    mobileMenuBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const isOpen = mobileNavDropdown.classList.contains('open');
        isOpen ? closeMobileMenu() : openMobileMenu();
    });

    // Close when a mobile nav link is clicked
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', () => closeMobileMenu());
    });

    // Close on ESC key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && mobileNavDropdown.classList.contains('open')) {
            closeMobileMenu();
        }
    });

    // Sync active state between desktop + mobile links
    syncActiveLinks();
}

// Mark active nav link in both desktop and mobile menus
function syncActiveLinks() {
    const allNavLinks = [
        ...document.querySelectorAll('.nav-links a'),
        ...document.querySelectorAll('.mobile-nav-links a')
    ];

    const sections = document.querySelectorAll('section[id]');
    if (!sections.length) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                allNavLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, { rootMargin: '-20% 0px -70% 0px' });

    sections.forEach(s => observer.observe(s));
}

// ════════════════════════════════════════════════════════════
// Smooth Scrolling
// ════════════════════════════════════════════════════════════
function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                const headerH = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-height')) || 70;
                window.scrollTo({ top: target.offsetTop - headerH, behavior: 'smooth' });
            }
        });
    });
}

// ════════════════════════════════════════════════════════════
// Scroll Progress
// ════════════════════════════════════════════════════════════
function setupScrollProgress() {
    if (!scrollProgress) return;
    window.addEventListener('scroll', () => {
        const total = document.documentElement.scrollHeight - window.innerHeight;
        scrollProgress.style.width = `${(window.scrollY / total) * 100}%`;
    }, { passive: true });
}

// ════════════════════════════════════════════════════════════
// Back to Top
// ════════════════════════════════════════════════════════════
function setupBackToTop() {
    if (!backToTopBtn) return;
    window.addEventListener('scroll', () => {
        backToTopBtn.classList.toggle('visible', window.scrollY > 300);
    }, { passive: true });
    backToTopBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

// ════════════════════════════════════════════════════════════
// Active Nav Link (desktop — kept for completeness)
// ════════════════════════════════════════════════════════════
function setupActiveNavLink() {
    // handled inside syncActiveLinks() for both menus
}

// ════════════════════════════════════════════════════════════
// Counters
// ════════════════════════════════════════════════════════════
function setupCounters() {
    document.querySelectorAll('.stat-number').forEach(counter => {
        const target = +counter.getAttribute('data-count');
        const inc = target / 100;
        let cur = 0;
        const obs = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) {
                const tick = () => {
                    if (cur < target) { cur += inc; counter.textContent = Math.ceil(cur); setTimeout(tick, 20); }
                    else counter.textContent = target;
                };
                tick();
                obs.unobserve(counter);
            }
        }, { threshold: 0.5 });
        obs.observe(counter);
    });
}

// ════════════════════════════════════════════════════════════
// Typing Animation
// ════════════════════════════════════════════════════════════
function startTypingAnimation() {
    if (!typingText) return;

    function type() {
        if (!isTyping) return;
        const cur = roles[roleIndex];
        typingText.textContent = isDeleting
            ? cur.substring(0, charIndex - 1)
            : cur.substring(0, charIndex + 1);
        isDeleting ? charIndex-- : charIndex++;

        if (!isDeleting && charIndex === cur.length) { isDeleting = true; setTimeout(type, 1500); }
        else if (isDeleting && charIndex === 0) { isDeleting = false; roleIndex = (roleIndex + 1) % roles.length; setTimeout(type, 500); }
        else { setTimeout(type, isDeleting ? 50 : 100); }
    }

    setTimeout(type, 1000);
    document.addEventListener('visibilitychange', () => { isTyping = !document.hidden; });
}

// ════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════
// Load Projects
// ════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════
// ════════════════════════════════════════════════════════════
// ════════════════════════════════════════════════════════════
// PROJECTS — replace the entire loadProjects block
// (everything from "let currentNoteworthyFilter" down to
//  "window.addEventListener('resize', updateArrows)")
// ════════════════════════════════════════════════════════════

let currentNoteworthyFilter = 'all';

function loadProjects() {
    if (typeof portfolioData === 'undefined' || !portfolioData?.projects) return;

    renderFeaturedProjects();
    renderNoteworthyProjects('all');

    // Filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', function () {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            currentNoteworthyFilter = this.getAttribute('data-filter');
            renderNoteworthyProjects(currentNoteworthyFilter);
        });
    });

    // Carousel arrows (prev/next)
    const prevBtn = document.getElementById('prev-arrow');
    const nextBtn = document.getElementById('next-arrow');
    const grid = document.getElementById('noteworthy-container');

    if (prevBtn && nextBtn && grid) {
        prevBtn.addEventListener('click', () => {
            const cardW = (grid.querySelector('.noteworthy-card')?.offsetWidth || 300) + 20;
            grid.scrollBy({ left: -cardW, behavior: 'smooth' });
        });
        nextBtn.addEventListener('click', () => {
            const cardW = (grid.querySelector('.noteworthy-card')?.offsetWidth || 300) + 20;
            grid.scrollBy({ left: cardW, behavior: 'smooth' });
        });
    }
}

// ── Featured: top 3, alternating left/right ──────────────────
function renderFeaturedProjects() {
    const container = document.getElementById('featured-projects-container');
    if (!container) return;

    const featured = portfolioData.projects.filter(p => p.featured).slice(0, 3);
    container.innerHTML = '';

    featured.forEach((project, index) => {
        const item = document.createElement('div');
        item.className = 'featured-item';
        item.setAttribute('data-aos', index % 2 === 0 ? 'fade-right' : 'fade-left');
        item.setAttribute('data-aos-delay', '100');

        // Visual panel: real image if available, else gradient+icon fallback
        const hasImage = project.image && project.image.length > 0;
        const visualInner = hasImage
            ? `<img src="${project.image}" alt="${project.title}" class="fv-img" loading="lazy" onerror="this.parentElement.classList.add('fv-no-img')">`
            : '';
        const fallbackInner = `
            <div class="fv-fallback" style="background:${project.gradient}">
                <div class="fv-grid"></div>
                <div class="fv-dots"><span></span><span></span><span></span><span></span><span></span><span></span></div>
                <div class="fv-icon"><i class="fas ${project.icon}"></i></div>
            </div>`;

        // Use github link as primary, liveDemo as fallback
        const primaryLink = project.github || project.liveDemo || '#';

        item.innerHTML = `
            <div class="featured-visual ${index % 2 !== 0 ? 'fv-right' : ''}">
                ${hasImage ? visualInner : ''}
                ${fallbackInner}
                <div class="fv-overlay">
                    <a href="${primaryLink}" target="_blank" class="fv-circle-btn" aria-label="Open project">
                        <i class="fas fa-arrow-up-right-from-square"></i>
                    </a>
                </div>
                <div class="featured-badge">Featured Project</div>
            </div>

            <div class="featured-content ${index % 2 !== 0 ? 'fc-left' : ''}">
                <div class="featured-label">Featured Project</div>
                <h3 class="featured-title">${project.title}</h3>
                <div class="featured-desc-box">
                    <p>${project.description}</p>
                </div>
                ${project.stats ? `
                <div class="featured-stats">
                    ${project.stats.map(s => `
                        <div class="featured-stat">
                            <span class="fstat-value" style="color:${project.accent}">${s.value}</span>
                            <span class="fstat-label">${s.label}</span>
                        </div>`).join('')}
                </div>` : ''}
                <div class="featured-tags">
                    ${project.tags.map(t => `<span class="ftag">${t}</span>`).join('')}
                </div>
                <div class="featured-actions">
                    ${project.github ? `<a href="${project.github}"   target="_blank" class="btn btn-outline btn-sm"><i class="fab fa-github"></i> Code</a>` : ''}
                    ${project.liveDemo ? `<a href="${project.liveDemo}" target="_blank" class="btn btn-primary  btn-sm"><i class="fas fa-external-link-alt"></i> Live Demo</a>` : ''}
                </div>
            </div>`;

        container.appendChild(item);
    });
}

// ── Noteworthy: horizontal scroll row ────────────────────────
function renderNoteworthyProjects(filter) {
    const container = document.getElementById('noteworthy-container');
    if (!container) return;

    const all = portfolioData.projects.filter(p => !p.featured);
    const filtered = filter === 'all'
        ? all
        : all.filter(p => p.filterTags && p.filterTags.includes(filter));

    container.style.opacity = '0';

    setTimeout(() => {
        container.innerHTML = '';

        filtered.forEach(project => {
            const card = document.createElement('div');
            card.className = 'noteworthy-card';
            const hasLink = project.github || project.liveDemo;

            card.innerHTML = `
                <div class="ncard-top">
                    <div class="ncard-avatar" style="background:${project.gradient}">
                        <i class="fas ${project.icon}"></i>
                    </div>
                    ${hasLink
                    ? `<a href="${project.github || project.liveDemo}" target="_blank" class="ncard-link" aria-label="Open project">
                               <i class="fas fa-arrow-up-right-from-square"></i>
                           </a>`
                    : ''}
                </div>
                <h4 class="ncard-title">${project.title}</h4>
                <p class="ncard-desc">${project.description}</p>
                <div class="ncard-tags">
                    ${project.tags.slice(0, 3).map(t => `<span class="ntag">${t}</span>`).join('')}
                    ${project.tags.length > 3 ? `<span class="ntag ntag-more">+${project.tags.length - 3}</span>` : ''}
                </div>`;

            container.appendChild(card);
        });

        requestAnimationFrame(() => {
            container.style.transition = 'opacity 0.35s ease';
            container.style.opacity = '1';
        });

        AOS.refresh();
    }, 200);
}

// ════════════════════════════════════════════════════════════
// Load Skills
// ════════════════════════════════════════════════════════════
// ════════════════════════════════════════════════════════════
// SKILLS — replace the entire loadSkills() + animateSkillBars()
// block in main.js with this
// ════════════════════════════════════════════════════════════

let activeSkillFilter = 'frontend';

function loadSkills() {
    if (!skillsContainer || typeof portfolioData === 'undefined') return;

    // Render the first tab on load
    renderSkills('frontend');

    // Other tech pills
    renderOtherTech();

    // Filter button listeners
    document.querySelectorAll('.skill-filter-btn').forEach(btn => {
        btn.addEventListener('click', function () {
            document.querySelectorAll('.skill-filter-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            activeSkillFilter = this.getAttribute('data-filter');
            renderSkills(activeSkillFilter);
        });
    });
}

function renderSkills(filterKey) {
    const container = document.getElementById('skills-container');
    if (!container) return;

    // Find matching category
    const cat = portfolioData.skills.find(s => s.filterKey === filterKey);
    if (!cat) return;

    // Fade out
    container.style.opacity = '0';
    container.style.transform = 'translateY(10px)';

    setTimeout(() => {
        container.innerHTML = '';

        cat.items.forEach((skill, i) => {
            const card = document.createElement('div');
            card.className = 'skill-card-new';
            card.style.animationDelay = `${i * 60}ms`;

            card.innerHTML = `
                <div class="skc-header">
                    <div class="skc-icon-wrap">
                        <i class="${skill.icon}"></i>
                    </div>
                    <div class="skc-info">
                        <span class="skc-name">${skill.name}</span>
                        <span class="skc-label">${skill.label}</span>
                    </div>
                    <span class="skc-percent">${skill.level}%</span>
                </div>
                <div class="skc-bar-track">
                    <div class="skc-bar-fill" data-width="${skill.level}"></div>
                </div>`;

            container.appendChild(card);
        });

        // Fade in
        requestAnimationFrame(() => {
            container.style.transition = 'opacity 0.35s ease, transform 0.35s ease';
            container.style.opacity = '1';
            container.style.transform = 'translateY(0)';

            // Animate bars after short delay
            setTimeout(() => animateSkillBars(), 100);
        });

        AOS.refresh();
    }, 180);
}

function animateSkillBars() {
    document.querySelectorAll('.skc-bar-fill').forEach(bar => {
        const target = bar.getAttribute('data-width');
        bar.style.width = '0%';
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                bar.style.transition = 'width 1.1s cubic-bezier(0.4, 0, 0.2, 1)';
                bar.style.width = target + '%';
            });
        });
    });
}

function renderOtherTech() {
    const pillsEl = document.getElementById('other-tech-pills');
    if (!pillsEl || !portfolioData.otherTech) return;

    pillsEl.innerHTML = portfolioData.otherTech
        .map(t => `<span class="other-pill">${t}</span>`)
        .join('');
}

// ════════════════════════════════════════════════════════════
// Contact Form
// ════════════════════════════════════════════════════════════
function setupFormSubmission() {
    if (!contactForm) return;

    contactForm.addEventListener('submit', async function (e) {
        e.preventDefault();

        const data = {
            name:    document.getElementById('name').value.trim(),
            email:   document.getElementById('email').value.trim(),
            subject: document.getElementById('subject').value.trim(),
            message: document.getElementById('message').value.trim()
        };

        // Validation
        if (!data.name || !data.email || !data.subject || !data.message) {
            showNotification('Please fill in all fields.', 'error');
            return;
        }
        if (!isValidEmail(data.email)) {
            showNotification('Please enter a valid email address.', 'error');
            return;
        }

        const btn = this.querySelector('button[type="submit"]');
        const orig = btn.innerHTML;
        btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        btn.disabled = true;

        try {
            const response = await fetch('https://san-backend-9chh.onrender.com/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });

            const result = await response.json();

            if (result.success) {
                showNotification("Message sent! I'll get back to you soon.", 'success');
                contactForm.reset();
            } else {
                showNotification(result.message || 'Something went wrong.', 'error');
            }

        } catch (error) {
            showNotification('Network error. Please try again.', 'error');
        } finally {
            btn.innerHTML = orig;
            btn.disabled = false;
        }
    });
}


// function setupFormSubmission() {
//     if (!contactForm) return;
//     contactForm.addEventListener('submit', async function (e) {
//         e.preventDefault();
//         const data = Object.fromEntries(new FormData(this));
//         if (!data.name || !data.email || !data.subject || !data.message) { showNotification('Please fill in all fields.', 'error'); return; }
//         if (!isValidEmail(data.email)) { showNotification('Please enter a valid email address.', 'error'); return; }

//         const btn = this.querySelector('button[type="submit"]');
//         const orig = btn.innerHTML;
//         btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
//         btn.disabled = true;

//         try {
//             await new Promise(r => setTimeout(r, 1500));
//             showNotification("Message sent successfully! I'll get back to you soon.", 'success');
//             contactForm.reset();
//         } catch {
//             showNotification('Failed to send message. Please try again.', 'error');
//         } finally {
//             btn.innerHTML = orig;
//             btn.disabled = false;
//         }
//     });
// }

// ════════════════════════════════════════════════════════════
// Newsletter
// ════════════════════════════════════════════════════════════
function setupNewsletter() {
    if (!newsletterForm) return;
    newsletterForm.addEventListener('submit', async function (e) {
        e.preventDefault();
        const email = this.querySelector('input[type="email"]').value.trim();
        if (!isValidEmail(email)) { showNotification('Please enter a valid email address.', 'error'); return; }

        const btn = this.querySelector('button[type="submit"]');
        const orig = btn.innerHTML;
        btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
        btn.disabled = true;

        try {
            await new Promise(r => setTimeout(r, 1000));
            showNotification('Thank you for subscribing!', 'success');
            this.reset();
        } catch {
            showNotification('Failed to subscribe. Please try again.', 'error');
        } finally {
            btn.innerHTML = orig;
            btn.disabled = false;
        }
    });
}

// ════════════════════════════════════════════════════════════
// Notifications
// ════════════════════════════════════════════════════════════
function showNotification(message, type = 'info') {
    document.querySelectorAll('.notification').forEach(n => { n.style.animation = 'slideOut 0.3s ease'; setTimeout(() => n.remove(), 300); });

    const icons = { success: 'fa-check-circle', error: 'fa-exclamation-circle', warning: 'fa-exclamation-triangle', info: 'fa-info-circle' };
    const el = document.createElement('div');
    el.className = `notification ${type}`;
    el.innerHTML = `
        <div class="notification-content">
            <i class="fas ${icons[type] || icons.info}"></i>
            <span>${message}</span>
        </div>
        <button class="notification-close" aria-label="Close"><i class="fas fa-times"></i></button>`;
    document.body.appendChild(el);

    el.querySelector('.notification-close').addEventListener('click', () => {
        el.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => el.remove(), 300);
    });
    setTimeout(() => {
        if (el.parentNode) { el.style.animation = 'slideOut 0.3s ease'; setTimeout(() => el.remove(), 300); }
    }, 5000);
}

function addNotificationStyles() {
    if (document.querySelector('#notification-animations')) return;
    const s = document.createElement('style');
    s.id = 'notification-animations';
    s.textContent = `
        @keyframes slideIn  { from{transform:translateX(100%);opacity:0} to{transform:translateX(0);opacity:1} }
        @keyframes slideOut { from{transform:translateX(0);opacity:1}   to{transform:translateX(100%);opacity:0} }
    `;
    document.head.appendChild(s);
}

// ════════════════════════════════════════════════════════════
// Ripple effect on buttons
// ════════════════════════════════════════════════════════════
document.addEventListener('click', function (e) {
    const btn = e.target.closest('.btn');
    if (!btn) return;
    const circle = document.createElement('span');
    const d = Math.max(btn.clientWidth, btn.clientHeight);
    circle.style.cssText = `width:${d}px;height:${d}px;left:${e.clientX - btn.getBoundingClientRect().left - d / 2}px;top:${e.clientY - btn.getBoundingClientRect().top - d / 2}px;`;
    circle.classList.add('ripple');
    btn.querySelector('.ripple')?.remove();
    btn.appendChild(circle);
    setTimeout(() => circle.remove(), 600);
});

// ════════════════════════════════════════════════════════════
// Misc
// ════════════════════════════════════════════════════════════
document.addEventListener('visibilitychange', () => { if (!document.hidden) AOS.refresh(); });

let resizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        AOS.refresh();
        // Auto-close mobile menu on desktop resize
        if (window.innerWidth > 900 && mobileNavDropdown?.classList.contains('open')) {
            closeMobileMenu();
        }
    }, 250);
}, { passive: true });

window.addEventListener('load', () => {
    AOS.refresh();
    document.body.classList.add('loaded');
});


// Developer Flow icon in wired connect code  
// Wire light beam
function setupWireLight() {
    function setWire() {
        const track = document.getElementById('flowTrack');
        const svg = document.getElementById('wireSvg');
        if (!track || !svg) return;

        const nodes = track.querySelectorAll('.flow-node');
        const tr = track.getBoundingClientRect();
        const first = nodes[0].querySelector('.flow-ico').getBoundingClientRect();
        const last = nodes[nodes.length - 1].querySelector('.flow-ico').getBoundingClientRect();

        const x1 = first.left + first.width / 2 - tr.left;
        const x2 = last.left + last.width / 2 - tr.left;
        const y = first.top + first.height / 2 - tr.top;

        svg.style.height = track.offsetHeight + 'px';
        ['wBase', 'wGlow', 'wCore'].forEach(id => {
            const el = document.getElementById(id);
            el.setAttribute('x1', x1); el.setAttribute('y1', y);
            el.setAttribute('x2', x2); el.setAttribute('y2', y);
        });

        const len = x2 - x1;
        const beamLen = Math.round(len * 0.18);
        ['wGlow', 'wCore'].forEach(id => {
            document.getElementById(id).style.strokeDasharray = `${beamLen} ${len + beamLen}`;
        });
        document.documentElement.style.setProperty('--wire-travel', `${-(len + beamLen)}px`);
    }

    setTimeout(setWire, 150);
    window.addEventListener('resize', () => setTimeout(setWire, 100));
}

setupWireLight();