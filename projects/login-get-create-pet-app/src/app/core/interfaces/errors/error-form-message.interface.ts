export interface ErrorFormMessage {
  required: string;
  format?: string;
  minLength?: string;
  lowerUppercaseFormat?: string;
  notAvailable?: string;
  containsOthersControlsValue?:string;
}