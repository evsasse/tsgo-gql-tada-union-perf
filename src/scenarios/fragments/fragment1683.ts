import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1681 } from "./fragment1681";
import type { FragmentToken1682 } from "./fragment1682";

export const FRAGMENT_1683 = gql(`
  fragment Fragment1683 on Member02 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_02
    memberCount_02
    memberMetric_02
  }
`);

type FragmentResult1683 = ResultOf<typeof FRAGMENT_1683>;
type FragmentSelf1683 = NonNullable<FragmentResult1683>;

export type FragmentToken1683 =
  | FragmentSelf1683["__typename"]
  | FragmentSelf1683["typenameHint"] | FragmentToken1681 | FragmentToken1682;
