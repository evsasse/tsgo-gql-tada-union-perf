import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1430 } from "./fragment1430";
import type { FragmentToken1431 } from "./fragment1431";

export const FRAGMENT_1432 = gql(`
  fragment Fragment1432 on Member31 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_31
    memberCount_31
    memberMetric_31
  }
`);

type FragmentResult1432 = ResultOf<typeof FRAGMENT_1432>;
type FragmentSelf1432 = NonNullable<FragmentResult1432>;

export type FragmentToken1432 =
  | FragmentSelf1432["__typename"]
  | FragmentSelf1432["typenameHint"] | FragmentToken1430 | FragmentToken1431;
