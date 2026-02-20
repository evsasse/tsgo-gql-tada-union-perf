import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1280 } from "./fragment1280";
import type { FragmentToken1281 } from "./fragment1281";

export const FRAGMENT_1282 = gql(`
  fragment Fragment1282 on Member161 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_161
    memberCount_161
    memberMetric_161
  }
`);

type FragmentResult1282 = ResultOf<typeof FRAGMENT_1282>;
type FragmentSelf1282 = NonNullable<FragmentResult1282>;

export type FragmentToken1282 =
  | FragmentSelf1282["__typename"]
  | FragmentSelf1282["typenameHint"] | FragmentToken1280 | FragmentToken1281;
