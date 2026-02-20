import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2541 } from "./fragment2541";
import type { FragmentToken2542 } from "./fragment2542";

export const FRAGMENT_2543 = gql(`
  fragment Fragment2543 on Member22 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_22
    memberCount_22
    memberMetric_22
  }
`);

type FragmentResult2543 = ResultOf<typeof FRAGMENT_2543>;
type FragmentSelf2543 = NonNullable<FragmentResult2543>;

export type FragmentToken2543 =
  | FragmentSelf2543["__typename"]
  | FragmentSelf2543["typenameHint"] | FragmentToken2541 | FragmentToken2542;
