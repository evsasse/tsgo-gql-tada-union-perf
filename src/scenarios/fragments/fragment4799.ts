import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4797 } from "./fragment4797";
import type { FragmentToken4798 } from "./fragment4798";

export const FRAGMENT_4799 = gql(`
  fragment Fragment4799 on Member38 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_38
    memberCount_38
    memberMetric_38
  }
`);

type FragmentResult4799 = ResultOf<typeof FRAGMENT_4799>;
type FragmentSelf4799 = NonNullable<FragmentResult4799>;

export type FragmentToken4799 =
  | FragmentSelf4799["__typename"]
  | FragmentSelf4799["typenameHint"] | FragmentToken4797 | FragmentToken4798;
