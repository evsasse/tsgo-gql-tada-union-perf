import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1219 } from "./fragment1219";
import type { FragmentToken1220 } from "./fragment1220";

export const FRAGMENT_1221 = gql(`
  fragment Fragment1221 on Member100 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_100
    memberCount_100
    memberMetric_100
  }
`);

type FragmentResult1221 = ResultOf<typeof FRAGMENT_1221>;
type FragmentSelf1221 = NonNullable<FragmentResult1221>;

export type FragmentToken1221 =
  | FragmentSelf1221["__typename"]
  | FragmentSelf1221["typenameHint"] | FragmentToken1219 | FragmentToken1220;
