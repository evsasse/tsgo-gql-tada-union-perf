import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4246 } from "./fragment4246";
import type { FragmentToken4247 } from "./fragment4247";

export const FRAGMENT_4248 = gql(`
  fragment Fragment4248 on Member47 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_47
    memberCount_47
    memberMetric_47
  }
`);

type FragmentResult4248 = ResultOf<typeof FRAGMENT_4248>;
type FragmentSelf4248 = NonNullable<FragmentResult4248>;

export type FragmentToken4248 =
  | FragmentSelf4248["__typename"]
  | FragmentSelf4248["typenameHint"] | FragmentToken4246 | FragmentToken4247;
