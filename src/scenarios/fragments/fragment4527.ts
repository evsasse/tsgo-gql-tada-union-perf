import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4525 } from "./fragment4525";
import type { FragmentToken4526 } from "./fragment4526";

export const FRAGMENT_4527 = gql(`
  fragment Fragment4527 on Member46 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_46
    memberCount_46
    memberMetric_46
  }
`);

type FragmentResult4527 = ResultOf<typeof FRAGMENT_4527>;
type FragmentSelf4527 = NonNullable<FragmentResult4527>;

export type FragmentToken4527 =
  | FragmentSelf4527["__typename"]
  | FragmentSelf4527["typenameHint"] | FragmentToken4525 | FragmentToken4526;
