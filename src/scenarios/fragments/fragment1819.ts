import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1817 } from "./fragment1817";
import type { FragmentToken1818 } from "./fragment1818";

export const FRAGMENT_1819 = gql(`
  fragment Fragment1819 on Member138 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_138
    memberCount_138
    memberMetric_138
  }
`);

type FragmentResult1819 = ResultOf<typeof FRAGMENT_1819>;
type FragmentSelf1819 = NonNullable<FragmentResult1819>;

export type FragmentToken1819 =
  | FragmentSelf1819["__typename"]
  | FragmentSelf1819["typenameHint"] | FragmentToken1817 | FragmentToken1818;
