import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3798 } from "./fragment3798";
import type { FragmentToken3799 } from "./fragment3799";

export const FRAGMENT_3800 = gql(`
  fragment Fragment3800 on Member159 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_159
    memberCount_159
    memberMetric_159
  }
`);

type FragmentResult3800 = ResultOf<typeof FRAGMENT_3800>;
type FragmentSelf3800 = NonNullable<FragmentResult3800>;

export type FragmentToken3800 =
  | FragmentSelf3800["__typename"]
  | FragmentSelf3800["typenameHint"] | FragmentToken3798 | FragmentToken3799;
