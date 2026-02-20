import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1150 } from "./fragment1150";
import type { FragmentToken1151 } from "./fragment1151";

export const FRAGMENT_1152 = gql(`
  fragment Fragment1152 on Member31 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_31
    memberCount_31
    memberMetric_31
  }
`);

type FragmentResult1152 = ResultOf<typeof FRAGMENT_1152>;
type FragmentSelf1152 = NonNullable<FragmentResult1152>;

export type FragmentToken1152 =
  | FragmentSelf1152["__typename"]
  | FragmentSelf1152["typenameHint"] | FragmentToken1150 | FragmentToken1151;
