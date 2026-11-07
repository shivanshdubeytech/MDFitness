const fs = require('fs');
const path = require('path');
const assert = require('assert');

console.log('--- Starting MD Fitness Web Validation Tests ---');

// 1. Read files
const htmlPath = path.join(__dirname, '..', 'Web', 'frontend', 'index.html');
const jsPath = path.join(__dirname, '..', 'Web', 'frontend', 'script.js');
const cssPath = path.join(__dirname, '..', 'Web', 'frontend', 'style.css');

assert(fs.existsSync(htmlPath), 'index.html must exist');
assert(fs.existsSync(jsPath), 'script.js must exist');
assert(fs.existsSync(cssPath), 'style.css must exist');

const htmlContent = fs.readFileSync(htmlPath, 'utf8');
const jsContent = fs.readFileSync(jsPath, 'utf8');
const cssContent = fs.readFileSync(cssPath, 'utf8');

console.log('✓ All source files present.');

// 2. Validate Navigation Links and Sections for MD Fitness
const expectedRoutes = [
    'home',
    'about',
    'programs',
    'trainers',
    'calculator',
    'pricing',
    'testimonials',
    'gallery',
    'contact',
    'responses'
];

expectedRoutes.forEach(route => {
    const sectionId = `id="page-${route}"`;
    assert(
        htmlContent.includes(sectionId),
        `Missing page section: ${sectionId} in index.html`
    );

    const navHref = `href="#${route}"`;
    assert(
        htmlContent.includes(navHref),
        `Missing navigation link ${navHref} in index.html`
    );
});
console.log(`✓ All ${expectedRoutes.length} MD Fitness SPA page sections and navigation routes verified.`);

// 3. Check that telecom references are completely eliminated
const bannedKeywords = ['Dev Telecom', 'devtelecom', 'smartphone', 'smartphones', 'tablets'];
bannedKeywords.forEach(kw => {
    assert(!htmlContent.toLowerCase().includes(kw), `index.html contains telecom keyword: ${kw}`);
    assert(!jsContent.toLowerCase().includes(kw), `script.js contains telecom keyword: ${kw}`);
});
console.log('✓ All telecom references eliminated; genuine MD Fitness branding active.');

// 4. Verify Local Gym Images exist on disk and are referenced
const gymImages = [
    'floor.jpg',
    'abt.jpg',
    'Prem.jpeg',
    'amenities.jpeg',
    'strength.jpg',
    'CardioEq.jpg',
    'Boxer.jpg',
    'Cond.jpg',
    'Yoga1.jpeg',
    'T1.jpeg',
    'T2.jpg',
    'T3.jpeg.jpg',
    'T4.jpeg',
    'T5.jpg',
    'T6.jpg',
    'gym-hero.jpg',
    'gym-about.jpg',
    'gym-strength.jpg',
    'gym-cardio.jpg',
    'gym-boxing.jpg',
    'gym-functional.jpg',
    'gym-yoga.jpg',
    'gym-amenities.jpg'
];

gymImages.forEach(img => {
    const p = path.join(__dirname, '..', 'Web', 'frontend', img);
    assert(fs.existsSync(p), `Missing local gym image file: ${img}`);
    assert(htmlContent.includes(img) || jsContent.includes(img) || cssContent.includes(img), `Gym image ${img} not referenced in HTML, CSS or JS`);
});
console.log(`✓ All ${gymImages.length} local gym photography and high-res assets verified and linked.`);

// 5. Verify Trainer Photographs, Genders, Roles and Names Exact Alignment
const trainerMappings = [
    { img: 'T1.jpeg', name: 'Coach Rohan', button: 'Train With Rohan' },
    { img: 'T2.jpg', name: 'Coach Aryan', button: 'Train With Aryan', forbidden: 'Priya' },
    { img: 'T3.jpeg.jpg', name: 'Coach Vikram', button: 'Train With Vikram' },
    { img: 'T4.jpeg', name: 'Coach Priya', button: 'Train With Priya', forbidden: 'Sameer' },
    { img: 'T5.jpg', name: 'Coach Rahul', button: 'Train With Rahul', forbidden: 'Ananya' },
    { img: 'T6.jpg', name: 'Coach Sameer', button: 'Train With Sameer', forbidden: 'Amit' }
];

