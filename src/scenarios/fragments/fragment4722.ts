import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4720 } from "./fragment4720";
import type { FragmentToken4721 } from "./fragment4721";

export const FRAGMENT_4722 = gql(`
  fragment Fragment4722 on Member241 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_241
    memberCount_241
    memberMetric_241
  }
`);

type FragmentResult4722 = ResultOf<typeof FRAGMENT_4722>;
type FragmentSelf4722 = NonNullable<FragmentResult4722>;

export type FragmentToken4722 =
  | FragmentSelf4722["__typename"]
  | FragmentSelf4722["typenameHint"] | FragmentToken4720 | FragmentToken4721;
