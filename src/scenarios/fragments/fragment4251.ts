import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4249 } from "./fragment4249";
import type { FragmentToken4250 } from "./fragment4250";

export const FRAGMENT_4251 = gql(`
  fragment Fragment4251 on Member50 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_50
    memberCount_50
    memberMetric_50
  }
`);

type FragmentResult4251 = ResultOf<typeof FRAGMENT_4251>;
type FragmentSelf4251 = NonNullable<FragmentResult4251>;

export type FragmentToken4251 =
  | FragmentSelf4251["__typename"]
  | FragmentSelf4251["typenameHint"] | FragmentToken4249 | FragmentToken4250;
