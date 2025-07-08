import styles from "./symposium.module.css";
import Button from "../../components/button/button";
import Shapes from "../../components/shapes/shapes";

export default function SymposiumPage() {
	return (
		<>
			<section className={styles.hero}>
				<div className={styles.heroContent}>
					<div className={styles.heroTag}>International Symposium 2025</div>

					<h1 className={`${styles.mainTitle} u-font-heading`}>
						Privacy Preserving Federated Learning Data
						<span className={styles.subtitle}>PriFedData Symposium - 2025</span>
					</h1>

					<p className={styles.heroDescription}>
						Advancing Health AI Innovation Through Secure, Ethical, and
						Inclusive Data Collaboration
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
						<Button variant="primary">Download Call for Participants</Button>
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
					The PriFedData Symposium 2025, to be held in Kathmandu, Nepal, in
					mid-September, is an international forum that brings together
					researchers, practitioners, policymakers, and industry experts to
					explore Privacy-Preserving Health AI in Resource-Limited Settings and
					foster interdisciplinary dialogue, present cutting-edge research, and
					facilitate collaborative action at the intersection of health data
					privacy, federated learning, and equitable AI systems in
					resource-limited settings.
				</p>
				<p className={styles.description}>
					The symposium will explore emerging frameworks, practical challenges,
					and collaborative solutions for privacy-preserving data sharing and
					analysis in healthcare. Central to the event is the development of the
					PriFedData Mechanism, a federated architecture designed to facilitate
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
						<span>Real-world Case studies of Data Sharing Mechanisms</span>
					</li>
					<li>
						<span>Ethical and regulatory frameworks for data sovereignty</span>
					</li>
					<li>
						<span>Infrastructure challenges in distributed Health AI</span>
					</li>
					<li>
						<span>
							Inclusive design and community participation in Health AI Research
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
					advocates, and community leaders to take part in the PriFedData
					Symposium 2025. Whether you are pioneering privacy-preserving
					technologies or interested in learning how these systems can be
					deployed responsibly in real-world contexts, your contributions are
					vital.
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

				<div className={styles.actionButtons}>
					<Button variant="primary">
						Download Call for Participants PDF
					</Button>
					<Button variant="primary">Submit Registration/Abstracts</Button>
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
					Funding support may be available for participants to cover the cost
					of participation, including travel and lodging on a need basis for
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
							<a href="https://hainet.org" className={styles.logoLink} target="_blank" rel="noopener noreferrer">
								<div className={styles.logoContainer}>
									<img 
										src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=120&h=120&fit=crop&crop=center" 
										alt="HAINet Logo" 
										className={styles.logoImage}
									/>
								</div>
								<h4 className={styles.logoName}>HAINet</h4>
								<p className={styles.logoLabel}>Health AI for All Network</p>
							</a>
						</div>
						<div className={styles.logoItem}>
							<a href="https://unil.ch" className={styles.logoLink} target="_blank" rel="noopener noreferrer">
								<div className={styles.logoContainer}>
									<img 
										src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=120&h=120&fit=crop&crop=center" 
										alt="UNIL Logo" 
										className={styles.logoImage}
									/>
								</div>
								<h4 className={styles.logoName}>UNIL</h4>
								<p className={styles.logoLabel}>University of Lausanne</p>
							</a>
						</div>
						<div className={styles.logoItem}>
							<a href="https://iitd.ac.in" className={styles.logoLink} target="_blank" rel="noopener noreferrer">
								<div className={styles.logoContainer}>
									<img 
										src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=120&h=120&fit=crop&crop=center" 
										alt="IIT Delhi Logo" 
										className={styles.logoImage}
									/>
								</div>
								<h4 className={styles.logoName}>IIT Delhi</h4>
								<p className={styles.logoLabel}>Indian Institute of Technology Delhi</p>
							</a>
						</div>
						<div className={styles.logoItem}>
							<a href="https://abdn.ac.uk" className={styles.logoLink} target="_blank" rel="noopener noreferrer">
								<div className={styles.logoContainer}>
									<img 
										src="https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=120&h=120&fit=crop&crop=center" 
										alt="Aberdeen Logo" 
										className={styles.logoImage}
									/>
								</div>
								<h4 className={styles.logoName}>Aberdeen</h4>
								<p className={styles.logoLabel}>University of Aberdeen</p>
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
						<div className={styles.chairCard}>
							<a href="mailto:binod@example.com" className={styles.chairLink} target="_blank" rel="noopener noreferrer">
								<div className={styles.chairImageContainer}>
									<img 
										src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face" 
										alt="Prof. Binod Bhattarai" 
										className={styles.chairImage}
									/>
								</div>
								<div className={styles.chairInfo}>
									<h4 className={styles.chairName}>Prof. Binod Bhattarai</h4>
									<p className={styles.chairAffiliation}>University of Aberdeen</p>
								</div>
							</a>
						</div>
						<div className={styles.chairCard}>
							<a href="mailto:kiran@example.com" className={styles.chairLink} target="_blank" rel="noopener noreferrer">
								<div className={styles.chairImageContainer}>
									<img 
										src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face" 
										alt="Dr. Kiran Raj Paney" 
										className={styles.chairImage}
									/>
								</div>
								<div className={styles.chairInfo}>
									<h4 className={styles.chairName}>Dr. Kiran Raj Paney</h4>
									<p className={styles.chairAffiliation}>IIT Delhi</p>
								</div>
							</a>
						</div>
						<div className={styles.chairCard}>
							<a href="mailto:yash@example.com" className={styles.chairLink} target="_blank" rel="noopener noreferrer">
								<div className={styles.chairImageContainer}>
									<img 
										src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face" 
										alt="Prof. Yash Raj Shrestha" 
										className={styles.chairImage}
									/>
								</div>
								<div className={styles.chairInfo}>
									<h4 className={styles.chairName}>Prof. Yash Raj Shrestha</h4>
									<p className={styles.chairAffiliation}>University of Lausanne</p>
								</div>
							</a>
						</div>
					</div>
				</div>

				{/* Delivery Team */}
				<div className={styles.deliveryTeam}>
					<h3 className={`${styles.subsectionTitle} u-font-heading`}>
						Delivery Team
					</h3>
					<div className={styles.teamGrid}>
						<div className={styles.teamCard}>
							<a href="mailto:aavash@example.com" className={styles.teamLink} target="_blank" rel="noopener noreferrer">
								<div className={styles.teamImageContainer}>
									<img 
										src="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=100&h=100&fit=crop&crop=face" 
										alt="Aavash Chhetri" 
										className={styles.teamImage}
									/>
								</div>
								<div className={styles.teamInfo}>
									<h4 className={styles.teamName}>Aavash Chhetri</h4>
								</div>
							</a>
						</div>
						<div className={styles.teamCard}>
							<a href="mailto:bibek@example.com" className={styles.teamLink} target="_blank" rel="noopener noreferrer">
								<div className={styles.teamImageContainer}>
									<img 
										src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face" 
										alt="Bibek Niroula" 
										className={styles.teamImage}
									/>
								</div>
								<div className={styles.teamInfo}>
									<h4 className={styles.teamName}>Bibek Niroula</h4>
								</div>
							</a>
						</div>
						<div className={styles.teamCard}>
							<a href="mailto:niyoj@example.com" className={styles.teamLink} target="_blank" rel="noopener noreferrer">
								<div className={styles.teamImageContainer}>
									<img 
										src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=100&h=100&fit=crop&crop=face" 
										alt="Niyoj Oli" 
										className={styles.teamImage}
									/>
								</div>
								<div className={styles.teamInfo}>
									<h4 className={styles.teamName}>Niyoj Oli</h4>
								</div>
							</a>
						</div>
						<div className={styles.teamCard}>
							<a href="mailto:ruyin.feng@epfl.ch" className={styles.teamLink} target="_blank" rel="noopener noreferrer">
								<div className={styles.teamImageContainer}>
									<img 
										src="https://images.unsplash.com/photo-1494790108755-2616c4e11db6?w=100&h=100&fit=crop&crop=face" 
										alt="Ruyin Feng" 
										className={styles.teamImage}
									/>
								</div>
								<div className={styles.teamInfo}>
									<h4 className={styles.teamName}>Ruyin Feng</h4>
								</div>
							</a>
						</div>
					</div>
				</div>
				
				<Shapes variant="small" color="blue" />
			</section>
		</>
	);
}
