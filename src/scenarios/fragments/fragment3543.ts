import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3541 } from "./fragment3541";
import type { FragmentToken3542 } from "./fragment3542";

export const FRAGMENT_3543 = gql(`
  fragment Fragment3543 on Member182 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_182
    memberCount_182
    memberMetric_182
  }
`);

type FragmentResult3543 = ResultOf<typeof FRAGMENT_3543>;
type FragmentSelf3543 = NonNullable<FragmentResult3543>;

export type FragmentToken3543 =
  | FragmentSelf3543["__typename"]
  | FragmentSelf3543["typenameHint"] | FragmentToken3541 | FragmentToken3542;
