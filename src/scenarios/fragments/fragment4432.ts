import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4430 } from "./fragment4430";
import type { FragmentToken4431 } from "./fragment4431";

export const FRAGMENT_4432 = gql(`
  fragment Fragment4432 on Member231 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_231
    memberCount_231
    memberMetric_231
  }
`);

type FragmentResult4432 = ResultOf<typeof FRAGMENT_4432>;
type FragmentSelf4432 = NonNullable<FragmentResult4432>;

export type FragmentToken4432 =
  | FragmentSelf4432["__typename"]
  | FragmentSelf4432["typenameHint"] | FragmentToken4430 | FragmentToken4431;
