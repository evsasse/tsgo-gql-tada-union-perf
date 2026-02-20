import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1060 } from "./fragment1060";
import type { FragmentToken1061 } from "./fragment1061";

export const FRAGMENT_1062 = gql(`
  fragment Fragment1062 on Member221 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_221
    memberCount_221
    memberMetric_221
  }
`);

type FragmentResult1062 = ResultOf<typeof FRAGMENT_1062>;
type FragmentSelf1062 = NonNullable<FragmentResult1062>;

export type FragmentToken1062 =
  | FragmentSelf1062["__typename"]
  | FragmentSelf1062["typenameHint"] | FragmentToken1060 | FragmentToken1061;
