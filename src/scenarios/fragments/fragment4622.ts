import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4620 } from "./fragment4620";
import type { FragmentToken4621 } from "./fragment4621";

export const FRAGMENT_4622 = gql(`
  fragment Fragment4622 on Member141 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_141
    memberCount_141
    memberMetric_141
  }
`);

type FragmentResult4622 = ResultOf<typeof FRAGMENT_4622>;
type FragmentSelf4622 = NonNullable<FragmentResult4622>;

export type FragmentToken4622 =
  | FragmentSelf4622["__typename"]
  | FragmentSelf4622["typenameHint"] | FragmentToken4620 | FragmentToken4621;
