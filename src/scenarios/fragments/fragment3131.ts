import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3129 } from "./fragment3129";
import type { FragmentToken3130 } from "./fragment3130";

export const FRAGMENT_3131 = gql(`
  fragment Fragment3131 on Member50 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_50
    memberCount_50
    memberMetric_50
  }
`);

type FragmentResult3131 = ResultOf<typeof FRAGMENT_3131>;
type FragmentSelf3131 = NonNullable<FragmentResult3131>;

export type FragmentToken3131 =
  | FragmentSelf3131["__typename"]
  | FragmentSelf3131["typenameHint"] | FragmentToken3129 | FragmentToken3130;
