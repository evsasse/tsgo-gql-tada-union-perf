import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3063 } from "./fragment3063";
import type { FragmentToken3064 } from "./fragment3064";

export const FRAGMENT_3065 = gql(`
  fragment Fragment3065 on Member264 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_264
    memberCount_264
    memberMetric_264
  }
`);

type FragmentResult3065 = ResultOf<typeof FRAGMENT_3065>;
type FragmentSelf3065 = NonNullable<FragmentResult3065>;

export type FragmentToken3065 =
  | FragmentSelf3065["__typename"]
  | FragmentSelf3065["typenameHint"] | FragmentToken3063 | FragmentToken3064;
