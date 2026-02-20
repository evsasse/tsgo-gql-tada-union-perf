import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1007 } from "./fragment1007";
import type { FragmentToken1008 } from "./fragment1008";

export const FRAGMENT_1009 = gql(`
  fragment Fragment1009 on Member168 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_168
    memberCount_168
    memberMetric_168
  }
`);

type FragmentResult1009 = ResultOf<typeof FRAGMENT_1009>;
type FragmentSelf1009 = NonNullable<FragmentResult1009>;

export type FragmentToken1009 =
  | FragmentSelf1009["__typename"]
  | FragmentSelf1009["typenameHint"] | FragmentToken1007 | FragmentToken1008;
