import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1437 } from "./fragment1437";
import type { FragmentToken1438 } from "./fragment1438";

export const FRAGMENT_1439 = gql(`
  fragment Fragment1439 on Member38 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_38
    memberCount_38
    memberMetric_38
  }
`);

type FragmentResult1439 = ResultOf<typeof FRAGMENT_1439>;
type FragmentSelf1439 = NonNullable<FragmentResult1439>;

export type FragmentToken1439 =
  | FragmentSelf1439["__typename"]
  | FragmentSelf1439["typenameHint"] | FragmentToken1437 | FragmentToken1438;
