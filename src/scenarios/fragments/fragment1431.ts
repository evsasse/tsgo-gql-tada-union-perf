import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1429 } from "./fragment1429";
import type { FragmentToken1430 } from "./fragment1430";

export const FRAGMENT_1431 = gql(`
  fragment Fragment1431 on Member30 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_30
    memberCount_30
    memberMetric_30
  }
`);

type FragmentResult1431 = ResultOf<typeof FRAGMENT_1431>;
type FragmentSelf1431 = NonNullable<FragmentResult1431>;

export type FragmentToken1431 =
  | FragmentSelf1431["__typename"]
  | FragmentSelf1431["typenameHint"] | FragmentToken1429 | FragmentToken1430;
