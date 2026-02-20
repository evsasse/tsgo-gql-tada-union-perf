import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4602 } from "./fragment4602";
import type { FragmentToken4603 } from "./fragment4603";

export const FRAGMENT_4604 = gql(`
  fragment Fragment4604 on Member123 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_123
    memberCount_123
    memberMetric_123
  }
`);

type FragmentResult4604 = ResultOf<typeof FRAGMENT_4604>;
type FragmentSelf4604 = NonNullable<FragmentResult4604>;

export type FragmentToken4604 =
  | FragmentSelf4604["__typename"]
  | FragmentSelf4604["typenameHint"] | FragmentToken4602 | FragmentToken4603;
