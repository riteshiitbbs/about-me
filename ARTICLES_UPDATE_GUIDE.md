# Dynamic Articles Update Guide

This portfolio website supports dynamic article updates that automatically refresh daily at 12:00 AM UTC.

## How It Works

The website loads articles from `articles.json` which can be automatically updated via GitHub Actions.

### Files Involved

1. **articles.json** - Contains the latest articles data
2. **fetch-articles.js** - Script that updates articles.json
3. **.github/workflows/update-articles.yml** - GitHub Actions workflow

## Setup Instructions

### 1. Enable GitHub Actions (After Deploying to GitHub)

Once you push this repository to GitHub:

1. Go to your repository settings
2. Navigate to **Actions** → **General**
3. Ensure "Allow all actions and reusable workflows" is enabled
4. The workflow will automatically run daily at 12:00 AM UTC

### 2. Manual Trigger

You can manually trigger an update:

1. Go to **Actions** tab in your GitHub repository
2. Select "Update LinkedIn Articles" workflow
3. Click "Run workflow"

### 3. Update Articles Manually

To manually update articles, edit `articles.json`:

```json
[
  {
    "title": "Your Article Title",
    "date": "Month Year",
    "description": "Brief description of the article",
    "likes": 10,
    "url": "https://www.linkedin.com/in/riteshiitbbs/recent-activity/articles/"
  }
]
```

Then commit and push:

```bash
git add articles.json
git commit -m "Update articles"
git push
```

## Customization

### Change Update Frequency

Edit `.github/workflows/update-articles.yml`:

```yaml
on:
  schedule:
    # Daily at 12 AM UTC
    - cron: '0 0 * * *'

    # Every 6 hours
    # - cron: '0 */6 * * *'

    # Weekly on Monday at 12 AM
    # - cron: '0 0 * * 1'
```

### Scrape from LinkedIn (Advanced)

The current `fetch-articles.js` uses static data. To implement real scraping:

**Option 1: Use LinkedIn API** (Recommended but requires authentication)
- Register for LinkedIn Developer API
- Use official SDK
- Update fetch-articles.js with API calls

**Option 2: Use a Third-Party Service**
- Services like Apify, Bright Data, or ScrapingBee
- More reliable than direct scraping
- Requires subscription

**Option 3: RSS Feed** (If available)
- Some LinkedIn profiles have RSS feeds
- Parse the feed in fetch-articles.js

### Example with Puppeteer (Advanced)

```javascript
const puppeteer = require('puppeteer');

async function scrapeLinkedIn() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto('https://www.linkedin.com/in/riteshiitbbs/recent-activity/articles/');

  // Note: LinkedIn requires authentication for most content
  // This is a simplified example

  const articles = await page.evaluate(() => {
    // Extract article data from page
    return [...document.querySelectorAll('.article-item')].map(item => ({
      title: item.querySelector('.title')?.textContent,
      date: item.querySelector('.date')?.textContent,
      // ... more fields
    }));
  });

  await browser.close();
  return articles;
}
```

## Troubleshooting

### Articles Not Updating

1. Check GitHub Actions logs in the Actions tab
2. Ensure articles.json is valid JSON
3. Verify the workflow has write permissions

### Local Testing

Test the dynamic loading locally:

```bash
# Start local server
python3 -m http.server 8000

# Visit http://localhost:8000
# Check browser console for errors
```

### CORS Issues

If deploying to a custom domain, ensure:
- articles.json is served from the same domain
- Proper CORS headers are set

## Best Practices

1. **Keep articles.json small** - Only store the 6-10 most recent articles
2. **Cache responses** - The script caches article data
3. **Fallback content** - HTML includes default articles if JSON fails
4. **Monitor workflow** - Check GitHub Actions logs regularly

## Alternative: Serverless Function

For more advanced updates, consider using:

- **Netlify Functions**
- **Vercel Serverless Functions**
- **AWS Lambda**

These can fetch data on-demand without cron jobs.

## Support

For issues or questions:
- Check GitHub Actions logs
- Review fetch-articles.js console output
- Test articles.json validity at jsonlint.com
