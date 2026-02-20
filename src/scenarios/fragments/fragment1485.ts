import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1483 } from "./fragment1483";
import type { FragmentToken1484 } from "./fragment1484";

export const FRAGMENT_1485 = gql(`
  fragment Fragment1485 on Member84 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_84
    memberCount_84
    memberMetric_84
  }
`);

type FragmentResult1485 = ResultOf<typeof FRAGMENT_1485>;
type FragmentSelf1485 = NonNullable<FragmentResult1485>;

export type FragmentToken1485 =
  | FragmentSelf1485["__typename"]
  | FragmentSelf1485["typenameHint"] | FragmentToken1483 | FragmentToken1484;
