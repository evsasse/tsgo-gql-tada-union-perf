import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4283 } from "./fragment4283";
import type { FragmentToken4284 } from "./fragment4284";

export const FRAGMENT_4285 = gql(`
  fragment Fragment4285 on Member84 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_84
    memberCount_84
    memberMetric_84
  }
`);

type FragmentResult4285 = ResultOf<typeof FRAGMENT_4285>;
type FragmentSelf4285 = NonNullable<FragmentResult4285>;

export type FragmentToken4285 =
  | FragmentSelf4285["__typename"]
  | FragmentSelf4285["typenameHint"] | FragmentToken4283 | FragmentToken4284;
