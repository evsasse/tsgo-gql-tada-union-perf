import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3556 } from "./fragment3556";
import type { FragmentToken3557 } from "./fragment3557";

export const FRAGMENT_3558 = gql(`
  fragment Fragment3558 on Member197 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_197
    memberCount_197
    memberMetric_197
  }
`);

type FragmentResult3558 = ResultOf<typeof FRAGMENT_3558>;
type FragmentSelf3558 = NonNullable<FragmentResult3558>;

export type FragmentToken3558 =
  | FragmentSelf3558["__typename"]
  | FragmentSelf3558["typenameHint"] | FragmentToken3556 | FragmentToken3557;
