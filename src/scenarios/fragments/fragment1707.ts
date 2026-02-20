import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1705 } from "./fragment1705";
import type { FragmentToken1706 } from "./fragment1706";

export const FRAGMENT_1707 = gql(`
  fragment Fragment1707 on Member26 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_26
    memberCount_26
    memberMetric_26
  }
`);

type FragmentResult1707 = ResultOf<typeof FRAGMENT_1707>;
type FragmentSelf1707 = NonNullable<FragmentResult1707>;

export type FragmentToken1707 =
  | FragmentSelf1707["__typename"]
  | FragmentSelf1707["typenameHint"] | FragmentToken1705 | FragmentToken1706;
