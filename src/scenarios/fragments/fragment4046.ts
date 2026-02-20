import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4044 } from "./fragment4044";
import type { FragmentToken4045 } from "./fragment4045";

export const FRAGMENT_4046 = gql(`
  fragment Fragment4046 on Member125 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_125
    memberCount_125
    memberMetric_125
  }
`);

type FragmentResult4046 = ResultOf<typeof FRAGMENT_4046>;
type FragmentSelf4046 = NonNullable<FragmentResult4046>;

export type FragmentToken4046 =
  | FragmentSelf4046["__typename"]
  | FragmentSelf4046["typenameHint"] | FragmentToken4044 | FragmentToken4045;
