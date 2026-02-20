import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3731 } from "./fragment3731";
import type { FragmentToken3732 } from "./fragment3732";

export const FRAGMENT_3733 = gql(`
  fragment Fragment3733 on Member92 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_92
    memberCount_92
    memberMetric_92
  }
`);

type FragmentResult3733 = ResultOf<typeof FRAGMENT_3733>;
type FragmentSelf3733 = NonNullable<FragmentResult3733>;

export type FragmentToken3733 =
  | FragmentSelf3733["__typename"]
  | FragmentSelf3733["typenameHint"] | FragmentToken3731 | FragmentToken3732;
