import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3380 } from "./fragment3380";
import type { FragmentToken3381 } from "./fragment3381";

export const FRAGMENT_3382 = gql(`
  fragment Fragment3382 on Member21 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_21
    memberCount_21
    memberMetric_21
  }
`);

type FragmentResult3382 = ResultOf<typeof FRAGMENT_3382>;
type FragmentSelf3382 = NonNullable<FragmentResult3382>;

export type FragmentToken3382 =
  | FragmentSelf3382["__typename"]
  | FragmentSelf3382["typenameHint"] | FragmentToken3380 | FragmentToken3381;
