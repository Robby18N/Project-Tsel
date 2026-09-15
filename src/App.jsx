import { ScaledCanvas } from './components/layout/ScaledCanvas'
import { Header } from './components/layout/Header'
import { FilterBar } from './components/layout/FilterBar'
import { MobileFilterSidebar } from './components/layout/MobileFilterSidebar'
import { KpiGrid } from './components/dashboard/KpiGrid'
import { ChartsRow } from './components/dashboard/ChartsRow'
import { BentoRow } from './components/dashboard/BentoRow'
import { VerbatimTable } from './components/dashboard/VerbatimTable'

/**
 * "World Cloud" — Market Intelligent NPS dashboard.
 *
 * Fixed 1920x1468 design canvas, scaled down to fit its container
 * (see ScaledCanvas / useResponsiveScale). Each section below owns
 * its own absolute position and z-index, matching the original
 * Pencil export's stacking order:
 *   FilterBar (5) < Header (6) < MobileFilterSidebar (7)
 *   BentoRow (1) < KpiGrid (2) < VerbatimTable (3) < ChartsRow (4)
 */
function App() {
  return (
    <ScaledCanvas>
      <div className="dashboard-canvas box-border w-[1920px] h-[1468px] bg-[#f4f7feff] overflow-hidden relative">
        <FilterBar />
        <Header />
        <MobileFilterSidebar />
        <KpiGrid />
        <ChartsRow />
        <BentoRow />
        <VerbatimTable />
      </div>
    </ScaledCanvas>
  )
}

export default App
