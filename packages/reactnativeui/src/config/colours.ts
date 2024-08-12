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

// Variant - Background

export const DEFAULT_BACKGROUND_SUBTLE: string = WHITE;
export const PRIMARY_BACKGROUND_SUBTLE: string = tintColour(
  PRIMARY,
  WHITE,
  0.8
);
export const SECONDARY_BACKGROUND_SUBTLE: string = tintColour(
  SECONDARY,
  WHITE,
  0.8
);
export const SUCCESS_BACKGROUND_SUBTLE: string = tintColour(
  SUCCESS,
  WHITE,
  0.8
);
export const INFO_BACKGROUND_SUBTLE: string = tintColour(INFO, WHITE, 0.8);
export const WARNING_BACKGROUND_SUBTLE: string = tintColour(
  WARNING,
  WHITE,
  0.8
);
export const DANGER_BACKGROUND_SUBTLE: string = tintColour(DANGER, WHITE, 0.8);
export const LIGHT_BACKGROUND_SUBTLE: string = GRAY_100;
export const DARK_BACKGROUND_SUBTLE: string = GRAY_400;

// Variant - Border

export const DEFAULT_BORDER_SUBTLE: string = GRAY_200;
export const PRIMARY_BORDER_SUBTLE: string = tintColour(PRIMARY, WHITE, 0.6);
export const SECONDARY_BORDER_SUBTLE: string = tintColour(
  SECONDARY,
  WHITE,
  0.6
);
export const SUCCESS_BORDER_SUBTLE: string = tintColour(SUCCESS, WHITE, 0.6);
export const INFO_BORDER_SUBTLE: string = tintColour(INFO, WHITE, 0.6);
export const WARNING_BORDER_SUBTLE: string = tintColour(WARNING, WHITE, 0.6);
export const DANGER_BORDER_SUBTLE: string = tintColour(DANGER, WHITE, 0.6);
export const LIGHT_BORDER_SUBTLE: string = GRAY_200;
export const DARK_BORDER_SUBTLE: string = GRAY_500;

// Variant - Text Emphasis

export const DEFAULT_TEXT_EMPHASIS: string = BLACK;
export const PRIMARY_TEXT_EMPHASIS: string = tintColour(PRIMARY, BLACK, 0.6);
export const SECONDARY_TEXT_EMPHASIS: string = tintColour(
  SECONDARY,
  BLACK,
  0.6
);
export const SUCCESS_TEXT_EMPHASIS: string = tintColour(SUCCESS, BLACK, 0.6);
export const INFO_TEXT_EMPHASIS: string = tintColour(INFO, BLACK, 0.6);
export const WARNING_TEXT_EMPHASIS: string = tintColour(WARNING, BLACK, 0.6);
export const DANGER_TEXT_EMPHASIS: string = tintColour(DANGER, BLACK, 0.6);
export const LIGHT_TEXT_EMPHASIS: string = GRAY_700;
export const DARK_TEXT_EMPHASIS: string = GRAY_700;

// Components

// Alerts

export const ALERT_DEFAULT_BACKGROUND: string = DEFAULT_BACKGROUND_SUBTLE;
export const ALERT_DEFAULT_BORDER: string = DEFAULT_BORDER_SUBTLE;
export const ALERT_TEXT_DEFAULT: string = DEFAULT_TEXT_EMPHASIS;

export const ALERT_PRIMARY_BACKGROUND: string = PRIMARY_BACKGROUND_SUBTLE;
export const ALERT_PRIMARY_BORDER: string = PRIMARY_BORDER_SUBTLE;
export const ALERT_TEXT_PRIMARY: string = PRIMARY_TEXT_EMPHASIS;

export const ALERT_SECONDARY_BACKGROUND: string = SECONDARY_BACKGROUND_SUBTLE;
export const ALERT_SECONDARY_BORDER: string = SECONDARY_BORDER_SUBTLE;
export const ALERT_TEXT_SECONDARY: string = SECONDARY_TEXT_EMPHASIS;

export const ALERT_SUCCESS_BACKGROUND: string = SUCCESS_BACKGROUND_SUBTLE;
export const ALERT_SUCCESS_BORDER: string = SUCCESS_BORDER_SUBTLE;
export const ALERT_TEXT_SUCCESS: string = SUCCESS_TEXT_EMPHASIS;

export const ALERT_INFO_BACKGROUND: string = INFO_BACKGROUND_SUBTLE;
export const ALERT_INFO_BORDER: string = INFO_BORDER_SUBTLE;
export const ALERT_TEXT_INFO: string = INFO_TEXT_EMPHASIS;

export const ALERT_WARNING_BACKGROUND: string = WARNING_BACKGROUND_SUBTLE;
export const ALERT_WARNING_BORDER: string = WARNING_BORDER_SUBTLE;
export const ALERT_TEXT_WARNING: string = WARNING_TEXT_EMPHASIS;

export const ALERT_DANGER_BACKGROUND: string = DANGER_BACKGROUND_SUBTLE;
export const ALERT_DANGER_BORDER: string = DANGER_BORDER_SUBTLE;
export const ALERT_TEXT_DANGER: string = DANGER_TEXT_EMPHASIS;

export const ALERT_LIGHT_BACKGROUND: string = LIGHT_BACKGROUND_SUBTLE;
export const ALERT_LIGHT_BORDER: string = LIGHT_BORDER_SUBTLE;
export const ALERT_TEXT_LIGHT: string = LIGHT_TEXT_EMPHASIS;

export const ALERT_DARK_BACKGROUND: string = DARK_BACKGROUND_SUBTLE;
export const ALERT_DARK_BORDER: string = DARK_BORDER_SUBTLE;
export const ALERT_TEXT_DARK: string = DARK_TEXT_EMPHASIS;

// Badges

export const BADGE_DEFAULT_BACKGROUND: string = WHITE;
export const BADGE_TEXT_DEFAULT: string = BLACK;

export const BADGE_PRIMARY_BACKGROUND: string = PRIMARY;
export const BADGE_TEXT_PRIMARY: string = WHITE;

export const BADGE_SECONDARY_BACKGROUND: string = SECONDARY;
export const BADGE_TEXT_SECONDARY: string = WHITE;

export const BADGE_SUCCESS_BACKGROUND: string = SUCCESS;
export const BADGE_TEXT_SUCCESS: string = WHITE;

export const BADGE_DANGER_BACKGROUND: string = DANGER;
export const BADGE_TEXT_DANGER: string = WHITE;

export const BADGE_WARNING_BACKGROUND: string = WARNING;
export const BADGE_TEXT_WARNING: string = BLACK;

export const BADGE_INFO_BACKGROUND: string = INFO;
export const BADGE_TEXT_INFO: string = BLACK;

export const BADGE_LIGHT_BACKGROUND: string = LIGHT;
export const BADGE_TEXT_LIGHT: string = BLACK;

export const BADGE_DARK_BACKGROUND: string = DARK;
export const BADGE_TEXT_DARK: string = WHITE;

// Breadcrumbs

export const BREADCRUMB_TEXT_COLOR: string = PRIMARY;
export const BREADCRUMB_ACTIVE_TEXT_COLOR: string = BLACK;
export const BREADCRUMB_SEPARATOR_COLOR: string = GRAY_600;

// Cards

export const CARD_BORDER_COLOR: string = GRAY_200;

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
