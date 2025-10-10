/**
 * Custom JavaScript for Shafira's Portfolio
 */

document.addEventListener('DOMContentLoaded', function() {
    // Typed.js effect for the masthead subheading
    if (document.querySelector('.masthead-subheading')) {
        const typed = new Typed('.masthead-subheading', {
            strings: [
                'Artificial Intelligence Specialist',
                'Web Developer',
                'Software Engineer',
                'Machine Learning Enthusiast'
            ],
            typeSpeed: 50,
            backSpeed: 30,
            backDelay: 2000,
            startDelay: 1000,
            loop: true,
            showCursor: false
        });
    }
    
    // Portfolio filtering
    const filterButtons = document.querySelectorAll('.portfolio-filter .btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Get filter value
            const filterValue = this.getAttribute('data-filter');
            
            // Filter items
            portfolioItems.forEach(item => {
                if (filterValue === '*') {
                    // Show all items
                    item.style.display = 'block';
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'translateY(0)';
                    }, 100);
                } else if (item.classList.contains(filterValue.substring(1))) {
                    // Show items that match the filter
                    item.style.display = 'block';
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'translateY(0)';
                    }, 100);
                } else {
                    // Hide items that don't match the filter
                    item.style.opacity = '0';
                    item.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
    
    // Directly animate skill badges without using Intersection Observer
    const skillBadges = document.querySelectorAll('.skill-badge');
    skillBadges.forEach((badge, index) => {
        // Set initial styles
        badge.style.opacity = '0';
        badge.style.transform = 'translateY(20px)';
        badge.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';
        
        // Animate with delay
        setTimeout(() => {
            badge.style.opacity = '1';
            badge.style.transform = 'translateY(0)';
        }, 100 * index);
    });
    
    // Animate experience timeline items
    const experienceObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                experienceObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    
    // Set up experience items for animation
    const experienceItems = document.querySelectorAll('.experience-content');
    experienceItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        experienceObserver.observe(item);
    });
    
    // Add parallax effect to masthead
    window.addEventListener('scroll', function() {
        const masthead = document.querySelector('.masthead');
        if (masthead) {
            const scrollPosition = window.pageYOffset;
            masthead.style.backgroundPosition = `center ${scrollPosition * 0.5}px`;
        }
        
        // Toggle scroll-to-top button visibility
        const scrollToTopButton = document.querySelector('.scroll-to-top');
        if (scrollToTopButton) {
            if (window.pageYOffset > 100) {
                scrollToTopButton.style.display = 'flex';
                scrollToTopButton.style.alignItems = 'center';
                scrollToTopButton.style.justifyContent = 'center';
            } else {
                scrollToTopButton.style.display = 'none';
            }
        }
    });
    
    // Add hover effect to portfolio items
    const portfolioItemWrappers = document.querySelectorAll('.portfolio-item-wrapper');
    portfolioItemWrappers.forEach(item => {
        item.addEventListener('mouseenter', function() {
            const caption = this.querySelector('.portfolio-item-caption');
            if (caption) {
                caption.style.opacity = '1';
            }
        });
        
        item.addEventListener('mouseleave', function() {
            const caption = this.querySelector('.portfolio-item-caption');
            if (caption) {
                caption.style.opacity = '0';
            }
        });
    });
    
    // Animate on scroll for portfolio items
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const portfolioObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    portfolioItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        portfolioObserver.observe(item);
    });
    
    // Add animation to contact cards
    const contactCards = document.querySelectorAll('.card');
    contactCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';
        
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 200 * index);
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            if (this.getAttribute('href') !== '#') {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 72, // Adjust for navbar height
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});
