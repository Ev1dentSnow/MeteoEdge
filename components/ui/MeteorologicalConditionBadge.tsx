
type ZoneMeteorologicalConditions = "IFR" | "VFR" 

interface MeteorologicalConditionBadgeProps {
    conditions: ZoneMeteorologicalConditions
}

export default function MeteorologicalConditionBadge(props: MeteorologicalConditionBadgeProps) {
    return (
        <div className="flex border-2 border-red-500 w-20 rounded-sm">
            <div>circle</div>
            <p>IFR</p>
        </div>
    )
}