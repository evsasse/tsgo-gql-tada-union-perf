import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3400 } from "./fragment3400";
import type { FragmentToken3401 } from "./fragment3401";

export const FRAGMENT_3402 = gql(`
  fragment Fragment3402 on Member41 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_41
    memberCount_41
    memberMetric_41
  }
`);

type FragmentResult3402 = ResultOf<typeof FRAGMENT_3402>;
type FragmentSelf3402 = NonNullable<FragmentResult3402>;

export type FragmentToken3402 =
  | FragmentSelf3402["__typename"]
  | FragmentSelf3402["typenameHint"] | FragmentToken3400 | FragmentToken3401;
