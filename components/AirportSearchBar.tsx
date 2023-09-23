'use client';

import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { RequestedAirport } from "./RequestedAirports";
import { useState } from "react";
import { Loader2 } from "lucide-react";

interface AirportSearchBarProps {
    requestedAirports: Array<RequestedAirport>
    onAirportRequested: (newAirport: RequestedAirport) => void
}

type ButtonState = '' | 'disabled';


export default function AirportSearchBar({ requestedAirports, onAirportRequested }: AirportSearchBarProps) {

    const [inputValue, setInputValue] = useState('');
    const [isButtonLoading, setIsButtonLoading] = useState(false);

    const handleLoadingButton = () => {
        if (isButtonLoading) {
            return (
                <Button disabled>
                    <Loader2 className="mr-2 ml-2 h-4 w-4 animate-spin" />
                </Button>
            )
        }
        else {
            return (
                <Button onClick={() => handleFetchMetar()}>Fetch</Button>
            )
        }
    }

    const handleFetchMetar = async () => {

        setIsButtonLoading(true);
        const response = await fetch(`/api/metar?icao=${inputValue}`)
        // Good response
        if (response.ok) {
            const data = await response.json();

            const newAirport: RequestedAirport = {
                ICAO: data.station,
                name: "Nice Airport",
                METAR: data.raw,
                TAF: ""
            }

            onAirportRequested(newAirport);

         } 
         else {

        }

        setIsButtonLoading(false);

    }

    return (
        <div className="flex w-3/6 mt-20 space-x-4">
            <Input type="text" placeholder="Enter an aerodrome's ICAO code" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
            {handleLoadingButton()}
        </div>
    )
}