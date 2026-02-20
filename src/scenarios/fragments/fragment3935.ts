import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3933 } from "./fragment3933";
import type { FragmentToken3934 } from "./fragment3934";

export const FRAGMENT_3935 = gql(`
  fragment Fragment3935 on Member14 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_14
    memberCount_14
    memberMetric_14
  }
`);

type FragmentResult3935 = ResultOf<typeof FRAGMENT_3935>;
type FragmentSelf3935 = NonNullable<FragmentResult3935>;

export type FragmentToken3935 =
  | FragmentSelf3935["__typename"]
  | FragmentSelf3935["typenameHint"] | FragmentToken3933 | FragmentToken3934;
