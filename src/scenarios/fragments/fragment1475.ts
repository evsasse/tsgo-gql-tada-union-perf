import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1473 } from "./fragment1473";
import type { FragmentToken1474 } from "./fragment1474";

export const FRAGMENT_1475 = gql(`
  fragment Fragment1475 on Member74 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_74
    memberCount_74
    memberMetric_74
  }
`);

type FragmentResult1475 = ResultOf<typeof FRAGMENT_1475>;
type FragmentSelf1475 = NonNullable<FragmentResult1475>;

export type FragmentToken1475 =
  | FragmentSelf1475["__typename"]
  | FragmentSelf1475["typenameHint"] | FragmentToken1473 | FragmentToken1474;
