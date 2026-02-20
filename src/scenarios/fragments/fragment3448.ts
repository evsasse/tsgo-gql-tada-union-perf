import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3446 } from "./fragment3446";
import type { FragmentToken3447 } from "./fragment3447";

export const FRAGMENT_3448 = gql(`
  fragment Fragment3448 on Member87 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_87
    memberCount_87
    memberMetric_87
  }
`);

type FragmentResult3448 = ResultOf<typeof FRAGMENT_3448>;
type FragmentSelf3448 = NonNullable<FragmentResult3448>;

export type FragmentToken3448 =
  | FragmentSelf3448["__typename"]
  | FragmentSelf3448["typenameHint"] | FragmentToken3446 | FragmentToken3447;
