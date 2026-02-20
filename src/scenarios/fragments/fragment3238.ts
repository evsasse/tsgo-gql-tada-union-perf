import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3236 } from "./fragment3236";
import type { FragmentToken3237 } from "./fragment3237";

export const FRAGMENT_3238 = gql(`
  fragment Fragment3238 on Member157 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_157
    memberCount_157
    memberMetric_157
  }
`);

type FragmentResult3238 = ResultOf<typeof FRAGMENT_3238>;
type FragmentSelf3238 = NonNullable<FragmentResult3238>;

export type FragmentToken3238 =
  | FragmentSelf3238["__typename"]
  | FragmentSelf3238["typenameHint"] | FragmentToken3236 | FragmentToken3237;
