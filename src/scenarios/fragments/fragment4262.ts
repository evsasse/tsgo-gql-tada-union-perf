import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4260 } from "./fragment4260";
import type { FragmentToken4261 } from "./fragment4261";

export const FRAGMENT_4262 = gql(`
  fragment Fragment4262 on Member61 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_61
    memberCount_61
    memberMetric_61
  }
`);

type FragmentResult4262 = ResultOf<typeof FRAGMENT_4262>;
type FragmentSelf4262 = NonNullable<FragmentResult4262>;

export type FragmentToken4262 =
  | FragmentSelf4262["__typename"]
  | FragmentSelf4262["typenameHint"] | FragmentToken4260 | FragmentToken4261;
