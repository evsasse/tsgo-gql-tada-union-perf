import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3015 } from "./fragment3015";
import type { FragmentToken3016 } from "./fragment3016";

export const FRAGMENT_3017 = gql(`
  fragment Fragment3017 on Member216 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_216
    memberCount_216
    memberMetric_216
  }
`);

type FragmentResult3017 = ResultOf<typeof FRAGMENT_3017>;
type FragmentSelf3017 = NonNullable<FragmentResult3017>;

export type FragmentToken3017 =
  | FragmentSelf3017["__typename"]
  | FragmentSelf3017["typenameHint"] | FragmentToken3015 | FragmentToken3016;
