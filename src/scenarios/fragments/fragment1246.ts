import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1244 } from "./fragment1244";
import type { FragmentToken1245 } from "./fragment1245";

export const FRAGMENT_1246 = gql(`
  fragment Fragment1246 on Member125 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_125
    memberCount_125
    memberMetric_125
  }
`);

type FragmentResult1246 = ResultOf<typeof FRAGMENT_1246>;
type FragmentSelf1246 = NonNullable<FragmentResult1246>;

export type FragmentToken1246 =
  | FragmentSelf1246["__typename"]
  | FragmentSelf1246["typenameHint"] | FragmentToken1244 | FragmentToken1245;
