import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4521 } from "./fragment4521";
import type { FragmentToken4522 } from "./fragment4522";

export const FRAGMENT_4523 = gql(`
  fragment Fragment4523 on Member42 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_42
    memberCount_42
    memberMetric_42
  }
`);

type FragmentResult4523 = ResultOf<typeof FRAGMENT_4523>;
type FragmentSelf4523 = NonNullable<FragmentResult4523>;

export type FragmentToken4523 =
  | FragmentSelf4523["__typename"]
  | FragmentSelf4523["typenameHint"] | FragmentToken4521 | FragmentToken4522;
