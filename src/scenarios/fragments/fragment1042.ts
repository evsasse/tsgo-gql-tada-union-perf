import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1040 } from "./fragment1040";
import type { FragmentToken1041 } from "./fragment1041";

export const FRAGMENT_1042 = gql(`
  fragment Fragment1042 on Member201 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_201
    memberCount_201
    memberMetric_201
  }
`);

type FragmentResult1042 = ResultOf<typeof FRAGMENT_1042>;
type FragmentSelf1042 = NonNullable<FragmentResult1042>;

export type FragmentToken1042 =
  | FragmentSelf1042["__typename"]
  | FragmentSelf1042["typenameHint"] | FragmentToken1040 | FragmentToken1041;
