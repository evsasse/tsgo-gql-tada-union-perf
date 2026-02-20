import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1853 } from "./fragment1853";
import type { FragmentToken1854 } from "./fragment1854";

export const FRAGMENT_1855 = gql(`
  fragment Fragment1855 on Member174 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_174
    memberCount_174
    memberMetric_174
  }
`);

type FragmentResult1855 = ResultOf<typeof FRAGMENT_1855>;
type FragmentSelf1855 = NonNullable<FragmentResult1855>;

export type FragmentToken1855 =
  | FragmentSelf1855["__typename"]
  | FragmentSelf1855["typenameHint"] | FragmentToken1853 | FragmentToken1854;
