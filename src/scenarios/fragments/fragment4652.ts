import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4650 } from "./fragment4650";
import type { FragmentToken4651 } from "./fragment4651";

export const FRAGMENT_4652 = gql(`
  fragment Fragment4652 on Member171 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_171
    memberCount_171
    memberMetric_171
  }
`);

type FragmentResult4652 = ResultOf<typeof FRAGMENT_4652>;
type FragmentSelf4652 = NonNullable<FragmentResult4652>;

export type FragmentToken4652 =
  | FragmentSelf4652["__typename"]
  | FragmentSelf4652["typenameHint"] | FragmentToken4650 | FragmentToken4651;
