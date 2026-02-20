import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1161 } from "./fragment1161";
import type { FragmentToken1162 } from "./fragment1162";

export const FRAGMENT_1163 = gql(`
  fragment Fragment1163 on Member42 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_42
    memberCount_42
    memberMetric_42
  }
`);

type FragmentResult1163 = ResultOf<typeof FRAGMENT_1163>;
type FragmentSelf1163 = NonNullable<FragmentResult1163>;

export type FragmentToken1163 =
  | FragmentSelf1163["__typename"]
  | FragmentSelf1163["typenameHint"] | FragmentToken1161 | FragmentToken1162;
