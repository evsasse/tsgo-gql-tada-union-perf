import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1542 } from "./fragment1542";
import type { FragmentToken1543 } from "./fragment1543";

export const FRAGMENT_1544 = gql(`
  fragment Fragment1544 on Member143 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_143
    memberCount_143
    memberMetric_143
  }
`);

type FragmentResult1544 = ResultOf<typeof FRAGMENT_1544>;
type FragmentSelf1544 = NonNullable<FragmentResult1544>;

export type FragmentToken1544 =
  | FragmentSelf1544["__typename"]
  | FragmentSelf1544["typenameHint"] | FragmentToken1542 | FragmentToken1543;
