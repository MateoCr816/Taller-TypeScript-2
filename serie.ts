export class Serie {
  num: number;
  name: string;
  channel: string;
  seasons: number;
  summary: string;
  link: string;
  picture: string;

  constructor(num:number, name: string, channel: string, seasons: number, summary: string,  link: string, picture: string) {
    this.num = num;
    this.name = name;
    this.channel = channel;
    this.seasons = seasons;
    this.summary = summary;
    this.link = link;
    this.picture = picture;
  }
}
