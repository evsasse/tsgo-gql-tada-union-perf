import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3014 } from "./fragment3014";
import type { FragmentToken3015 } from "./fragment3015";

export const FRAGMENT_3016 = gql(`
  fragment Fragment3016 on Member215 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_215
    memberCount_215
    memberMetric_215
  }
`);

type FragmentResult3016 = ResultOf<typeof FRAGMENT_3016>;
type FragmentSelf3016 = NonNullable<FragmentResult3016>;

export type FragmentToken3016 =
  | FragmentSelf3016["__typename"]
  | FragmentSelf3016["typenameHint"] | FragmentToken3014 | FragmentToken3015;
