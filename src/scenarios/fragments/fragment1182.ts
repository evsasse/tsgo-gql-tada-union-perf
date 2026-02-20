import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1180 } from "./fragment1180";
import type { FragmentToken1181 } from "./fragment1181";

export const FRAGMENT_1182 = gql(`
  fragment Fragment1182 on Member61 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_61
    memberCount_61
    memberMetric_61
  }
`);

type FragmentResult1182 = ResultOf<typeof FRAGMENT_1182>;
type FragmentSelf1182 = NonNullable<FragmentResult1182>;

export type FragmentToken1182 =
  | FragmentSelf1182["__typename"]
  | FragmentSelf1182["typenameHint"] | FragmentToken1180 | FragmentToken1181;
