import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1432 } from "./fragment1432";
import type { FragmentToken1433 } from "./fragment1433";

export const FRAGMENT_1434 = gql(`
  fragment Fragment1434 on Member33 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_33
    memberCount_33
    memberMetric_33
  }
`);

type FragmentResult1434 = ResultOf<typeof FRAGMENT_1434>;
type FragmentSelf1434 = NonNullable<FragmentResult1434>;

export type FragmentToken1434 =
  | FragmentSelf1434["__typename"]
  | FragmentSelf1434["typenameHint"] | FragmentToken1432 | FragmentToken1433;
