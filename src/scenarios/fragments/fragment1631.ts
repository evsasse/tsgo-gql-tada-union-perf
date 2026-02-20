import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1629 } from "./fragment1629";
import type { FragmentToken1630 } from "./fragment1630";

export const FRAGMENT_1631 = gql(`
  fragment Fragment1631 on Member230 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_230
    memberCount_230
    memberMetric_230
  }
`);

type FragmentResult1631 = ResultOf<typeof FRAGMENT_1631>;
type FragmentSelf1631 = NonNullable<FragmentResult1631>;

export type FragmentToken1631 =
  | FragmentSelf1631["__typename"]
  | FragmentSelf1631["typenameHint"] | FragmentToken1629 | FragmentToken1630;
