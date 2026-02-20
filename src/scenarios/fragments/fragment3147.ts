import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3145 } from "./fragment3145";
import type { FragmentToken3146 } from "./fragment3146";

export const FRAGMENT_3147 = gql(`
  fragment Fragment3147 on Member66 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_66
    memberCount_66
    memberMetric_66
  }
`);

type FragmentResult3147 = ResultOf<typeof FRAGMENT_3147>;
type FragmentSelf3147 = NonNullable<FragmentResult3147>;

export type FragmentToken3147 =
  | FragmentSelf3147["__typename"]
  | FragmentSelf3147["typenameHint"] | FragmentToken3145 | FragmentToken3146;
