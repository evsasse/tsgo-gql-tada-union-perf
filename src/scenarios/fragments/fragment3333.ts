import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3331 } from "./fragment3331";
import type { FragmentToken3332 } from "./fragment3332";

export const FRAGMENT_3333 = gql(`
  fragment Fragment3333 on Member252 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_252
    memberCount_252
    memberMetric_252
  }
`);

type FragmentResult3333 = ResultOf<typeof FRAGMENT_3333>;
type FragmentSelf3333 = NonNullable<FragmentResult3333>;

export type FragmentToken3333 =
  | FragmentSelf3333["__typename"]
  | FragmentSelf3333["typenameHint"] | FragmentToken3331 | FragmentToken3332;
