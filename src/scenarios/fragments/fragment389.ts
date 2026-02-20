import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken387 } from "./fragment387";
import type { FragmentToken388 } from "./fragment388";

export const FRAGMENT_389 = gql(`
  fragment Fragment389 on Member108 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_108
    memberCount_108
    memberMetric_108
  }
`);

type FragmentResult389 = ResultOf<typeof FRAGMENT_389>;
type FragmentSelf389 = NonNullable<FragmentResult389>;

export type FragmentToken389 =
  | FragmentSelf389["__typename"]
  | FragmentSelf389["typenameHint"] | FragmentToken387 | FragmentToken388;
