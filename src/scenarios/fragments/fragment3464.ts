import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3462 } from "./fragment3462";
import type { FragmentToken3463 } from "./fragment3463";

export const FRAGMENT_3464 = gql(`
  fragment Fragment3464 on Member103 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_103
    memberCount_103
    memberMetric_103
  }
`);

type FragmentResult3464 = ResultOf<typeof FRAGMENT_3464>;
type FragmentSelf3464 = NonNullable<FragmentResult3464>;

export type FragmentToken3464 =
  | FragmentSelf3464["__typename"]
  | FragmentSelf3464["typenameHint"] | FragmentToken3462 | FragmentToken3463;
