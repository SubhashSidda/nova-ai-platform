import {
  EnterpriseLogo,
  FeatureItem,
  WorkflowPillar,
  StepItem,
  StatItem,
  UseCaseItem,
  TestimonialItem,
  PricingPlan,
  FAQItem,
  NavLink
} from '../types';

export const NAV_LINKS: NavLink[] = [
  { name: 'Features', href: '#features' },
  { name: 'Product', href: '#product' },
  { name: 'How It Works', href: '#how-it-works' },
  { name: 'Solutions', href: '#solutions' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'FAQ', href: '#faq' },
];

export const TRUSTED_COMPANIES: EnterpriseLogo[] = [
  { name: 'ApexCorp', tagline: 'Global FinTech', symbol: 'APX' },
  { name: 'LinearFlow', tagline: 'DevOps Scale', symbol: 'LNF' },
  { name: 'PulseAI', tagline: 'Health Sciences', symbol: 'PLS' },
  { name: 'Vertex Cloud', tagline: 'Distributed Infra', symbol: 'VTX' },
  { name: 'Hyperion', tagline: 'Autonomous Systems', symbol: 'HYP' },
  { name: 'CloudScale', tagline: 'Enterprise SaaS', symbol: 'CLS' },
];

export const FEATURES: FeatureItem[] = [
  {
    id: 'task-routing',
    title: 'Autonomous Task Routing',
    description: 'AI automatically categorizes, estimates complexity, and assigns incoming tickets to the optimal engineer based on historical velocity and expertise.',
    badge: 'Core Engine',
    iconName: 'GitMerge',
  },
  {
    id: 'neural-memory',
    title: 'Neural Context Memory',
    description: 'Consolidates documentation, Slack threads, Jira tickets, and GitHub pull requests into instant, unified semantic recall across your entire org.',
    badge: 'Context Sync',
    iconName: 'BrainCircuit',
  },
  {
    id: 'multi-agent',
    title: 'Cross-Functional AI Agents',
    description: 'Autonomous worker agents draft release notes, verify PR specifications, triage bug reports, and synchronize roadmap milestones in real time.',
    badge: 'Multi-Agent',
    iconName: 'Bot',
  },
  {
    id: 'sprint-forecasting',
    title: 'Predictive Sprint Planning',
    description: 'Eliminate missed deadlines with machine-learning burndown forecasting that flags blockers, code bottlenecks, and burnout risks days in advance.',
    badge: 'Predictive Ops',
    iconName: 'TrendingUp',
  },
  {
    id: 'zero-code-automation',
    title: 'Adaptive Workflow Automation',
    description: 'Natural language triggers turn complex multi-app routines into automated pipelines without writing a single line of integration code.',
    badge: 'Automation',
    iconName: 'Zap',
  },
  {
    id: 'enterprise-security',
    title: 'Enterprise Security & Governance',
    description: 'SOC2 Type II certified, HIPAA compliant, end-to-end encrypted, with dedicated zero-data-retention guarantees on all LLM training data.',
    badge: 'Compliance',
    iconName: 'ShieldCheck',
  },
];

export const WORKFLOW_PILLARS: WorkflowPillar[] = [
  {
    id: 'ingestion',
    title: '1. Autonomous Context Ingestion',
    subtitle: 'Zero Manual Data Entry',
    description: 'NOVA connects continuously to your existing stack—GitHub, Jira, Linear, Slack, Figma, and Notion—passively parsing discussions, commits, and specs into a unified living graph.',
    highlights: [
      'Bi-directional sync with 40+ developer and product tools',
      'Real-time semantic indexing of team decisions and technical PRs',
      'Zero manual status updates required from engineers'
    ],
    mockupTag: 'Context Ingestion Stream',
  },
  {
    id: 'reasoning',
    title: '2. Deep Multi-Agent Reasoning',
    subtitle: 'Proactive Bottleneck Resolution',
    description: 'Specialized LLM orchestrators continuously analyze dependencies, simulate release schedules, and autonomously write draft specifications, PR reviews, and sprint status reports.',
    highlights: [
      'Identifies cross-team blockers 48 hours before standups',
      'Automated code-review checklist generation and risk scoring',
      'Instant executive briefs tailored to leadership stakeholders'
    ],
    mockupTag: 'Multi-Agent Orchestrator',
  },
  {
    id: 'execution',
    title: '3. Continuous Execution & Delivery',
    subtitle: 'Ship 3x Faster With Zero Noise',
    description: 'Teams stay completely in flow. NOVA updates roadmaps automatically, handles notification routing with precision, and lets engineers focus purely on writing high-impact code.',
    highlights: [
      'Eliminates up to 14 hours of weekly administrative meetings',
      'Single pane of glass for engineering, product, and leadership',
      'Autonomous milestone tracking with automated rollback triggers'
    ],
    mockupTag: 'Velocity Dashboard',
  },
];

