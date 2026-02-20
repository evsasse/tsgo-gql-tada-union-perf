import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1819 } from "./fragment1819";
import type { FragmentToken1820 } from "./fragment1820";

export const FRAGMENT_1821 = gql(`
  fragment Fragment1821 on Member140 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_140
    memberCount_140
    memberMetric_140
  }
`);

type FragmentResult1821 = ResultOf<typeof FRAGMENT_1821>;
type FragmentSelf1821 = NonNullable<FragmentResult1821>;

export type FragmentToken1821 =
  | FragmentSelf1821["__typename"]
  | FragmentSelf1821["typenameHint"] | FragmentToken1819 | FragmentToken1820;
