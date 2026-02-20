import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3699 } from "./fragment3699";
import type { FragmentToken3700 } from "./fragment3700";

export const FRAGMENT_3701 = gql(`
  fragment Fragment3701 on Member60 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_60
    memberCount_60
    memberMetric_60
  }
`);

type FragmentResult3701 = ResultOf<typeof FRAGMENT_3701>;
type FragmentSelf3701 = NonNullable<FragmentResult3701>;

export type FragmentToken3701 =
  | FragmentSelf3701["__typename"]
  | FragmentSelf3701["typenameHint"] | FragmentToken3699 | FragmentToken3700;
