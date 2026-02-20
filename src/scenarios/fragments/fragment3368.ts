import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3366 } from "./fragment3366";
import type { FragmentToken3367 } from "./fragment3367";

export const FRAGMENT_3368 = gql(`
  fragment Fragment3368 on Member07 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_07
    memberCount_07
    memberMetric_07
  }
`);

type FragmentResult3368 = ResultOf<typeof FRAGMENT_3368>;
type FragmentSelf3368 = NonNullable<FragmentResult3368>;

export type FragmentToken3368 =
  | FragmentSelf3368["__typename"]
  | FragmentSelf3368["typenameHint"] | FragmentToken3366 | FragmentToken3367;
