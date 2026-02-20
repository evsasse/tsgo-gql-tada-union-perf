import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4050 } from "./fragment4050";
import type { FragmentToken4051 } from "./fragment4051";

export const FRAGMENT_4052 = gql(`
  fragment Fragment4052 on Member131 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_131
    memberCount_131
    memberMetric_131
  }
`);

type FragmentResult4052 = ResultOf<typeof FRAGMENT_4052>;
type FragmentSelf4052 = NonNullable<FragmentResult4052>;

export type FragmentToken4052 =
  | FragmentSelf4052["__typename"]
  | FragmentSelf4052["typenameHint"] | FragmentToken4050 | FragmentToken4051;
