import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1011 } from "./fragment1011";
import type { FragmentToken1012 } from "./fragment1012";

export const FRAGMENT_1013 = gql(`
  fragment Fragment1013 on Member172 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_172
    memberCount_172
    memberMetric_172
  }
`);

type FragmentResult1013 = ResultOf<typeof FRAGMENT_1013>;
type FragmentSelf1013 = NonNullable<FragmentResult1013>;

export type FragmentToken1013 =
  | FragmentSelf1013["__typename"]
  | FragmentSelf1013["typenameHint"] | FragmentToken1011 | FragmentToken1012;
