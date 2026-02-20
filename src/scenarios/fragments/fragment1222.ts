import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1220 } from "./fragment1220";
import type { FragmentToken1221 } from "./fragment1221";

export const FRAGMENT_1222 = gql(`
  fragment Fragment1222 on Member101 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_101
    memberCount_101
    memberMetric_101
  }
`);

type FragmentResult1222 = ResultOf<typeof FRAGMENT_1222>;
type FragmentSelf1222 = NonNullable<FragmentResult1222>;

export type FragmentToken1222 =
  | FragmentSelf1222["__typename"]
  | FragmentSelf1222["typenameHint"] | FragmentToken1220 | FragmentToken1221;
