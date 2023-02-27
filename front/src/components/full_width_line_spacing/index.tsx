/*
  Stretches each character of a string in order to take the full width of the parent
*/

type Props = {
  content: string
  className: string
}

export default function FullWidthLineSpacing({ content, className }: Props) {
  return (
    <div className="flex flex-row justify-between">
      {content.split('').map(c => 
        <p key={content + c} className={className}>{c}</p>
      )}
    </div>
  )
}