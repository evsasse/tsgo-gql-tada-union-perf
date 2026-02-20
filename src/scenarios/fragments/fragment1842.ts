import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1840 } from "./fragment1840";
import type { FragmentToken1841 } from "./fragment1841";

export const FRAGMENT_1842 = gql(`
  fragment Fragment1842 on Member161 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_161
    memberCount_161
    memberMetric_161
  }
`);

type FragmentResult1842 = ResultOf<typeof FRAGMENT_1842>;
type FragmentSelf1842 = NonNullable<FragmentResult1842>;

export type FragmentToken1842 =
  | FragmentSelf1842["__typename"]
  | FragmentSelf1842["typenameHint"] | FragmentToken1840 | FragmentToken1841;
