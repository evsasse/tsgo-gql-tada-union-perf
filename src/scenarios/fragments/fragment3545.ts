import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3543 } from "./fragment3543";
import type { FragmentToken3544 } from "./fragment3544";

export const FRAGMENT_3545 = gql(`
  fragment Fragment3545 on Member184 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_184
    memberCount_184
    memberMetric_184
  }
`);

type FragmentResult3545 = ResultOf<typeof FRAGMENT_3545>;
type FragmentSelf3545 = NonNullable<FragmentResult3545>;

export type FragmentToken3545 =
  | FragmentSelf3545["__typename"]
  | FragmentSelf3545["typenameHint"] | FragmentToken3543 | FragmentToken3544;
