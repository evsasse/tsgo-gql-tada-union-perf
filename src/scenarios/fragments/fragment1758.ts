import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1756 } from "./fragment1756";
import type { FragmentToken1757 } from "./fragment1757";

export const FRAGMENT_1758 = gql(`
  fragment Fragment1758 on Member77 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_77
    memberCount_77
    memberMetric_77
  }
`);

type FragmentResult1758 = ResultOf<typeof FRAGMENT_1758>;
type FragmentSelf1758 = NonNullable<FragmentResult1758>;

export type FragmentToken1758 =
  | FragmentSelf1758["__typename"]
  | FragmentSelf1758["typenameHint"] | FragmentToken1756 | FragmentToken1757;
