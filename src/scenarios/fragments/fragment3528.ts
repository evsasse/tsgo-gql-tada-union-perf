import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3526 } from "./fragment3526";
import type { FragmentToken3527 } from "./fragment3527";

export const FRAGMENT_3528 = gql(`
  fragment Fragment3528 on Member167 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_167
    memberCount_167
    memberMetric_167
  }
`);

type FragmentResult3528 = ResultOf<typeof FRAGMENT_3528>;
type FragmentSelf3528 = NonNullable<FragmentResult3528>;

export type FragmentToken3528 =
  | FragmentSelf3528["__typename"]
  | FragmentSelf3528["typenameHint"] | FragmentToken3526 | FragmentToken3527;
