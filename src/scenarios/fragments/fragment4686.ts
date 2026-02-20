import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4684 } from "./fragment4684";
import type { FragmentToken4685 } from "./fragment4685";

export const FRAGMENT_4686 = gql(`
  fragment Fragment4686 on Member205 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_205
    memberCount_205
    memberMetric_205
  }
`);

type FragmentResult4686 = ResultOf<typeof FRAGMENT_4686>;
type FragmentSelf4686 = NonNullable<FragmentResult4686>;

export type FragmentToken4686 =
  | FragmentSelf4686["__typename"]
  | FragmentSelf4686["typenameHint"] | FragmentToken4684 | FragmentToken4685;
