import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1095 } from "./fragment1095";
import type { FragmentToken1096 } from "./fragment1096";

export const FRAGMENT_1097 = gql(`
  fragment Fragment1097 on Member256 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_256
    memberCount_256
    memberMetric_256
  }
`);

type FragmentResult1097 = ResultOf<typeof FRAGMENT_1097>;
type FragmentSelf1097 = NonNullable<FragmentResult1097>;

export type FragmentToken1097 =
  | FragmentSelf1097["__typename"]
  | FragmentSelf1097["typenameHint"] | FragmentToken1095 | FragmentToken1096;
