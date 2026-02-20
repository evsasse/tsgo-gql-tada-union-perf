import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4372 } from "./fragment4372";
import type { FragmentToken4373 } from "./fragment4373";

export const FRAGMENT_4374 = gql(`
  fragment Fragment4374 on Member173 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_173
    memberCount_173
    memberMetric_173
  }
`);

type FragmentResult4374 = ResultOf<typeof FRAGMENT_4374>;
type FragmentSelf4374 = NonNullable<FragmentResult4374>;

export type FragmentToken4374 =
  | FragmentSelf4374["__typename"]
  | FragmentSelf4374["typenameHint"] | FragmentToken4372 | FragmentToken4373;
