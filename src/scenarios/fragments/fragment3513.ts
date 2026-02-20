import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3511 } from "./fragment3511";
import type { FragmentToken3512 } from "./fragment3512";

export const FRAGMENT_3513 = gql(`
  fragment Fragment3513 on Member152 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_152
    memberCount_152
    memberMetric_152
  }
`);

type FragmentResult3513 = ResultOf<typeof FRAGMENT_3513>;
type FragmentSelf3513 = NonNullable<FragmentResult3513>;

export type FragmentToken3513 =
  | FragmentSelf3513["__typename"]
  | FragmentSelf3513["typenameHint"] | FragmentToken3511 | FragmentToken3512;
