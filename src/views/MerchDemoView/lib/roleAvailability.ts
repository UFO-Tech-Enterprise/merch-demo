import type { Mode, RoleConfig, RoleKey } from "../types";

const appRoleKeys: RoleKey[] = ["merchandiser", "supervisor", "kam"];
const adminRoleKeys: RoleKey[] = ["supervisor", "photoController"];

const roleKeysByMode: Record<Mode, RoleKey[]> = {
  app: appRoleKeys,
  admin: adminRoleKeys,
};

export const getAvailableRoles = (roles: RoleConfig[], mode: Mode): RoleConfig[] =>
  roles.filter((role) => roleKeysByMode[mode].includes(role.key));

export const isRoleAvailable = (roleKey: RoleKey, mode: Mode): boolean =>
  roleKeysByMode[mode].includes(roleKey);
