import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4368 } from "./fragment4368";
import type { FragmentToken4369 } from "./fragment4369";

export const FRAGMENT_4370 = gql(`
  fragment Fragment4370 on Member169 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_169
    memberCount_169
    memberMetric_169
  }
`);

type FragmentResult4370 = ResultOf<typeof FRAGMENT_4370>;
type FragmentSelf4370 = NonNullable<FragmentResult4370>;

export type FragmentToken4370 =
  | FragmentSelf4370["__typename"]
  | FragmentSelf4370["typenameHint"] | FragmentToken4368 | FragmentToken4369;
