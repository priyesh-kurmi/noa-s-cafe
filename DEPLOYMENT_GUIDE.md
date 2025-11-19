# Vercel Deployment Guide - noa's Café

## Current Deployment Status
✅ **Deployed to Vercel** (NOT connected to GitHub)  
🌐 **Live URL:** https://noas-cafe-jhzwj04uz-karim-s-projects-077f85c8.vercel.app

---

## How to Deploy Updates

Whenever you make changes to the website and want to deploy them:

### Step 1: Make Your Changes
Edit any files in your project (components, pages, styles, etc.)

### Step 2: Test Locally (Optional but Recommended)
```powershell
npm run dev
```
Visit `http://localhost:5173` to test your changes

### Step 3: Build the Project
```powershell
npm run build
```
This creates an optimized production build in the `dist` folder.

### Step 4: Deploy to Vercel Production
```powershell
vercel --prod
```

That's it! Your changes will be live in about 30-60 seconds.

---

## Quick Command Reference

| Command | What It Does |
|---------|--------------|
| `npm run dev` | Start local development server |
| `npm run build` | Build production version |
| `vercel` | Deploy to preview (testing) URL |
| `vercel --prod` | Deploy to production URL |
| `vercel --prod --force` | Force redeploy even if no changes detected |

---

## Important Notes

- ❌ **Not connected to GitHub** - Pushing to GitHub will NOT auto-deploy
- ✅ **Manual deployments only** - You control when updates go live
- 📁 **Deploys from local files** - Whatever is in your folder gets deployed
- ⚡ **Fast deployments** - Usually takes 30-60 seconds
- 🔒 **Environment variables** - EmailJS credentials are in the code (already working)

---

## Troubleshooting

### Build Fails
```powershell
npm run build
```
Fix any errors shown, then try deploying again.

### Vercel Command Not Found
```powershell
npm install -g vercel
```

### Want to See Deployment Logs
```powershell
vercel inspect <deployment-url>
```

---

## Common Prompts for Next Deployment

**Simple update and deploy:**
```
I made some changes, please deploy to production
```

**Test before deploying:**
```
Build the project and check for errors, then deploy to production
```

**Deploy specific changes:**
```
I updated [describe changes], please build and deploy
```

---

## Project Structure Reminder

```
Noa-s/
├── src/
│   ├── pages/          # All page components
│   ├── components/     # Reusable components
│   └── App.jsx         # Main app component
├── public/
│   └── images/         # All images (must be here!)
├── dist/               # Build output (auto-generated)
└── package.json        # Dependencies
```

---

**Last Deployment:** November 20, 2025  
**Vercel Project:** noas-cafe  
**CLI Version:** Vercel CLI 48.10.4
