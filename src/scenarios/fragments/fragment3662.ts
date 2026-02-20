import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3660 } from "./fragment3660";
import type { FragmentToken3661 } from "./fragment3661";

export const FRAGMENT_3662 = gql(`
  fragment Fragment3662 on Member21 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_21
    memberCount_21
    memberMetric_21
  }
`);

type FragmentResult3662 = ResultOf<typeof FRAGMENT_3662>;
type FragmentSelf3662 = NonNullable<FragmentResult3662>;

export type FragmentToken3662 =
  | FragmentSelf3662["__typename"]
  | FragmentSelf3662["typenameHint"] | FragmentToken3660 | FragmentToken3661;
