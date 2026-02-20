import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1972 } from "./fragment1972";
import type { FragmentToken1973 } from "./fragment1973";

export const FRAGMENT_1974 = gql(`
  fragment Fragment1974 on Member13 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_13
    memberCount_13
    memberMetric_13
  }
`);

type FragmentResult1974 = ResultOf<typeof FRAGMENT_1974>;
type FragmentSelf1974 = NonNullable<FragmentResult1974>;

export type FragmentToken1974 =
  | FragmentSelf1974["__typename"]
  | FragmentSelf1974["typenameHint"] | FragmentToken1972 | FragmentToken1973;
