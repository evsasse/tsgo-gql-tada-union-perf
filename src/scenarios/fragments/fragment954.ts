import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken952 } from "./fragment952";
import type { FragmentToken953 } from "./fragment953";

export const FRAGMENT_954 = gql(`
  fragment Fragment954 on Member113 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_113
    memberCount_113
    memberMetric_113
  }
`);

type FragmentResult954 = ResultOf<typeof FRAGMENT_954>;
type FragmentSelf954 = NonNullable<FragmentResult954>;

export type FragmentToken954 =
  | FragmentSelf954["__typename"]
  | FragmentSelf954["typenameHint"] | FragmentToken952 | FragmentToken953;
