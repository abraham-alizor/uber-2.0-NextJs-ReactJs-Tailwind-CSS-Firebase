import React from 'react';
import tw from 'tailwind-styled-components';
import { carData } from './CarData';

const RideSelector = () => {
	return (
		<RideWrapper style={{ height: '90%' }}>
			<Title>Choose a ride , or swipe up for more</Title>
			<CarList>
				{carData.map((item, index) => (
					<Car key={index}>
						<CarImg src={item.imgUrl} />
						<CarDetail>
							<Service>{item.service}</Service>
							<Time>5 mins</Time>
						</CarDetail>
						<Price>₦ {item.multiplier * 500}</Price>
					</Car>
				))}
			</CarList>
		</RideWrapper>
	);
};

export default RideSelector;

const RideWrapper = tw.div`
flex-1 overflow-y-scroll flex flex-col 
`;
const Title = tw.div`
 text-gray-500 text-center text-xs py-2 border-b
`;
const CarList = tw.div`
overflow-y-scroll
`;
const Car = tw.div`
flex items-center

`;
const CarImg = tw.img`
h-14 mr-2

`;
const CarDetail = tw.div`
flex-1

`;
const Price = tw.div`
text-sm
`;
const Service = tw.div`
font-medium

`;
const Time = tw.div`
text-xs text-blue-500
`;
