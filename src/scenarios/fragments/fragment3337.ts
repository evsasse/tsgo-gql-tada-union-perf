import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3335 } from "./fragment3335";
import type { FragmentToken3336 } from "./fragment3336";

export const FRAGMENT_3337 = gql(`
  fragment Fragment3337 on Member256 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_256
    memberCount_256
    memberMetric_256
  }
`);

type FragmentResult3337 = ResultOf<typeof FRAGMENT_3337>;
type FragmentSelf3337 = NonNullable<FragmentResult3337>;

export type FragmentToken3337 =
  | FragmentSelf3337["__typename"]
  | FragmentSelf3337["typenameHint"] | FragmentToken3335 | FragmentToken3336;
