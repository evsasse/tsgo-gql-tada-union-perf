import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken643 } from "./fragment643";
import type { FragmentToken644 } from "./fragment644";

export const FRAGMENT_645 = gql(`
  fragment Fragment645 on Member84 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_84
    memberCount_84
    memberMetric_84
  }
`);

type FragmentResult645 = ResultOf<typeof FRAGMENT_645>;
type FragmentSelf645 = NonNullable<FragmentResult645>;

export type FragmentToken645 =
  | FragmentSelf645["__typename"]
  | FragmentSelf645["typenameHint"] | FragmentToken643 | FragmentToken644;
