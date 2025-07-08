import { MdOpenInNew } from "react-icons/md";

import Button from "../../components/button/button";
import Shapes from "../../components/shapes/shapes";
import styles from "./home.module.css";
import ActivityCard from "../../components/activitiy-card/activity-card";
import { title } from "framer-motion/client";
import HeroTitle from "../../components/hero-title/hero-title";

const activities = [
	{
		image: undefined,
		title: "PriFedData Symposium 2025 Announced",
		type: "Symposium",
		description:
			"Join PriFedData Symposium 2025 in Kathmandu—shaping ethical, private, and inclusive Health AI for all.",
		date: "January, 2025",
		link: "https://prifed.org/symposium-2025",
	},
];

export default function HomePage() {
	return (
		<>
			<section className={styles["hero-section"]}>
				<Shapes variant="small" color="dark-orange" />
				<main>
					<h1>Privacy Preserving Federated Learning</h1>
					<p>
						Prifed is HAINet’s initiative to promote{" "}
						<span className="u-color-dark-orange">
							privacy-preserving federated learning
						</span>{" "}
						in{" "}
						<span className="u-color-dark-orange u-text-no-wrap">
							Health AI
						</span>
						. We host events, release datasets, and build awareness among
						policymakers, students, researchers, and medical professionals.
					</p>
				</main>

				<div className={styles["hero-button__wrapper"]}>
					<a
						href="https://hainet.org/?ref=prifed"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Button>
							Learn More About HAINet <MdOpenInNew />
						</Button>
					</a>
				</div>
			</section>

			<section className={styles["home__updates"]}>
				<h1 className="u-gradient-underline">Our Updates</h1>

				<div className={styles["home__updates__content"]}>
					<ActivityCard activity={activities[0]} />
				</div>
			</section>

			<section className={styles["home__mission"]}>
				<Shapes variant="small" color="blue" />
				<div className={styles["home__mission__main"]}>
					<h1>Rethinking Data for Public Good</h1>
					<p>
						PriFed is a global initiative advancing privacy-preserving federated
						learning across health and social systems. Through open datasets,
						collaborative research, and inclusive symposiums, we aim to unlock
						insights without compromising individual privacy — powered by
						HAINet.org.
					</p>
				</div>
			</section>
		</>
	);
}
