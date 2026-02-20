import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3382 } from "./fragment3382";
import type { FragmentToken3383 } from "./fragment3383";

export const FRAGMENT_3384 = gql(`
  fragment Fragment3384 on Member23 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_23
    memberCount_23
    memberMetric_23
  }
`);

type FragmentResult3384 = ResultOf<typeof FRAGMENT_3384>;
type FragmentSelf3384 = NonNullable<FragmentResult3384>;

export type FragmentToken3384 =
  | FragmentSelf3384["__typename"]
  | FragmentSelf3384["typenameHint"] | FragmentToken3382 | FragmentToken3383;
