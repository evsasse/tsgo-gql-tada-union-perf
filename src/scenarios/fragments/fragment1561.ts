import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1559 } from "./fragment1559";
import type { FragmentToken1560 } from "./fragment1560";

export const FRAGMENT_1561 = gql(`
  fragment Fragment1561 on Member160 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_160
    memberCount_160
    memberMetric_160
  }
`);

type FragmentResult1561 = ResultOf<typeof FRAGMENT_1561>;
type FragmentSelf1561 = NonNullable<FragmentResult1561>;

export type FragmentToken1561 =
  | FragmentSelf1561["__typename"]
  | FragmentSelf1561["typenameHint"] | FragmentToken1559 | FragmentToken1560;
