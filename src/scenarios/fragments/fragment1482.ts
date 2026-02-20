import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1480 } from "./fragment1480";
import type { FragmentToken1481 } from "./fragment1481";

export const FRAGMENT_1482 = gql(`
  fragment Fragment1482 on Member81 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_81
    memberCount_81
    memberMetric_81
  }
`);

type FragmentResult1482 = ResultOf<typeof FRAGMENT_1482>;
type FragmentSelf1482 = NonNullable<FragmentResult1482>;

export type FragmentToken1482 =
  | FragmentSelf1482["__typename"]
  | FragmentSelf1482["typenameHint"] | FragmentToken1480 | FragmentToken1481;
