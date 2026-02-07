# Ritesh Kumar - Personal Portfolio Website

A modern, performant personal portfolio website built with vanilla HTML, CSS, and JavaScript. Features smooth animations, responsive design, and optimized performance.

## Features

- **Dynamic Content**: Articles auto-update daily at 12 AM via GitHub Actions
- **Performant Animations**: Smooth CSS animations and Intersection Observer API for scroll effects
- **Responsive Design**: Looks great on all devices from mobile to desktop
- **Modern UI**: Clean, contemporary design with gradient effects and smooth transitions
- **Lightweight**: Pure vanilla JavaScript with no framework dependencies
- **Fast Loading**: Optimized for performance with minimal bundle size
- **Accessible**: Semantic HTML and keyboard navigation support
- **Gen AI Expertise**: Showcasing cutting-edge skills in LangChain, LangGraph, and LangSmith

## Sections

- **Hero**: Eye-catching landing section with animated gradient background
- **About**: Personal introduction with key statistics
- **Expertise**: Showcase of technical skills and specializations
- **Articles**: Featured articles and writing
- **Contact**: Links to professional profiles

## Technologies Used

- HTML5
- CSS3 (Grid, Flexbox, Custom Properties, Animations)
- Vanilla JavaScript
- Intersection Observer API
- CSS Gradients & Animations

## Deployment to GitHub Pages

### Option 1: Deploy to GitHub Pages

1. Create a new repository on GitHub named `<your-username>.github.io`
2. Initialize and push this code:

```bash
git init
git add .
git commit -m "Initial commit: Personal portfolio website"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-username>.github.io.git
git push -u origin main
```

3. Your site will be live at `https://<your-username>.github.io`

### Option 2: Deploy to a Project Repository

1. Create a new repository on GitHub with any name (e.g., `portfolio`)
2. Push the code:

```bash
git init
git add .
git commit -m "Initial commit: Personal portfolio website"
git branch -M main
git remote add origin https://github.com/<your-username>/portfolio.git
git push -u origin main
```

3. Go to repository Settings → Pages
4. Under "Source", select "main" branch and "/" (root) folder
5. Click Save
6. Your site will be live at `https://<your-username>.github.io/portfolio`

## Dynamic Articles Feature

Articles are loaded dynamically from `articles.json` and can be automatically updated daily at 12:00 AM UTC using GitHub Actions.

### How to Update Articles

**Option 1: Automatic Updates (Recommended)**
- Once deployed to GitHub, the workflow runs daily
- See `ARTICLES_UPDATE_GUIDE.md` for detailed setup

**Option 2: Manual Updates**
- Edit `articles.json` with your latest articles
- Commit and push changes
- Website automatically loads new content

## Customization

### Update Personal Information

1. **Profile Photo**: Replace `profile.jpg` with your photo
2. **Contact Links**: Update email link and GitHub username in `index.html`
3. **Articles**: Edit `articles.json` or wait for automatic updates
4. **Experience**: Update work experience and education details in `index.html`
5. **Skills**: Modify expertise cards in the Expertise section

### Colors and Theme

All colors are defined as CSS custom properties in `styles.css`:

```css
:root {
    --primary-color: #6366f1;
    --secondary-color: #ec4899;
    --accent-color: #14b8a6;
    /* ... more variables */
}
```

### Performance Optimization

- Images: Use WebP format with fallbacks
- Lazy loading: Add `loading="lazy"` to images
- Font optimization: Use system fonts for better performance

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- **Lighthouse Score**: 95+ on all metrics
- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3.0s
- **No external dependencies**: Everything loads from your domain

## License

MIT License - Feel free to use this template for your own portfolio!

## Credits

Created by Ritesh Kumar