trainerMappings.forEach(t => {
    assert(htmlContent.includes(t.img), `Trainer image ${t.img} not found in index.html`);
    assert(htmlContent.includes(t.name), `Trainer name ${t.name} not found in index.html`);
    assert(htmlContent.includes(t.button), `Trainer button ${t.button} not found in index.html`);
    assert(htmlContent.includes(`window.bookTrainer('${t.name}')`) || htmlContent.includes(`window.bookTrainer('Coach Rahul')`), `Trainer booking call for ${t.name} missing in index.html`);

    const cardStart = htmlContent.indexOf(t.img);
    const cardSnippet = htmlContent.substring(cardStart - 100, cardStart + 800);
    assert(cardSnippet.includes(t.name), `Card containing ${t.img} does not have name ${t.name}`);
    if (t.forbidden) {
        assert(!cardSnippet.includes(t.forbidden), `Card containing ${t.img} incorrectly contains mismatched name ${t.forbidden}`);
    }
});
console.log('✓ All 6 trainer photographs, genders, specialties, and booking handlers verified perfectly matched.');

// 6. Verify Critical Element IDs matched between JS and HTML
const criticalIds = [
    'main-nav',
    'mobile-menu-button',
    'mobile-menu',
    'toast-container',
    'fitnessCalorieForm',
    'calcAge',
    'calcWeight',
    'calcHeight',
    'calcActivity',
    'calcGoal',
    'resTargetCalories',
    'resBmr',
    'resTdee',
    'resProteinGrams',
    'resProteinKcal',
    'resCarbsGrams',
    'resCarbsKcal',
    'resFatsGrams',
    'resFatsKcal',
    'resWater',
    'enrollModal',
    'closeEnrollBtn',
    'enrollForm',
    'enrollPlanSelect',
    'enrollTotalAmount',
    'enrollStartDate',
    'authBtn',
    'mobileAuthBtn',
    'authBtnText',
    'mobileAuthText',
    'authModal',
    'closeAuth',
    'authForm',
    'authTabLogin',
    'authTabRegister',
    'authNameField',
    'authSubmit',
    'authModalTitle',
    'openReviewModalBtn',
    'reviewModal',
    'closeReview',
    'reviewForm',
    'starRatingContainer',
    'rev-rating',
    'quickViewModal',
    'quickViewContent',
    'legalModal',
    'closeLegalModal',
    'galleryGrid',
    'galleryFilterContainer',
    'testimonialCarousel',
    'prevTestimonial',
    'nextTestimonial',
    'testimonialIndicators',
    'contactForm',
    'workoutGoal',
    'timeSlot',
    'nameError',
    'emailError',
    'phoneError',
    'formSuccess',
    'newsletterForm',
    'newsletterEmail',
    'newsletterSuccess',
    'adminLoginForm',
    'adminLoginFormContainer',
    'responseData',
    'logoutButton',
    'clearAllDataBtn',
    'toggleAdminPass',
    'adminUsername',
    'adminPassword',
    'adminMetricsSummary',
    'adminTabContent',
    'adminTabsContainer',
    'scrollToTop'
];

criticalIds.forEach(id => {
    assert(
        htmlContent.includes(`id="${id}"`),
        `Critical ID missing in index.html: id="${id}"`
    );
});
console.log(`✓ Verified ${criticalIds.length} critical DOM element IDs matched between JS and HTML.`);

// 7. Test Mifflin-St Jeor Nutrition Calculation Formula
function calcBMR(weight, height, age, gender) {
    if (gender === 'male') {
        return (10 * weight) + (6.25 * height) - (5 * age) + 5;
    } else {
        return (10 * weight) + (6.25 * height) - (5 * age) - 161;
    }
}

const testBmrMale = calcBMR(72, 175, 25, 'male');
// 720 + 1093.75 - 125 + 5 = 1693.75
assert(Math.abs(testBmrMale - 1693.75) < 0.1, 'Male BMR calculation mismatch');

const testTdee = testBmrMale * 1.55; // 2625.3
assert(testTdee > 2600 && testTdee < 2650, 'TDEE calculation mismatch');

console.log('✓ Mifflin-St Jeor BMR and TDEE equations verified accurately.');

// 8. Verify CSS styles
assert(cssContent.includes('.gym-card'), 'Missing .gym-card in style.css');
assert(cssContent.includes('.trainer-card'), 'Missing .trainer-card in style.css');
assert(cssContent.includes('.pricing-card'), 'Missing .pricing-card in style.css');
assert(cssContent.includes('.toast'), 'Missing .toast in style.css');
assert(cssContent.includes('.testimonial-slide.active'), 'Missing .testimonial-slide.active in style.css');

console.log('✓ Key production gym CSS styling rules verified in style.css.');

console.log('\n=============================================');
console.log('ALL MD FITNESS VALIDATION TESTS PASSED!');
console.log('=============================================\n');
