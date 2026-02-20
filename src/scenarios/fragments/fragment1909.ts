import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1907 } from "./fragment1907";
import type { FragmentToken1908 } from "./fragment1908";

export const FRAGMENT_1909 = gql(`
  fragment Fragment1909 on Member228 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_228
    memberCount_228
    memberMetric_228
  }
`);

type FragmentResult1909 = ResultOf<typeof FRAGMENT_1909>;
type FragmentSelf1909 = NonNullable<FragmentResult1909>;

export type FragmentToken1909 =
  | FragmentSelf1909["__typename"]
  | FragmentSelf1909["typenameHint"] | FragmentToken1907 | FragmentToken1908;
