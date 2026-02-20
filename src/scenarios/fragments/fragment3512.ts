import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3510 } from "./fragment3510";
import type { FragmentToken3511 } from "./fragment3511";

export const FRAGMENT_3512 = gql(`
  fragment Fragment3512 on Member151 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_151
    memberCount_151
    memberMetric_151
  }
`);

type FragmentResult3512 = ResultOf<typeof FRAGMENT_3512>;
type FragmentSelf3512 = NonNullable<FragmentResult3512>;

export type FragmentToken3512 =
  | FragmentSelf3512["__typename"]
  | FragmentSelf3512["typenameHint"] | FragmentToken3510 | FragmentToken3511;
