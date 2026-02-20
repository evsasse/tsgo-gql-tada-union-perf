import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4947 } from "./fragment4947";
import type { FragmentToken4948 } from "./fragment4948";

export const FRAGMENT_4949 = gql(`
  fragment Fragment4949 on Member188 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_188
    memberCount_188
    memberMetric_188
  }
`);

type FragmentResult4949 = ResultOf<typeof FRAGMENT_4949>;
type FragmentSelf4949 = NonNullable<FragmentResult4949>;

export type FragmentToken4949 =
  | FragmentSelf4949["__typename"]
  | FragmentSelf4949["typenameHint"] | FragmentToken4947 | FragmentToken4948;
