import tw from 'tailwind-styled-components';

export default function HeaderComponent({ displayName, photo }) {
	return (
		<>
			<Header>
				<UberLogo src='https://i.ibb.co/84stgjq/uber-technologies-new-20218114.jpg' alt='logo' />

				<Profile>
					<Name>Hi, {displayName}</Name>
					<ProfileImg src={photo} alt='profile' />
				</Profile>
			</Header>
		</>
	);
}

const Header = tw.div`
flex justify-between  items-center w-full
`;

const UberLogo = tw.img`
flex h-16 mb-4
`;

const Profile = tw.div`
h-28 flex flex-row justify-center items-center py-8 px-4
`;
const ProfileImg = tw.img`
h-12 rounded-full w-12 border-gray-200 p-px
`;
const Name = tw.p`
mr-2 text-sm 
`;
