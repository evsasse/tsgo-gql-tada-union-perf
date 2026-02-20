import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4269 } from "./fragment4269";
import type { FragmentToken4270 } from "./fragment4270";

export const FRAGMENT_4271 = gql(`
  fragment Fragment4271 on Member70 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_70
    memberCount_70
    memberMetric_70
  }
`);

type FragmentResult4271 = ResultOf<typeof FRAGMENT_4271>;
type FragmentSelf4271 = NonNullable<FragmentResult4271>;

export type FragmentToken4271 =
  | FragmentSelf4271["__typename"]
  | FragmentSelf4271["typenameHint"] | FragmentToken4269 | FragmentToken4270;
