import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1400 } from "./fragment1400";
import type { FragmentToken1401 } from "./fragment1401";

export const FRAGMENT_1402 = gql(`
  fragment Fragment1402 on Member01 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_01
    memberCount_01
    memberMetric_01
  }
`);

type FragmentResult1402 = ResultOf<typeof FRAGMENT_1402>;
type FragmentSelf1402 = NonNullable<FragmentResult1402>;

export type FragmentToken1402 =
  | FragmentSelf1402["__typename"]
  | FragmentSelf1402["typenameHint"] | FragmentToken1400 | FragmentToken1401;
