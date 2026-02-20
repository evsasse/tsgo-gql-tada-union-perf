import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4000 } from "./fragment4000";
import type { FragmentToken4001 } from "./fragment4001";

export const FRAGMENT_4002 = gql(`
  fragment Fragment4002 on Member81 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_81
    memberCount_81
    memberMetric_81
  }
`);

type FragmentResult4002 = ResultOf<typeof FRAGMENT_4002>;
type FragmentSelf4002 = NonNullable<FragmentResult4002>;

export type FragmentToken4002 =
  | FragmentSelf4002["__typename"]
  | FragmentSelf4002["typenameHint"] | FragmentToken4000 | FragmentToken4001;
