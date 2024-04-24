import {
  ECategory,
  EForSessionTicket,
  EFrequencyEventEnum,
  EPriceUnit,
  EStatus,
  ETypeLocalizations,
  ETypeProgramsEventEnum,
  ETypeResources,
} from './enum';

export interface IFrequencyEvents {
  title: string;
  value: string;
}

export interface IEvents {
  id?: number;
  name: string;
  description: string;
  logo: string;
  is_public: boolean;
  frequency: EFrequencyEventEnum;
  is_model: boolean;
  campus_id: number;
  type_id: number;
  campus: ICampus;
  date_debut: string;
  date_end: string;
  debut_time: string;
  debut_timpe: string;
  end_time: string;
  programs?: IPrograms[];
  require_registration: boolean;
  localization: ILocalizations;
  sessions_count: number;
}

export interface IPrograms {
  id: number;
  session_id: number;
  group_id: number;
  debut_time: string;
  duration: number;
  description?: string;
  type: ETypeProgramsEventEnum;
  created_at?: string;
  updated_at?: string;
  session?: ISessionEvent;
  group?: IProgramGroup;
}

export interface ICampus {
  id?: number;
  name: string;
  open_at: string;
  created_at: string;
  updated_at: string;
  localizations?: ILocalizations[];
  resources?: IResources[];
}

export interface ILocalizations {
  id?: number;
  campus_id?: number;
  address: string;
  post_code: string;
  city: string;
  country?: string;
  country_code?: string;
  type?: ETypeLocalizations;
  created_at?: string;
  updated_at?: string;
}

export interface IResources {
  id: number;
  campus_id: number;
  name: string;
  category: ECategory;
  type: ETypeResources;
  status: EStatus;
  created_at: string;
  updated_at: string;
}

export interface ISessionEvent {
  id?: string;
  event_id?: string;
  event?: IEvents;
  name: string;
  is_free?: boolean;
  date_debut: string;
  date_end: string;
  starts_at: string;
  ends_at: string;
  has_own_program_group?: boolean;
  session_id_for_programs?: {
    id?: number;
    name?: string;
  } | null;
  digital_link: string;
  session_for_programs?: {
    id?: number;
  };
  programs_start_at?: '';
  uses_default_programs?: boolean;
}

export interface ITicketSessionEvent {
  id?: string;
  event_session_id?: string;
  event_session?: ISessionEvent;
  name: string;
  price: number;
  payment_instalments: number;
  valid_until: string;
}

export interface IContries {
  id: number;
  name: string;
  iso_code: string;
  flag: string;
  calling_code: string;
  created_at: string;
  updated_at: string;
  post_codes: IPostCode[];
}

export interface IPostCode {
  id: number;
  country_code: string;
  country: string;
  code: string;
  state_code: string;
  created_at: string;
  updated_at: string;
}

export interface IProgramGroup {
  id: number;
  eventId: number;
  name: string;
  event?: IEvents;
  created_at: string;
  updated_at: string;
  programs?: IPrograms;
}

export interface IProgramUpdate {
  program_id: number;
  order: number;
}
export interface ITicket {
  id?: number;
  name: string;
  quantity: number;
  description: string;
  valid_until: string;
  for_sessions: EForSessionTicket;
  price_value?: number;
  price_unit?: EPriceUnit;
  visible_to_user_categories: Array<number>;
  session_ids: Array<number>;
}

export interface IDetailTicket {
  id: string;
  event_id: string;
  name: string;
  quantity: string;
  price: string;
  price_value?: number;
  price_unit?: EPriceUnit;
  valid_until: string;
  for_sessions: EForSessionTicket;
  description: string;
  event: IEvents;
  visible_to_user_categories: Array<number>;
  sessions: ISessionEvent[];
}

export interface IProcessTheme {
  id?: number | string;
  name: string;
}
