import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1828 } from "./fragment1828";
import type { FragmentToken1829 } from "./fragment1829";

export const FRAGMENT_1830 = gql(`
  fragment Fragment1830 on Member149 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_149
    memberCount_149
    memberMetric_149
  }
`);

type FragmentResult1830 = ResultOf<typeof FRAGMENT_1830>;
type FragmentSelf1830 = NonNullable<FragmentResult1830>;

export type FragmentToken1830 =
  | FragmentSelf1830["__typename"]
  | FragmentSelf1830["typenameHint"] | FragmentToken1828 | FragmentToken1829;
