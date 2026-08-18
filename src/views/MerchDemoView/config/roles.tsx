import {
  FileSearchOutlined,
  MobileOutlined,
  TeamOutlined,
  UserSwitchOutlined,
} from "@ant-design/icons";

import type { RoleConfig } from "../types";

export const roles = [
  {
    key: "merchandiser",
    title: "Мерчендайзер",
    shortTitle: "MD",
    accent: "blue",
    icon: <MobileOutlined />,
    summaries: {
      app: "Польова робота в торговій точці: маршрут, чек-лист, аудит полиці, фотофіксація, ДМП, промо-цінники та доручення.",
      admin:
        "Контроль якості мерчендайзингу: виконання візитів, повнота чек-листів, фото-докази, представленість SKU і проблемні точки.",
    },
  },
  {
    key: "supervisor",
    title: "Супервайзер мерчендайзерів",
    shortTitle: "SVM",
    accent: "amber",
    icon: <TeamOutlined />,
    summaries: {
      app: "Операційний контроль команди: маршрути, створення нових ТТ, активні маршрути підлеглих, прогрес задач, QR-підтвердження і допомога на складних візитах.",
      admin:
        "Планування та управління покриттям: маршрути, графіки, торгові точки, доручення, верифікація адрес і контроль якості виконання.",
    },
  },
  {
    key: "kam",
    title: "KAM",
    shortTitle: "KAM",
    accent: "mint",
    icon: <UserSwitchOutlined />,
    summaries: {
      app: "Персональний контур ключових торгових точок: власний маршрут, план робіт, позапланові візити і швидкий доступ до контексту ТТ.",
      admin:
        "Портфель ключових точок: календар активностей, відкриті задачі, історія візитів, фото-матеріали і наступні дії по кожній ТТ.",
    },
  },
  {
    key: "photoController",
    title: "Фотоконтролер",
    shortTitle: "PCTL",
    accent: "coral",
    icon: <FileSearchOutlined />,
    summaries: {
      app: "",
      admin:
        "Робоче місце перевірки фотозвітів: фільтри по датах і ТТ, задачі по візитах, перегляд фото, оцінка відповідності, доручення і фінальне підтвердження.",
    },
  },
] satisfies RoleConfig[];

export const roleByKey = roles.reduce<Record<RoleConfig["key"], RoleConfig>>(
  (acc, role) => {
    acc[role.key] = role;
    return acc;
  },
  {} as Record<RoleConfig["key"], RoleConfig>,
);
