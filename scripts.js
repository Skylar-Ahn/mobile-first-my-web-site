const sectionLabel = document.querySelector("#active-section-label");
const sectionIndicator = document.querySelector(".section-indicator");
const sections = Array.from(document.querySelectorAll("[data-section-label]"));
const revealItems = Array.from(document.querySelectorAll(".reveal"));
const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
const translations = {
  en: {
    "meta.title": "Skylar Ahn | AI Dataset Quality Portfolio",
    "meta.description": "Skylar Ahn portfolio for AI dataset quality assurance, robotics dataset QA, annotation validation, and human-in-the-loop labeling workflows.",
    "skip": "Skip to content",
    "language.label": "Language",
    "hero.eyebrow": "Robotics Dataset QA",
    "hero.title": "AI Dataset Quality<br />&amp; Human-in-the-Loop QA",
    "hero.copy": "I build annotation validation, review queue, and pre-labeling workflows for robotics and visual AI training datasets.",
    "hero.cta.projects": "View Projects",
    "hero.cta.resume": "Resume",
    "focus.eyebrow": "Focus Areas",
    "focus.secondary": "BBox checks · Distribution analysis · Robotics data curation",
    "projects.eyebrow": "Featured Projects",
    "projects.title": "Dataset QA systems, not random spot checks.",
    "projects.more": "more project",
    "project1.title": "Dataset Quality Management Toolkit",
    "project1.copy": "A COCO-format dataset QA toolkit for validating annotations, analyzing dataset distribution, and prioritizing suspicious samples for human review.",
    "project1.detail.validation": "COCO annotation validation",
    "project1.detail.bbox": "bbox, category, and reference checks",
    "project1.detail.distribution": "class and object-size distribution report",
    "project1.detail.queue": "review queue design",
    "project1.detail.taxonomy": "issue taxonomy for labeling errors",
    "project1.why": "Instead of manually checking random samples, this toolkit helps prioritize high-risk samples for human review.",
    "project2.title": "Human-in-the-Loop Pre-labeling Pipeline",
    "project2.copy": "A pre-labeling workflow using Grounding DINO, SAM, and CLIP to generate initial labels, filter uncertain predictions, and route high-risk samples to human reviewers.",
    "project2.detail.prompt": "prompt and class ontology design",
    "project2.detail.dino": "Grounding DINO detection",
    "project2.detail.sam": "SAM mask generation",
    "project2.detail.confidence": "confidence-based review queue",
    "project2.detail.compare": "auto-label vs human-corrected label comparison",
    "project2.detail.taxonomy": "error taxonomy and guideline update",
    "project2.why": "This project is intentionally marked In Progress while the pipeline and evaluation workflow are being built.",
    "action.readMore": "Read more",
    "qa.eyebrow": "QA Signals",
    "qa.title": "Review queue preview",
    "qa.copy": "A compact issue tracker view for deciding which samples need human attention first.",
    "qa.panelKicker": "Quality Signals",
    "qa.panelTitle": "Dataset health panel",
    "qa.status": "Live Model",
    "qa.signal.schema": "References and required fields are valid.",
    "qa.signal.bbox": "Possible out-of-bounds or abnormal aspect ratio.",
    "qa.signal.boundary": "Task transition point needs evidence check.",
    "qa.signal.leakage": "Near-duplicate sample may cross splits.",
    "qa.signal.lowConf": "Route uncertain prediction to human queue.",
    "qa.signal.taxonomy": "Label guideline mismatch affects downstream training.",
    "qa.signal.classTail": "Long-tail class needs distribution report review.",
    "qa.detail.bbox": "<strong>bbox REVIEW:</strong> likely cause is an invalid box, unusual size, or edge crop. Action: route sample to human review. Priority: medium-high.",
    "qa.detail.boundary": "<strong>boundary AMBIGUOUS:</strong> likely cause is an unclear manipulation transition. Action: compare wrist/front camera, 3D motion view, and joint-state signal.",
    "qa.expand": "Expand signal detail",
    "qa.collapse": "Collapse signal detail",
    "field.eyebrow": "Field Experience",
    "field.title": "Robotics Dataset QA Field Experience",
    "field.subtitle": "Robotics startup · Part-time field experience",
    "field.summary": "Worked on robot-arm teleoperation, task data generation, annotation, and QA for learning-oriented manipulation datasets.",
    "field.bullet.teleop": "Generated robot manipulation task data through teleoperation",
    "field.bullet.boundaries": "Annotated subtask boundaries in manipulation trajectories",
    "field.bullet.review": "Reviewed task data for ambiguous transition points",
    "field.bullet.multimodal": "Introduced multimodal cross-checking with camera and 3D views",
    "field.bullet.joint": "Used joint-state graphs as supporting evidence",
    "field.bullet.issueNumber": "Grouped recurring edge cases with a Frequent Issue Number system",
    "field.core.title": "Core Work",
    "field.core.teleop": "Generated robot manipulation task data through teleoperation.",
    "field.core.boundaries": "Annotated subtask boundaries in manipulation trajectories.",
    "field.core.review": "Reviewed task data for labeling quality and ambiguous transition points.",
    "field.quality.title": "Self-initiated Quality Work",
    "field.quality.button": "View quality work",
    "field.quality.multimodal": "Introduced multimodal cross-checking using wrist-camera footage, front-camera footage, and 3D motion views.",
    "field.quality.joint": "Used joint-state signal graphs as supporting evidence for difficult task-boundary decisions.",
    "field.quality.shared": "Shared this evidence-based review approach with incoming labelers.",
    "field.quality.sheet": "Documented ambiguous labeling edge cases in Google Sheets and grouped recurring issues with a Frequent Issue Number structure.",
    "field.quality.resources": "Built worker-facing communication resources for ambiguous annotation cases.",
    "field.quality.tooling": "Recorded QA issues in teleoperation equipment and labeling tools, then discussed improvement points with team members.",
    "field.quality.notion": "Built a Notion-based knowledge structure integrating task materials, edge cases, tool QA records, and worker references.",
    "field.quality.proposal": "Wrote an improvement proposal comparing integrated review-labeling with separated review and labeling stages.",
    "field.connects.title": "How This Connects",
    "field.connects.evidence": "Annotation quality depends on evidence, context, and shared criteria, not just individual carefulness.",
    "field.connects.system": "The goal is to move from high-quality annotation review to systems that make label quality consistent, traceable, and scalable.",
    "skills.eyebrow": "Skills & Tools",
    "skills.title": "Built around practical dataset work.",
    "skills.used": "Used / Building With",
    "skills.planned": "Exploring / Planned Integration",
    "learning.label": "Learning map",
    "learning.copy": "AI data quality · computer vision datasets · data engineering basics",
    "learning.link": "View learning map →",
    "notes.eyebrow": "Technical Notes",
    "notes.title": "Short notes from learning and project-building.",
    "notes.coco": "Understanding COCO Annotation JSON",
    "notes.bbox": "Why Bounding Box Validation Matters",
    "notes.humanReview": "Why Auto-labeling Still Needs Human Review",
    "status.draft": "Draft",
    "status.comingSoon": "Coming Soon",
    "about.eyebrow": "About",
    "about.title": "B.S. in Mathematics.<br />Dataset QA focused.",
    "about.copy1": "I'm Skylar Ahn, a mathematics graduate focused on AI training dataset quality. My work connects robotics labeling experience with annotation validation, review queues, and human-in-the-loop QA workflows.",
    "about.copy2": "I have experience in teaching, data labeling, and robotics teleoperation / annotation QA.",
    "about.more": "More background +",
    "about.less": "Less background -",
    "about.detail": "Additional background: teaching, robotics annotation QA, and cryptography / blockchain exposure.",
    "contact.eyebrow": "Contact / Links",
    "contact.title": "Resume, GitHub, and contact.",
  },
  ko: {
    "meta.title": "Skylar Ahn | AI Dataset Quality Portfolio",
    "meta.description": "Skylar Ahn의 AI dataset quality, robotics Dataset QA, annotation validation, Human-in-the-Loop labeling workflow portfolio.",
    "skip": "본문으로 이동",
    "language.label": "언어 선택",
    "hero.eyebrow": "Robotics Dataset QA",
    "hero.title": "AI Dataset Quality<br />&amp; Human-in-the-Loop QA",
    "hero.copy": "robotics 및 visual AI training dataset을 위한 annotation validation, review queue, pre-labeling workflow를 만듭니다.",
    "hero.cta.projects": "Projects 보기",
    "hero.cta.resume": "Resume",
    "focus.eyebrow": "Focus Areas",
    "focus.secondary": "BBox checks · Distribution analysis · Robotics data curation",
    "projects.eyebrow": "Featured Projects",
    "projects.title": "random spot check가 아닌 Dataset QA system.",
    "projects.more": "more project 보기",
    "project1.title": "Dataset Quality Management Toolkit",
    "project1.copy": "COCO-format dataset에서 annotation을 검증하고, distribution을 분석하며, human review가 필요한 suspicious sample을 우선순위화하는 Dataset QA toolkit입니다.",
    "project1.detail.validation": "COCO annotation validation",
    "project1.detail.bbox": "bbox, category, reference checks",
    "project1.detail.distribution": "class 및 object-size distribution report",
    "project1.detail.queue": "review queue design",
    "project1.detail.taxonomy": "labeling error를 위한 issue taxonomy",
    "project1.why": "random sample을 수동으로 확인하는 대신, high-risk sample을 human review로 먼저 보낼 수 있게 합니다.",
    "project2.title": "Human-in-the-Loop Pre-labeling Pipeline",
    "project2.copy": "Grounding DINO, SAM, CLIP을 사용해 initial label을 만들고, uncertain prediction을 걸러 high-risk sample을 human reviewer에게 보내는 pre-labeling workflow입니다.",
    "project2.detail.prompt": "prompt 및 class ontology design",
    "project2.detail.dino": "Grounding DINO detection",
    "project2.detail.sam": "SAM mask generation",
    "project2.detail.confidence": "confidence-based review queue",
    "project2.detail.compare": "auto-label vs human-corrected label comparison",
    "project2.detail.taxonomy": "error taxonomy 및 guideline update",
    "project2.why": "pipeline과 evaluation workflow를 구축 중이기 때문에 이 project는 In Progress로 표시했습니다.",
    "action.readMore": "더 보기",
    "qa.eyebrow": "QA Signals",
    "qa.title": "Review queue preview",
    "qa.copy": "어떤 sample을 human review로 먼저 보낼지 판단하기 위한 compact issue tracker view입니다.",
    "qa.panelKicker": "Quality Signals",
    "qa.panelTitle": "Dataset health panel",
    "qa.status": "Live Model",
    "qa.signal.schema": "reference와 required field가 valid합니다.",
    "qa.signal.bbox": "out-of-bounds 또는 abnormal aspect ratio 가능성이 있습니다.",
    "qa.signal.boundary": "task transition point에 evidence check가 필요합니다.",
    "qa.signal.leakage": "near-duplicate sample이 split을 넘나들 가능성이 있습니다.",
    "qa.signal.lowConf": "uncertain prediction은 human queue로 보냅니다.",
    "qa.signal.taxonomy": "label guideline mismatch가 downstream training에 영향을 줄 수 있습니다.",
    "qa.signal.classTail": "long-tail class는 distribution report review가 필요합니다.",
    "qa.detail.bbox": "<strong>bbox REVIEW:</strong> likely cause는 invalid box, unusual size, edge crop입니다. Action: sample을 human review로 보냅니다. Priority: medium-high.",
    "qa.detail.boundary": "<strong>boundary AMBIGUOUS:</strong> likely cause는 unclear manipulation transition입니다. Action: wrist/front camera, 3D motion view, joint-state signal을 비교합니다.",
    "qa.expand": "signal detail 보기",
    "qa.collapse": "signal detail 접기",
    "field.eyebrow": "Field Experience",
    "field.title": "Robotics Dataset QA Field Experience",
    "field.subtitle": "Robotics startup · Part-time field experience",
    "field.summary": "robot-arm teleoperation, task data generation, annotation, learning-oriented manipulation dataset QA를 수행했습니다.",
    "field.bullet.teleop": "teleoperation으로 robot manipulation task data 생성",
    "field.bullet.boundaries": "manipulation trajectory의 subtask boundary annotation",
    "field.bullet.review": "ambiguous transition point 중심의 task data review",
    "field.bullet.multimodal": "camera 및 3D view를 활용한 multimodal cross-checking 도입",
    "field.bullet.joint": "joint-state graph를 supporting evidence로 활용",
    "field.bullet.issueNumber": "반복되는 edge case를 Frequent Issue Number system으로 grouping",
    "field.core.title": "Core Work",
    "field.core.teleop": "teleoperation으로 robot manipulation task data를 생성했습니다.",
    "field.core.boundaries": "manipulation trajectory의 subtask boundary를 annotation했습니다.",
    "field.core.review": "labeling quality와 ambiguous transition point를 중심으로 task data를 review했습니다.",
    "field.quality.title": "Self-initiated Quality Work",
    "field.quality.button": "quality work 보기",
    "field.quality.multimodal": "wrist-camera footage, front-camera footage, 3D motion view를 함께 보는 multimodal cross-checking을 도입했습니다.",
    "field.quality.joint": "task-boundary decision이 어려운 경우 joint-state signal graph를 supporting evidence로 사용했습니다.",
    "field.quality.shared": "evidence-based review approach를 incoming labeler와 공유했습니다.",
    "field.quality.sheet": "ambiguous labeling edge case를 Google Sheets에 정리하고 Frequent Issue Number structure로 recurring issue를 grouping했습니다.",
    "field.quality.resources": "ambiguous annotation case를 논의하기 위한 worker-facing communication resource를 만들었습니다.",
    "field.quality.tooling": "teleoperation equipment 및 labeling tool의 QA issue를 기록하고 team member와 improvement point를 논의했습니다.",
    "field.quality.notion": "task material, edge case, tool QA record, worker reference를 통합한 Notion-based knowledge structure를 만들었습니다.",
    "field.quality.proposal": "integrated review-labeling과 separated review / labeling stage를 비교하는 improvement proposal을 작성했습니다.",
    "field.connects.title": "How This Connects",
    "field.connects.evidence": "annotation quality는 개인의 꼼꼼함만이 아니라 evidence, context, shared criteria에 의해 안정화됩니다.",
    "field.connects.system": "목표는 high-quality annotation review를 넘어 label quality를 consistent, traceable, scalable하게 만드는 system으로 확장하는 것입니다.",
    "skills.eyebrow": "Skills & Tools",
    "skills.title": "practical dataset work를 기준으로 구성했습니다.",
    "skills.used": "Used / Building With",
    "skills.planned": "Exploring / Planned Integration",
    "learning.label": "Learning map",
    "learning.copy": "AI data quality · computer vision datasets · data engineering basics",
    "learning.link": "Learning map 보기 →",
    "notes.eyebrow": "Technical Notes",
    "notes.title": "learning과 project-building 과정에서 남긴 짧은 notes.",
    "notes.coco": "COCO Annotation JSON 이해하기",
    "notes.bbox": "Bounding Box Validation이 중요한 이유",
    "notes.humanReview": "Auto-labeling에도 Human Review가 필요한 이유",
    "status.draft": "Draft",
    "status.comingSoon": "Coming Soon",
    "about.eyebrow": "About",
    "about.title": "B.S. in Mathematics.<br />Dataset QA focused.",
    "about.copy1": "저는 Skylar Ahn입니다. Mathematics를 전공했고 AI training dataset quality에 집중하고 있습니다. robotics labeling 경험을 annotation validation, review queue, Human-in-the-Loop QA workflow와 연결해 보고 있습니다.",
    "about.copy2": "teaching, data labeling, robotics teleoperation / annotation QA 경험이 있습니다.",
    "about.more": "Background 더 보기 +",
    "about.less": "Background 접기 -",
    "about.detail": "Additional background: teaching, robotics annotation QA, cryptography / blockchain exposure.",
    "contact.eyebrow": "Contact / Links",
    "contact.title": "Resume, GitHub, Contact.",
  },
};

