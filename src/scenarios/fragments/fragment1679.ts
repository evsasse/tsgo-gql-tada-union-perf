import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1677 } from "./fragment1677";
import type { FragmentToken1678 } from "./fragment1678";

export const FRAGMENT_1679 = gql(`
  fragment Fragment1679 on Member278 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_278
    memberCount_278
    memberMetric_278
  }
`);

type FragmentResult1679 = ResultOf<typeof FRAGMENT_1679>;
type FragmentSelf1679 = NonNullable<FragmentResult1679>;

export type FragmentToken1679 =
  | FragmentSelf1679["__typename"]
  | FragmentSelf1679["typenameHint"] | FragmentToken1677 | FragmentToken1678;
