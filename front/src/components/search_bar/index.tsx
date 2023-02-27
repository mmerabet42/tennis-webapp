type Props = {
  onChange: React.ChangeEventHandler<HTMLInputElement>,
  show: boolean
}

export default function SearchBar({ onChange, show }: Props) {
  return (
    <input
      className={`bg-tertiary text-white placeholder-white placeholder-opacity-30 font-bold text-sm xs:text-base
                  p-5 mt-10 sm:mt-32 mb-10 
                  rounded-2xl border-none outline-none
                  ${show ? "visible" : "invisible"}`}
      placeholder="Search a player"
      onChange={onChange}
    />
  );
}