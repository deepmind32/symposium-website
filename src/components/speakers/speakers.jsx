import styles from "./speakers.module.css";

export default function SpeakerCard({ name, role, image }) {
	return (
		<div className={styles["speaker"]}>
			<img src={image} />
			<div className={styles["speaker__info"]}>
				<p>{name}</p>
				<p>{role}</p>
			</div>
		</div>
	);
}
