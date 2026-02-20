import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4152 } from "./fragment4152";
import type { FragmentToken4153 } from "./fragment4153";

export const FRAGMENT_4154 = gql(`
  fragment Fragment4154 on Member233 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_233
    memberCount_233
    memberMetric_233
  }
`);

type FragmentResult4154 = ResultOf<typeof FRAGMENT_4154>;
type FragmentSelf4154 = NonNullable<FragmentResult4154>;

export type FragmentToken4154 =
  | FragmentSelf4154["__typename"]
  | FragmentSelf4154["typenameHint"] | FragmentToken4152 | FragmentToken4153;
