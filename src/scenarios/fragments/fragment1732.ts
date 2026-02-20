import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1730 } from "./fragment1730";
import type { FragmentToken1731 } from "./fragment1731";

export const FRAGMENT_1732 = gql(`
  fragment Fragment1732 on Member51 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_51
    memberCount_51
    memberMetric_51
  }
`);

type FragmentResult1732 = ResultOf<typeof FRAGMENT_1732>;
type FragmentSelf1732 = NonNullable<FragmentResult1732>;

export type FragmentToken1732 =
  | FragmentSelf1732["__typename"]
  | FragmentSelf1732["typenameHint"] | FragmentToken1730 | FragmentToken1731;
