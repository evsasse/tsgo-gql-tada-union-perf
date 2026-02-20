import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3235 } from "./fragment3235";
import type { FragmentToken3236 } from "./fragment3236";

export const FRAGMENT_3237 = gql(`
  fragment Fragment3237 on Member156 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_156
    memberCount_156
    memberMetric_156
  }
`);

type FragmentResult3237 = ResultOf<typeof FRAGMENT_3237>;
type FragmentSelf3237 = NonNullable<FragmentResult3237>;

export type FragmentToken3237 =
  | FragmentSelf3237["__typename"]
  | FragmentSelf3237["typenameHint"] | FragmentToken3235 | FragmentToken3236;
