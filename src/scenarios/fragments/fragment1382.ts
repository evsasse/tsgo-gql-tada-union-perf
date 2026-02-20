import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1380 } from "./fragment1380";
import type { FragmentToken1381 } from "./fragment1381";

export const FRAGMENT_1382 = gql(`
  fragment Fragment1382 on Member261 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_261
    memberCount_261
    memberMetric_261
  }
`);

type FragmentResult1382 = ResultOf<typeof FRAGMENT_1382>;
type FragmentSelf1382 = NonNullable<FragmentResult1382>;

export type FragmentToken1382 =
  | FragmentSelf1382["__typename"]
  | FragmentSelf1382["typenameHint"] | FragmentToken1380 | FragmentToken1381;
