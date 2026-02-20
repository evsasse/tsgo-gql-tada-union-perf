import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3890 } from "./fragment3890";
import type { FragmentToken3891 } from "./fragment3891";

export const FRAGMENT_3892 = gql(`
  fragment Fragment3892 on Member251 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_251
    memberCount_251
    memberMetric_251
  }
`);

type FragmentResult3892 = ResultOf<typeof FRAGMENT_3892>;
type FragmentSelf3892 = NonNullable<FragmentResult3892>;

export type FragmentToken3892 =
  | FragmentSelf3892["__typename"]
  | FragmentSelf3892["typenameHint"] | FragmentToken3890 | FragmentToken3891;
