import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3200 } from "./fragment3200";
import type { FragmentToken3201 } from "./fragment3201";

export const FRAGMENT_3202 = gql(`
  fragment Fragment3202 on Member121 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_121
    memberCount_121
    memberMetric_121
  }
`);

type FragmentResult3202 = ResultOf<typeof FRAGMENT_3202>;
type FragmentSelf3202 = NonNullable<FragmentResult3202>;

export type FragmentToken3202 =
  | FragmentSelf3202["__typename"]
  | FragmentSelf3202["typenameHint"] | FragmentToken3200 | FragmentToken3201;
