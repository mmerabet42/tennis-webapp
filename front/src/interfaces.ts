export type PlayerInfos = {
  id: string,
  firstname: string,
  lastname: string,
  shortname: string,
  sex: string,
  countryCode: string,
  countryName: string,
  countryPictureUrl: string,
  pictureUrl: string,
  rank: number,
  points: number,
  weight: number,
  height: number,
  age: number,
  last: number[]
}

export type PlayerTitle = {
  id: string,
  playerId: string,
  content: string
}