/**
 * MD Fitness - Production Grade Web Application Script
 * Full SPA Navigation, Certified Trainers, Calorie & Macro Nutrition Calculator,
 * Membership Enrollment Engine, Facilities Gallery, Carousel, and Staff Console.
 */

document.addEventListener('DOMContentLoaded', function () {
    'use strict';

    // ========================================================
    // 1. DATA DEFINITIONS (Plans, Gallery, Facilities)
    // ========================================================

    const PLANS_DATA = {
        '1-month-starter': {
            name: '1 Month Starter Plan',
            price: 1499,
            duration: '1 Month',
            features: 'Gym floor + Cardio + Lockers'
        },
        '3-month-transformation': {
            name: '3-Month Transformation Plan',
            price: 3999,
            duration: '3 Months',
            features: 'Gym + Cardio + Diet Chart + Steam'
        },
        '1-year-vip': {
            name: '1-Year Elite VIP Membership',
            price: 11999,
            duration: '1 Year',
            features: 'VIP All-Access + 5 Free PT Sessions + Steam + Gym Bag'
        }
    };

    const GALLERY_ITEMS = [
        {
            category: 'strength',
            title: 'Olympic Strength Floor',
            desc: 'Squat racks, Olympic platforms, dumbbells up to 50kg, and plate-loaded leverage machines.',
            image: 'gym-strength.jpg'
        },
        {
            category: 'cardio',
            title: 'High-Tech Cardio Arena',
            desc: 'Commercial treadmills, cross trainers, stair masters, and spin bikes with live heart rate sensors.',
            image: 'gym-cardio.jpg'
        },
        {
            category: 'combat',
            title: 'Boxing & Combat Zone',
            desc: 'Heavy punch bags, speed bags, kick shields, and padded floor for combat athletics.',
            image: 'gym-boxing.jpg'
        },
        {
            category: 'combat',
            title: 'Functional Conditioning',
            desc: 'Kettlebells, battle ropes, plyometric boxes, and resistance bands for athletic stamina.',
            image: 'gym-functional.jpg'
        },
        {
            category: 'amenities',
            title: 'Yoga & Mobility Studio',
            desc: 'Quiet wooden studio for flexibility, core Pilates, and guided breathwork.',
            image: 'gym-yoga.jpg'
        },
        {
            category: 'amenities',
            title: 'Steam & Shower Suites',
            desc: 'Clean lockers, hot water showers, and detoxifying steam baths for post-workout recovery.',
            image: 'gym-amenities.jpg'
        },
        {
            category: 'strength',
            title: 'VIP Personal Training Deck',
            desc: 'Dedicated private coaching space with specialized assessment equipment and mirrors.',
            image: 'gym-about.jpg'
        },
        {
            category: 'strength',
            title: 'Free Weights & Dumbbells Area',
            desc: 'Solid rubber hex dumbbells, adjustable incline/flat benches and heavy-duty steel racks.',
            image: 'floor.jpg'
        },
        {
            category: 'strength',
            title: 'Heavy Barbell Deck',
            desc: 'Deadlift platforms, rubber bumper plates, and competition-spec power bars.',
            image: 'strength.jpg'
        },
        {
            category: 'cardio',
            title: 'Motorized Cardio Deck',
            desc: 'Commercial treadmills with high shock absorption and automated incline settings.',
            image: 'CardioEq.jpg'
        },
        {
            category: 'combat',
            title: 'Combat Training Arena',
            desc: 'Focus pads, agility ladders, and kickboxing bags.',
            image: 'Boxer.jpg'
        },
        {
            category: 'combat',
            title: 'Athletic Conditioning Area',
            desc: 'Tire flips, battle ropes, and high-intensity agility gear.',
            image: 'Cond.jpg'
        },
        {
            category: 'amenities',
            title: 'Flexibility & Stretch Studio',
            desc: 'Foam rollers, yoga mats, and recovery bands.',
            image: 'Yoga1.jpeg'
        },
        {
            category: 'amenities',
            title: 'Locker & Hygiene Facility',
            desc: 'Individual lockers, clean shower stalls, and dressing mirrors.',
            image: 'amenities.jpeg'
        },
        {
            category: 'strength',
            title: 'MD Fitness Reception & Lounge',
            desc: 'Welcome desk, fitness consultation corner, and hydration lounge.',
            image: 'abt.jpg'
        },
        {
            category: 'strength',
            title: 'Coaching Consultation Deck',
            desc: 'Private goal-setting desk and body composition analysis.',
            image: 'Prem.jpeg'
        }
    ];

    // ========================================================
    // 2. DOM ELEMENT REFERENCES
    // ========================================================

    const pageSections = document.querySelectorAll('.page-section');
    const allNavButtons = document.querySelectorAll('.nav-button');
    const desktopNavLinks = document.querySelectorAll('#main-nav .nav-link');
    const mobileNavLinks = document.querySelectorAll('#mobile-menu .nav-link-mobile');
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    const scrollToTopBtn = document.getElementById('scrollToTop');
    const toastContainer = document.getElementById('toast-container');

    // Calorie Calculator Form Elements
    const fitnessCalorieForm = document.getElementById('fitnessCalorieForm');
    const resTargetCalories = document.getElementById('resTargetCalories');
    const resBmr = document.getElementById('resBmr');
    const resTdee = document.getElementById('resTdee');
    const resProteinGrams = document.getElementById('resProteinGrams');
    const resProteinKcal = document.getElementById('resProteinKcal');
    const resCarbsGrams = document.getElementById('resCarbsGrams');
    const resCarbsKcal = document.getElementById('resCarbsKcal');
    const resFatsGrams = document.getElementById('resFatsGrams');
    const resFatsKcal = document.getElementById('resFatsKcal');
    const resWater = document.getElementById('resWater');

    // Enrollment Modal Elements
    const enrollModal = document.getElementById('enrollModal');
    const closeEnrollBtn = document.getElementById('closeEnrollBtn');
    const enrollForm = document.getElementById('enrollForm');
    const enrollPlanSelect = document.getElementById('enrollPlanSelect');
    const enrollTotalAmount = document.getElementById('enrollTotalAmount');
    const enrollStartDate = document.getElementById('enrollStartDate');

    // Auth Elements
    const authBtn = document.getElementById('authBtn');
    const mobileAuthBtn = document.getElementById('mobileAuthBtn');
    const authBtnText = document.getElementById('authBtnText');
    const mobileAuthText = document.getElementById('mobileAuthText');
    const authModal = document.getElementById('authModal');
    const closeAuthBtn = document.getElementById('closeAuth');
    const authForm = document.getElementById('authForm');
    const authTabLogin = document.getElementById('authTabLogin');
    const authTabRegister = document.getElementById('authTabRegister');
    const authNameField = document.getElementById('authNameField');
    const authSubmitBtn = document.getElementById('authSubmit');
    const authModalTitle = document.getElementById('authModalTitle');

    // Review Modal Elements
    const openReviewModalBtn = document.getElementById('openReviewModalBtn');
    const reviewModal = document.getElementById('reviewModal');
    const closeReviewBtn = document.getElementById('closeReview');
    const reviewForm = document.getElementById('reviewForm');
    const starRatingContainer = document.getElementById('starRatingContainer');
    const revRatingInput = document.getElementById('rev-rating');

    // Quick View Modal
    const quickViewModal = document.getElementById('quickViewModal');
    const quickViewContent = document.getElementById('quickViewContent');

    // Legal Modal
    const legalModal = document.getElementById('legalModal');
    const closeLegalModalBtn = document.getElementById('closeLegalModal');
    const legalModalTitle = document.getElementById('legalModalTitle');
    const legalModalBody = document.getElementById('legalModalBody');

    // Gallery Elements
    const galleryGrid = document.getElementById('galleryGrid');
    const galleryFilterContainer = document.getElementById('galleryFilterContainer');

    // Carousel Elements
    const testimonialSlides = document.querySelectorAll('.testimonial-slide');
    const prevTestimonialBtn = document.getElementById('prevTestimonial');
    const nextTestimonialBtn = document.getElementById('nextTestimonial');
    const testimonialIndicators = document.querySelectorAll('.indicator');
    const carouselContainer = document.getElementById('testimonialCarousel');

    // Contact & Newsletter Forms
    const contactForm = document.getElementById('contactForm');
    const newsletterForm = document.getElementById('newsletterForm');

    // Staff Portal Elements
    const adminLoginForm = document.getElementById('adminLoginForm');
    const adminLoginFormContainer = document.getElementById('adminLoginFormContainer');
    const responseData = document.getElementById('responseData');
    const logoutButton = document.getElementById('logoutButton');
    const clearAllDataBtn = document.getElementById('clearAllDataBtn');
    const toggleAdminPass = document.getElementById('toggleAdminPass');
    const adminUsernameInput = document.getElementById('adminUsername');
    const adminPasswordInput = document.getElementById('adminPassword');
    const adminMetricsSummary = document.getElementById('adminMetricsSummary');
    const adminTabContent = document.getElementById('adminTabContent');
    const adminTabsContainer = document.getElementById('adminTabsContainer');

    // ========================================================
    // 3. TOAST NOTIFICATION SYSTEM
    // ========================================================

    function showToast(message, type = 'info', duration = 3500) {
        if (!toastContainer) return;

        const toast = document.createElement('div');
        toast.className = `toast toast-${type}`;

        let icon = 'fa-info-circle';
        if (type === 'success') icon = 'fa-circle-check';
        if (type === 'error') icon = 'fa-circle-exclamation';

        toast.innerHTML = `
            <i class="fas ${icon} text-lg"></i>
            <span class="flex-1">${message}</span>
            <button type="button" class="text-white/60 hover:text-white ml-2 text-sm" aria-label="Close">✕</button>
        `;

        const closeBtn = toast.querySelector('button');
        closeBtn.addEventListener('click', () => removeToast(toast));

        toastContainer.appendChild(toast);

        const autoTimer = setTimeout(() => {
            removeToast(toast);
        }, duration);

        function removeToast(el) {
            clearTimeout(autoTimer);
            el.style.opacity = '0';
            el.style.transform = 'translateX(100px)';
            setTimeout(() => {
                if (el.parentNode) el.parentNode.removeChild(el);
            }, 300);
        }
    }

    // ========================================================
    // 4. SPA NAVIGATION & ROUTING
    // ========================================================

    let carouselInterval = null;
    let currentSlideIndex = 0;

    function showPage(pageId) {
        if (pageId !== 'testimonials' && carouselInterval) {
            clearInterval(carouselInterval);
            carouselInterval = null;
        }

        pageSections.forEach(section => {
            section.classList.add('hidden');
        });

        const targetSection = document.getElementById('page-' + pageId);
        if (targetSection) {
            targetSection.classList.remove('hidden');
        } else {
            const fallback = document.getElementById('page-home');
            if (fallback) fallback.classList.remove('hidden');
            pageId = 'home';
        }

        const targetHash = '#' + pageId;
        desktopNavLinks.forEach(link => {
            if (link.getAttribute('href') === targetHash) {
                link.classList.add('active-link');
                link.setAttribute('aria-current', 'page');
            } else {
                link.classList.remove('active-link');
                link.removeAttribute('aria-current');
            }
        });

        mobileNavLinks.forEach(link => {
            if (link.getAttribute('href') === targetHash) {
                link.classList.add('active-link');
            } else {
                link.classList.remove('active-link');
            }
        });

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });

        if (pageId === 'testimonials') {
            startCarousel();
        }

        if (pageId === 'responses') {
            checkAdminStatus();
        }

        if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
            closeMobileNav();
        }
    }

    function closeMobileNav() {
        if (!mobileMenu) return;
        mobileMenu.classList.add('hidden');
        const icon = mobileMenuButton.querySelector('i');
        if (icon) {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    }

    function toggleMobileNav() {
        if (!mobileMenu) return;
        const icon = mobileMenuButton.querySelector('i');
        const isHidden = mobileMenu.classList.contains('hidden');
        if (isHidden) {
            mobileMenu.classList.remove('hidden');
            if (icon) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            }
        } else {
            closeMobileNav();
        }
    }

    if (mobileMenuButton) {
        mobileMenuButton.addEventListener('click', toggleMobileNav);
    }

    allNavButtons.forEach(button => {
        button.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href && href.startsWith('#')) {
                e.preventDefault();
                const pageId = href.substring(1);
                showPage(pageId);
                history.pushState(null, null, href);
            }
        });
    });

    window.addEventListener('popstate', function () {
        const hash = window.location.hash.substring(1);
        showPage(hash || 'home');
    });

    // Scroll to Top
    let scrollDebounce;
    window.addEventListener('scroll', function () {
        if (scrollDebounce) window.cancelAnimationFrame(scrollDebounce);
        scrollDebounce = window.requestAnimationFrame(() => {
            if (window.pageYOffset > 350) {
                scrollToTopBtn.classList.add('visible');
            } else {
                scrollToTopBtn.classList.remove('visible');
            }
        });
    }, { passive: true });

    if (scrollToTopBtn) {
        scrollToTopBtn.addEventListener('click', function () {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // ========================================================
    // 5. CALORIE & MACRO CALCULATOR ENGINE
    // ========================================================

    function calculateNutrition() {
        if (!fitnessCalorieForm) return;

        const gender = document.querySelector('input[name="calcGender"]:checked')?.value || 'male';
        const age = parseInt(document.getElementById('calcAge').value, 10) || 25;
        const weight = parseFloat(document.getElementById('calcWeight').value) || 72;
        const height = parseFloat(document.getElementById('calcHeight').value) || 175;
        const activity = parseFloat(document.getElementById('calcActivity').value) || 1.55;
        const goal = document.getElementById('calcGoal').value || 'maintenance';

        // Mifflin-St Jeor Formula
        let bmr = 0;
        if (gender === 'male') {
            bmr = (10 * weight) + (6.25 * height) - (5 * age) + 5;
        } else {
            bmr = (10 * weight) + (6.25 * height) - (5 * age) - 161;
        }

        const tdee = bmr * activity;

        let targetCalories = tdee;
        if (goal === 'fat_loss_aggressive') {
            targetCalories = tdee - 500;
        } else if (goal === 'fat_loss_mild') {
            targetCalories = tdee - 250;
        } else if (goal === 'muscle_gain_lean') {
            targetCalories = tdee + 300;
        } else if (goal === 'bulking_heavy') {
            targetCalories = tdee + 500;
        }

        targetCalories = Math.max(1200, Math.round(targetCalories));

        // Macro Calculations
        // Protein: 30%, Carbs: 45%, Fats: 25%
        const proteinKcal = Math.round(targetCalories * 0.30);
        const carbsKcal = Math.round(targetCalories * 0.45);
        const fatsKcal = Math.round(targetCalories * 0.25);

        const proteinGrams = Math.round(proteinKcal / 4);
        const carbsGrams = Math.round(carbsKcal / 4);
        const fatsGrams = Math.round(fatsKcal / 9);

        // Water Requirement (approx 45-50 ml per kg body weight)
        const waterLiters = (weight * 0.045).toFixed(1);

        // Update UI
        if (resTargetCalories) resTargetCalories.innerHTML = `${targetCalories.toLocaleString('en-IN')} <span class="text-xl font-normal text-slate-300">kcal/day</span>`;
        if (resBmr) resBmr.textContent = `${Math.round(bmr).toLocaleString('en-IN')} kcal`;
        if (resTdee) resTdee.textContent = `${Math.round(tdee).toLocaleString('en-IN')} kcal`;

        if (resProteinGrams) resProteinGrams.textContent = `${proteinGrams}g`;
        if (resProteinKcal) resProteinKcal.textContent = `${proteinKcal} kcal`;

        if (resCarbsGrams) resCarbsGrams.textContent = `${carbsGrams}g`;
        if (resCarbsKcal) resCarbsKcal.textContent = `${carbsKcal} kcal`;

        if (resFatsGrams) resFatsGrams.textContent = `${fatsGrams}g`;
        if (resFatsKcal) resFatsKcal.textContent = `${fatsKcal} kcal`;

        if (resWater) resWater.textContent = `${waterLiters} - ${(parseFloat(waterLiters) + 0.5).toFixed(1)} Liters`;
    }

    if (fitnessCalorieForm) {
        fitnessCalorieForm.addEventListener('submit', function (e) {
            e.preventDefault();
            calculateNutrition();
            showToast('Nutrition profile calculated successfully!', 'success');
        });
    }

    // ========================================================
    // 6. TRAINER BOOKING INTERACTION
    // ========================================================

    window.bookTrainer = function (trainerName) {
        showPage('contact');
        setTimeout(() => {
            const msgEl = document.getElementById('message');
            const goalEl = document.getElementById('workoutGoal');
            if (msgEl) {
                msgEl.value = `I would like to book a 1-on-1 consultation session with ${trainerName}.`;
            }
            if (goalEl) {
                goalEl.value = 'Personal Training Inquiries';
            }
            const contactFormEl = document.getElementById('contactForm');
            if (contactFormEl) {
                contactFormEl.scrollIntoView({ behavior: 'smooth' });
            }
            showToast(`Selected ${trainerName}. Fill the form to confirm consultation.`, 'info');
        }, 300);
    };

    // ========================================================
    // 7. MEMBERSHIP ENROLLMENT ENGINE
    // ========================================================

    window.openEnrollModal = function (planId = '3-month-transformation') {
        if (!enrollModal) return;

        if (enrollPlanSelect && PLANS_DATA[planId]) {
            enrollPlanSelect.value = planId;
            updateEnrollTotal();
        }

        // Default start date to tomorrow
        if (enrollStartDate) {
            const tomorrow = new Date();
            tomorrow.setDate(tomorrow.getDate() + 1);
            enrollStartDate.value = tomorrow.toISOString().split('T')[0];
        }

        // Pre-fill user if logged in
        const user = getCurrentUser();
        if (user) {
            const nameInp = document.getElementById('enrollName');
            const emailInp = document.getElementById('enrollEmail');
            if (nameInp && user.name) nameInp.value = user.name;
            if (emailInp && user.email) emailInp.value = user.email;
        }

        enrollModal.showModal();
    };

    function updateEnrollTotal() {
        if (!enrollPlanSelect || !enrollTotalAmount) return;
        const selectedKey = enrollPlanSelect.value;
        const plan = PLANS_DATA[selectedKey] || PLANS_DATA['3-month-transformation'];
        enrollTotalAmount.textContent = `₹${plan.price.toLocaleString('en-IN')}`;
    }

    if (enrollPlanSelect) {
        enrollPlanSelect.addEventListener('change', updateEnrollTotal);
    }

    if (closeEnrollBtn && enrollModal) {
        closeEnrollBtn.addEventListener('click', () => enrollModal.close());
    }

    if (enrollForm) {
        enrollForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const planKey = enrollPlanSelect.value;
            const plan = PLANS_DATA[planKey];
            const name = document.getElementById('enrollName').value.trim();
            const phone = document.getElementById('enrollPhone').value.trim();
            const email = document.getElementById('enrollEmail').value.trim();
            const startDate = document.getElementById('enrollStartDate').value;
            const paymentMethod = document.getElementById('enrollPayment').value;

            if (!name || !phone || !email) {
                showToast('Please complete all contact details', 'error');
                return;
            }

            const enrollment = {
                enrollmentId: 'MDMEM-' + Math.floor(1000 + Math.random() * 9000),
                customerName: name,
                customerPhone: phone,
                customerEmail: email,
                planName: plan.name,
                planPrice: plan.price,
                startDate: startDate || new Date().toISOString().split('T')[0],
                paymentMethod: paymentMethod,
                timestamp: new Date().toISOString(),
                status: 'Confirmed'
            };

            try {
                const existing = JSON.parse(localStorage.getItem('mdFitness_enrollments')) || [];
                existing.unshift(enrollment);
                localStorage.setItem('mdFitness_enrollments', JSON.stringify(existing));
            } catch (err) {
                console.error('Failed saving enrollment:', err);
            }

            enrollModal.close();
            enrollForm.reset();
            showToast(`Membership booking confirmed for ${name}! Ref: ${enrollment.enrollmentId}`, 'success', 5000);
        });
    }

    // ========================================================
    // 8. FACILITIES GALLERY & LIGHTBOX
    // ========================================================

    function renderGallery(filter = 'all') {
        if (!galleryGrid) return;

        const filtered = GALLERY_ITEMS.filter(item => filter === 'all' || item.category === filter);

        let html = '';
        filtered.forEach((item, index) => {
            html += `
                <div class="gallery-card group" onclick="window.openGalleryLightbox(${index})">
                    <div class="h-64 overflow-hidden relative">
                        <img src="${item.image}" alt="${item.title}" class="w-full h-full object-cover">
                        <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-85"></div>
                        <div class="absolute bottom-4 left-4 right-4">
                            <span class="text-[10px] font-bold uppercase tracking-wider text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded border border-blue-500/20">
                                ${item.category.toUpperCase()}
                            </span>
                            <h4 class="text-lg font-bold text-white font-montserrat mt-1">${item.title}</h4>
                            <p class="text-xs text-slate-300 line-clamp-2 mt-0.5">${item.desc}</p>
                        </div>
                    </div>
                </div>
            `;
        });

        galleryGrid.innerHTML = html;
    }

    window.openGalleryLightbox = function (index) {
        const item = GALLERY_ITEMS[index];
        if (!item || !quickViewContent || !quickViewModal) return;

        quickViewContent.innerHTML = `
            <div class="flex items-center justify-between pb-3 mb-5 border-b border-slate-800">
                <span class="text-xs uppercase font-bold text-blue-400 bg-blue-500/10 px-2.5 py-0.5 rounded-full">MD Fitness Facility Tour</span>
                <button type="button" onclick="document.getElementById('quickViewModal').close()" class="text-slate-400 hover:text-white p-1">
                    <i class="fas fa-times text-lg"></i>
                </button>
            </div>

            <div class="space-y-4">
                <div class="h-72 sm:h-80 rounded-2xl overflow-hidden bg-slate-900">
                    <img src="${item.image}" alt="${item.title}" class="w-full h-full object-cover">
                </div>
                <div>
                    <h3 class="text-2xl font-bold text-white font-montserrat">${item.title}</h3>
                    <p class="text-sm text-slate-300 mt-2 leading-relaxed">${item.desc}</p>
                    <div class="pt-4 border-t border-slate-800/80 flex items-center justify-between mt-4">
                        <span class="text-xs text-slate-400">Open to all active members & day pass holders</span>
                        <a href="#contact" onclick="document.getElementById('quickViewModal').close();" class="btn-primary py-2 px-5 text-xs">
                            <i class="fas fa-ticket mr-1.5"></i>Get Free Day Pass
                        </a>
                    </div>
                </div>
            </div>
        `;

        quickViewModal.showModal();
    };

    if (galleryFilterContainer) {
        galleryFilterContainer.addEventListener('click', function (e) {
            const btn = e.target.closest('.pill-tab');
            if (!btn) return;

            galleryFilterContainer.querySelectorAll('.pill-tab').forEach(t => t.classList.remove('active'));
            btn.classList.add('active');

            renderGallery(btn.dataset.filter || 'all');
        });
    }

    // ========================================================
    // 9. MEMBER REVIEWS & TESTIMONIALS CAROUSEL
    // ========================================================

    function showSlide(index) {
        if (!testimonialSlides || testimonialSlides.length === 0) return;

        const count = testimonialSlides.length;
        if (index >= count) currentSlideIndex = 0;
        else if (index < 0) currentSlideIndex = count - 1;
        else currentSlideIndex = index;

        testimonialSlides.forEach((slide, idx) => {
            if (idx === currentSlideIndex) {
                slide.classList.add('active');
            } else {
                slide.classList.remove('active');
            }
        });

        if (testimonialIndicators) {
            testimonialIndicators.forEach((dot, idx) => {
                if (idx === currentSlideIndex) {
                    dot.classList.add('active');
                } else {
                    dot.classList.remove('active');
                }
            });
        }
    }

    function nextSlide() {
        showSlide(currentSlideIndex + 1);
    }

    function prevSlide() {
        showSlide(currentSlideIndex - 1);
    }

    function startCarousel() {
        if (carouselInterval) clearInterval(carouselInterval);
        carouselInterval = setInterval(nextSlide, 5000);
    }

    if (prevTestimonialBtn) prevTestimonialBtn.addEventListener('click', prevSlide);
    if (nextTestimonialBtn) nextTestimonialBtn.addEventListener('click', nextSlide);

    if (testimonialIndicators) {
        testimonialIndicators.forEach(dot => {
            dot.addEventListener('click', function () {
                const idx = parseInt(this.dataset.index, 10);
                showSlide(idx);
            });
        });
    }

    if (carouselContainer) {
        carouselContainer.addEventListener('mouseenter', () => {
            if (carouselInterval) clearInterval(carouselInterval);
        });
        carouselContainer.addEventListener('mouseleave', () => {
            startCarousel();
        });
    }

    // Review Modal
    if (openReviewModalBtn && reviewModal) {
        openReviewModalBtn.addEventListener('click', () => {
            const user = getCurrentUser();
            if (user && user.name) {
                const revName = document.getElementById('rev-name');
                if (revName) revName.value = user.name;
            }
            reviewModal.showModal();
        });
    }

    if (closeReviewBtn && reviewModal) {
        closeReviewBtn.addEventListener('click', () => reviewModal.close());
    }

    if (starRatingContainer) {
        const starBtns = starRatingContainer.querySelectorAll('.star-btn');
        starBtns.forEach(star => {
            star.addEventListener('click', function () {
                const val = parseInt(this.dataset.value, 10);
                if (revRatingInput) revRatingInput.value = val;
                starBtns.forEach((s, i) => {
                    if (i < val) {
                        s.classList.remove('far');
                        s.classList.add('fas');
                    } else {
                        s.classList.remove('fas');
                        s.classList.add('far');
                    }
                });
            });
        });
    }

    if (reviewForm) {
        reviewForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const name = document.getElementById('rev-name').value.trim();
            const device = document.getElementById('rev-device').value.trim();
            const rating = parseInt(document.getElementById('rev-rating').value, 10) || 5;
            const comment = document.getElementById('rev-comment').value.trim();

            if (!name || !device || !comment) {
                showToast('Please fill all review fields', 'error');
                return;
            }

            const newReview = {
                name,
                program: device,
                rating,
                comment,
                timestamp: new Date().toISOString()
            };

            try {
                const existing = JSON.parse(localStorage.getItem('mdFitness_reviews')) || [];
                existing.unshift(newReview);
                localStorage.setItem('mdFitness_reviews', JSON.stringify(existing));
            } catch (err) {
                console.error('Failed saving review:', err);
            }

            reviewModal.close();
            reviewForm.reset();
            showToast('Thank you! Your transformation review has been submitted.', 'success');
        });
    }

    // ========================================================
    // 10. FREE TRIAL DAY PASS & CONTACT FORM
    // ========================================================

    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const nameInp = document.getElementById('name');
            const emailInp = document.getElementById('email');
            const phoneInp = document.getElementById('phone');
            const goalInp = document.getElementById('workoutGoal');
            const slotInp = document.getElementById('timeSlot');
            const msgInp = document.getElementById('message');

            const nameErr = document.getElementById('nameError');
            const emailErr = document.getElementById('emailError');
            const phoneErr = document.getElementById('phoneError');
            const formSuccess = document.getElementById('formSuccess');

            nameErr.classList.add('hidden');
            emailErr.classList.add('hidden');
            phoneErr.classList.add('hidden');
            formSuccess.classList.add('hidden');

            const name = nameInp.value.trim();
            const email = emailInp.value.trim();
            const phone = phoneInp.value.trim();
            const goal = goalInp ? goalInp.value : 'General Fitness';
            const slot = slotInp ? slotInp.value : 'Morning';
            const message = msgInp ? msgInp.value.trim() : '';

            let isValid = true;
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            const phoneDigits = phone.replace(/\D/g, '');

            if (!name) {
                nameErr.classList.remove('hidden');
                isValid = false;
            }
            if (!email || !emailRegex.test(email)) {
                emailErr.classList.remove('hidden');
                isValid = false;
            }
            if (!phone || phoneDigits.length < 10) {
                phoneErr.classList.remove('hidden');
                isValid = false;
            }

            if (!isValid) return;

            const passId = 'MDPASS-' + Math.floor(1000 + Math.random() * 9000);

            const trialRequest = {
                passId,
                name,
                email,
                phone,
                goal,
                slot,
                message,
                timestamp: new Date().toISOString()
            };

            try {
                const stored = JSON.parse(localStorage.getItem('mdFitness_trials')) || [];
                stored.unshift(trialRequest);
                localStorage.setItem('mdFitness_trials', JSON.stringify(stored));

                formSuccess.classList.remove('hidden');
                contactForm.reset();
                showToast(`Free Day Pass ${passId} generated! See you on the gym floor.`, 'success', 5000);

                setTimeout(() => {
                    formSuccess.classList.add('hidden');
                }, 6000);
            } catch (err) {
                console.error('Failed saving trial pass:', err);
                showToast('Could not save day pass request. Please try again.', 'error');
            }
        });
    }

    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const emailInp = document.getElementById('newsletterEmail');
            const successMsg = document.getElementById('newsletterSuccess');
            const email = emailInp.value.trim();
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!email || !emailRegex.test(email)) {
                showToast('Please enter a valid email address', 'error');
                return;
            }

            try {
                const subs = JSON.parse(localStorage.getItem('mdFitness_subscribers')) || [];
                if (!subs.some(s => s.email.toLowerCase() === email.toLowerCase())) {
                    subs.unshift({ email, timestamp: new Date().toISOString() });
                    localStorage.setItem('mdFitness_subscribers', JSON.stringify(subs));
                }

                if (successMsg) successMsg.classList.remove('hidden');
                newsletterForm.reset();
                showToast('Subscribed to MD Fitness workout tips!', 'success');

                setTimeout(() => {
                    if (successMsg) successMsg.classList.add('hidden');
                }, 4000);
            } catch (err) {
                console.error('Failed saving newsletter:', err);
            }
        });
    }

    // ========================================================
    // 11. AUTHENTICATION & MEMBER SESSION
    // ========================================================

    let authMode = 'login';

    function getCurrentUser() {
        try {
            const raw = localStorage.getItem('mdFitness_currentUser');
            return raw ? JSON.parse(raw) : null;
        } catch (e) {
            return null;
        }
    }

    function syncUserUI() {
        const user = getCurrentUser();
        if (user && user.email) {
            const displayName = user.name ? user.name.split(' ')[0] : 'Member';
            if (authBtnText) authBtnText.textContent = displayName;
            if (mobileAuthText) mobileAuthText.textContent = `Signed In: ${displayName} (Logout)`;
            if (authBtn) authBtn.title = `Signed in as ${user.email}. Click to sign out.`;
        } else {
            if (authBtnText) authBtnText.textContent = 'Member';
            if (mobileAuthText) mobileAuthText.textContent = 'Member Sign In / Register';
            if (authBtn) authBtn.title = 'Member Sign In or Register';
        }
    }

    function openAuthModal() {
        const user = getCurrentUser();
        if (user) {
            if (confirm(`You are signed in as ${user.email}. Do you want to sign out?`)) {
                localStorage.removeItem('mdFitness_currentUser');
                syncUserUI();
                showToast('You have signed out successfully.', 'info');
            }
            return;
        }

        if (authModal) {
            setAuthMode('login');
            authModal.showModal();
        }
    }

    function setAuthMode(mode) {
        authMode = mode;
        if (mode === 'login') {
            authTabLogin.className = 'flex-1 py-2 rounded-lg bg-blue-600 text-white transition';
            authTabRegister.className = 'flex-1 py-2 rounded-lg text-slate-400 hover:text-white transition';
            authNameField.classList.add('hidden');
            authSubmitBtn.textContent = 'Sign In';
            authModalTitle.textContent = 'Member Sign In';
        } else {
            authTabRegister.className = 'flex-1 py-2 rounded-lg bg-blue-600 text-white transition';
            authTabLogin.className = 'flex-1 py-2 rounded-lg text-slate-400 hover:text-white transition';
            authNameField.classList.remove('hidden');
            authSubmitBtn.textContent = 'Register Pass';
            authModalTitle.textContent = 'Create Member Account';
        }
    }

    if (authBtn) authBtn.addEventListener('click', openAuthModal);
    if (mobileAuthBtn) mobileAuthBtn.addEventListener('click', openAuthModal);
    if (closeAuthBtn && authModal) closeAuthBtn.addEventListener('click', () => authModal.close());

    if (authTabLogin) authTabLogin.addEventListener('click', () => setAuthMode('login'));
    if (authTabRegister) authTabRegister.addEventListener('click', () => setAuthMode('register'));

    if (authForm) {
        authForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const email = document.getElementById('authEmail').value.trim();
            const pass = document.getElementById('authPass').value.trim();
            const name = document.getElementById('authName').value.trim();

            if (!email || !pass) {
                showToast('Please enter both email and password', 'error');
                return;
            }

            if (authMode === 'register') {
                if (!name) {
                    showToast('Please provide your full name', 'error');
                    return;
                }
                const user = { name, email };
                localStorage.setItem('mdFitness_currentUser', JSON.stringify(user));
                showToast(`Welcome to MD Fitness, ${name}!`, 'success');
            } else {
                const user = { name: email.split('@')[0], email };
                localStorage.setItem('mdFitness_currentUser', JSON.stringify(user));
                showToast(`Welcome back, ${user.name}!`, 'success');
            }

            syncUserUI();
            authModal.close();
            authForm.reset();
        });
    }

    // ========================================================
    // 12. STAFF & SUPPORT PORTAL (Admin Dashboard)
    // ========================================================

    let currentAdminTab = 'trials';

    function checkAdminStatus() {
        const isAdmin = sessionStorage.getItem('mdFitness_adminLoggedIn') === 'true';
        if (isAdmin) {
            if (adminLoginFormContainer) adminLoginFormContainer.classList.add('hidden');
            if (responseData) responseData.classList.remove('hidden');
            renderAdminDashboard();
        } else {
            if (adminLoginFormContainer) adminLoginFormContainer.classList.remove('hidden');
            if (responseData) responseData.classList.add('hidden');
        }
    }

    if (toggleAdminPass && adminPasswordInput) {
        toggleAdminPass.addEventListener('click', function () {
            const isPass = adminPasswordInput.type === 'password';
            adminPasswordInput.type = isPass ? 'text' : 'password';
            const icon = this.querySelector('i');
            if (icon) {
                icon.classList.toggle('fa-eye', !isPass);
                icon.classList.toggle('fa-eye-slash', isPass);
            }
        });
    }

    if (adminLoginForm) {
        adminLoginForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const u = adminUsernameInput.value.trim();
            const p = adminPasswordInput.value.trim();

            if (u === 'admin' && p === 'admin123') {
                sessionStorage.setItem('mdFitness_adminLoggedIn', 'true');
                showToast('Authenticated as MD Fitness Staff Administrator', 'success');
                checkAdminStatus();
            } else {
                showToast('Invalid credentials. Hint: admin / admin123', 'error');
            }
        });
    }

    if (logoutButton) {
        logoutButton.addEventListener('click', function () {
            sessionStorage.removeItem('mdFitness_adminLoggedIn');
            showToast('Logged out of Staff Portal', 'info');
            checkAdminStatus();
        });
    }

    if (clearAllDataBtn) {
        clearAllDataBtn.addEventListener('click', function () {
            if (confirm('Are you sure you want to reset all test trial passes, enrollments, and reviews?')) {
                localStorage.removeItem('mdFitness_trials');
                localStorage.removeItem('mdFitness_enrollments');
                localStorage.removeItem('mdFitness_reviews');
                localStorage.removeItem('mdFitness_subscribers');
                renderAdminDashboard();
                showToast('Demo data reset successfully', 'info');
            }
        });
    }

    if (adminTabsContainer) {
        adminTabsContainer.addEventListener('click', function (e) {
            const btn = e.target.closest('.pill-tab');
            if (!btn) return;

            adminTabsContainer.querySelectorAll('.pill-tab').forEach(t => t.classList.remove('active'));
            btn.classList.add('active');

            currentAdminTab = btn.dataset.tab || 'trials';
            renderAdminDashboard();
        });
    }

    function renderAdminDashboard() {
        if (!adminMetricsSummary || !adminTabContent) return;

        const trials = JSON.parse(localStorage.getItem('mdFitness_trials')) || [];
        const enrollments = JSON.parse(localStorage.getItem('mdFitness_enrollments')) || [];
        const reviews = JSON.parse(localStorage.getItem('mdFitness_reviews')) || [];
        const subscribers = JSON.parse(localStorage.getItem('mdFitness_subscribers')) || [];

        const totalRevenue = enrollments.reduce((sum, e) => sum + (e.planPrice || 0), 0);

        adminMetricsSummary.innerHTML = `
            <div class="glass-panel p-4 rounded-2xl border border-slate-800">
                <div class="text-xs text-slate-400 font-medium">Trial Passes</div>
                <div class="text-2xl font-black text-orange-400 mt-1">${trials.length}</div>
            </div>
            <div class="glass-panel p-4 rounded-2xl border border-slate-800">
                <div class="text-xs text-slate-400 font-medium">New Enrollments</div>
                <div class="text-2xl font-black text-blue-400 mt-1">${enrollments.length}</div>
            </div>
            <div class="glass-panel p-4 rounded-2xl border border-slate-800">
                <div class="text-xs text-slate-400 font-medium">Membership Revenue</div>
                <div class="text-2xl font-black text-green-400 mt-1">₹${totalRevenue.toLocaleString('en-IN')}</div>
            </div>
            <div class="glass-panel p-4 rounded-2xl border border-slate-800">
                <div class="text-xs text-slate-400 font-medium">Subscribers</div>
                <div class="text-2xl font-black text-cyan-400 mt-1">${subscribers.length}</div>
            </div>
        `;

        let tabHtml = '';

        if (currentAdminTab === 'trials') {
            tabHtml += `<h4 class="text-lg font-bold text-white mb-4">Day Pass Requests (${trials.length})</h4>`;
            if (trials.length === 0) {
                tabHtml += `<p class="text-sm text-slate-400">No trial pass requests yet. Use the free pass form on the Contact page to test!</p>`;
            } else {
                tabHtml += `<div class="space-y-4">`;
                trials.forEach(tr => {
                    tabHtml += `
                        <div class="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
                            <div class="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-slate-800">
                                <div>
                                    <span class="font-mono font-bold text-orange-400 text-sm">${tr.passId}</span>
                                    <span class="text-xs text-slate-400 ml-2">&bull; ${new Date(tr.timestamp).toLocaleString()}</span>
                                </div>
                                <span class="text-xs font-bold px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">${tr.slot}</span>
                            </div>
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-300 pt-1">
                                <div>
                                    <div><strong>Member Name:</strong> ${tr.name}</div>
                                    <div><strong>Phone:</strong> <a href="https://wa.me/91${tr.phone.replace(/\D/g, '')}" target="_blank" class="text-green-400 hover:underline"><i class="fab fa-whatsapp mr-1"></i>${tr.phone}</a></div>
                                    <div><strong>Email:</strong> ${tr.email}</div>
                                </div>
                                <div>
                                    <div><strong>Fitness Goal:</strong> ${tr.goal}</div>
                                    ${tr.message ? `<div><strong>Notes:</strong> ${tr.message}</div>` : ''}
                                </div>
                            </div>
                        </div>
                    `;
                });
                tabHtml += `</div>`;
            }
        } else if (currentAdminTab === 'enrollments') {
            tabHtml += `<h4 class="text-lg font-bold text-white mb-4">Membership Bookings (${enrollments.length})</h4>`;
            if (enrollments.length === 0) {
                tabHtml += `<p class="text-sm text-slate-400">No membership enrollments recorded yet.</p>`;
            } else {
                tabHtml += `<div class="space-y-4">`;
                enrollments.forEach(en => {
                    tabHtml += `
                        <div class="p-4 rounded-2xl bg-slate-900 border border-slate-800">
                            <div class="flex items-center justify-between pb-2 border-b border-slate-800">
                                <div>
                                    <span class="font-mono font-bold text-blue-400 text-sm">${en.enrollmentId}</span>
                                    <span class="text-xs text-slate-400 ml-2">&bull; ${new Date(en.timestamp).toLocaleDateString()}</span>
                                </div>
                                <span class="text-xs font-bold px-2.5 py-0.5 rounded-full bg-green-500/10 text-green-400">₹${en.planPrice.toLocaleString('en-IN')} (${en.paymentMethod})</span>
                            </div>
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-300 mt-2">
                                <div>
                                    <div><strong>Member:</strong> ${en.customerName} (${en.customerPhone})</div>
                                    <div><strong>Email:</strong> ${en.customerEmail}</div>
                                </div>
                                <div>
                                    <div><strong>Plan:</strong> ${en.planName}</div>
                                    <div><strong>Start Date:</strong> ${en.startDate}</div>
                                </div>
                            </div>
                        </div>
                    `;
                });
                tabHtml += `</div>`;
            }
        } else if (currentAdminTab === 'reviews') {
            tabHtml += `<h4 class="text-lg font-bold text-white mb-4">Member Reviews (${reviews.length})</h4>`;
            if (reviews.length === 0) {
                tabHtml += `<p class="text-sm text-slate-400">No new reviews submitted yet.</p>`;
            } else {
                tabHtml += `<div class="space-y-4">`;
                reviews.forEach(rev => {
                    tabHtml += `
                        <div class="p-4 rounded-2xl bg-slate-900 border border-slate-800">
                            <div class="flex items-center justify-between pb-2 border-b border-slate-800">
                                <div>
                                    <span class="font-bold text-white text-sm">${rev.name}</span>
                                    <span class="text-xs text-slate-400 ml-2">Program: ${rev.program}</span>
                                </div>
                                <div class="text-amber-400 text-xs">${'★'.repeat(rev.rating)}</div>
                            </div>
                            <p class="text-xs text-slate-300 mt-2 italic">"${rev.comment}"</p>
                        </div>
                    `;
                });
                tabHtml += `</div>`;
            }
        } else if (currentAdminTab === 'newsletter') {
            tabHtml += `<h4 class="text-lg font-bold text-white mb-4">Newsletter Subscribers (${subscribers.length})</h4>`;
            if (subscribers.length === 0) {
                tabHtml += `<p class="text-sm text-slate-400">No newsletter subscribers yet.</p>`;
            } else {
                tabHtml += `
                    <div class="overflow-x-auto">
                        <table class="w-full text-left text-xs">
                            <thead>
                                <tr class="text-slate-400 border-b border-slate-800">
                                    <th class="p-2">#</th>
                                    <th class="p-2">Subscriber Email</th>
                                    <th class="p-2">Subscribed Date</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-slate-800 text-slate-300">
                                ${subscribers.map((s, idx) => `
                                    <tr>
                                        <td class="p-2 text-slate-500">${idx + 1}</td>
                                        <td class="p-2 font-mono text-white">${s.email}</td>
                                        <td class="p-2 text-slate-400">${new Date(s.timestamp).toLocaleDateString()}</td>
                                    </tr>
                                `).join('')}
                            </tbody>
                        </table>
                    </div>
                `;
            }
        }

        adminTabContent.innerHTML = tabHtml;
    }

    // Legal Policy Modal
    window.openLegalModal = function (type) {
        if (!legalModal || !legalModalTitle || !legalModalBody) return;

        if (type === 'rules') {
            legalModalTitle.textContent = 'Gym Etiquette & Floor Rules';
            legalModalBody.innerHTML = `
                <p><strong>1. Rerack Weights:</strong> Always return barbells, dumbbells, and weight plates to their designated tree after completing your sets.</p>
                <p><strong>2. Proper Footwear:</strong> Clean athletic running or lifting shoes are mandatory. Slippers, crocs, or open sandals are strictly forbidden on the training floor.</p>
                <p><strong>3. Clean Towel Policy:</strong> Please carry a sweat towel and wipe down machine benches after heavy perspiration.</p>
                <p><strong>4. Locker Usage:</strong> Day lockers are provided for training hours only. Lockers must be vacated before gym closing time.</p>
            `;
        } else if (type === 'privacy') {
            legalModalTitle.textContent = 'Privacy Policy';
            legalModalBody.innerHTML = `
                <p><strong>MD Fitness</strong> respects your privacy. We store member contact numbers and medical history strictly for emergency contact, attendance tracking, and workout programming.</p>
                <p>We do not share, sell, or disclose personal details to external commercial entities.</p>
            `;
        } else if (type === 'membership') {
            legalModalTitle.textContent = 'Membership Terms & Conditions';
            legalModalBody.innerHTML = `
                <p>Memberships are non-transferable and activate on the designated starting date.</p>
                <p>Annual VIP members are eligible for up to 30 days of medical freeze upon presentation of a valid physician certificate.</p>
                <p>Free 1-Day Trial passes are limited to one per individual and valid during staffed operating hours.</p>
            `;
        }

        legalModal.showModal();
    };

    if (closeLegalModalBtn && legalModal) {
        closeLegalModalBtn.addEventListener('click', () => legalModal.close());
    }

    // ========================================================
    // 13. APP INITIALIZATION
    // ========================================================

    renderGallery('all');
    calculateNutrition();
    syncUserUI();

    const initialHash = window.location.hash.substring(1);
    if (initialHash) {
        showPage(initialHash);
    } else {
        showPage('home');
    }
});
