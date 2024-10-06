import { createAction, createReducer, createSelector, on, props, createFeatureSelector } from "@ngrx/store";
import { ILang } from "../models/Lang";

export interface IAppState {
  currentLanguage: ILang
}

export const appInitialState: IAppState = {
  currentLanguage: {
    text: {
      pt: '',
      en: '',
      es: ''
    },
    value: ''
  }
}

// ACTIONS
export const setCurrentLanguage = createAction(
  '[APP] Definir idioma usado no app',
  props<{ language: ILang }>()
)

export const appReducer = createReducer(
  appInitialState,
  on(
    setCurrentLanguage,
    (state, { language }): IAppState => ({ ...state, currentLanguage: language })
  )
)

// SELETORES
export const selectAppState = createFeatureSelector<IAppState>('app');

export const selectAppCurrentLanguage = createSelector(
  selectAppState,
  (state: IAppState) => state.currentLanguage
);
