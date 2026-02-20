import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3605 } from "./fragment3605";
import type { FragmentToken3606 } from "./fragment3606";

export const FRAGMENT_3607 = gql(`
  fragment Fragment3607 on Member246 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_246
    memberCount_246
    memberMetric_246
  }
`);

type FragmentResult3607 = ResultOf<typeof FRAGMENT_3607>;
type FragmentSelf3607 = NonNullable<FragmentResult3607>;

export type FragmentToken3607 =
  | FragmentSelf3607["__typename"]
  | FragmentSelf3607["typenameHint"] | FragmentToken3605 | FragmentToken3606;
