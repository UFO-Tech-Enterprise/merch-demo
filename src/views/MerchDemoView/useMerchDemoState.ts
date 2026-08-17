import { useMemo, useState } from "react";

import { roleByKey, roles } from "./config/roles";
import { roleSlides } from "./config/slides";
import { getAvailableRoles, isRoleAvailable } from "./lib/roleAvailability";
import type { Mode, RoleKey } from "./types";

export const useMerchDemoState = () => {
  const [mode, setMode] = useState<Mode>("app");
  const [selectedRoleKey, setSelectedRoleKey] = useState<RoleKey | null>(null);
  const [slideIndex, setSlideIndex] = useState(0);

  const availableRoles = useMemo(() => getAvailableRoles(roles, mode), [mode]);

  const selectedRoleAvailable = selectedRoleKey ? isRoleAvailable(selectedRoleKey, mode) : false;

  const selectedRole = selectedRoleKey && selectedRoleAvailable ? roleByKey[selectedRoleKey] : null;

  const selectedSlides =
    selectedRoleKey && selectedRoleAvailable ? roleSlides[selectedRoleKey][mode] : [];

  const activeSlide = selectedSlides[slideIndex] ?? selectedSlides[0];

  const roleOptions = useMemo(
    () =>
      availableRoles.map((role) => ({
        label: role.shortTitle,
        value: role.key,
      })),
    [availableRoles],
  );

  const selectMode = (nextMode: Mode) => {
    setMode(nextMode);

    if (selectedRoleKey && !isRoleAvailable(selectedRoleKey, nextMode)) {
      setSelectedRoleKey(null);
    }

    setSlideIndex(0);
  };

  const selectRole = (roleKey: RoleKey) => {
    setSelectedRoleKey(roleKey);
    setSlideIndex(0);
  };

  const goToSlide = (direction: number) => {
    if (!selectedSlides.length) return;
    setSlideIndex(
      (current) => (current + direction + selectedSlides.length) % selectedSlides.length,
    );
  };

  return {
    mode,
    availableRoles,
    selectedRoleKey,
    selectedRole,
    selectedSlides,
    activeSlide,
    slideIndex,
    roleOptions,
    selectMode,
    selectRole,
    goToSlide,
    setSlideIndex,
  };
};
