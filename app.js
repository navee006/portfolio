/**
 * MAGIC UI PORTFOLIO APPLICATION LOGIC
 * Implements Magic UI components in vanilla JavaScript:
 * - Magnified Floating Dock
 * - Canvas Flickering Grid
 * - Blur-Fade Scroll Animations
 * - Collapsible Work Accordions
 * - Dark / Light Mode Switching
 */

document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  renderHero();
  renderAbout();
  renderWork();
  renderEducation();
  renderSkills();
  renderProjects();
  renderHackathons();
  renderContact();
  renderDock();
  
  initBlurFade();
  initFlickeringGrid();
  initDockMagnification();

  if (window.lucide) {
    window.lucide.createIcons();
  }
});

/* ----------------------------------------------------
 * 1. THEME SWITCHER
 * ---------------------------------------------------- */
function initTheme() {
  const savedTheme = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  
  if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
}

function toggleTheme() {
  const isDark = document.documentElement.classList.toggle("dark");
  localStorage.setItem("theme", isDark ? "dark" : "light");
  updateThemeIcon();
}

function updateThemeIcon() {
  const isDark = document.documentElement.classList.contains("dark");
  const themeIcon = document.getElementById("theme-toggle-icon");
  if (themeIcon) {
    themeIcon.setAttribute("data-lucide", isDark ? "sun" : "moon");
    if (window.lucide) window.lucide.createIcons();
  }
}

/* ----------------------------------------------------
 * 2. HERO SECTION
 * ---------------------------------------------------- */
function renderHero() {
  const heroContainer = document.getElementById("hero-section");
  if (!heroContainer) return;

  const data = RESUME_DATA;
  const firstName = data.name.split(" ")[0];

  heroContainer.innerHTML = `
    <div class="mx-auto w-full max-w-2xl space-y-8">
      <div class="gap-4 gap-y-6 flex flex-col md:flex-row justify-between items-start md:items-center">
        <div class="gap-2 flex flex-col order-2 md:order-1 flex-1">
          <h1 class="text-3xl font-bold tracking-tighter sm:text-4xl lg:text-5xl text-foreground blur-fade">
            Hi, I'm ${firstName} 👋
          </h1>
          <p class="text-muted-foreground text-base md:text-lg lg:text-xl leading-relaxed blur-fade" style="transition-delay: 0.1s;">
            ${data.description}
          </p>
        </div>
        <div class="order-1 md:order-2 blur-fade shrink-0" style="transition-delay: 0.05s;">
          <div class="size-24 md:size-28 rounded-full border border-border shadow-lg ring-4 ring-muted overflow-hidden bg-muted flex items-center justify-center relative">
            ${data.avatarUrl ? `
              <img src="${data.avatarUrl}" alt="${data.name}" class="size-full object-cover" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" />
              <span class="text-xl font-bold text-muted-foreground hidden absolute">${data.initials}</span>
            ` : `
              <span class="text-xl font-bold text-muted-foreground">${data.initials}</span>
            `}
          </div>
        </div>
      </div>
    </div>
  `;
}

/* ----------------------------------------------------
 * 3. ABOUT SECTION
 * ---------------------------------------------------- */
function renderAbout() {
  const container = document.getElementById("about-section");
  if (!container) return;

  container.innerHTML = `
    <div class="flex min-h-0 flex-col gap-y-3">
      <h2 class="text-xl font-bold text-foreground blur-fade">About</h2>
      <div class="font-sans text-muted-foreground text-pretty leading-relaxed text-sm sm:text-base blur-fade" style="transition-delay: 0.1s;">
        <p>${RESUME_DATA.summary}</p>
      </div>
    </div>
  `;
}

/* ----------------------------------------------------
 * 4. WORK EXPERIENCE (COLLAPSIBLE ACCORDION)
 * ---------------------------------------------------- */
