import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3633 } from "./fragment3633";
import type { FragmentToken3634 } from "./fragment3634";

export const FRAGMENT_3635 = gql(`
  fragment Fragment3635 on Member274 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_274
    memberCount_274
    memberMetric_274
  }
`);

type FragmentResult3635 = ResultOf<typeof FRAGMENT_3635>;
type FragmentSelf3635 = NonNullable<FragmentResult3635>;

export type FragmentToken3635 =
  | FragmentSelf3635["__typename"]
  | FragmentSelf3635["typenameHint"] | FragmentToken3633 | FragmentToken3634;
