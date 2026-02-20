import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1666 } from "./fragment1666";
import type { FragmentToken1667 } from "./fragment1667";

export const FRAGMENT_1668 = gql(`
  fragment Fragment1668 on Member267 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_267
    memberCount_267
    memberMetric_267
  }
`);

type FragmentResult1668 = ResultOf<typeof FRAGMENT_1668>;
type FragmentSelf1668 = NonNullable<FragmentResult1668>;

export type FragmentToken1668 =
  | FragmentSelf1668["__typename"]
  | FragmentSelf1668["typenameHint"] | FragmentToken1666 | FragmentToken1667;
