import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4599 } from "./fragment4599";
import type { FragmentToken4600 } from "./fragment4600";

export const FRAGMENT_4601 = gql(`
  fragment Fragment4601 on Member120 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_120
    memberCount_120
    memberMetric_120
  }
`);

type FragmentResult4601 = ResultOf<typeof FRAGMENT_4601>;
type FragmentSelf4601 = NonNullable<FragmentResult4601>;

export type FragmentToken4601 =
  | FragmentSelf4601["__typename"]
  | FragmentSelf4601["typenameHint"] | FragmentToken4599 | FragmentToken4600;
