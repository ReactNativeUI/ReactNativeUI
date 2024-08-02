import { tintColour } from '../helpers';

export const BLACK: string = '#000000';
export const BLUE: string = '#0d6efd';
export const CYAN: string = '#0dcaf0';
export const GREEN: string = '#198754';
export const GRAY_100: string = '#f8f9fa';
export const GRAY_200: string = '#e9ecef';
export const GRAY_300: string = '#dee2e6';
export const GRAY_400: string = '#ced4da';
export const GRAY_500: string = '#adb5bd';
export const GRAY_600: string = '#6c757d';
export const GRAY_700: string = '#495057';
export const GRAY_800: string = '#343a40';
export const GRAY_900: string = '#212529';
export const INDIGO: string = '#6610f2';
export const ORANGE: string = '#fd7e14';
export const PINK: string = '#d63384';
export const PURPLE: string = '#6f42c1';
export const RED: string = '#dc3545';
export const TEAL: string = '#20c997';
export const WHITE: string = '#FFFFFF';
export const YELLOW: string = '#ffc107';

// Variants

export const DEFAULT: string = BLACK;
export const PRIMARY: string = BLUE;
export const SECONDARY: string = GRAY_600;
export const SUCCESS: string = GREEN;
export const INFO: string = CYAN;
export const WARNING: string = YELLOW;
export const DANGER: string = RED;
export const LIGHT: string = GRAY_100;
export const DARK: string = GRAY_900;

// Tables

export const TABLE_PRIMARY_BACKGROUND: string = tintColour(PRIMARY, WHITE, 0.8);
export const TABLE_SECONDARY_BACKGROUND: string = tintColour(
  SECONDARY,
  WHITE,
  0.8
);
export const TABLE_SUCCESS_BACKGROUND: string = tintColour(SUCCESS, WHITE, 0.8);
export const TABLE_INFO_BACKGROUND: string = tintColour(INFO, WHITE, 0.8);
export const TABLE_WARNING_BACKGROUND: string = tintColour(WARNING, WHITE, 0.8);
export const TABLE_DANGER_BACKGROUND: string = tintColour(DANGER, WHITE, 0.8);
export const TABLE_LIGHT_BACKGROUND: string = LIGHT;
export const TABLE_DARK_BACKGROUND: string = DARK;
