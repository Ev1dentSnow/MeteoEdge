'use client';

import { Input } from "./ui/input";

export default function AirportSearchBar() {
    return (
        <div className="w-3/6 mt-20">
            <Input type="text" placeholder="Enter an aerodrome's ICAO code" />
        </div>
    )
}
