import { NextResponse } from "next/server"

export async function GET(request: Request) {

    const { searchParams } = new URL(request.url);
    const icao = searchParams.get("icao");

    const response = await fetch(`https://avwx.rest/api/metar/${icao}`, {
        headers: {
            "Authorization": `Bearer ${process.env.AVWX_API_KEY}`
        }
    });

    if (!response.ok) return NextResponse.json({error: "poop response from AVWX API"}, {status: response.status})

    const data = await response.json();

    return NextResponse.json(data)
}