import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1415 } from "./fragment1415";
import type { FragmentToken1416 } from "./fragment1416";

export const FRAGMENT_1417 = gql(`
  fragment Fragment1417 on Member16 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_16
    memberCount_16
    memberMetric_16
  }
`);

type FragmentResult1417 = ResultOf<typeof FRAGMENT_1417>;
type FragmentSelf1417 = NonNullable<FragmentResult1417>;

export type FragmentToken1417 =
  | FragmentSelf1417["__typename"]
  | FragmentSelf1417["typenameHint"] | FragmentToken1415 | FragmentToken1416;
