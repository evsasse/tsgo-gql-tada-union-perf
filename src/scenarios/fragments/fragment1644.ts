import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1642 } from "./fragment1642";
import type { FragmentToken1643 } from "./fragment1643";

export const FRAGMENT_1644 = gql(`
  fragment Fragment1644 on Member243 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_243
    memberCount_243
    memberMetric_243
  }
`);

type FragmentResult1644 = ResultOf<typeof FRAGMENT_1644>;
type FragmentSelf1644 = NonNullable<FragmentResult1644>;

export type FragmentToken1644 =
  | FragmentSelf1644["__typename"]
  | FragmentSelf1644["typenameHint"] | FragmentToken1642 | FragmentToken1643;
