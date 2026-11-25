:root {
    --primary: #4f46e5;
    --primary-hover: #4338ca;
    --secondary: #10b981;
    --bg-color: #f3f4f6;
    --card-bg: #ffffff;
    --text-dark: #1f2937;
    --text-muted: #6b7280;
    --border-radius: 16px;
    --shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.08);
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}

body {
    background-color: var(--bg-color);
    color: var(--text-dark);
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}

/* Navbar */
.navbar {
    background: var(--card-bg);
    padding: 1rem 5%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 2px 10px rgba(0,0,0,0.05);
    position: sticky;
    top: 0;
    z-index: 100;
    flex-wrap: wrap;
    gap: 1rem;
}

.logo {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--primary);
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.nav-links {
    list-style: none;
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
}

.nav-btn {
    background: transparent;
    border: none;
    padding: 0.6rem 1rem;
    border-radius: 10px;
    font-size: 0.95rem;
    font-weight: 600;
    color: var(--text-muted);
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    gap: 0.4rem;
}

.nav-btn:hover, .nav-btn.active {
    background: #eef2ff;
    color: var(--primary);
}

/* Container & Sections */
.container {
    max-width: 960px;
    width: 92%;
    margin: 2rem auto;
    flex: 1;
}

.page-section {
    display: none;
    animation: fadeIn 0.4s ease;
}

.page-section.active {
    display: block;
}

@keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
}

.section-header {
    text-align: center;
    margin-bottom: 2rem;
}

.section-header h2 {
    font-size: 1.8rem;
    color: var(--primary);
    margin-bottom: 0.5rem;
}

.section-header p {
    color: var(--text-muted);
}

/* Beranda Hero */
.hero-card {
    background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%);
    color: white;
    padding: 3rem 2.5rem;
    border-radius: var(--border-radius);
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
    box-shadow: var(--shadow);
    margin-bottom: 2rem;
}

.badge {
    background: rgba(255, 255, 255, 0.2);
    padding: 0.4rem 0.9rem;
    border-radius: 20px;
    font-size: 0.85rem;
    font-weight: 600;
    display: inline-block;
    margin-bottom: 1rem;
}

.hero-text h1 {
    font-size: 2.1rem;
    line-height: 1.3;
    margin-bottom: 1rem;
}

.hero-text p {
    opacity: 0.9;
    line-height: 1.6;
    margin-bottom: 1.5rem;
}

.hero-buttons {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
}

.hero-icon i {
    font-size: 7rem;
    opacity: 0.25;
}

.features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
}

.feature-box {
    background: var(--card-bg);
    padding: 1.8rem;
    border-radius: var(--border-radius);
    box-shadow: var(--shadow);
    text-align: center;
    transition: transform 0.3s ease;
}

.feature-box:hover {
    transform: translateY(-5px);
}

.feature-box i {
    font-size: 2.2rem;
    margin-bottom: 1rem;
}

.icon-blue { color: #3b82f6; }
.icon-green { color: #10b981; }
.icon-orange { color: #f59e0b; }

/* Cards & Forms */
.card {
    background: var(--card-bg);
    padding: 2rem;
    border-radius: var(--border-radius);
    box-shadow: var(--shadow);
}

.form-group {
    margin-bottom: 1.3rem;
}

.form-group label {
    display: block;
    font-weight: 600;
    margin-bottom: 0.5rem;
}

select, textarea {
    width: 100%;
    padding: 0.8rem 1rem;
    border: 2px solid #e5e7eb;
    border-radius: 10px;
    font-size: 0.95rem;
    transition: border-color 0.3s;
}

select:focus, textarea:focus {
    outline: none;
    border-color: var(--primary);
}

/* Buttons */
.btn-primary, .btn-secondary {
    padding: 0.8rem 1.5rem;
    border: none;
    border-radius: 10px;
    font-weight: 600;
    font-size: 0.95rem;
    cursor: pointer;
    transition: all 0.3s ease;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
}

.btn-primary {
    background: var(--primary);
    color: white;
}

.hero-card .btn-primary {
    background: white;
    color: var(--primary);
}

.btn-primary:hover {
    background: var(--primary-hover);
    transform: translateY(-2px);
}

.hero-card .btn-primary:hover {
    background: #f9fafb;
}

.btn-secondary {
    background: #e0e7ff;
    color: var(--primary);
}

.hero-card .btn-secondary {
    background: rgba(255,255,255,0.15);
    color: white;
}

.btn-secondary:hover {
    background: #c7d2fe;
}

/* Bimbingan Box */
.bimbingan-box {
    margin-top: 2rem;
    background: #ffffff;
    border-left: 6px solid var(--secondary);
    padding: 2rem;
    border-radius: var(--border-radius);
    box-shadow: var(--shadow);
}

.step-item {
    background: #f8fafc;
    border: 1px solid #e2e8f0;
    padding: 1rem 1.2rem;
    border-radius: 10px;
    margin: 1rem 0;
    animation: fadeIn 0.4s ease;
}

.step-title {
    font-weight: 700;
    color: var(--primary);
    margin-bottom: 0.3rem;
}

/* Kuis */
.quiz-progress {
    font-size: 0.85rem;
    font-weight: 600;
    color: var(--primary);
    margin-bottom: 0.8rem;
}

.options-grid {
    display: grid;
    gap: 0.8rem;
    margin: 1.5rem 0;
}

.option-btn {
    text-align: left;
    padding: 1rem 1.2rem;
    background: #f9fafb;
    border: 2px solid #e5e7eb;
    border-radius: 10px;
    font-size: 0.95rem;
    cursor: pointer;
    transition: all 0.2s;
}

.option-btn:hover:not(:disabled) {
    border-color: var(--primary);
    background: #eef2ff;
}

.option-btn.correct {
    background: #d1fae5;
    border-color: #10b981;
    color: #065f46;
    font-weight: 600;
}

.option-btn.wrong {
    background: #fee2e2;
    border-color: #ef4444;
    color: #991b1b;
}

.feedback-box {
    padding: 1rem;
    border-radius: 10px;
    margin-bottom: 1rem;
    background: #eff6ff;
    border-left: 4px solid #3b82f6;
}

/* Motivasi */
.motivation-card {
    background: var(--card-bg);
    padding: 3rem 2rem;
    border-radius: var(--border-radius);
    box-shadow: var(--shadow);
    text-align: center;
    position: relative;
}

.quote-icon {
    font-size: 2.5rem;
    color: #c7d2fe;
    margin-bottom: 1rem;
}

.quote-text {
    font-size: 1.35rem;
    font-weight: 600;
    line-height: 1.6;
    color: var(--text-dark);
    margin-bottom: 1rem;
}

.quote-author {
    display: block;
    color: var(--text-muted);
    font-style: italic;
    margin-bottom: 2rem;
}

.hidden {
    display: none !important;
}

footer {
    text-align: center;
    padding: 1.5rem;
    color: var(--text-muted);
    font-size: 0.9rem;
}

@media (max-width: 768px) {
    .hero-card {
        flex-direction: column;
        text-align: center;
    }
    .hero-buttons {
        justify-content: center;
    }
    .hero-icon {
        display: none;
    }
}
