import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3109 } from "./fragment3109";
import type { FragmentToken3110 } from "./fragment3110";

export const FRAGMENT_3111 = gql(`
  fragment Fragment3111 on Member30 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_30
    memberCount_30
    memberMetric_30
  }
`);

type FragmentResult3111 = ResultOf<typeof FRAGMENT_3111>;
type FragmentSelf3111 = NonNullable<FragmentResult3111>;

export type FragmentToken3111 =
  | FragmentSelf3111["__typename"]
  | FragmentSelf3111["typenameHint"] | FragmentToken3109 | FragmentToken3110;
