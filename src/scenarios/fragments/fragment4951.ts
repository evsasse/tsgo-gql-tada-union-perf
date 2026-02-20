import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4949 } from "./fragment4949";
import type { FragmentToken4950 } from "./fragment4950";

export const FRAGMENT_4951 = gql(`
  fragment Fragment4951 on Member190 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_190
    memberCount_190
    memberMetric_190
  }
`);

type FragmentResult4951 = ResultOf<typeof FRAGMENT_4951>;
type FragmentSelf4951 = NonNullable<FragmentResult4951>;

export type FragmentToken4951 =
  | FragmentSelf4951["__typename"]
  | FragmentSelf4951["typenameHint"] | FragmentToken4949 | FragmentToken4950;
