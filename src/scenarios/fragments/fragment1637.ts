import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1635 } from "./fragment1635";
import type { FragmentToken1636 } from "./fragment1636";

export const FRAGMENT_1637 = gql(`
  fragment Fragment1637 on Member236 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_236
    memberCount_236
    memberMetric_236
  }
`);

type FragmentResult1637 = ResultOf<typeof FRAGMENT_1637>;
type FragmentSelf1637 = NonNullable<FragmentResult1637>;

export type FragmentToken1637 =
  | FragmentSelf1637["__typename"]
  | FragmentSelf1637["typenameHint"] | FragmentToken1635 | FragmentToken1636;
