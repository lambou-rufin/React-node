export enum EFrequencyEventEnum {
  ONCE = 'once',
  DAILY = 'daily',
  WEEKLY = 'weekly',
  MONTHLY = 'monthly',
  FORtNIGHTLY = 'fortnightly',
  QUARTERLY = 'quarterly',
  BI_ANNUAL = 'bi-annual',
  HALF_ANNUAL = 'half-annual',
  ANNUAL = 'annual'
}

export enum ETypeProgramsEventEnum {
  TITLE = 'title',
  ARTICLE = 'article',
  SONG = 'song'
}

export enum ECategory {
  ROOM = 'room',
  MATERIAL = 'material'
}

export enum ETypeResources {
  ON_RESERVATION = 'on_reservation',
  FREE_ACCESS = 'free_access'
}

export enum ETypeLocalizations {
  MAIN = 'main',
  ANNEX = 'annex'
}

export enum EStatus {
  FREE = 'free',
  IN_USE = 'in_use'
}

export enum ECrudAction {
  ADD = 'add',
  EDIT = 'edit'
}

export enum EPriceUnit {
  EURO = 'euro',
  DOLLAR = 'dollar'
}

export enum EForSessionTicket {
  ALL = 'all',
  SOME = 'some',
  UNDETERMINATED_ONE = 'undetermined_one'
}

export enum TypeCrud {
  DEPARTEMENT = 'Departement',
  EQUIPE = 'Equipe',
  POSTE = 'Poste'
}

export enum ECrudTypeProcessTheme {
  CREATE = 'CREATE',
  UPDATE = 'UPDATE'
}

export enum EStatus {
  IDLE = 'idle',
  LOADING = 'loading',
  SUCCESS = 'success',
  FAILED = 'failed'
}

export enum ServiceElementTypesEnum {
  POLE = 'pôle',
  DEPARTMENT = 'département',
  TEAM = 'équipe',
  POSITION = 'poste'
}

export enum OperationStatus {
  IDLE = 'idle',
  LOADING = 'loading',
  SUCCESS = 'success',
  FAILED = 'failed'
}

export enum RoleListEnum {
  PROCESS_RESPONSABLE = 'gestionnaire-event'
}

export enum PermissionListEnum {
  PROCESS_MANAGER = 'process__become_manager'
}
