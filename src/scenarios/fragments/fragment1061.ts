import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1059 } from "./fragment1059";
import type { FragmentToken1060 } from "./fragment1060";

export const FRAGMENT_1061 = gql(`
  fragment Fragment1061 on Member220 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_220
    memberCount_220
    memberMetric_220
  }
`);

type FragmentResult1061 = ResultOf<typeof FRAGMENT_1061>;
type FragmentSelf1061 = NonNullable<FragmentResult1061>;

export type FragmentToken1061 =
  | FragmentSelf1061["__typename"]
  | FragmentSelf1061["typenameHint"] | FragmentToken1059 | FragmentToken1060;
