import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3467 } from "./fragment3467";
import type { FragmentToken3468 } from "./fragment3468";

export const FRAGMENT_3469 = gql(`
  fragment Fragment3469 on Member108 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_108
    memberCount_108
    memberMetric_108
  }
`);

type FragmentResult3469 = ResultOf<typeof FRAGMENT_3469>;
type FragmentSelf3469 = NonNullable<FragmentResult3469>;

export type FragmentToken3469 =
  | FragmentSelf3469["__typename"]
  | FragmentSelf3469["typenameHint"] | FragmentToken3467 | FragmentToken3468;
