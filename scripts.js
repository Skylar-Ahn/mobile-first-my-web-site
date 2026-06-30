const sectionLabel = document.querySelector("#active-section-label");
const sectionIndicator = document.querySelector(".section-indicator");
const sections = Array.from(document.querySelectorAll("[data-section-label]"));
const revealItems = Array.from(document.querySelectorAll(".reveal"));
const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

if (sectionLabel && sectionIndicator && sections.length) {
  let sectionTicking = false;
  let activeSection = sections[0];
  let lastScrollY = window.scrollY;
  let hideSectionTimer;

  const hideSectionIndicator = () => {
    sectionIndicator.classList.remove("is-visible");
  };

  const showSectionIndicator = () => {
    window.clearTimeout(hideSectionTimer);
    sectionIndicator.classList.add("is-visible");
    hideSectionTimer = window.setTimeout(hideSectionIndicator, 2000);
  };

  const getActiveSection = () => {
    const readLine = window.scrollY + 150;
    return sections.reduce((current, section) => {
      return section.offsetTop <= readLine ? section : current;
    }, sections[0]);
  };

  const updateActiveSection = () => {
    const currentScrollY = window.scrollY;
    const active = getActiveSection();
    const isScrollingDown = currentScrollY > lastScrollY;
    const enteredNewSection = active !== activeSection;

    sectionLabel.textContent = active.dataset.sectionLabel;

    if (enteredNewSection && isScrollingDown) {
      showSectionIndicator();
    } else if (!isScrollingDown) {
      window.clearTimeout(hideSectionTimer);
      hideSectionIndicator();
    }

    activeSection = active;
    lastScrollY = currentScrollY;
    sectionTicking = false;
  };

  const requestSectionUpdate = () => {
    if (sectionTicking) return;
    sectionTicking = true;
    window.requestAnimationFrame(updateActiveSection);
  };

  sectionLabel.textContent = activeSection.dataset.sectionLabel;
  hideSectionIndicator();
  window.addEventListener("scroll", requestSectionUpdate, { passive: true });
  window.addEventListener("resize", requestSectionUpdate);
}

if (motionQuery.matches) {
  revealItems.forEach((item) => item.classList.add("is-visible"));
} else if (revealItems.length) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const index = Number(entry.target.dataset.revealIndex || 0);
        entry.target.style.setProperty("--reveal-delay", `${index * 100}ms`);
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    {
      rootMargin: "0px 0px -10% 0px",
      threshold: 0.12,
    }
  );

  revealItems.forEach((item) => revealObserver.observe(item));
}

document.querySelectorAll(".accordion-trigger").forEach((trigger) => {
  trigger.addEventListener("click", () => {
    const controls = trigger.getAttribute("aria-controls");
    const panel = controls ? document.getElementById(controls) : null;
    const expanded = trigger.getAttribute("aria-expanded") === "true";
    const nextExpanded = !expanded;

    trigger.setAttribute("aria-expanded", String(nextExpanded));
    const icon = trigger.querySelector(".trigger-icon");
    if (icon) icon.textContent = nextExpanded ? "-" : "+";

    if (panel) {
      panel.hidden = !nextExpanded;
    }

    if (trigger.classList.contains("qa-toggle")) {
      document.querySelectorAll(".signal-extra").forEach((row) => {
        row.hidden = !nextExpanded;
      });
      const label = trigger.querySelector("span:first-child");
      if (label) {
        label.textContent = nextExpanded ? "Collapse signal detail" : "Expand signal detail";
      }
    }
  });
});

document.querySelectorAll(".more-project-toggle").forEach((trigger) => {
  trigger.addEventListener("click", () => {
    const controls = trigger.getAttribute("aria-controls");
    const panel = controls ? document.getElementById(controls) : null;
    if (!panel) return;

    const nextExpanded = trigger.getAttribute("aria-expanded") !== "true";
    trigger.setAttribute("aria-expanded", String(nextExpanded));
    trigger.textContent = nextExpanded ? "hide project" : "more project";
    panel.hidden = !nextExpanded;

    if (nextExpanded) {
      panel.scrollIntoView({ behavior: motionQuery.matches ? "auto" : "smooth", block: "nearest" });
    }
  });
});
