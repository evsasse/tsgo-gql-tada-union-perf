import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1399 } from "./fragment1399";
import type { FragmentToken1400 } from "./fragment1400";

export const FRAGMENT_1401 = gql(`
  fragment Fragment1401 on Member00 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_00
    memberCount_00
    memberMetric_00
  }
`);

type FragmentResult1401 = ResultOf<typeof FRAGMENT_1401>;
type FragmentSelf1401 = NonNullable<FragmentResult1401>;

export type FragmentToken1401 =
  | FragmentSelf1401["__typename"]
  | FragmentSelf1401["typenameHint"] | FragmentToken1399 | FragmentToken1400;
