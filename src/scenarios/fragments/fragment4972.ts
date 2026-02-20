import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4970 } from "./fragment4970";
import type { FragmentToken4971 } from "./fragment4971";

export const FRAGMENT_4972 = gql(`
  fragment Fragment4972 on Member211 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_211
    memberCount_211
    memberMetric_211
  }
`);

type FragmentResult4972 = ResultOf<typeof FRAGMENT_4972>;
type FragmentSelf4972 = NonNullable<FragmentResult4972>;

export type FragmentToken4972 =
  | FragmentSelf4972["__typename"]
  | FragmentSelf4972["typenameHint"] | FragmentToken4970 | FragmentToken4971;
