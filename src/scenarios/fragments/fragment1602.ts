import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1600 } from "./fragment1600";
import type { FragmentToken1601 } from "./fragment1601";

export const FRAGMENT_1602 = gql(`
  fragment Fragment1602 on Member201 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_201
    memberCount_201
    memberMetric_201
  }
`);

type FragmentResult1602 = ResultOf<typeof FRAGMENT_1602>;
type FragmentSelf1602 = NonNullable<FragmentResult1602>;

export type FragmentToken1602 =
  | FragmentSelf1602["__typename"]
  | FragmentSelf1602["typenameHint"] | FragmentToken1600 | FragmentToken1601;
