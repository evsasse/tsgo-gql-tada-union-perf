import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4887 } from "./fragment4887";
import type { FragmentToken4888 } from "./fragment4888";

export const FRAGMENT_4889 = gql(`
  fragment Fragment4889 on Member128 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_128
    memberCount_128
    memberMetric_128
  }
`);

type FragmentResult4889 = ResultOf<typeof FRAGMENT_4889>;
type FragmentSelf4889 = NonNullable<FragmentResult4889>;

export type FragmentToken4889 =
  | FragmentSelf4889["__typename"]
  | FragmentSelf4889["typenameHint"] | FragmentToken4887 | FragmentToken4888;
