# فريق شباب الخير | Shabab Al-Khair

A production-ready website for a youth volunteer team built with React, Vite, and Tailwind CSS.

## Features

- 🌐 **Bilingual Support**: Arabic (RTL) and English (LTR) with language switcher
- 📱 **Fully Responsive**: Mobile-first design
- 🎨 **Modern UI**: Clean, humanitarian-focused design
- ⚡ **Fast**: Built with Vite for optimal performance
- 🧩 **Component-Based**: Clean, reusable component architecture

## Tech Stack

- React 18
- Vite
- Tailwind CSS
- React Router DOM
- JavaScript (ES6+)

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The website will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
 ├─ components/
 │   ├─ Navbar.jsx
 │   ├─ Footer.jsx
 │   ├─ LanguageToggle.jsx
 │   ├─ InitiativeCard.jsx
 │   └─ SectionTitle.jsx
 ├─ pages/
 │   ├─ Home.jsx
 │   ├─ About.jsx
 │   ├─ VisionMission.jsx
 │   ├─ Initiatives.jsx
 │   ├─ JoinUs.jsx
 │   ├─ Gallery.jsx
 │   ├─ Contact.jsx
 │   └─ Partners.jsx
 ├─ data/
 │   └─ content.js
 ├─ App.jsx
 ├─ main.jsx
 └─ index.css
```

## Pages

1. **Home**: Hero section with mission statement
2. **About Us**: Team information and values
3. **Vision & Mission**: Organization's vision and mission
4. **Initiatives**: Showcase of volunteer initiatives
5. **Join Us**: Volunteer registration form with validation
6. **Gallery**: Photo gallery of volunteer activities
7. **Contact**: Contact information and social media links
8. **Partners**: Partners and supporters section

## Language Support

The website supports both Arabic and English. The language preference is saved in localStorage and persists across sessions.

## Customization

- Colors: Edit `tailwind.config.js` to change the color scheme
- Content: Update `src/data/content.js` to modify text content
- Images: Replace placeholder images in Gallery and Home pages

## Future Enhancements

- Backend integration (Node/Express)
- Database for volunteer applications
- Admin dashboard
- WhatsApp and Email integration
- Deployment configuration

## License

All rights reserved © 2024 فريق شباب الخير

