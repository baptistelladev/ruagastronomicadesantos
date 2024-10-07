<<<<<<< HEAD
import { IHour } from "./Hour"
import { IShortTicket } from "./Ticket"
import { ITime } from "./Time"
=======
import { ITranslation } from "./Translation"
>>>>>>> ea5ebe9e877921834f27db03115d3c8bb931add4

export interface IShortEstablishment {
  name: string,
  value: string,
  adress: {
<<<<<<< HEAD
    number: string,
    neighborhood: string,
    street: string,
    zip_code: string
  },
  mainType: any,
  ticket_info: {
    accept_ticket: boolean,
    show_field: boolean,
    tickets: IShortTicket[]
  },
  petfriendly_info: {
    accept_petfriendly: boolean,
    show_field: boolean
  },
  livemusic_info: {
    has_livemusic: boolean,
    show_field: boolean
  },
  air_conditioned_info: {
    has_air_conditioned: boolean,
    show_field: boolean
  },
  booking_info: {
    accept_booking: boolean,
    show_field: boolean
  },
  working_time: ITime[]
=======
    number: string
  },
  mainType: ITranslation
>>>>>>> ea5ebe9e877921834f27db03115d3c8bb931add4
}

export interface ILongEstablishment {

}
