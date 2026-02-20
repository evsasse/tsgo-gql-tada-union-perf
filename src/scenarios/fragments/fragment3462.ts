import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3460 } from "./fragment3460";
import type { FragmentToken3461 } from "./fragment3461";

export const FRAGMENT_3462 = gql(`
  fragment Fragment3462 on Member101 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_101
    memberCount_101
    memberMetric_101
  }
`);

type FragmentResult3462 = ResultOf<typeof FRAGMENT_3462>;
type FragmentSelf3462 = NonNullable<FragmentResult3462>;

export type FragmentToken3462 =
  | FragmentSelf3462["__typename"]
  | FragmentSelf3462["typenameHint"] | FragmentToken3460 | FragmentToken3461;
