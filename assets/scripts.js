 // Mobile menu toggle
        document.getElementById('mobile-menu-button').addEventListener('click', function() {
            const menu = document.getElementById('mobile-menu');
            menu.classList.toggle('hidden');
        });

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                    
                    // Close mobile menu if open
                    const mobileMenu = document.getElementById('mobile-menu');
                    if (!mobileMenu.classList.contains('hidden')) {
                        mobileMenu.classList.add('hidden');
                    }
                }
            });
        });

        // CV Download functionality
        document.getElementById('downloadCv').addEventListener('click', function() {
            // In a real scenario, this would link to an actual PDF file
            // For demo purposes, we'll simulate a download
            const link = document.createElement('a');
            link.href = '/Professional_CallCenter_Resume.docx'; // Replace with actual CV URL
            link.download = 'Professional_CallCenter_Resume.docx';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            
            // Show a notification
            alert('Thank you for your interest! The CV download will begin shortly.');
        });

        // Form submission
        // const contactForm = document.querySelector('form');
        if (contactForm) {
            contactForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                // Get form values
                const name = document.getElementById('name').value;
                const email = document.getElementById('email').value;
                const service = document.getElementById('service').value;
                const message = document.getElementById('message').value;
                
                // Validate form
                if (!name || !email || !message) {
                    alert('Please fill in all required fields.');
                    return;
                }
                
                // In a real scenario, you would send this data to a server
                console.log('Form submitted:', { name, email, service, message });
                
                // Show success message
                alert('Thank you for your message! I will get back to you soon.');
                
                // Reset form
                contactForm.reset();
            });
        }

        // Animation on scroll
        const fadeElements = document.querySelectorAll('.fade-in');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = 1;
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.1 });
        
        fadeElements.forEach(element => {
            observer.observe(element);
        });

        //CV
        