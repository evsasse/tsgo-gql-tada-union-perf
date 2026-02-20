import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1160 } from "./fragment1160";
import type { FragmentToken1161 } from "./fragment1161";

export const FRAGMENT_1162 = gql(`
  fragment Fragment1162 on Member41 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_41
    memberCount_41
    memberMetric_41
  }
`);

type FragmentResult1162 = ResultOf<typeof FRAGMENT_1162>;
type FragmentSelf1162 = NonNullable<FragmentResult1162>;

export type FragmentToken1162 =
  | FragmentSelf1162["__typename"]
  | FragmentSelf1162["typenameHint"] | FragmentToken1160 | FragmentToken1161;
