import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4276 } from "./fragment4276";
import type { FragmentToken4277 } from "./fragment4277";

export const FRAGMENT_4278 = gql(`
  fragment Fragment4278 on Member77 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_77
    memberCount_77
    memberMetric_77
  }
`);

type FragmentResult4278 = ResultOf<typeof FRAGMENT_4278>;
type FragmentSelf4278 = NonNullable<FragmentResult4278>;

export type FragmentToken4278 =
  | FragmentSelf4278["__typename"]
  | FragmentSelf4278["typenameHint"] | FragmentToken4276 | FragmentToken4277;
