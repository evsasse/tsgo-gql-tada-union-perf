import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3004 } from "./fragment3004";
import type { FragmentToken3005 } from "./fragment3005";

export const FRAGMENT_3006 = gql(`
  fragment Fragment3006 on Member205 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_205
    memberCount_205
    memberMetric_205
  }
`);

type FragmentResult3006 = ResultOf<typeof FRAGMENT_3006>;
type FragmentSelf3006 = NonNullable<FragmentResult3006>;

export type FragmentToken3006 =
  | FragmentSelf3006["__typename"]
  | FragmentSelf3006["typenameHint"] | FragmentToken3004 | FragmentToken3005;
