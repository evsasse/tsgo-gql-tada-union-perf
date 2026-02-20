import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1441 } from "./fragment1441";
import type { FragmentToken1442 } from "./fragment1442";

export const FRAGMENT_1443 = gql(`
  fragment Fragment1443 on Member42 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_42
    memberCount_42
    memberMetric_42
  }
`);

type FragmentResult1443 = ResultOf<typeof FRAGMENT_1443>;
type FragmentSelf1443 = NonNullable<FragmentResult1443>;

export type FragmentToken1443 =
  | FragmentSelf1443["__typename"]
  | FragmentSelf1443["typenameHint"] | FragmentToken1441 | FragmentToken1442;
