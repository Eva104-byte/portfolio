// 1. PORTFOLIO DATA: Update this section to change your site content
const PORTFOLIO_DATA = {
    skills: ["JavaScript", "React", "HTML5", "CSS3", "Node.js", "Git", "Python", "UI/UX Design", "MongoDB", "AWS"],
    projects: [
        {
            title: "E-Commerce Suite",
            shortDesc: "High-performance online store with Stripe integration.",
            longDesc: "Developed a full-stack e-commerce platform featuring a custom shopping cart, secure user authentication, and an admin dashboard for inventory management. Optimized for mobile responsiveness and SEO.",
            tech: ["React", "Node.js", "MongoDB"],
            link: "#"
        },
        {
            title: "AI Content Generator",
            shortDesc: "SaaS tool utilizing GPT-4 for copywriting.",
            longDesc: "Built a subscription-based web app that helps marketers generate SEO-optimized blog posts and social media captions using the OpenAI API.",
            tech: ["Next.js", "Tailwind CSS", "OpenAI API"],
            link: "#"
        },
        {
            title: "Finance Tracker",
            shortDesc: "Personal budget app with data visualization.",
            longDesc: "A tool to track monthly spending and income. Includes interactive charts and monthly reports to help users visualize their financial health.",
            tech: ["Vanilla JS", "Chart.js", "Local Storage"],
            link: "#"
        }
    ]
};

document.addEventListener('DOMContentLoaded', () => {
    const projectsGrid = document.getElementById('projects-grid');
    const skillsCloud = document.getElementById('skills-cloud');
    const themeToggle = document.getElementById('theme-toggle');
    const modal = document.getElementById('project-modal');
    const closeModal = document.querySelector('.close-modal');

    // Render Skills
    function renderSkills() {
        skillsCloud.innerHTML = PORTFOLIO_DATA.skills.map(skill => 
            `<div class="skill-badge">${skill}</div>`
        ).join('');
    }

    // Render Projects
    function renderProjects() {
        projectsGrid.innerHTML = PORTFOLIO_DATA.projects.map((proj, index) => `
            <div class="project-card" onclick="openProject(${index})">
                <h3>${proj.title}</h3>
                <p>${proj.shortDesc}</p>
                <div class="tech-stack">
                    ${proj.tech.map(t => `<span>${t}</span>`).join('')}
                </div>
            </div>
        `).join('');
    }

    // Modal Control
    window.openProject = (index) => {
        const proj = PORTFOLIO_DATA.projects[index];
        document.getElementById('modal-title').innerText = proj.title;
        document.getElementById('modal-desc').innerText = proj.longDesc;
        document.getElementById('modal-tech').innerHTML = 
            proj.tech.map(t => `<span>${t}</span>`).join('');
        modal.style.display = 'block';
    };

    if(closeModal) {
        closeModal.onclick = () => modal.style.display = 'none';
    }

    window.onclick = (event) => { if (event.target == modal) modal.style.display = 'none'; };

    // Scroll Spy: Highlight Nav Links
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 150) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });

    // Dark Mode
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });

    // Form Submission
    document.getElementById('contact-form').addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Message sent successfully! I will get back to you soon.');
        e.target.reset();
    });

    renderSkills();
    renderProjects();
});
