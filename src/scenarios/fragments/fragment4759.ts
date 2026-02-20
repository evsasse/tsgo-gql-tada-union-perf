import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4757 } from "./fragment4757";
import type { FragmentToken4758 } from "./fragment4758";

export const FRAGMENT_4759 = gql(`
  fragment Fragment4759 on Member278 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_278
    memberCount_278
    memberMetric_278
  }
`);

type FragmentResult4759 = ResultOf<typeof FRAGMENT_4759>;
type FragmentSelf4759 = NonNullable<FragmentResult4759>;

export type FragmentToken4759 =
  | FragmentSelf4759["__typename"]
  | FragmentSelf4759["typenameHint"] | FragmentToken4757 | FragmentToken4758;
