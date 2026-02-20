import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3313 } from "./fragment3313";
import type { FragmentToken3314 } from "./fragment3314";

export const FRAGMENT_3315 = gql(`
  fragment Fragment3315 on Member234 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_234
    memberCount_234
    memberMetric_234
  }
`);

type FragmentResult3315 = ResultOf<typeof FRAGMENT_3315>;
type FragmentSelf3315 = NonNullable<FragmentResult3315>;

export type FragmentToken3315 =
  | FragmentSelf3315["__typename"]
  | FragmentSelf3315["typenameHint"] | FragmentToken3313 | FragmentToken3314;
