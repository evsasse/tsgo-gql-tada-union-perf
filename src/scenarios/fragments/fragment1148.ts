import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1146 } from "./fragment1146";
import type { FragmentToken1147 } from "./fragment1147";

export const FRAGMENT_1148 = gql(`
  fragment Fragment1148 on Member27 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_27
    memberCount_27
    memberMetric_27
  }
`);

type FragmentResult1148 = ResultOf<typeof FRAGMENT_1148>;
type FragmentSelf1148 = NonNullable<FragmentResult1148>;

export type FragmentToken1148 =
  | FragmentSelf1148["__typename"]
  | FragmentSelf1148["typenameHint"] | FragmentToken1146 | FragmentToken1147;
