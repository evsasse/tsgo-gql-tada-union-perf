import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3489 } from "./fragment3489";
import type { FragmentToken3490 } from "./fragment3490";

export const FRAGMENT_3491 = gql(`
  fragment Fragment3491 on Member130 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_130
    memberCount_130
    memberMetric_130
  }
`);

type FragmentResult3491 = ResultOf<typeof FRAGMENT_3491>;
type FragmentSelf3491 = NonNullable<FragmentResult3491>;

export type FragmentToken3491 =
  | FragmentSelf3491["__typename"]
  | FragmentSelf3491["typenameHint"] | FragmentToken3489 | FragmentToken3490;
