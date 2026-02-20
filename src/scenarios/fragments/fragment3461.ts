import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3459 } from "./fragment3459";
import type { FragmentToken3460 } from "./fragment3460";

export const FRAGMENT_3461 = gql(`
  fragment Fragment3461 on Member100 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_100
    memberCount_100
    memberMetric_100
  }
`);

type FragmentResult3461 = ResultOf<typeof FRAGMENT_3461>;
type FragmentSelf3461 = NonNullable<FragmentResult3461>;

export type FragmentToken3461 =
  | FragmentSelf3461["__typename"]
  | FragmentSelf3461["typenameHint"] | FragmentToken3459 | FragmentToken3460;
