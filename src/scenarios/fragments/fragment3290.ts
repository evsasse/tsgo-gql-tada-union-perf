import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3288 } from "./fragment3288";
import type { FragmentToken3289 } from "./fragment3289";

export const FRAGMENT_3290 = gql(`
  fragment Fragment3290 on Member209 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_209
    memberCount_209
    memberMetric_209
  }
`);

type FragmentResult3290 = ResultOf<typeof FRAGMENT_3290>;
type FragmentSelf3290 = NonNullable<FragmentResult3290>;

export type FragmentToken3290 =
  | FragmentSelf3290["__typename"]
  | FragmentSelf3290["typenameHint"] | FragmentToken3288 | FragmentToken3289;
