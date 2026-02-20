import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken609 } from "./fragment609";
import type { FragmentToken610 } from "./fragment610";

export const FRAGMENT_611 = gql(`
  fragment Fragment611 on Member50 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_50
    memberCount_50
    memberMetric_50
  }
`);

type FragmentResult611 = ResultOf<typeof FRAGMENT_611>;
type FragmentSelf611 = NonNullable<FragmentResult611>;

export type FragmentToken611 =
  | FragmentSelf611["__typename"]
  | FragmentSelf611["typenameHint"] | FragmentToken609 | FragmentToken610;
