import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3375 } from "./fragment3375";
import type { FragmentToken3376 } from "./fragment3376";

export const FRAGMENT_3377 = gql(`
  fragment Fragment3377 on Member16 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_16
    memberCount_16
    memberMetric_16
  }
`);

type FragmentResult3377 = ResultOf<typeof FRAGMENT_3377>;
type FragmentSelf3377 = NonNullable<FragmentResult3377>;

export type FragmentToken3377 =
  | FragmentSelf3377["__typename"]
  | FragmentSelf3377["typenameHint"] | FragmentToken3375 | FragmentToken3376;
