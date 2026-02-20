import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1041 } from "./fragment1041";
import type { FragmentToken1042 } from "./fragment1042";

export const FRAGMENT_1043 = gql(`
  fragment Fragment1043 on Member202 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_202
    memberCount_202
    memberMetric_202
  }
`);

type FragmentResult1043 = ResultOf<typeof FRAGMENT_1043>;
type FragmentSelf1043 = NonNullable<FragmentResult1043>;

export type FragmentToken1043 =
  | FragmentSelf1043["__typename"]
  | FragmentSelf1043["typenameHint"] | FragmentToken1041 | FragmentToken1042;
