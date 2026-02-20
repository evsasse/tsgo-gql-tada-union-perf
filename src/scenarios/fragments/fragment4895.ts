import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4893 } from "./fragment4893";
import type { FragmentToken4894 } from "./fragment4894";

export const FRAGMENT_4895 = gql(`
  fragment Fragment4895 on Member134 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_134
    memberCount_134
    memberMetric_134
  }
`);

type FragmentResult4895 = ResultOf<typeof FRAGMENT_4895>;
type FragmentSelf4895 = NonNullable<FragmentResult4895>;

export type FragmentToken4895 =
  | FragmentSelf4895["__typename"]
  | FragmentSelf4895["typenameHint"] | FragmentToken4893 | FragmentToken4894;