export const HOW_IT_WORKS_STEPS: StepItem[] = [
  {
    number: '01',
    title: 'Connect Your Workspace',
    description: 'One-click integrations with your existing tools like Slack, GitHub, Linear, Jira, and Notion in less than 2 minutes.',
    detail: 'Secure OAuth2 and API connectors securely index your workspace with zero disruption to active development.',
    iconName: 'Layers',
  },
  {
    number: '02',
    title: 'Configure AI Agents',
    description: 'Select from pre-built specialist workflows or prompt custom agents to mirror your team’s unique agile practices.',
    detail: 'Set guardrails, notification thresholds, and approval chains with straightforward visual controls.',
    iconName: 'Cpu',
  },
  {
    number: '03',
    title: 'Let NOVA Orchestrate',
    description: 'NOVA runs silently in the background, triaging tickets, orchestrating dependencies, and drafting documentation.',
    detail: 'Autonomous execution takes over 70% of repetitive status syncs and ticket maintenance instantly.',
    iconName: 'Sparkles',
  },
  {
    number: '04',
    title: 'Measure Velocity & Scale',
    description: 'Track team impact with real-time velocity analytics, cycle time metrics, and predictive delivery forecasts.',
    detail: 'Continuously unblock team bottlenecks and reclaim over 15 hours per team member every single week.',
    iconName: 'BarChart3',
  },
];

export const STATISTICS: StatItem[] = [
  {
    value: '99.4%',
    label: 'Task Execution Accuracy',
    sublabel: 'Across 12M+ orchestrated enterprise actions',
    growth: '+14.2% vs industry avg',
  },
  {
    value: '10x',
    label: 'Faster Sprint Workflows',
    sublabel: 'Average reduction in cycle time from spec to deploy',
    growth: 'Verified across 2,400+ sprints',
  },
  {
    value: '50k+',
    label: 'Active High-Growth Teams',
    sublabel: 'Empowered across 84 countries worldwide',
    growth: '140% YoY expansion',
  },
  {
    value: '4.2M+',
    label: 'Automated Hours Saved',
    sublabel: 'Eliminated manual status meetings & ticket updates',
    growth: 'Equivalent to 2,100 FTEs',
  },
];

