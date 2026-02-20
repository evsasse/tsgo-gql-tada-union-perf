import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken679 } from "./fragment679";
import type { FragmentToken680 } from "./fragment680";

export const FRAGMENT_681 = gql(`
  fragment Fragment681 on Member120 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_120
    memberCount_120
    memberMetric_120
  }
`);

type FragmentResult681 = ResultOf<typeof FRAGMENT_681>;
type FragmentSelf681 = NonNullable<FragmentResult681>;

export type FragmentToken681 =
  | FragmentSelf681["__typename"]
  | FragmentSelf681["typenameHint"] | FragmentToken679 | FragmentToken680;
