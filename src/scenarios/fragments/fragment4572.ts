import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4570 } from "./fragment4570";
import type { FragmentToken4571 } from "./fragment4571";

export const FRAGMENT_4572 = gql(`
  fragment Fragment4572 on Member91 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_91
    memberCount_91
    memberMetric_91
  }
`);

type FragmentResult4572 = ResultOf<typeof FRAGMENT_4572>;
type FragmentSelf4572 = NonNullable<FragmentResult4572>;

export type FragmentToken4572 =
  | FragmentSelf4572["__typename"]
  | FragmentSelf4572["typenameHint"] | FragmentToken4570 | FragmentToken4571;
