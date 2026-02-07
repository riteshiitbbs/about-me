# 🚀 Deployment Guide

Complete guide to deploy your portfolio website to GitHub Pages.

## ✅ Pre-Deployment Checklist

Before deploying, ensure:

- [x] Profile image (`profile.jpg`) is in place
- [x] All personal information is updated in `index.html`
- [x] Contact links (GitHub, LinkedIn) are correct
- [x] Articles in `articles.json` are current
- [x] All files are committed to git

## 📋 Quick Start

### Step 1: Initialize Git Repository (if not done)

```bash
git init
git add .
git commit -m "Initial commit: Personal portfolio website"
```

### Step 2: Create GitHub Repository

**Option A: For username.github.io (Recommended)**

1. Create a new repository named exactly: `riteshiitbbs.github.io`
2. Don't initialize with README
3. Push your code:

```bash
git branch -M main
git remote add origin https://github.com/riteshiitbbs/riteshiitbbs.github.io.git
git push -u origin main
```

4. Your site will be live at: `https://riteshiitbbs.github.io`

**Option B: For project repository**

1. Create a new repository with any name (e.g., `portfolio`)
2. Push your code:

```bash
git branch -M main
git remote add origin https://github.com/riteshiitbbs/portfolio.git
git push -u origin main
```

3. Enable GitHub Pages:
   - Go to repository **Settings** → **Pages**
   - Source: **Deploy from a branch**
   - Branch: **main** / **root**
   - Click **Save**

4. Your site will be live at: `https://riteshiitbbs.github.io/portfolio`

### Step 3: Enable GitHub Actions

1. Go to your repository **Settings**
2. Navigate to **Actions** → **General**
3. Under "Workflow permissions", select:
   - ✅ **Read and write permissions**
4. Click **Save**

This allows the daily article update workflow to commit changes.

### Step 4: Test the Deployment

1. Wait 2-3 minutes for GitHub Pages to build
2. Visit your site URL
3. Check all sections load correctly
4. Test navigation and animations
5. Verify articles load dynamically

## 🔧 Post-Deployment Configuration

### Enable Custom Domain (Optional)

1. Add a `CNAME` file with your domain:

```bash
echo "yourdomain.com" > CNAME
git add CNAME
git commit -m "Add custom domain"
git push
```

2. In GitHub Settings → Pages → Custom domain:
   - Enter your domain
   - Wait for DNS check

3. Update your domain's DNS records:
   - Type: `A`
   - Name: `@`
   - Value: `185.199.108.153` (and 3 more GitHub IPs)

### Test Dynamic Articles

1. Go to **Actions** tab
2. Select "Update LinkedIn Articles" workflow
3. Click **Run workflow**
4. Check if articles.json updates

## 🔄 Updating Your Site

### Update Content

```bash
# Edit files locally
nano index.html

# Commit and push
git add .
git commit -m "Update experience section"
git push
```

### Update Articles Manually

```bash
# Edit articles.json
nano articles.json

# Commit and push
git add articles.json
git commit -m "Update articles"
git push
```

The website will reload the new articles automatically.

## 🐛 Troubleshooting

### Site Not Loading

- Check repository Settings → Pages is enabled
- Ensure `main` branch is selected
- Wait 5 minutes after pushing changes
- Check Actions tab for build errors

### Articles Not Updating

- Verify `articles.json` is valid JSON (use jsonlint.com)
- Check GitHub Actions permissions (read/write)
- Review workflow logs in Actions tab
- Try manual workflow trigger

### Images Not Loading

- Ensure `profile.jpg` is in root directory
- Check file path is exactly: `profile.jpg`
- Clear browser cache
- Verify image was committed to git

### Animations Not Working

- Check browser console for JavaScript errors
- Ensure `script.js` is loaded
- Try hard refresh (Ctrl/Cmd + Shift + R)

## 📊 Analytics (Optional)

### Add Google Analytics

Add before `</head>` in `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Add GitHub Insights

GitHub provides:
- Traffic stats (Settings → Insights → Traffic)
- Popular content
- Referrer sources
- Visitor counts

## 🎯 Performance Optimization

### Enable Compression

GitHub Pages automatically compresses files.

### Use WebP Images

Convert images to WebP for better performance:

```bash
# Install webp tools
brew install webp  # macOS

# Convert image
cwebp profile.jpg -o profile.webp -q 80
```

Update HTML:
```html
<img src="profile.webp" alt="Ritesh Kumar" class="profile-photo">
```

### Minimize CSS/JS (Advanced)

For production, consider minifying:

```bash
# Install minifiers
npm install -g clean-css-cli uglify-js

# Minify CSS
cleancss -o styles.min.css styles.css

# Minify JS
uglifyjs script.js -o script.min.js
```

## 🌟 Next Steps

1. Share your portfolio URL on LinkedIn
2. Add URL to GitHub profile README
3. Include in resume and job applications
4. Monitor GitHub Actions for daily updates
5. Keep articles.json current with latest posts

## 📞 Support

- **GitHub Pages Docs**: https://docs.github.com/pages
- **GitHub Actions Docs**: https://docs.github.com/actions
- **Check Status**: https://www.githubstatus.com

## 🎉 You're Live!

Your portfolio is now live and automatically updating daily. Congratulations! 🚀

Share your portfolio:
- LinkedIn: Update your profile with the URL
- Twitter/X: Share your work
- Dev.to: Write about your portfolio
- GitHub: Pin the repository

---

**Created by Ritesh Kumar** | From Giridih to the World 🌍
