import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1512 } from "./fragment1512";
import type { FragmentToken1513 } from "./fragment1513";

export const FRAGMENT_1514 = gql(`
  fragment Fragment1514 on Member113 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_113
    memberCount_113
    memberMetric_113
  }
`);

type FragmentResult1514 = ResultOf<typeof FRAGMENT_1514>;
type FragmentSelf1514 = NonNullable<FragmentResult1514>;

export type FragmentToken1514 =
  | FragmentSelf1514["__typename"]
  | FragmentSelf1514["typenameHint"] | FragmentToken1512 | FragmentToken1513;
