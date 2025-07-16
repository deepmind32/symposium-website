import Button from "../button/button";
import styles from "./dummy-navbar.module.css";

export default function DummyNavbar() {
	return (
		<nav className={styles["navbar"]}>
			<div className={styles["navbar__logo__wrapper"]}>
				<img
					className={styles["navbar__logo--wordmark"]}
					src="./logo--white.png"
					alt="Wordmark of Prifed"
				/>{" "}
				<img
					className={styles["navbar__logo--pictorial"]}
					src="./pictorial.png"
					alt="Pictorial Mark of Prifed"
				/>
			</div>

			<div className={styles["navbar__action_btns"]}>
				<a
					href="https://forms.gle/gpUVx16gSf5jsM5x7"
					target="_blank"
					rel="noopener noreferrer"
					className={styles["navbar__action_btn"]}
				>
					<Button variant="primary">Register Now</Button>
				</a>
			</div>
		</nav>
	);
}
