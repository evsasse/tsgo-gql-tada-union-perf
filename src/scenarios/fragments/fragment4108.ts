import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4106 } from "./fragment4106";
import type { FragmentToken4107 } from "./fragment4107";

export const FRAGMENT_4108 = gql(`
  fragment Fragment4108 on Member187 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_187
    memberCount_187
    memberMetric_187
  }
`);

type FragmentResult4108 = ResultOf<typeof FRAGMENT_4108>;
type FragmentSelf4108 = NonNullable<FragmentResult4108>;

export type FragmentToken4108 =
  | FragmentSelf4108["__typename"]
  | FragmentSelf4108["typenameHint"] | FragmentToken4106 | FragmentToken4107;
