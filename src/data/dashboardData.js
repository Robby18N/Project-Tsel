// Static mock content for the NPS "Market Intelligent" dashboard.
// Pulled straight from the design spec so every section renders from
// data instead of hand-duplicated JSX blocks.

export const kpis = {
  totalRespondents: { value: 34, sublabel: '100% Of Filtered Data' },
  overallNps: {
    value: 50.5,
    trend: '1.5 MoM',
    trendTag: 'Good',
    legend: [
      { label: 'Poor', range: '< 15', color: '#ff1c36' },
      { label: 'Good', range: '>=15 & <=90', color: '#00c529' },
      { label: 'Excellent', range: '>90', color: '#1c3eff' },
    ],
  },
  avgNpsScore: { value: 8.47, trend: '+0.47 vs last month', sublabel: 'Out of 10' },
}

export const npsComposition = {
  total: 34,
  totalLabel: 'Respondens',
  segments: [
    { label: 'Promoters', count: 20, percentLabel: '50%', color: '#05cd99' },
    { label: 'Passives', count: 12, percentLabel: '45%', color: '#ffb547' },
    { label: 'Detractors', count: 2, percentLabel: '5%', color: '#ff5b5b' },
  ],
  // Precomputed donut wedges (design-provided clip-paths), in draw order.
  wedges: [
    {
      color: '#e2e8f0',
      clipPath:
        "path('M70 0 C108.66 0 140 31.34 140 70 C140 108.66 108.66 140 70 140 C31.34 140 0 108.66 0 70 C0 31.34 31.34 0 70 0 Z M70 17.5 C41.005 17.5 17.5 41.005 17.5 70 C17.5 98.995 41.005 122.5 70 122.5 C98.995 122.5 122.5 98.995 122.5 70 C122.5 41.005 98.995 17.5 70 17.5 Z')",
    },
    {
      color: '#05cd99',
      clipPath:
        "path('M70 0 C108.66 0 140 31.34 140 70 C140 108.66 108.66 140 70 140 C64.593 140 59.205 139.374 53.942 138.133 L57.957 121.1 C61.904 122.03 65.945 122.5 70 122.5 C98.995 122.5 122.5 98.995 122.5 70 C122.5 41.005 98.995 17.5 70 17.5 L70 0 Z')",
    },
    {
      color: '#ff5b5b',
      clipPath:
        "path('M53.638 138.061 C47.064 136.481 40.754 133.956 34.904 130.566 L43.678 115.424 C48.065 117.967 52.798 119.86 57.729 121.046 L53.638 138.061 Z')",
    },
    {
      color: '#ffa800',
      clipPath:
        "path('M35 130.622 C13.342 118.117 0 95.009 0 70 C0 31.34 31.34 0 70 0 C70 0 70 0 70 0 L70 17.5 C70 17.5 70 17.5 70 17.5 C41.005 17.5 17.5 41.005 17.5 70 C17.5 88.756 27.506 106.088 43.75 115.466 L35 130.622 Z')",
    },
  ],
}

export const topPositiveThemes = [
  { label: ['Positive Internet Network', 'Quality Stability Speed'], value: '2.8K', barPercent: 100 },
  { label: ['Positive Internet Network', 'Quality Stability Speed'], value: '1.2K', barPercent: 78.9 },
  { label: ['Negative Internet Network', 'Quality Stability Speed'], value: '388', barPercent: 41.1 },
  { label: ['Negative Internet Network', 'Quality Stability Speed'], value: '317', barPercent: 32.2 },
  { label: ['Negative Internet Network', 'Quality Stability Speed'], value: '271', barPercent: 20 },
]

export const topPainPoints = [
  { label: ['Negative Internet Network', 'Quality Stability Speed'], value: '1.7K', barPercent: 100 },
  { label: ['Negative Internet Network', 'Quality Stability Speed'], value: '1.2K', barPercent: 60 },
  { label: ['Negative Experience Network', 'Quality Stability Speed'], value: '753', barPercent: 37.8 },
  { label: ['Negative Internet Network', 'Quality Stability Speed'], value: '150', barPercent: 26.7 },
  { label: ['Negative Installation Network', 'Quality Stability Speed'], value: '116', barPercent: 18.9 },
]

export const npsByOperator = [
  { name: 'IPRIME', score: 8.5, respondents: 100, barWidthPx: 98 },
  { name: 'TELKOMSEL', score: 7.8, respondents: 90, barWidthPx: 84 },
  { name: 'INDOSAT', score: 7.2, respondents: 80, barWidthPx: 83 },
  { name: 'XL', score: 6.5, respondents: 60, barWidthPx: 75 },
  { name: 'BY.U', score: 5.8, respondents: 50, barWidthPx: 67 },
  { name: '3 TRI', score: 4.2, respondents: 20, barWidthPx: 48 },
]

export const regionHotspot = [
  { region: 'Bali Nusra', score: '78.9', tone: 'good' },
  { region: 'Sumbagteng', score: '55.0', tone: 'good' },
  { region: 'Jatim', score: '57.1', tone: 'warn' },
  { region: 'Sumbagsel', score: '23.1', tone: 'bad' },
  { region: 'Jateng DIY', score: '8.3', tone: 'bad' },
]

