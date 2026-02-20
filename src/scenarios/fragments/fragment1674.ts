import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1672 } from "./fragment1672";
import type { FragmentToken1673 } from "./fragment1673";

export const FRAGMENT_1674 = gql(`
  fragment Fragment1674 on Member273 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_273
    memberCount_273
    memberMetric_273
  }
`);

type FragmentResult1674 = ResultOf<typeof FRAGMENT_1674>;
type FragmentSelf1674 = NonNullable<FragmentResult1674>;

export type FragmentToken1674 =
  | FragmentSelf1674["__typename"]
  | FragmentSelf1674["typenameHint"] | FragmentToken1672 | FragmentToken1673;
