import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4891 } from "./fragment4891";
import type { FragmentToken4892 } from "./fragment4892";

export const FRAGMENT_4893 = gql(`
  fragment Fragment4893 on Member132 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_132
    memberCount_132
    memberMetric_132
  }
`);

type FragmentResult4893 = ResultOf<typeof FRAGMENT_4893>;
type FragmentSelf4893 = NonNullable<FragmentResult4893>;

export type FragmentToken4893 =
  | FragmentSelf4893["__typename"]
  | FragmentSelf4893["typenameHint"] | FragmentToken4891 | FragmentToken4892;
