export class Video {
  constructor(
    public code: number,
    public name: string,
    public url: string,
    public top?: boolean,
    public desc?: string
  ) { }
}
