import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3201 } from "./fragment3201";
import type { FragmentToken3202 } from "./fragment3202";

export const FRAGMENT_3203 = gql(`
  fragment Fragment3203 on Member122 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_122
    memberCount_122
    memberMetric_122
  }
`);

type FragmentResult3203 = ResultOf<typeof FRAGMENT_3203>;
type FragmentSelf3203 = NonNullable<FragmentResult3203>;

export type FragmentToken3203 =
  | FragmentSelf3203["__typename"]
  | FragmentSelf3203["typenameHint"] | FragmentToken3201 | FragmentToken3202;
