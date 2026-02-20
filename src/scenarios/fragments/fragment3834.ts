import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3832 } from "./fragment3832";
import type { FragmentToken3833 } from "./fragment3833";

export const FRAGMENT_3834 = gql(`
  fragment Fragment3834 on Member193 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_193
    memberCount_193
    memberMetric_193
  }
`);

type FragmentResult3834 = ResultOf<typeof FRAGMENT_3834>;
type FragmentSelf3834 = NonNullable<FragmentResult3834>;

export type FragmentToken3834 =
  | FragmentSelf3834["__typename"]
  | FragmentSelf3834["typenameHint"] | FragmentToken3832 | FragmentToken3833;
