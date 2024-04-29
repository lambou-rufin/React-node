/**
 *  Microtaskers
 *  Nom: ANDRIARILALAO Johny Lino
 *  Email: johny.andriarilalao@gmail.com
 */

export interface UserModel {
  id?: number
  name?: string
}
export interface IAppState {
  currentUser: UserModel | null | any
}
