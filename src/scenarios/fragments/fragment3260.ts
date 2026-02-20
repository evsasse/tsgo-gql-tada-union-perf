import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3258 } from "./fragment3258";
import type { FragmentToken3259 } from "./fragment3259";

export const FRAGMENT_3260 = gql(`
  fragment Fragment3260 on Member179 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_179
    memberCount_179
    memberMetric_179
  }
`);

type FragmentResult3260 = ResultOf<typeof FRAGMENT_3260>;
type FragmentSelf3260 = NonNullable<FragmentResult3260>;

export type FragmentToken3260 =
  | FragmentSelf3260["__typename"]
  | FragmentSelf3260["typenameHint"] | FragmentToken3258 | FragmentToken3259;
