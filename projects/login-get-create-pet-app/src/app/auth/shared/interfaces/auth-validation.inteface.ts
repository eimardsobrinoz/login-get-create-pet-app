export interface AuthValidation {
  required: boolean;
  email?: boolean;
  pattern?: string;
  available?: boolean;
  minLength?: number;
  lowerUppercaseFormat?: boolean;
  containsOthersControlsValue: string[]
}

export enum AuthFormStatus {
  VALID = "VALID",
  INVALID = "INVALID",
  PENDING = "PENDING"
}