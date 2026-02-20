import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1311 } from "./fragment1311";
import type { FragmentToken1312 } from "./fragment1312";

export const FRAGMENT_1313 = gql(`
  fragment Fragment1313 on Member192 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_192
    memberCount_192
    memberMetric_192
  }
`);

type FragmentResult1313 = ResultOf<typeof FRAGMENT_1313>;
type FragmentSelf1313 = NonNullable<FragmentResult1313>;

export type FragmentToken1313 =
  | FragmentSelf1313["__typename"]
  | FragmentSelf1313["typenameHint"] | FragmentToken1311 | FragmentToken1312;
