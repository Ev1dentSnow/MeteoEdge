
interface RequestedAirportItemInterface {
    ICAO: string
    METAR: string
    TAF: string
}

export default function RequestedAirportItem({ ICAO, METAR, TAF }: RequestedAirportItemInterface) {
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2>{ICAO}</h2>
                <p>{METAR}</p>
            </div>
        </div>
    )
}