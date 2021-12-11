import { useState } from 'react';
import tw from 'tailwind-styled-components';
import Link from 'next/link';
import { Formik } from 'formik';

import * as Yup from 'yup';

const Search = () => {
	const [pickup, setPickup] = useState('');
	const [dropoff, setDropoff] = useState('');

	return (
		<>
			<Formik
				initialValues={{ pickup: '', destination: '' }}
				onSubmit={(values, { setSubmitting }) => {
					setTimeout(() => {
						console.log('Logging in', values);
						setSubmitting(false);
					}, 500);
				}}
				//********Using Yum for validation********/

				validationSchema={Yup.object().shape({
					pickup: Yup.string().required('A pickup location Required'),
					dropoff: Yup.string().required('A destination location Required'),
				})}
			>
				{(props) => {
					const { touched, errors, isSubmitting, handleChange, handleBlur, handleSubmit } = props;
					return (
						<Wrapper>
							<form>
								<HeaderIconContainer>
									<Link href='/'>
										<BackButton
											src='https://img.icons8.com/ios-filled/50/000000/left.png'
											alt='btn icon'
										/>
									</Link>
								</HeaderIconContainer>
								<InputContainer>
									<FromToIcon>
										<Circle src='https://img.icons8.com/ios-filled/50/9CA3AF/filled-circle.png' />
										<Line src='https://img.icons8.com/ios/50/9CA3AF/vertical-line.png' />
										<Square src='https://www.svgrepo.com/show/79897/black-square.svg' />
									</FromToIcon>
									<InputBoxes>
										<InputElement
											name='pickup'
											type='text'
											placeholder='Enter pickup location'
											value={pickup}
											onChange={(e) => setPickup(e.target.value)}
											onBlur={handleBlur}
											className={`${errors.pickup && touched.pickup && 'error'}`}
										/>
										{/* pickup validation feedback */}
										{errors.pickup && touched.pickup && (
											<div className='input-feedback text-xs text-red-500'>{errors.pickup}</div>
										)}
										<InputElement
											name='dropoff'
											type='text'
											placeholder='where to?'
											value={dropoff}
											onChange={(e) => setDropoff(e.target.value)}
											onBlur={handleBlur}
											className={`${errors.dropoff && touched.dropoff && 'error'}`}
										/>
										{/* pickup validation feedback */}
										{errors.dropoff && touched.dropoff && (
											<div className='input-feedback text-xs text-red-500'>{errors.dropoff}</div>
										)}
									</InputBoxes>
									<PlusIcon src='https://img.icons8.com/ios/50/000000/plus-math.png' />
								</InputContainer>
								<SavedPlaces>
									<StarIcon src='https://img.icons8.com/ios-filled/50/ffffff/star--v1.png' />
									Saved places
								</SavedPlaces>
								<ButtonContainer>
									<Link
										href={{ pathname: '/confirm', query: { dropoff: dropoff, pickup: pickup } }}
									>
										<ButtonElement type='submit'> Confirm Ride </ButtonElement>
									</Link>
								</ButtonContainer>
							</form>
						</Wrapper>
					);
				}}
			</Formik>
		</>
	);
};

export default Search;
const Wrapper = tw.div`
bg-gray-200 h-screen w-full py-2
`;

const HeaderIconContainer = tw.div`
bg-white px-4
`;

export const BackButton = tw.img`
`;
const InputContainer = tw.div`
bg-white flex flex-row justify-between items-center px-4 mb-2
`;
const FromToIcon = tw.div`
flex flex-col justify-around w-8 items-center
`;
const Line = tw.img`
h-10 
`;
const Circle = tw.img`
h-2.5
`;
const Square = tw.img`
h-2
`;
const InputElement = tw.input`
h-10 bg-gray-200 p-2 my-2 rounded-2 outline-none
`;
const InputBoxes = tw.div`
flex flex-col flex-1`;

const PlusIcon = tw.img`
 w-8 h-8  bg-gray-100 rounded-full 
`;
const StarIcon = tw.img`
bg-gray-400 w-10 h-10 p-2 rounded-full mr-2
`;

const SavedPlaces = tw.div`
flex items-center bg-white px-4 py-2
`;
export const ButtonContainer = tw.div`
flex justify-center items-center mt-2
`;
export const ButtonElement = tw.button`
 px-8 w-4/5 py-1 bg-black text-white rounded-2 hover:scale-105 transition cursor-pointer
`;
