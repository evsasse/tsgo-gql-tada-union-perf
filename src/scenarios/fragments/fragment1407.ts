import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1405 } from "./fragment1405";
import type { FragmentToken1406 } from "./fragment1406";

export const FRAGMENT_1407 = gql(`
  fragment Fragment1407 on Member06 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_06
    memberCount_06
    memberMetric_06
  }
`);

type FragmentResult1407 = ResultOf<typeof FRAGMENT_1407>;
type FragmentSelf1407 = NonNullable<FragmentResult1407>;

export type FragmentToken1407 =
  | FragmentSelf1407["__typename"]
  | FragmentSelf1407["typenameHint"] | FragmentToken1405 | FragmentToken1406;
