import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3566 } from "./fragment3566";
import type { FragmentToken3567 } from "./fragment3567";

export const FRAGMENT_3568 = gql(`
  fragment Fragment3568 on Member207 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_207
    memberCount_207
    memberMetric_207
  }
`);

type FragmentResult3568 = ResultOf<typeof FRAGMENT_3568>;
type FragmentSelf3568 = NonNullable<FragmentResult3568>;

export type FragmentToken3568 =
  | FragmentSelf3568["__typename"]
  | FragmentSelf3568["typenameHint"] | FragmentToken3566 | FragmentToken3567;
