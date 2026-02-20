import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3348 } from "./fragment3348";
import type { FragmentToken3349 } from "./fragment3349";

export const FRAGMENT_3350 = gql(`
  fragment Fragment3350 on Member269 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_269
    memberCount_269
    memberMetric_269
  }
`);

type FragmentResult3350 = ResultOf<typeof FRAGMENT_3350>;
type FragmentSelf3350 = NonNullable<FragmentResult3350>;

export type FragmentToken3350 =
  | FragmentSelf3350["__typename"]
  | FragmentSelf3350["typenameHint"] | FragmentToken3348 | FragmentToken3349;
