import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3119 } from "./fragment3119";
import type { FragmentToken3120 } from "./fragment3120";

export const FRAGMENT_3121 = gql(`
  fragment Fragment3121 on Member40 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_40
    memberCount_40
    memberMetric_40
  }
`);

type FragmentResult3121 = ResultOf<typeof FRAGMENT_3121>;
type FragmentSelf3121 = NonNullable<FragmentResult3121>;

export type FragmentToken3121 =
  | FragmentSelf3121["__typename"]
  | FragmentSelf3121["typenameHint"] | FragmentToken3119 | FragmentToken3120;
