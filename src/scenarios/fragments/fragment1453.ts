import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1451 } from "./fragment1451";
import type { FragmentToken1452 } from "./fragment1452";

export const FRAGMENT_1453 = gql(`
  fragment Fragment1453 on Member52 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_52
    memberCount_52
    memberMetric_52
  }
`);

type FragmentResult1453 = ResultOf<typeof FRAGMENT_1453>;
type FragmentSelf1453 = NonNullable<FragmentResult1453>;

export type FragmentToken1453 =
  | FragmentSelf1453["__typename"]
  | FragmentSelf1453["typenameHint"] | FragmentToken1451 | FragmentToken1452;
