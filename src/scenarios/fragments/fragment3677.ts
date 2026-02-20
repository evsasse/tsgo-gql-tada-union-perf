import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3675 } from "./fragment3675";
import type { FragmentToken3676 } from "./fragment3676";

export const FRAGMENT_3677 = gql(`
  fragment Fragment3677 on Member36 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_36
    memberCount_36
    memberMetric_36
  }
`);

type FragmentResult3677 = ResultOf<typeof FRAGMENT_3677>;
type FragmentSelf3677 = NonNullable<FragmentResult3677>;

export type FragmentToken3677 =
  | FragmentSelf3677["__typename"]
  | FragmentSelf3677["typenameHint"] | FragmentToken3675 | FragmentToken3676;
