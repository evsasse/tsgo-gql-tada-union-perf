import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1452 } from "./fragment1452";
import type { FragmentToken1453 } from "./fragment1453";

export const FRAGMENT_1454 = gql(`
  fragment Fragment1454 on Member53 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_53
    memberCount_53
    memberMetric_53
  }
`);

type FragmentResult1454 = ResultOf<typeof FRAGMENT_1454>;
type FragmentSelf1454 = NonNullable<FragmentResult1454>;

export type FragmentToken1454 =
  | FragmentSelf1454["__typename"]
  | FragmentSelf1454["typenameHint"] | FragmentToken1452 | FragmentToken1453;
