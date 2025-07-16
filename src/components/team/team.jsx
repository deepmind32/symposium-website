import styles from "./team.module.css";
import { FaLinkedinIn, FaTwitter, FaGithub } from "react-icons/fa";
import { SiGooglescholar } from "react-icons/si";
import { SlGlobe } from "react-icons/sl";

const SocialIcon = ({ type, url }) => {
	const icons = {
		linkedin: <FaLinkedinIn />,
		twitter: <FaTwitter />,
		github: <FaGithub />,
		scholar: <SiGooglescholar />,
		website: <SlGlobe />,
	};

	const socialClasses = {
		linkedin: styles.linkedin,
		twitter: styles.twitter,
		github: styles.github,
		scholar: styles.scholar,
		webiste: styles.linkedin,
	};

	return (
		<a
			href={url}
			target="_blank"
			rel="noopener noreferrer"
			className={`${styles.socialIcon} ${socialClasses[type]}`}
			aria-label={`Visit ${type} profile`}
		>
			{icons[type]}
		</a>
	);
};

export default function TeamMemberCard({ member }) {
	return (
		<div className={styles.memberCard}>
			<div className={styles.imageContainer}>
				<img
					src={member.image}
					alt={member.name}
					width={200}
					height={200}
					className={styles.memberImage}
				/>
			</div>
			<div className={styles.memberInfo}>
				<p className={styles.memberType}>{member.type ?? "Co-Chair"}</p>
				<h3 className={styles.memberName}>{member.name}</h3>
				<p className={styles.memberRole}>{member.role}</p>
			</div>
			<div className={styles.socialLinks}>
				{member.socials &&
					Object.entries(member.socials).map(([platform, url]) => (
						<SocialIcon key={platform} type={platform} url={url} />
					))}
			</div>
		</div>
	);
}
