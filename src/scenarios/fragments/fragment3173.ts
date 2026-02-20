import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3171 } from "./fragment3171";
import type { FragmentToken3172 } from "./fragment3172";

export const FRAGMENT_3173 = gql(`
  fragment Fragment3173 on Member92 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_92
    memberCount_92
    memberMetric_92
  }
`);

type FragmentResult3173 = ResultOf<typeof FRAGMENT_3173>;
type FragmentSelf3173 = NonNullable<FragmentResult3173>;

export type FragmentToken3173 =
  | FragmentSelf3173["__typename"]
  | FragmentSelf3173["typenameHint"] | FragmentToken3171 | FragmentToken3172;
