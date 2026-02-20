import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1568 } from "./fragment1568";
import type { FragmentToken1569 } from "./fragment1569";

export const FRAGMENT_1570 = gql(`
  fragment Fragment1570 on Member169 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_169
    memberCount_169
    memberMetric_169
  }
`);

type FragmentResult1570 = ResultOf<typeof FRAGMENT_1570>;
type FragmentSelf1570 = NonNullable<FragmentResult1570>;

export type FragmentToken1570 =
  | FragmentSelf1570["__typename"]
  | FragmentSelf1570["typenameHint"] | FragmentToken1568 | FragmentToken1569;
