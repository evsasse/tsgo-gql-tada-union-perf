import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1744 } from "./fragment1744";
import type { FragmentToken1745 } from "./fragment1745";

export const FRAGMENT_1746 = gql(`
  fragment Fragment1746 on Member65 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_65
    memberCount_65
    memberMetric_65
  }
`);

type FragmentResult1746 = ResultOf<typeof FRAGMENT_1746>;
type FragmentSelf1746 = NonNullable<FragmentResult1746>;

export type FragmentToken1746 =
  | FragmentSelf1746["__typename"]
  | FragmentSelf1746["typenameHint"] | FragmentToken1744 | FragmentToken1745;
