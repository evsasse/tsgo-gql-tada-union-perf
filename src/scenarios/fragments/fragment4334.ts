import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4332 } from "./fragment4332";
import type { FragmentToken4333 } from "./fragment4333";

export const FRAGMENT_4334 = gql(`
  fragment Fragment4334 on Member133 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_133
    memberCount_133
    memberMetric_133
  }
`);

type FragmentResult4334 = ResultOf<typeof FRAGMENT_4334>;
type FragmentSelf4334 = NonNullable<FragmentResult4334>;

export type FragmentToken4334 =
  | FragmentSelf4334["__typename"]
  | FragmentSelf4334["typenameHint"] | FragmentToken4332 | FragmentToken4333;
