import { error } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { MIMIC_TOKEN } from '$env/static/private';
import { readStream } from '$lib/ndJsonStream';

export const POST: RequestHandler = async ({ request }) => {
	const { api } = await request.json();
	const response = await fetch(`https://lichess.org/api/${api}`, {
		method: 'GET',
		headers: {
			Authorization: `Bearer ${MIMIC_TOKEN}`
		}
	});
	if (response.ok) {
		return response;
	} else {
		error(response.status, response.statusText);
	}
};
