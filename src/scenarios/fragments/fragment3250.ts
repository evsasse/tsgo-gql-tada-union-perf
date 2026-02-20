import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3248 } from "./fragment3248";
import type { FragmentToken3249 } from "./fragment3249";

export const FRAGMENT_3250 = gql(`
  fragment Fragment3250 on Member169 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_169
    memberCount_169
    memberMetric_169
  }
`);

type FragmentResult3250 = ResultOf<typeof FRAGMENT_3250>;
type FragmentSelf3250 = NonNullable<FragmentResult3250>;

export type FragmentToken3250 =
  | FragmentSelf3250["__typename"]
  | FragmentSelf3250["typenameHint"] | FragmentToken3248 | FragmentToken3249;
