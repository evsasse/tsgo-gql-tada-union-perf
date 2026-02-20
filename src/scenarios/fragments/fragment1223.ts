import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1221 } from "./fragment1221";
import type { FragmentToken1222 } from "./fragment1222";

export const FRAGMENT_1223 = gql(`
  fragment Fragment1223 on Member102 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_102
    memberCount_102
    memberMetric_102
  }
`);

type FragmentResult1223 = ResultOf<typeof FRAGMENT_1223>;
type FragmentSelf1223 = NonNullable<FragmentResult1223>;

export type FragmentToken1223 =
  | FragmentSelf1223["__typename"]
  | FragmentSelf1223["typenameHint"] | FragmentToken1221 | FragmentToken1222;
