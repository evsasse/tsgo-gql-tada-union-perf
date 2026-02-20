import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1481 } from "./fragment1481";
import type { FragmentToken1482 } from "./fragment1482";

export const FRAGMENT_1483 = gql(`
  fragment Fragment1483 on Member82 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_82
    memberCount_82
    memberMetric_82
  }
`);

type FragmentResult1483 = ResultOf<typeof FRAGMENT_1483>;
type FragmentSelf1483 = NonNullable<FragmentResult1483>;

export type FragmentToken1483 =
  | FragmentSelf1483["__typename"]
  | FragmentSelf1483["typenameHint"] | FragmentToken1481 | FragmentToken1482;
