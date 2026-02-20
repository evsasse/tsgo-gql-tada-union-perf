import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3215 } from "./fragment3215";
import type { FragmentToken3216 } from "./fragment3216";

export const FRAGMENT_3217 = gql(`
  fragment Fragment3217 on Member136 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_136
    memberCount_136
    memberMetric_136
  }
`);

type FragmentResult3217 = ResultOf<typeof FRAGMENT_3217>;
type FragmentSelf3217 = NonNullable<FragmentResult3217>;

export type FragmentToken3217 =
  | FragmentSelf3217["__typename"]
  | FragmentSelf3217["typenameHint"] | FragmentToken3215 | FragmentToken3216;
