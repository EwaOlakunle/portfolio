import React, { useState, useEffect, useRef } from 'react';
import {
  Terminal,
  Shield,
  ShieldAlert,
  Cpu,
  Lock,
  Search,
  Filter,
  ExternalLink,
  Copy,
  Check,
  ChevronRight,
  X,
  Server,
  Award,
  Mail,
  FileText,
  Key,
  Layers,
  Menu,
  Activity,
  Radio,
  Code2,
  Download,
  Send,
  CheckCircle2,
  Network,
  Upload,
  Camera,
  User,
  Briefcase,
  ArrowRight,
  Trash2,
  Image as ImageIcon,
  Calendar,
  MapPin,
  Users,
  Globe,
  Sparkles,
  Music,
  BookOpen,
  Heart,
  Coffee
} from 'lucide-react';

const Github = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Linkedin = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

// ==========================================
// PORTFOLIO DATA & CONTENT CONSTANTS
// ==========================================
// Update these placeholders with your real links and photo paths when moving to VS Code
const PROFILE_LINKS = {
  githubUrl: 'https://github.com/EwaOlakunle',
  githubHandle: '@EwaOlakunle',
  linkedinUrl: 'https://linkedin.com/in/ewaoluwa-olakunle',
  linkedinHandle: 'Ewaoluwa Olakunle',
  email: 'ewaoluwaolakunle@gmail.com',
  portraitImage: '/images/ewa-portrait.jpg'
};

const ROLES_TYPEWRITER = [
  'an IT & Data Coordinator',
  'an Aspiring Cybersecurity Analyst',
  'a Threat Hunter',
  'a Python Tutor',
  'BSCS Co-Founder & Co-President',
  'A Digital Forensic Enthusiast',
  'an Academic Teaching Assistant',
  'CSS Senior Representative'
];

const TELEMETRY_PACKETS = [
  {
    id: 'WAZUH-1087',
    alert: 'MITRE T1087.001 // Local Account Discovery',
    timestamp: '2026-04-14T19:42:11Z',
    src: '192.168.8.114 (WIN11-LAB-VM)',
    dst: '192.168.8.10 (WAZUH-DOCKER-SRV)',
    hint: 'Click "Decode Base64" to inspect X-Lab-Telemetry.',
    flag: 'FLAG{w4zuh_s1em_t1087_d3t3ct3d}',
    rawHeader: `EventID: 1 (Sysmon ProcessCreate) | RuleID: 100210
Image: C:\\Windows\\System32\\net1.exe
CommandLine: net user /domain
ParentImage: C:\\Windows\\System32\\WindowsPowerShell\\v1.0\\powershell.exe
X-Lab-Telemetry: RkxBR3t3NHp1aF9zMWVtX3QxMDg3X2QzdDNjdDNkfQ==`
  },
  {
    id: 'WAZUH-FIM02',
    alert: 'Syscheck FIM // EICAR Signature & VT Match',
    timestamp: '2026-04-14T20:08:45Z',
    src: '192.168.8.114 (WIN11-LAB-VM)',
    dst: 'VirusTotal API v3 Integration',
    hint: 'Click "Decode ROT13" to read X-Analyst-Note.',
    flag: 'FLAG{m1n1_pc_s0c_analys1s_pro}',
    rawHeader: `RuleID: 87105 | Level: 12 (VirusTotal Malicious Engine Hit: 64/70)
File: C:\\Users\\LabUser\\Downloads\\eicar_test.com
SHA256: 275a021bbfb6489e54d471899f7db9d1663fc695ec2fe2a2c4538aabf651fd0f
X-Analyst-Note: SYNT{z1a1_cp_f0p_nanylf1f_ceb}`
  }
];

const EXPERIENCE_TIMELINE = [
  {
    period: 'JAN 2026 - PRESENT',
    role: 'IT and Data Coordinator',
    org: 'Assisted Living Southwestern Ontario (ALSO)',
    summary:
      'Earned a promotion in September 2026 following 8 months as a Student IT Assistant; leading endpoint administration, data integrity workflows, and accessible technology support.',
    highlights: [
      'Coordinate IT infrastructure, user provisioning, and secure data management across organizational teams.',
      'Champion accessible workstation setups and inclusive digital tools for staff and clients.',
      'Streamline hardware/software lifecycle tracking and frontline technical troubleshooting.'
    ]
  },
  {
    period: 'SEPT 2026 - PRESENT', // e.g., SEPT 2026 – DEC 2026
    role: 'Teaching Assistant — COMP 2560 (System Programming)',
    org: 'University of Windsor',
    summary: 'Supported 60+ undergraduate students in UNIX/Linux system calls, C programming, process management, and memory architecture.',
    highlights: [
      'Guided students through C debugging, pointer management, and POSIX process/file I/O labs.',
      'Evaluated system-level programming assignments and provided detailed technical feedback.',
      'Reinforced foundational OS and low-level security concepts during weekly office hours.'
    ]
  },
  {
    period: 'JUNE 2026 – PRESENT', // e.g., SEPT 2025 – PRESENT
    role: 'Python Tutor (On-Call)',
    org: 'Independent Tutoring • High School Computer Science',
    summary: 'Delivered on-call, individualized Python programming instruction and mentorship for high school students.',
    highlights: [
      'Teach core Python syntax, control flow, functions, and introductory problem-solving tailored to high school curricula.',
      'Adapt technical concepts into engaging, accessible lessons for diverse learning paces.',
      'Guide students through live code debugging, logic building, and foundational computer science projects.'
    ]
  },
  {
    period: 'JAN 2026 - APR 2026', // e.g., JAN 2026 – APR 2026
    role: 'Teaching Assistant — COMP 2120 (Object-Oriented Programming Using Java)',
    org: 'University of Windsor',
    summary: 'Mentored 60+ students in Java software design, inheritance, polymorphism, and clean coding practices.',
    highlights: [
      'Led lab sessions and debugged Java object-oriented architectures and exception handling.',
      'Graded programming labs and exams while maintaining consistent rubric standards.',
      'Coached students on modular design patterns and problem-solving workflows.'
    ]
  },
   {
    period: 'MAY 2025 - AUG 2025',
    role: 'Customer Contact Service Representative',
    org: 'GreenShield Canada',
    summary:
      'Delivered responsive, empathetic support in a regulated health-benefits environment while protecting sensitive member information.',
    highlights: [
      'Resolved high-volume client inquiries with strict adherence to privacy and confidentiality standards.',
      'Translated complex policy and portal workflows into clear, accessible guidance for diverse members.',
      'Built calm under-pressure triage and incident documentation habits.'
    ]
  },
  {
    period: 'JAN 2025 - APR 2025', // e.g., SEPT 2025 – DEC 2025
    role: 'Teaching Assistant — COMP 1047 (Computer Concepts for End Users)',
    org: 'University of Windsor',
    summary: 'Assisted 300+ students with foundational computing, productivity suites, and digital literacy.',
    highlights: [
      'Facilitated hands-on lab troubleshooting and answered technical questions in real time.',
      'Provided clear, accessible explanations for students from diverse academic backgrounds.',
      'Assessed coursework and helped ensure smooth lab operations throughout the semester.'
    ]
  }
 
];

const LEADERSHIP_MILESTONES = [
  {
    period: 'FOUNDER & EXECUTIVE',
    role: 'Co-Founder, Co-President & Creative Director',
    org: 'Black Students in Computer Science (BSCS) — UWindsor',
    description:
      'Built BSCS from the ground up; leading executive operations, visual branding, automated onboarding workflows, industry panels, technical workshops, and community wellness events.'
  },
  {
    period: 'TECH COMMUNITY & OUTREACH',
    role: 'Outreach Coordinator',
    org: 'ColorStack • Campus & Community Chapter',
    description:
      'Drive student outreach, community engagement, and peer connection initiatives supporting Black and Latinx computer science students in navigating technical careers.Drive student outreach, community engagement, and peer connection initiatives supporting Black and Latinx computer science students in navigating technical careers.'
  },
  {
    period: 'STUDENT GOVERNANCE',
    role: 'Senior Representative (3rd & 4th Year)',
    org: 'Computer Science Society (CSS) — UWindsor',
    description:
      'Representing upper-year Computer Science students on the CSS executive board, advocating for curriculum feedback, career readiness programming, and inclusive student spaces.'
  },
  {
    period: 'YOUTH STEM OUTREACH',
    role: 'Volunteer Workshop Facilitator',
    org: 'Black Boys Code',
    description:
      'Volunteered across weekend sessions facilitating hands-on robotics and introductory programming workshops to spark early interest in computer science among youth.'
  },
  {
    period: 'PEER MENTORSHIP',
    role: 'Suitcase to Backpack Mentor • Nov 2025 – Jan 2026 ',
    org: 'International Student Center',
    description:
      'Volunteered across weekend sessions facilitating hands-on robotics and introductory programming workshops to spark early interest in computer science among youth.'
  },
  {
    period: 'COMMUNITY & DIGITAL SAFETY',
    role: 'Digital Literacy & Online Safety Volunteer',
    org: 'Active Care Response Team (Bridging Generations) • October 2026',
    description:
      'Assisted seniors with device setup, account configuration, computer settings, and practical online safety habits during community outreach sessions.'
  }
];

const CERT_ROADMAP = [
  {
    code: 'ISC² CC',
    name: 'Certified in Cybersecurity (CC)',
    status: 'CERTIFIED',
    progress: 100,
    detail: 'ISC² • Issued Mar 2026 – Expires Mar 2029',
    credentialUrl: 'https://www.credly.com/badges/4a870e06-8d79-4024-8717-2dbbadf0cb6f'
  },
  {
    code: 'CISCO CYBER',
    name: 'Introduction to Cybersecurity',
    status: 'CERTIFIED',
    progress: 100,
    detail: 'Cisco • Issued Oct 2025 (ID: a73ad44e-627f-45af-829a-280ccc7e8a34)',
    credentialUrl: 'https://www.credly.com/badges/a73ad44e-627f-45af-829a-280ccc7e8a34'
  },
  {
    code: 'UWINDSOR',
    name: "Dean's Recognition. Faculty of Science",
    status: 'AWARDED NOV 2025',
    progress: 100,
    detail: 'Honored by the University of Windsor Faculty of Science for High academic Achievement.'
  },
  {
    code: 'SEC+ / BTL1',
    name: 'CompTIA Security+ & Blue Team Level 1',
    status: 'IN PROGRESS // 2026–2027',
    progress: 65,
    detail: 'Advancing practical SOC triage, SIEM detection engineering, and incident handling skills.'
  }
];

const CAPABILITY_MATRIX = [
  {
    category: 'SOC Detection & Threat Monitoring',
    subtitle: 'SIEM engineering, endpoint telemetry & MITRE ATT&CK mapping',
    icon: ShieldAlert,
    skills: [
      { name: 'Wazuh SIEM (Docker Deployment & Custom Rules)', level: 92 },
      { name: 'Microsoft Sysmon & PowerShell Script Block Logging', level: 90 },
      { name: 'MITRE ATT&CK Detection & VirusTotal API Triage', level: 88 },
      { name: 'Network Segmentation & Travel Router VLAN Isolation', level: 86 }
    ]
  },
  {
    category: 'Systems & Software Engineering',
    subtitle: 'Low-level networking, concurrent servers & desktop applications',
    icon: Code2,
    skills: [
      { name: 'Python 3 (Raw TCP Sockets & Multithreading)', level: 90 },
      { name: 'Python Tutoring & Code Mentorship', level: 93 },
      { name: 'Java & JavaFX (FXML Controllers & SQLite)', level: 88 },
      { name: 'Unix/Linux System Programming (C, Processes, IPC)', level: 85 },
      { name: 'Git, GitHub Workflows & Bash Scripting', level: 91 }
    ]
  },
  {
    category: 'IT Operations & Workflow Automation',
    subtitle: 'Enterprise coordination, data hygiene & no-code automation',
    icon: Cpu,
    skills: [
      { name: 'IT & Data Coordination & Endpoint Administration', level: 93 },
      { name: 'Microsoft Power Automate & Microsoft Forms Pipelines', level: 90 },
      { name: 'Technical Documentation & Standard Operating Procedures', level: 92 },
      { name: 'Cross-Functional Incident Triage & Stakeholder Support', level: 94 }
    ]
  },
  {
    category: 'Accessibility, Equity & Leadership',
    subtitle: 'Inclusive design advocacy, public speaking & community building',
    icon: Globe,
    skills: [
      { name: 'Tech Diversity & Equity Advocacy', level: 95 },
      { name: 'Technical Workshop Facilitation & Academic Teaching', level: 94 },
      { name: 'Creative Direction, Branding & Event Production', level: 92 },
      { name: 'Team Leadership & Collaboration', level: 88 }
    ]
  }
];

