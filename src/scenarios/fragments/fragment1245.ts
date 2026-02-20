import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1243 } from "./fragment1243";
import type { FragmentToken1244 } from "./fragment1244";

export const FRAGMENT_1245 = gql(`
  fragment Fragment1245 on Member124 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_124
    memberCount_124
    memberMetric_124
  }
`);

type FragmentResult1245 = ResultOf<typeof FRAGMENT_1245>;
type FragmentSelf1245 = NonNullable<FragmentResult1245>;

export type FragmentToken1245 =
  | FragmentSelf1245["__typename"]
  | FragmentSelf1245["typenameHint"] | FragmentToken1243 | FragmentToken1244;
