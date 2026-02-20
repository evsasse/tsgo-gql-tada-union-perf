import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1278 } from "./fragment1278";
import type { FragmentToken1279 } from "./fragment1279";

export const FRAGMENT_1280 = gql(`
  fragment Fragment1280 on Member159 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_159
    memberCount_159
    memberMetric_159
  }
`);

type FragmentResult1280 = ResultOf<typeof FRAGMENT_1280>;
type FragmentSelf1280 = NonNullable<FragmentResult1280>;

export type FragmentToken1280 =
  | FragmentSelf1280["__typename"]
  | FragmentSelf1280["typenameHint"] | FragmentToken1278 | FragmentToken1279;
