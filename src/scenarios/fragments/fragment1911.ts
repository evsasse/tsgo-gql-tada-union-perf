import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1909 } from "./fragment1909";
import type { FragmentToken1910 } from "./fragment1910";

export const FRAGMENT_1911 = gql(`
  fragment Fragment1911 on Member230 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_230
    memberCount_230
    memberMetric_230
  }
`);

type FragmentResult1911 = ResultOf<typeof FRAGMENT_1911>;
type FragmentSelf1911 = NonNullable<FragmentResult1911>;

export type FragmentToken1911 =
  | FragmentSelf1911["__typename"]
  | FragmentSelf1911["typenameHint"] | FragmentToken1909 | FragmentToken1910;
