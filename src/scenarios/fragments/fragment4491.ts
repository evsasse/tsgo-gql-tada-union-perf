import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4489 } from "./fragment4489";
import type { FragmentToken4490 } from "./fragment4490";

export const FRAGMENT_4491 = gql(`
  fragment Fragment4491 on Member10 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_10
    memberCount_10
    memberMetric_10
  }
`);

type FragmentResult4491 = ResultOf<typeof FRAGMENT_4491>;
type FragmentSelf4491 = NonNullable<FragmentResult4491>;

export type FragmentToken4491 =
  | FragmentSelf4491["__typename"]
  | FragmentSelf4491["typenameHint"] | FragmentToken4489 | FragmentToken4490;
