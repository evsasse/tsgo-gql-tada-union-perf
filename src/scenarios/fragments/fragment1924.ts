import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1922 } from "./fragment1922";
import type { FragmentToken1923 } from "./fragment1923";

export const FRAGMENT_1924 = gql(`
  fragment Fragment1924 on Member243 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_243
    memberCount_243
    memberMetric_243
  }
`);

type FragmentResult1924 = ResultOf<typeof FRAGMENT_1924>;
type FragmentSelf1924 = NonNullable<FragmentResult1924>;

export type FragmentToken1924 =
  | FragmentSelf1924["__typename"]
  | FragmentSelf1924["typenameHint"] | FragmentToken1922 | FragmentToken1923;
