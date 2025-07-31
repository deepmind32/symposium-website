import styles from "./footer.module.css";

const email = "prifed@hainet.org";

export default function Footer() {
	return (
		<div className={styles["footer"]}>
			<div className={styles["footer__container"]}>
				<div className={styles["footer__left"]}>
					<img src="./hainet--white.png" alt="Prifed Logo" />
					<p>
						<span className="u-color-dark-orange">
							Privacy Preservation of Data through Federated Learning
						</span>
						, an initiative by HAINet.
					</p>
				</div>
				<div className={styles["footer__right"]}>
					<p>
						Contact us at <a href={`mailto:${email}`}>{email}</a>
					</p>
				</div>
			</div>

			<div className={styles["footer__bottom"]}>
				<p>
					&copy; 2025 Health AI for All Network (HAINet). All rights reserved.
				</p>
			</div>
		</div>
	);
}
