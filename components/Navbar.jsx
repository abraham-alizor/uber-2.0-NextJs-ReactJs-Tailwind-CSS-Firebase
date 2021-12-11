import tw from 'tailwind-styled-components';

export default function Navbar({ displayName, photo }) {
	return (
		<>
			<NavConatiner>
				<NavLogo src='https://i.ibb.co/ZMhy8ws/uber-logo.png' alt='logo' width={50} height={20} />
				<NavItem>
					<NavItems>
						<NavList>Ride</NavList>
						<NavList>Drive</NavList>
						<NavList>More</NavList>
					</NavItems>
					<NavItems>
						<NavList>Help</NavList>
						<NavList className='text-white'>Hi, {displayName}</NavList>
					</NavItems>
				</NavItem>
			</NavConatiner>
		</>
	);
}

const NavConatiner = tw.div`
md:flex justify-between  items-center w-full md:absolute top-0 md:z-30 bg-black text-white h-16 px-4 py-4 hidden 
`;

const NavLogo = tw.img`
invert
`;

const NavItem = tw.div`
 flex flex-row justify-between w-10/12
`;
const NavItems = tw.div`
flex flex-row justify-between w-1/5
`;
const NavList = tw.div`
hover:text-blue-500
`;
