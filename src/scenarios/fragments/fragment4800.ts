import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4798 } from "./fragment4798";
import type { FragmentToken4799 } from "./fragment4799";

export const FRAGMENT_4800 = gql(`
  fragment Fragment4800 on Member39 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_39
    memberCount_39
    memberMetric_39
  }
`);

type FragmentResult4800 = ResultOf<typeof FRAGMENT_4800>;
type FragmentSelf4800 = NonNullable<FragmentResult4800>;

export type FragmentToken4800 =
  | FragmentSelf4800["__typename"]
  | FragmentSelf4800["typenameHint"] | FragmentToken4798 | FragmentToken4799;
