import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3503 } from "./fragment3503";
import type { FragmentToken3504 } from "./fragment3504";

export const FRAGMENT_3505 = gql(`
  fragment Fragment3505 on Member144 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_144
    memberCount_144
    memberMetric_144
  }
`);

type FragmentResult3505 = ResultOf<typeof FRAGMENT_3505>;
type FragmentSelf3505 = NonNullable<FragmentResult3505>;

export type FragmentToken3505 =
  | FragmentSelf3505["__typename"]
  | FragmentSelf3505["typenameHint"] | FragmentToken3503 | FragmentToken3504;
