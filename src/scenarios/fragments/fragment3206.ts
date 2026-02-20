import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3204 } from "./fragment3204";
import type { FragmentToken3205 } from "./fragment3205";

export const FRAGMENT_3206 = gql(`
  fragment Fragment3206 on Member125 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_125
    memberCount_125
    memberMetric_125
  }
`);

type FragmentResult3206 = ResultOf<typeof FRAGMENT_3206>;
type FragmentSelf3206 = NonNullable<FragmentResult3206>;

export type FragmentToken3206 =
  | FragmentSelf3206["__typename"]
  | FragmentSelf3206["typenameHint"] | FragmentToken3204 | FragmentToken3205;
