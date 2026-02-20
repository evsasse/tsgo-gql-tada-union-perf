import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken987 } from "./fragment987";
import type { FragmentToken988 } from "./fragment988";

export const FRAGMENT_989 = gql(`
  fragment Fragment989 on Member148 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_148
    memberCount_148
    memberMetric_148
  }
`);

type FragmentResult989 = ResultOf<typeof FRAGMENT_989>;
type FragmentSelf989 = NonNullable<FragmentResult989>;

export type FragmentToken989 =
  | FragmentSelf989["__typename"]
  | FragmentSelf989["typenameHint"] | FragmentToken987 | FragmentToken988;
