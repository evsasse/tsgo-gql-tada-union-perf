import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4012 } from "./fragment4012";
import type { FragmentToken4013 } from "./fragment4013";

export const FRAGMENT_4014 = gql(`
  fragment Fragment4014 on Member93 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_93
    memberCount_93
    memberMetric_93
  }
`);

type FragmentResult4014 = ResultOf<typeof FRAGMENT_4014>;
type FragmentSelf4014 = NonNullable<FragmentResult4014>;

export type FragmentToken4014 =
  | FragmentSelf4014["__typename"]
  | FragmentSelf4014["typenameHint"] | FragmentToken4012 | FragmentToken4013;
