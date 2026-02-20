import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3361 } from "./fragment3361";
import type { FragmentToken3362 } from "./fragment3362";

export const FRAGMENT_3363 = gql(`
  fragment Fragment3363 on Member02 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_02
    memberCount_02
    memberMetric_02
  }
`);

type FragmentResult3363 = ResultOf<typeof FRAGMENT_3363>;
type FragmentSelf3363 = NonNullable<FragmentResult3363>;

export type FragmentToken3363 =
  | FragmentSelf3363["__typename"]
  | FragmentSelf3363["typenameHint"] | FragmentToken3361 | FragmentToken3362;
