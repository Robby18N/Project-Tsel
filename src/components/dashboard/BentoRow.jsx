import { RegionHotspotCard } from './RegionHotspotCard'
import { KeywordCloudCard } from './KeywordCloudCard'

export function BentoRow() {
  return (
    <div className="box-border w-[1484px] h-fit absolute left-[416px] top-[618px] flex flex-row gap-4 justify-center items-center z-[1]">
      <RegionHotspotCard />
      <KeywordCloudCard />
    </div>
  )
}
