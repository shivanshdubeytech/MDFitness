# MD Fitness &bull; Premier Health & Fitness Club

A modern, production-grade gym web application built for **MD Fitness** (Central Park, Nalasopara East, Palghar). Features an interactive single-page application (SPA) architecture, responsive design, certified trainer roster, scientific calorie & macronutrient calculator, membership enrollment engine, facilities gallery, member review carousel, free day pass booking, and staff management console.

---

## 🏋️ Key Features

### 1. Robust SPA Navigation
- Client-side hash routing (`#home`, `#about`, `#programs`, `#trainers`, `#calculator`, `#pricing`, `#testimonials`, `#gallery`, `#contact`, `#responses`).
- Responsive navbar with active link indicator, blur backdrop, and mobile hamburger menu.
- Zero-latency section toggling with smooth transitions and history preservation (`pushState` / `popstate`).

### 2. Training Programs (`#programs`)
- **6 Core Disciplines**:
  - **Strength & Muscle Building** (Olympic barbell mechanics, power racks, plate-loaded machinery)
  - **Cardio & Fat Burn Deck** (Motorized treadmills, cross trainers, stair climbers)
  - **Boxing & Kickboxing Arena** (Heavy bags, speed bags, mitt work, reflex training)
  - **Functional Conditioning** (Kettlebells, battle ropes, plyometrics, sled pushes)
  - **Yoga & Mobility Recovery** (Spinal alignment, joint flexibility, breathwork)
  - **1-on-1 Personal Coaching** (Body fat scans, custom progressive overload charts)