export const USE_CASES: UseCaseItem[] = [
  {
    id: 'engineering',
    role: 'Engineering Teams',
    iconName: 'Code2',
    headline: 'Eliminate PR Bottlenecks & Accelerate Code Delivery',
    description: 'Give developers uninterrupted deep work time. NOVA autonomously generates PR summaries, performs initial lint and architectural safety audits, and balances code review workloads across the sprint.',
    bulletPoints: [
      'Automated pull request digests and dependency conflict warnings',
      'AI triage of bug reports with reproduction steps matched from logs',
      'Continuous CI/CD failure explanations and suggested one-click fixes',
      'Automated technical debt tracking synced with Jira and GitHub'
    ],
    stat: {
      value: '42%',
      label: 'Reduction in PR cycle turnaround time'
    },
    quote: {
      text: "NOVA felt like adding three senior engineering leads who silently handle all sprint triage and ticket upkeep.",
      author: "Alex Rivera, VP of Engineering at CloudScale"
    }
  },
  {
    id: 'product',
    role: 'Product & Design',
    iconName: 'Compass',
    headline: 'Transform Product Vision Into Crisp Specs in Minutes',
    description: 'Bridge the gap between customer feedback and developer backlogs. NOVA synthesizes customer interview transcripts, Figma specs, and roadmap goals into rigorous user stories with comprehensive acceptance criteria.',
    bulletPoints: [
      'Instant conversion of rough ideas into structured user stories',
      'Automated Figma frame linking to corresponding backlog tickets',
      'Cross-roadmap dependency tracking that updates in real-time',
      'Automated changelog generation and customer release broadcasts'
    ],
    stat: {
      value: '3.5x',
      label: 'Faster feature spec-to-backlog velocity'
    },
    quote: {
      text: "Our product managers no longer spend half their week in sync meetings. The clarity NOVA provides is unmatched.",
      author: "Priya Sharma, Head of Product at LinearFlow"
    }
  },
  {
    id: 'marketing',
    role: 'Marketing & Growth',
    iconName: 'Megaphone',
    headline: 'Orchestrate Omnichannel Campaigns Without the Chaos',
    description: 'Align marketing execution with product releases seamlessly. NOVA tracks release milestones, aligns creative asset deadlines, and prepares synchronized launch messaging across channels.',
    bulletPoints: [
      'Automated launch checklists synchronized with engineering deployments',
      'Centralized asset approval queues with intelligent priority alerts',
      'Cross-channel campaign timeline monitoring and bottleneck alerts',
      'Instant executive status reports for quarterly business reviews'
    ],
    stat: {
      value: '68%',
      label: 'Fewer missed launch milestones'
    },
    quote: {
      text: "Launch days used to be stressful firefights. With NOVA coordinating cross-functional milestones, our releases run like clockwork.",
      author: "Christian Meyer, CMO at Hyperion Dynamics"
    }
  },
  {
    id: 'operations',
    role: 'Operations & Leadership',
    iconName: 'Briefcase',
    headline: 'Unmatched Org Visibility With Zero Micromanagement',
    description: 'Gain deep, objective visibility into organizational health, team bandwidth, and delivery trajectories without interrupting creators with repetitive status inquiries.',
    bulletPoints: [
      'Real-time sprint burnup and predictive risk indicators',
      'Automated team capacity forecasting and resource rebalancing',
      'Enterprise compliance logging and audit-ready data lineage',
      'Custom KPI dashboards with instant natural-language querying'
    ],
    stat: {
      value: '15 hrs',
      label: 'Saved weekly per team manager'
    },
    quote: {
      text: "NOVA replaced 4 different reporting tools and gave us accurate velocity forecasts that our board can rely on.",
      author: "Elena Rostova, COO at ApexCorp"
    }
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'test-1',
    name: 'Sarah Lin',
    role: 'VP of Engineering',
    company: 'CloudScale Labs',
    content: 'NOVA transformed how our 180 engineers operate. The autonomous PR triage and sprint forecasting eliminated 70% of administrative overhead. Our team velocity jumped 45% in the first quarter alone.',
    avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80',
    rating: 5,
    highlightMetric: '+45% Sprint Velocity',
  },
  {
    id: 'test-2',
    name: 'Marcus Vance',
    role: 'Head of Product Delivery',
    company: 'LinearFlow Systems',
    content: 'The neural context memory is extraordinary. It connects discussions from Slack directly to tickets and Figma boards. We no longer lose critical context during handoffs, and our launch timelines are rock solid.',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    rating: 5,
    highlightMetric: '3x Faster Handoffs',
  },
  {
    id: 'test-3',
    name: 'Elena Rostova',
    role: 'Director of Global Operations',
    company: 'ApexCorp International',
    content: 'We manage multi-timezone teams across 4 continents. NOVA’s autonomous AI agents draft our standup rollups and flag delivery bottlenecks days before they impact clients. It is fundamentally indispensable.',
    avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
    rating: 5,
    highlightMetric: '15 hrs Saved / Week',
  },
  {
    id: 'test-4',
    name: 'David Chen',
    role: 'Chief Technology Officer',
    company: 'PulseAI Health',
    content: 'In healthcare technology, security and rigor are non-negotiable. NOVA gave us enterprise-grade governance and SOC2 compliance alongside cutting-edge AI reasoning. It has paid for itself tenfold.',
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
    rating: 5,
    highlightMetric: '100% Security Pass',
  },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Starter',
    tagline: 'Ideal for early-stage teams seeking AI-boosted agility and workflow clarity.',
    monthlyPrice: 19,
    annualPrice: 15,
    ctaText: 'Start Free 14-Day Trial',
    features: [
      'Up to 10 active team seats',
      'Autonomous task routing for GitHub & Jira',
      'Standard Neural Context Memory (30-day index)',
      'Pre-built sprint planning templates',
      'Standard community & email support',
      'Community integrations & webhooks',
    ],
    limitations: 'Limited to 5 AI agent workflows per workspace',
  },
  {
    id: 'pro',
    name: 'Pro',
    tagline: 'Best for fast-growing companies demanding end-to-end autonomous orchestration.',
    monthlyPrice: 49,
    annualPrice: 39,
    isPopular: true,
    ctaText: 'Start Free 14-Day Trial',
    features: [
      'Unlimited team members',
      'Advanced multi-agent orchestration engine',
      'Unlimited Neural Context Memory & semantic search',
      'Predictive sprint forecasting & burnout alerts',
      'Custom zero-code workflow builder',
      'Bi-directional sync with 40+ enterprise apps',
      'Priority 24/7 technical support with SLA',
      'Advanced audit trails & role-based permissions',
    ],
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    tagline: 'Tailored for large organizations requiring custom AI models, SLA, and strict compliance.',
    monthlyPrice: 119,
    annualPrice: 95,
    ctaText: 'Contact Enterprise Sales',
    features: [
      'Dedicated private cloud or VPC deployment',
      'Custom fine-tuned LLM agents for your domain',
      'Zero Data Retention agreement & air-gapped security',
      'Custom SSO (Okta, SAML, Azure AD) & SCIM',
      'Dedicated Customer Success Manager & Solutions Architect',
      '99.99% uptime SLA with financial guarantees',
      'Custom integrations built by NOVA engineers',
      'Executive dashboard & custom compliance exports',
    ],
  },
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'General',
    question: 'What makes NOVA different from generic AI chat assistants?',
    answer: 'Generic AI chatbots require you to manually copy-paste prompt information and only answer isolated questions. NOVA is an autonomous productivity platform that connects directly to your team’s tools (GitHub, Linear, Slack, Figma, Jira). It builds a persistent semantic graph of your project, proactively detects blockers, updates tickets, and orchestrates workflows across team members without manual prompting.',
  },
  {
    id: 'faq-2',
    category: 'Security',
    question: 'How does NOVA ensure our proprietary code and enterprise data remains private?',
    answer: 'Security is at the foundation of NOVA. We are SOC2 Type II certified and HIPAA compliant. We have strict zero-data-retention agreements with our foundation model providers, meaning your private code, discussions, and documents are never used for training public models. All data is encrypted with AES-256 at rest and TLS 1.3 in transit.',
  },
  {
    id: 'faq-3',
    category: 'Integrations',
    question: 'Which tools and platforms does NOVA integrate with out of the box?',
    answer: 'NOVA supports native, one-click integrations with GitHub, GitLab, Jira, Linear, Slack, Discord, Notion, Figma, Asana, Google Workspace, and Microsoft Teams. We also provide full GraphQL and REST APIs, along with webhooks, so you can connect internal proprietary tooling seamlessly.',
  },
  {
    id: 'faq-4',
    category: 'Configuration',
    question: 'Can I customize the autonomous AI agents for our team’s specific guidelines?',
    answer: 'Yes! NOVA includes a visual, zero-code agent builder where you can define custom review rules, acceptance criteria formats, escalation policies, and tone preferences. You can also specify human-in-the-loop approval thresholds for sensitive actions like PR merges or status rollbacks.',
  },
  {
    id: 'faq-5',
    category: 'Billing',
    question: 'Is there a free trial and what happens when the 14 days end?',
    answer: 'Every plan includes a risk-free 14-day trial with full feature access. No credit card is required to begin. If you decide not to upgrade at the end of your trial, your workspace smoothly transitions to our free community tier with essential features preserved, and your data remains completely secure.',
  },
  {
    id: 'faq-6',
    category: 'Implementation',
    question: 'How long does implementation and team onboarding typically take?',
    answer: 'Most teams are fully up and running within 15 minutes. Once you authenticate your existing workspace tools, NOVA automatically indexes project history in the background. Your team can immediately interact with autonomous agents and automated workflows without any specialized retraining.',
  },
];
