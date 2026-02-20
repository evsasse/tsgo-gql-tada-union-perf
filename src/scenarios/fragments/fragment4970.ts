import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4968 } from "./fragment4968";
import type { FragmentToken4969 } from "./fragment4969";

export const FRAGMENT_4970 = gql(`
  fragment Fragment4970 on Member209 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_209
    memberCount_209
    memberMetric_209
  }
`);

type FragmentResult4970 = ResultOf<typeof FRAGMENT_4970>;
type FragmentSelf4970 = NonNullable<FragmentResult4970>;

export type FragmentToken4970 =
  | FragmentSelf4970["__typename"]
  | FragmentSelf4970["typenameHint"] | FragmentToken4968 | FragmentToken4969;
