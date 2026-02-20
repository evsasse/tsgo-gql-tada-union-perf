import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4758 } from "./fragment4758";
import type { FragmentToken4759 } from "./fragment4759";

export const FRAGMENT_4760 = gql(`
  fragment Fragment4760 on Member279 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_279
    memberCount_279
    memberMetric_279
  }
`);

type FragmentResult4760 = ResultOf<typeof FRAGMENT_4760>;
type FragmentSelf4760 = NonNullable<FragmentResult4760>;

export type FragmentToken4760 =
  | FragmentSelf4760["__typename"]
  | FragmentSelf4760["typenameHint"] | FragmentToken4758 | FragmentToken4759;
