import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3826 } from "./fragment3826";
import type { FragmentToken3827 } from "./fragment3827";

export const FRAGMENT_3828 = gql(`
  fragment Fragment3828 on Member187 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_187
    memberCount_187
    memberMetric_187
  }
`);

type FragmentResult3828 = ResultOf<typeof FRAGMENT_3828>;
type FragmentSelf3828 = NonNullable<FragmentResult3828>;

export type FragmentToken3828 =
  | FragmentSelf3828["__typename"]
  | FragmentSelf3828["typenameHint"] | FragmentToken3826 | FragmentToken3827;
