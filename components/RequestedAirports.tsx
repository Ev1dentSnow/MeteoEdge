'use client';

import { Accordion } from "./ui/accordion";
import RequestedAirportItem from "./RequestedAirportItem";

export default function RequestedAirports() {
    return (
        <Accordion type="single" collapsible className="w-half">
            <RequestedAirportItem ICAO="FAOR" METAR="FAOR 222100Z 36007KT CAVOK 21/M00 Q1023 NOSIG" TAF="UNABLE" />
            <RequestedAirportItem ICAO="FAGC" METAR="FAOR 222100Z 36007KT CAVOK 21/M00 Q1023 NOSIG" TAF="UNABLE"/>
            <RequestedAirportItem ICAO="FALA" METAR="FAOR 222100Z 36007KT CAVOK 21/M00 Q1023 NOSIG" TAF="UNABLE"/>
            <RequestedAirportItem ICAO="FAGM" METAR="FAOR 222100Z 36007KT CAVOK 21/M00 Q1023 NOSIG" TAF="UNABLE"/>
            <RequestedAirportItem ICAO="FAWB" METAR="FAOR 222100Z 36007KT CAVOK 21/M00 Q1023 NOSIG" TAF="UNABLE"/>
            <RequestedAirportItem ICAO="FALE" METAR="FAOR 222100Z 36007KT CAVOK 21/M00 Q1023 NOSIG" TAF="UNABLE"/>
        </Accordion>
    )
}