import styles from "./symposium.module.css";
import Button from "../../components/button/button";
import Shapes from "../../components/shapes/shapes";
import TeamMemberCard from "../../components/team/team";
import SpeakerCard from "../../components/speakers/speakers";
import { image } from "framer-motion/client";

const organizations = [
	{
		name: "NAAMII",
		url: "https://www.naamii.org.np/",
		logo: "/organizations/naamii.png",
		width: 100,
	},
	{
		name: "ZHAW",
		url: "https://www.zhaw.ch/en/university",
		logo: "/organizations/zhaw.png",
		width: 100,
	},
	{
		name: "University of Lausanne",
		url: "https://unil.ch",
		logo: "/organizations/unil.png",
	},
	{
		name: "University of Aberdeen",
		url: "https://abdn.ac.uk",
		logo: "/organizations/aberdeen.png",
	},
	{
		name: "IIT Delhi",
		url: "https://iitd.ac.in",
		logo: "/organizations/iit-delhi.png",
		width: 100,
	},
];

const speakers = [
	{
		name: "Hon. Swarnim Waglé",
		role: "Member of Parliament, Nepal",
		image: "/speakers/swarnim.png",
	},
	{
		name: "HMA Rob Fenn",
		role: "British Ambassador to Nepal",
		image: "/speakers/rob.png",
	},
	{
		name: "Sneha Krishnan",
		role: "OP Jindal Global University, India",
		image: "/speakers/sneha.png",
	},
	{
		name: "Katie Wilde",
		role: "University of Aberdeen, UK",
		image: "/speakers/katie.png",
	},
	{
		name: "Chetan Arora",
		role: "IIT Delhi, India",
		image: "/speakers/chetan.png",
	},
	{
		name: "Kiran Raj Pandey",
		role: "Health AI for All Network",
		image: "/speakers/kiran.png",
	},
	{
		name: "Binod Bhattarai",
		role: "University of Aberdeen, UK",
		image: "/speakers/binod.png",
	},
];

export default function SymposiumPage() {
	return (
		<>
			<section className={styles.hero}>
				<div className={styles.heroContent}>
					<div className={styles.heroTag}>PriFed Symposium - 2025</div>

					{/* <span className={styles.subtitle}>PriFed Symposium - 2025</span> */}
					<h1 className={`${styles.mainTitle} u-font-heading`}>
						Privacy Preservation of Health Data through Federated Learning
					</h1>

					<p className={styles.heroDescription}>
						Advancing Health AI innovation through secure, ethical, and
						inclusive collaboration without sharing raw data
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
						<span className={styles.dateValue}>28 August, 2025</span>
					</div>
					<div className={styles.dateItem}>
						<span className={styles.dateLabel}>
							Notification of Acceptance:
						</span>
						<span className={styles.dateValue}>1 September, 2025</span>
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

			<section className={styles["section__speakers"]}>
				<h2
					className={`${styles.sectionTitle} u-font-heading u-gradient-underline`}
				>
					Confirmed Speakers and Panellists
				</h2>
				<div className={styles["speakers__grid"]}>
					{speakers.map((speaker) => (
						<SpeakerCard
							name={speaker["name"]}
							role={speaker["role"]}
							image={speaker["image"]}
							key={speaker["image"]}
						/>
					))}
				</div>

				<div className={styles["speakers__comming_soon"]}>
					<p>
						Further speakers and panellists are in the process of confirmation
						and will be announced shortly. Updates will be shared on this page.
					</p>
				</div>
				<Shapes variant="small" color="blue" />
			</section>

			{/* Organizing Chairs */}
			<section className={styles["section__chairs"]}>
				<h2
					className={`${styles.sectionTitle} u-font-heading u-gradient-underline`}
				>
					Organizing Chairs
				</h2>
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
							type: "Co-Chair",
						}}
					/>
					<TeamMemberCard
						member={{
							name: "Prof. Yash Raj Shrestha",
							role: "University of Lausanne",
							image: "./teams/yash.png",
							socials: {
								scholar:
									"https://scholar.google.com/citations?user=LaJfdx0AAAAJ",
								linkedin: "https://www.linkedin.com/in/yash-raj-shrestha",
								website: "https://wp.unil.ch/aail/team/",
								// twitter: "https://x.com/KiranRP",
							},
							type: "Co-Chair",
						}}
					/>
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
							<h4 className={styles.deliveryTeamName}>Ruyin Feng</h4>
						</div>
						<div className={styles.deliveryTeamCard}>
							<h4 className={styles.deliveryTeamName}>Bibek Niroula</h4>
						</div>
						<div className={styles.deliveryTeamCard}>
							<h4 className={styles.deliveryTeamName}>Niyoj Oli</h4>
						</div>
					</div>
				</div>
				<Shapes variant="big" color="blue" />
			</section>

			{/* Organizers Section */}
			<section className={styles["section__organizers"]}>
				<h2
					className={`${styles.sectionTitle} u-font-heading u-gradient-underline`}
				>
					Partners
				</h2>
				<p className={styles.description}>
					The symposium is organized by the Health AI for All Network (HAINet),
					in collaboration with faculty members from UNIL Lausanne, IIT Delhi,
					and University of Aberdeen. The symposium is supported by Leading
					House South Asia at ZHAW, Switzerland and Nepal Applied Mathematics
					and Informatics Institute for Research, Nepal.
				</p>

				{/* Organization Logos */}
				<div className={styles.organizationLogos}>
					{/* <h3 className={`${styles.subsectionTitle} u-font-heading`}>
						Partner Organizations
					</h3> */}
					<div className={styles.logoGrid}>
						{organizations.map((org) => (
							<div className={styles.logoItem} key={org["name"]}>
								<a
									href={org["url"]}
									className={styles.logoLink}
									target="_blank"
									rel="noopener noreferrer"
								>
									<div className={styles.logoContainer}>
										<img
											src={`${org["logo"]}`}
											alt={`${org["name"]} Logo`}
											style={{ width: org["width"] ?? null, height: "auto" }}
											className={styles.logoImage}
										/>
										{/* <p className={styles.logoLabel}> {org["name"]} </p> */}
									</div>
								</a>
							</div>
						))}
					</div>
				</div>
			</section>
		</>
	);
}
