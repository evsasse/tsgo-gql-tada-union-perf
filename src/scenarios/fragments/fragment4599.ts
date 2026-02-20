import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4597 } from "./fragment4597";
import type { FragmentToken4598 } from "./fragment4598";

export const FRAGMENT_4599 = gql(`
  fragment Fragment4599 on Member118 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_118
    memberCount_118
    memberMetric_118
  }
`);

type FragmentResult4599 = ResultOf<typeof FRAGMENT_4599>;
type FragmentSelf4599 = NonNullable<FragmentResult4599>;

export type FragmentToken4599 =
  | FragmentSelf4599["__typename"]
  | FragmentSelf4599["typenameHint"] | FragmentToken4597 | FragmentToken4598;
