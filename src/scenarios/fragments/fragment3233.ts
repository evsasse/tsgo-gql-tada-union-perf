import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3231 } from "./fragment3231";
import type { FragmentToken3232 } from "./fragment3232";

export const FRAGMENT_3233 = gql(`
  fragment Fragment3233 on Member152 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_152
    memberCount_152
    memberMetric_152
  }
`);

type FragmentResult3233 = ResultOf<typeof FRAGMENT_3233>;
type FragmentSelf3233 = NonNullable<FragmentResult3233>;

export type FragmentToken3233 =
  | FragmentSelf3233["__typename"]
  | FragmentSelf3233["typenameHint"] | FragmentToken3231 | FragmentToken3232;
