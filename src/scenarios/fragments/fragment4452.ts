import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4450 } from "./fragment4450";
import type { FragmentToken4451 } from "./fragment4451";

export const FRAGMENT_4452 = gql(`
  fragment Fragment4452 on Member251 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_251
    memberCount_251
    memberMetric_251
  }
`);

type FragmentResult4452 = ResultOf<typeof FRAGMENT_4452>;
type FragmentSelf4452 = NonNullable<FragmentResult4452>;

export type FragmentToken4452 =
  | FragmentSelf4452["__typename"]
  | FragmentSelf4452["typenameHint"] | FragmentToken4450 | FragmentToken4451;
