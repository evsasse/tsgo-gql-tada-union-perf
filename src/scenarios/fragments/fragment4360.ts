import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4358 } from "./fragment4358";
import type { FragmentToken4359 } from "./fragment4359";

export const FRAGMENT_4360 = gql(`
  fragment Fragment4360 on Member159 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_159
    memberCount_159
    memberMetric_159
  }
`);

type FragmentResult4360 = ResultOf<typeof FRAGMENT_4360>;
type FragmentSelf4360 = NonNullable<FragmentResult4360>;

export type FragmentToken4360 =
  | FragmentSelf4360["__typename"]
  | FragmentSelf4360["typenameHint"] | FragmentToken4358 | FragmentToken4359;