const LABS_DATA = [
  {
    id: 'wazuh-soc-lab',
    title: 'Wazuh SIEM & Threat Emulation Home Lab',
    category: 'Blue Team / Detection',
    complexity: 'SOC Architecture',
    date: '2026',
    summary:
      'Built and deployed a physically isolated SOC detection lab featuring a Dockerized Wazuh server on Ubuntu and a Windows 11 target VM on a Mini PC, segmented via a GL.iNet GL-SFT1200 travel router.',
    highlights: [
      'Configured Microsoft Sysmon, PowerShell Script Block Logging, and real-time VirusTotal API file-hash enrichment.',
      'Executed and validated live alert detections for MITRE ATT&CK T1087.001 (Local Account Discovery) and EICAR FIM triggers.',
      'Physically segmented lab traffic from home networks using a dedicated GL.iNet GL-SFT1200 travel router.'
    ],
    tags: ['Wazuh SIEM', 'Docker', 'Sysmon', 'Windows 11', 'GL.iNet', 'VirusTotal API', 'MITRE ATT&CK'],
    github: 'https://github.com',
    blueprint: {
      objective:
        'Replicate an enterprise SOC telemetry pipeline on compact Mini PC hardware with strict physical network isolation so live adversary techniques can be safely emulated and detected.',
      topology: [
        {
          name: 'GL.iNet GL-SFT1200',
          ip: '192.168.8.1/24',
          role: 'Hardware firewall & isolated lab subnet gateway'
        },
        {
          name: 'Ubuntu Host + Docker',
          ip: '192.168.8.10',
          role: 'Runs Wazuh Manager, Indexer & Dashboard containers'
        },
        {
          name: 'Windows 11 Victim VM',
          ip: '192.168.8.114',
          role: 'Sysmon + PowerShell Script Block Logging + Wazuh Agent'
        },
        {
          name: 'VirusTotal API v3',
          ip: 'HTTPS Egress',
          role: 'Automated hash reputation lookup on FIM events'
        }
      ],
      lessons: [
        'Default Windows Event Logs miss granular process-creation context; pairing Sysmon with Wazuh custom XML rules dramatically improves signal-to-noise.',
        'Isolating malware/EICAR testing behind a dedicated travel router prevents accidental lateral noise on personal networks.',
        'Tuning FIM directories prevents alert fatigue while keeping high-value download and system folders monitored.'
      ]
    }
  },
  {
    id: 'tcp-chatroom-server',
    title: 'Multi-Client Concurrent Chatroom Server',
    category: 'Systems & Tooling',
    complexity: 'Network Engineering',
    date: '2025',
    summary:
      'Engineered a multi-client chatroom server and CLI client from scratch in Python 3 using raw TCP sockets, multithreading, and a custom control-code protocol.',
    highlights: [
      'Handled concurrent client connections safely using Python threading and synchronized client registries.',
      'Designed custom control codes for session registration, private messaging, active user listings, and graceful disconnects.',
      'Built resilient socket exception handling to prevent single-client drops from crashing broadcast threads.'
    ],
    tags: ['Python 3', 'Raw TCP Sockets', 'Multithreading', 'Custom Protocol', 'Concurrency'],
    github: 'https://github.com',
    blueprint: {
      objective:
        'Understand transport-layer framing, concurrency synchronization, and custom application protocols without relying on high-level web frameworks.',
      topology: [
        {
          name: 'TCP Listener Socket',
          ip: '0.0.0.0:5555',
          role: 'Accepts incoming client handshakes on main thread'
        },
        {
          name: 'Worker Thread Pool',
          ip: 'Per-Client Thread',
          role: 'Parses control headers & broadcasts payloads'
        },
        {
          name: 'Thread-Safe State',
          ip: 'Mutex Lock',
          role: 'Guards active username-to-socket lookup table'
        },
        {
          name: 'CLI Client Nodes',
          ip: 'TCP Streams',
          role: 'Dual send/receive threads for non-blocking I/O'
        }
      ],
      lessons: [
        'TCP is a byte stream rather than a message stream—explicit framing and control codes are essential to prevent message coalescing.',
        'Proper mutex locking around shared socket dictionaries eliminates race conditions during sudden client disconnects.'
      ]
    }
  },
  {
    id: 'clinic-booking-javafx',
    title: 'Clinic Appointment Booking System (COMP 3220)',
    category: 'Systems & Tooling',
    complexity: 'Full-Stack Desktop',
    date: '2025',
    summary:
      'Designed and built a JavaFX and SQLite desktop healthcare scheduling application featuring role-based login authentication, FXML views, and relational persistence.',
    highlights: [
      'Architected clean separation between FXML UI layouts, JavaFX controller logic, and SQLite DAO persistence.',
      'Implemented authenticated login interfaces and input validation for patient and clinic staff workflows.',
      'Structured relational SQLite schemas to prevent double-booked appointment slots.'
    ],
    tags: ['Java', 'JavaFX', 'FXML', 'SQLite', 'MVC Architecture', 'COMP 3037'],
    github: 'https://github.com',
    blueprint: {
      objective:
        'Deliver an intuitive, reliable desktop appointment management system with clean MVC separation and local SQLite data integrity.',
      topology: [
        {
          name: 'Auth & Login View',
          ip: 'LoginController.java',
          role: 'Credential verification & session routing'
        },
        {
          name: 'Scheduling Dashboard',
          ip: 'FXML Views',
          role: 'Accessible form controls & appointment table views'
        },
        {
          name: 'Validation Layer',
          ip: 'Service Logic',
          role: 'Conflict detection & parameterized query prep'
        },
        {
          name: 'SQLite Database',
          ip: 'clinic.db',
          role: 'ACID-compliant local storage for users & bookings'
        }
      ],
      lessons: [
        'Using parameterized JDBC prepared statements eliminates SQL injection risks while simplifying date/time queries.',
        'Consistent keyboard navigation and clear error feedback make desktop forms significantly more accessible.'
      ]
    }
  },
  {
    id: 'seed-morris-worm',
    title: 'SEED Security Lab — Morris Worm Project (COMP 3670)',
    category: 'Red Team / OffSec',
    complexity: 'Malware & Network Analysis',
    date: '2025',
    summary:
      'Completed an in-depth offensive and defensive analysis of self-propagating worm mechanics in an isolated SEED Ubuntu container environment.',
    highlights: [
      'Analyzed binary exploitation vectors, remote shell propagation, and exponential network spread behavior.',
      'Observed container-level process trees and network connections during controlled worm execution.',
      'Documented containment strategies, network segmentation rules, and patch remediation controls.'
    ],
    tags: ['SEED Labs', 'Linux Security', 'Worm Propagation', 'Network Defense', 'COMP 3670'],
    github: 'https://github.com',
    blueprint: {
      objective:
        'Study historical self-propagating worm architecture in a sandboxed multi-node topology to design effective containment and firewall countermeasures.',
      topology: [
        {
          name: 'Patient Zero Node',
          ip: '10.9.0.5',
          role: 'Initial payload execution & target subnet scanner'
        },
        {
          name: 'Docker Bridge Net',
          ip: '10.9.0.0/24',
          role: 'Simulated internal enterprise host segment'
        },
        {
          name: 'Vulnerable Targets',
          ip: '10.9.0.6–.9',
          role: 'Exposed service endpoints demonstrating lateral spread'
        },
        {
          name: 'Packet & Process Monitor',
          ip: 'tcpdump / ps',
          role: 'Telemetry capture for propagation rate & kill-switch design'
        }
      ],
      lessons: [
        'Without egress filtering or host-based process limits, self-propagating code saturates internal subnets within seconds.',
        'Defense-in-depth—combining input bounds checking, least-privilege service accounts, and micro-segmentation—halts lateral movement.'
      ]
    }
  },
  {
    id: 'bscs-power-automate',
    title: 'Automated Club Onboarding & Feedback System',
    category: 'Automation & Ops',
    complexity: 'Workflow Engineering',
    date: '2026',
    summary:
      'Built and deployed end-to-end automated member onboarding and event feedback pipelines using Microsoft Forms and Power Automate for BSCS.',
    highlights: [
      'Eliminated manual executive data entry by automatically routing Microsoft Forms submissions into structured rosters.',
      'Triggered instant, branded welcome communications and role-specific resource links upon member sign-up.',
      'Aggregated post-event feedback metrics to guide future BSCS workshops and industry panels.'
    ],
    tags: ['Microsoft Power Automate', 'Microsoft Forms', 'Workflow Automation', 'BSCS Ops'],
    github: 'https://github.com',
    blueprint: {
      objective:
        'Scale student organization operations so every new BSCS member receives immediate onboarding resources without manual executive bottlenecks.',
      topology: [
        {
          name: 'Microsoft Forms',
          ip: 'Trigger Webhook',
          role: 'Captures member intake & post-event survey responses'
        },
        {
          name: 'Power Automate Flow',
          ip: 'Cloud Logic',
          role: 'Validates fields, branches by student year & formats data'
        },
        {
          name: 'Central Roster Sheet',
          ip: 'Structured Table',
          role: 'Deduplicates entries & logs engagement metrics'
        },
        {
          name: 'Automated Dispatch',
          ip: 'Email / Teams',
          role: 'Sends personalized welcome packet & executive alerts'
        }
      ],
      lessons: [
        'Automating repetitive onboarding tasks freed executive bandwidth to focus on high-impact student workshops and industry partnerships.',
        'Structured feedback loops make student programming measurably more responsive to member needs.'
      ]
    }
  }
];

const WRITEUPS_DATA = [
  {
    id: 'writeup-wazuh-t1087',
    title: 'Detecting MITRE T1087.001 & EICAR FIM Alerts in a Mini PC Wazuh Lab',
    platform: 'Home Lab',
    category: 'Blue Team / SIEM',
    difficulty: 'Applied SOC',
    date: 'April 2026',
    summary:
      'Step-by-step engineering log covering Dockerized Wazuh deployment, GL.iNet travel router isolation, Sysmon telemetry ingestion, and live alert verification.',
    tags: ['Wazuh', 'Sysmon', 'T1087.001', 'VirusTotal', 'PowerShell'],
    steps: [
      {
        phase: '01 // Hardware Isolation & Wazuh Docker Stack',
        content:
          'Placed the Mini PC lab behind a dedicated GL.iNet GL-SFT1200 travel router to isolate emulated adversary traffic. Deployed Wazuh Manager, Indexer, and Dashboard via Docker Compose on Ubuntu.',
        command: 'docker compose -f single-node.yml up -d'
      },
      {
        phase: '02 // Endpoint Telemetry & Sysmon Tuning',
        content:
          'Installed the Wazuh agent on the Windows 11 VM alongside SwiftOnSecurity Sysmon config and enabled PowerShell Script Block Logging (Event ID 4104) to capture full command-line arguments.',
        command: 'sysmon64.exe -accepteula -i sysmonconfig-export.xml'
      },
      {
        phase: '03 // Adversary Emulation & VirusTotal Enrichment',
        content:
          'Executed local account discovery commands (MITRE ATT&CK T1087.001) and dropped an EICAR test file into a FIM-monitored directory, confirming real-time Wazuh rule triggers and VirusTotal API hash correlation.',
        command: 'net user && Get-LocalUser | Select-Object Name,Enabled'
      }
    ],
    remediation:
      'Enforce PowerShell Constrained Language Mode for non-admin users, restrict local group enumeration permissions, and alert on anomalous net.exe/net1.exe child processes spawned by scripting engines.'
  },
  {
    id: 'writeup-morris-worm',
    title: 'Containment & Propagation Analysis: SEED Morris Worm Lab',
    platform: 'SEED Labs',
    category: 'Network Defense',
    difficulty: 'Intermediate',
    date: 'November 2025',
    summary:
      'Observing exponential worm propagation across containerized Unix hosts and implementing network-level containment controls.',
    tags: ['Morris Worm', 'SEED Labs', 'Network Security', 'Linux'],
    steps: [
      {
        phase: '01 // Topology Mapping & Initial Foothold',
        content:
          'Enumerated active hosts across the virtualized 10.9.0.0/24 subnet and analyzed how the worm payload checks for existing infection markers before spawning propagation threads.',
        command: 'ps aux | grep worm && netstat -tulnp'
      },
      {
        phase: '02 // Traffic & Lateral Spread Observation',
        content:
          'Captured inter-container TCP connection bursts to measure how rapidly unsegmented hosts become saturated when vulnerable services remain exposed.',
        command: 'tcpdump -i eth0 -nn port not 22'
      }
    ],
    remediation:
      'Apply strict egress firewall rules between internal segments, patch legacy buffer-overflow-prone network daemons, and enforce per-user process limits (ulimit) to prevent fork-style resource exhaustion.'
  },
  {
    id: 'writeup-tcp-protocol',
    title: 'Designing Framing & Concurrency Controls for a Raw TCP Chat Server',
    platform: 'Engineering Note',
    category: 'Systems Programming',
    difficulty: 'Systems',
    date: 'October 2025',
    summary:
      'Lessons learned building a multi-threaded Python 3 TCP socket server with custom control codes and race-condition-free client state management.',
    tags: ['Python 3', 'TCP Sockets', 'Multithreading', 'Concurrency'],
    steps: [
      {
        phase: '01 // Custom Control-Code Framing',
        content:
          'Defined explicit protocol prefixes (JOIN, MSG, DM, LIST, QUIT) so the server can distinguish administrative commands from standard chat payloads over raw byte streams.',
        command: 'python3 server.py --host 127.0.0.1 --port 5555'
      },
      {
        phase: '02 // Thread-Safe Broadcast & Graceful Teardown',
        content:
          'Wrapped shared client socket dictionaries in threading.Lock() blocks to prevent dictionary-size-changed runtime errors when clients abruptly close their terminal.',
        command: 'python3 client.py --username ewa --port 5555'
      }
    ],
    remediation:
      'Always validate payload lengths before buffer allocation, enforce per-IP connection rate limits, and wrap socket reads in timeouts to defend against slow-read denial-of-service conditions.'
  }
];

