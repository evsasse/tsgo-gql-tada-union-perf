import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken278 } from "./fragment278";
import type { FragmentToken279 } from "./fragment279";

export const FRAGMENT_280 = gql(`
  fragment Fragment280 on Member279 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_279
    memberCount_279
    memberMetric_279
  }
`);

type FragmentResult280 = ResultOf<typeof FRAGMENT_280>;
type FragmentSelf280 = NonNullable<FragmentResult280>;

export type FragmentToken280 =
  | FragmentSelf280["__typename"]
  | FragmentSelf280["typenameHint"] | FragmentToken278 | FragmentToken279;
