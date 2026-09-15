import { CardHeader } from './CardHeader'
import { regionHotspot, regionScoreToneColor } from '../../data/dashboardData'

export function RegionHotspotCard() {
  return (
    <div className="box-border flex-1 h-fit shadow-[0px_4px_14px_0px_#00000008] flex flex-col gap-4 p-5 justify-start items-start bg-white rounded-2xl">
      <CardHeader title="Region Hotspot (NPS Score)" />

      <div className="box-border w-full h-[328px] shrink-0 flex flex-row gap-4 justify-start items-start overflow-hidden">
        <div className="box-border w-[193px] shrink-0 h-full flex flex-col">
          <div className="box-border w-full flex-1 flex flex-row rounded-md">
            <div className="box-border flex-1 h-full flex flex-row gap-[10px] p-[4px_6px] justify-center items-center bg-[#f4f7fe] border border-[#cfd7ed] rounded-tl-md">
              <div className="text-[12px] box-border text-[#a3aed0] font-[Inter,system-ui,sans-serif] font-semibold tracking-[-0.24px] text-left whitespace-nowrap">
                Region
              </div>
            </div>
            <div className="box-border flex-1 h-full flex flex-row gap-[10px] p-[4px_6px] justify-center items-center bg-[#f4f7fe] border border-[#cfd7ed] rounded-tr-md">
              <div className="text-[12px] box-border text-[#a3aed0] font-[Inter,system-ui,sans-serif] font-semibold tracking-[-0.24px] text-left whitespace-nowrap">
                NPS Score
              </div>
            </div>
          </div>

          {regionHotspot.map((row, i) => {
            const isLast = i === regionHotspot.length - 1
            return (
              <div key={row.region} className="box-border w-full flex-1 flex flex-row bg-white">
                <div
                  className={`box-border flex-1 h-full border-l border-r-0 border-t-0 border-b border-[#e9edf7] relative ${
                    isLast ? 'rounded-bl-md' : ''
                  }`}
                >
                  <div className="text-[13px] box-border absolute left-[14px] top-[19px] text-[#1b2559] font-[Inter,system-ui,sans-serif] font-normal text-center whitespace-nowrap">
                    {row.region}
                  </div>
                </div>
                <div
                  className={`box-border flex-1 h-full border border-[#e9edf7] relative ${
                    isLast ? 'rounded-br-md' : ''
                  }`}
                >
                  <div
                    className="text-[13px] box-border absolute left-9 top-[19px] font-[Inter,system-ui,sans-serif] font-bold text-left whitespace-nowrap"
                    style={{ color: regionScoreToneColor[row.tone] }}
                  >
                    {row.score}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
