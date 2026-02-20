import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1537 } from "./fragment1537";
import type { FragmentToken1538 } from "./fragment1538";

export const FRAGMENT_1539 = gql(`
  fragment Fragment1539 on Member138 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_138
    memberCount_138
    memberMetric_138
  }
`);

type FragmentResult1539 = ResultOf<typeof FRAGMENT_1539>;
type FragmentSelf1539 = NonNullable<FragmentResult1539>;

export type FragmentToken1539 =
  | FragmentSelf1539["__typename"]
  | FragmentSelf1539["typenameHint"] | FragmentToken1537 | FragmentToken1538;
