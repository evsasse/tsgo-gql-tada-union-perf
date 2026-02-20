import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3932 } from "./fragment3932";
import type { FragmentToken3933 } from "./fragment3933";

export const FRAGMENT_3934 = gql(`
  fragment Fragment3934 on Member13 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_13
    memberCount_13
    memberMetric_13
  }
`);

type FragmentResult3934 = ResultOf<typeof FRAGMENT_3934>;
type FragmentSelf3934 = NonNullable<FragmentResult3934>;

export type FragmentToken3934 =
  | FragmentSelf3934["__typename"]
  | FragmentSelf3934["typenameHint"] | FragmentToken3932 | FragmentToken3933;
