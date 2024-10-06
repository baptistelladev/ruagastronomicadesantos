import { ITranslation } from "./Translation"

export interface IShortEstablishment {
  name: string,
  value: string,
  adress: {
    number: string
  },
  mainType: ITranslation
}

export interface ILongEstablishment {

}
