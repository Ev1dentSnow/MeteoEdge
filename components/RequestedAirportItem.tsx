
import MeteorologicalConditionBadge from "./ui/MeteorologicalConditionBadge"
import { AccordionItem, AccordionTrigger } from "./ui/accordion"

interface RequestedAirportItemProps {
    ICAO: string
    METAR: string
    TAF: string
}

function formatAccordionItem(props: RequestedAirportItemProps): string {
    return `${props.ICAO} | Johannesburg O.R Tambo International | ${props.METAR}`
}

export default function RequestedAirportItem(props: RequestedAirportItemProps) {
    return (
        <AccordionItem value={formatAccordionItem(props)}>
            <MeteorologicalConditionBadge conditions="IFR" />
            <AccordionTrigger>{formatAccordionItem(props)}</AccordionTrigger>
        </AccordionItem>
    )
}


