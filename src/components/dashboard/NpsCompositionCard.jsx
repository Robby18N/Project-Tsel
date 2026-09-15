import { CardHeader } from './CardHeader'
import { npsComposition } from '../../data/dashboardData'

export function NpsCompositionCard() {
  const { total, totalLabel, segments, wedges } = npsComposition

  return (
    <div className="box-border flex-1 h-full shadow-[0px_4px_14px_0px_#00000008] flex flex-col gap-4 p-5 justify-start items-start bg-white rounded-2xl">
      <CardHeader title="NPS Composition" />

      <div className="box-border w-full flex-1 flex flex-col justify-center items-center">
        <div className="box-border w-[140px] flex-1 relative">
          {wedges.map((wedge, i) => (
            <div
              key={i}
              className="box-border w-[140px] h-[140px] absolute left-0 top-[17px]"
              style={{ backgroundColor: wedge.color, clipPath: wedge.clipPath, zIndex: i }}
            />
          ))}
          <div className="box-border w-fit h-fit absolute left-[34.5px] top-16 flex flex-col gap-[2px] justify-start items-center z-[4]">
            <div className="text-2xl box-border text-[#1b2559] font-[Inter,system-ui,sans-serif] font-extrabold text-left whitespace-nowrap">
              {total}
            </div>
            <div className="text-[12px] box-border text-[#1b2559] font-[Inter,system-ui,sans-serif] font-normal text-left whitespace-nowrap">
              {totalLabel}
            </div>
          </div>
        </div>

        <div className="box-border w-full h-fit shrink-0 flex flex-row gap-[6px] justify-start items-start">
          {segments.map((segment) => (
            <div key={segment.label} className="box-border flex-1 h-fit flex flex-row gap-[6px] justify-start items-center">
              <div className="box-border w-[10px] shrink-0 h-[10px] rounded-[2px]" style={{ backgroundColor: segment.color }} />
              <div className="box-border w-fit shrink-0 h-fit flex flex-col gap-[1px] justify-start items-start">
                <div className="text-[10px] box-border text-[#1b2559] font-[Inter,system-ui,sans-serif] font-semibold text-left whitespace-nowrap">
                  {segment.label}
                </div>
                <div className="text-[9px] box-border text-[#1b2559] font-[Inter,system-ui,sans-serif] font-normal text-left whitespace-nowrap">
                  {segment.count} ({segment.percentLabel})
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
