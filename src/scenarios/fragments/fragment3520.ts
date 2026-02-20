import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3518 } from "./fragment3518";
import type { FragmentToken3519 } from "./fragment3519";

export const FRAGMENT_3520 = gql(`
  fragment Fragment3520 on Member159 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_159
    memberCount_159
    memberMetric_159
  }
`);

type FragmentResult3520 = ResultOf<typeof FRAGMENT_3520>;
type FragmentSelf3520 = NonNullable<FragmentResult3520>;

export type FragmentToken3520 =
  | FragmentSelf3520["__typename"]
  | FragmentSelf3520["typenameHint"] | FragmentToken3518 | FragmentToken3519;
