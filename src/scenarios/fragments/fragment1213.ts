import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1211 } from "./fragment1211";
import type { FragmentToken1212 } from "./fragment1212";

export const FRAGMENT_1213 = gql(`
  fragment Fragment1213 on Member92 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_92
    memberCount_92
    memberMetric_92
  }
`);

type FragmentResult1213 = ResultOf<typeof FRAGMENT_1213>;
type FragmentSelf1213 = NonNullable<FragmentResult1213>;

export type FragmentToken1213 =
  | FragmentSelf1213["__typename"]
  | FragmentSelf1213["typenameHint"] | FragmentToken1211 | FragmentToken1212;
