import { useEffect, useState } from "react";
import { HiArrowRight } from "react-icons/hi";
import styles from "./navbar.module.css";
import Button from "../../button/button";
import { ImGithub } from "react-icons/im";

const Navbar = () => {
	const [scrolled, setScrolled] = useState(false);
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const isScrolled = window.scrollY > 20;
			setScrolled(isScrolled);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const closeMenu = () => {
		setIsMenuOpen(false);
	};

	const menuItems = [
		{ href: "https://hainet.org", text: "HOME" },
		{ href: "https://hainet.org/about-hainet", text: "ABOUT HAINet" },
		{
			href: "https://hainet.org/events-activities",
			text: "EVENTS & ACTIVITIES",
		},
		{ href: "https://hainet.org/haicon", text: "HAICon" },
		{ href: "https://hainet.org/publications", text: "PUBLICATIONS" },
	];

	return (
		<header className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
			<a href="https://hainet.org?ref=prifed">
				<img
					src="/hainet--white.png"
					alt="Hainet Logo"
					width={180}
					height={60}
					quality={100}
					priority
					className={styles.logo}
					style={{
						objectFit: "contain",
						height: "40px",
						width: "auto",
					}}
				/>
				<img
					src="/pictorial.png"
					alt="Hainet Logo"
					width={60}
					height={60}
					quality={100}
					priority
					className={styles.mobilelogo}
					style={{
						objectFit: "contain",
						height: "40px",
						width: "auto",
					}}
				/>
			</a>
			<nav className={styles.nav}>
				<ul className={styles.links}>
					{menuItems.map((item) => (
						<li key={item.href}>
							<a href={`${item.href}?ref=prifed`} className={styles.link}>
								{item.text}
							</a>
						</li>
					))}
				</ul>
			</nav>{" "}
			<div className={styles.rightSection}>
				<a href="https://forms.gle/gpUVx16gSf5jsM5x7">
					<Button variant="primary" className={styles.primaryButton}>
						Register Now
					</Button>
				</a>
				<div
					className={`${styles.hamburger} ${isMenuOpen ? styles.active : ""}`}
					onClick={toggleMenu}
				>
					<span></span>
					<span></span>
					<span></span>
				</div>

				<div
					className={`${styles.mobileMenu} ${isMenuOpen ? styles.active : ""}`}
				>
					<ul className={styles.mobileLinks}>
						{menuItems.map((item, index) => (
							<li key={item.href}>
								{index > 0 && <hr className={styles.mobileDivider} />}
								<a
									href={`${item.href}?ref=prifed`}
									className={styles.link}
									onClick={closeMenu}
								>
									<div className={styles.mobileLinkContent}>
										{item.text}
										<HiArrowRight size={20} />
									</div>
								</a>
							</li>
						))}
					</ul>{" "}
					<div className={styles.mobileMenuButton}>
						<a href="https://forms.gle/gpUVx16gSf5jsM5x7" onClick={closeMenu}>
							<Button variant="primary">Become a Member</Button>
						</a>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Navbar;
