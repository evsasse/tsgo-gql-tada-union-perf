import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4700 } from "./fragment4700";
import type { FragmentToken4701 } from "./fragment4701";

export const FRAGMENT_4702 = gql(`
  fragment Fragment4702 on Member221 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_221
    memberCount_221
    memberMetric_221
  }
`);

type FragmentResult4702 = ResultOf<typeof FRAGMENT_4702>;
type FragmentSelf4702 = NonNullable<FragmentResult4702>;

export type FragmentToken4702 =
  | FragmentSelf4702["__typename"]
  | FragmentSelf4702["typenameHint"] | FragmentToken4700 | FragmentToken4701;
