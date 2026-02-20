import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1772 } from "./fragment1772";
import type { FragmentToken1773 } from "./fragment1773";

export const FRAGMENT_1774 = gql(`
  fragment Fragment1774 on Member93 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_93
    memberCount_93
    memberMetric_93
  }
`);

type FragmentResult1774 = ResultOf<typeof FRAGMENT_1774>;
type FragmentSelf1774 = NonNullable<FragmentResult1774>;

export type FragmentToken1774 =
  | FragmentSelf1774["__typename"]
  | FragmentSelf1774["typenameHint"] | FragmentToken1772 | FragmentToken1773;
