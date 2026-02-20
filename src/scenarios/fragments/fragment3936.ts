import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3934 } from "./fragment3934";
import type { FragmentToken3935 } from "./fragment3935";

export const FRAGMENT_3936 = gql(`
  fragment Fragment3936 on Member15 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_15
    memberCount_15
    memberMetric_15
  }
`);

type FragmentResult3936 = ResultOf<typeof FRAGMENT_3936>;
type FragmentSelf3936 = NonNullable<FragmentResult3936>;

export type FragmentToken3936 =
  | FragmentSelf3936["__typename"]
  | FragmentSelf3936["typenameHint"] | FragmentToken3934 | FragmentToken3935;
