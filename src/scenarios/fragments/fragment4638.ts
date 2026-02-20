import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4636 } from "./fragment4636";
import type { FragmentToken4637 } from "./fragment4637";

export const FRAGMENT_4638 = gql(`
  fragment Fragment4638 on Member157 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_157
    memberCount_157
    memberMetric_157
  }
`);

type FragmentResult4638 = ResultOf<typeof FRAGMENT_4638>;
type FragmentSelf4638 = NonNullable<FragmentResult4638>;

export type FragmentToken4638 =
  | FragmentSelf4638["__typename"]
  | FragmentSelf4638["typenameHint"] | FragmentToken4636 | FragmentToken4637;
