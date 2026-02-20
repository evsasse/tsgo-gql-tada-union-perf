import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken587 } from "./fragment587";
import type { FragmentToken588 } from "./fragment588";

export const FRAGMENT_589 = gql(`
  fragment Fragment589 on Member28 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_28
    memberCount_28
    memberMetric_28
  }
`);

type FragmentResult589 = ResultOf<typeof FRAGMENT_589>;
type FragmentSelf589 = NonNullable<FragmentResult589>;

export type FragmentToken589 =
  | FragmentSelf589["__typename"]
  | FragmentSelf589["typenameHint"] | FragmentToken587 | FragmentToken588;
