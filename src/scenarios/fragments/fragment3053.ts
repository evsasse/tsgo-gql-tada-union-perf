import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3051 } from "./fragment3051";
import type { FragmentToken3052 } from "./fragment3052";

export const FRAGMENT_3053 = gql(`
  fragment Fragment3053 on Member252 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_252
    memberCount_252
    memberMetric_252
  }
`);

type FragmentResult3053 = ResultOf<typeof FRAGMENT_3053>;
type FragmentSelf3053 = NonNullable<FragmentResult3053>;

export type FragmentToken3053 =
  | FragmentSelf3053["__typename"]
  | FragmentSelf3053["typenameHint"] | FragmentToken3051 | FragmentToken3052;
