import { createAction, createReducer, createSelector, on, props, createFeatureSelector } from "@ngrx/store";
import { ILang } from "../models/Lang";
import { IShortEstablishment } from "../models/Establishment";
import { IShortTicket } from "../models/Ticket";
import { ISocialNetwork } from "../models/Network";

export interface IAppState {
  currentLanguage: ILang,
  currentEstablishment: IShortEstablishment,
  appInfoNetworks: ISocialNetwork[]
}

export const appInitialState: IAppState = {
  currentLanguage: {
    text: {
      pt: '',
      en: '',
      es: ''
    },
    value: ''
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
    ],
    phones: [
      {
        type: '',
        number: '',
        description: ''
      }
    ],
    networks: [
      {
        text: '',
        value: '',
        baseUrl: '',
        user: ''
      }
    ]
  },
  appInfoNetworks: [
    {
      text: '',
      value: '',
      baseUrl: '',
      user: ''
    }
  ]
}

// ACTIONS
export const setCurrentLanguage = createAction(
  '[APP] Definir idioma usado no app',
  props<{ language: ILang }>()
)

export const setCurrentEstablishment = createAction(
  '[APP] Definir estabelecimento selecionado',
  props<{ establishment: IShortEstablishment }>()
)

export const setAppInfoNetworks = createAction(
  '[APP] Definir redes sociais/contato do aplicativo',
  props<{ networks: ISocialNetwork[] }>()
)

export const appReducer = createReducer(
  appInitialState,
  on(
    setCurrentLanguage,
    (state, { language }): IAppState => ({ ...state, currentLanguage: language })
  ),
  on(
    setCurrentEstablishment,
    (state, { establishment }): IAppState => ({ ...state, currentEstablishment: establishment })
  ),
  on(
    setAppInfoNetworks,
    (state, { networks }): IAppState => ({ ...state, appInfoNetworks: networks })
  )
)

// SELETORES
export const selectAppState = createFeatureSelector<IAppState>('app');

export const selectAppCurrentLanguage = createSelector(
  selectAppState,
  (state: IAppState) => state.currentLanguage
);

export const selectCurrentEstablishment = createSelector(
  selectAppState,
  (state: IAppState) => state.currentEstablishment
);

export const selectAppInfoNetworks = createSelector(
  selectAppState,
  (state: IAppState) => state.appInfoNetworks
);

