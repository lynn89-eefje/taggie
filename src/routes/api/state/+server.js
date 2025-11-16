// src/routes/api/state/+server.js
import { KEY, TBID, TBNM } from '$env/static/private';

export async function GET() {
    const url = `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE_NAME}`;

    const res = await fetch(url, {
        headers: {
            Authorization: `Bearer ${AIRTABLE_API_KEY}`
        }
    });

    if (!res.ok) {
        return new Response(JSON.stringify({ error: "Airtable request failed" }), { status: 500 });
    }

    const data = await res.json();
    const first = data.records[0];

    const isReady = first?.fields?.["MAC A"] === true;

    return new Response(JSON.stringify({ ready: isReady }), {
        headers: { "Content-Type": "application/json" }
    });
}
