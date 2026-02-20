import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3394 } from "./fragment3394";
import type { FragmentToken3395 } from "./fragment3395";

export const FRAGMENT_3396 = gql(`
  fragment Fragment3396 on Member35 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_35
    memberCount_35
    memberMetric_35
  }
`);

type FragmentResult3396 = ResultOf<typeof FRAGMENT_3396>;
type FragmentSelf3396 = NonNullable<FragmentResult3396>;

export type FragmentToken3396 =
  | FragmentSelf3396["__typename"]
  | FragmentSelf3396["typenameHint"] | FragmentToken3394 | FragmentToken3395;
