import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3092 } from "./fragment3092";
import type { FragmentToken3093 } from "./fragment3093";

export const FRAGMENT_3094 = gql(`
  fragment Fragment3094 on Member13 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_13
    memberCount_13
    memberMetric_13
  }
`);

type FragmentResult3094 = ResultOf<typeof FRAGMENT_3094>;
type FragmentSelf3094 = NonNullable<FragmentResult3094>;

export type FragmentToken3094 =
  | FragmentSelf3094["__typename"]
  | FragmentSelf3094["typenameHint"] | FragmentToken3092 | FragmentToken3093;
