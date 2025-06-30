import CarouselControls from "./carousel-controls";
import styles from "./carousel.module.css";

const images = [
  {
    url: "/gallery/platform.png",
    alt: "Empty HAICon conference hall with podium and banner",
    caption: "Collaborative Platform",
    description: "A collaborative platform to foster cross-sector innovation.",
  },
  {
    url: "/gallery/international-policies.png",
    alt: "WHO representative presenting Health AI policy overview",
    caption: "Global Standards",
    description: "Insights into AI policy, impact, and international progress.",
  },
  {
    url: "/gallery/legal-frameworks.png",
    alt: "Lawyer joining virtually to discuss AI legalities",
    caption: "Ethical Dilemmas",
    description: "Navigating rules and responsibilities in health AI.",
  },
  {
    url: "/gallery/technical.png",
    alt: "Assistant professor teaching machine learning to mixed audience",
    caption: "Democratizing Health AI",
    description:
      "Democratizing AI knowledge across diverse professional backgrounds.",
  },
  {
    url: "/gallery/panel.png",
    alt: "Panel discussion with scientists, doctors, and researchers",
    caption: "Insightful Dialogues",
    description:
      "Experts explore future and effectiveness of AI in healthcare.",
  },
  {
    url: "/gallery/collaboration.png",
    alt: "Students working together at a health AI workshop",
    caption: "Interdisciplinary Synergy",
    description: "Bridging disciplines through hands-on AI learning sessions.",
  },
  {
    url: "/gallery/question.png",
    alt: "Audience member asking a question to the panel",
    caption: "Engaging Conversations",
    description:
      "Engaging conversations to challenge and deepen understanding.",
  },
];

export default function Carousel() {
  return (
    <section className={`${styles.carouselSection} u-background-gray`}>
      <div className={styles.carouselContainer}>
        <div className={styles.carousel}>
          <CarouselControls images={images} />
        </div>
      </div>
    </section>
  );
}
