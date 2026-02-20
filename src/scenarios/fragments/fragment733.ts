import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken731 } from "./fragment731";
import type { FragmentToken732 } from "./fragment732";

export const FRAGMENT_733 = gql(`
  fragment Fragment733 on Member172 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_172
    memberCount_172
    memberMetric_172
  }
`);

type FragmentResult733 = ResultOf<typeof FRAGMENT_733>;
type FragmentSelf733 = NonNullable<FragmentResult733>;

export type FragmentToken733 =
  | FragmentSelf733["__typename"]
  | FragmentSelf733["typenameHint"] | FragmentToken731 | FragmentToken732;
