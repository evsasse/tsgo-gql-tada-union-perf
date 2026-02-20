import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4451 } from "./fragment4451";
import type { FragmentToken4452 } from "./fragment4452";

export const FRAGMENT_4453 = gql(`
  fragment Fragment4453 on Member252 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_252
    memberCount_252
    memberMetric_252
  }
`);

type FragmentResult4453 = ResultOf<typeof FRAGMENT_4453>;
type FragmentSelf4453 = NonNullable<FragmentResult4453>;

export type FragmentToken4453 =
  | FragmentSelf4453["__typename"]
  | FragmentSelf4453["typenameHint"] | FragmentToken4451 | FragmentToken4452;
