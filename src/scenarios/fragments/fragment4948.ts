import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4946 } from "./fragment4946";
import type { FragmentToken4947 } from "./fragment4947";

export const FRAGMENT_4948 = gql(`
  fragment Fragment4948 on Member187 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_187
    memberCount_187
    memberMetric_187
  }
`);

type FragmentResult4948 = ResultOf<typeof FRAGMENT_4948>;
type FragmentSelf4948 = NonNullable<FragmentResult4948>;

export type FragmentToken4948 =
  | FragmentSelf4948["__typename"]
  | FragmentSelf4948["typenameHint"] | FragmentToken4946 | FragmentToken4947;
