import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4192 } from "./fragment4192";
import type { FragmentToken4193 } from "./fragment4193";

export const FRAGMENT_4194 = gql(`
  fragment Fragment4194 on Member273 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_273
    memberCount_273
    memberMetric_273
  }
`);

type FragmentResult4194 = ResultOf<typeof FRAGMENT_4194>;
type FragmentSelf4194 = NonNullable<FragmentResult4194>;

export type FragmentToken4194 =
  | FragmentSelf4194["__typename"]
  | FragmentSelf4194["typenameHint"] | FragmentToken4192 | FragmentToken4193;
