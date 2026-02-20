import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3788 } from "./fragment3788";
import type { FragmentToken3789 } from "./fragment3789";

export const FRAGMENT_3790 = gql(`
  fragment Fragment3790 on Member149 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_149
    memberCount_149
    memberMetric_149
  }
`);

type FragmentResult3790 = ResultOf<typeof FRAGMENT_3790>;
type FragmentSelf3790 = NonNullable<FragmentResult3790>;

export type FragmentToken3790 =
  | FragmentSelf3790["__typename"]
  | FragmentSelf3790["typenameHint"] | FragmentToken3788 | FragmentToken3789;
