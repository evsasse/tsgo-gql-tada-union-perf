import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3146 } from "./fragment3146";
import type { FragmentToken3147 } from "./fragment3147";

export const FRAGMENT_3148 = gql(`
  fragment Fragment3148 on Member67 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_67
    memberCount_67
    memberMetric_67
  }
`);

type FragmentResult3148 = ResultOf<typeof FRAGMENT_3148>;
type FragmentSelf3148 = NonNullable<FragmentResult3148>;

export type FragmentToken3148 =
  | FragmentSelf3148["__typename"]
  | FragmentSelf3148["typenameHint"] | FragmentToken3146 | FragmentToken3147;
