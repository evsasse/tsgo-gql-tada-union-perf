import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4091 } from "./fragment4091";
import type { FragmentToken4092 } from "./fragment4092";

export const FRAGMENT_4093 = gql(`
  fragment Fragment4093 on Member172 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_172
    memberCount_172
    memberMetric_172
  }
`);

type FragmentResult4093 = ResultOf<typeof FRAGMENT_4093>;
type FragmentSelf4093 = NonNullable<FragmentResult4093>;

export type FragmentToken4093 =
  | FragmentSelf4093["__typename"]
  | FragmentSelf4093["typenameHint"] | FragmentToken4091 | FragmentToken4092;
