import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3144 } from "./fragment3144";
import type { FragmentToken3145 } from "./fragment3145";

export const FRAGMENT_3146 = gql(`
  fragment Fragment3146 on Member65 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_65
    memberCount_65
    memberMetric_65
  }
`);

type FragmentResult3146 = ResultOf<typeof FRAGMENT_3146>;
type FragmentSelf3146 = NonNullable<FragmentResult3146>;

export type FragmentToken3146 =
  | FragmentSelf3146["__typename"]
  | FragmentSelf3146["typenameHint"] | FragmentToken3144 | FragmentToken3145;
