import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1267 } from "./fragment1267";
import type { FragmentToken1268 } from "./fragment1268";

export const FRAGMENT_1269 = gql(`
  fragment Fragment1269 on Member148 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_148
    memberCount_148
    memberMetric_148
  }
`);

type FragmentResult1269 = ResultOf<typeof FRAGMENT_1269>;
type FragmentSelf1269 = NonNullable<FragmentResult1269>;

export type FragmentToken1269 =
  | FragmentSelf1269["__typename"]
  | FragmentSelf1269["typenameHint"] | FragmentToken1267 | FragmentToken1268;
