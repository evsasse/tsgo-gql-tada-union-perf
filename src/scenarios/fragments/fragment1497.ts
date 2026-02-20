import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1495 } from "./fragment1495";
import type { FragmentToken1496 } from "./fragment1496";

export const FRAGMENT_1497 = gql(`
  fragment Fragment1497 on Member96 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_96
    memberCount_96
    memberMetric_96
  }
`);

type FragmentResult1497 = ResultOf<typeof FRAGMENT_1497>;
type FragmentSelf1497 = NonNullable<FragmentResult1497>;

export type FragmentToken1497 =
  | FragmentSelf1497["__typename"]
  | FragmentSelf1497["typenameHint"] | FragmentToken1495 | FragmentToken1496;
