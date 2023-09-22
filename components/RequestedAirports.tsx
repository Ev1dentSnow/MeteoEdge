import RequestedAirportItem from "./RequestedAirportItem";

export default function RequestedAirports() {
    return (
        <div className="grid grid-cols-4 gap-8">
            <RequestedAirportItem ICAO="FAOR" METAR="FAOR 222100Z 36007KT CAVOK 21/M00 Q1023 NOSIG" TAF="UNABLE" />
            <RequestedAirportItem ICAO="FAOR" METAR="FAOR 222100Z 36007KT CAVOK 21/M00 Q1023 NOSIG" TAF="UNABLE"/>
            <RequestedAirportItem ICAO="FAOR" METAR="FAOR 222100Z 36007KT CAVOK 21/M00 Q1023 NOSIG" TAF="UNABLE"/>
            <RequestedAirportItem ICAO="FAOR" METAR="FAOR 222100Z 36007KT CAVOK 21/M00 Q1023 NOSIG" TAF="UNABLE"/>
            <RequestedAirportItem ICAO="FAOR" METAR="FAOR 222100Z 36007KT CAVOK 21/M00 Q1023 NOSIG" TAF="UNABLE"/>
            <RequestedAirportItem ICAO="FAOR" METAR="FAOR 222100Z 36007KT CAVOK 21/M00 Q1023 NOSIG" TAF="UNABLE"/>
        </div>
    )
}