### 3. Certified Master Coaches (`#trainers`)
- Showcasing all 6 certified gym trainers with real local photos (`T1.jpeg` &ndash; `T6.jpg`):
  - **Coach Rohan** &ndash; Head Strength & Natural Bodybuilder (`T1.jpeg` flex pose, K11 Certified)
  - **Coach Aryan** &ndash; Aesthetics & Calisthenics Specialist (`T2.jpg` mirror room, ACE Certified)
  - **Coach Vikram** &ndash; Heavy Barbell Strength & Combat Lead (`T3.jpeg.jpg` barbell lifter, IPF Lifter)
  - **Coach Priya** &ndash; Female Transformation & Functional Coach (`T4.jpeg` female trainer, ACSM Certified)
  - **Coach Rahul & Group Team** &ndash; Lead Group HIIT & Circuit Conditioning (`T5.jpg` group fitness team, CrossFit L1)
  - **Coach Sameer** &ndash; Junior Bodybuilding & Hypertrophy Coach (`T6.jpg` front lat spread, Gold's Gym Certified)
- Direct "Train With Coach" action that pre-configures a consultation inquiry.

### 4. Scientific Calorie & Macronutrient Calculator (`#calculator`)
- Production-grade fitness calculator based on the **Mifflin-St Jeor formula**.
- **Inputs**: Gender, Age, Height (cm), Weight (kg), Physical Activity Level (1.2 to 1.9), and Fitness Goal (Aggressive Fat Loss, Mild Loss, Maintenance, Lean Gain, Heavy Bulking).
- **Outputs**:
  - Basal Metabolic Rate (BMR)
  - Total Daily Energy Expenditure (TDEE)
  - Target Daily Caloric Intake
  - Protein Requirement (grams & kcal)
  - Carbohydrate Requirement (grams & kcal)
  - Healthy Fats Requirement (grams & kcal)
  - Target Daily Hydration (liters of water)

### 5. Membership Plans & Booking (`#pricing`)
- **1 Month Starter Plan** (₹1,499/mo)
- **3-Month Transformation Plan** (₹3,999 / ₹1,333/mo &bull; Popular)
- **1-Year Elite VIP Membership** (₹11,999/yr / ₹999/mo &bull; Includes 5 Free Personal Training sessions, steam access, locker, and gym bag)
- **Interactive Enrollment Modal**: Select plan, choose starting date, choose payment method (Gym Desk / Online UPI), and receive instant reference ID (`MDMEM-XXXX`).

### 6. Free 1-Day Trial Pass & Contact (`#contact`)
- Instant digital 1-day guest pass booking with workout goal and preferred time slot (Morning, Afternoon, Evening).
- Physical address: Plot No 28, Rajni Apartment, 1st Floor, Near Muthoot Finance, Opp. Kotak Mahindra ATM, Central Park, Nalasopara East, Palghar - 401209.
- Operating hours: Mon&ndash;Sat: 6:00 AM &ndash; 10:30 PM | Sun: 7:00 AM &ndash; 1:00 PM.
- Direct WhatsApp chat link and Google Maps navigation.

### 7. Facilities Gallery & Lightbox (`#gallery`)
- Real facility photography & high-definition gym visuals:
  - `gym-hero.jpg` (Hero Gym Visual)
  - `gym-about.jpg` (Gym Interior & Training Arena)
  - `gym-strength.jpg` (Olympic Strength Deck)
  - `gym-cardio.jpg` (High-Tech Cardio Deck)
  - `gym-boxing.jpg` (Boxing Ring & Punch Bags)
  - `gym-functional.jpg` (Functional Athletic Rig)
  - `gym-yoga.jpg` (Yoga & Mobility Studio)
  - `gym-amenities.jpg` (Steam, Shower & Locker Suites)
  - Plus original facility shots: `floor.jpg`, `abt.jpg`, `strength.jpg`, `CardioEq.jpg`, `Boxer.jpg`, `Cond.jpg`, `Yoga1.jpeg`, `amenities.jpeg`, `Prem.jpeg`.
- Filterable by Strength, Cardio, Combat, and Amenities.
- Click-to-enlarge Lightbox modal.

### 8. Member Transformation Reviews (`#testimonials`)
- Touch and mouse-friendly auto-rotating carousel (every 5 seconds) with indicators and prev/next controls.
- "Write Member Review" modal with interactive 5-star rating selector and local storage persistence.

### 9. Staff & Front Desk Portal (`#responses`)
- Protected login for gym reception and trainers:
  - **Staff ID:** `admin`
  - **Password:** `admin123`
- Real-time KPIs: Day Pass Requests, New Enrollments, Membership Revenue, Active Subscribers.
- Tabbed management console:
  - **Day Pass Requests**: View visitor contact details, workout goals, slots, and WhatsApp link.
  - **Enrollments**: View members, plans, start dates, and payment status.
  - **Member Reviews**: Review feedback and ratings.
  - **Newsletter Subscribers**: View and export subscriber list.

---

## 🛠️ Tech Stack

- **HTML5 & Vanilla ES6+**: Fast, accessible, semantic web app with zero runtime dependencies.
- **Tailwind CSS & Custom CSS**: Responsive styling, custom glassmorphism, athletic blue/cyan accents, and smooth transitions.
- **FontAwesome 6.5**: High-clarity vector icons.
- **Local Database**: Native `localStorage` persistence for day passes, enrollments, reviews, and member accounts.
- **Node.js HTTP Server**: Lightweight server with MIME type resolution and security headers.

---

## 💻 Getting Started

### Option 1: Using Node.js (Recommended)
```bash
# Start local server
npm start

# Server will be accessible at:
http://localhost:3000
```

### Option 2: Using Python
```bash
cd Web/frontend
python -m http.server 8000
# Open http://localhost:8000 in your browser
```

### Option 3: Direct File Opening
Double-click `Web/frontend/index.html` to open directly in any web browser (Chrome, Edge, Firefox, Safari).

---

## 🧪 Automated Testing

Run the automated test suite to verify all routes, element IDs, and logic:

```bash
npm test
```

### Test Results:
- Verified all 10 MD Fitness SPA page sections and navigation routes.
- Confirmed zero telecom / placeholder artifacts.
- Verified all 15 local gym photography and trainer image assets exist and are linked.
- Verified 76 critical DOM element IDs matched between JavaScript and HTML.
- Validated Mifflin-St Jeor BMR and TDEE math accuracy.
- Verified production gym CSS classes and animations.
