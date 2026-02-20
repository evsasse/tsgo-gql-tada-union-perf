import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken607 } from "./fragment607";
import type { FragmentToken608 } from "./fragment608";

export const FRAGMENT_609 = gql(`
  fragment Fragment609 on Member48 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_48
    memberCount_48
    memberMetric_48
  }
`);

type FragmentResult609 = ResultOf<typeof FRAGMENT_609>;
type FragmentSelf609 = NonNullable<FragmentResult609>;

export type FragmentToken609 =
  | FragmentSelf609["__typename"]
  | FragmentSelf609["typenameHint"] | FragmentToken607 | FragmentToken608;
