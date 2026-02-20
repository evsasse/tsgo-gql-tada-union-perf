import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1222 } from "./fragment1222";
import type { FragmentToken1223 } from "./fragment1223";

export const FRAGMENT_1224 = gql(`
  fragment Fragment1224 on Member103 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_103
    memberCount_103
    memberMetric_103
  }
`);

type FragmentResult1224 = ResultOf<typeof FRAGMENT_1224>;
type FragmentSelf1224 = NonNullable<FragmentResult1224>;

export type FragmentToken1224 =
  | FragmentSelf1224["__typename"]
  | FragmentSelf1224["typenameHint"] | FragmentToken1222 | FragmentToken1223;
