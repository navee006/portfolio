# ✨ Magic UI Developer Portfolio

An authentic, standalone **HTML, CSS, and JavaScript** implementation of the famous [Magic UI Portfolio template](https://github.com/magicuidesign/portfolio.git).

Customized for **Naveena Ruby Thomas** ([LinkedIn](https://www.linkedin.com/in/naveena-ruby-thomas)).

---

## 🌟 Implemented Magic UI Components

1. **Floating macOS Dock (`magic-dock`)**:
   - Fixed at the bottom of the viewport
   - Parabolic mouse-magnification effect on hover
   - Tooltips with animated directional arrows
   - Integrated quick navigation links, social links, and theme toggle
2. **Canvas Flickering Grid**:
   - Signature animated canvas grid background in the Contact card with dynamic opacity flickering
3. **Blur-Fade Motion (`blur-fade`)**:
   - Subtle blur-in & slide-up scroll reveal powered by an optimized IntersectionObserver
4. **Interactive Work Accordion**:
   - Smooth expand/collapse animations for work experience details
5. **Project Cards with Preview Media & Badges**:
   - Two-column responsive card grid with tech tags and direct demo / source links
6. **Timeline for Hackathons & Achievements**:
   - Vertical timeline track with status indicators and certificates/links
7. **Single Configuration File (`resume-data.js`)**:
   - Exactly modeled after `src/data/resume.tsx`—all content is editable in one place!

---

## 🚀 Quick Start

### 1. Direct Browser Preview
Double-click [`index.html`](index.html) to open the site directly in any browser (Chrome, Edge, Firefox, Safari). No installation or build step needed!

### 2. Local Server (Optional)
```bash
npx serve .
# or
python -m http.server 3000
```
Then visit `http://localhost:3000`.

---

## ✏️ How to Customize

All your data is organized inside **[`resume-data.js`](resume-data.js)**:

- **Name, Title & Bio**: Update `name`, `description`, `summary`, and `avatarUrl`.
- **Work Experience**: Edit `work` array (company name, title, dates, bullet description, badges).
- **Education**: Edit `education` array (institution, degree, graduation year, honors).
- **Skills**: Add or modify skills in the `skills` array.
- **Projects**: Update `projects` with your own live demo links, repository URLs, and tags.
- **Achievements & Hackathons**: Update `hackathons` array.
- **Socials & Contact**: Update links in `contact.social`.

---

## 📁 File Structure

```text
portfolio/
├── index.html        # Clean semantic structure matching Magic UI layout
├── style.css         # Magic UI & shadcn/ui design tokens, dock & animations
├── app.js            # Dock magnification, flickering canvas, blur-fade observer
├── resume-data.js    # Central data configuration (Naveena Ruby Thomas)
├── package.json      # Local serve scripts
└── README.md         # Documentation
```
