import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3217 } from "./fragment3217";
import type { FragmentToken3218 } from "./fragment3218";

export const FRAGMENT_3219 = gql(`
  fragment Fragment3219 on Member138 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_138
    memberCount_138
    memberMetric_138
  }
`);

type FragmentResult3219 = ResultOf<typeof FRAGMENT_3219>;
type FragmentSelf3219 = NonNullable<FragmentResult3219>;

export type FragmentToken3219 =
  | FragmentSelf3219["__typename"]
  | FragmentSelf3219["typenameHint"] | FragmentToken3217 | FragmentToken3218;
