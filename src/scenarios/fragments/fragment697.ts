import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken695 } from "./fragment695";
import type { FragmentToken696 } from "./fragment696";

export const FRAGMENT_697 = gql(`
  fragment Fragment697 on Member136 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_136
    memberCount_136
    memberMetric_136
  }
`);

type FragmentResult697 = ResultOf<typeof FRAGMENT_697>;
type FragmentSelf697 = NonNullable<FragmentResult697>;

export type FragmentToken697 =
  | FragmentSelf697["__typename"]
  | FragmentSelf697["typenameHint"] | FragmentToken695 | FragmentToken696;