let currentLanguage = "en";

const getStoredLanguage = () => {
  try {
    return window.localStorage.getItem("skylar-language");
  } catch {
    return null;
  }
};

const setStoredLanguage = (language) => {
  try {
    window.localStorage.setItem("skylar-language", language);
  } catch {
    // Some file:// contexts can restrict storage. The toggle still works for the current page.
  }
};

const translate = (key, language = currentLanguage) => {
  return translations[language]?.[key] || translations.en[key] || "";
};

const updateAccordionLabels = (language) => {
  document.querySelectorAll("[data-i18n-collapsed-key]").forEach((trigger) => {
    const collapsed = translate(trigger.dataset.i18nCollapsedKey, language);
    const expanded = translate(trigger.dataset.i18nExpandedKey, language);
    const isExpanded = trigger.getAttribute("aria-expanded") === "true";

    trigger.dataset.collapsedLabel = collapsed;
    trigger.dataset.expandedLabel = expanded;
    trigger.textContent = isExpanded ? expanded : collapsed;
  });

  document.querySelectorAll(".qa-toggle").forEach((trigger) => {
    const label = trigger.querySelector("span:first-child");
    const isExpanded = trigger.getAttribute("aria-expanded") === "true";
    if (label) label.textContent = translate(isExpanded ? "qa.collapse" : "qa.expand", language);
  });
};

