import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1809 } from "./fragment1809";
import type { FragmentToken1810 } from "./fragment1810";

export const FRAGMENT_1811 = gql(`
  fragment Fragment1811 on Member130 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_130
    memberCount_130
    memberMetric_130
  }
`);

type FragmentResult1811 = ResultOf<typeof FRAGMENT_1811>;
type FragmentSelf1811 = NonNullable<FragmentResult1811>;

export type FragmentToken1811 =
  | FragmentSelf1811["__typename"]
  | FragmentSelf1811["typenameHint"] | FragmentToken1809 | FragmentToken1810;
