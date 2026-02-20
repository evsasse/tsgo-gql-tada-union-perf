import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4581 } from "./fragment4581";
import type { FragmentToken4582 } from "./fragment4582";

export const FRAGMENT_4583 = gql(`
  fragment Fragment4583 on Member102 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_102
    memberCount_102
    memberMetric_102
  }
`);

type FragmentResult4583 = ResultOf<typeof FRAGMENT_4583>;
type FragmentSelf4583 = NonNullable<FragmentResult4583>;

export type FragmentToken4583 =
  | FragmentSelf4583["__typename"]
  | FragmentSelf4583["typenameHint"] | FragmentToken4581 | FragmentToken4582;