const COMMUNITY_EVENTS_GALLERY = [
  {
    id: 'careers-panel-2026',
    title: 'Careers Beyond Software Engineering',
    tag: 'INDUSTRY PANEL // BSCS',
    date: 'March 2026',
    location: 'Alumni Auditorium, UWindsor',
    image: '', // e.g., '/images/careers-panel.jpg'
    description:
      'Organized and hosted an industry panel spotlighting careers in cybersecurity, IT coordination, product management, and data analytics for Computer Science students.'
  },
  {
    id: 'coder-to-contributor-2026',
    title: 'From Coder to Contributor',
    tag: 'TECHNICAL WORKSHOP',
    date: 'January 2026',
    location: 'University of Windsor',
    image: '', // e.g., '/images/coder-to-contributor.jpg'
    description:
      'Led a hands-on Git & GitHub workshop walking students through branching, pull requests, merge conflict resolution, and open-source collaboration.'
  },
  {
    id: 'legacy-screening-2026',
    title: 'Legacy Screening: Hidden Figures',
    tag: 'COMMUNITY EVENT',
    date: 'February 2026',
    location: 'University of Windsor',
    image: '', // e.g., '/images/legacy-screening.jpg'
    description:
      'Hosted a Black History Month community screening and discussion celebrating Black pioneers in mathematics, computing, and aerospace engineering.'
  },
  {
    id: 'cyberrunners-5k-2026',
    title: 'BSCS x CyberRunners 5K',
    tag: 'WELLNESS & COMMUNITY',
    date: 'October 2026',
    location: 'Windsor Riverfront',
    image: '', // e.g., '/images/cyberrunners-5k.jpg'
    description:
      'Organized a 5K community group run along the Windsor Riverfront bringing tech students together outside the lab for wellness and connection.'
  },
  {
    id: 'involvement-fair-hud-2026',
    title: 'UWindsor Involvement Fair — 8-Bit Arcade HUD',
    tag: 'CREATIVE DIRECTION',
    date: 'September 2026',
    location: 'UWindsor Campus',
    image: '', // e.g., '/images/involvement-fair-hud.jpg'
    description:
      'Designed and handcrafted a custom 8-bit arcade HUD display board for BSCS campus outreach alongside ongoing peer drop-in mentorship sessions.'
  },
  {
    id: 'bscs-101-survival',
    title: 'BSCS 101: How to Survive Your CS Degree',
    tag: 'ORIENTATION & MENTORSHIP',
    date: 'Academic Term',
    location: 'University of Windsor',
    image: '', // e.g., '/images/bscs-101.jpg'
    description:
      'Led orientation and academic survival sessions helping incoming and underclassmen CS students master course planning, labs, and campus resources.'
  }
];

// Customize these cards with your personal hobbies, playlists, shows, or random facts!
const OFF_THE_CLOCK_ACTIVITIES = [
  {
    id: 'running-wellness',
    tag: 'MOVEMENT & WELLNESS',
    title: 'Riverfront 5Ks & Outdoor Runs',
    subtitle: 'BSCS x CyberRunners & Solo Miles',
    image: '', // Optional: '/images/riverfront-run.jpg'
    description:
      'Stepping away from screens for fresh air and 5K runs along the Windsor Riverfront—proving the best debugging happens outdoors.',
    highlight: 'Favorite route: Windsor Riverfront trail at golden hour'
  },
  {
    id: 'creative-craft',
    tag: 'CREATIVE DIRECTION',
    title: 'Visual Design, Branding & Retro Craft',
    subtitle: '8-Bit Arcade Boards & Digital Aesthetics',
    image: '', // Optional: '/images/arcade-craft.jpg'
    description:
      'Bringing ideas to life visually—from designing brand identities for BSCS to handcrafting an 8-bit arcade HUD display board from scratch.',
    highlight: 'Always down for a DIY craft or aesthetic moodboard'
  },
  {
    id: 'languages-culture',
    tag: 'LANGUAGES & CURIOSITY',
    title: 'Spanish & Cultural Storytelling',
    subtitle: 'SPAN 1020 (92%) • Movies & Books',
    image: '', // Optional: '/images/spanish-culture.jpg'
    description:
      'Practicing Spanish beyond the classroom and hosting community film nights like Hidden Figures that celebrate real stories and history.',
    highlight: 'Currently practicing conversational Spanish'
  },
  {
    id: 'personal-slot',
    tag: 'YOUR HOBBY SLOT // EDIT ME',
    title: 'Music, Shows & Recharge Rituals',
    subtitle: 'Swap this card with your favorite pastime!',
    image: '', // Optional: '/images/hobby-snapshot.jpg'
    description:
      'Whether it is curating playlists, trying new food spots around Windsor, gaming, or binge-watching a great series—this space is yours to customize.',
    highlight: 'Edit OFF_THE_CLOCK_ACTIVITIES in App.jsx anytime'
  }
];

const CURRENT_ROTATION = [
  { label: 'ON REPEAT', value: 'Afrobeats, R&B & late-night lo-fi focus playlists', icon: Music },
  { label: 'WATCHING / READING', value: 'Sci-fi, tech documentaries & Hidden Figures', icon: BookOpen },
  { label: 'GO-TO RECHARGE', value: 'Iced drinks, riverfront walks & good company', icon: Coffee }
];

const PGP_PUBLIC_KEY = `-----BEGIN PGP PUBLIC KEY BLOCK-----
Version: OpenPGP.js v5.11.0
Comment: Ewa // ewa@sec-lab.io (0x8F4A2C91)

xsFNBF+9x2UBEADK8vP3mQ9rL2nX7wT4yB6cH1jF5gD8sA0pE3uI9oP2lK7mN4bV
1cX6zZ8qW2eR5tY7uI9oP0aS3dF6gH8jK1lZ4xC7vB9nM2mQ5wE8rT1yU4iO7pA
9sD2fG5hJ8kL1zX4cV7bN0mQ3wE6rT9yU2iO5pA8sD1fG4hJ7kL0zX3cV6bN9mQ
2wE5rT8yU1iO4pA7sD0fG3hJ6kL9zX2cV5bN8mQ1wE4rT7yU0iO3pA6sD9fG2hJ
5kL8zX1cV4bN7mQ0wE3rT6yU9iO2pA5sD8fG1hJ4kL7zX0cV3bN6mQ9wE2rT5yU
=8F4A
-----END PGP PUBLIC KEY BLOCK-----`;

// ==========================================
// MAIN COMPONENT
// ==========================================

