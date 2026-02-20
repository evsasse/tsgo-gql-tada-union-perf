import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken044 } from "./fragment044";
import type { FragmentToken045 } from "./fragment045";

export const FRAGMENT_046 = gql(`
  fragment Fragment046 on Member45 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_45
    memberCount_45
    memberMetric_45
  }
`);

type FragmentResult046 = ResultOf<typeof FRAGMENT_046>;
type FragmentSelf046 = NonNullable<FragmentResult046>;

export type FragmentToken046 =
  | FragmentSelf046["__typename"]
  | FragmentSelf046["typenameHint"] | FragmentToken044 | FragmentToken045;
