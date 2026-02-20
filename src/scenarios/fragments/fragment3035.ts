import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3033 } from "./fragment3033";
import type { FragmentToken3034 } from "./fragment3034";

export const FRAGMENT_3035 = gql(`
  fragment Fragment3035 on Member234 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_234
    memberCount_234
    memberMetric_234
  }
`);

type FragmentResult3035 = ResultOf<typeof FRAGMENT_3035>;
type FragmentSelf3035 = NonNullable<FragmentResult3035>;

export type FragmentToken3035 =
  | FragmentSelf3035["__typename"]
  | FragmentSelf3035["typenameHint"] | FragmentToken3033 | FragmentToken3034;
