import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken977 } from "./fragment977";
import type { FragmentToken978 } from "./fragment978";

export const FRAGMENT_979 = gql(`
  fragment Fragment979 on Member138 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_138
    memberCount_138
    memberMetric_138
  }
`);

type FragmentResult979 = ResultOf<typeof FRAGMENT_979>;
type FragmentSelf979 = NonNullable<FragmentResult979>;

export type FragmentToken979 =
  | FragmentSelf979["__typename"]
  | FragmentSelf979["typenameHint"] | FragmentToken977 | FragmentToken978;
