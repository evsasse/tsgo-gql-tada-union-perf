import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1387 } from "./fragment1387";
import type { FragmentToken1388 } from "./fragment1388";

export const FRAGMENT_1389 = gql(`
  fragment Fragment1389 on Member268 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_268
    memberCount_268
    memberMetric_268
  }
`);

type FragmentResult1389 = ResultOf<typeof FRAGMENT_1389>;
type FragmentSelf1389 = NonNullable<FragmentResult1389>;

export type FragmentToken1389 =
  | FragmentSelf1389["__typename"]
  | FragmentSelf1389["typenameHint"] | FragmentToken1387 | FragmentToken1388;
