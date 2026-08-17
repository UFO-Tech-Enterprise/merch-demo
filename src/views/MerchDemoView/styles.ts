import styled, { createGlobalStyle } from "styled-components";

import type { Accent } from "./types";

export const PageShell = styled.main`
  width: 100%;
  min-height: 100svh;
  padding: 24px;
  background:
    linear-gradient(120deg, rgba(31, 111, 235, 0.12), transparent 36%),
    linear-gradient(
      180deg,
      ${({ theme }) => theme.colors.colorBgContainer},
      ${({ theme }) => theme.colors.colorBgLayout}
    );
`;

export const TopBar = styled.header`
  width: min(100%, ${({ theme }) => theme.layout.pageMax}px);
  margin: 0 auto 28px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
`;

export const BrandMark = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.colorText};
`;

export const OverviewSection = styled.section`
  width: min(100%, ${({ theme }) => theme.layout.pageMax}px);
  margin: 0 auto;
  display: grid;
  grid-template-columns: minmax(320px, 0.95fr) minmax(360px, 0.65fr);
  gap: 24px;
  align-items: stretch;

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`;

export const OverviewCopy = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;

  h1 {
    max-width: 980px;
    margin: 0;
    font-size: clamp(38px, 5vw, 68px);
    line-height: 1;
    letter-spacing: 0;
  }

  > .ant-typography {
    max-width: 820px;
    font-size: 17px;
    line-height: 1.7;
  }
`;

export const ModeSwitch = styled.div`
  width: min(100%, 360px);
`;

export const RoleCardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
  gap: 12px;

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`;

export const RoleCardButton = styled.button<{ $accent: Accent; $active: boolean }>`
  min-height: 198px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 16px;
  border: 1px solid
    ${({ $active, $accent, theme }) =>
      $active ? theme.brandColors[$accent] : theme.colors.colorBorder};
  border-radius: ${({ theme }) => theme.radius.md}px;
  background: ${({ $active, $accent, theme }) =>
    $active ? `${theme.brandColors[$accent]}10` : theme.colors.colorBgContainer};
  color: ${({ theme }) => theme.colors.colorText};
  cursor: pointer;
  text-align: left;
  transition:
    border-color 0.18s ease,
    background-color 0.18s ease,
    transform 0.18s ease;

  &:hover {
    border-color: ${({ $accent, theme }) => theme.brandColors[$accent]};
    transform: translateY(-1px);
  }

  > span {
    width: 42px;
    height: 42px;
    display: grid;
    place-items: center;
    border-radius: ${({ theme }) => theme.radius.md}px;
    background: ${({ $accent, theme }) => `${theme.brandColors[$accent]}18`};
    color: ${({ $accent, theme }) => theme.brandColors[$accent]};
    font-size: 22px;
  }

  strong {
    font-size: 18px;
  }

  small {
    color: ${({ theme }) => theme.colors.colorTextSecondary};
    font-size: 13px;
    line-height: 1.5;
  }
`;

export const OverviewPanel = styled.aside`
  padding: 20px;
  border: 1px solid ${({ theme }) => theme.colors.colorBorder};
  border-radius: ${({ theme }) => theme.radius.md}px;
  background: ${({ theme }) => theme.colors.colorBgContainer};
  box-shadow: 0 18px 52px rgba(21, 32, 51, 0.1);
`;

export const PanelHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 16px;
  font-weight: 800;
`;

export const OverviewSteps = styled.ol`
  margin: 0;
  padding-left: 18px;

  li {
    margin-bottom: 12px;
    color: ${({ theme }) => theme.colors.colorTextSecondary};
    line-height: 1.55;
  }

  strong {
    color: ${({ theme }) => theme.colors.colorText};
  }
`;

export const RoleDeck = styled.section<{ $accent: Accent }>`
  width: min(100%, ${({ theme }) => theme.layout.pageMax}px);
  margin: 28px auto 0;
  padding: 20px;
  border: 1px solid ${({ theme }) => theme.colors.colorBorder};
  border-top: 4px solid ${({ $accent, theme }) => theme.brandColors[$accent]};
  border-radius: ${({ theme }) => theme.radius.md}px;
  background: ${({ theme }) => theme.colors.colorBgContainer};
  box-shadow: 0 22px 64px rgba(21, 32, 51, 0.12);
`;

export const RoleDeckTop = styled.header`
  display: flex;
  justify-content: space-between;
  gap: 18px;
  margin-bottom: 18px;

  h2 {
    margin: 6px 0 8px;
    letter-spacing: 0;
  }

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

export const RoleControls = styled.div`
  min-width: 360px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 12px;

  @media (max-width: 900px) {
    min-width: 0;
    align-items: stretch;
  }
`;

export const SlidePickerMenuStyle = createGlobalStyle`
  html {
    scrollbar-gutter: stable;
  }

  .slide-picker-menu {
    max-width: min(720px, calc(100vw - 32px));
  }

  .slide-picker-menu .ant-dropdown-menu {
    max-height: min(520px, calc(100vh - 140px));
    overflow-y: auto;
  }

  .slide-picker-menu .ant-dropdown-menu-title-content {
    white-space: normal;
    line-height: 1.35;
  }

  .slide-picker-menu__item {
    display: block;
    max-width: 640px;
    white-space: normal;
  }
`;

export const SlidePickerWrap = styled.div`
  width: min(100%, 500px);
  flex: 0 0 auto;
