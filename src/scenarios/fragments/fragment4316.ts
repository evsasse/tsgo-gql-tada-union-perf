import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4314 } from "./fragment4314";
import type { FragmentToken4315 } from "./fragment4315";

export const FRAGMENT_4316 = gql(`
  fragment Fragment4316 on Member115 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_115
    memberCount_115
    memberMetric_115
  }
`);

type FragmentResult4316 = ResultOf<typeof FRAGMENT_4316>;
type FragmentSelf4316 = NonNullable<FragmentResult4316>;

export type FragmentToken4316 =
  | FragmentSelf4316["__typename"]
  | FragmentSelf4316["typenameHint"] | FragmentToken4314 | FragmentToken4315;
