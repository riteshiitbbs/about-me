// ===========================
// Smooth Scroll & Navigation
// ===========================
document.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('.nav');
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Scroll effect for navigation
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        // Add shadow when scrolled
        if (currentScroll > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }

        lastScroll = currentScroll;
    });

    // Mobile menu toggle
    mobileMenuToggle.addEventListener('click', () => {
        mobileMenuToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    });

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenuToggle.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // Smooth scroll for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ===========================
    // Intersection Observer for Fade-in Animations
    // ===========================
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Add staggered delay for elements in the same section
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, index * 100);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all fade-in elements
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => observer.observe(el));

    // ===========================
    // Active Navigation Link Highlighting
    // ===========================
    const sections = document.querySelectorAll('.section, .hero');
    const navObserverOptions = {
        threshold: 0.3,
        rootMargin: '-100px 0px -66% 0px'
    };

    const navObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const sectionId = entry.target.getAttribute('id');
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, navObserverOptions);

    sections.forEach(section => {
        if (section.id) {
            navObserver.observe(section);
        }
    });

    // ===========================
    // Parallax Effect for Hero Background
    // ===========================
    const heroOrbs = document.querySelectorAll('.gradient-orb');

    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const heroHeight = document.querySelector('.hero').offsetHeight;

        if (scrolled < heroHeight) {
            heroOrbs.forEach((orb, index) => {
                const speed = 0.3 + (index * 0.1);
                orb.style.transform = `translateY(${scrolled * speed}px)`;
            });
        }
    });

    // ===========================
    // Expertise Cards Hover Effect
    // ===========================
    const expertiseCards = document.querySelectorAll('.expertise-card');

    expertiseCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s ease';
        });

        card.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;

            this.style.transform = `translateY(-10px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) rotateX(0) rotateY(0)';
        });
    });

    // ===========================
    // Article Cards Hover Effect
    // ===========================
    const articleCards = document.querySelectorAll('.article-card');

    articleCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s ease';
        });

        card.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = (y - centerY) / 30;
            const rotateY = (centerX - x) / 30;

            this.style.transform = `translateY(-10px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) rotateX(0) rotateY(0)';
        });
    });

    // ===========================
    // Counter Animation for Stats
    // ===========================
    const statNumbers = document.querySelectorAll('.stat-number');
    const statObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const text = target.textContent;
                const hasPlus = text.includes('+');
                const number = parseInt(text.replace(/\D/g, ''));

                animateCounter(target, 0, number, 2000, hasPlus);
                statObserver.unobserve(target);
            }
        });
    }, { threshold: 0.5 });

    statNumbers.forEach(stat => statObserver.observe(stat));

    function animateCounter(element, start, end, duration, hasPlus = false) {
        const range = end - start;
        const increment = range / (duration / 16);
        let current = start;

        const timer = setInterval(() => {
            current += increment;
            if (current >= end) {
                current = end;
                clearInterval(timer);
            }

            const suffix = hasPlus ? '+' : '';
            if (end >= 1000) {
                element.textContent = Math.floor(current / 1000) + 'K' + suffix;
            } else {
                element.textContent = Math.floor(current) + suffix;
            }
        }, 16);
    }

    // ===========================
    // Cursor Trail Effect (Optional - can be heavy on performance)
    // ===========================
    let cursorTrailEnabled = window.innerWidth > 768; // Only on desktop

    if (cursorTrailEnabled) {
        const coords = { x: 0, y: 0 };
        const circles = [];
        const colors = ['#667eea', '#764ba2', '#f093fb', '#4facfe'];

        // Create circles
        for (let i = 0; i < 12; i++) {
            const circle = document.createElement('div');
            circle.className = 'cursor-circle';
            circle.style.cssText = `
                position: fixed;
                width: 20px;
                height: 20px;
                border-radius: 50%;
                background: ${colors[i % colors.length]};
                opacity: 0;
                pointer-events: none;
                transition: opacity 0.3s ease;
                z-index: 9999;
                mix-blend-mode: screen;
            `;
            document.body.appendChild(circle);
            circles.push(circle);
        }

        // Update coordinates
        window.addEventListener('mousemove', (e) => {
            coords.x = e.clientX;
            coords.y = e.clientY;
        });

        // Animate circles
        function animateCircles() {
            let x = coords.x;
            let y = coords.y;

            circles.forEach((circle, index) => {
                circle.style.left = x - 10 + 'px';
                circle.style.top = y - 10 + 'px';
                circle.style.transform = `scale(${(circles.length - index) / circles.length})`;
                circle.style.opacity = (circles.length - index) / circles.length * 0.5;

                const nextCircle = circles[index + 1] || circles[0];
                x += (parseInt(nextCircle.style.left || 0) - x) * 0.3;
                y += (parseInt(nextCircle.style.top || 0) - y) * 0.3;
            });

            requestAnimationFrame(animateCircles);
        }

        animateCircles();
    }

    // ===========================
    // Load Articles Dynamically
    // ===========================
    async function loadArticles() {
        try {
            const response = await fetch('articles.json');
            const articles = await response.json();
            const articlesGrid = document.getElementById('articles-grid');

            if (articles && articles.length > 0) {
                articlesGrid.innerHTML = articles.map(article => `
                    <a href="${article.url}" target="_blank" rel="noopener noreferrer" class="article-card fade-in">
                        <div class="article-date">${article.date}</div>
                        <h3>${article.title}</h3>
                        <p>${article.description}</p>
                        <div class="article-meta">
                            <span class="likes">❤️ ${article.likes} likes</span>
                        </div>
                    </a>
                `).join('');

                // Re-observe fade-in elements
                const newFadeElements = articlesGrid.querySelectorAll('.fade-in');
                newFadeElements.forEach(el => observer.observe(el));
            }
        } catch (error) {
            console.log('Using default articles');
            // Default articles are already in HTML
        }
    }

    // Load articles on page load
    loadArticles();

    // ===========================
    // Email Obfuscation (Update with real email)
    // ===========================
    const emailLinks = document.querySelectorAll('a[href^="mailto:"]');
    emailLinks.forEach(link => {
        // Replace with actual email when deploying
        // const email = 'your.email@example.com';
        // link.setAttribute('href', `mailto:${email}`);
    });

    // ===========================
    // Performance: Reduce animations on mobile
    // ===========================
    const isMobile = window.innerWidth < 768;

    if (isMobile) {
        // Disable heavy animations on mobile
        document.querySelectorAll('.gradient-orb').forEach(orb => {
            orb.style.animation = 'none';
        });
    }

    // ===========================
    // Page Load Animation
    // ===========================
    window.addEventListener('load', () => {
        document.body.style.opacity = '0';
        setTimeout(() => {
            document.body.style.transition = 'opacity 0.5s ease';
            document.body.style.opacity = '1';
        }, 100);
    });

    // ===========================
    // Keyboard Navigation
    // ===========================
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navMenu.classList.contains('active')) {
            mobileMenuToggle.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    // ===========================
    // Print Optimization
    // ===========================
    window.addEventListener('beforeprint', () => {
        document.querySelectorAll('.fade-in').forEach(el => {
            el.classList.add('visible');
        });
    });
});

// ===========================
// Utility: Debounce Function
// ===========================
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// ===========================
// Handle window resize
// ===========================
const handleResize = debounce(() => {
    const navMenu = document.querySelector('.nav-menu');
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');

    if (window.innerWidth > 768) {
        navMenu.classList.remove('active');
        mobileMenuToggle.classList.remove('active');
        document.body.style.overflow = '';
    }
}, 250);

window.addEventListener('resize', handleResize);
