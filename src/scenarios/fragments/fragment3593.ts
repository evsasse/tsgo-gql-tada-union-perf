import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3591 } from "./fragment3591";
import type { FragmentToken3592 } from "./fragment3592";

export const FRAGMENT_3593 = gql(`
  fragment Fragment3593 on Member232 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_232
    memberCount_232
    memberMetric_232
  }
`);

type FragmentResult3593 = ResultOf<typeof FRAGMENT_3593>;
type FragmentSelf3593 = NonNullable<FragmentResult3593>;

export type FragmentToken3593 =
  | FragmentSelf3593["__typename"]
  | FragmentSelf3593["typenameHint"] | FragmentToken3591 | FragmentToken3592;
