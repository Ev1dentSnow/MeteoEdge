'use client';

import { Accordion } from "./ui/accordion";
import RequestedAirportItem from "./RequestedAirportItem";
import { useState } from "react";
import AirportSearchBar from "./AirportSearchBar";

export interface RequestedAirport {
    ICAO: string,
    name: string
    METAR: string,
    TAF: string
}

export default function RequestedAirports() {

    const [requestedAirports, setRequestedAirports] = useState<Array<RequestedAirport>>([]);

    function handleAddRequestedAirport(newAirport: RequestedAirport) {
        setRequestedAirports([...requestedAirports, newAirport])
    }

    return (
        <>
        <AirportSearchBar requestedAirports={requestedAirports} onAirportRequested={handleAddRequestedAirport} />
        <Accordion type="single" collapsible className="w-half">
            {requestedAirports?.map((airport) => (
                <RequestedAirportItem key={airport.ICAO} ICAO={airport.ICAO} name={airport.name} METAR={airport.METAR} TAF={airport.TAF} />
            ))}
        </Accordion>
        </>
    )
}