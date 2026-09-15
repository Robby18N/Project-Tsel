import { NpsCompositionCard } from './NpsCompositionCard'
import { BarListCard } from './BarListCard'
import { NpsByOperatorCard } from './NpsByOperatorCard'
import { topPositiveThemes, topPainPoints } from '../../data/dashboardData'

export function ChartsRow() {
  return (
    <div className="box-border w-[1484px] h-[289px] absolute left-[416px] top-[313px] flex flex-row gap-4 justify-start items-start z-[4]">
      <NpsCompositionCard />
      <BarListCard title="Top Positive Themes" items={topPositiveThemes} barColor="#05cd99" />
      <BarListCard title="Top Pain Points" items={topPainPoints} barColor="#ff5b5b" />
      <NpsByOperatorCard />
    </div>
  )
}
