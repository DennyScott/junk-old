export const TOGGLE_SWITCH = 'TOGGLE_SWITCH';
export const SWITCH_ON = 'SWITCH_ON';
export const SWITCH_OFF = 'SWITCH_OFF';

export function toggleSwitch(switchName) {
  return {
    type: TOGGLE_SWITCH,
    switchName,
  };
}

export function switchOff(switchName) {
  return {
    type: SWITCH_OFF,
    switchName,
  };
}

export function switchOn(switchName) {
  return {
    type: SWITCH_ON,
    switchName,
  };
}
