import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4284 } from "./fragment4284";
import type { FragmentToken4285 } from "./fragment4285";

export const FRAGMENT_4286 = gql(`
  fragment Fragment4286 on Member85 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_85
    memberCount_85
    memberMetric_85
  }
`);

type FragmentResult4286 = ResultOf<typeof FRAGMENT_4286>;
type FragmentSelf4286 = NonNullable<FragmentResult4286>;

export type FragmentToken4286 =
  | FragmentSelf4286["__typename"]
  | FragmentSelf4286["typenameHint"] | FragmentToken4284 | FragmentToken4285;
