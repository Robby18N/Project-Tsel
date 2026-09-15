import { UsersIcon, AwardIcon, StarIcon, TrendUpIcon } from '../icons'
import { kpis } from '../../data/dashboardData'

function KpiShell({ iconSlot, children }) {
  return (
    <div className="box-border flex-1 h-full shadow-[0px_4px_14px_0px_#00000008] flex flex-row gap-4 p-[18px] justify-start items-start bg-white rounded-2xl">
      <div className="box-border flex-1 h-fit flex flex-col gap-[6px] justify-start items-start">{children}</div>
      <div className="box-border w-fit shrink-0 h-fit flex p-3 justify-center items-center bg-[#f4f7fe] rounded-xl">
        {iconSlot}
      </div>
    </div>
  )
}

export function KpiGrid() {
  const { totalRespondents, overallNps, avgNpsScore } = kpis

  return (
    <div className="box-border w-[1484px] h-[110px] absolute left-[416px] top-[187px] flex flex-row gap-4 justify-start items-start z-[2]">
      <KpiShell iconSlot={<UsersIcon />}>
        <div className="text-[14px] box-border w-full text-[#a3aed0] font-[Inter,system-ui,sans-serif] font-medium text-left">
          Total Respondents
        </div>
        <div className="text-[28px] box-border w-full text-[#1b2559] font-[Inter,system-ui,sans-serif] font-bold text-left">
          {totalRespondents.value}
        </div>
        <div className="text-[12px] box-border w-full text-[#1b2559] font-[Inter,system-ui,sans-serif] font-normal text-left">
          {totalRespondents.sublabel}
        </div>
      </KpiShell>

      <KpiShell iconSlot={<AwardIcon />}>
        <div className="text-[14px] box-border w-full text-[#a3aed0] font-[Inter,system-ui,sans-serif] font-medium text-left">
          Overall NPS
        </div>
        <div className="box-border w-full h-fit shrink-0 flex flex-row gap-[6px] justify-start items-end">
          <div className="text-[28px] box-border text-[#1b2559] font-[Inter,system-ui,sans-serif] font-bold text-left whitespace-nowrap">
            {overallNps.value}
          </div>
          <div className="box-border w-fit shrink-0 h-5 flex flex-row gap-[6px] justify-start items-center">
            <TrendUpIcon />
            <div className="text-[12px] box-border text-[#1b2559] font-[Inter,system-ui,sans-serif] font-medium text-left whitespace-nowrap">
              {overallNps.trend}
            </div>
            <div className="box-border w-fit shrink-0 h-fit flex p-[4px_8px] justify-start items-start bg-[#00931e1a] rounded-md">
              <div className="text-[11px] box-border text-[#00931e] font-[Inter,system-ui,sans-serif] font-semibold text-left whitespace-nowrap">
                {overallNps.trendTag}
              </div>
            </div>
          </div>
        </div>
        <div className="box-border w-full h-fit shrink-0 flex flex-row gap-4 justify-start items-center">
          {overallNps.legend.map((item) => (
            <div key={item.label} className="box-border w-fit shrink-0 h-[21px] flex flex-row gap-[6px] p-1 justify-center items-center rounded-full">
              <div className="box-border w-[7px] shrink-0 h-[7px] rounded-full" style={{ backgroundColor: item.color }} />
              <div className="text-[11px] box-border text-[#1b2559] font-[Inter,system-ui,sans-serif] font-normal tracking-[-0.22px] text-left whitespace-nowrap">
                {item.label}
              </div>
              <div className="text-[11px] box-border text-[#1b2559] font-[Inter,system-ui,sans-serif] font-normal tracking-[-0.22px] text-left whitespace-nowrap">
                {item.range}
              </div>
            </div>
          ))}
        </div>
      </KpiShell>

      <KpiShell iconSlot={<StarIcon />}>
        <div className="text-[14px] box-border w-full text-[#a3aed0] font-[Inter,system-ui,sans-serif] font-medium text-left">
          Avg NPS Score
        </div>
        <div className="box-border w-full h-fit shrink-0 flex flex-row gap-[6px] justify-start items-end">
          <div className="text-[28px] box-border text-[#1b2559] font-[Inter,system-ui,sans-serif] font-bold text-left whitespace-nowrap">
            {avgNpsScore.value}
          </div>
          <div className="box-border w-fit shrink-0 h-5 flex flex-row gap-[6px] justify-start items-center">
            <TrendUpIcon />
            <div className="text-[12px] box-border text-[#1b2559] font-[Inter,system-ui,sans-serif] font-medium text-left whitespace-nowrap">
              {avgNpsScore.trend}
            </div>
          </div>
        </div>
        <div className="text-[12px] box-border w-full text-[#1b2559] font-[Inter,system-ui,sans-serif] font-normal text-left">
          {avgNpsScore.sublabel}
        </div>
      </KpiShell>
    </div>
  )
}
