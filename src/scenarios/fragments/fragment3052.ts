import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3050 } from "./fragment3050";
import type { FragmentToken3051 } from "./fragment3051";

export const FRAGMENT_3052 = gql(`
  fragment Fragment3052 on Member251 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_251
    memberCount_251
    memberMetric_251
  }
`);

type FragmentResult3052 = ResultOf<typeof FRAGMENT_3052>;
type FragmentSelf3052 = NonNullable<FragmentResult3052>;

export type FragmentToken3052 =
  | FragmentSelf3052["__typename"]
  | FragmentSelf3052["typenameHint"] | FragmentToken3050 | FragmentToken3051;
