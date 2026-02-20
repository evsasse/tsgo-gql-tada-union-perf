import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1461 } from "./fragment1461";
import type { FragmentToken1462 } from "./fragment1462";

export const FRAGMENT_1463 = gql(`
  fragment Fragment1463 on Member62 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_62
    memberCount_62
    memberMetric_62
  }
`);

type FragmentResult1463 = ResultOf<typeof FRAGMENT_1463>;
type FragmentSelf1463 = NonNullable<FragmentResult1463>;

export type FragmentToken1463 =
  | FragmentSelf1463["__typename"]
  | FragmentSelf1463["typenameHint"] | FragmentToken1461 | FragmentToken1462;
