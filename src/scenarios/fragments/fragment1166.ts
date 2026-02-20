import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1164 } from "./fragment1164";
import type { FragmentToken1165 } from "./fragment1165";

export const FRAGMENT_1166 = gql(`
  fragment Fragment1166 on Member45 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_45
    memberCount_45
    memberMetric_45
  }
`);

type FragmentResult1166 = ResultOf<typeof FRAGMENT_1166>;
type FragmentSelf1166 = NonNullable<FragmentResult1166>;

export type FragmentToken1166 =
  | FragmentSelf1166["__typename"]
  | FragmentSelf1166["typenameHint"] | FragmentToken1164 | FragmentToken1165;
