import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4571 } from "./fragment4571";
import type { FragmentToken4572 } from "./fragment4572";

export const FRAGMENT_4573 = gql(`
  fragment Fragment4573 on Member92 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_92
    memberCount_92
    memberMetric_92
  }
`);

type FragmentResult4573 = ResultOf<typeof FRAGMENT_4573>;
type FragmentSelf4573 = NonNullable<FragmentResult4573>;

export type FragmentToken4573 =
  | FragmentSelf4573["__typename"]
  | FragmentSelf4573["typenameHint"] | FragmentToken4571 | FragmentToken4572;
