export interface CountryCode {
  id: number
  country_code: string
  country: string
  code: string
  state_code: string
  created_at: string
  updated_at: string
}

export interface PostCode {
  id: number
  country_code: string
  country: string
  code: string
  state_code: string
  created_at: string
  updated_at: string
}

export interface Country {
  id: number
  name: string
  iso_code: string
  flag: string
  calling_code: string
  created_at: string
  updated_at: string
  post_codes: PostCode[]
}

export interface Resources {
  id: number
  campus_id: number
  campus: Campus
  name: string
  type: string
  status: string
  created_at: string
  updated_at: string
}

export interface Localization {
  id: string
  country: Country
  address: string
  post_code: string
  city: string
}

export interface Campus {
  id: number
  name: string
  open_at: string
  created_at: string
  updated_at: string
  localization: Localization
  resources: Resources[]
}

export interface Category {
  id: number
  name: string
  description: string
  created_at: string
  updated_at: string
}

export interface Creator {
  id: number
  category_id: number
  category: Category
  campus_id: number
  campus: Campus
  firstname: string
  lastname: string
  email: string
  phone_number: string
  address: string
  post_code: string
  city: string
  country_code: string
  country: Country
  date_of_birth: string
  marital_status: string
  sex: string
  created_at: string
  updated_at: string
}

export interface Type {
  id: number
  name: string
  description: string
  events_count: number
  created_at: string
  updated_at: string
  campus_id: number
  campus: Campus
}

export interface SessionProgram {
  id: number
  session_id: number
  order: number
  debut_time: string
  duration: string
  description: string
  type: string
  created_at: string
  updated_at: string
  session: Session
}

export interface Session {
  id: string
  event_id: string
  name: string
  date_debut: string
  date_end: string
  starts_at: string
  ends_at: string
  has_own_program_group: string
  digital_link: string
  event: any // Replace 'any' with the actual type
  programs: SessionProgram[]
  session_for_programs: any // Replace 'any' with the actual type
  programs_start_at: string
  uses_default_programs?: string
}

export interface IEvent {
  id: number
  creator_id: number
  campus_id: number
  type_id: number
  is_model: boolean
  name: string
  description: string
  date_debut: string
  date_end: string
  debut_timpe: string
  end_time: string
  logo: string
  is_public: boolean
  frequency: string
  require_registration: string
  created_at: string
  updated_at: string
  creator: Creator
  campus: Campus
  type: Type
  localization: Localization
  conversation: string
  sessions: Session[]
  related_process_id: string
  self_subscription: boolean
  self_check: boolean
}
