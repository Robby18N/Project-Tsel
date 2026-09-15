/** Centered title + soft fade-out divider shared by every dashboard card. */
export function CardHeader({ title }) {
  return (
    <div className="box-border w-full h-fit shrink-0 flex flex-col gap-3 justify-start items-start">
      <div className="text-[16px] box-border w-full text-[#1b2559] font-[Inter,system-ui,sans-serif] font-medium text-center">
        {title}
      </div>
      <div className="w-full h-px shrink-0 bg-gradient-to-r from-transparent via-[#a3aed0] to-transparent" />
    </div>
  )
}
