import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3158 } from "./fragment3158";
import type { FragmentToken3159 } from "./fragment3159";

export const FRAGMENT_3160 = gql(`
  fragment Fragment3160 on Member79 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_79
    memberCount_79
    memberMetric_79
  }
`);

type FragmentResult3160 = ResultOf<typeof FRAGMENT_3160>;
type FragmentSelf3160 = NonNullable<FragmentResult3160>;

export type FragmentToken3160 =
  | FragmentSelf3160["__typename"]
  | FragmentSelf3160["typenameHint"] | FragmentToken3158 | FragmentToken3159;
