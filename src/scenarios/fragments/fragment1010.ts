import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1008 } from "./fragment1008";
import type { FragmentToken1009 } from "./fragment1009";

export const FRAGMENT_1010 = gql(`
  fragment Fragment1010 on Member169 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_169
    memberCount_169
    memberMetric_169
  }
`);

type FragmentResult1010 = ResultOf<typeof FRAGMENT_1010>;
type FragmentSelf1010 = NonNullable<FragmentResult1010>;

export type FragmentToken1010 =
  | FragmentSelf1010["__typename"]
  | FragmentSelf1010["typenameHint"] | FragmentToken1008 | FragmentToken1009;
