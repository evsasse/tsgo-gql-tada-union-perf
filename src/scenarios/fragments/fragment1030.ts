import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1028 } from "./fragment1028";
import type { FragmentToken1029 } from "./fragment1029";

export const FRAGMENT_1030 = gql(`
  fragment Fragment1030 on Member189 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_189
    memberCount_189
    memberMetric_189
  }
`);

type FragmentResult1030 = ResultOf<typeof FRAGMENT_1030>;
type FragmentSelf1030 = NonNullable<FragmentResult1030>;

export type FragmentToken1030 =
  | FragmentSelf1030["__typename"]
  | FragmentSelf1030["typenameHint"] | FragmentToken1028 | FragmentToken1029;
