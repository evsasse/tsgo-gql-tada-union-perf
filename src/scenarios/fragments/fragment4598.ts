import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4596 } from "./fragment4596";
import type { FragmentToken4597 } from "./fragment4597";

export const FRAGMENT_4598 = gql(`
  fragment Fragment4598 on Member117 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_117
    memberCount_117
    memberMetric_117
  }
`);

type FragmentResult4598 = ResultOf<typeof FRAGMENT_4598>;
type FragmentSelf4598 = NonNullable<FragmentResult4598>;

export type FragmentToken4598 =
  | FragmentSelf4598["__typename"]
  | FragmentSelf4598["typenameHint"] | FragmentToken4596 | FragmentToken4597;
