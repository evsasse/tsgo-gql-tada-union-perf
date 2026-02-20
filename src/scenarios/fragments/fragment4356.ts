import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4354 } from "./fragment4354";
import type { FragmentToken4355 } from "./fragment4355";

export const FRAGMENT_4356 = gql(`
  fragment Fragment4356 on Member155 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_155
    memberCount_155
    memberMetric_155
  }
`);

type FragmentResult4356 = ResultOf<typeof FRAGMENT_4356>;
type FragmentSelf4356 = NonNullable<FragmentResult4356>;

export type FragmentToken4356 =
  | FragmentSelf4356["__typename"]
  | FragmentSelf4356["typenameHint"] | FragmentToken4354 | FragmentToken4355;
