export interface IAppState {
  heroes?: IHeroState[];
  selectedHero?: IHeroState;
}

export interface IHeroState {
  id: number;
  name: string;
}
