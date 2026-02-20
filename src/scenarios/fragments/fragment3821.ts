import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3819 } from "./fragment3819";
import type { FragmentToken3820 } from "./fragment3820";

export const FRAGMENT_3821 = gql(`
  fragment Fragment3821 on Member180 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_180
    memberCount_180
    memberMetric_180
  }
`);

type FragmentResult3821 = ResultOf<typeof FRAGMENT_3821>;
type FragmentSelf3821 = NonNullable<FragmentResult3821>;

export type FragmentToken3821 =
  | FragmentSelf3821["__typename"]
  | FragmentSelf3821["typenameHint"] | FragmentToken3819 | FragmentToken3820;
