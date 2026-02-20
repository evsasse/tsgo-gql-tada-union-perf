import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4756 } from "./fragment4756";
import type { FragmentToken4757 } from "./fragment4757";

export const FRAGMENT_4758 = gql(`
  fragment Fragment4758 on Member277 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_277
    memberCount_277
    memberMetric_277
  }
`);

type FragmentResult4758 = ResultOf<typeof FRAGMENT_4758>;
type FragmentSelf4758 = NonNullable<FragmentResult4758>;

export type FragmentToken4758 =
  | FragmentSelf4758["__typename"]
  | FragmentSelf4758["typenameHint"] | FragmentToken4756 | FragmentToken4757;
