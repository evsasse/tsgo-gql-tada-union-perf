import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken375 } from "./fragment375";
import type { FragmentToken376 } from "./fragment376";

export const FRAGMENT_377 = gql(`
  fragment Fragment377 on Member96 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_96
    memberCount_96
    memberMetric_96
  }
`);

type FragmentResult377 = ResultOf<typeof FRAGMENT_377>;
type FragmentSelf377 = NonNullable<FragmentResult377>;

export type FragmentToken377 =
  | FragmentSelf377["__typename"]
  | FragmentSelf377["typenameHint"] | FragmentToken375 | FragmentToken376;
