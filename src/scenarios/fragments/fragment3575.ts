import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3573 } from "./fragment3573";
import type { FragmentToken3574 } from "./fragment3574";

export const FRAGMENT_3575 = gql(`
  fragment Fragment3575 on Member214 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_214
    memberCount_214
    memberMetric_214
  }
`);

type FragmentResult3575 = ResultOf<typeof FRAGMENT_3575>;
type FragmentSelf3575 = NonNullable<FragmentResult3575>;

export type FragmentToken3575 =
  | FragmentSelf3575["__typename"]
  | FragmentSelf3575["typenameHint"] | FragmentToken3573 | FragmentToken3574;
