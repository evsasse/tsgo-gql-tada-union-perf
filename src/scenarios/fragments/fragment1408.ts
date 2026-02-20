import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1406 } from "./fragment1406";
import type { FragmentToken1407 } from "./fragment1407";

export const FRAGMENT_1408 = gql(`
  fragment Fragment1408 on Member07 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_07
    memberCount_07
    memberMetric_07
  }
`);

type FragmentResult1408 = ResultOf<typeof FRAGMENT_1408>;
type FragmentSelf1408 = NonNullable<FragmentResult1408>;

export type FragmentToken1408 =
  | FragmentSelf1408["__typename"]
  | FragmentSelf1408["typenameHint"] | FragmentToken1406 | FragmentToken1407;
