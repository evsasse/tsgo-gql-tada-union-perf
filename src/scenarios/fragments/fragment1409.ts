import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1407 } from "./fragment1407";
import type { FragmentToken1408 } from "./fragment1408";

export const FRAGMENT_1409 = gql(`
  fragment Fragment1409 on Member08 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_08
    memberCount_08
    memberMetric_08
  }
`);

type FragmentResult1409 = ResultOf<typeof FRAGMENT_1409>;
type FragmentSelf1409 = NonNullable<FragmentResult1409>;

export type FragmentToken1409 =
  | FragmentSelf1409["__typename"]
  | FragmentSelf1409["typenameHint"] | FragmentToken1407 | FragmentToken1408;
