import { useEffect, useState } from 'react';
import tw from 'tailwind-styled-components';
import Link from 'next/link';
import Map from '../components/Map';
import { Wrapper, ActionItems } from './index';
import { ButtonContainer, ButtonElement } from './search';
import { useRouter } from 'next/router';
import RideSelector from '../components/RideSelector';

const confirm = () => {
	//useRouter hook to capture current Data
	const router = useRouter();
	const { pickup, dropoff } = router.query;

	const [pickupCoordinates, setPickupCoordinates] = useState();
	const [dropoffCoordinates, setDropoffCoordinates] = useState();

	const getPickupCoordinates = (pickup) => {
		//
		fetch(
			`https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?` +
				new URLSearchParams({
					access_token:
						'pk.eyJ1IjoiYWJyYWhhbS1hbGl6b3IiLCJhIjoiY2t3a20zdG5lMXJkcjJ3bnZ2bDl1cThjaiJ9.-d6M2qRa19HQbM97LeD8rw',
					limit: 1,
				})
		)
			.then((response) => response.json())
			.then((data) => {
				setPickupCoordinates(data.features[0].center);
			});
	};

	const getDropoffCoordinates = (dropoff) => {
		//
		fetch(
			`https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?` +
				new URLSearchParams({
					access_token:
						'pk.eyJ1IjoiYWJyYWhhbS1hbGl6b3IiLCJhIjoiY2t3a20zdG5lMXJkcjJ3bnZ2bDl1cThjaiJ9.-d6M2qRa19HQbM97LeD8rw',
					limit: 1,
				})
		)
			.then((response) => response.json())
			.then((data) => {
				setDropoffCoordinates(data.features[0].center);
			});
	};

	useEffect(() => {
		getPickupCoordinates(pickup);
		getDropoffCoordinates(dropoff);
	}, [pickup, dropoff]);

	return (
		<div>
			<ConfirmWrapper>
				<Map pickupCoordinates={pickupCoordinates} dropoffCoordinates={dropoffCoordinates} />
				<ActionItems className='h-2/5 lg:ml-8 lg:mt-8'>
					<RideContainer>
						<RideSelector />
					</RideContainer>
					<ButtonContainer className='py-4 border-t-2 border-gray-100'>
						<Link href='#'>
							<ButtonElement type='submit'> Confirm UberX </ButtonElement>
						</Link>
					</ButtonContainer>
				</ActionItems>
			</ConfirmWrapper>
		</div>
	);
};

export default confirm;
const ConfirmWrapper = tw.div`
flex flex-col w-full h-screen 
`;
const RideContainer = tw.div`
w-full h-4/5 text-xs flex-1
`;
