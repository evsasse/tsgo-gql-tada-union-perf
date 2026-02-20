import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1396 } from "./fragment1396";
import type { FragmentToken1397 } from "./fragment1397";

export const FRAGMENT_1398 = gql(`
  fragment Fragment1398 on Member277 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_277
    memberCount_277
    memberMetric_277
  }
`);

type FragmentResult1398 = ResultOf<typeof FRAGMENT_1398>;
type FragmentSelf1398 = NonNullable<FragmentResult1398>;

export type FragmentToken1398 =
  | FragmentSelf1398["__typename"]
  | FragmentSelf1398["typenameHint"] | FragmentToken1396 | FragmentToken1397;
