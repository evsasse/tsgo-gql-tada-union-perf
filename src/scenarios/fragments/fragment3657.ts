import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3655 } from "./fragment3655";
import type { FragmentToken3656 } from "./fragment3656";

export const FRAGMENT_3657 = gql(`
  fragment Fragment3657 on Member16 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_16
    memberCount_16
    memberMetric_16
  }
`);

type FragmentResult3657 = ResultOf<typeof FRAGMENT_3657>;
type FragmentSelf3657 = NonNullable<FragmentResult3657>;

export type FragmentToken3657 =
  | FragmentSelf3657["__typename"]
  | FragmentSelf3657["typenameHint"] | FragmentToken3655 | FragmentToken3656;
