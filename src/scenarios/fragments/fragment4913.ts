import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4911 } from "./fragment4911";
import type { FragmentToken4912 } from "./fragment4912";

export const FRAGMENT_4913 = gql(`
  fragment Fragment4913 on Member152 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_152
    memberCount_152
    memberMetric_152
  }
`);

type FragmentResult4913 = ResultOf<typeof FRAGMENT_4913>;
type FragmentSelf4913 = NonNullable<FragmentResult4913>;

export type FragmentToken4913 =
  | FragmentSelf4913["__typename"]
  | FragmentSelf4913["typenameHint"] | FragmentToken4911 | FragmentToken4912;
