import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1035 } from "./fragment1035";
import type { FragmentToken1036 } from "./fragment1036";

export const FRAGMENT_1037 = gql(`
  fragment Fragment1037 on Member196 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_196
    memberCount_196
    memberMetric_196
  }
`);

type FragmentResult1037 = ResultOf<typeof FRAGMENT_1037>;
type FragmentSelf1037 = NonNullable<FragmentResult1037>;

export type FragmentToken1037 =
  | FragmentSelf1037["__typename"]
  | FragmentSelf1037["typenameHint"] | FragmentToken1035 | FragmentToken1036;
