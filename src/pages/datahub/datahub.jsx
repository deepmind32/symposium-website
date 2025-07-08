import HeroTitle from "../../components/hero-title/hero-title";
import Shapes from "../../components/shapes/shapes";
import styles from "./datahub.module.css";

export default function DataHubPage() {
	return (
		<>
			<section className={styles["hero"]}>
				<Shapes variant="small" color="dark-orange" />
				<HeroTitle title="PriFed DataHub" />
				<p>
					We plan to enable secure, ethical, and inclusive sharing of health
					datasets through privacy-preserving technologies.
				</p>
			</section>

			<section className={styles["datahub__coming-soon"]}>
				<h1 className="u-gradient-underline">Coming Soon</h1>
			</section>
		</>
	);
}
