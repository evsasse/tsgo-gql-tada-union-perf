import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken570 } from "./fragment570";
import type { FragmentToken571 } from "./fragment571";

export const FRAGMENT_572 = gql(`
  fragment Fragment572 on Member11 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_11
    memberCount_11
    memberMetric_11
  }
`);

type FragmentResult572 = ResultOf<typeof FRAGMENT_572>;
type FragmentSelf572 = NonNullable<FragmentResult572>;

export type FragmentToken572 =
  | FragmentSelf572["__typename"]
  | FragmentSelf572["typenameHint"] | FragmentToken570 | FragmentToken571;
