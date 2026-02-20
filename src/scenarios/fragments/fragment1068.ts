import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1066 } from "./fragment1066";
import type { FragmentToken1067 } from "./fragment1067";

export const FRAGMENT_1068 = gql(`
  fragment Fragment1068 on Member227 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_227
    memberCount_227
    memberMetric_227
  }
`);

type FragmentResult1068 = ResultOf<typeof FRAGMENT_1068>;
type FragmentSelf1068 = NonNullable<FragmentResult1068>;

export type FragmentToken1068 =
  | FragmentSelf1068["__typename"]
  | FragmentSelf1068["typenameHint"] | FragmentToken1066 | FragmentToken1067;
