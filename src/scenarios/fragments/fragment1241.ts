import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1239 } from "./fragment1239";
import type { FragmentToken1240 } from "./fragment1240";

export const FRAGMENT_1241 = gql(`
  fragment Fragment1241 on Member120 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_120
    memberCount_120
    memberMetric_120
  }
`);

type FragmentResult1241 = ResultOf<typeof FRAGMENT_1241>;
type FragmentSelf1241 = NonNullable<FragmentResult1241>;

export type FragmentToken1241 =
  | FragmentSelf1241["__typename"]
  | FragmentSelf1241["typenameHint"] | FragmentToken1239 | FragmentToken1240;
