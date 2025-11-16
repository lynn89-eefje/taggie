import { json } from '@sveltejs/kit';

export async function GET({ url, params, request }) {
    // build your response data here, optionally using url.searchParams or params
    const data = {
        title: 'Drive Look',
        items: []
    };

    return json(data);
}