export default function App() {
  // Multi-Page Navigation State ('home' | 'experience' | 'involvement' | 'labs' | 'writeups' | 'gallery' | 'offclock' | 'contact')
  const [currentPage, setCurrentPage] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [pgpModalOpen, setPgpModalOpen] = useState(false);

  // Typewriter Role State
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedRole, setDisplayedRole] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Subtle Mouse-Tracking Ambient Glow Position
  const [mousePos, setMousePos] = useState({ x: -500, y: -500 });

  // Threat Console Tabs ('cli' | 'ctf')
  const [consoleTab, setConsoleTab] = useState('cli');

  // Interactive CLI State
  const [cliInput, setCliInput] = useState('');
  const [cliHistory, setCliHistory] = useState([
    {
      type: 'system',
      text: 'ewa-sec-tty v3.2 initialized // type "help" or click a quick-command chip below.'
    },
    { type: 'command', text: 'whoami' },
    {
      type: 'output',
      text: 'ewa :: ISC² CC Certified | IT & Data Coordinator (ALSO) | BSCS Co-President\nfocus :: SOC Detection (Wazuh/Sysmon), Inclusive Tech & UWindsor CS Leadership'
    }
  ]);
  const cliEndRef = useRef(null);
  const cliInputRef = useRef(null);

  // Mini-CTF Telemetry Challenge State
  const [selectedPacketIdx, setSelectedPacketIdx] = useState(0);
  const [decodedPreview, setDecodedPreview] = useState('');
  const [flagAttempt, setFlagAttempt] = useState('');
  const [ctfFeedback, setCtfFeedback] = useState(null);
  const [solvedPackets, setSolvedPackets] = useState({});

  // Labs & Writeups Filters & Modals
  const [labFilter, setLabFilter] = useState('All Labs');
  const [selectedLab, setSelectedLab] = useState(null);

  const [writeupPlatform, setWriteupPlatform] = useState('All');
  const [writeupSearch, setWriteupSearch] = useState('');
  const [selectedWriteup, setSelectedWriteup] = useState(null);

  // Copy state
  const [copiedId, setCopiedId] = useState(null);

  // Direct Message Contact Form State
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [dispatchSubject, setDispatchSubject] = useState('Cybersecurity / SOC Role Inquiry');
  const [dispatchBody, setDispatchBody] = useState('');
  const [dispatchSent, setDispatchSent] = useState(false);

  // Load bespoke Google Fonts (Plus Jakarta Sans for headings + DM Sans for body copy + IBM Plex Mono for terminal/badges/code)
  useEffect(() => {
    if (document.getElementById('ewa-custom-fonts')) return;
    const link = document.createElement('link');
    link.id = 'ewa-custom-fonts';
    link.rel = 'stylesheet';
    link.href =
      'https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&family=IBM+Plex+Mono:wght@400;500;600&family=Plus+Jakarta+Sans:wght@600;700;800&display=swap';
    document.head.appendChild(link);
  }, []);

  // Typewriter Effect Loop
  useEffect(() => {
    const currentFullRole = ROLES_TYPEWRITER[roleIndex];
    let timeout;

    if (!isDeleting && displayedRole.length < currentFullRole.length) {
      timeout = setTimeout(() => {
        setDisplayedRole(currentFullRole.slice(0, displayedRole.length + 1));
      }, 75);
    } else if (!isDeleting && displayedRole.length === currentFullRole.length) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 1700);
    } else if (isDeleting && displayedRole.length > 0) {
      timeout = setTimeout(() => {
        setDisplayedRole(currentFullRole.slice(0, displayedRole.length - 1));
      }, 42);
    } else if (isDeleting && displayedRole.length === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % ROLES_TYPEWRITER.length);
    }

    return () => clearTimeout(timeout);
  }, [displayedRole, isDeleting, roleIndex]);

  // Subtle cursor spotlight movement
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    if (cliEndRef.current) {
      cliEndRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }, [cliHistory]);

  const navigateTo = (pageKey) => {
    setCurrentPage(pageKey);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCopy = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  // CLI Command Executor
  const runCliCommand = (raw) => {
    const trimmed = raw.trim();
    if (!trimmed) return;
    const cmd = trimmed.toLowerCase();
    const next = [{ type: 'command', text: trimmed }];

    switch (cmd) {
      case 'help':
        next.push({
          type: 'output',
          text: 'AVAILABLE COMMANDS:\n  whoami       -> Ewa’s certifications, roles & University of Windsor honors\n  stack        -> Wazuh SIEM, Sysmon, Python TCP Sockets, JavaFX & Power Automate\n  experience   -> Open Work Experience & Credentials page\n  involvement  -> Open Leadership & Community Involvement page\n  labs         -> Open Technical Projects & Home Labs page\n  ctfs         -> Open Field Notes & Lab Writeups page\n  events       -> Open BSCS & Community Events Photo Gallery\n  offclock     -> Open Off the Clock (hobbies & life outside the terminal)\n  flags        -> Switch console to Live Wazuh/Sysmon Mini-CTF\n  contact      -> Open Contact & Direct Message page\n  clear        -> Clear terminal buffer'
        });
        break;
      case 'whoami':
        next.push({
          type: 'output',
          text: 'ewa         :: Computer Science @ University of Windsor (Dean’s Recognition May 2026)\ncert        :: ISC² Certified in Cybersecurity (CC)\nwork        :: IT & Data Coordinator @ Assisted Living Southwestern Ontario (ALSO)\nleadership  :: Co-Founder & Co-President @ BSCS | Senior Rep @ CSS | Accessibility Advocate'
        });
        break;
      case 'stack':
        next.push({
          type: 'output',
          text: '[SOC/SIEM]  Wazuh Docker • Microsoft Sysmon • PowerShell Logging • VirusTotal API • GL.iNet\n[DEV/SYS]   Python 3 (TCP Sockets & Tutoring) • Java / JavaFX • C (Unix) • SQLite • Power Automate\n[LANGS]     English • Spanish (SPAN 1020 — 92%)'
        });
        break;
      case 'experience':
      case 'about':
        next.push({ type: 'output', text: 'Loading /experience...' });
        setTimeout(() => navigateTo('experience'), 150);
        break;
      case 'involvement':
        next.push({ type: 'output', text: 'Loading /involvement...' });
        setTimeout(() => navigateTo('involvement'), 150);
        break;
      case 'labs':
        next.push({ type: 'output', text: 'Loading /labs...' });
        setTimeout(() => navigateTo('labs'), 150);
        break;
      case 'ctfs':
        next.push({ type: 'output', text: 'Loading /writeups...' });
        setTimeout(() => navigateTo('writeups'), 150);
        break;
      case 'events':
        next.push({ type: 'output', text: 'Loading /events...' });
        setTimeout(() => navigateTo('gallery'), 150);
        break;
      case 'offclock':
      case 'hobbies':
        next.push({ type: 'output', text: 'Loading /offclock...' });
        setTimeout(() => navigateTo('offclock'), 150);
        break;
      case 'flags':
        setConsoleTab('ctf');
        setCliInput('');
        return;
      case 'contact':
        next.push({
          type: 'output',
          text: `email :: ${PROFILE_LINKS.email}\npgp   :: 0x8F4A2C91 (8F4A 2C91 7E0B 4D12 99A1)\nloc   :: Windsor, Ontario, Canada`
        });
        break;
      case 'clear':
        setCliHistory([]);
        setCliInput('');
        return;
      default:
        next.push({
          type: 'error',
          text: `zsh: command not found: ${trimmed} — try "help", "whoami", "experience", "involvement", or "flags".`
        });
    }

    setCliHistory((prev) => [...prev, ...next]);
    setCliInput('');
  };

  // Mini-CTF Decoder Helpers
  const activePacket = TELEMETRY_PACKETS[selectedPacketIdx];

  const handleDecodeAction = (mode) => {
    if (mode === 'base64') {
      try {
        const match = activePacket.rawHeader.match(/X-Lab-Telemetry:\s*([A-Za-z0-9+/=]+)/);
        const target = match ? match[1] : 'RkxBR3t3NHp1aF9zMWVtX3QxMDg3X2QzdDNjdDNkfQ==';
        setDecodedPreview(`[Base64 Decoded] -> ${atob(target)}`);
      } catch {
        setDecodedPreview('[Error] Invalid Base64 payload.');
      }
    } else if (mode === 'rot13') {
      const match = activePacket.rawHeader.match(/X-Analyst-Note:\s*([^\n]+)/);
      const target = match ? match[1] : 'SYNT{z1a1_cp_f0p_nanylf1f_ceb}';
      const decoded = target.replace(/[a-zA-Z]/g, (c) =>
        String.fromCharCode((c <= 'Z' ? 90 : 122) >= (c = c.charCodeAt(0) + 13) ? c : c - 26)
      );
      setDecodedPreview(`[ROT13 Decoded] -> ${decoded}`);
    }
  };

  const handleFlagSubmit = (e) => {
    e.preventDefault();
    if (flagAttempt.trim() === activePacket.flag) {
      setSolvedPackets((prev) => ({ ...prev, [activePacket.id]: true }));
      setCtfFeedback({
        status: 'success',
        msg: `ACCESS GRANTED // Flag verified for ${activePacket.id}!`
      });
    } else {
      setCtfFeedback({
        status: 'error',
        msg: 'INVALID FLAG // Inspect the telemetry log and use the decoder tools above.'
      });
    }
  };

  const filteredLabs = LABS_DATA.filter((lab) => {
    if (labFilter === 'All Labs') return true;
    return lab.category === labFilter;
  });

  const filteredWriteups = WRITEUPS_DATA.filter((w) => {
    const matchesPlatform = writeupPlatform === 'All' || w.platform === writeupPlatform;
    const q = writeupSearch.toLowerCase();
    const matchesSearch =
      !q ||
      w.title.toLowerCase().includes(q) ||
      w.summary.toLowerCase().includes(q) ||
      w.tags.some((t) => t.toLowerCase().includes(q));
    return matchesPlatform && matchesSearch;
  });

  const handleDispatchSubmit = (e) => {
    e.preventDefault();
    if (!senderName.trim() || !senderEmail.trim() || !dispatchBody.trim()) return;
    setDispatchSent(true);
    setSenderName('');
    setSenderEmail('');
    setDispatchBody('');
  };

  const navItems = [
    { key: 'home', label: 'Home', num: '01' },
    { key: 'experience', label: 'Experience', num: '02' },
    { key: 'involvement', label: 'Involvement', num: '03' },
    { key: 'labs', label: 'Labs & Projects', num: '04' },
    { key: 'writeups', label: 'Field Notes', num: '05' },
    { key: 'gallery', label: 'Events', num: '06' },
    { key: 'offclock', label: 'Off the Clock', num: '07' },
    { key: 'contact', label: 'Contact', num: '08' }
  ];

  return (
    <div className="ewa-portfolio-root min-h-screen bg-[#0A090E] text-[#F8FAFC] antialiased selection:bg-[#E11D48]/30 selection:text-[#F43F5E] relative overflow-x-hidden flex flex-col">
      <style>{`
        .ewa-portfolio-root {
          font-family: 'DM Sans', sans-serif;
        }
        .ewa-portfolio-root h1,
        .ewa-portfolio-root h2,
        .ewa-portfolio-root h3,
        .ewa-portfolio-root h4 {
          font-family: 'Plus Jakarta Sans', sans-serif;
          letter-spacing: -0.025em;
        }
        .ewa-portfolio-root .font-mono,
        .ewa-portfolio-root code,
        .ewa-portfolio-root pre {
          font-family: 'IBM Plex Mono', monospace !important;
        }
      `}</style>

      {/* Subtle Ambient Crimson-Rose Glows, Cursor Spotlight & Visible Technical Grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 overflow-hidden z-0"
      >
        <div
          className="hidden sm:block fixed w-[460px] h-[460px] rounded-full transition-transform duration-300 ease-out"
          style={{
            transform: `translate3d(${mousePos.x - 230}px, ${mousePos.y - 230}px, 0)`,
            background:
              'radial-gradient(circle, rgba(225, 29, 72, 0.14) 0%, rgba(190, 24, 93, 0.05) 45%, transparent 72%)'
          }}
        />
        <div className="absolute -top-40 -left-32 w-[520px] h-[520px] rounded-full bg-[#E11D48]/[0.08] blur-[130px]" />
        <div className="absolute top-[38%] -right-40 w-[480px] h-[480px] rounded-full bg-[#BE185D]/[0.08] blur-[140px]" />
        <div
          className="absolute inset-0 opacity-[0.11]"
          style={{
            backgroundImage:
              'linear-gradient(to right, rgba(244, 63, 94, 0.45) 1px, transparent 1px), linear-gradient(to bottom, rgba(244, 63, 94, 0.45) 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      {/* ==========================================
          1. MULTI-PAGE TOP NAVIGATION BAR
         ========================================== */}
      <header className="sticky top-0 z-40 bg-[#0A090E]/85 backdrop-blur-xl border-b border-[#261E2E]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          {/* Custom Cyber-Emblem Logo */}
          <button
            onClick={() => navigateTo('home')}
            className="flex items-center gap-3 group text-left"
          >
            <div className="relative w-9 h-9 rounded-lg bg-[#13111A] border border-[#E11D48]/50 flex items-center justify-center shadow-[0_0_15px_rgba(225,29,72,0.25)] group-hover:border-[#F43F5E] transition-all">
              <ShieldAlert className="w-4 h-4 text-[#F43F5E]" />
              <span className="absolute -bottom-0.5 -right-0.5 w-2 h-2 rounded-full bg-[#E11D48]" />
            </div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-sm sm:text-base font-bold tracking-tight text-[#F8FAFC] group-hover:text-[#F43F5E] transition-colors">
                ~/ewa
              </span>
              <span className="hidden xl:inline-block font-mono text-[11px] px-1.5 py-0.5 rounded bg-[#13111A] border border-[#261E2E] text-[#F43F5E]">
                /{currentPage}
              </span>
            </div>
          </button>

          {/* Desktop Page Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => navigateTo(item.key)}
                className={`px-3 py-2 rounded-lg text-xs font-mono tracking-wide transition-all flex items-center gap-1.5 ${
                  currentPage === item.key
                    ? 'text-[#F43F5E] bg-[#E11D48]/15 border border-[#E11D48]/40 font-semibold shadow-[0_0_14px_rgba(225,29,72,0.18)]'
                    : 'text-[#94A3B8] hover:text-[#F8FAFC] hover:bg-[#13111A] border border-transparent'
                }`}
              >
                <span className="text-[10px] opacity-60">{item.num}.</span>
                <span>{item.label}</span>
              </button>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-2.5">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg bg-[#13111A] border border-[#261E2E] text-[#94A3B8] hover:text-[#F43F5E]"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#13111A] border-b border-[#261E2E] px-4 py-3 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => navigateTo(item.key)}
                className={`block w-full text-left px-3 py-2.5 rounded-lg font-mono text-xs transition-colors ${
                  currentPage === item.key
                    ? 'bg-[#E11D48]/15 text-[#F43F5E] border border-[#E11D48]/30 font-semibold'
                    : 'text-[#94A3B8] hover:text-[#F43F5E] hover:bg-[#0A090E]'
                }`}
              >
                {item.num} // {item.label}
              </button>
            ))}
          </div>
        )}
      </header>

      {/* ==========================================
          PAGE ROUTER VIEWPORT
         ========================================== */}
      <main className="relative z-10 flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 pt-10 sm:pt-14 pb-24">
        {/* ------------------------------------------
            PAGE 1: HOME (LEFT PORTRAIT ON DESKTOP + RESPONSIVE MOBILE HERO)
           ------------------------------------------ */}
        {currentPage === 'home' && (
          <div className="space-y-16 animate-[fadeIn_0.35s_ease-out]">
            {/* Hero Split Layout: Left Portrait Card on Desktop, Centered Compact Stack on Mobile */}
            <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column (Desktop) / Top Compact Card (Mobile): Portrait Frame */}
              <div className="lg:col-span-4 flex justify-center lg:justify-start">
                <div className="relative w-full max-w-[230px] sm:max-w-[260px] lg:max-w-[300px] rounded-2xl bg-[#13111A] border border-[#261E2E] p-3.5 shadow-[0_16px_48px_rgba(0,0,0,0.65),0_0_30px_rgba(225,29,72,0.16)]">
                  {/* Decorative Crimson-Pink Corner Brackets */}
                  <span className="pointer-events-none absolute -top-1.5 -left-1.5 w-5 h-5 border-t-2 border-l-2 border-[#F43F5E] rounded-tl-lg" />
                  <span className="pointer-events-none absolute -top-1.5 -right-1.5 w-5 h-5 border-t-2 border-r-2 border-[#F43F5E] rounded-tr-lg" />
                  <span className="pointer-events-none absolute -bottom-1.5 -left-1.5 w-5 h-5 border-b-2 border-l-2 border-[#F43F5E] rounded-bl-lg" />
                  <span className="pointer-events-none absolute -bottom-1.5 -right-1.5 w-5 h-5 border-b-2 border-r-2 border-[#F43F5E] rounded-br-lg" />

                  {/* Frame Top Metadata Bar */}
                  <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-[#261E2E] font-mono text-[10px]">
                    <span className="text-[#F43F5E] font-semibold flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#E11D48]" />
                      IDENTITY // EWA
                    </span>
                    <span className="text-[#94A3B8]">UWINDSOR CS</span>
                  </div>

                  {/* Portrait Display Area */}
                  <div className="relative aspect-square lg:aspect-[4/4] w-full rounded-xl overflow-hidden bg-[#0A090E] border border-[#261E2E]">
                    {PROFILE_LINKS.portraitImage ? (
                      <>
                        <img
                          src={PROFILE_LINKS.portraitImage}
                          alt="Ewa portrait"
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0A090E]/70 via-transparent to-transparent pointer-events-none" />
                      </>
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center p-4 text-center relative">
                        <div
                          className="absolute inset-0 opacity-20"
                          style={{
                            backgroundImage:
                              'radial-gradient(circle at 50% 35%, #E11D48 0%, transparent 65%)'
                          }}
                        />
                        <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#13111A] border-2 border-[#E11D48]/60 flex items-center justify-center shadow-[0_0_24px_rgba(225,29,72,0.25)] mb-2.5">
                          <User className="w-8 h-8 sm:w-9 sm:h-9 text-[#F43F5E]" />
                        </div>
                        <p className="font-mono text-[11px] font-semibold text-[#F8FAFC]">
                          [ YOUR PORTRAIT HERE ]
                        </p>
                        <p className="text-[11px] text-[#94A3B8] mt-1">
                          Set portraitImage in App.jsx
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Right Column (Desktop) / Centered Below Photo (Mobile): Greeting, Typewriter & Bio */}
              <div className="lg:col-span-8 flex flex-col items-center lg:items-start text-center lg:text-left space-y-5">
                {/* Greeting & Typewriter Roles */}
                <div className="space-y-3.5 w-full">
                  <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-extrabold tracking-tight text-[#F8FAFC] leading-[1.1]">
                    Hi, I&apos;m{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F43F5E] via-[#E11D48] to-[#BE185D]">
                      Ewa!
                    </span>
                  </h1>

                  <div className="min-h-[44px] sm:min-h-[52px] flex flex-wrap items-center justify-center lg:justify-start gap-2 text-lg sm:text-2xl lg:text-[28px] font-bold text-[#CBD5E1]">
                    <span>I am</span>
                    <span className="font-mono text-[#F43F5E] bg-[#13111A] px-3 sm:px-3.5 py-1 rounded-lg border border-[#E11D48]/35 shadow-[0_0_20px_rgba(225,29,72,0.16)] inline-flex items-center max-w-full">
                      <span className="truncate">{displayedRole}</span>
                      <span
                        aria-hidden="true"
                        className="ml-1 inline-block w-[3px] h-5 sm:h-7 bg-[#F43F5E] animate-pulse shrink-0"
                      />
                    </span>
                  </div>
                </div>

                {/* Bio Copy */}
                <p className="text-sm sm:text-base lg:text-[17px] text-[#94A3B8] leading-relaxed max-w-2xl text-justify">
                  I believe great security isn&apos;t just about better tools, it&apos;s about building reliable systems and giving people the knowledge to defend them. Today, as an Honours Computer Science student at the University of Windsor, an <strong className="text-[#F8FAFC] font-semibold">ISC² Certified in Cybersecurity (CC)</strong> professional, and an <strong className="text-[#F8FAFC] font-semibold">IT &amp; Data Coordinator</strong> at Assisted Living Southwestern Ontario, I bring both together by building security and systems projects, serving as a 3x Academic Teaching Assistant, and leading student tech initiatives on campus.
                </p>

                {/* Primary Multi-Page Navigation Actions */}
                <div className="w-full sm:w-auto flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center justify-center lg:justify-start gap-3 pt-1">
                  <button
                    onClick={() => navigateTo('labs')}
                    className="px-5 py-3 rounded-lg bg-gradient-to-r from-[#E11D48] to-[#BE185D] hover:from-[#F43F5E] hover:to-[#E11D48] text-white font-mono text-xs sm:text-sm font-semibold tracking-wide transition-all inline-flex items-center justify-center gap-2 shadow-[0_0_24px_rgba(225,29,72,0.35)]"
                  >
                    <span>Explore Labs &amp; Projects</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <div className="grid grid-cols-2 sm:flex gap-3">
                    <button
                      onClick={() => navigateTo('experience')}
                      className="px-4 sm:px-5 py-3 rounded-lg bg-[#13111A] hover:bg-[#1A1624] text-[#F8FAFC] border border-[#261E2E] hover:border-[#E11D48]/50 font-mono text-xs sm:text-sm font-medium transition-all inline-flex items-center justify-center gap-2"
                    >
                      <Briefcase className="w-4 h-4 text-[#F43F5E]" />
                      <span>Experience</span>
                    </button>

                    <button
                      onClick={() => navigateTo('involvement')}
                      className="px-4 sm:px-5 py-3 rounded-lg bg-[#13111A] hover:bg-[#1A1624] text-[#F8FAFC] border border-[#261E2E] hover:border-[#E11D48]/50 font-mono text-xs sm:text-sm font-medium transition-all inline-flex items-center justify-center gap-2"
                    >
                      <Users className="w-4 h-4 text-[#F43F5E]" />
                      <span>Involvement</span>
                    </button>
                  </div>
                </div>

                {/* Clean Social Links */}
                <div className="pt-1 flex flex-wrap justify-center lg:justify-start gap-2">
                  {[
                    {
                      label: 'GitHub',
                      handle: PROFILE_LINKS.githubHandle,
                      url: PROFILE_LINKS.githubUrl,
                      icon: Github
                    },
                    {
                      label: 'LinkedIn',
                      handle: PROFILE_LINKS.linkedinHandle,
                      url: PROFILE_LINKS.linkedinUrl,
                      icon: Linkedin
                    }
                  ].map((platform) => {
                    const Icon = platform.icon;
                    return (
                      <a
                        key={platform.label}
                        href={platform.url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#13111A] border border-[#261E2E] hover:border-[#E11D48]/60 text-xs transition-all group"
                      >
                        <Icon className="w-3.5 h-3.5 text-[#F43F5E]" />
                        <span className="font-semibold text-[#F8FAFC] group-hover:text-[#F43F5E] transition-colors">
                          {platform.label}
                        </span>
                        <span className="font-mono text-[11px] text-[#94A3B8]">{platform.handle}</span>
                      </a>
                    );
                  })}
                </div>
              </div>
            </section>

            {/* Quick Page Directory Cards */}
            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[{
                  page: 'experience',
                  title: 'Work Experience',
                  desc: 'Roles in IT coordination, systems teaching, and enterprise support.',
                  icon: Briefcase
                },
                {
                  page: 'involvement',
                  title: 'Leadership & Involvement',
                  desc: 'Co-founding BSCS, representing CS students, and youth mentorship.',
                  icon: Users
                },
                {
                  page: 'labs',
                  title: 'Projects & Home Labs',
                  desc: 'SIEM telemetry pipelines, TCP networking, and security lab architectures.',
                  icon: Network
                },
                {
                  page: 'Events',
                  title: 'Events & Gallery',
                  desc: 'Workshops, industry panels, and campus outreach highlights.',
                  icon: Calendar
                },
                {
                  page: 'Off the Clock',
                  title: 'Off the Clock',
                  desc: 'Beyond the terminal: creative design, hobbies, and current rotation.',
                  icon: Sparkles
                },                
                {
                  page: 'contact',
                  title: 'Get in Touch',
                  desc: 'Connect for SOC, cybersecurity, IT coordination, or accessibility initiatives.',
                  icon: Mail
                }
                
              ].map((card) => {
                const Icon = card.icon;
                return (
                  <button
                    key={card.page}
                    onClick={() => navigateTo(card.page)}
                    className="group text-left p-5 rounded-xl bg-[#13111A] border border-[#261E2E] hover:border-[#E11D48]/70 transition-all hover:shadow-[0_0_24px_rgba(225,29,72,0.14)] flex flex-col justify-between space-y-4"
                  >
                    <div className="space-y-2.5">
                      <div className="flex items-center justify-between">
                        <div className="p-2 rounded-lg bg-[#E11D48]/15 border border-[#E11D48]/35 text-[#F43F5E]">
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="font-mono text-xs text-[#94A3B8] group-hover:text-[#F43F5E]">
                          /{card.page}
                        </span>
                      </div>
                      <h2 className="font-bold text-base text-[#F8FAFC] group-hover:text-[#F43F5E] transition-colors">
                        {card.title}
                      </h2>
                      <p className="text-xs text-[#94A3B8] leading-relaxed">{card.desc}</p>
                    </div>
                    <div className="font-mono text-[11px] text-[#F43F5E] inline-flex items-center gap-1">
                      <span>Open Section</span>
                      <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </button>
                );
              })}
            </section>

            {/* Interactive Threat Console on Home Page */}
            <section className="space-y-4">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div className="font-mono text-xs text-[#F43F5E] uppercase tracking-widest flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-[#E11D48]" />
                  <span>INTERACTIVE SECURITY CONSOLE // CLI &amp; WAZUH TELEMETRY CTF</span>
                </div>
                <span className="font-mono text-xs text-[#94A3B8]">
                  Try &quot;whoami&quot;, &quot;stack&quot;, or switch to Wazuh Mini-CTF
                </span>
              </div>

              <div className="rounded-xl bg-[#13111A] border border-[#261E2E] shadow-[0_12px_40px_rgba(0,0,0,0.6),0_0_25px_rgba(225,29,72,0.08)] overflow-hidden">
                {/* Console Top Chrome + Tab Switcher */}
                <div className="px-4 py-3 bg-[#0E0C14] border-b border-[#261E2E] flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1.5 mr-1">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#E11D48]" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#BE185D]/60" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#261E2E]" />
                    </div>
                    <span className="font-mono text-xs font-semibold text-[#F8FAFC]">
                      ewa_wazuh_console.sh
                    </span>
                  </div>

                  {/* Mode Tabs */}
                  <div className="flex items-center gap-1 bg-[#0A090E] p-1 rounded-lg border border-[#261E2E]">
                    <button
                      type="button"
                      onClick={() => setConsoleTab('cli')}
                      className={`px-2.5 py-1 rounded-md font-mono text-[11px] transition-all flex items-center gap-1.5 ${
                        consoleTab === 'cli'
                          ? 'bg-[#E11D48] text-white font-semibold'
                          : 'text-[#94A3B8] hover:text-[#F8FAFC]'
                      }`}
                    >
                      <Terminal className="w-3 h-3" />
                      <span>Interactive CLI</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setConsoleTab('ctf')}
                      className={`px-2.5 py-1 rounded-md font-mono text-[11px] transition-all flex items-center gap-1.5 ${
                        consoleTab === 'ctf'
                          ? 'bg-[#E11D48] text-white font-semibold'
                          : 'text-[#94A3B8] hover:text-[#F8FAFC]'
                      }`}
                    >
                      <Activity className="w-3 h-3" />
                      <span>Wazuh Mini-CTF</span>
                    </button>
                  </div>
                </div>

                {/* TAB 1: INTERACTIVE CLI */}
                {consoleTab === 'cli' && (
                  <div
                    onClick={() => cliInputRef.current?.focus()}
                    className="cursor-text"
                  >
                    <div className="p-4 sm:p-5 h-64 overflow-y-auto font-mono text-xs space-y-3 leading-relaxed">
                      {cliHistory.map((item, idx) => (
                        <div key={idx}>
                          {item.type === 'system' && (
                            <div className="text-[#94A3B8] italic">{item.text}</div>
                          )}
                          {item.type === 'command' && (
                            <div className="flex items-center gap-2 text-[#F8FAFC] font-semibold">
                              <span className="text-[#F43F5E]">ewa@uwindsor:~$</span>
                              <span>{item.text}</span>
                            </div>
                          )}
                          {item.type === 'output' && (
                            <div className="text-[#CBD5E1] whitespace-pre-line pl-3 border-l-2 border-[#E11D48]/60 py-0.5">
                              {item.text}
                            </div>
                          )}
                          {item.type === 'error' && (
                            <div className="text-[#F43F5E]">{item.text}</div>
                          )}
                        </div>
                      ))}

                      <form
                        onSubmit={(e) => {
                          e.preventDefault();
                          runCliCommand(cliInput);
                        }}
                        className="flex items-center gap-2 pt-1"
                      >
                        <span className="text-[#F43F5E] font-semibold shrink-0">
                          ewa@uwindsor:~$
                        </span>
                        <input
                          ref={cliInputRef}
                          type="text"
                          value={cliInput}
                          onChange={(e) => setCliInput(e.target.value)}
                          placeholder="enter command (whoami, stack, experience, involvement, labs, flags)..."
                          aria-label="Terminal command input"
                          className="w-full bg-transparent text-[#F8FAFC] placeholder-[#94A3B8]/40 focus:outline-none font-mono text-xs"
                        />
                      </form>
                      <div ref={cliEndRef} />
                    </div>

                    {/* Quick-Command Chips */}
                    <div className="px-4 py-3 bg-[#0E0C14] border-t border-[#261E2E] flex items-center gap-1.5 flex-wrap">
                      <span className="font-mono text-[11px] text-[#94A3B8] mr-1">exec:</span>
                      {[
                        'whoami',
                        'stack',
                        'experience',
                        'involvement',
                        'labs',
                        'offclock',
                        'flags',
                        'clear'
                      ].map((cmd) => (
                        <button
                          key={cmd}
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            runCliCommand(cmd);
                          }}
                          className="px-2 py-0.5 rounded bg-[#13111A] hover:bg-[#E11D48]/20 text-[#CBD5E1] hover:text-[#F43F5E] border border-[#261E2E] hover:border-[#E11D48]/50 font-mono text-[11px] transition-colors"
                        >
                          {cmd}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* TAB 2: LIVE SIMULATED WAZUH TELEMETRY & MINI-CTF */}
                {consoleTab === 'ctf' && (
                  <div className="p-4 sm:p-5 space-y-3.5 font-mono text-xs">
                    <div className="flex items-center justify-between gap-2 flex-wrap">
                      <div className="flex items-center gap-1.5">
                        {TELEMETRY_PACKETS.map((pkt, idx) => (
                          <button
                            key={pkt.id}
                            type="button"
                            onClick={() => {
                              setSelectedPacketIdx(idx);
                              setDecodedPreview('');
                              setFlagAttempt('');
                              setCtfFeedback(null);
                            }}
                            className={`px-2.5 py-1 rounded border text-[11px] flex items-center gap-1.5 transition-all ${
                              selectedPacketIdx === idx
                                ? 'bg-[#E11D48]/15 border-[#E11D48] text-[#F43F5E]'
                                : 'bg-[#0A090E] border-[#261E2E] text-[#94A3B8] hover:text-[#F8FAFC]'
                            }`}
                          >
                            <span>{pkt.id}</span>
                            {solvedPackets[pkt.id] && (
                              <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                            )}
                          </button>
                        ))}
                      </div>
                      <span className="text-[11px] text-[#F43F5E] bg-[#E11D48]/10 px-2 py-0.5 rounded border border-[#E11D48]/30">
                        {activePacket.alert}
                      </span>
                    </div>

                    <div className="text-[11px] text-[#94A3B8] flex flex-wrap gap-x-3 gap-y-1">
                      <span>TIME: {activePacket.timestamp}</span>
                      <span>SRC: {activePacket.src}</span>
                      <span>DST: {activePacket.dst}</span>
                    </div>

                    <pre className="p-3 rounded-lg bg-[#0A090E] border border-[#261E2E] text-[#CBD5E1] overflow-x-auto leading-relaxed text-[11px]">
                      {activePacket.rawHeader}
                    </pre>

                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => handleDecodeAction('base64')}
                          className="px-2.5 py-1 rounded bg-[#0A090E] hover:bg-[#E11D48]/20 border border-[#261E2E] hover:border-[#E11D48]/50 text-[#F43F5E] text-[11px] transition-colors"
                        >
                          Decode Base64
                        </button>
                        <button
                          type="button"
                          onClick={() => handleDecodeAction('rot13')}
                          className="px-2.5 py-1 rounded bg-[#0A090E] hover:bg-[#E11D48]/20 border border-[#261E2E] hover:border-[#E11D48]/50 text-[#F43F5E] text-[11px] transition-colors"
                        >
                          Decode ROT13
                        </button>
                      </div>
                      <span className="text-[11px] text-[#94A3B8]">{activePacket.hint}</span>
                    </div>

                    {decodedPreview && (
                      <div className="p-2.5 rounded-lg bg-[#E11D48]/10 border border-[#E11D48]/40 text-[#F8FAFC] text-[11px] break-all">
                        {decodedPreview}
                      </div>
                    )}

                    <form onSubmit={handleFlagSubmit} className="flex gap-2 pt-1">
                      <input
                        type="text"
                        value={flagAttempt}
                        onChange={(e) => setFlagAttempt(e.target.value)}
                        placeholder="Submit FLAG{...}"
                        className="flex-1 px-3 py-1.5 rounded-lg bg-[#0A090E] border border-[#261E2E] focus:border-[#E11D48] text-[#F8FAFC] placeholder-[#94A3B8]/50 focus:outline-none text-xs"
                      />
                      <button
                        type="submit"
                        className="px-3.5 py-1.5 rounded-lg bg-[#E11D48] hover:bg-[#F43F5E] text-white font-semibold text-xs transition-colors"
                      >
                        Verify
                      </button>
                    </form>

                    {ctfFeedback && (
                      <div
                        className={`text-[11px] px-3 py-1.5 rounded-lg border ${
                          ctfFeedback.status === 'success'
                            ? 'bg-emerald-500/10 border-emerald-500/40 text-emerald-300'
                            : 'bg-[#E11D48]/10 border-[#E11D48]/40 text-[#F43F5E]'
                        }`}
                      >
                        {ctfFeedback.msg}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </section>
          </div>
        )}

        {/* ------------------------------------------
            PAGE 2: EXPERIENCE, CREDENTIALS & CAPABILITIES
           ------------------------------------------ */}
        {currentPage === 'experience' && (
          <div className="space-y-12 animate-[fadeIn_0.35s_ease-out]">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#261E2E] pb-6">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 font-mono text-xs text-[#F43F5E] uppercase tracking-widest">
                  <Briefcase className="w-4 h-4 text-[#E11D48]" />
                  <span>02 // Professional Experience &amp; Credentials</span>
                </div>
                <h1 className="text-3xl sm:text-4xl font-extrabold text-[#F8FAFC]">
                  Work Experience &amp; Skills
                </h1>
                <p className="text-[#94A3B8] text-sm sm:text-base max-w-2xl leading-relaxed">
                  Building reliable systems, securing infrastructure, and helping people understand the technology they rely on.
                </p>
              </div>

            <a
            href="/Ewa_Resume.pdf"
            download="Ewa_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2.5 rounded-lg bg-[#13111A] hover:bg-[#1A1624] border border-[#E11D48]/40 text-xs font-mono text-[#F43F5E] inline-flex items-center gap-2 transition-colors"
            >
            <Download className="w-4 h-4" />
            <span>Download Resume (PDF)</span>
            </a>
            </div>

            {/* Work Experience Timeline */}
            <div className="space-y-5">
              <h2 className="font-mono text-xs uppercase tracking-widest text-[#F43F5E] font-semibold">
                // Work Experience
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {EXPERIENCE_TIMELINE.map((exp, idx) => (
                  <div
                    key={idx}
                    className="rounded-2xl bg-[#13111A] border border-[#261E2E] hover:border-[#E11D48]/50 p-6 flex flex-col justify-between space-y-4 transition-colors"
                  >
                    <div className="space-y-3">
                      <span className="inline-block px-2.5 py-1 rounded bg-[#E11D48]/15 border border-[#E11D48]/35 text-[#F43F5E] font-mono text-[11px] font-semibold">
                        {exp.period}
                      </span>
                      <div>
                        <h3 className="text-lg font-bold text-[#F8FAFC] leading-snug">
                          {exp.role}
                        </h3>
                        <p className="font-mono text-xs text-[#94A3B8] mt-0.5">{exp.org}</p>
                      </div>
                      <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                        {exp.summary}
                      </p>
                    </div>

                    <ul className="space-y-2 pt-3 border-t border-[#261E2E]">
                      {exp.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-[#CBD5E1]">
                          <span className="text-[#F43F5E] font-mono font-bold">&gt;</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications, Honors & Spanish Proficiency */}
            <div className="rounded-2xl bg-[#13111A] border border-[#261E2E] p-6 sm:p-8 space-y-6">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center gap-2.5">
                  <Award className="w-5 h-5 text-[#F43F5E]" />
                  <h3 className="text-lg font-bold text-[#F8FAFC]">
                    Certifications &amp; Recognition
                  </h3>
                </div>
                <span className="font-mono text-xs text-[#94A3B8]">VERIFIED CREDENTIALS</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {CERT_ROADMAP.map((cert) => (
                  <div
                    key={cert.code}
                    className="p-4 rounded-xl bg-[#0A090E] border border-[#261E2E] hover:border-[#E11D48]/50 transition-colors flex flex-col justify-between space-y-4"
                  >
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="px-2 py-0.5 rounded bg-[#E11D48]/15 border border-[#E11D48]/40 text-[#F43F5E] font-mono text-xs font-bold">
                          {cert.code}
                        </span>
                        <span className="font-mono text-[10px] text-[#94A3B8]">{cert.progress}%</span>
                      </div>
                      <h4 className="font-bold text-sm text-[#F8FAFC] leading-snug">
                        {cert.name}
                      </h4>
                      <p className="text-xs text-[#94A3B8] leading-relaxed">{cert.detail}</p>
                    </div>

                    <div className="space-y-2">
                      <div className="h-1.5 w-full rounded-full bg-[#13111A] overflow-hidden">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-[#BE185D] to-[#F43F5E]"
                          style={{ width: `${cert.progress}%` }}
                        />
                      </div>
                      <div className="flex items-center justify-between gap-2 pt-1">
                    <span className="font-mono text-[10px] text-[#F43F5E] tracking-widest uppercase">
                      {cert.status}
                    </span>
                      {cert.credentialUrl && (
                    <a
                     href={cert.credentialUrl}
                      target="_blank"
                       rel="noopener noreferrer"
                         className="inline-flex items-center gap-1.5 text-xs font-mono text-[#F43F5E] hover:text-white transition-colors"
                        >
                        <span>Verify Credential</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                        )}
                        </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 4-Category Capability Matrix */}
            <div className="space-y-5">
              <h2 className="font-mono text-xs uppercase tracking-widest text-[#F43F5E] font-semibold">
                // Technical &amp; Operational Capabilities
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {CAPABILITY_MATRIX.map((block) => {
                  const Icon = block.icon;
                  return (
                    <div
                      key={block.category}
                      className="rounded-2xl bg-[#13111A] border border-[#261E2E] p-6 space-y-5"
                    >
                      <div className="flex items-start gap-3.5">
                        <div className="p-2.5 rounded-xl bg-[#E11D48]/15 border border-[#E11D48]/40 text-[#F43F5E] shrink-0">
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <h3 className="text-base sm:text-lg font-bold text-[#F8FAFC]">
                            {block.category}
                          </h3>
                          <p className="text-xs text-[#94A3B8] mt-0.5">{block.subtitle}</p>
                        </div>
                      </div>

                      <div className="space-y-3.5">
                       <div className="flex flex-wrap gap-2 pt-2">
  {block.skills.map((skill, sIdx) => (
    <span
      key={sIdx}
      className="px-3 py-1.5 rounded-lg bg-[#0A090E] border border-white/10 text-xs font-mono text-gray-200 hover:border-[#E11D48]/50 transition-colors"
    >
      {typeof skill === 'string' ? skill : skill.name}
    </span>
  ))}
</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* ------------------------------------------
            PAGE 3: SEPARATE INVOLVEMENT & LEADERSHIP PAGE
           ------------------------------------------ */}
        {currentPage === 'involvement' && (
          <div className="space-y-10 animate-[fadeIn_0.35s_ease-out]">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#261E2E] pb-6">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 font-mono text-xs text-[#F43F5E] uppercase tracking-widest">
                  <Users className="w-4 h-4 text-[#E11D48]" />
                  <span>03 // Campus Leadership, Advocacy &amp; Mentorship</span>
                </div>
                <h1 className="text-3xl sm:text-4xl font-extrabold text-[#F8FAFC]">
                  Involvement &amp; Community Impact
                </h1>
                <p className="text-[#94A3B8] text-sm sm:text-base max-w-2xl leading-relaxed">
                  Building inclusive tech communities, advocating for diversity and equity, and mentoring students across campus and Windsor-Essex.
                </p>
              </div>

              <button
                onClick={() => navigateTo('gallery')}
                className="px-4 py-2.5 rounded-lg bg-[#E11D48]/15 hover:bg-[#E11D48] border border-[#E11D48]/40 text-[#F43F5E] hover:text-white font-mono text-xs font-semibold inline-flex items-center gap-2 transition-all self-start md:self-auto"
              >
                <ImageIcon className="w-4 h-4" />
                <span>View Events Photo Gallery</span>
              </button>
            </div>

            {/* Leadership & Community Milestones Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {LEADERSHIP_MILESTONES.map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl bg-[#13111A] border border-[#261E2E] hover:border-[#E11D48]/60 p-6 flex flex-col justify-between space-y-4 transition-colors"
                >
                  <div className="space-y-3">
                    <span className="inline-block px-2.5 py-1 rounded bg-[#E11D48]/15 border border-[#E11D48]/35 text-[#F43F5E] font-mono text-[11px] font-semibold">
                      {item.period}
                    </span>
                    <div>
                      <h2 className="text-lg font-bold text-[#F8FAFC] leading-snug">
                        {item.role}
                      </h2>
                      <p className="font-mono text-xs text-[#CBD5E1] mt-1">{item.org}</p>
                    </div>
                    <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Advocacy & Workshops Highlight Banner */}
            {/* <div className="rounded-2xl bg-[#13111A] border border-[#261E2E] p-6 sm:p-8 space-y-6">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center gap-2.5">
                  <Globe className="w-5 h-5 text-[#F43F5E]" />
                  <h3 className="text-lg font-bold text-[#F8FAFC]">
                    Tech Accessibility, Equity &amp; Student Programs
                  </h3>
                </div>
                <span className="font-mono text-xs text-[#94A3B8]">UWINDSOR &amp; COMMUNITY</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    title: 'Tech Accessibility & Digital Equity Advocacy',
                    tag: 'INCLUSIVE DESIGN',
                    detail:
                      'Championing accessible interfaces, assistive technology readiness, and equitable access to computing education and career pathways.'
                  },
                  {
                    title: 'Technical Workshops & Industry Panels',
                    tag: 'BSCS PROGRAMMING',
                    detail:
                      'Led "From Coder to Contributor" (Git & GitHub), "BSCS 101: How to Survive Your CS Degree", and hosted the "Careers Beyond Software Engineering" panel.'
                  },
                  {
                    title: 'Black Boys Code Youth Robotics & Coding',
                    tag: 'YOUTH STEM',
                    detail:
                      'Facilitate monthly hands-on robotics and programming workshops inspiring young learners to explore computer science.'
                  },
                  {
                    title: 'Suitcase to Backpack International Mentorship',
                    tag: 'PEER SUPPORT',
                    detail:
                      'Mentor incoming international students transitioning to university life, academic systems, and campus community in Windsor.'
                  }
                ].map((pillar) => (
                  <div
                    key={pillar.title}
                    className="p-5 rounded-xl bg-[#0A090E] border border-[#261E2E] hover:border-[#E11D48]/40 transition-colors space-y-2"
                  >
                    <span className="inline-block font-mono text-[10px] text-[#F43F5E] bg-[#E11D48]/15 px-2 py-0.5 rounded border border-[#E11D48]/30">
                      {pillar.tag}
                    </span>
                    <h4 className="font-bold text-base text-[#F8FAFC]">{pillar.title}</h4>
                    <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                      {pillar.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
             */}
          </div>
        )}
       

        {/* ------------------------------------------
            PAGE 4: COMPLETED TECHNICAL PROJECTS & LABS
           ------------------------------------------ */}
        {currentPage === 'labs' && (
          <section className="space-y-8 animate-[fadeIn_0.35s_ease-out]">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#261E2E] pb-6">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 font-mono text-xs text-[#F43F5E] uppercase tracking-widest">
                  <Network className="w-4 h-4 text-[#E11D48]" />
                  <span>04 // Completed Technical Projects &amp; Labs</span>
                </div>
                <h1 className="text-3xl sm:text-4xl font-extrabold text-[#F8FAFC]">
                  Projects &amp; Home Labs
                </h1>
                <p className="text-[#94A3B8] text-sm sm:text-base max-w-2xl">
                  Building security monitoring labs, low-level network tools, and practical automation. I'm turning concepts into working systems.
                </p>
              </div>

              {/* Filterable Tabs */}
              <div className="flex flex-wrap gap-1.5 bg-[#13111A] p-1.5 rounded-xl border border-[#261E2E]">
                {[
                  'All Labs',
                  'Blue Team / Detection',
                  'Red Team / OffSec',
                  'Systems & Tooling',
                  'Automation & Ops'
                ].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setLabFilter(tab)}
                    className={`px-3 py-1.5 rounded-lg font-mono text-xs transition-all ${
                      labFilter === tab
                        ? 'bg-[#E11D48] text-white font-semibold shadow-[0_0_15px_rgba(225,29,72,0.3)]'
                        : 'text-[#94A3B8] hover:text-[#F8FAFC]'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            {/* Lab Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredLabs.map((lab) => (
                <article
                  key={lab.id}
                  className="group rounded-2xl bg-[#13111A] border border-[#261E2E] hover:border-[#E11D48]/70 p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-[0_0_30px_rgba(225,29,72,0.14)]"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between gap-2 flex-wrap">
                      <span className="px-2.5 py-1 rounded-md bg-[#E11D48]/15 border border-[#E11D48]/35 text-[#F43F5E] font-mono text-[11px] font-semibold">
                        {lab.category}
                      </span>
                      <div className="flex items-center gap-2 font-mono text-[11px] text-[#94A3B8]">
                        <span className="px-2 py-0.5 rounded bg-[#0A090E] border border-[#261E2E] text-[#CBD5E1]">
                          {lab.complexity}
                        </span>
                        <span>{lab.date}</span>
                      </div>
                    </div>

                    <h2 className="text-xl font-bold text-[#F8FAFC] group-hover:text-[#F43F5E] transition-colors">
                      {lab.title}
                    </h2>

                    <p className="text-sm text-[#94A3B8] leading-relaxed">{lab.summary}</p>

                    <ul className="space-y-2 pt-1">
                      {lab.highlights.map((bullet, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs text-[#CBD5E1]">
                          <span className="text-[#F43F5E] font-mono font-bold mt-0.5">&gt;</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {lab.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-0.5 rounded bg-[#0A090E] border border-[#261E2E] text-[#94A3B8] font-mono text-[11px]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-5 mt-6 border-t border-[#261E2E] flex items-center justify-between">
                    <button
                      onClick={() => setSelectedLab(lab)}
                      className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#E11D48]/10 hover:bg-[#E11D48] border border-[#E11D48]/40 text-[#F43F5E] hover:text-white font-mono text-xs font-semibold transition-all"
                    >
                      <Layers className="w-3.5 h-3.5" />
                      <span>Inspect Blueprint</span>
                    </button>

                    <a
                      href={lab.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 font-mono text-xs text-[#94A3B8] hover:text-[#F43F5E] transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      <span>Source</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        {/* ------------------------------------------
            PAGE 5: FIELD NOTES & LAB WRITEUPS
           ------------------------------------------ */}
        {currentPage === 'writeups' && (
          <section className="space-y-6 animate-[fadeIn_0.35s_ease-out]">
            <div className="space-y-2 border-b border-[#261E2E] pb-6">
              <div className="inline-flex items-center gap-2 font-mono text-xs text-[#F43F5E] uppercase tracking-widest">
                <FileText className="w-4 h-4 text-[#E11D48]" />
                <span>05 // Detection Logs &amp; Technical Breakdowns</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-[#F8FAFC]">
                Field Notes &amp; Lab Writeups
              </h1>
              <p className="text-[#94A3B8] text-sm sm:text-base max-w-2xl">
                Detailed walkthroughs from my Wazuh SIEM threat emulation lab, SEED Morris Worm analysis, and systems engineering builds.
              </p>
            </div>

            {/* Search & Platform Filter Bar */}
            <div className="p-4 rounded-xl bg-[#13111A] border border-[#261E2E] flex flex-col sm:flex-row gap-3 justify-between">
              <div className="relative flex-1">
                <Search className="w-4 h-4 text-[#94A3B8] absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={writeupSearch}
                  onChange={(e) => setWriteupSearch(e.target.value)}
                  placeholder="Filter notes by MITRE ID, tool, or topic (e.g. T1087.001, Wazuh, Morris Worm, TCP)..."
                  className="w-full pl-10 pr-4 py-2 rounded-lg bg-[#0A090E] border border-[#261E2E] focus:border-[#E11D48] text-sm text-[#F8FAFC] placeholder-[#94A3B8]/60 focus:outline-none transition-colors"
                />
              </div>

              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4 text-[#F43F5E] shrink-0" />
                <select
                  value={writeupPlatform}
                  onChange={(e) => setWriteupPlatform(e.target.value)}
                  aria-label="Filter writeups by category"
                  className="px-3.5 py-2 rounded-lg bg-[#0A090E] border border-[#261E2E] focus:border-[#E11D48] font-mono text-xs text-[#F8FAFC] focus:outline-none"
                >
                  <option value="All">All Environments</option>
                  <option value="Home Lab">Home Lab</option>
                  <option value="SEED Labs">SEED Labs</option>
                  <option value="Engineering Note">Engineering Note</option>
                </select>
              </div>
            </div>

            {/* Writeup Cards */}
            {filteredWriteups.length === 0 ? (
              <div className="p-10 rounded-xl bg-[#13111A] border border-[#261E2E] text-center space-y-2">
                <p className="text-sm text-[#CBD5E1] font-mono">
                  No field notes matched your current query.
                </p>
                <button
                  onClick={() => {
                    setWriteupPlatform('All');
                    setWriteupSearch('');
                  }}
                  className="font-mono text-xs text-[#F43F5E] hover:underline"
                >
                  Reset filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {filteredWriteups.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => setSelectedWriteup(item)}
                    className="group rounded-xl bg-[#13111A] border border-[#261E2E] hover:border-[#E11D48]/70 p-5 cursor-pointer transition-all hover:shadow-[0_0_24px_rgba(225,29,72,0.12)] flex flex-col justify-between space-y-4"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between gap-2 flex-wrap">
                        <div className="flex items-center gap-2">
                          <span className="px-2.5 py-0.5 rounded bg-[#E11D48]/15 border border-[#E11D48]/35 text-[#F43F5E] font-mono text-[11px] font-semibold">
                            {item.platform}
                          </span>
                          <span className="px-2 py-0.5 rounded bg-[#0A090E] border border-[#261E2E] font-mono text-[11px] text-[#CBD5E1]">
                            {item.difficulty}
                          </span>
                        </div>
                        <span className="font-mono text-[11px] text-[#94A3B8]">{item.date}</span>
                      </div>

                      <h2 className="text-base sm:text-lg font-bold text-[#F8FAFC] group-hover:text-[#F43F5E] transition-colors leading-snug">
                        {item.title}
                      </h2>

                      <p className="text-xs sm:text-sm text-[#94A3B8] line-clamp-2 leading-relaxed">
                        {item.summary}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-[#261E2E] flex items-center justify-between gap-2">
                      <div className="flex flex-wrap gap-1.5">
                        {item.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="font-mono text-[10px] text-[#94A3B8] bg-[#0A090E] px-2 py-0.5 rounded border border-[#261E2E]"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>

                      <span className="inline-flex items-center gap-1 font-mono text-xs font-semibold text-[#F43F5E] shrink-0 group-hover:translate-x-0.5 transition-transform">
                        <span>Read Log</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>
        )}

        {/* ------------------------------------------
            PAGE 6: EVENTS, WORKSHOPS & PHOTO GALLERY
           ------------------------------------------ */}
        {currentPage === 'gallery' && (
          <section className="space-y-8 animate-[fadeIn_0.35s_ease-out]">
            <div className="space-y-2 border-b border-[#261E2E] pb-6">
              <div className="inline-flex items-center gap-2 font-mono text-xs text-[#F43F5E] uppercase tracking-widest">
                <ImageIcon className="w-4 h-4 text-[#E11D48]" />
                <span>06 // BSCS, CSS &amp; Community Events</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-[#F8FAFC]">
                Events, Workshops &amp; Photo Gallery
              </h1>
              <p className="text-[#94A3B8] text-sm sm:text-base max-w-2xl">
                Highlights from panels, technical workshops, community runs, and creative builds led at the University of Windsor.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {COMMUNITY_EVENTS_GALLERY.map((ev) => (
                <div
                  key={ev.id}
                  className="rounded-2xl bg-[#13111A] border border-[#261E2E] hover:border-[#E11D48]/60 overflow-hidden flex flex-col justify-between transition-all hover:shadow-[0_0_28px_rgba(225,29,72,0.12)]"
                >
                  <div>
                    {/* Photo Slot */}
                    <div className="relative aspect-[16/10] w-full bg-[#0A090E] border-b border-[#261E2E] overflow-hidden">
                      {ev.image ? (
                        <img
                          src={ev.image}
                          alt={ev.title}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex flex-col items-center justify-center p-4 text-center relative">
                          <div
                            className="absolute inset-0 opacity-20"
                            style={{
                              backgroundImage:
                                'radial-gradient(circle at 50% 40%, #E11D48 0%, transparent 70%)'
                            }}
                          />
                          <Camera className="w-7 h-7 text-[#F43F5E] mb-2 relative z-10" />
                          <span className="font-mono text-[11px] text-[#CBD5E1] relative z-10">
                            [ EVENT PHOTO SLOT ]
                          </span>
                          <span className="text-[11px] text-[#94A3B8] mt-0.5 relative z-10">
                            {ev.date}
                          </span>
                        </div>
                      )}

                      <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-[#0A090E]/85 backdrop-blur-md border border-[#E11D48]/40 text-[#F43F5E] font-mono text-[10px] font-semibold">
                        {ev.tag}
                      </span>
                    </div>

                    {/* Event Details */}
                    <div className="p-5 space-y-2.5">
                      <div className="flex flex-wrap items-center gap-3 font-mono text-[11px] text-[#94A3B8]">
                        <span className="inline-flex items-center gap-1">
                          <Calendar className="w-3 h-3 text-[#F43F5E]" />
                          {ev.date}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-[#F43F5E]" />
                          {ev.location}
                        </span>
                      </div>

                      <h2 className="text-lg font-bold text-[#F8FAFC] leading-snug">
                        {ev.title}
                      </h2>

                      <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                        {ev.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ------------------------------------------
            PAGE 7: OFF THE CLOCK (PERSONALITY & HOBBIES)
           ------------------------------------------ */}
        {currentPage === 'offclock' && (
          <section className="space-y-10 animate-[fadeIn_0.35s_ease-out]">
            <div className="space-y-2 border-b border-[#261E2E] pb-6">
              <div className="inline-flex items-center gap-2 font-mono text-xs text-[#F43F5E] uppercase tracking-widest">
                <Sparkles className="w-4 h-4 text-[#E11D48]" />
                <span>07 // Beyond the Terminal</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-[#F8FAFC]">
                Off the Clock
              </h1>
              <p className="text-[#94A3B8] text-sm sm:text-base max-w-2xl leading-relaxed">
                When I&apos;m not configuring Wazuh rules, debugging Python sockets, or running BSCS events—here is what keeps me grounded, creative, and energized.
              </p>
            </div>

            {/* Current Rotation Strip */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {CURRENT_ROTATION.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className="p-5 rounded-xl bg-[#13111A] border border-[#261E2E] hover:border-[#E11D48]/50 transition-colors flex items-start gap-3.5"
                  >
                    <div className="p-2.5 rounded-lg bg-[#E11D48]/15 border border-[#E11D48]/35 text-[#F43F5E] shrink-0">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="space-y-1">
                      <div className="font-mono text-[10px] text-[#F43F5E] font-semibold tracking-wider">
                        {item.label}
                      </div>
                      <p className="text-xs sm:text-sm text-[#F8FAFC] font-medium leading-snug">
                        {item.value}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Activities & Hobbies Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {OFF_THE_CLOCK_ACTIVITIES.map((act) => (
                <div
                  key={act.id}
                  className="rounded-2xl bg-[#13111A] border border-[#261E2E] hover:border-[#E11D48]/60 overflow-hidden flex flex-col justify-between transition-all hover:shadow-[0_0_28px_rgba(225,29,72,0.12)]"
                >
                  <div>
                    {act.image && (
                      <div className="relative aspect-[16/9] w-full bg-[#0A090E] border-b border-[#261E2E] overflow-hidden">
                        <img
                          src={act.image}
                          alt={act.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}

                    <div className="p-6 space-y-3">
                      <div className="flex items-center justify-between gap-2 flex-wrap">
                        <span className="px-2.5 py-0.5 rounded bg-[#E11D48]/15 border border-[#E11D48]/35 text-[#F43F5E] font-mono text-[10px] font-semibold">
                          {act.tag}
                        </span>
                        <span className="font-mono text-[11px] text-[#94A3B8]">
                          {act.subtitle}
                        </span>
                      </div>

                      <h2 className="text-xl font-bold text-[#F8FAFC]">{act.title}</h2>

                      <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                        {act.description}
                      </p>

                      <div className="pt-1 flex items-center gap-2 font-mono text-[11px] text-[#CBD5E1]">
                        <Heart className="w-3.5 h-3.5 text-[#F43F5E] shrink-0" />
                        <span>{act.highlight}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ------------------------------------------
            PAGE 8: CONTACT & DIRECT MESSAGE
           ------------------------------------------ */}
        {currentPage === 'contact' && (
          <section className="animate-[fadeIn_0.35s_ease-out]">
            <div className="rounded-2xl bg-[#13111A] border border-[#261E2E] p-6 sm:p-10 shadow-[0_0_40px_rgba(225,29,72,0.06)]">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                {/* Left Column: Direct Channel & PGP Fingerprint */}
                <div className="lg:col-span-5 space-y-6">
                  <div className="space-y-2">
                    <div className="inline-flex items-center gap-2 font-mono text-xs text-[#F43F5E] uppercase tracking-widest">
                      <Mail className="w-3.5 h-3.5 text-[#E11D48]" />
                      <span>08 // Contact &amp; Inquiries</span>
                    </div>
                    <h1 className="text-3xl sm:text-4xl font-extrabold text-[#F8FAFC]">
                      Get in Touch
                    </h1>
                    <p className="text-sm text-[#94A3B8] leading-relaxed">
                      Recruiting for Cybersecurity Analyst, SOC Analyst, IT &amp; Data Coordinator, or Tech Accessibility roles? Send Ewa a direct message or verify my PGP key below.
                    </p>
                  </div>

                  {/* One-Click Copy Email Box */}
                  <div className="p-4 rounded-xl bg-[#0A090E] border border-[#261E2E] space-y-2">
                    <div className="font-mono text-[11px] text-[#94A3B8]">DIRECT ENDPOINT</div>
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-mono text-xs sm:text-sm text-[#F8FAFC] truncate">
                        {PROFILE_LINKS.email}
                      </span>
                      <button
                        onClick={() => handleCopy(PROFILE_LINKS.email, 'email')}
                        className="px-3 py-1.5 rounded-lg bg-[#E11D48]/15 hover:bg-[#E11D48] border border-[#E11D48]/40 text-[#F43F5E] hover:text-white font-mono text-xs inline-flex items-center gap-1.5 transition-all shrink-0"
                      >
                        {copiedId === 'email' ? (
                          <>
                            <Check className="w-3.5 h-3.5" />
                            <span>Copied</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            <span>Copy</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>

                  {/* PGP Fingerprint Card */}
                  <div className="p-4 rounded-xl bg-[#0A090E] border border-[#261E2E] space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[11px] text-[#94A3B8]">PGP KEY FINGERPRINT</span>
                      <span className="font-mono text-[11px] text-emerald-400">RSA-4096 // ACTIVE</span>
                    </div>
                    <div className="font-mono text-xs text-[#F43F5E] bg-[#13111A] px-3 py-2 rounded border border-[#261E2E]">
                      8F4A 2C91 7E0B 4D12 99A1 (0x8F4A2C91)
                    </div>
                    <button
                      onClick={() => setPgpModalOpen(true)}
                      className="w-full py-2 rounded-lg bg-[#13111A] hover:bg-[#1C1826] border border-[#261E2E] hover:border-[#E11D48]/50 font-mono text-xs text-[#CBD5E1] hover:text-[#F43F5E] transition-colors inline-flex items-center justify-center gap-2"
                    >
                      <Key className="w-3.5 h-3.5 text-[#F43F5E]" />
                      <span>Inspect Full PGP Public Key Block</span>
                    </button>
                  </div>
                </div>

                {/* Right Column: Clean Message Composer */}
                <div className="lg:col-span-7">
                  <form
                    onSubmit={handleDispatchSubmit}
                    className="p-6 rounded-xl bg-[#0A090E] border border-[#261E2E] space-y-4"
                  >
                    <div className="flex items-center justify-between border-b border-[#261E2E] pb-3">
                      <span className="font-mono text-xs font-semibold text-[#F8FAFC]">
                        DIRECT_MESSAGE // TO: EWA
                      </span>
                      <span className="font-mono text-[11px] text-[#94A3B8]">
                        TLS 1.3 // VERIFIED
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="block font-mono text-[11px] text-[#94A3B8]">
                          IDENTIFIER / NAME
                        </label>
                        <input
                          type="text"
                          required
                          value={senderName}
                          onChange={(e) => setSenderName(e.target.value)}
                          placeholder="Jane Doe"
                          className="w-full px-3.5 py-2.5 rounded-lg bg-[#13111A] border border-[#261E2E] focus:border-[#E11D48] text-sm text-[#F8FAFC] placeholder-[#94A3B8]/40 focus:outline-none"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="block font-mono text-[11px] text-[#94A3B8]">
                          RETURN ADDRESS
                        </label>
                        <input
                          type="email"
                          required
                          value={senderEmail}
                          onChange={(e) => setSenderEmail(e.target.value)}
                          placeholder="jane@company.com"
                          className="w-full px-3.5 py-2.5 rounded-lg bg-[#13111A] border border-[#261E2E] focus:border-[#E11D48] text-sm text-[#F8FAFC] placeholder-[#94A3B8]/40 focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="block font-mono text-[11px] text-[#94A3B8]">
                        SUBJECT VECTOR
                      </label>
                      <select
                        value={dispatchSubject}
                        onChange={(e) => setDispatchSubject(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#13111A] border border-[#261E2E] focus:border-[#E11D48] text-sm text-[#F8FAFC] focus:outline-none"
                      >
                        <option>Cybersecurity / SOC Role Inquiry</option>
                        <option>IT &amp; Data Coordination Opportunity</option>
                        <option>Tech Accessibility &amp; Digital Equity Collaboration</option>
                        <option>Speaking / Workshop Invitation</option>
                        <option>General Networking</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="block font-mono text-[11px] text-[#94A3B8]">
                        MESSAGE PAYLOAD
                      </label>
                      <textarea
                        rows={4}
                        required
                        value={dispatchBody}
                        onChange={(e) => setDispatchBody(e.target.value)}
                        placeholder="Write your message or paste an encrypted PGP block for Ewa..."
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#13111A] border border-[#261E2E] focus:border-[#E11D48] text-sm text-[#F8FAFC] placeholder-[#94A3B8]/40 focus:outline-none resize-none"
                      />
                    </div>

                    {dispatchSent && (
                      <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/40 text-emerald-300 font-mono text-xs flex items-center justify-between">
                        <span>[200 OK] Message transmitted to Ewa. I&apos;ll respond shortly!</span>
                        <button
                          type="button"
                          onClick={() => setDispatchSent(false)}
                          className="text-emerald-200 hover:underline ml-2"
                        >
                          Dismiss
                        </button>
                      </div>
                    )}

                    <div className="pt-1 flex justify-end">
                      <button
                        type="submit"
                        className="px-6 py-2.5 rounded-lg bg-gradient-to-r from-[#E11D48] to-[#BE185D] hover:from-[#F43F5E] hover:to-[#E11D48] text-white font-mono text-xs font-semibold tracking-wide inline-flex items-center gap-2 shadow-[0_0_20px_rgba(225,29,72,0.3)] transition-all"
                      >
                        <Send className="w-3.5 h-3.5" />
                        <span>Send Message</span>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-[#261E2E] bg-[#0A090E] py-8 mt-auto">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-3 font-mono text-xs text-[#94A3B8]">
          <span>~/ewa // Ewa • Windsor, ON © 2026</span>
          <div className="flex flex-wrap items-center gap-4">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => navigateTo(item.key)}
                className={`hover:text-[#F43F5E] transition-colors ${
                  currentPage === item.key ? 'text-[#F43F5E]' : ''
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </footer>

      {/* ==========================================
          MODAL 1: INSPECT BLUEPRINT (TOPOLOGY + LESSONS)
         ========================================== */}
      {selectedLab && (
        <div
          className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedLab(null)}
        >
          <div
            className="bg-[#13111A] border border-[#E11D48]/50 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-[0_0_50px_rgba(225,29,72,0.2)]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-[#13111A]/95 backdrop-blur border-b border-[#261E2E] px-6 py-4 flex items-center justify-between z-10">
              <div className="flex items-center gap-2 font-mono text-xs text-[#F43F5E]">
                <Layers className="w-4 h-4 text-[#E11D48]" />
                <span>ARCHITECTURE BLUEPRINT // {selectedLab.complexity}</span>
              </div>
              <button
                onClick={() => setSelectedLab(null)}
                className="p-1.5 rounded-lg bg-[#0A090E] border border-[#261E2E] text-[#94A3B8] hover:text-[#F43F5E]"
                aria-label="Close blueprint modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <h3 className="text-xl sm:text-2xl font-bold text-[#F8FAFC]">
                  {selectedLab.title}
                </h3>
                <p className="text-sm text-[#94A3B8] leading-relaxed">
                  {selectedLab.blueprint.objective}
                </p>
              </div>

              {/* Clean SVG/CSS Network Topology Diagram */}
              <div className="p-5 rounded-xl bg-[#0A090E] border border-[#261E2E] space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-[#F43F5E] font-semibold">
                    NETWORK TOPOLOGY &amp; DATA FLOW
                  </span>
                  <span className="font-mono text-[11px] text-[#94A3B8]">ISOLATED LAB VLAN</span>
                </div>

                {/* Visual SVG Connector + Node Grid */}
                <div className="relative">
                  <svg
                    className="hidden sm:block w-full h-8 text-[#E11D48]/50"
                    viewBox="0 0 600 32"
                    fill="none"
                  >
                    <line
                      x1="75"
                      y1="16"
                      x2="525"
                      y2="16"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeDasharray="6 6"
                    />
                    <circle cx="75" cy="16" r="4" fill="#F43F5E" />
                    <circle cx="225" cy="16" r="4" fill="#E11D48" />
                    <circle cx="375" cy="16" r="4" fill="#BE185D" />
                    <circle cx="525" cy="16" r="4" fill="#10B981" />
                  </svg>

                  <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
                    {selectedLab.blueprint.topology.map((node, i) => (
                      <div
                        key={i}
                        className="p-3 rounded-lg bg-[#13111A] border border-[#261E2E] hover:border-[#E11D48]/50 transition-colors space-y-1.5"
                      >
                        <div className="flex items-center justify-between">
                          <Server className="w-3.5 h-3.5 text-[#F43F5E]" />
                          <span className="font-mono text-[10px] text-[#94A3B8]">
                            NODE 0{i + 1}
                          </span>
                        </div>
                        <div className="font-bold text-xs text-[#F8FAFC]">{node.name}</div>
                        <div className="font-mono text-[11px] text-[#F43F5E]">{node.ip}</div>
                        <div className="text-[11px] text-[#94A3B8] leading-snug">{node.role}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Key Lessons Learned */}
              <div className="space-y-3">
                <h4 className="font-mono text-xs uppercase tracking-wider text-[#F43F5E] font-semibold">
                  // Key Engineering &amp; Security Lessons
                </h4>
                <div className="space-y-2.5">
                  {selectedLab.blueprint.lessons.map((lesson, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-[#0A090E] border border-[#261E2E] flex items-start gap-3 text-xs sm:text-sm text-[#CBD5E1]"
                    >
                      <span className="font-mono text-[#F43F5E] font-bold">0{idx + 1}</span>
                      <span className="leading-relaxed">{lesson}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tools & Footer */}
              <div className="pt-2 flex flex-wrap items-center justify-between gap-3 border-t border-[#261E2E]">
                <div className="flex flex-wrap gap-1.5">
                  {selectedLab.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded bg-[#0A090E] border border-[#261E2E] font-mono text-[11px] text-[#94A3B8]"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <a
                  href={selectedLab.github}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 rounded-lg bg-[#E11D48] hover:bg-[#F43F5E] text-white font-mono text-xs font-semibold inline-flex items-center gap-2 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>View Repository</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          MODAL 2: WRITEUP & REMEDIATION READER
         ========================================== */}
      {selectedWriteup && (
        <div
          className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedWriteup(null)}
        >
          <div
            className="bg-[#13111A] border border-[#E11D48]/50 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-[0_0_50px_rgba(225,29,72,0.2)]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-[#13111A]/95 backdrop-blur border-b border-[#261E2E] px-6 py-4 flex items-center justify-between z-10">
              <div className="flex items-center gap-2.5 font-mono text-xs">
                <span className="px-2.5 py-0.5 rounded bg-[#E11D48]/20 text-[#F43F5E] font-semibold">
                  {selectedWriteup.platform}
                </span>
                <span className="text-[#94A3B8]">{selectedWriteup.category}</span>
                <span className="text-[#261E2E]">|</span>
                <span className="text-[#94A3B8]">{selectedWriteup.date}</span>
              </div>
              <button
                onClick={() => setSelectedWriteup(null)}
                className="p-1.5 rounded-lg bg-[#0A090E] border border-[#261E2E] text-[#94A3B8] hover:text-[#F43F5E]"
                aria-label="Close writeup reader"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <h3 className="text-xl sm:text-2xl font-bold text-[#F8FAFC]">
                  {selectedWriteup.title}
                </h3>
                <p className="text-sm text-[#94A3B8] leading-relaxed">
                  {selectedWriteup.summary}
                </p>
              </div>

              {/* Walkthrough Steps */}
              <div className="space-y-4">
                {selectedWriteup.steps.map((step, index) => (
                  <div
                    key={index}
                    className="p-5 rounded-xl bg-[#0A090E] border border-[#261E2E] space-y-3"
                  >
                    <h4 className="font-mono text-sm font-bold text-[#F43F5E]">
                      {step.phase}
                    </h4>
                    <p className="text-xs sm:text-sm text-[#CBD5E1] leading-relaxed">
                      {step.content}
                    </p>

                    {step.command && (
                      <div className="rounded-lg bg-[#13111A] border border-[#E11D48]/30 p-3 flex items-center justify-between gap-3">
                        <code className="font-mono text-xs text-[#F43F5E] overflow-x-auto">
                          $ {step.command}
                        </code>
                        <button
                          onClick={() => handleCopy(step.command, `w-cmd-${index}`)}
                          className="shrink-0 p-1.5 rounded bg-[#0A090E] hover:bg-[#E11D48]/20 border border-[#261E2E] text-[#94A3B8] hover:text-[#F43F5E] transition-colors"
                          title="Copy command"
                        >
                          {copiedId === `w-cmd-${index}` ? (
                            <Check className="w-3.5 h-3.5 text-emerald-400" />
                          ) : (
                            <Copy className="w-3.5 h-3.5" />
                          )}
                        </button>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Remediation Takeaway Callout */}
              <div className="p-5 rounded-xl bg-gradient-to-r from-[#E11D48]/15 to-[#BE185D]/10 border border-[#E11D48]/40 space-y-2">
                <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#F43F5E]">
                  <ShieldAlert className="w-4 h-4" />
                  <span>REMEDIATION TAKEAWAY // HARDENING FIX</span>
                </div>
                <p className="text-xs sm:text-sm text-[#F8FAFC] leading-relaxed">
                  {selectedWriteup.remediation}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          MODAL 3: RESUME SUMMARY & FULL PGP PUBLIC KEY
         ========================================== */}
      {pgpModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setPgpModalOpen(false)}
        >
          <div
            className="bg-[#13111A] border border-[#E11D48]/50 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-[0_0_50px_rgba(225,29,72,0.2)]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-[#13111A]/95 backdrop-blur border-b border-[#261E2E] px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-2 font-mono text-xs text-[#F43F5E]">
                <Key className="w-4 h-4 text-[#E11D48]" />
                <span>CREDENTIALS &amp; PGP PUBLIC KEY BLOCK</span>
              </div>
              <button
                onClick={() => setPgpModalOpen(false)}
                className="p-1.5 rounded-lg bg-[#0A090E] border border-[#261E2E] text-[#94A3B8] hover:text-[#F43F5E]"
                aria-label="Close PGP modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              {/* Quick Resume Snapshot */}
              <div className="p-4 rounded-xl bg-[#0A090E] border border-[#261E2E] space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-[#F8FAFC]">
                    CREDENTIALS SNAPSHOT // EWA
                  </span>
                  <span className="font-mono text-[11px] text-[#F43F5E]">ISC² CC CERTIFIED</span>
                </div>
                <p className="text-xs text-[#94A3B8] leading-relaxed">
                  ISC² Certified in Cybersecurity (CC) • Dean&apos;s Recognition (Faculty of Science, May 2026) • IT &amp; Data Coordinator (ALSO) • UWindsor Academic TA • BSCS Co-President &amp; CSS Senior Rep.
                </p>
                <div className="flex flex-wrap gap-2 pt-1">
                  <button
                    onClick={() => handleCopy(PROFILE_LINKS.email, 'modal-email')}
                    className="px-3 py-1.5 rounded-lg bg-[#E11D48] hover:bg-[#F43F5E] text-white font-mono text-xs font-semibold inline-flex items-center gap-1.5"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>
                      {copiedId === 'modal-email' ? 'Email Copied!' : 'Copy Contact Email'}
                    </span>
                  </button>
                </div>
              </div>

              {/* PGP Key Block */}
              <div className="space-y-2.5">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <span className="font-mono text-xs text-[#94A3B8]">
                    Fingerprint: <strong className="text-[#F43F5E]">8F4A 2C91 7E0B 4D12 99A1</strong>
                  </span>
                  <button
                    onClick={() => handleCopy(PGP_PUBLIC_KEY, 'modal-pgp')}
                    className="px-3 py-1.5 rounded-lg bg-[#0A090E] hover:bg-[#E11D48]/20 border border-[#261E2E] hover:border-[#E11D48]/50 font-mono text-xs text-[#F43F5E] inline-flex items-center gap-1.5 transition-colors"
                  >
                    {copiedId === 'modal-pgp' ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span>PGP Block Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy PGP Block</span>
                      </>
                    )}
                  </button>
                </div>

                <pre className="p-4 rounded-xl bg-[#0A090E] border border-[#261E2E] font-mono text-[11px] text-[#CBD5E1] overflow-x-auto leading-relaxed">
                  {PGP_PUBLIC_KEY}
                </pre>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}