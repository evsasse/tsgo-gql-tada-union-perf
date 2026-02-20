import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1550 } from "./fragment1550";
import type { FragmentToken1551 } from "./fragment1551";

export const FRAGMENT_1552 = gql(`
  fragment Fragment1552 on Member151 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_151
    memberCount_151
    memberMetric_151
  }
`);

type FragmentResult1552 = ResultOf<typeof FRAGMENT_1552>;
type FragmentSelf1552 = NonNullable<FragmentResult1552>;

export type FragmentToken1552 =
  | FragmentSelf1552["__typename"]
  | FragmentSelf1552["typenameHint"] | FragmentToken1550 | FragmentToken1551;
