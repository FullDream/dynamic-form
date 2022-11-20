export const enum FormComponents {
  input = 'input',
}

type FormComponentsUnion = `${FormComponents}`;

export interface BaseControl {
  component: FormComponentsUnion;
  label?: string;
  controlName: string;
}
