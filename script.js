document.addEventListener('DOMContentLoaded', function() {
    // Preloader
    const preloader = document.querySelector('.preloader');
    window.addEventListener('load', function() {
        preloader.style.display = 'none';
    });

    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileMenuClose = document.querySelector('.mobile-menu-close');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    mobileMenuBtn.addEventListener('click', function() {
        mobileMenu.classList.add('active');
    });
    
    mobileMenuClose.addEventListener('click', function() {
        mobileMenu.classList.remove('active');
    });
    
    // Close mobile menu when clicking on a link
    const mobileMenuLinks = document.querySelectorAll('.mobile-menu a');
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.remove('active');
        });
    });

    // Header scroll effect
    const header = document.querySelector('.header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Back to top button
    const backToTop = document.querySelector('.back-to-top');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTop.classList.add('active');
        } else {
            backToTop.classList.remove('active');
        }
    });

    // Smooth scrolling for all links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Stats counter animation
    const statNumbers = document.querySelectorAll('.stat-number');
    if (statNumbers.length > 0) {
        statNumbers.forEach(stat => {
            const target = +stat.getAttribute('data-count');
            const count = +stat.innerText;
            const increment = target / 100;
            
            if (count < target) {
                stat.innerText = Math.ceil(count + increment);
                setTimeout(updateStat, 10);
            } else {
                stat.innerText = target;
            }
            
            function updateStat() {
                const current = +stat.innerText;
                if (current < target) {
                    stat.innerText = Math.ceil(current + increment);
                    setTimeout(updateStat, 10);
                } else {
                    stat.innerText = target;
                }
            }
        });
    }

    // Testimonial slider
    const sliderTrack = document.querySelector('.slider-track');
    const sliderItems = document.querySelectorAll('.slider-item');
    const prevBtn = document.querySelector('.slider-prev');
    const nextBtn = document.querySelector('.slider-next');
    
    if (sliderTrack && sliderItems.length > 0) {
        let currentIndex = 0;
        const itemWidth = sliderItems[0].clientWidth;
        const totalItems = sliderItems.length;
        
        function updateSlider() {
            sliderTrack.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
        }
        
        nextBtn.addEventListener('click', function() {
            currentIndex = (currentIndex + 1) % totalItems;
            updateSlider();
        });
        
        prevBtn.addEventListener('click', function() {
            currentIndex = (currentIndex - 1 + totalItems) % totalItems;
            updateSlider();
        });
        
        // Auto slide
        setInterval(function() {
            currentIndex = (currentIndex + 1) % totalItems;
            updateSlider();
        }, 5000);
    }

    // Form submission
    const enquiryForm = document.getElementById('enquiryForm');
    if (enquiryForm) {
        enquiryForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your enquiry. We will contact you soon.');
            this.reset();
        });
    }

    // GSAP Animations
    gsap.registerPlugin(ScrollTrigger);
    
    // Animate elements with gsap-fade-in class
    gsap.utils.toArray('.gsap-fade-in').forEach(element => {
        gsap.from(element, {
            opacity: 0,
            y: 50,
            duration: 1,
            scrollTrigger: {
                trigger: element,
                start: 'top 80%',
                toggleActions: 'play none none none'
            }
        });
    });
    
    // Animate elements with gsap-slide-up class
    gsap.utils.toArray('.gsap-slide-up').forEach(element => {
        gsap.from(element, {
            opacity: 0,
            y: 50,
            duration: 1,
            scrollTrigger: {
                trigger: element,
                start: 'top 80%',
                toggleActions: 'play none none none'
            }
        });
    });
    
    // Animate elements with gsap-slide-left class
    gsap.utils.toArray('.gsap-slide-left').forEach(element => {
        gsap.from(element, {
            opacity: 0,
            x: -50,
            duration: 1,
            scrollTrigger: {
                trigger: element,
                start: 'top 80%',
                toggleActions: 'play none none none'
            }
        });
    });
    
    // Animate elements with gsap-slide-right class
    gsap.utils.toArray('.gsap-slide-right').forEach(element => {
        gsap.from(element, {
            opacity: 0,
            x: 50,
            duration: 1,
            scrollTrigger: {
                trigger: element,
                start: 'top 80%',
                toggleActions: 'play none none none'
            }
        });
    });
    
    // Hero section animation
    gsap.from('.hero-content', {
        opacity: 0,
        x: -50,
        duration: 1,
        delay: 0.5
    });
    
    gsap.from('.hero-image', {
        opacity: 0,
        x: 50,
        duration: 1,
        delay: 0.5
    });
    
    // Section header animations
    gsap.utils.toArray('.section-header').forEach(header => {
        gsap.from(header.querySelector('.section-title'), {
            opacity: 0,
            y: 30,
            duration: 0.8,
            scrollTrigger: {
                trigger: header,
                start: 'top 80%',
                toggleActions: 'play none none none'
            }
        });
        
        gsap.from(header.querySelector('.section-subtitle'), {
            opacity: 0,
            y: 30,
            duration: 0.8,
            delay: 0.2,
            scrollTrigger: {
                trigger: header,
                start: 'top 80%',
                toggleActions: 'play none none none'
            }
        });
    });
    
    // Course items animation
    gsap.utils.toArray('.course-item').forEach((item, i) => {
        gsap.from(item, {
            opacity: 0,
            y: 50,
            duration: 0.5,
            delay: i * 0.1,
            scrollTrigger: {
                trigger: item,
                start: 'top 80%',
                toggleActions: 'play none none none'
            }
        });
    });
    
    // Faculty items animation
    gsap.utils.toArray('.faculty-item').forEach((item, i) => {
        gsap.from(item, {
            opacity: 0,
            y: 50,
            duration: 0.5,
            delay: i * 0.1,
            scrollTrigger: {
                trigger: item,
                start: 'top 80%',
                toggleActions: 'play none none none'
            }
        });
    });
    
    // Testimonial items animation
    gsap.utils.toArray('.testimonial-item').forEach((item, i) => {
        gsap.from(item, {
            opacity: 0,
            y: 50,
            duration: 0.5,
            delay: i * 0.1,
            scrollTrigger: {
                trigger: item,
                start: 'top 80%',
                toggleActions: 'play none none none'
            }
        });
    });
    
    // Gallery items animation
    gsap.utils.toArray('.gallery-item').forEach((item, i) => {
        gsap.from(item, {
            opacity: 0,
            scale: 0.8,
            duration: 0.5,
            delay: i * 0.1,
            scrollTrigger: {
                trigger: item,
                start: 'top 80%',
                toggleActions: 'play none none none'
            }
        });
    });
});