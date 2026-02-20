import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3544 } from "./fragment3544";
import type { FragmentToken3545 } from "./fragment3545";

export const FRAGMENT_3546 = gql(`
  fragment Fragment3546 on Member185 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_185
    memberCount_185
    memberMetric_185
  }
`);

type FragmentResult3546 = ResultOf<typeof FRAGMENT_3546>;
type FragmentSelf3546 = NonNullable<FragmentResult3546>;

export type FragmentToken3546 =
  | FragmentSelf3546["__typename"]
  | FragmentSelf3546["typenameHint"] | FragmentToken3544 | FragmentToken3545;
