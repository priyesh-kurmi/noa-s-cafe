# NOA'S Café - Premium Multi-Page Website

A premium, minimalistic multi-page website for NOA'S Café built with React, Vite, React Router, and Tailwind CSS.

## Design System

### Color Palette
- **Rich Black**: `#0B0B0B` - Primary text and dark backgrounds
- **White**: `#FFFFFF` - Clean backgrounds
- **Coffee Brown**: `#6B3E2B` - Primary brand accent
- **Warm Cream**: `#FAF3EE` - Soft backgrounds and secondary elements
- **Soft Gold**: `#B78A58` - Accent and highlights

### Typography
- **Display Font**: Playfair Display (serif) - Used for headings and the logo
- **Body Font**: Inter (sans-serif) - Used for body text and UI elements

## Features

- ✨ Premium minimalistic design
- 🎨 Black, white, and coffee brown color scheme
- 📱 Fully responsive layout
- ⚡ Built with Vite for fast development
- 🔗 Multi-page navigation with React Router
- 📄 7 fully designed pages (Home, Our Coffee, Menu, Catering, Locations, About, Contact)
- 📝 Working contact and catering forms
- 🖼️ Optimized image loading
- ♿ Accessibility-focused

## Project Structure

```
noas-cafe/
├── src/
│   ├── components/
│   │   ├── Header.jsx      # Navigation header with routing
│   │   └── Footer.jsx      # Footer with links
│   ├── pages/
│   │   ├── Home.jsx        # Homepage with all sections
│   │   ├── OurCoffee.jsx   # Coffee origins and roasting
│   │   ├── Menu.jsx        # Menu with Flipdish link
│   │   ├── Catering.jsx    # Corporate catering services
│   │   ├── Locations.jsx   # All café locations
│   │   ├── About.jsx       # Company story and values
│   │   └── Contact.jsx     # Contact form
│   ├── App.jsx             # Main app with routing
│   ├── main.jsx            # App entry point
│   └── index.css           # Global styles with Tailwind
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

## Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

### Development

Start the development server:
```bash
npm run dev
```

The site will open automatically at `http://localhost:3000`

### Build for Production

Create an optimized production build:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## Deployment

### Deploy to Netlify

1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify
3. Or use Netlify CLI:
```bash
netlify deploy --prod --dir=dist
```

### Deploy to Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

## Customization

### Update Content
- Modify text and copy in each component file under `src/components/`
- Update images by replacing the URLs in the component files

### Update Colors
- Edit `tailwind.config.js` to change the color palette
- The custom colors are defined in the `theme.extend.colors` section

### Update Fonts
- Change fonts in `tailwind.config.js` under `theme.extend.fontFamily`
- Update Google Fonts link in `index.html`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2025 Noa's Café. All rights reserved.
