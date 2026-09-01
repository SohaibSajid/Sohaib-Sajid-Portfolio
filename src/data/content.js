export const projects = [
  {
    id: 'joblens',
    name: 'JobLens',
    tagline: 'CV-to-job matching with live voice mock interviews',
    stack: ['React', 'FastAPI', 'PostgreSQL', 'JWT', 'HuggingFace', 'MediaPipe'],
    depth: [
      'Skill-gap analysis pipeline matching unstructured resume text against structured job requirements.',
      'Real-time voice mock interviews with behavioral confidence detection, evaluated under live conditions rather than static test sets.',
      'Migrated the LLM backend twice — Llama-3, then Mistral-7B, then Groq — after diagnosing access and quota limits, not just model quality.',
    ],
    link: 'https://joblens-1-09ul.onrender.com',
    linkLabel: 'Live demo',
  },
  {
    id: 'memory-chatbot',
    name: 'LLM Memory Chatbot',
    tagline: 'A chatbot with a hand-built memory layer, not a vector DB off the shelf',
    stack: ['Groq API', 'C++', 'B-Trees', 'Hashing'],
    depth: [
      'Custom C++ B-Tree and hash-based cache underneath the chat memory, built to reason directly about retrieval performance instead of trusting a library.',
      'Deployed with a public, live API — not a notebook demo.',
    ],
    link: 'https://llm-by-sohaib.onrender.com',
    linkLabel: 'Live demo',
  },
  {
    id: 'cartsy',
    name: 'Cartsy',
    tagline: 'Full-stack e-commerce app, start to checkout',
    stack: ['Flutter', 'Dart', 'Firebase', 'REST APIs'],
    depth: [
      'Firebase Auth with session persistence, real-time Firestore product catalog, cart, order management, and a working payment flow.',
      'Feature-first architecture separating UI, business logic, and data layers.',
    ],
    link: 'https://github.com/SohaibSajid56/Cartsy',
    linkLabel: 'GitHub',
  },
  {
    id: 'drowsiness',
    name: 'Driver Drowsiness Detection',
    tagline: 'An SVM built from raw NumPy — no ML libraries',
    stack: ['NumPy', 'SMO', 'Haar Cascade', 'OpenCV'],
    depth: [
      'A custom SMO-based Support Vector Machine implemented in pure NumPy, forcing direct reasoning about the optimization and decision boundary instead of calling .fit().',
      'Feature pipeline built from scratch: Haar-cascade face detection, EAR/MAR aspect-ratio features, and a 15-frame state machine to separate real signal from single-frame noise before triggering an alert.',
    ],
    link: null,
    linkLabel: null,
  },
]

export const experience = [
  {
    role: 'Data Annotation & AI Support Intern',
    org: 'Pakistan Tobacco Company (PTC)',
    time: 'Summer 2024',
    points: [
      'Supported a computer-vision anomaly-detection system mounted above a production conveyor belt, built to flag foreign objects in tobacco in real time.',
      'Sat between the technical build and floor operations — translating detection requirements into annotation guidelines the labeling team could apply consistently.',
      'Ran validation checks and consistency reviews on the training data, and iterated on data quality directly from observed model failure cases.',
    ],
  },
  {
    role: 'Full-Stack AI & Mobile Developer',
    org: 'Freelance',
    time: 'Jun 2024 — Present',
    points: [
      'Evaluate frameworks, APIs, and third-party services against real client constraints — cost, latency, data access — then implement and ship.',
      'Own client communication end-to-end: requirements, progress updates, and translating technical trade-offs into plain terms.',
    ],
  },
]

export const skillGroups = [
  {
    label: 'Machine Learning',
    items: ['Linear & logistic regression', 'SVMs', 'Decision trees', 'Ensemble methods', 'Neural networks', 'PyTorch', 'NumPy'],
  },
  {
    label: 'Systems & Data',
    items: ['PostgreSQL', 'MongoDB', 'Redis', 'B-Trees & hashing', 'REST APIs', 'FastAPI'],
  },
  {
    label: 'Mobile & Frontend',
    items: ['Flutter', 'Dart', 'React', 'Firebase', 'JavaScript'],
  },
  {
    label: 'Low-Level',
    items: ['16-bit x86 Assembly (NASM)', 'Interrupt handling', 'Direct video memory manipulation', 'TSR programs'],
  },
]

export const links = {
  github: 'https://github.com/SohaibSajid56',
  linkedin: 'https://linkedin.com/in/sohaib-sajid-8b5965332',
  email: 'sajidsohaib56@gmail.com',
  resume: '/resume/Sohaib-Sajid-Resume.pdf',
}
