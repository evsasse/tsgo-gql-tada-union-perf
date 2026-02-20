import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3661 } from "./fragment3661";
import type { FragmentToken3662 } from "./fragment3662";

export const FRAGMENT_3663 = gql(`
  fragment Fragment3663 on Member22 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_22
    memberCount_22
    memberMetric_22
  }
`);

type FragmentResult3663 = ResultOf<typeof FRAGMENT_3663>;
type FragmentSelf3663 = NonNullable<FragmentResult3663>;

export type FragmentToken3663 =
  | FragmentSelf3663["__typename"]
  | FragmentSelf3663["typenameHint"] | FragmentToken3661 | FragmentToken3662;
