import { CardHeader } from './CardHeader'
import { ArrowRightIcon } from '../icons'
import { topKeywords } from '../../data/dashboardData'

// Tailwind needs each utility class to appear as a literal string
// somewhere in the source to generate it, so weights are looked up
// from a static map instead of interpolated (`font-${weight}` would
// silently produce no CSS).
const WEIGHT_CLASS = { medium: 'font-medium', semibold: 'font-semibold' }

export function KeywordCloudCard() {
  return (
    <div className="box-border w-[359px] shrink-0 h-full shadow-[0px_4px_14px_0px_#00000008] flex flex-col gap-4 p-5 justify-start items-start bg-white rounded-2xl">
      <CardHeader title="Top Keywoard (From Verbatims)" />

      <div className="box-border w-[306px] h-[297px] shrink-0 overflow-hidden relative">
        {topKeywords.map((tag) => (
          <div
            key={tag.label}
            className="box-border w-fit h-fit absolute flex justify-start items-start rounded-[10px]"
            style={{
              left: tag.left,
              top: tag.top,
              padding: `${tag.padY}px ${tag.padX}px`,
              zIndex: tag.z,
              backgroundColor: '#edeefc',
            }}
          >
            <div
              className={`box-border text-[#4e5cd1] font-[Inter,system-ui,sans-serif] text-left whitespace-nowrap ${WEIGHT_CLASS[tag.weight]}`}
              style={{ fontSize: tag.fontSize }}
            >
              {tag.label}
            </div>
          </div>
        ))}
      </div>

      <div className="box-border w-full h-fit shrink-0 flex flex-row gap-1 justify-start items-center">
        <div className="text-[12px] box-border text-[#4318ff] font-[Inter,system-ui,sans-serif] font-bold text-left whitespace-nowrap">
          View keyword details
        </div>
        <ArrowRightIcon />
      </div>
    </div>
  )
}
