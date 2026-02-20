import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3600 } from "./fragment3600";
import type { FragmentToken3601 } from "./fragment3601";

export const FRAGMENT_3602 = gql(`
  fragment Fragment3602 on Member241 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_241
    memberCount_241
    memberMetric_241
  }
`);

type FragmentResult3602 = ResultOf<typeof FRAGMENT_3602>;
type FragmentSelf3602 = NonNullable<FragmentResult3602>;

export type FragmentToken3602 =
  | FragmentSelf3602["__typename"]
  | FragmentSelf3602["typenameHint"] | FragmentToken3600 | FragmentToken3601;
