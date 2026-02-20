import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4776 } from "./fragment4776";
import type { FragmentToken4777 } from "./fragment4777";

export const FRAGMENT_4778 = gql(`
  fragment Fragment4778 on Member17 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_17
    memberCount_17
    memberMetric_17
  }
`);

type FragmentResult4778 = ResultOf<typeof FRAGMENT_4778>;
type FragmentSelf4778 = NonNullable<FragmentResult4778>;

export type FragmentToken4778 =
  | FragmentSelf4778["__typename"]
  | FragmentSelf4778["typenameHint"] | FragmentToken4776 | FragmentToken4777;
