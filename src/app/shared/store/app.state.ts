import { createAction, createReducer, createSelector, on, props, createFeatureSelector } from "@ngrx/store";
import { ILang } from "../models/Lang";
<<<<<<< HEAD
import { IShortEstablishment } from "../models/Establishment";
import { IShortTicket } from "../models/Ticket";

export interface IAppState {
  currentLanguage: ILang,
  currentEstablishment: IShortEstablishment
=======

export interface IAppState {
  currentLanguage: ILang
>>>>>>> ea5ebe9e877921834f27db03115d3c8bb931add4
}

export const appInitialState: IAppState = {
  currentLanguage: {
    text: {
      pt: '',
      en: '',
      es: ''
    },
    value: ''
<<<<<<< HEAD
  },
  currentEstablishment: {
    name: '',
    value: '',
    adress: {
      number: '',
      zip_code: '',
      street: '',
      neighborhood: ''
    },
    mainType: '',
    ticket_info: {
      accept_ticket: false,
      show_field: false,
      tickets: [
        {
          text: '',
          value: ''
        }
      ]
    },
    petfriendly_info: {
      accept_petfriendly: false,
      show_field: false
    },
    livemusic_info: {
      has_livemusic: false,
      show_field: false
    },
    air_conditioned_info: {
      has_air_conditioned: false,
      show_field: false
    },
    booking_info: {
      accept_booking: false,
      show_field: false
    },
    working_time: [
      {
        day_number: 0,
        text: '',
        opening_time: [
          {
            close: '',
            open: ''
          }
        ]
      }
    ]
=======
>>>>>>> ea5ebe9e877921834f27db03115d3c8bb931add4
  }
}

// ACTIONS
export const setCurrentLanguage = createAction(
  '[APP] Definir idioma usado no app',
  props<{ language: ILang }>()
)

<<<<<<< HEAD
export const setCurrentEstablishment = createAction(
  '[APP] Definir estabelecimento selecionado',
  props<{ establishment: IShortEstablishment }>()
)

=======
>>>>>>> ea5ebe9e877921834f27db03115d3c8bb931add4
export const appReducer = createReducer(
  appInitialState,
  on(
    setCurrentLanguage,
    (state, { language }): IAppState => ({ ...state, currentLanguage: language })
<<<<<<< HEAD
  ),
  on(
    setCurrentEstablishment,
    (state, { establishment }): IAppState => ({ ...state, currentEstablishment: establishment })
=======
>>>>>>> ea5ebe9e877921834f27db03115d3c8bb931add4
  )
)

// SELETORES
export const selectAppState = createFeatureSelector<IAppState>('app');

export const selectAppCurrentLanguage = createSelector(
  selectAppState,
  (state: IAppState) => state.currentLanguage
);
<<<<<<< HEAD

export const selectCurrentEstablishment = createSelector(
  selectAppState,
  (state: IAppState) => state.currentEstablishment
);
=======
>>>>>>> ea5ebe9e877921834f27db03115d3c8bb931add4
