import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1457 } from "./fragment1457";
import type { FragmentToken1458 } from "./fragment1458";

export const FRAGMENT_1459 = gql(`
  fragment Fragment1459 on Member58 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_58
    memberCount_58
    memberMetric_58
  }
`);

type FragmentResult1459 = ResultOf<typeof FRAGMENT_1459>;
type FragmentSelf1459 = NonNullable<FragmentResult1459>;

export type FragmentToken1459 =
  | FragmentSelf1459["__typename"]
  | FragmentSelf1459["typenameHint"] | FragmentToken1457 | FragmentToken1458;
