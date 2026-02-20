import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4661 } from "./fragment4661";
import type { FragmentToken4662 } from "./fragment4662";

export const FRAGMENT_4663 = gql(`
  fragment Fragment4663 on Member182 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_182
    memberCount_182
    memberMetric_182
  }
`);

type FragmentResult4663 = ResultOf<typeof FRAGMENT_4663>;
type FragmentSelf4663 = NonNullable<FragmentResult4663>;

export type FragmentToken4663 =
  | FragmentSelf4663["__typename"]
  | FragmentSelf4663["typenameHint"] | FragmentToken4661 | FragmentToken4662;
