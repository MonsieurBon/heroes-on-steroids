export interface IAppState {
  heroes?: IHeroState[];
  selectedHero?: IHeroState;
  router?: string;
}

export interface IHeroState {
  id: number;
  name: string;
}
