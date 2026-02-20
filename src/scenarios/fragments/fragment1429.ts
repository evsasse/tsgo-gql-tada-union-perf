import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1427 } from "./fragment1427";
import type { FragmentToken1428 } from "./fragment1428";

export const FRAGMENT_1429 = gql(`
  fragment Fragment1429 on Member28 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_28
    memberCount_28
    memberMetric_28
  }
`);

type FragmentResult1429 = ResultOf<typeof FRAGMENT_1429>;
type FragmentSelf1429 = NonNullable<FragmentResult1429>;

export type FragmentToken1429 =
  | FragmentSelf1429["__typename"]
  | FragmentSelf1429["typenameHint"] | FragmentToken1427 | FragmentToken1428;
