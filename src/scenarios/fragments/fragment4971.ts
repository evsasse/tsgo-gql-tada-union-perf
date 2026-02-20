import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4969 } from "./fragment4969";
import type { FragmentToken4970 } from "./fragment4970";

export const FRAGMENT_4971 = gql(`
  fragment Fragment4971 on Member210 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_210
    memberCount_210
    memberMetric_210
  }
`);

type FragmentResult4971 = ResultOf<typeof FRAGMENT_4971>;
type FragmentSelf4971 = NonNullable<FragmentResult4971>;

export type FragmentToken4971 =
  | FragmentSelf4971["__typename"]
  | FragmentSelf4971["typenameHint"] | FragmentToken4969 | FragmentToken4970;
