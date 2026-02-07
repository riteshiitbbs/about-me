/**
 * Fetch Articles from LinkedIn Profile
 *
 * This script fetches recent articles from a LinkedIn profile and saves them to articles.json.
 * It's designed to run via GitHub Actions daily at 12 AM.
 *
 * Note: LinkedIn scraping has limitations. For production use, consider using:
 * - LinkedIn API (requires authentication)
 * - RSS feed (if available)
 * - Manual updates via articles.json
 */

const fs = require('fs');

// For now, we'll use a static list that you can manually update
// LinkedIn doesn't provide easy public API access without authentication
const articles = [
    {
        title: "What If AI Learned the World, Not Just Words?",
        date: "January 2026",
        description: "Exploring the future of Gen AI and how it could understand context beyond language.",
        likes: 3,
        url: "https://www.linkedin.com/in/riteshiitbbs/recent-activity/articles/"
    },
    {
        title: "Choosing the Right State Management Tool",
        date: "January 2025",
        description: "Context API, Redux, or Zustand - a comprehensive guide to making the right choice for your React app.",
        likes: 4,
        url: "https://www.linkedin.com/in/riteshiitbbs/recent-activity/articles/"
    },
    {
        title: "Simplifying IAM Systems: A Guide for UI Developers",
        date: "June 2023",
        description: "Demystifying Identity and Access Management for frontend developers.",
        likes: 5,
        url: "https://www.linkedin.com/in/riteshiitbbs/recent-activity/articles/"
    },
    {
        title: "Step-by-Step Guide: Setting up a React Redux UI Project",
        date: "April 2023",
        description: "A comprehensive walkthrough for setting up a production-ready React Redux project from scratch.",
        likes: 8,
        url: "https://www.linkedin.com/in/riteshiitbbs/recent-activity/articles/"
    },
    {
        title: "Secure Your React UI with ABAC",
        date: "March 2023",
        description: "Implementing Attribute-Based Access Control in React applications for enterprise-grade security.",
        likes: 7,
        url: "https://www.linkedin.com/in/riteshiitbbs/recent-activity/articles/"
    },
    {
        title: "Frontend Development: A Look into the Exciting Future",
        date: "March 2023",
        description: "Exploring emerging trends and technologies shaping the future of web development.",
        likes: 9,
        url: "https://www.linkedin.com/in/riteshiitbbs/recent-activity/articles/"
    }
];

// Write to articles.json
fs.writeFileSync('articles.json', JSON.stringify(articles, null, 2));
console.log('Articles updated successfully!');
console.log(`Total articles: ${articles.length}`);
