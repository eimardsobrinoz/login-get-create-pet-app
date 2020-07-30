export interface FormValidation {
  required: boolean;
  email?: boolean;
  pattern?: string;
  available?: boolean;
  minLength?: number;
  lowerUppercaseFormat?: boolean;
  containsOthersControlsValue?: string[]
}

export enum FormFormatStatus {
  VALID = "VALID",
  INVALID = "INVALID",
  PENDING = "PENDING"
}