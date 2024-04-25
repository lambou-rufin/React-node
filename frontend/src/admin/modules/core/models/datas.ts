export const ParticipantStatus: any = {
  not_started: "Pas commencé",
  in_progress: "En cours",
  finished: "Terminé",
}

export const ParticipantNextStatus: any = {
  not_started: {
    text: "Commencer",
    value: "in_progress"
  },
  in_progress: {
    text: "Terminer",
    value: "finished",
  },
  finished: {
    text: "Pas commencé",
    value: "not_started",
  },
}


export const ProcessStatusTranslate: any = {
  building: "En cours de construction",
  active: "Actif",
  archived: "Archivé",
}
