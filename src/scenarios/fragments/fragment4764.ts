import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4762 } from "./fragment4762";
import type { FragmentToken4763 } from "./fragment4763";

export const FRAGMENT_4764 = gql(`
  fragment Fragment4764 on Member03 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_03
    memberCount_03
    memberMetric_03
  }
`);

type FragmentResult4764 = ResultOf<typeof FRAGMENT_4764>;
type FragmentSelf4764 = NonNullable<FragmentResult4764>;

export type FragmentToken4764 =
  | FragmentSelf4764["__typename"]
  | FragmentSelf4764["typenameHint"] | FragmentToken4762 | FragmentToken4763;
