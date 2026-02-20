import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3719 } from "./fragment3719";
import type { FragmentToken3720 } from "./fragment3720";

export const FRAGMENT_3721 = gql(`
  fragment Fragment3721 on Member80 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_80
    memberCount_80
    memberMetric_80
  }
`);

type FragmentResult3721 = ResultOf<typeof FRAGMENT_3721>;
type FragmentSelf3721 = NonNullable<FragmentResult3721>;

export type FragmentToken3721 =
  | FragmentSelf3721["__typename"]
  | FragmentSelf3721["typenameHint"] | FragmentToken3719 | FragmentToken3720;
