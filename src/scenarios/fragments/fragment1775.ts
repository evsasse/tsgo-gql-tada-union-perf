import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1773 } from "./fragment1773";
import type { FragmentToken1774 } from "./fragment1774";

export const FRAGMENT_1775 = gql(`
  fragment Fragment1775 on Member94 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_94
    memberCount_94
    memberMetric_94
  }
`);

type FragmentResult1775 = ResultOf<typeof FRAGMENT_1775>;
type FragmentSelf1775 = NonNullable<FragmentResult1775>;

export type FragmentToken1775 =
  | FragmentSelf1775["__typename"]
  | FragmentSelf1775["typenameHint"] | FragmentToken1773 | FragmentToken1774;
