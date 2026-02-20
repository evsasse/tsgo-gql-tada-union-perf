import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3546 } from "./fragment3546";
import type { FragmentToken3547 } from "./fragment3547";

export const FRAGMENT_3548 = gql(`
  fragment Fragment3548 on Member187 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_187
    memberCount_187
    memberMetric_187
  }
`);

type FragmentResult3548 = ResultOf<typeof FRAGMENT_3548>;
type FragmentSelf3548 = NonNullable<FragmentResult3548>;

export type FragmentToken3548 =
  | FragmentSelf3548["__typename"]
  | FragmentSelf3548["typenameHint"] | FragmentToken3546 | FragmentToken3547;
