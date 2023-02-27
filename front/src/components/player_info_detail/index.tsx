interface Props {
  title: string,
  value: string | undefined
}

export default function PlayerInfoDetail({ title, value }: Props) {
  return (
    <div className="flex flex-col text-xs sm:text-base font-bold">
      <p className="text-tertiary uppercase font-Mulish">{title}</p>
      {value ? <p className="text-primary">{value}</p> : null}
    </div>
  );
}