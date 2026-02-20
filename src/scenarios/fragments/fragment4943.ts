import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4941 } from "./fragment4941";
import type { FragmentToken4942 } from "./fragment4942";

export const FRAGMENT_4943 = gql(`
  fragment Fragment4943 on Member182 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_182
    memberCount_182
    memberMetric_182
  }
`);

type FragmentResult4943 = ResultOf<typeof FRAGMENT_4943>;
type FragmentSelf4943 = NonNullable<FragmentResult4943>;

export type FragmentToken4943 =
  | FragmentSelf4943["__typename"]
  | FragmentSelf4943["typenameHint"] | FragmentToken4941 | FragmentToken4942;
