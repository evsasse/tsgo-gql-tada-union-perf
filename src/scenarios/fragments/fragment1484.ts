import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1482 } from "./fragment1482";
import type { FragmentToken1483 } from "./fragment1483";

export const FRAGMENT_1484 = gql(`
  fragment Fragment1484 on Member83 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_83
    memberCount_83
    memberMetric_83
  }
`);

type FragmentResult1484 = ResultOf<typeof FRAGMENT_1484>;
type FragmentSelf1484 = NonNullable<FragmentResult1484>;

export type FragmentToken1484 =
  | FragmentSelf1484["__typename"]
  | FragmentSelf1484["typenameHint"] | FragmentToken1482 | FragmentToken1483;
