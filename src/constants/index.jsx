import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";

import user1 from "../assets/profile-pictures/Messenger_creation_3E389BA6-BACC-4E3B-9208-76A111B27703.jpeg";
import user2 from "../assets/profile-pictures/c6253497-050c-4972-8790-6684feb641e1.jpg";
import user3 from "../assets/profile-pictures/Screenshot_2024-11-28-08-01-22-291_com.miui.gallery.jpg";
import user4 from "../assets/profile-pictures/FB_IMG_1732788975905.jpg";
import user5 from "../assets/profile-pictures/1732822605254.jpg";
import user6 from "../assets/profile-pictures/20231007_162234.jpg";

export const navItems = [
  { label: "Domů", href: "#feature" },
  { label: "Kolektiv", href: "#workflow" },
  { label: "Fotky", href: "#pricing" },
  { label: "Ordinační hodiny lékařů", href: "#testimonials" },
];

export const testimonials = [
  {
    user: "MVDr. Karla Hlačíková",
    company: "Veterinární lékařka",
    image: user1
  },
  {
    user: "MVDr. Zdeněk Marek",
    company: "Veterinární lékař",
    image: user2
  },
  {
    user: "Michaela Krištofová",
    company: "Veterinární sestra",
    image: user3
  },
  {
    user: "Monika Tihelková",
    company: "Veterinární sestra",
    image: user4
  },
  {
    user: "Vendula Sklenaříková",
    company: "Studentka VetUni Brno",
    image: user5
  },
  {
    user: "Poradní tým",
    image: user6
  },
];

export const features = [
  {
    icon: <BotMessageSquare />,
    text: "Drag-and-Drop Interface",
    description:
      "Easily design and arrange your VR environments with a user-friendly drag-and-drop interface.",
  },
  {
    icon: <Fingerprint />,
    text: "Multi-Platform Compatibility",
    description:
      "Build VR applications that run seamlessly across multiple platforms, including mobile, desktop, and VR headsets.",
  },
  {
    icon: <ShieldHalf />,
    text: "Built-in Templates",
    description:
      "Jumpstart your VR projects with a variety of built-in templates for different types of applications and environments.",
  },
  {
    icon: <BatteryCharging />,
    text: "Real-Time Preview",
    description:
      "Preview your VR application in real-time as you make changes, allowing for quick iterations and adjustments.",
  },
  {
    icon: <PlugZap />,
    text: "Collaboration Tools",
    description:
      "Work together with your team in real-time on VR projects, enabling seamless collaboration and idea sharing.",
  },
  {
    icon: <GlobeLock />,
    text: "Analytics Dashboard",
    description:
      "Gain valuable insights into user interactions and behavior within your VR applications with an integrated analytics dashboard.",
  },
];

export const checklistItems = [
  {
    title: "Code merge made easy",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Review code without worry",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "AI Assistance to reduce time",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Share work in minutes",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
];

export const pricingOptions = [
  {
    title: "Free",
    price: "$0",
    features: [
      "Private board sharing",
      "5 Gb Storage",
      "Web Analytics",
      "Private Mode",
    ],
  },
  {
    title: "Pro",
    price: "$10",
    features: [
      "Private board sharing",
      "10 Gb Storage",
      "Web Analytics (Advance)",
      "Private Mode",
    ],
  },
  {
    title: "Enterprise",
    price: "$200",
    features: [
      "Private board sharing",
      "Unlimited Storage",
      "High Performance Network",
      "Private Mode",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];

export const doctorsSchedule = [
  {
    name: "MVDr. Karla Hlačíková",
    specialization: "Veterinární lékařka - Interna",
    hours: [
      { day: "Pondělí", time: "8:00 - 12:00" },
      { day: "Úterý", time: "14:00 - 18:00" },
      { day: "Středa", time: "8:00 - 12:00, 14:00 - 18:00" },
      { day: "Pátek", time: "8:00 - 12:00" },
    ],
  },
  {
    name: "MVDr. Zdeněk Marek",
    specialization: "Veterinární lékař - Chirurgie",
    hours: [
      { day: "Pondělí", time: "8:00 - 12:00, 14:00 - 18:00" },
      { day: "Úterý", time: "8:00 - 12:00, 14:00 - 18:00" },
      { day: "Čtvrtek", time: "8:00 - 12:00, 14:00 - 18:00" },
      { day: "Pátek", time: "8:00 - 12:00, 14:00 - 16:00" },
    ],
  },
  {
    name: "Michaela Krištofová",
    specialization: "Veterinární sestra",
    hours: [
      { day: "Pondělí", time: "8:00 - 14:00" },
      { day: "Středa", time: "14:00 - 18:00" },
      { day: "Pátek", time: "8:00 - 12:00" },
    ],
  },
];
