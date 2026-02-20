import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4248 } from "./fragment4248";
import type { FragmentToken4249 } from "./fragment4249";

export const FRAGMENT_4250 = gql(`
  fragment Fragment4250 on Member49 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_49
    memberCount_49
    memberMetric_49
  }
`);

type FragmentResult4250 = ResultOf<typeof FRAGMENT_4250>;
type FragmentSelf4250 = NonNullable<FragmentResult4250>;

export type FragmentToken4250 =
  | FragmentSelf4250["__typename"]
  | FragmentSelf4250["typenameHint"] | FragmentToken4248 | FragmentToken4249;
