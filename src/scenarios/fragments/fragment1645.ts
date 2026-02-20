import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1643 } from "./fragment1643";
import type { FragmentToken1644 } from "./fragment1644";

export const FRAGMENT_1645 = gql(`
  fragment Fragment1645 on Member244 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_244
    memberCount_244
    memberMetric_244
  }
`);

type FragmentResult1645 = ResultOf<typeof FRAGMENT_1645>;
type FragmentSelf1645 = NonNullable<FragmentResult1645>;

export type FragmentToken1645 =
  | FragmentSelf1645["__typename"]
  | FragmentSelf1645["typenameHint"] | FragmentToken1643 | FragmentToken1644;
