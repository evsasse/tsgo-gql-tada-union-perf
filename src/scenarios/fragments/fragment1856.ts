import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1854 } from "./fragment1854";
import type { FragmentToken1855 } from "./fragment1855";

export const FRAGMENT_1856 = gql(`
  fragment Fragment1856 on Member175 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_175
    memberCount_175
    memberMetric_175
  }
`);

type FragmentResult1856 = ResultOf<typeof FRAGMENT_1856>;
type FragmentSelf1856 = NonNullable<FragmentResult1856>;

export type FragmentToken1856 =
  | FragmentSelf1856["__typename"]
  | FragmentSelf1856["typenameHint"] | FragmentToken1854 | FragmentToken1855;
