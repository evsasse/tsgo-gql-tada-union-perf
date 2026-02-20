import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken588 } from "./fragment588";
import type { FragmentToken589 } from "./fragment589";

export const FRAGMENT_590 = gql(`
  fragment Fragment590 on Member29 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_29
    memberCount_29
    memberMetric_29
  }
`);

type FragmentResult590 = ResultOf<typeof FRAGMENT_590>;
type FragmentSelf590 = NonNullable<FragmentResult590>;

export type FragmentToken590 =
  | FragmentSelf590["__typename"]
  | FragmentSelf590["typenameHint"] | FragmentToken588 | FragmentToken589;
