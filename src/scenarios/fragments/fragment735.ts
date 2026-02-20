import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken733 } from "./fragment733";
import type { FragmentToken734 } from "./fragment734";

export const FRAGMENT_735 = gql(`
  fragment Fragment735 on Member174 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_174
    memberCount_174
    memberMetric_174
  }
`);

type FragmentResult735 = ResultOf<typeof FRAGMENT_735>;
type FragmentSelf735 = NonNullable<FragmentResult735>;

export type FragmentToken735 =
  | FragmentSelf735["__typename"]
  | FragmentSelf735["typenameHint"] | FragmentToken733 | FragmentToken734;
