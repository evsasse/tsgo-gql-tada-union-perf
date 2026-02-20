import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3293 } from "./fragment3293";
import type { FragmentToken3294 } from "./fragment3294";

export const FRAGMENT_3295 = gql(`
  fragment Fragment3295 on Member214 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_214
    memberCount_214
    memberMetric_214
  }
`);

type FragmentResult3295 = ResultOf<typeof FRAGMENT_3295>;
type FragmentSelf3295 = NonNullable<FragmentResult3295>;

export type FragmentToken3295 =
  | FragmentSelf3295["__typename"]
  | FragmentSelf3295["typenameHint"] | FragmentToken3293 | FragmentToken3294;
