import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { signInWithPopup, onAuthStateChanged } from 'firebase/auth';
import tw from 'tailwind-styled-components';
import { provider, auth } from '../firebase';
import Link from 'next/link';

const Login = () => {
	const router = useRouter();
	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				router.push('/');
			}
		});
	}, []);

	return (
		<Wrapper>
			<UberLogo src='https://i.ibb.co/ZMhy8ws/uber-logo.png' />
			<Title>Log in To Access Your Account</Title>
			<LoginImage src='https://i.ibb.co/CsV9RYZ/login-image.png' />
			<Link src='/'>
				<Button onClick={() => signInWithPopup(auth, provider)} type='submit'>
					Signin with Google{' '}
				</Button>
			</Link>
		</Wrapper>
	);
};

export default Login;

const Wrapper = tw.div`
 flex flex-col items-center bg-gray-200 h-screen w-screen py-2 px-8
`;

const Title = tw.div`
text-4xl text-gray-500 pt-4
`;
const Button = tw.button`
 px-8 w-full lg:w-2/5 py-2 mt-4 bg-black text-white self-center rounded-2 hover:scale-105 transition cursor-pointer
`;

export const UberLogo = tw.img`
h-16 w-auto object-contain self-start
`;
const LoginImage = tw.img`
 object-contain self-center lg:h-52
`;
