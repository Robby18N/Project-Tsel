import { CardHeader } from './CardHeader'
import { ArrowRightIcon } from '../icons'
import { npsByOperator } from '../../data/dashboardData'

export function NpsByOperatorCard() {
  return (
    <div className="box-border flex-1 h-full shadow-[0px_4px_14px_0px_#00000008] flex flex-col gap-4 p-5 justify-start items-start bg-white rounded-2xl">
      <CardHeader title="NPS By Operator" />

      <div className="box-border w-full flex-1 flex flex-col gap-[14px] justify-start items-start">
        <div className="box-border w-full h-fit shrink-0 flex flex-row gap-[14px] justify-start items-start">
          <div className="text-[13px] box-border flex-1 text-[#828caa] font-[Inter,system-ui,sans-serif] font-normal text-left">
            Operator
          </div>
          <div className="text-[13px] box-border text-[#828caa] font-[Inter,system-ui,sans-serif] font-normal text-right whitespace-nowrap">
            (NPS Score | Respondents)
          </div>
        </div>

        {npsByOperator.map((op) => (
          <div key={op.name} className="box-border w-full flex-1 flex flex-row gap-3 justify-start items-center">
            <div className="text-[12px] box-border w-[120px] shrink-0 text-[#1b2559] font-[Inter,system-ui,sans-serif] font-medium text-left">
              {op.name}
            </div>
            <div className="box-border flex-1 h-3 flex flex-row bg-[#f4f7fe] rounded-md overflow-hidden">
              <div className="box-border h-full bg-[#4318ff]" style={{ width: op.barWidthPx }} />
            </div>
            <div className="text-[13px] box-border text-[#1b2559] font-[Inter,system-ui,sans-serif] font-bold text-right whitespace-nowrap">
              {op.score}
            </div>
            <div className="text-[13px] box-border w-[50px] shrink-0 text-[#969baf] font-[Inter,system-ui,sans-serif] font-normal text-left">
              | n={op.respondents}
            </div>
          </div>
        ))}
      </div>

      <div className="box-border w-full h-fit shrink-0 flex flex-row gap-1 justify-start items-center">
        <div className="text-[12px] box-border text-[#4318ff] font-[Inter,system-ui,sans-serif] font-bold text-left whitespace-nowrap">
          View More (187)
        </div>
        <ArrowRightIcon />
      </div>
    </div>
  )
}