`;

export const SlidePickerButton = styled.button`
  width: 100%;
  min-height: 62px;
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  align-items: center;
  gap: 12px;
  padding: 8px 12px;
  border: 1px solid ${({ theme }) => theme.colors.colorBorder};
  border-radius: ${({ theme }) => theme.radius.md}px;
  background: ${({ theme }) => theme.colors.colorBgContainer};
  color: ${({ theme }) => theme.colors.colorText};
  cursor: pointer;
  text-align: left;
  transition:
    border-color 0.18s ease,
    box-shadow 0.18s ease;

  &:hover,
  &:focus-visible,
  &[aria-expanded="true"] {
    border-color: ${({ theme }) => theme.colors.colorPrimary};
    box-shadow: 0 0 0 2px ${({ theme }) => `${theme.colors.colorPrimary}18`};
    outline: none;
  }

  > span:first-child {
    min-width: 0;
    display: grid;
    gap: 2px;
  }

  small {
    color: ${({ theme }) => theme.colors.colorTextSecondary};
    font-size: 11px;
    font-weight: 700;
    line-height: 1.2;
  }

  strong {
    color: ${({ theme }) => theme.colors.colorText};
    font-size: 13px;
    line-height: 1.3;
    white-space: normal;
  }

  .anticon {
    flex: 0 0 auto;
  }
`;

export const SlideGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(300px, 0.76fr) minmax(460px, 1.24fr);
  gap: 18px;

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`;

export const ScreenshotStage = styled.div<{ $accent: Accent }>`
  min-height: 590px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
  padding: 26px;
  border: 1px dashed ${({ $accent, theme }) => theme.brandColors[$accent]};
  border-radius: ${({ theme }) => theme.radius.md}px;
  background:
    linear-gradient(
      135deg,
      ${({ $accent, theme }) => `${theme.brandColors[$accent]}12`},
      transparent
    ),
    ${({ theme }) => theme.colors.colorBgLayout};

  .anticon {
    color: ${({ $accent, theme }) => theme.brandColors[$accent]};
    font-size: 44px;
  }

  strong {
    font-size: 20px;
  }

  span {
    color: ${({ theme }) => theme.colors.colorTextSecondary};
    line-height: 1.55;
  }
`;

export const SlideBody = styled.div`
  min-height: 590px;
  display: flex;
  flex-direction: column;
  gap: 18px;
  padding: 24px;
  border-radius: ${({ theme }) => theme.radius.md}px;
  background: ${({ theme }) => theme.colors.colorBgLayout};
`;

export const SlideHeader = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 18px;
  align-items: start;

  h2 {
    margin: 6px 0 8px;
    letter-spacing: 0;
  }

  > div > .ant-typography:last-child {
    font-size: 16px;
    line-height: 1.65;
  }
`;

export const SlideIcon = styled.div<{ $accent: Accent }>`
  width: 58px;
  height: 58px;
  display: grid;
  place-items: center;
  border-radius: ${({ theme }) => theme.radius.md}px;
  background: ${({ $accent, theme }) => theme.brandColors[$accent]};
  color: #ffffff;
  font-size: 26px;
`;

export const RoleTag = styled.span<{ $accent: Accent }>`
  display: inline-flex;
  align-items: center;
  min-height: 24px;
  padding: 2px 10px;
  border-radius: 999px;
  background: ${({ $accent, theme }) => `${theme.brandColors[$accent]}18`};
  color: ${({ $accent, theme }) => theme.brandColors[$accent]};
  font-size: 12px;
  font-weight: 800;
`;

export const InfoColumns = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`;

export const InfoBox = styled.div`
  padding: 16px;
  border: 1px solid ${({ theme }) => theme.colors.colorBorder};
  border-radius: ${({ theme }) => theme.radius.md}px;
  background: ${({ theme }) => theme.colors.colorBgContainer};

  ul {
    margin: 12px 0 0;
    padding-left: 18px;
  }

  li {
    margin-bottom: 8px;
    color: ${({ theme }) => theme.colors.colorTextSecondary};
    line-height: 1.45;
  }
`;

export const InfoTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 800;
`;

export const DeckFooter = styled.footer`
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  gap: 16px;
  margin-top: 18px;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

export const SlideDots = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const DotButton = styled.button<{ $active: boolean; $accent: Accent }>`
  width: ${({ $active }) => ($active ? 28 : 10)}px;
  height: 10px;
  border: 0;
  border-radius: 999px;
  background: ${({ $active, $accent, theme }) =>
    $active ? theme.brandColors[$accent] : theme.colors.colorBorder};
  cursor: pointer;
  transition:
    width 0.18s ease,
    background-color 0.18s ease;
`;

export const EmptyState = styled.section`
  width: min(100%, ${({ theme }) => theme.layout.pageMax}px);
  min-height: 280px;
  display: grid;
  place-items: center;
  gap: 8px;
  margin: 28px auto 0;
  padding: 32px;
  border: 1px dashed ${({ theme }) => theme.colors.colorBorder};
  border-radius: ${({ theme }) => theme.radius.md}px;
  background: ${({ theme }) => theme.colors.colorBgContainer};
  text-align: center;

  .anticon {
    color: ${({ theme }) => theme.colors.colorPrimary};
    font-size: 42px;
  }

  h3 {
    margin: 0;
  }
`;
