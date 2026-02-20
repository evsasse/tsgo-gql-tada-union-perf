import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4373 } from "./fragment4373";
import type { FragmentToken4374 } from "./fragment4374";

export const FRAGMENT_4375 = gql(`
  fragment Fragment4375 on Member174 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_174
    memberCount_174
    memberMetric_174
  }
`);

type FragmentResult4375 = ResultOf<typeof FRAGMENT_4375>;
type FragmentSelf4375 = NonNullable<FragmentResult4375>;

export type FragmentToken4375 =
  | FragmentSelf4375["__typename"]
  | FragmentSelf4375["typenameHint"] | FragmentToken4373 | FragmentToken4374;
