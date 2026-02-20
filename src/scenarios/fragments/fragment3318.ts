import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3316 } from "./fragment3316";
import type { FragmentToken3317 } from "./fragment3317";

export const FRAGMENT_3318 = gql(`
  fragment Fragment3318 on Member237 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_237
    memberCount_237
    memberMetric_237
  }
`);

type FragmentResult3318 = ResultOf<typeof FRAGMENT_3318>;
type FragmentSelf3318 = NonNullable<FragmentResult3318>;

export type FragmentToken3318 =
  | FragmentSelf3318["__typename"]
  | FragmentSelf3318["typenameHint"] | FragmentToken3316 | FragmentToken3317;
