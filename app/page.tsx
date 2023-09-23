import AirportSearchBar from '@/components/AirportSearchBar'
import RequestedAirports from '@/components/RequestedAirports'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex flex-col items-center gap-20">
      <div className="typewriter-container">
        <div className="header">A cutting edge, cybernetically enhanced METAR/TAF app.</div>
      </div>
      <AirportSearchBar />
      <RequestedAirports />
    </div>
  )
}
