import { PermissionListEnum, RoleListEnum } from '../inteface/enum';

export function isRolable(array: any[], array_option: string, rolable: RoleListEnum): boolean {
  let isValid = false;
  array.forEach((item) => {
    if (item[array_option] == rolable) {
      isValid = true;
    }
  });
  return isValid;
}

export function hasPermission(array: any[], array_option: string, toPermit: PermissionListEnum): boolean {
  let isValid = false;
  array.forEach((item) => {
    if (item[array_option] == toPermit) {
      isValid = true;
    }
  });
  return isValid;
}

export function getPermissionsByRoles(rolesArray: any[]) {
  const permissions: any = [];
  rolesArray.forEach((role) => {
    permissions.push(...role.permissions);
  });
  return permissions;
}

export const getArrayIds = (array: any[]) => {
  return array.map((arr: any) => arr.id);
};
