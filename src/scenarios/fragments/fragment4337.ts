import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4335 } from "./fragment4335";
import type { FragmentToken4336 } from "./fragment4336";

export const FRAGMENT_4337 = gql(`
  fragment Fragment4337 on Member136 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_136
    memberCount_136
    memberMetric_136
  }
`);

type FragmentResult4337 = ResultOf<typeof FRAGMENT_4337>;
type FragmentSelf4337 = NonNullable<FragmentResult4337>;

export type FragmentToken4337 =
  | FragmentSelf4337["__typename"]
  | FragmentSelf4337["typenameHint"] | FragmentToken4335 | FragmentToken4336;
