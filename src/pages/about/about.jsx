import HeroTitle from "../../components/hero-title/hero-title";
import styles from "./about.module.css";

export default function AboutPage() {
	return (
		<section className={styles["about__hero"]}>
			<HeroTitle title="About PriFed" />
			<p>
				PriFed is an initiative by HAINet dedicated to advancing
				privacy-preserving federated learning in Health AI, especially in
				resource-limited settings.
			</p>
			<p>
				We aim to foster responsible and inclusive innovation by:
				<ul>
					<li>
						<span>Empowering healthcare professionals and researchers</span>
					</li>
					<li>
						<span>
							Releasing high-quality, privacy-respecting health datasets
						</span>
					</li>
					<li>
						<span>
							Promoting interdisciplinary dialogue through symposiums and
							workshops
						</span>
					</li>
					<li>
						<span>
							Engaging policymakers, students, and technologists in ethical AI
							practices
						</span>
					</li>
				</ul>
			</p>
			<p>
				By combining federated learning with a strong focus on data privacy,
				PriFed is helping build a future where Health AI benefits
				everyone—without compromising sensitive health information.
			</p>
		</section>
	);
}
