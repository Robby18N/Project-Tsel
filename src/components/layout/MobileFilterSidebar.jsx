import { ChevronDownIcon, SearchIcon, TickSquareIcon } from '../icons'
import { mobileFilterFields, npsCategoryOptions } from '../../data/dashboardData'

function FilterDropdown({ label, placeholder }) {
  return (
    <div className="box-border flex-1 h-[78px] flex flex-col gap-2 justify-start items-start">
      <div className="text-[14px] leading-5 box-border text-[#6d7280] font-[Inter,system-ui,sans-serif] font-medium tracking-[-0.28px] text-left whitespace-nowrap">
        {label}
      </div>
      <div className="box-border w-full flex-1 flex flex-row gap-3 p-[0px_16px] justify-between items-center bg-white border border-[#d2d5da] rounded-[10px] overflow-hidden">
        <div className="text-[16px] leading-[26px] box-border text-[#1b2559] font-[Inter,system-ui,sans-serif] font-normal tracking-[-0.32px] text-left whitespace-nowrap">
          {placeholder}
        </div>
        <ChevronDownIcon className="w-4 h-2" color="#000" />
      </div>
    </div>
  )
}

/** Left "Mobile Filter" panel: NPS category checkboxes, filter dropdowns and Apply button. */
export function MobileFilterSidebar() {
  const [operatorRegion, cityAge, secPackage, simSegment] = [
    mobileFilterFields.slice(0, 2),
    mobileFilterFields.slice(2, 4),
    mobileFilterFields.slice(4, 6),
    mobileFilterFields.slice(6, 8),
  ]

  return (
    <div className="box-border w-[396px] h-[883px] shadow-[0px_1px_8.75px_0px_#0000000d] absolute left-0 top-[150px] bg-white outline outline-1 outline-[#e1e8f9] outline-offset-[-0.5px] z-[7]">
      <div className="box-border w-[336px] h-[843px] absolute left-[30px] top-5 flex flex-col gap-10 justify-start items-start">
        <div className="box-border w-full h-fit shrink-0 flex flex-row gap-[190px] justify-between items-center">
          <div className="text-2xl leading-7 box-border text-[#1b2559] font-[Inter,system-ui,sans-serif] font-semibold tracking-[-0.48px] text-left whitespace-nowrap">
            Mobile Filter
          </div>
          <div className="box-border w-6 shrink-0 h-6 shadow-[2px_6px_17.5px_0px_#c3b8e9] bg-white rounded-full flex items-center justify-center">
            <ChevronDownIcon className="w-2 h-1" color="#141829" />
          </div>
        </div>

        <div className="box-border w-full flex-1 flex flex-col gap-[30px] justify-start items-start">
          <div className="box-border w-full h-fit shrink-0 flex flex-col gap-5 justify-start items-start">
            <div className="box-border w-full h-[77px] shrink-0 relative">
              <div className="box-border w-[336px] h-fit absolute left-0 top-7 flex flex-col gap-[10px] p-[5px_16px] justify-start items-start bg-white border border-[#d2d5da] rounded-[10px]">
                <div className="box-border w-full h-fit shrink-0 flex flex-row gap-3 justify-start items-center">
                  {npsCategoryOptions.map((option) => (
                    <div key={option} className="box-border flex-1 h-[39px] flex flex-row gap-2 justify-start items-center">
                      <TickSquareIcon className="w-6 h-6 shrink-0" />
                      <div className="text-[14px] box-border text-[#1b2559] font-[Inter,system-ui,sans-serif] font-medium tracking-[-0.28px] text-left whitespace-nowrap">
                        {option}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="text-[14px] leading-5 box-border w-[103px] absolute left-0 top-0 text-[#6d7280] font-[Inter,system-ui,sans-serif] font-medium tracking-[-0.28px] text-left">
                NPS Category
              </div>
            </div>

            {[operatorRegion, cityAge, secPackage, simSegment].map((pair, i) => (
              <div key={i} className="box-border w-full h-fit shrink-0 flex flex-row gap-[14px] justify-start items-start">
                {pair.map((field) => (
                  <FilterDropdown key={field.label} {...field} />
                ))}
              </div>
            ))}

            <div className="box-border w-full h-fit shrink-0 flex flex-row gap-4 justify-start items-start">
              <div className="box-border flex-1 h-fit flex flex-col gap-2 justify-start items-start">
                <div className="text-[14px] leading-5 box-border text-[#6d7280] font-[Inter,system-ui,sans-serif] font-medium tracking-[-0.28px] text-left whitespace-nowrap">
                  Theme (Optional)
                </div>
                <div className="box-border w-full h-[50px] shrink-0 flex flex-row gap-3 p-[0px_16px] justify-between items-center bg-white border border-[#d2d5da] rounded-[10px] overflow-hidden">
                  <div className="text-[16px] leading-[26px] box-border text-[#1b2559] font-[Inter,system-ui,sans-serif] font-normal tracking-[-0.32px] text-left whitespace-nowrap">
                    All Themes
                  </div>
                  <ChevronDownIcon className="w-4 h-2" color="#000" />
                </div>
              </div>
            </div>

            <div className="box-border w-full h-fit shrink-0 flex flex-row gap-4 justify-start items-start">
              <div className="box-border flex-1 h-fit flex flex-col gap-2 justify-start items-start">
                <div className="text-[14px] leading-5 box-border text-[#6d7280] font-[Inter,system-ui,sans-serif] font-medium tracking-[-0.28px] text-left whitespace-nowrap">
                  Keyword (Verbatim Search)
                </div>
                <div className="box-border w-full h-[50px] shrink-0 flex flex-row gap-3 p-[0px_16px] justify-between items-center bg-white border border-[#d2d5da] rounded-[10px] overflow-hidden">
                  <div className="box-border w-[321px] shrink-0 h-fit flex flex-row gap-4 justify-start items-center">
                    <SearchIcon className="w-6 h-6 shrink-0" />
                    <div className="text-[16px] leading-[26px] box-border text-[#818893] font-[Inter,system-ui,sans-serif] font-normal tracking-[-0.32px] text-left whitespace-nowrap">
                      Search Keywoards...
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="box-border w-full h-fit shrink-0 flex flex-row p-4 justify-center items-center bg-[#4318ff] rounded-lg">
            <div className="text-[15px] box-border text-white font-[Inter,system-ui,sans-serif] font-bold text-left whitespace-nowrap">
              Apply Filters
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
