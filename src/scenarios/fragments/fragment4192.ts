import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4190 } from "./fragment4190";
import type { FragmentToken4191 } from "./fragment4191";

export const FRAGMENT_4192 = gql(`
  fragment Fragment4192 on Member271 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_271
    memberCount_271
    memberMetric_271
  }
`);

type FragmentResult4192 = ResultOf<typeof FRAGMENT_4192>;
type FragmentSelf4192 = NonNullable<FragmentResult4192>;

export type FragmentToken4192 =
  | FragmentSelf4192["__typename"]
  | FragmentSelf4192["typenameHint"] | FragmentToken4190 | FragmentToken4191;
