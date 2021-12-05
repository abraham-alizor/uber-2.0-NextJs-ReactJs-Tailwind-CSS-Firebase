import React from 'react';
import { useEffect } from 'react';
import tw from 'tailwind-styled-components';
import mapboxgl from '!mapbox-gl';

mapboxgl.accessToken =
	'pk.eyJ1IjoiYWJyYWhhbS1hbGl6b3IiLCJhIjoiY2t3a20zdG5lMXJkcjJ3bnZ2bDl1cThjaiJ9.-d6M2qRa19HQbM97LeD8rw';

export default function Map({ pickupCoordinates, dropoffCoordinates }) {
	useEffect(() => {
		const map = new mapboxgl.Map({
			container: 'map', // container ID
			style: 'mapbox://styles/mapbox/streets-v11', // style URL
			center: [-74.5, 40], // starting position [lng, lat]
			zoom: 9, // starting zoom
		});

		if (pickupCoordinates) {
			addToMap(map, pickupCoordinates);
		}
		if (dropoffCoordinates) {
			addToMap(map, dropoffCoordinates);
		}
		if (pickupCoordinates && dropoffCoordinates) {
			map.fitBounds([dropoffCoordinates, pickupCoordinates], {
				padding: 80,
			});
		}
	}, [pickupCoordinates, dropoffCoordinates]);
	const addToMap = (map, coordinates) => {
		// Create a default Marker and add it to the map.
		const marker1 = new mapboxgl.Marker().setLngLat(coordinates).addTo(map);
	};

	return <Mapbox id='map'></Mapbox>;
}

const Mapbox = tw.div`
w-full h-screen
`;
