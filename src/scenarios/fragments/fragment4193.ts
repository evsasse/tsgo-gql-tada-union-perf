import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4191 } from "./fragment4191";
import type { FragmentToken4192 } from "./fragment4192";

export const FRAGMENT_4193 = gql(`
  fragment Fragment4193 on Member272 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_272
    memberCount_272
    memberMetric_272
  }
`);

type FragmentResult4193 = ResultOf<typeof FRAGMENT_4193>;
type FragmentSelf4193 = NonNullable<FragmentResult4193>;

export type FragmentToken4193 =
  | FragmentSelf4193["__typename"]
  | FragmentSelf4193["typenameHint"] | FragmentToken4191 | FragmentToken4192;
