import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3751 } from "./fragment3751";
import type { FragmentToken3752 } from "./fragment3752";

export const FRAGMENT_3753 = gql(`
  fragment Fragment3753 on Member112 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_112
    memberCount_112
    memberMetric_112
  }
`);

type FragmentResult3753 = ResultOf<typeof FRAGMENT_3753>;
type FragmentSelf3753 = NonNullable<FragmentResult3753>;

export type FragmentToken3753 =
  | FragmentSelf3753["__typename"]
  | FragmentSelf3753["typenameHint"] | FragmentToken3751 | FragmentToken3752;
