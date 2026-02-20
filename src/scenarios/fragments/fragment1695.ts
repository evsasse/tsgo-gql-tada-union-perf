import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1693 } from "./fragment1693";
import type { FragmentToken1694 } from "./fragment1694";

export const FRAGMENT_1695 = gql(`
  fragment Fragment1695 on Member14 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_14
    memberCount_14
    memberMetric_14
  }
`);

type FragmentResult1695 = ResultOf<typeof FRAGMENT_1695>;
type FragmentSelf1695 = NonNullable<FragmentResult1695>;

export type FragmentToken1695 =
  | FragmentSelf1695["__typename"]
  | FragmentSelf1695["typenameHint"] | FragmentToken1693 | FragmentToken1694;