function renderWork() {
  const container = document.getElementById("work-section");
  if (!container) return;

  container.innerHTML = `
    <div class="flex min-h-0 flex-col gap-y-6">
      <h2 class="text-xl font-bold text-foreground blur-fade">Work Experience</h2>
      <div class="flex flex-col gap-4">
        ${RESUME_DATA.work.map((work, idx) => `
          <div class="accordion-item blur-fade rounded-xl border border-transparent hover:border-border/60 transition-colors p-2" style="transition-delay: ${0.05 * idx}s;">
            <div class="accordion-header flex items-center justify-between gap-3 group" onclick="toggleAccordion(this)">
              <div class="flex items-center gap-3 flex-1 min-w-0">
                <div class="size-9 rounded-full border border-border bg-muted/60 flex items-center justify-center shrink-0 text-muted-foreground shadow-sm">
                  <i data-lucide="building-2" class="size-4"></i>
                </div>
                <div class="flex-1 min-w-0">
                  <div class="font-semibold text-foreground text-sm sm:text-base flex items-center gap-1.5">
                    <span>${work.company}</span>
                    <i data-lucide="chevron-right" class="size-3.5 text-muted-foreground accordion-chevron"></i>
                  </div>
                  <div class="text-xs sm:text-sm text-muted-foreground">
                    ${work.title}
                  </div>
                </div>
              </div>
              <div class="text-xs text-muted-foreground tabular-nums text-right shrink-0">
                ${work.start} - ${work.end}
              </div>
            </div>
            <div class="accordion-body pl-12 pr-2 pt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
              <p class="mb-2">${work.description}</p>
              ${work.badges && work.badges.length ? `
                <div class="flex gap-1.5">
                  ${work.badges.map(b => `<span class="px-2 py-0.5 rounded-md text-[10px] font-semibold bg-muted text-muted-foreground border border-border">${b}</span>`).join('')}
                </div>
              ` : ''}
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

window.toggleAccordion = function(headerElement) {
  const item = headerElement.closest(".accordion-item");
  if (!item) return;
  item.classList.toggle("active");
};

/* ----------------------------------------------------
 * 5. EDUCATION
 * ---------------------------------------------------- */
function renderEducation() {
  const container = document.getElementById("education-section");
  if (!container) return;

  container.innerHTML = `
    <div class="flex min-h-0 flex-col gap-y-6">
      <h2 class="text-xl font-bold text-foreground blur-fade">Education</h2>
      <div class="flex flex-col gap-5">
        ${RESUME_DATA.education.map((edu, idx) => `
          <div class="flex items-center justify-between gap-3 group blur-fade" style="transition-delay: ${0.05 * idx}s;">
            <div class="flex items-center gap-3 flex-1 min-w-0">
              <div class="size-9 rounded-full border border-border bg-muted/60 flex items-center justify-center shrink-0 text-muted-foreground shadow-sm">
                <i data-lucide="graduation-cap" class="size-4"></i>
              </div>
              <div class="flex-1 min-w-0">
                <div class="font-semibold text-foreground text-sm sm:text-base flex items-center gap-1.5">
                  <a href="${edu.href}" target="_blank" rel="noopener noreferrer" class="hover:underline flex items-center gap-1">
                    <span>${edu.school}</span>
                    <i data-lucide="arrow-up-right" class="size-3.5 text-muted-foreground link-arrow"></i>
                  </a>
                </div>
                <div class="text-xs sm:text-sm text-muted-foreground">
                  ${edu.degree}
                </div>
                ${edu.details ? `<div class="text-xs text-muted-foreground/80 mt-1">${edu.details}</div>` : ''}
              </div>
            </div>
            <div class="text-xs text-muted-foreground tabular-nums text-right shrink-0">
              ${edu.start} - ${edu.end}
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

/* ----------------------------------------------------
 * 6. SKILLS SECTION
 * ---------------------------------------------------- */
function renderSkills() {
  const container = document.getElementById("skills-section");
  if (!container) return;

  container.innerHTML = `
    <div class="flex min-h-0 flex-col gap-y-4">
      <h2 class="text-xl font-bold text-foreground blur-fade">Skills</h2>
      <div class="flex flex-wrap gap-2">
        ${RESUME_DATA.skills.map((skill, idx) => `
          <div class="border border-border bg-card rounded-xl h-8 px-3.5 flex items-center gap-2 shadow-xs hover:border-primary/40 transition-colors blur-fade" style="transition-delay: ${0.02 * idx}s;">
            <i data-lucide="${skill.icon || 'code'}" class="size-3.5 text-muted-foreground"></i>
            <span class="text-foreground text-xs sm:text-sm font-medium">${skill.name}</span>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

/* ----------------------------------------------------
 * 7. PROJECTS SECTION
 * ---------------------------------------------------- */
function renderProjects() {
  const container = document.getElementById("projects-section");
  if (!container) return;

  container.innerHTML = `
    <div class="flex min-h-0 flex-col gap-y-8">
      <!-- Section Divider Badge Header -->
      <div class="flex flex-col gap-y-4 items-center justify-center">
        <div class="flex items-center w-full">
          <div class="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
          <div class="border border-border bg-primary text-primary-foreground rounded-xl px-4 py-1 z-10 shadow-sm">
            <span class="text-xs sm:text-sm font-semibold tracking-wide">My Projects</span>
          </div>
          <div class="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
        </div>
        <div class="flex flex-col gap-y-2 items-center justify-center text-center">
          <h2 class="text-3xl font-bold tracking-tighter sm:text-4xl text-foreground">
            Check out my latest work
          </h2>
          <p class="text-muted-foreground text-sm sm:text-base max-w-[540px]">
            A showcase of web applications, cloud tools, and scalable systems built with modern engineering best practices.
          </p>
        </div>
      </div>

      <!-- Project Cards Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-[800px] mx-auto w-full">
        ${RESUME_DATA.projects.map((proj, idx) => `
          <div class="project-card border border-border bg-card rounded-2xl overflow-hidden flex flex-col h-full blur-fade" style="transition-delay: ${0.06 * idx}s;">
            <!-- Media Preview -->
            <div class="relative h-44 w-full bg-muted overflow-hidden">
              <img src="${proj.image}" alt="${proj.title}" class="w-full h-full object-cover transition-transform duration-500 hover:scale-105" loading="lazy" />
              <div class="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-40"></div>
            </div>

            <!-- Card Content -->
            <div class="p-5 flex-1 flex flex-col justify-between space-y-4">
              <div class="space-y-2">
                <div class="flex items-center justify-between text-xs text-muted-foreground">
                  <span class="font-mono text-[11px]">${proj.dates}</span>
                  ${proj.active ? `<span class="inline-flex items-center px-1.5 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/10 text-emerald-500">Live</span>` : ''}
                </div>
                <h3 class="text-base font-bold text-foreground hover:underline">
                  <a href="${proj.href}" target="_blank" rel="noopener noreferrer">${proj.title}</a>
                </h3>
                <p class="text-xs sm:text-sm text-muted-foreground leading-relaxed line-clamp-3">
                  ${proj.description}
                </p>
              </div>

              <!-- Tags & Action Links -->
              <div class="space-y-3 pt-2">
                <div class="flex flex-wrap gap-1.5">
                  ${proj.technologies.map(t => `
                    <span class="text-[11px] font-medium px-2 py-0.5 rounded-md bg-muted text-muted-foreground border border-border/50">
                      ${t}
                    </span>
                  `).join('')}
                </div>

                <div class="flex items-center gap-2 pt-2 border-t border-border/40">
                  ${proj.links.map(link => `
                    <a href="${link.href}" target="_blank" rel="noopener noreferrer" 
                       class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium bg-foreground text-background hover:opacity-90 transition">
                      <i data-lucide="${link.icon || 'globe'}" class="size-3"></i>
                      <span>${link.type}</span>
                    </a>
                  `).join('')}
                </div>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

/* ----------------------------------------------------
 * 8. HACKATHONS / ACHIEVEMENTS TIMELINE
 * ---------------------------------------------------- */
function renderHackathons() {
  const container = document.getElementById("hackathons-section");
  if (!container) return;

  container.innerHTML = `
    <div class="flex min-h-0 flex-col gap-y-8">
      <!-- Section Divider Badge Header -->
      <div class="flex flex-col gap-y-4 items-center justify-center">
        <div class="flex items-center w-full">
          <div class="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
          <div class="border border-border bg-primary text-primary-foreground rounded-xl px-4 py-1 z-10 shadow-sm">
            <span class="text-xs sm:text-sm font-semibold tracking-wide">Achievements & Hackathons</span>
          </div>
          <div class="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
        </div>
        <div class="flex flex-col gap-y-2 items-center justify-center text-center">
          <h2 class="text-3xl font-bold tracking-tighter sm:text-4xl text-foreground">
            I like building & competing
          </h2>
          <p class="text-muted-foreground text-sm sm:text-base max-w-[540px]">
            Recognition, awards, and collaborative hackathons bringing innovative solutions to reality.
          </p>
        </div>
      </div>

      <!-- Timeline Items -->
      <div class="relative pl-6 space-y-8 max-w-[700px] mx-auto w-full">
        ${RESUME_DATA.hackathons.map((h, idx) => `
          <div class="timeline-item relative pl-6 blur-fade" style="transition-delay: ${0.05 * idx}s;">
            <!-- Indicator dot -->
            <div class="absolute -left-[5px] top-1 size-3 rounded-full bg-primary ring-4 ring-background border border-border"></div>
            
            <div class="space-y-1.5">
              <time class="text-xs text-muted-foreground font-mono">${h.dates} • ${h.location}</time>
              <h3 class="text-base font-bold text-foreground leading-snug">${h.title}</h3>
              <p class="text-xs sm:text-sm text-muted-foreground leading-relaxed">${h.description}</p>
              ${h.links && h.links.length ? `
                <div class="flex gap-2 pt-1">
                  ${h.links.map(l => `
                    <a href="${l.href}" target="_blank" rel="noopener noreferrer" 
                       class="inline-flex items-center gap-1 text-xs text-primary font-semibold hover:underline">
                      <i data-lucide="${l.icon || 'link'}" class="size-3"></i>
                      <span>${l.title}</span>
                    </a>
                  `).join('')}
                </div>
              ` : ''}
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

/* ----------------------------------------------------
 * 9. CONTACT SECTION (WITH FLICKERING GRID)
 * ---------------------------------------------------- */
function renderContact() {
  const container = document.getElementById("contact-section");
  if (!container) return;

  const data = RESUME_DATA;

  container.innerHTML = `
    <div class="border border-border rounded-2xl p-8 sm:p-12 relative overflow-hidden bg-card">
      <!-- Section Tag at top center -->
      <div class="absolute -top-3.5 border border-border bg-primary text-primary-foreground rounded-xl px-4 py-0.5 left-1/2 -translate-x-1/2 shadow-sm">
        <span class="text-xs font-semibold">Contact</span>
      </div>

      <!-- Flickering Canvas Background Masked -->
      <div class="absolute inset-0 top-0 left-0 right-0 h-full overflow-hidden pointer-events-none flickering-canvas-container opacity-40">
        <canvas id="flicker-canvas" class="w-full h-full"></canvas>
      </div>

      <!-- Content -->
      <div class="relative z-10 flex flex-col items-center gap-4 text-center max-w-lg mx-auto">
        <h2 class="text-3xl font-bold tracking-tighter sm:text-5xl text-foreground">
          Get in Touch
        </h2>
        <p class="text-muted-foreground text-sm sm:text-base leading-relaxed">
          Have an exciting project, open role, or just want to connect? Reach out on 
          <a href="${data.contact.social.LinkedIn.url}" target="_blank" rel="noopener noreferrer" class="text-blue-500 font-medium hover:underline underline-offset-4">
            LinkedIn
          </a>
          or drop an email at 
          <a href="${data.contact.social.Email.url}" class="text-blue-500 font-medium hover:underline underline-offset-4">
            ${data.contact.email}
          </a>.
        </p>

        <div class="pt-2 flex flex-wrap items-center justify-center gap-3">
          <a href="${data.contact.social.LinkedIn.url}" target="_blank" rel="noopener noreferrer" 
             class="px-5 py-2.5 rounded-xl bg-primary text-primary-foreground font-semibold text-xs sm:text-sm hover:opacity-90 shadow-md transition flex items-center gap-2">
            <i data-lucide="linkedin" class="size-4"></i>
            <span>Connect on LinkedIn</span>
          </a>
          <a href="${data.contact.social.Email.url}" 
             class="px-5 py-2.5 rounded-xl border border-border bg-background text-foreground font-semibold text-xs sm:text-sm hover:bg-muted transition flex items-center gap-2">
            <i data-lucide="mail" class="size-4"></i>
            <span>Send Email</span>
          </a>
        </div>
      </div>
    </div>
  `;
}

/* ----------------------------------------------------
 * 10. MAGIC UI FLOATING DOCK
 * ---------------------------------------------------- */
function renderDock() {
  const dockContainer = document.getElementById("magic-dock");
  if (!dockContainer) return;

  const data = RESUME_DATA;

  // Nav icons
  const navItems = data.navbar.map(item => `
    <a href="${item.href}" class="dock-item" data-label="${item.label}">
      <i data-lucide="${item.icon}" class="size-4"></i>
      <div class="dock-tooltip">${item.label}</div>
    </a>
  `).join('');

  // Social icons
  const socialItems = Object.entries(data.contact.social)
    .filter(([_, s]) => s.navbar)
    .map(([name, s]) => `
      <a href="${s.url}" target="_blank" rel="noopener noreferrer" class="dock-item" data-label="${name}">
        <i data-lucide="${s.icon}" class="size-4"></i>
        <div class="dock-tooltip">${name}</div>
      </a>
    `).join('');

  // Theme toggle
  const themeItem = `
    <button type="button" class="dock-item" id="dock-theme-btn" onclick="toggleTheme()" data-label="Theme">
      <i id="theme-toggle-icon" data-lucide="${document.documentElement.classList.contains('dark') ? 'sun' : 'moon'}" class="size-4"></i>
      <div class="dock-tooltip">Toggle Theme</div>
    </button>
  `;

  dockContainer.innerHTML = `
    ${navItems}
    <div class="dock-separator"></div>
    ${socialItems}
    <div class="dock-separator"></div>
    ${themeItem}
  `;
}

/* ----------------------------------------------------
 * 11. DOCK MAGNIFICATION EFFECT (macOS / Magic UI style)
 * ---------------------------------------------------- */
function initDockMagnification() {
  const dock = document.getElementById("magic-dock");
  if (!dock) return;

  const items = dock.querySelectorAll(".dock-item");
  const defaultSize = 40;
  const maxScale = 1.35;
  const influenceRadius = 80;

  dock.addEventListener("mousemove", (e) => {
    const mouseX = e.clientX;

    items.forEach((item) => {
      const rect = item.getBoundingClientRect();
      const itemCenterX = rect.left + rect.width / 2;
      const distance = Math.abs(mouseX - itemCenterX);

      if (distance < influenceRadius) {
        const factor = Math.cos((distance / influenceRadius) * (Math.PI / 2));
        const scale = 1 + (maxScale - 1) * factor;
        item.style.transform = `scale(${scale}) translateY(-${(scale - 1) * 12}px)`;
      } else {
        item.style.transform = "scale(1) translateY(0)";
      }
    });
  });

  dock.addEventListener("mouseleave", () => {
    items.forEach((item) => {
      item.style.transform = "scale(1) translateY(0)";
    });
  });
}

/* ----------------------------------------------------
 * 12. CANVAS FLICKERING GRID (Magic UI Signature Component)
 * ---------------------------------------------------- */
function initFlickeringGrid() {
  const canvas = document.getElementById("flicker-canvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  let animationFrameId;

  const squareSize = 3;
  const gridGap = 3;
  const step = squareSize + gridGap;

  function resize() {
    canvas.width = canvas.parentElement.clientWidth;
    canvas.height = canvas.parentElement.clientHeight;
  }

  resize();
  window.addEventListener("resize", resize);

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const isDark = document.documentElement.classList.contains("dark");
    const baseColor = isDark ? "255, 255, 255" : "0, 0, 0";

    const cols = Math.ceil(canvas.width / step);
    const rows = Math.ceil(canvas.height / step);

    for (let c = 0; c < cols; c++) {
      for (let r = 0; r < rows; r++) {
        // Random flickering opacity
        if (Math.random() > 0.45) {
          const alpha = (Math.random() * 0.15).toFixed(3);
          ctx.fillStyle = `rgba(${baseColor}, ${alpha})`;
          ctx.fillRect(c * step, r * step, squareSize, squareSize);
        }
      }
    }

    animationFrameId = setTimeout(() => {
      requestAnimationFrame(draw);
    }, 120);
  }

  draw();
}

/* ----------------------------------------------------
 * 13. BLUR-FADE SCROLL ANIMATION
 * ---------------------------------------------------- */
function initBlurFade() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
  );

  document.querySelectorAll(".blur-fade").forEach((el) => {
    observer.observe(el);
  });
}
