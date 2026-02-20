import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3064 } from "./fragment3064";
import type { FragmentToken3065 } from "./fragment3065";

export const FRAGMENT_3066 = gql(`
  fragment Fragment3066 on Member265 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_265
    memberCount_265
    memberMetric_265
  }
`);

type FragmentResult3066 = ResultOf<typeof FRAGMENT_3066>;
type FragmentSelf3066 = NonNullable<FragmentResult3066>;

export type FragmentToken3066 =
  | FragmentSelf3066["__typename"]
  | FragmentSelf3066["typenameHint"] | FragmentToken3064 | FragmentToken3065;
