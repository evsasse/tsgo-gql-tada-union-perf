import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4010 } from "./fragment4010";
import type { FragmentToken4011 } from "./fragment4011";

export const FRAGMENT_4012 = gql(`
  fragment Fragment4012 on Member91 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_91
    memberCount_91
    memberMetric_91
  }
`);

type FragmentResult4012 = ResultOf<typeof FRAGMENT_4012>;
type FragmentSelf4012 = NonNullable<FragmentResult4012>;

export type FragmentToken4012 =
  | FragmentSelf4012["__typename"]
  | FragmentSelf4012["typenameHint"] | FragmentToken4010 | FragmentToken4011;
