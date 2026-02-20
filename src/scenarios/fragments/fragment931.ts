import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken929 } from "./fragment929";
import type { FragmentToken930 } from "./fragment930";

export const FRAGMENT_931 = gql(`
  fragment Fragment931 on Member90 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_90
    memberCount_90
    memberMetric_90
  }
`);

type FragmentResult931 = ResultOf<typeof FRAGMENT_931>;
type FragmentSelf931 = NonNullable<FragmentResult931>;

export type FragmentToken931 =
  | FragmentSelf931["__typename"]
  | FragmentSelf931["typenameHint"] | FragmentToken929 | FragmentToken930;
