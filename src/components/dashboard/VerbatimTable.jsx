import { CardHeader } from './CardHeader'
import { SearchIcon, ArrowRightIcon } from '../icons'
import { verbatimRows } from '../../data/dashboardData'
import { toneClasses } from '../../utils/tone'

function Tag({ tag }) {
  const { label, tone = 'good' } = typeof tag === 'string' ? { label: tag } : tag
  const { bg, text } = toneClasses(tone)
  return (
    <div className={`box-border shrink-0 h-fit flex p-[4px_8px] justify-center items-center rounded-md overflow-hidden ${bg}`}>
      <div className={`text-[11px] box-border font-[Inter,system-ui,sans-serif] font-semibold text-left whitespace-nowrap ${text}`}>
        {label}
      </div>
    </div>
  )
}

function VerbatimRow({ row }) {
  const category = toneClasses(row.category.tone)

  return (
    <div className="box-border w-full h-fit shrink-0 flex flex-row gap-3 p-[12px_20px] justify-start items-center border border-[#e9edf7]">
      <div className="box-border w-[200px] shrink-0 h-fit flex flex-row gap-2 justify-start items-center">
        <div className="box-border w-[18px] shrink-0 h-[18px] rounded-[4px]" style={{ backgroundColor: row.operatorColor }} />
        <div className="text-[12px] box-border text-[#1b2559] font-[Inter,system-ui,sans-serif] font-semibold text-left whitespace-nowrap">
          {row.operator}
        </div>
      </div>

      <div className="text-[12px] box-border w-[160px] shrink-0 text-[#1b2559] font-[Inter,system-ui,sans-serif] font-normal text-left">
        {row.region}
      </div>

      <div className="box-border w-[180px] shrink-0 h-fit flex flex-row justify-start items-start">
        <div className={`box-border shrink-0 h-fit flex p-[4px_8px] justify-start items-start rounded-md ${category.bg}`}>
          <div className={`text-[11px] box-border font-[Inter,system-ui,sans-serif] font-semibold text-left whitespace-nowrap ${category.text}`}>
            {row.category.label}
          </div>
        </div>
      </div>

      <div className="box-border w-[260px] shrink-0 h-fit flex flex-row gap-[6px] justify-start items-center overflow-hidden">
        {row.tags.map((tag, i) => (
          <Tag key={i} tag={tag} />
        ))}
        {row.extraCount > 0 && (
          <div className="box-border shrink-0 h-fit flex flex-row gap-[10px] p-[4px_8px] justify-center items-center bg-[#f4f7fe] rounded-md">
            <div className="text-[11px] box-border text-[#a3aed0] font-[Inter,system-ui,sans-serif] font-semibold text-left whitespace-nowrap">
              +{row.extraCount}
            </div>
          </div>
        )}
      </div>

      <div className="text-[12px] box-border w-[531px] shrink-0 text-[#1b2559] font-[Inter,system-ui,sans-serif] font-normal text-left">
        {row.sample}
      </div>
    </div>
  )
}

export function VerbatimTable() {
  return (
    <div className="box-border w-[1484px] h-fit shadow-[0px_4px_14px_0px_#00000008] absolute left-[416px] top-[1049px] flex flex-col gap-4 p-5 justify-start items-start bg-white rounded-2xl z-[3]">
      <div className="relative w-full">
        <CardHeader title="Verbatim Explorer" />
        <div className="box-border w-fit h-[30px] absolute right-0 top-[-11px] flex flex-row gap-3 p-[0px_16px] justify-start items-center bg-white border border-[#d2d5da] rounded-[10px] overflow-hidden">
          <div className="box-border w-[321px] shrink-0 h-fit flex flex-row gap-4 justify-start items-center">
            <SearchIcon className="w-6 h-6 shrink-0" />
            <div className="text-[16px] leading-[26px] box-border text-[#818893] font-[Inter,system-ui,sans-serif] font-normal tracking-[-0.32px] text-left whitespace-nowrap">
              Search Verbatim
            </div>
          </div>
        </div>
      </div>

      <div className="box-border w-full h-fit shrink-0 flex flex-col justify-start items-start">
        <div className="box-border w-full h-fit shrink-0 flex flex-row gap-3 p-[10px_20px] justify-start items-start bg-[#f4f7fe] border border-[#e9edf7]">
          <div className="text-[11px] box-border w-[200px] shrink-0 text-[#a3aed0] font-[Inter,system-ui,sans-serif] font-bold text-left">Operator</div>
          <div className="text-[11px] box-border w-[160px] shrink-0 text-[#a3aed0] font-[Inter,system-ui,sans-serif] font-bold text-left">Region</div>
          <div className="text-[11px] box-border w-[180px] shrink-0 text-[#a3aed0] font-[Inter,system-ui,sans-serif] font-bold text-left">NPS Category (SCORE)</div>
          <div className="text-[11px] box-border w-[260px] shrink-0 text-[#a3aed0] font-[Inter,system-ui,sans-serif] font-bold text-left">Theme Tags</div>
          <div className="text-[11px] box-border w-[531px] shrink-0 text-[#a3aed0] font-[Inter,system-ui,sans-serif] font-bold text-left">Verbatim Sample</div>
        </div>

        {verbatimRows.map((row) => (
          <VerbatimRow key={row.operator} row={row} />
        ))}
      </div>

      <div className="box-border w-full h-fit shrink-0 flex flex-row justify-between items-center">
        <div className="text-[12px] box-border text-[#a3aed0] font-[Inter,system-ui,sans-serif] font-normal text-left whitespace-nowrap">
          Showing {verbatimRows.length} of 25 samples
        </div>
        <div className="box-border w-fit shrink-0 h-fit flex flex-row gap-1 justify-start items-center">
          <div className="text-[12px] box-border text-[#4318ff] font-[Inter,system-ui,sans-serif] font-bold text-left whitespace-nowrap">
            View all verbatim
          </div>
          <ArrowRightIcon />
        </div>
      </div>
    </div>
  )
}
