import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3923 } from "./fragment3923";
import type { FragmentToken3924 } from "./fragment3924";

export const FRAGMENT_3925 = gql(`
  fragment Fragment3925 on Member04 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_04
    memberCount_04
    memberMetric_04
  }
`);

type FragmentResult3925 = ResultOf<typeof FRAGMENT_3925>;
type FragmentSelf3925 = NonNullable<FragmentResult3925>;

export type FragmentToken3925 =
  | FragmentSelf3925["__typename"]
  | FragmentSelf3925["typenameHint"] | FragmentToken3923 | FragmentToken3924;
