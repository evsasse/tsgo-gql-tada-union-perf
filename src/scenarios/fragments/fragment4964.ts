import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4962 } from "./fragment4962";
import type { FragmentToken4963 } from "./fragment4963";

export const FRAGMENT_4964 = gql(`
  fragment Fragment4964 on Member203 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_203
    memberCount_203
    memberMetric_203
  }
`);

type FragmentResult4964 = ResultOf<typeof FRAGMENT_4964>;
type FragmentSelf4964 = NonNullable<FragmentResult4964>;

export type FragmentToken4964 =
  | FragmentSelf4964["__typename"]
  | FragmentSelf4964["typenameHint"] | FragmentToken4962 | FragmentToken4963;
