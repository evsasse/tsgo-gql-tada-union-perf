import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1275 } from "./fragment1275";
import type { FragmentToken1276 } from "./fragment1276";

export const FRAGMENT_1277 = gql(`
  fragment Fragment1277 on Member156 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_156
    memberCount_156
    memberMetric_156
  }
`);

type FragmentResult1277 = ResultOf<typeof FRAGMENT_1277>;
type FragmentSelf1277 = NonNullable<FragmentResult1277>;

export type FragmentToken1277 =
  | FragmentSelf1277["__typename"]
  | FragmentSelf1277["typenameHint"] | FragmentToken1275 | FragmentToken1276;
