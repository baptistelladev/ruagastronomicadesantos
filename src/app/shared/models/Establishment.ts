import { IHour } from "./Hour"
import { ISocialNetwork } from "./Network"
import { IPhone } from "./Phone"
import { IShortTicket } from "./Ticket"
import { ITime } from "./Time"

export interface IShortEstablishment {
  name: string,
  value: string,
  adress: {
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
  working_time: ITime[],
  phones: IPhone[],
  networks: ISocialNetwork[]
}

export interface ILongEstablishment {

}
