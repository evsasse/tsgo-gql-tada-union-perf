import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1818 } from "./fragment1818";
import type { FragmentToken1819 } from "./fragment1819";

export const FRAGMENT_1820 = gql(`
  fragment Fragment1820 on Member139 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_139
    memberCount_139
    memberMetric_139
  }
`);

type FragmentResult1820 = ResultOf<typeof FRAGMENT_1820>;
type FragmentSelf1820 = NonNullable<FragmentResult1820>;

export type FragmentToken1820 =
  | FragmentSelf1820["__typename"]
  | FragmentSelf1820["typenameHint"] | FragmentToken1818 | FragmentToken1819;
