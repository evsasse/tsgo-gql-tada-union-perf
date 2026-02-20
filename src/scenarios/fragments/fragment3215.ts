import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3213 } from "./fragment3213";
import type { FragmentToken3214 } from "./fragment3214";

export const FRAGMENT_3215 = gql(`
  fragment Fragment3215 on Member134 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_134
    memberCount_134
    memberMetric_134
  }
`);

type FragmentResult3215 = ResultOf<typeof FRAGMENT_3215>;
type FragmentSelf3215 = NonNullable<FragmentResult3215>;

export type FragmentToken3215 =
  | FragmentSelf3215["__typename"]
  | FragmentSelf3215["typenameHint"] | FragmentToken3213 | FragmentToken3214;
