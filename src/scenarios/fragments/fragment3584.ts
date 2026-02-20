import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3582 } from "./fragment3582";
import type { FragmentToken3583 } from "./fragment3583";

export const FRAGMENT_3584 = gql(`
  fragment Fragment3584 on Member223 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_223
    memberCount_223
    memberMetric_223
  }
`);

type FragmentResult3584 = ResultOf<typeof FRAGMENT_3584>;
type FragmentSelf3584 = NonNullable<FragmentResult3584>;

export type FragmentToken3584 =
  | FragmentSelf3584["__typename"]
  | FragmentSelf3584["typenameHint"] | FragmentToken3582 | FragmentToken3583;
