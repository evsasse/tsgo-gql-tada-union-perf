import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4950 } from "./fragment4950";
import type { FragmentToken4951 } from "./fragment4951";

export const FRAGMENT_4952 = gql(`
  fragment Fragment4952 on Member191 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_191
    memberCount_191
    memberMetric_191
  }
`);

type FragmentResult4952 = ResultOf<typeof FRAGMENT_4952>;
type FragmentSelf4952 = NonNullable<FragmentResult4952>;

export type FragmentToken4952 =
  | FragmentSelf4952["__typename"]
  | FragmentSelf4952["typenameHint"] | FragmentToken4950 | FragmentToken4951;
