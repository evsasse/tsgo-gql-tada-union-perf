import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken978 } from "./fragment978";
import type { FragmentToken979 } from "./fragment979";

export const FRAGMENT_980 = gql(`
  fragment Fragment980 on Member139 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_139
    memberCount_139
    memberMetric_139
  }
`);

type FragmentResult980 = ResultOf<typeof FRAGMENT_980>;
type FragmentSelf980 = NonNullable<FragmentResult980>;

export type FragmentToken980 =
  | FragmentSelf980["__typename"]
  | FragmentSelf980["typenameHint"] | FragmentToken978 | FragmentToken979;
