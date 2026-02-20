import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1829 } from "./fragment1829";
import type { FragmentToken1830 } from "./fragment1830";

export const FRAGMENT_1831 = gql(`
  fragment Fragment1831 on Member150 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_150
    memberCount_150
    memberMetric_150
  }
`);

type FragmentResult1831 = ResultOf<typeof FRAGMENT_1831>;
type FragmentSelf1831 = NonNullable<FragmentResult1831>;

export type FragmentToken1831 =
  | FragmentSelf1831["__typename"]
  | FragmentSelf1831["typenameHint"] | FragmentToken1829 | FragmentToken1830;
