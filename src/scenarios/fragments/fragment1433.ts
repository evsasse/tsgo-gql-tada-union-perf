import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1431 } from "./fragment1431";
import type { FragmentToken1432 } from "./fragment1432";

export const FRAGMENT_1433 = gql(`
  fragment Fragment1433 on Member32 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_32
    memberCount_32
    memberMetric_32
  }
`);

type FragmentResult1433 = ResultOf<typeof FRAGMENT_1433>;
type FragmentSelf1433 = NonNullable<FragmentResult1433>;

export type FragmentToken1433 =
  | FragmentSelf1433["__typename"]
  | FragmentSelf1433["typenameHint"] | FragmentToken1431 | FragmentToken1432;
