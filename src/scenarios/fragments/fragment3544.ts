import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3542 } from "./fragment3542";
import type { FragmentToken3543 } from "./fragment3543";

export const FRAGMENT_3544 = gql(`
  fragment Fragment3544 on Member183 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_183
    memberCount_183
    memberMetric_183
  }
`);

type FragmentResult3544 = ResultOf<typeof FRAGMENT_3544>;
type FragmentSelf3544 = NonNullable<FragmentResult3544>;

export type FragmentToken3544 =
  | FragmentSelf3544["__typename"]
  | FragmentSelf3544["typenameHint"] | FragmentToken3542 | FragmentToken3543;
