import styles from "./footer.module.css";
import SubscribeForm from "./subscribe-form";
import CopyrightYear from "./copyright-year";
import { HiMail } from "react-icons/hi";
import { FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import { BsSubstack } from "react-icons/bs";
import Button from "../../button/button";

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<div className={styles.footer__container}>
				<div className={styles.footer__cta}>
					<h2 className={styles.footer__title}>
						{/* Privacy Preservation of Data through Federated Learning, an initiative by HAINet. */}
					</h2>
					<p className={styles.footer__subtitle}>
						Privacy Preservation of Data through Federated Learning, an initiative by HAINet.
					</p>
					<a href="https://forms.gle/gpUVx16gSf5jsM5x7">
						<Button className="u-background-dark-orange">Register Now</Button>
					</a>
				</div>

				<div className={styles.footer__spacer}></div>
				<div className={styles.footer__content}>
					<div className={styles.footer__brand}>
						<div className={styles.footer__heading}>
							<div className={styles.footer__logo}>
								<img
									src="/hainet--white.png"
									alt="HAINet"
									className={styles.footer__logoImg}
									style={{ height: "40px", width: "auto" }}
								/>
							</div>
						</div>
						<p className={styles.footer__tagline}>
							Advancing <span className="u-color-dark-orange">Health AI</span>{" "}
							in Resource Limited Settings
						</p>
					</div>

					<div className={styles.footer__connect}>
						<div className={styles.footer__heading}>
							<h3 className={styles.footer__connectTitle}>Connect With Us</h3>
						</div>
						<div className={styles.footer__linksGrid}>
							<div className={styles.footer__linksColumn}>
								<a
									href="mailto:info@hainet.org"
									className={styles.footer__link}
								>
									<HiMail size={22} />
									<span>info@hainet.org</span>
								</a>
								<a
									href="https://linkedin.com/company/healthaiforallnetwork"
									target="_blank"
									rel="noopener noreferrer"
									className={styles.footer__link}
								>
									<FaLinkedin size={20} />
									<span>LinkedIn</span>
								</a>
								<a
									href="https://x.com/hainet_x"
									target="_blank"
									rel="noopener noreferrer"
									className={styles.footer__link}
								>
									<FaTwitter size={20} />
									<span>X (Twitter)</span>
								</a>
							</div>
							<div className={styles.footer__linksColumn}>
								<a
									href="https://youtube.com/@healthaiforallnetwork"
									target="_blank"
									rel="noopener noreferrer"
									className={styles.footer__link}
								>
									<FaYoutube size={22} />
									<span>Youtube</span>
								</a>
								<a
									href="https://hainet.substack.com/"
									target="_blank"
									rel="noopener noreferrer"
									className={styles.footer__link}
								>
									<BsSubstack size={20} />
									<span>Substack</span>
								</a>
							</div>
						</div>
					</div>
				</div>
				<div className={styles.footer__copyright}>
					<p className={styles.footer__copyrightText}>
						© <CopyrightYear /> Health AI for All Network (HAINet). All rights
						reserved.
					</p>
				</div>
			</div>
		</footer>
	);
}
