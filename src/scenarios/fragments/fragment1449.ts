import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1447 } from "./fragment1447";
import type { FragmentToken1448 } from "./fragment1448";

export const FRAGMENT_1449 = gql(`
  fragment Fragment1449 on Member48 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_48
    memberCount_48
    memberMetric_48
  }
`);

type FragmentResult1449 = ResultOf<typeof FRAGMENT_1449>;
type FragmentSelf1449 = NonNullable<FragmentResult1449>;

export type FragmentToken1449 =
  | FragmentSelf1449["__typename"]
  | FragmentSelf1449["typenameHint"] | FragmentToken1447 | FragmentToken1448;
