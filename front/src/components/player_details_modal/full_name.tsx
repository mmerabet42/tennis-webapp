type Props = {
  firstname: string,
  lastname: string
}

export default function FullName({ firstname, lastname }: Props) {
  return (
    <div className="flex flex-col font-bold text-4xl sm:text-6xl 2xl:text-9xl xl:text-8xl lg:text-7xl">
      <p className="text-outline text-white">{firstname}</p>
      <p className="text-primary">{lastname}</p>
    </div>
  )
}