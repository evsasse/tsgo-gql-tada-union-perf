import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4693 } from "./fragment4693";
import type { FragmentToken4694 } from "./fragment4694";

export const FRAGMENT_4695 = gql(`
  fragment Fragment4695 on Member214 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_214
    memberCount_214
    memberMetric_214
  }
`);

type FragmentResult4695 = ResultOf<typeof FRAGMENT_4695>;
type FragmentSelf4695 = NonNullable<FragmentResult4695>;

export type FragmentToken4695 =
  | FragmentSelf4695["__typename"]
  | FragmentSelf4695["typenameHint"] | FragmentToken4693 | FragmentToken4694;
