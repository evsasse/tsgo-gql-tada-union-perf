import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3002 } from "./fragment3002";
import type { FragmentToken3003 } from "./fragment3003";

export const FRAGMENT_3004 = gql(`
  fragment Fragment3004 on Member203 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_203
    memberCount_203
    memberMetric_203
  }
`);

type FragmentResult3004 = ResultOf<typeof FRAGMENT_3004>;
type FragmentSelf3004 = NonNullable<FragmentResult3004>;

export type FragmentToken3004 =
  | FragmentSelf3004["__typename"]
  | FragmentSelf3004["typenameHint"] | FragmentToken3002 | FragmentToken3003;
