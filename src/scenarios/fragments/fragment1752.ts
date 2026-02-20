import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1750 } from "./fragment1750";
import type { FragmentToken1751 } from "./fragment1751";

export const FRAGMENT_1752 = gql(`
  fragment Fragment1752 on Member71 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_71
    memberCount_71
    memberMetric_71
  }
`);

type FragmentResult1752 = ResultOf<typeof FRAGMENT_1752>;
type FragmentSelf1752 = NonNullable<FragmentResult1752>;

export type FragmentToken1752 =
  | FragmentSelf1752["__typename"]
  | FragmentSelf1752["typenameHint"] | FragmentToken1750 | FragmentToken1751;
