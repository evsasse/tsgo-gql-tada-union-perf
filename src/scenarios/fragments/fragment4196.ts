import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4194 } from "./fragment4194";
import type { FragmentToken4195 } from "./fragment4195";

export const FRAGMENT_4196 = gql(`
  fragment Fragment4196 on Member275 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_275
    memberCount_275
    memberMetric_275
  }
`);

type FragmentResult4196 = ResultOf<typeof FRAGMENT_4196>;
type FragmentSelf4196 = NonNullable<FragmentResult4196>;

export type FragmentToken4196 =
  | FragmentSelf4196["__typename"]
  | FragmentSelf4196["typenameHint"] | FragmentToken4194 | FragmentToken4195;
