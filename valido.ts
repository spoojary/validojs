export interface IApplicant {
  firstName: string;
  lastName: string;
  employment: {};
}

export interface IEmployment {
  source: string;
}

export interface IAdditionalIncome {
  source: string;
  ratePerHour: number;
}

export type Constraint<T> = {
  [P in keyof T]: ConstraintRules<T[P]>;
};

export type ConstraintRules<T> = {
  presence?: boolean;
  email?: boolean;
  number?: NumberConstraintRule;
  array?: Constraint<T>;
  object?: Constraint<T>;
};

export type NumberConstraintRule = {
  onlyInteger: boolean;
  greaterThan: boolean;
  greaterThanOrEqualTo: boolean;
  equalTo: boolean;
  lessThanOrEqualTo: boolean;
  lessThan: boolean;
  divisibleBy: boolean;
};

const applicant: IApplicant = {};

export function validate() {}
