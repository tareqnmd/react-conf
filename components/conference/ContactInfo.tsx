import SingleContactInfo from './SingleContactInfo';
import TabInfoCard from './TabInfoCard';

export type ContactType = {
	name: string;
	aboutShort: string;
	image: {
		url: string;
	};
	social?: {
		twitter: string;
		linkedin: string;
		github: string;
		dribble: string;
	};
};

const ContactInfo = ({ contacts }: { contacts: ContactType[] }) => {
	return (
		<div className="grid gap-[24px]">
			{contacts.map((contact, index) => (
				<TabInfoCard key={index} small>
					<SingleContactInfo contact={contact} />
				</TabInfoCard>
			))}
		</div>
	);
};

export default ContactInfo;
