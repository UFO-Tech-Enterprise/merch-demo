"use client";

import {
  AppstoreOutlined,
  AuditOutlined,
  ControlOutlined,
  DownOutlined,
  FileSearchOutlined,
  LeftOutlined,
  MobileOutlined,
  RightOutlined,
} from "@ant-design/icons";
import { Button, Dropdown, Flex, Progress, Segmented, Typography } from "antd";

import { SlideScreenshotStage } from "./components/SlideScreenshotStage";
import { modeOptions } from "./config/constants";
import {
  BrandMark,
  DeckFooter,
  DotButton,
  EmptyState,
  InfoBox,
  InfoColumns,
  InfoTitle,
  ModeSwitch,
  OverviewCopy,
  OverviewPanel,
  OverviewSection,
  OverviewSteps,
  PageShell,
  PanelHeader,
  RoleCardButton,
  RoleCardGrid,
  RoleControls,
  RoleDeck,
  RoleDeckTop,
  RoleTag,
  SlideBody,
  SlideDots,
  SlideGrid,
  SlideHeader,
  SlideIcon,
  SlidePickerButton,
  SlidePickerMenuStyle,
  SlidePickerWrap,
  TopBar,
} from "./styles";
import { useMerchDemoState } from "./useMerchDemoState";
import type { Mode, RoleKey } from "./types";

const { Text, Title } = Typography;

export const MerchDemoView = () => {
  const {
    mode,
    availableRoles,
    selectedRoleKey,
    selectedRole,
    selectedSlides,
    activeSlide,
    slideIndex,
    roleOptions,
    slideOptions,
    selectMode,
    selectRole,
    selectSlide,
    goToSlide,
  } = useMerchDemoState();

  return (
    <PageShell>
      <SlidePickerMenuStyle />
      <TopBar>
        <BrandMark>
          <AppstoreOutlined />
          Платформа мерчендайзингу
        </BrandMark>
      </TopBar>

      <OverviewSection>
        <OverviewCopy>
          <Text type="secondary">Мерчендайзинг · польова команда · керівний контроль</Text>
          <Title level={1}>
            Єдиний процес від візиту в торгову точку до прозорого контролю якості.
          </Title>
          <Text>
            Рішення об&apos;єднує польові візити, контроль виконання та управління ключовими
            торговими точками в один робочий процес. Кожна роль бачить свій сценарій, а керівництво
            отримує зрозумілу картину якості мерчендайзингу.
          </Text>

          <ModeSwitch>
            <Segmented
              block
              size="large"
              value={mode}
              options={modeOptions}
              onChange={(value) => selectMode(value as Mode)}
            />
          </ModeSwitch>

          <RoleCardGrid>
            {availableRoles.map((role) => (
              <RoleCardButton
                key={role.key}
                type="button"
                $accent={role.accent}
                $active={selectedRoleKey === role.key}
                onClick={() => selectRole(role.key)}
              >
                <span>{role.icon}</span>
                <strong>{role.title}</strong>
                <small>{role.summaries[mode]}</small>
              </RoleCardButton>
            ))}
          </RoleCardGrid>
        </OverviewCopy>

        <OverviewPanel>
          <PanelHeader>
            <ControlOutlined />
            Як це працює
          </PanelHeader>
          <OverviewSteps>
            <li>
              <strong>Польова робота</strong> — маршрут, візит, чек-листи, фото та задачі в одному
              мобільному сценарії.
            </li>
            <li>
              <strong>Керівний контроль</strong> — планування маршрутів, перевірка якості, доручення
              та робота з проблемними точками.
            </li>
            <li>
              <strong>Ключові точки</strong> — KAM тримає історію, активності, матеріали та наступні
              дії по своїх ТТ в одному місці.
            </li>
          </OverviewSteps>
        </OverviewPanel>
      </OverviewSection>

      {selectedRole && activeSlide ? (
        <RoleDeck $accent={selectedRole.accent}>
          <RoleDeckTop>
            <div>
              <RoleTag $accent={selectedRole.accent}>{selectedRole.shortTitle}</RoleTag>
              <Title level={2}>{selectedRole.title}</Title>
              <Text type="secondary">{selectedRole.summaries[mode]}</Text>
            </div>
            <RoleControls>
              <Segmented
                value={selectedRoleKey}
                options={roleOptions}
                onChange={(value) => selectRole(value as RoleKey)}
              />
              <SlidePickerWrap>
                <Dropdown
                  trigger={["click"]}
                  placement="bottomRight"
                  getPopupContainer={(trigger) => trigger.parentElement ?? document.body}
                  overlayClassName="slide-picker-menu"
                  menu={{
                    selectedKeys: [String(slideIndex)],
                    onClick: ({ key }) => selectSlide(Number(key)),
                    items: slideOptions.map((option) => ({
                      key: String(option.value),
                      label: <span className="slide-picker-menu__item">{option.label}</span>,
                    })),
                  }}
                >
                  <SlidePickerButton type="button" aria-label="Перехід до слайду">
                    <span>
                      <small>
                        Слайд {slideIndex + 1} з {selectedSlides.length}
                      </small>
                      <strong>{activeSlide.title}</strong>
                    </span>
                    <DownOutlined />
                  </SlidePickerButton>
                </Dropdown>
              </SlidePickerWrap>
              <Flex gap={8}>
                <Button icon={<LeftOutlined />} onClick={() => goToSlide(-1)} />
                <Button type="primary" icon={<RightOutlined />} onClick={() => goToSlide(1)}>
                  Далі
                </Button>
              </Flex>
            </RoleControls>
          </RoleDeckTop>

          <SlideGrid>
            <SlideScreenshotStage
              slideKey={activeSlide.key}
              screenLabel={activeSlide.screenLabel}
              accent={selectedRole.accent}
              inlineScreenshots={activeSlide.screenshots}
            />

            <SlideBody>
              <SlideHeader>
                <SlideIcon $accent={selectedRole.accent}>{activeSlide.icon}</SlideIcon>
                <div>
                  <Text type="secondary">{activeSlide.eyebrow}</Text>
                  <Title level={2}>{activeSlide.title}</Title>
                  <Text>{activeSlide.subtitle}</Text>
                </div>
              </SlideHeader>

              <InfoColumns>
                <InfoBox>
                  <InfoTitle>
                    <FileSearchOutlined />
                    Що вміє
                  </InfoTitle>
                  <ul>
                    {activeSlide.core.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </InfoBox>
                <InfoBox>
                  <InfoTitle>
                    <AuditOutlined />
                    Користь для бізнесу
                  </InfoTitle>
                  <ul>
                    {activeSlide.value.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </InfoBox>
              </InfoColumns>
            </SlideBody>
          </SlideGrid>

          <DeckFooter>
            <SlideDots>
              {selectedSlides.map((slide, index) => (
                <DotButton
                  key={slide.key}
                  type="button"
                  $active={index === slideIndex}
                  $accent={selectedRole.accent}
                  onClick={() => selectSlide(index)}
                  aria-label={`Слайд ${index + 1} з ${selectedSlides.length}`}
                />
              ))}
            </SlideDots>
            <Progress percent={Math.round(((slideIndex + 1) / selectedSlides.length) * 100)} />
          </DeckFooter>
        </RoleDeck>
      ) : (
        <EmptyState>
          <MobileOutlined />
          <Title level={3}>Оберіть роль, щоб переглянути сценарії</Title>
          <Text type="secondary">
            Польові процеси, керівний контроль і робота з ключовими торговими точками.
          </Text>
        </EmptyState>
      )}
    </PageShell>
  );
};
