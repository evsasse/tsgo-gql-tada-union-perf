import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1484 } from "./fragment1484";
import type { FragmentToken1485 } from "./fragment1485";

export const FRAGMENT_1486 = gql(`
  fragment Fragment1486 on Member85 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_85
    memberCount_85
    memberMetric_85
  }
`);

type FragmentResult1486 = ResultOf<typeof FRAGMENT_1486>;
type FragmentSelf1486 = NonNullable<FragmentResult1486>;

export type FragmentToken1486 =
  | FragmentSelf1486["__typename"]
  | FragmentSelf1486["typenameHint"] | FragmentToken1484 | FragmentToken1485;
