import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1353 } from "./fragment1353";
import type { FragmentToken1354 } from "./fragment1354";

export const FRAGMENT_1355 = gql(`
  fragment Fragment1355 on Member234 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_234
    memberCount_234
    memberMetric_234
  }
`);

type FragmentResult1355 = ResultOf<typeof FRAGMENT_1355>;
type FragmentSelf1355 = NonNullable<FragmentResult1355>;

export type FragmentToken1355 =
  | FragmentSelf1355["__typename"]
  | FragmentSelf1355["typenameHint"] | FragmentToken1353 | FragmentToken1354;