const applyLanguage = (language) => {
  const nextLanguage = language === "ko" ? "ko" : "en";
  currentLanguage = nextLanguage;
  document.documentElement.lang = nextLanguage === "ko" ? "ko" : "en";
  document.title = translate("meta.title", nextLanguage);

  const description = document.querySelector('meta[name="description"]');
  if (description) {
    description.setAttribute("content", translate("meta.description", nextLanguage));
  }

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = translate(element.dataset.i18n, nextLanguage);
  });

  document.querySelectorAll("[data-i18n-html]").forEach((element) => {
    element.innerHTML = translate(element.dataset.i18nHtml, nextLanguage);
  });

  document.querySelectorAll(".language-toggle").forEach((toggle) => {
    toggle.setAttribute("aria-label", translate("language.label", nextLanguage));
    toggle.querySelectorAll("button[data-language]").forEach((button) => {
      const isActive = button.dataset.language === nextLanguage;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });
  });

  updateAccordionLabels(nextLanguage);
  setStoredLanguage(nextLanguage);
};

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

document.querySelectorAll(".accordion-trigger, [data-accordion-trigger]").forEach((trigger) => {
  trigger.addEventListener("click", () => {
    const controls = trigger.getAttribute("aria-controls");
    const panel = controls ? document.getElementById(controls) : null;
    const expanded = trigger.getAttribute("aria-expanded") === "true";
    const nextExpanded = !expanded;

    trigger.setAttribute("aria-expanded", String(nextExpanded));
    const icon = trigger.querySelector(".trigger-icon");
    if (icon) icon.textContent = nextExpanded ? "-" : "+";
    if (trigger.dataset.collapsedLabel && trigger.dataset.expandedLabel) {
      trigger.textContent = nextExpanded ? trigger.dataset.expandedLabel : trigger.dataset.collapsedLabel;
    }

    if (panel) {
      panel.hidden = !nextExpanded;
    }

    if (trigger.classList.contains("qa-toggle")) {
      document.querySelectorAll(".signal-extra").forEach((row) => {
        row.hidden = !nextExpanded;
      });
      const label = trigger.querySelector("span:first-child");
      if (label) {
        label.textContent = translate(nextExpanded ? "qa.collapse" : "qa.expand");
      }
    }
  });
});

const hasLanguageTargets = document.querySelector(".language-toggle") || document.querySelector("[data-i18n], [data-i18n-html]");
if (hasLanguageTargets) {
  applyLanguage(getStoredLanguage() || "en");

  document.querySelectorAll(".language-toggle").forEach((toggle) => {
    toggle.addEventListener("click", (event) => {
      const selected = event.target.closest("button[data-language]");
      if (!selected) return;

      applyLanguage(selected.dataset.language);
    });
  });
}
