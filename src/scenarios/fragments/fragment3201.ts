import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3199 } from "./fragment3199";
import type { FragmentToken3200 } from "./fragment3200";

export const FRAGMENT_3201 = gql(`
  fragment Fragment3201 on Member120 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_120
    memberCount_120
    memberMetric_120
  }
`);

type FragmentResult3201 = ResultOf<typeof FRAGMENT_3201>;
type FragmentSelf3201 = NonNullable<FragmentResult3201>;

export type FragmentToken3201 =
  | FragmentSelf3201["__typename"]
  | FragmentSelf3201["typenameHint"] | FragmentToken3199 | FragmentToken3200;
