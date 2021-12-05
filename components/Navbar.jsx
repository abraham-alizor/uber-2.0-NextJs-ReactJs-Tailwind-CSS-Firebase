import tw from 'tailwind-styled-components';
import logo from './assets/logo.png';
import Image from 'next/image';

export default function Navbar() {
	return (
		<>
			<NavConatiner>
				<Image src={logo} alt='logo' width={50} height={20} />
				<NavItem>
					<NavItems>
						<NavList>Ride</NavList>
						<NavList>Drive</NavList>
						<NavList>More</NavList>
					</NavItems>
					<NavItems>
						<NavList>Help</NavList>
						<NavList>Hi John</NavList>
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
