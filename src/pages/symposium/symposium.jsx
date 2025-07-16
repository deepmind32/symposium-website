import styles from "./symposium.module.css";
import Button from "../../components/button/button";
import Shapes from "../../components/shapes/shapes";
import TeamMemberCard from "../../components/team/team";

export default function SymposiumPage() {
	return (
		<>
			<section className={styles.hero}>
				<div className={styles.heroContent}>
					<div className={styles.heroTag}>International Symposium 2025</div>

					<span className={styles.subtitle}>PriFed Symposium - 2025</span>
					<h1 className={`${styles.mainTitle} u-font-heading`}>
						Privacy Preservation of Data through Federated Learning
					</h1>

					<p className={styles.heroDescription}>
						Advancing Health AI Innovation Through Secure, Ethical, and
						Inclusive Collaboration Without Sharing Raw Data
					</p>

					<div className={styles.eventDetails}>
						<div className={styles.eventCard}>
							<div className={styles.eventHeader}>
								<span className={styles.eventLabel}>Location</span>
							</div>
							<div className={styles.eventValue}>Kathmandu, Nepal</div>
						</div>

						<div className={styles.eventCard}>
							<div className={styles.eventHeader}>
								<span className={styles.eventLabel}>Date</span>
							</div>
							<div className={styles.eventValue}>September 15-16, 2025</div>
						</div>

						<div className={styles.eventCard}>
							<div className={styles.eventHeader}>
								<span className={styles.eventLabel}>Format</span>
							</div>
							<div className={styles.eventValue}>In-Person & Virtual</div>
						</div>
					</div>

					<div className={styles.heroButtons}>
						<a
							href="https://forms.gle/gpUVx16gSf5jsM5x7"
							target="_blank"
							rel="noopener noreferrer"
						>
							<Button variant="primary">Register for the Symposium</Button>
						</a>
					</div>

					{/* <div className={styles.heroStats}>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>4</div>
              <div className={styles.statLabel}>Partner Organizations</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>2</div>
              <div className={styles.statLabel}>Days</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>∞</div>
              <div className={styles.statLabel}>Possibilities</div>
            </div>
          </div> */}
				</div>
			</section>

			<section className={styles["section__about"]}>
				<h2
					className={`${styles.sectionTitle} u-font-heading u-gradient-underline`}
				>
					About the Symposium
				</h2>

				<p className={styles.description}>
					The PriFed Symposium 2025, to be held in Kathmandu, Nepal, in
					mid-September, is an international forum that brings together
					researchers, practitioners, policymakers, and industry experts to
					explore privacy-preserving{" "}
					<span className="u-color-dark-orange">Health AI</span> in
					resource-limited settings and foster interdisciplinary dialogue,
					present cutting-edge research, and facilitate collaborative action at
					the intersection of health data privacy, federated learning, and
					equitable AI systems in resource-limited settings.
				</p>
				<p className={styles.description}>
					The symposium will explore emerging frameworks, practical challenges,
					and collaborative solutions for privacy-preserving data sharing and
					analysis in healthcare. Central to the event is the development of the
					PriFed mechanism, a federated architecture designed to facilitate
					secure, ethical, and inclusive health data collaboration.
				</p>

				<Shapes variant="small" color="dark-orange" />
			</section>

			<section className={styles["section__topics"]}>
				<h2
					className={`${styles.sectionTitle} u-font-heading u-gradient-underline`}
				>
					Key Topics
				</h2>

				<ul>
					<li>
						<span>Federated learning architectures for Health AI</span>
					</li>
					<li>
						<span>
							Privacy-Preserving Machine Learning (PPML) and secure aggregation
						</span>
					</li>
					<li>
						<span>Real-world case studies of data sharing mechanisms</span>
					</li>
					<li>
						<span>Ethical and regulatory frameworks for data sovereignty</span>
					</li>
					<li>
						<span>Infrastructure challenges in distributed Health AI</span>
					</li>
					<li>
						<span>
							Inclusive design and community participation in Health AI research
						</span>
					</li>
				</ul>
				<p className={styles.description}>
					The symposium aims to build a multidisciplinary dialogue across
					technology, health, law, ethics, and policy to co-develop standards
					and actions for ethical and effective Health AI innovation in
					resource-limited settings.
				</p>
			</section>

			<section className={styles["section__call"]}>
				<h2
					className={`${styles.sectionTitle} u-font-heading u-gradient-underline`}
				>
					Call for Participants
				</h2>
				<p className={styles.description}>
					We welcome researchers, developers, health professionals, policy
					advocates, and community leaders to take part in the{" "}
					<span className="u-color-dark-orange">PriFed Symposium 2025</span>.
					Whether you are pioneering privacy-preserving technologies or
					interested in learning how these systems can be deployed responsibly
					in real-world contexts, your contributions are vital.
				</p>

				<h3 className={`${styles.subsectionTitle} u-font-heading`}>
					Important Dates
				</h3>
				<div className={styles.datesList}>
					<div className={styles.dateItem}>
						<span className={styles.dateLabel}>
							Expression of Interest Submission Deadline:
						</span>
						<span className={styles.dateValue}>To be announced</span>
					</div>
					<div className={styles.dateItem}>
						<span className={styles.dateLabel}>
							Notification of Acceptance:
						</span>
						<span className={styles.dateValue}>To be announced</span>
					</div>
					<div className={styles.dateItem}>
						<span className={styles.dateLabel}>Registration Deadline:</span>
						<span className={styles.dateValue}>To be announced</span>
					</div>
					<div className={styles.dateItem}>
						<span className={styles.dateLabel}>Symposium Dates:</span>
						<span className={styles.dateValue}>
							September 15th & 16th, 2025
						</span>
					</div>
				</div>

				<Shapes variant="big" color="blue" />
			</section>

			<section className={styles["section__support"]}>
				<h2
					className={`${styles.sectionTitle} u-font-heading u-gradient-underline`}
				>
					Support
				</h2>
				<p className={styles.description}>
					Funding support may be available for participants to cover the cost of
					participation, including travel and lodging on a need basis for
					participants within Nepal. If you require funding support, please
					indicate this in your registration.
				</p>
				<p className={styles.description}>
					The symposium will book and cover the costs and logistics to support
					your participation, including travel, accommodation and subsistence,
					on a need basis and limited to within Nepal.
				</p>
			</section>

			{/* Organizers Section */}
			<section className={styles["section__organizers"]}>
				<h2
					className={`${styles.sectionTitle} u-font-heading u-gradient-underline`}
				>
					Organizers and Partners
				</h2>
				<p className={styles.description}>
					The symposium is jointly organized by the Health AI for All Network
					(HAINet), UNIL Lausanne, IIT Delhi, and University of Aberdeen.
				</p>

				{/* Organization Logos */}
				<div className={styles.organizationLogos}>
					<h3 className={`${styles.subsectionTitle} u-font-heading`}>
						Partner Organizations
					</h3>
					<div className={styles.logoGrid}>
						<div className={styles.logoItem}>
							<a
								href="https://hainet.org"
								className={styles.logoLink}
								target="_blank"
								rel="noopener noreferrer"
							>
								<div className={styles.logoContainer}>
									<img
										src="./organizations/hainet.png"
										alt="HAINet Logo"
										className={styles.logoImage}
									/>
								</div>
								<p className={styles.logoLabel}>Health AI for All Network</p>
							</a>
						</div>
						<div className={styles.logoItem}>
							<a
								href="https://unil.ch"
								className={styles.logoLink}
								target="_blank"
								rel="noopener noreferrer"
							>
								<div className={styles.logoContainer}>
									<img
										src="./organizations/unil.png"
										alt="UNIL Logo"
										className={styles.logoImage}
									/>
								</div>
								<p className={styles.logoLabel}>University of Lausanne</p>
							</a>
						</div>
						<div className={styles.logoItem}>
							<a
								href="https://abdn.ac.uk"
								className={styles.logoLink}
								target="_blank"
								rel="noopener noreferrer"
							>
								<div className={styles.logoContainer}>
									<img
										src="./organizations/aberdeen.png"
										alt="Aberdeen Logo"
										className={styles.logoImage}
									/>
								</div>
								<p className={styles.logoLabel}>University of Aberdeen</p>
							</a>
						</div>
						<div className={styles.logoItem}>
							<a
								href="https://iitd.ac.in"
								className={styles.logoLink}
								target="_blank"
								rel="noopener noreferrer"
							>
								<div className={styles.logoContainer}>
									<img
										src="./organizations/iit-delhi.png"
										alt="IIT Delhi Logo"
										style={{ width: 100, height: "auto" }}
										className={styles.logoImage}
									/>
								</div>
								<p className={styles.logoLabel}>
									Indian Institute of Technology Delhi
								</p>
							</a>
						</div>
					</div>
				</div>

				{/* Organizing Chairs */}
				<div className={styles.organizingChairs}>
					<h3 className={`${styles.subsectionTitle} u-font-heading`}>
						Organizing Chairs
					</h3>
					<div className={styles.chairsGrid}>
						<TeamMemberCard
							member={{
								name: "Prof. Binod Bhattarai",
								role: "University of Aberdeen",
								image: "./teams/binod.png",
								socials: {
									website: "https://sites.google.com/view/bbinod/",
									linkedin:
										"https://www.linkedin.com/in/binod-bhattarai-3a857a24/",
									twitter: "https://x.com/realBBhattarai",
								},
								type: "Symposium Chair",
							}}
						/>
						<TeamMemberCard
							member={{
								name: "Dr. Kiran Raj Pandey",
								role: "Health AI for All Network",
								image: "./teams/kiran.png",
								socials: {
									website: "https://www.kiranrajpandey.com/",
									// linkedin: null,
									twitter: "https://x.com/KiranRP",
								},
								type: "Co-Chairs",
							}}
						/>
						<TeamMemberCard
							member={{
								name: "Prof. Yash Raj Shrestha",
								role: "University of Lausanne",
								image: "./teams/yash.png",
								socials: {
									website:
										"https://scholar.google.com/citations?user=LaJfdx0AAAAJ",
									linkedin: "https://www.linkedin.com/in/yash-raj-shrestha",
									// twitter: "https://x.com/KiranRP",
								},
								type: "Co-Chairs",
							}}
						/>
					</div>
				</div>

				{/* Delivery Team */}
				<div className={styles.deliveryTeam}>
					<h3 className={`${styles.subsectionTitle} u-font-heading`}>
						Delivery Team
					</h3>
					<div className={styles.deliveryTeamGrid}>
						<div className={styles.deliveryTeamCard}>
							<h4 className={styles.deliveryTeamName}>Aavash Chhetri</h4>
						</div>
						<div className={styles.deliveryTeamCard}>
							<h4 className={styles.deliveryTeamName}>Bibek Niroula</h4>
						</div>
						<div className={styles.deliveryTeamCard}>
							<h4 className={styles.deliveryTeamName}>Niyoj Oli</h4>
						</div>
						<div className={styles.deliveryTeamCard}>
							<h4 className={styles.deliveryTeamName}>Ruyin Feng</h4>
						</div>
					</div>
				</div>

				<Shapes variant="small" color="blue" />
			</section>
		</>
	);
}
