import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken078 } from "./fragment078";
import type { FragmentToken079 } from "./fragment079";

export const FRAGMENT_080 = gql(`
  fragment Fragment080 on Member79 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_79
    memberCount_79
    memberMetric_79
  }
`);

type FragmentResult080 = ResultOf<typeof FRAGMENT_080>;
type FragmentSelf080 = NonNullable<FragmentResult080>;

export type FragmentToken080 =
  | FragmentSelf080["__typename"]
  | FragmentSelf080["typenameHint"] | FragmentToken078 | FragmentToken079;
