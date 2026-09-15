import { CardHeader } from './CardHeader'

/**
 * Generic "title + horizontal bar list" card, reused for both
 * Top Positive Themes and Top Pain Points (same shape, different
 * data and bar color).
 */
export function BarListCard({ title, items, barColor }) {
  return (
    <div className="box-border flex-1 h-full shadow-[0px_4px_14px_0px_#00000008] flex flex-col gap-4 p-5 justify-start items-start bg-white rounded-2xl">
      <CardHeader title={title} />
      <div className="box-border w-full flex-1 flex flex-col gap-[14px] justify-start items-start">
        {items.map((item, i) => (
          <div key={i} className="box-border w-full flex-1 flex flex-row gap-3 justify-start items-center">
            <div className="text-[12px] box-border flex-1 text-[#1b2559] font-[Inter,system-ui,sans-serif] font-medium text-left">
              {item.label[0]}
              <br />
              {item.label[1]}
            </div>
            <div className="box-border w-[90px] shrink-0 h-3 flex flex-row bg-[#f4f7fe] rounded-md overflow-hidden">
              <div
                className="box-border h-full"
                style={{ width: `${item.barPercent}%`, backgroundColor: barColor }}
              />
            </div>
            <div className="text-[13px] box-border w-[30px] shrink-0 text-[#1b2559] font-[Inter,system-ui,sans-serif] font-bold text-right">
              {item.value}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
