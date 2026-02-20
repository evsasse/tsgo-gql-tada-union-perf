import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1216 } from "./fragment1216";
import type { FragmentToken1217 } from "./fragment1217";

export const FRAGMENT_1218 = gql(`
  fragment Fragment1218 on Member97 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_97
    memberCount_97
    memberMetric_97
  }
`);

type FragmentResult1218 = ResultOf<typeof FRAGMENT_1218>;
type FragmentSelf1218 = NonNullable<FragmentResult1218>;

export type FragmentToken1218 =
  | FragmentSelf1218["__typename"]
  | FragmentSelf1218["typenameHint"] | FragmentToken1216 | FragmentToken1217;
