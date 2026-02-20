import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4004 } from "./fragment4004";
import type { FragmentToken4005 } from "./fragment4005";

export const FRAGMENT_4006 = gql(`
  fragment Fragment4006 on Member85 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_85
    memberCount_85
    memberMetric_85
  }
`);

type FragmentResult4006 = ResultOf<typeof FRAGMENT_4006>;
type FragmentSelf4006 = NonNullable<FragmentResult4006>;

export type FragmentToken4006 =
  | FragmentSelf4006["__typename"]
  | FragmentSelf4006["typenameHint"] | FragmentToken4004 | FragmentToken4005;
