import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3392 } from "./fragment3392";
import type { FragmentToken3393 } from "./fragment3393";

export const FRAGMENT_3394 = gql(`
  fragment Fragment3394 on Member33 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_33
    memberCount_33
    memberMetric_33
  }
`);

type FragmentResult3394 = ResultOf<typeof FRAGMENT_3394>;
type FragmentSelf3394 = NonNullable<FragmentResult3394>;

export type FragmentToken3394 =
  | FragmentSelf3394["__typename"]
  | FragmentSelf3394["typenameHint"] | FragmentToken3392 | FragmentToken3393;
