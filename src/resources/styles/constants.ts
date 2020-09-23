import { SystemColorType, PrimaryColorType, BreakPointValueType, BreakPointType } from './types';

const SystemColor: Record<SystemColorType, Record<PrimaryColorType, string>> = {
  primaryColor: {
    primary: '#18F0FF',
    black: '#000000',
    blackMist: '#252A2E',
    white: '#FFFFFF',
    red: '#FF2500',
    yellow: '#FFC312',
    grey: '#777777',
    blueMist: '#A6ACB5',
  },
};

const breakPointValue: Record<BreakPointValueType, number> = {
  xs: 400,
  sm: 700,
  md: 929,
  lg: 1230,
  xl: 1231,
};

const breakPoints: Record<BreakPointType, string> = {
  xs: `(max-width: ${breakPointValue.xs}px)`,
  sm: `(min-width: ${breakPointValue.xs + 1}px) and (max-width: ${breakPointValue.sm}px)`,
  md: `(min-width: ${breakPointValue.sm + 1}px) and (max-width: ${breakPointValue.md}px)`,
  lg: `(min-width: ${breakPointValue.md + 1}px) and (max-width: ${breakPointValue.lg}px)`,
  xl: `(min-width: ${breakPointValue.xl}px)`,
  lg_under: `(max-width: ${breakPointValue.lg}px)`,
  md_under: `(max-width: ${breakPointValue.md}px)`,
  sm_under: `(max-width: ${breakPointValue.sm}px)`,
  xs_under: `(max-width: ${breakPointValue.xs}px)`,
};

export { SystemColor, breakPoints, breakPointValue };
