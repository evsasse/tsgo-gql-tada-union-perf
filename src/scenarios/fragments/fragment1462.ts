import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1460 } from "./fragment1460";
import type { FragmentToken1461 } from "./fragment1461";

export const FRAGMENT_1462 = gql(`
  fragment Fragment1462 on Member61 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_61
    memberCount_61
    memberMetric_61
  }
`);

type FragmentResult1462 = ResultOf<typeof FRAGMENT_1462>;
type FragmentSelf1462 = NonNullable<FragmentResult1462>;

export type FragmentToken1462 =
  | FragmentSelf1462["__typename"]
  | FragmentSelf1462["typenameHint"] | FragmentToken1460 | FragmentToken1461;
