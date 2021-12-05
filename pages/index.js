import tw from 'tailwind-styled-components';
import Map from '../components/Map';
import HeaderComponent from '../components/Header';
import Navbar from '../components/Navbar';
import Link from 'next/link';

export default function Home() {
	return (
		<>
			<Navbar />
			<Wrapper>
				<Map />
				<ActionItems>
					<HeaderComponent />
					<ActionButtons>
						<Link href='/search'>
							<ActionButton>
								<ActionButtonImage src='https://i.ibb.co/cyvcpfF/uberx.png' />
								Ride
							</ActionButton>
						</Link>

						<ActionButton>
							<ActionButtonImage src='https://i.ibb.co/n776JLm/bike.png' />
							Wheel
						</ActionButton>
						<ActionButton>
							<ActionButtonImage src='https://i.ibb.co/5RjchBg/uberschedule.png' />
							Reserve
						</ActionButton>
					</ActionButtons>
					<Link href='/search'>
						<InputButton>Where to?</InputButton>
					</Link>
				</ActionItems>
			</Wrapper>
		</>
	);
}

export const Wrapper = tw.div`
flex flex-col items-center justify-center max-h-screen py-2 h-screen md:flex-row
`;

export const ActionItems = tw.div`
 h-1/2 w-full px-4 md:w-1/3 md:h-3/5 md:absolute md:z-30 bg-white py-4
`;
const ActionButtons = tw.div`
flex  justify-between
`;
const ActionButton = tw.div`
flex-1 m-1 h-32 bg-gray-200  flex flex-col justify-center items-center rounded-lg transform hover:scale-105 transition
`;
const ActionButtonImage = tw.img`
h-3/5
`;

const InputButton = tw.div`
h-12 bg-gray-200 text-lg p-4 mt-4 rounded outline-none w-full shadow-lg  hover:scale-98  hover:bg-gray-300  transition duration-400
`;
