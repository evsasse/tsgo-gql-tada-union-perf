import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4313 } from "./fragment4313";
import type { FragmentToken4314 } from "./fragment4314";

export const FRAGMENT_4315 = gql(`
  fragment Fragment4315 on Member114 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_114
    memberCount_114
    memberMetric_114
  }
`);

type FragmentResult4315 = ResultOf<typeof FRAGMENT_4315>;
type FragmentSelf4315 = NonNullable<FragmentResult4315>;

export type FragmentToken4315 =
  | FragmentSelf4315["__typename"]
  | FragmentSelf4315["typenameHint"] | FragmentToken4313 | FragmentToken4314;
