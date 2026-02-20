import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4573 } from "./fragment4573";
import type { FragmentToken4574 } from "./fragment4574";

export const FRAGMENT_4575 = gql(`
  fragment Fragment4575 on Member94 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_94
    memberCount_94
    memberMetric_94
  }
`);

type FragmentResult4575 = ResultOf<typeof FRAGMENT_4575>;
type FragmentSelf4575 = NonNullable<FragmentResult4575>;

export type FragmentToken4575 =
  | FragmentSelf4575["__typename"]
  | FragmentSelf4575["typenameHint"] | FragmentToken4573 | FragmentToken4574;
