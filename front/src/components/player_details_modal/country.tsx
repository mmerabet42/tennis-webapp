import FullWidthLineSpacing from "../full_width_line_spacing"

type Props = {
  countryPictureUrl: string,
  countryCode: string
}

export default function Country({ countryPictureUrl, countryCode }: Props) {
  return (
    <div className="flex flex-col space-y-5">
      <img  alt={`player country flag`}
            src={countryPictureUrl}
            className="drop-shadow-xl object-cover w-14 sm:w-24 xl:w-36" />
      <FullWidthLineSpacing
        content={countryCode}
        className="font-Montserrat text-tertiary text-3xl 1xl:text-5xl lg:text-4xl md:text-2xl font-extralight"
      />
    </div>
  )
}