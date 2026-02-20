import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4237 } from "./fragment4237";
import type { FragmentToken4238 } from "./fragment4238";

export const FRAGMENT_4239 = gql(`
  fragment Fragment4239 on Member38 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_38
    memberCount_38
    memberMetric_38
  }
`);

type FragmentResult4239 = ResultOf<typeof FRAGMENT_4239>;
type FragmentSelf4239 = NonNullable<FragmentResult4239>;

export type FragmentToken4239 =
  | FragmentSelf4239["__typename"]
  | FragmentSelf4239["typenameHint"] | FragmentToken4237 | FragmentToken4238;
