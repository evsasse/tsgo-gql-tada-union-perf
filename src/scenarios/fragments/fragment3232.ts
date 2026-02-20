import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3230 } from "./fragment3230";
import type { FragmentToken3231 } from "./fragment3231";

export const FRAGMENT_3232 = gql(`
  fragment Fragment3232 on Member151 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_151
    memberCount_151
    memberMetric_151
  }
`);

type FragmentResult3232 = ResultOf<typeof FRAGMENT_3232>;
type FragmentSelf3232 = NonNullable<FragmentResult3232>;

export type FragmentToken3232 =
  | FragmentSelf3232["__typename"]
  | FragmentSelf3232["typenameHint"] | FragmentToken3230 | FragmentToken3231;
