import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4239 } from "./fragment4239";
import type { FragmentToken4240 } from "./fragment4240";

export const FRAGMENT_4241 = gql(`
  fragment Fragment4241 on Member40 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_40
    memberCount_40
    memberMetric_40
  }
`);

type FragmentResult4241 = ResultOf<typeof FRAGMENT_4241>;
type FragmentSelf4241 = NonNullable<FragmentResult4241>;

export type FragmentToken4241 =
  | FragmentSelf4241["__typename"]
  | FragmentSelf4241["typenameHint"] | FragmentToken4239 | FragmentToken4240;
