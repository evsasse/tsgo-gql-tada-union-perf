import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1229 } from "./fragment1229";
import type { FragmentToken1230 } from "./fragment1230";

export const FRAGMENT_1231 = gql(`
  fragment Fragment1231 on Member110 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_110
    memberCount_110
    memberMetric_110
  }
`);

type FragmentResult1231 = ResultOf<typeof FRAGMENT_1231>;
type FragmentSelf1231 = NonNullable<FragmentResult1231>;

export type FragmentToken1231 =
  | FragmentSelf1231["__typename"]
  | FragmentSelf1231["typenameHint"] | FragmentToken1229 | FragmentToken1230;
