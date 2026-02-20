import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1401 } from "./fragment1401";
import type { FragmentToken1402 } from "./fragment1402";

export const FRAGMENT_1403 = gql(`
  fragment Fragment1403 on Member02 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_02
    memberCount_02
    memberMetric_02
  }
`);

type FragmentResult1403 = ResultOf<typeof FRAGMENT_1403>;
type FragmentSelf1403 = NonNullable<FragmentResult1403>;

export type FragmentToken1403 =
  | FragmentSelf1403["__typename"]
  | FragmentSelf1403["typenameHint"] | FragmentToken1401 | FragmentToken1402;
