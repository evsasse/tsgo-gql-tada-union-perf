import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3347 } from "./fragment3347";
import type { FragmentToken3348 } from "./fragment3348";

export const FRAGMENT_3349 = gql(`
  fragment Fragment3349 on Member268 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_268
    memberCount_268
    memberMetric_268
  }
`);

type FragmentResult3349 = ResultOf<typeof FRAGMENT_3349>;
type FragmentSelf3349 = NonNullable<FragmentResult3349>;

export type FragmentToken3349 =
  | FragmentSelf3349["__typename"]
  | FragmentSelf3349["typenameHint"] | FragmentToken3347 | FragmentToken3348;
