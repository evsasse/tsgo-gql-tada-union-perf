import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1789 } from "./fragment1789";
import type { FragmentToken1790 } from "./fragment1790";

export const FRAGMENT_1791 = gql(`
  fragment Fragment1791 on Member110 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_110
    memberCount_110
    memberMetric_110
  }
`);

type FragmentResult1791 = ResultOf<typeof FRAGMENT_1791>;
type FragmentSelf1791 = NonNullable<FragmentResult1791>;

export type FragmentToken1791 =
  | FragmentSelf1791["__typename"]
  | FragmentSelf1791["typenameHint"] | FragmentToken1789 | FragmentToken1790;
