import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3185 } from "./fragment3185";
import type { FragmentToken3186 } from "./fragment3186";

export const FRAGMENT_3187 = gql(`
  fragment Fragment3187 on Member106 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_106
    memberCount_106
    memberMetric_106
  }
`);

type FragmentResult3187 = ResultOf<typeof FRAGMENT_3187>;
type FragmentSelf3187 = NonNullable<FragmentResult3187>;

export type FragmentToken3187 =
  | FragmentSelf3187["__typename"]
  | FragmentSelf3187["typenameHint"] | FragmentToken3185 | FragmentToken3186;
