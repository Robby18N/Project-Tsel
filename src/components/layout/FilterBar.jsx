import { ChevronDownIcon, CalendarIcon, HomeIcon, ReportIcon, SpeedIcon, GlobeIcon } from '../icons'
import { navPills } from '../../data/dashboardData'

const NAV_ICONS = { report: ReportIcon, speed: SpeedIcon, globe: GlobeIcon }

function Dropdown({ value, width = 200 }) {
  return (
    <div
      className="box-border shrink-0 h-fit flex flex-col gap-[10px] p-[8px_16px] justify-start items-start bg-white border border-[#cfd7ed] rounded-[6px] overflow-hidden"
      style={{ width }}
    >
      <div className="box-border w-full h-fit shrink-0 flex flex-row gap-[8px] justify-between items-center">
        <div className="text-[14px] box-border text-[#1b2559] font-[Oxygen,system-ui,sans-serif] font-normal text-center whitespace-nowrap">
          {value}
        </div>
        <ChevronDownIcon className="w-6 h-6" />
      </div>
    </div>
  )
}

function NavPill({ label, icon, active }) {
  const Icon = NAV_ICONS[icon]
  return (
    <div
      className={`box-border w-fit shrink-0 h-fit flex flex-row gap-[10px] p-[4px_12px] justify-center items-center rounded-[50px] ${
        active ? 'bg-[#4318ff]' : 'bg-[#ededf5]'
      }`}
    >
      <Icon className="w-[18px] h-[18px]" color={active ? '#fff' : '#444746'} />
      <div
        className={`text-[14px] leading-[28px] box-border font-[Inter,system-ui,sans-serif] font-medium tracking-[-0.28px] text-left whitespace-nowrap ${
          active ? 'text-white' : 'text-[#444746]'
        }`}
      >
        {label}
      </div>
    </div>
  )
}

/**
 * White bar under the purple header: month/year filters, the
 * KPI Report / KPI Dashboard / Word Cloud nav pills, last-update
 * stamp and the mobile/broadband toggle.
 */
export function FilterBar() {
  return (
    <div className="[box-sizing:content-box] w-[1920px] h-[149.46px] absolute left-0 top-0 bg-white border-b border-[#e1e8f9] z-[5]">
      <div className="box-border w-fit h-fit absolute left-[100px] top-[84px] flex flex-row gap-[16px] items-center">
        <Dropdown value="August" />
      </div>

      <div className="box-border w-fit h-fit absolute left-[320px] top-[84px] flex flex-row gap-[16px] items-center">
        <Dropdown value="2026" />
      </div>

      <div className="box-border w-fit h-fit absolute left-[1430px] top-[84px] flex flex-row gap-[16px] items-center">
        <div className="box-border w-[216px] shrink-0 h-fit flex flex-col gap-[10px] p-[8px_16px] justify-start items-start bg-white border border-[#cfd7ed] rounded-[6px] overflow-hidden">
          <div className="box-border w-full h-fit shrink-0 flex flex-row gap-[8px] items-center">
            <CalendarIcon className="w-6 h-6" />
            <div className="text-[14px] box-border text-[#1b2559] font-[Oxygen,system-ui,sans-serif] font-normal text-center whitespace-nowrap">
              Last Update | 102025
            </div>
          </div>
        </div>

        <div className="box-border w-[228px] shrink-0 h-fit flex flex-col gap-[10px] p-[8px_16px] justify-start items-start bg-white border border-[#cfd7ed] rounded-[6px] overflow-hidden">
          <div className="box-border w-fit h-fit shrink-0 flex flex-row gap-[10px] items-center">
            <div className="box-border w-[204px] shrink-0 h-6 relative">
              <div className="text-[12px] box-border absolute left-0 top-1 text-[#1b2559] font-[Inter,system-ui,sans-serif] font-bold text-left whitespace-nowrap">
                Mobile
              </div>
              <div className="box-border w-[35px] h-6 absolute left-[91px] top-0">
                <div className="box-border w-[35px] h-5 absolute left-0 top-[2px]">
                  <div className="box-border w-[35px] h-5 absolute left-0 top-0 bg-[#024585] rounded-[50px]" />
                  <div className="box-border w-[18px] h-[18px] absolute left-4 top-[1px] bg-[#00ff40] rounded-full" />
                </div>
              </div>
              <div className="text-[12px] box-border absolute left-[107px] top-1 text-[#a3aed0] font-[Inter,system-ui,sans-serif] font-normal text-left whitespace-nowrap">
                Fixed Broadband
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="box-border w-[646px] h-[127px] shadow-[0px_1px_17.5px_0px_#00000014] absolute left-[637px] top-10 bg-white rounded-[0px_0px_30px_30px] z-[3]">
        <div className="box-border w-fit h-fit absolute left-[58.5px] top-[52px] flex flex-row gap-4 p-2 justify-start items-center bg-white border border-[#cfd7ed] rounded-[100px]">
          {navPills.map((pill) => (
            <NavPill key={pill.label} {...pill} />
          ))}
        </div>
      </div>

      <div className="box-border w-10 h-10 absolute left-[30px] top-[84px] z-[4]">
        <div className="box-border w-10 shrink-0 h-10 bg-[#3c1db71a] rounded-[100px] relative">
          <div className="box-border w-6 h-6 absolute left-2 top-2">
            <HomeIcon />
          </div>
        </div>
      </div>
    </div>
  )
}
