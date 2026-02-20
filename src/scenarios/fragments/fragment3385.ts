import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3383 } from "./fragment3383";
import type { FragmentToken3384 } from "./fragment3384";

export const FRAGMENT_3385 = gql(`
  fragment Fragment3385 on Member24 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_24
    memberCount_24
    memberMetric_24
  }
`);

type FragmentResult3385 = ResultOf<typeof FRAGMENT_3385>;
type FragmentSelf3385 = NonNullable<FragmentResult3385>;

export type FragmentToken3385 =
  | FragmentSelf3385["__typename"]
  | FragmentSelf3385["typenameHint"] | FragmentToken3383 | FragmentToken3384;
