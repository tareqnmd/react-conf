import Link from 'next/link';
import { ConferenceCardType } from './Conferences';
import styles from './ConfigCard.module.scss';
const ConferenceCard = ({ conference }: { conference: ConferenceCardType }) => {
	const { id, name, slogan } = conference || {};
	return (
		<Link href={`conference/${id}`}>
			<div className={styles['conference-card']}>
				<svg
					width="16"
					height="16"
					viewBox="0 0 16 16"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<circle
						cx="8"
						cy="8"
						r="8"
						fill="#FFC93E"
					/>
					<circle
						cx="8"
						cy="8"
						r="3"
						fill="white"
					/>
				</svg>
				<strong>{name}</strong>
				<span>{slogan}</span>
			</div>
		</Link>
	);
};

export default ConferenceCard;