export const regionScoreToneColor = {
  good: '#037759',
  warn: '#a77014',
  bad: '#c73326',
}

export const topKeywords = [
  { label: 'hujan', top: 126.5, left: 110, fontSize: 20, weight: 'semibold', padY: 10, padX: 16, z: 0 },
  { label: 'gangguan jaringan', top: 178.5, left: 55.5, fontSize: 18, weight: 'semibold', padY: 10, padX: 16, z: 1 },
  { label: 'lampu mati', top: 228.5, left: 91.5, fontSize: 17, weight: 'semibold', padY: 10, padX: 16, z: 2 },
  { label: 'cuaca buruk', top: 277.5, left: 94, fontSize: 15, weight: 'medium', padY: 8, padX: 14, z: 3 },
  { label: 'angin', top: 319.5, left: 127, fontSize: 12, weight: 'medium', padY: 6, padX: 10, z: 4 },
  { label: 'server down', top: 354.5, left: 79.5, fontSize: 19, weight: 'semibold', padY: 10, padX: 16, z: 5 },
  { label: 'lambat', top: 405.5, left: 125, fontSize: 11, weight: 'medium', padY: 6, padX: 10, z: 6 },
  { label: 'koneksi lambat', top: 438.5, left: 85, fontSize: 15, weight: 'medium', padY: 8, padX: 14, z: 7 },
  { label: 'sinyal hilang', top: 480.5, left: 82.5, fontSize: 18, weight: 'semibold', padY: 10, padX: 16, z: 8 },
  { label: 'loading lama', top: 530.5, left: 106.5, fontSize: 12, weight: 'medium', padY: 6, padX: 10, z: 9 },
  { label: 'error', top: 565.5, left: 128.5, fontSize: 12, weight: 'medium', padY: 6, padX: 10, z: 10 },
  { label: 'daerah tertentu', top: 600.5, left: 87, fontSize: 14, weight: 'medium', padY: 8, padX: 14, z: 11 },
]

export const verbatimRows = [
  {
    operator: 'TELKOMSEL PRABAYAR',
    operatorColor: '#c73326',
    region: 'Sumbagteng',
    category: { label: 'Promoter (9-10)', tone: 'good' },
    tags: ['Affordable Data Price', 'Stable Signal'],
    extraCount: 2,
    sample: 'Transaksi di aplikasi bima+ super cepat, nominalnya pas, dan sering ada promo cashback.',
  },
  {
    operator: 'INDOSAT',
    operatorColor: '#ffa800',
    region: 'Bali Nusra',
    category: { label: 'Promoter (9-10)', tone: 'good' },
    tags: ['Error Free Legacy Network', 'Other Positive Product'],
    extraCount: 2,
    sample: 'Pilihan paketnya variatif dan ramah di kantong, terutama paket Happy yang kuotanya gede.',
  },
  {
    operator: 'AXIS',
    operatorColor: '#b450ee',
    region: 'Jatim',
    category: { label: 'Detractor (0-6)', tone: 'bad' },
    tags: ['Other Negative Product', 'Unstable Signal'],
    extraCount: 0,
    sample: 'Ping tidak stabil, sering lag saat digunakan untuk bermain game online.',
  },
  {
    operator: 'XL',
    operatorColor: '#4318ff',
    region: 'Sumbagteng',
    category: { label: 'Passive (7-8)', tone: 'warn' },
    tags: [
      { label: 'Other Tarif', tone: 'warn' },
      { label: 'Various Package Options Available', tone: 'good' },
    ],
    extraCount: 2,
    sample: 'Sinyal telepon lemah di daerah pinggiran atau pelosok.',
  },
  {
    operator: 'BY.U',
    operatorColor: '#5b8fff',
    region: 'Bali Nusra',
    category: { label: 'Passive (7-8)', tone: 'warn' },
    tags: ['Stable Signal', 'Affordable Data Price'],
    extraCount: 2,
    sample:
      'Masa aktif kartu Tri panjang banget, jadi nggak perlu khawatir kartu hangus kalau lupa isi pulsa.',
  },
]

export const mobileFilterFields = [
  { label: 'Operator', placeholder: 'All Operator' },
  { label: 'Region', placeholder: 'All Region' },
  { label: 'City', placeholder: 'All Cities' },
  { label: 'Age Group', placeholder: 'All Age Group' },
  { label: 'SEC Group', placeholder: 'All SEC Group' },
  { label: 'Package Duration', placeholder: 'All Durations' },
  { label: 'Multiple SIM', placeholder: 'All' },
  { label: 'Data Segment', placeholder: 'All Segments' },
]

export const npsCategoryOptions = ['Promoter', 'Passive', 'Detractor']

export const navPills = [
  { label: 'KPI Report', icon: 'report', active: false },
  { label: 'KPI Dashboard', icon: 'speed', active: false },
  { label: 'Word Cloud Customer', icon: 'globe', active: true },
]
