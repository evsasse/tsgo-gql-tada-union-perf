import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3273 } from "./fragment3273";
import type { FragmentToken3274 } from "./fragment3274";

export const FRAGMENT_3275 = gql(`
  fragment Fragment3275 on Member194 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_194
    memberCount_194
    memberMetric_194
  }
`);

type FragmentResult3275 = ResultOf<typeof FRAGMENT_3275>;
type FragmentSelf3275 = NonNullable<FragmentResult3275>;

export type FragmentToken3275 =
  | FragmentSelf3275["__typename"]
  | FragmentSelf3275["typenameHint"] | FragmentToken3273 | FragmentToken3274;
