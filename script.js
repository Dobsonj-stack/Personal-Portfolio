const themeToggle = document.getElementById("theme-toggle");
const savedTheme = localStorage.getItem("theme");

const applyTheme = (theme) => {
  document.documentElement.setAttribute("data-theme", theme);
  if (themeToggle) {
    const isLight = theme === "light";
    const toggleLabel = themeToggle.querySelector(".toggle-label");
    if (toggleLabel) {
      toggleLabel.textContent = isLight ? "Mode: Light" : "Mode: Dark";
    }
    themeToggle.classList.toggle("is-light", isLight);
    themeToggle.setAttribute("aria-label", isLight ? "Switch to dark mode" : "Switch to light mode");
    themeToggle.setAttribute("aria-pressed", String(isLight));
  }
};

applyTheme(savedTheme === "light" ? "light" : "dark");

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const nextTheme = document.documentElement.getAttribute("data-theme") === "light" ? "dark" : "light";
    applyTheme(nextTheme);
    localStorage.setItem("theme", nextTheme);
  });
}

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
const year = document.getElementById("year");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => navLinks.classList.remove("open"));
  });
}

if (year) {
  year.textContent = new Date().getFullYear();
}

const projects = {
  "project-one": {
    title: "Project One",
    category: "Microsoft 365 Support",
    summary: "Improved user productivity by reducing recurring Microsoft 365 incidents.",
    overview:
      "This project focused on diagnosing high-frequency support requests related to Microsoft 365 and implementing long-term corrective actions. It combined user education, ticket pattern analysis, and service configuration improvements.",
    technologies: ["Microsoft 365 Admin Center", "Exchange Online", "SharePoint Online", "PowerShell"],
    outcomes: [
      "Reduced repeated incidents by introducing root-cause documentation.",
      "Improved ticket turnaround time through reusable troubleshooting runbooks.",
      "Raised user satisfaction with clearer support communication and guidance."
    ]
  },
  "project-two": {
    title: "Project Two",
    category: "Identity & Access",
    summary: "Strengthened cloud identity workflows for secure and reliable user access.",
    overview:
      "This project addressed identity-related access issues by reviewing sign-in policies, user onboarding steps, and escalation paths. The result was a more consistent and secure approach to account lifecycle management.",
    technologies: ["Microsoft Entra ID", "Conditional Access", "MFA", "Intune"],
    outcomes: [
      "Standardized user onboarding and access request handling.",
      "Reduced lockout incidents caused by inconsistent policy application.",
      "Improved compliance posture with clearer identity controls."
    ]
  },
  "project-three": {
    title: "Project Three",
    category: "Endpoint Reliability",
    summary: "Delivered more stable endpoint operations with structured diagnostics and fixes.",
    overview:
      "This project focused on endpoint troubleshooting for performance, software deployment, and policy issues. By applying a systematic diagnostic workflow, incidents were resolved faster and with fewer repeat faults.",
    technologies: ["Windows 11", "Microsoft Intune", "Defender", "Remote Management Tools"],
    outcomes: [
      "Cut repeat endpoint tickets through preventative maintenance checks.",
      "Improved deployment consistency for standard business applications.",
      "Lowered downtime by documenting known issues and tested remediations."
    ]
  }
};

const titleEl = document.getElementById("project-title");

if (titleEl) {
  const params = new URLSearchParams(window.location.search);
  const projectKey = params.get("project");
  const project = projects[projectKey];

  if (project) {
    document.title = `${project.title} | Josh Dobson`;
    document.getElementById("project-category").textContent = project.category;
    titleEl.textContent = project.title;
    document.getElementById("project-summary").textContent = project.summary;
    document.getElementById("project-overview").textContent = project.overview;

    const techList = document.getElementById("project-tech");
    const outcomesList = document.getElementById("project-outcomes");

    project.technologies.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      techList.appendChild(li);
    });

    project.outcomes.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      outcomesList.appendChild(li);
    });
  } else {
    titleEl.textContent = "Project not found";
    document.getElementById("project-summary").textContent =
      "The requested project could not be loaded. Please return to the projects list and try again.";
  }
}

const scrollTopBubble = document.querySelector('.scroll-top-bubble');
const backToTopLinks = document.querySelectorAll('.back-to-top-link');

const scrollToTop = (event) => {
  if (event) {
    event.preventDefault();
  }
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

backToTopLinks.forEach((link) => {
  link.addEventListener('click', scrollToTop);
});

if (scrollTopBubble) {
  scrollTopBubble.addEventListener('click', scrollToTop);

  const toggleScrollBubble = () => {
    const shouldShow = window.scrollY > 180;
    scrollTopBubble.classList.toggle('visible', shouldShow);
    scrollTopBubble.setAttribute('aria-hidden', String(!shouldShow));
  };

  window.addEventListener('scroll', toggleScrollBubble, { passive: true });
  toggleScrollBubble();
}
