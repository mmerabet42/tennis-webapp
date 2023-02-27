type Props = {
  firstname: string,
  lastname: string,
  pictureUrl: string
}

export default function BigPlayerImg({ firstname, lastname, pictureUrl }: Props) {
  return (
    <img  alt={`player ${firstname} ${lastname}`}
          src={pictureUrl}
          className="absolute bottom-0 left-0 object-cover lg:w-96 w-80 hidden 1md:block" />
  );
}